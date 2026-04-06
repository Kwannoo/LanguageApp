/**
 * Sync Supabase `words` table from CSV files.
 * Inserts new words, updates changed words, and deletes words removed from the CSV.
 *
 * Usage:
 *   node src/utils/sync_words.mjs              # sync all three languages
 *   node src/utils/sync_words.mjs nl           # Dutch only
 *   node src/utils/sync_words.mjs ja           # Japanese only
 *   node src/utils/sync_words.mjs es           # Spanish only
 *   node src/utils/sync_words.mjs --dry-run    # preview changes without applying
 *   node src/utils/sync_words.mjs nl --dry-run
 *
 * Requires SUPABASE_SERVICE_ROLE_KEY in .env.local.
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync }  from 'fs';

const args    = process.argv.slice(2);
const dryRun  = args.includes('--dry-run');
const lang    = args.find(a => !a.startsWith('--')); // 'nl', 'ja', 'es', or undefined

const env = Object.fromEntries(
  readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter(l => l.trim() && !l.startsWith('#') && l.includes('='))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);

const supabase = createClient(env.VITE_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

if (dryRun) console.log('--- DRY RUN — no changes will be made ---\n');

function parseCsv(filePath) {
  const lines = readFileSync(filePath, 'utf-8').trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  return lines.slice(1).filter(l => l.trim()).map(line => {
    // Handle quoted fields containing commas
    const parts = [];
    let current = '', inQuotes = false;
    for (const ch of line) {
      if (ch === '"') { inQuotes = !inQuotes; }
      else if (ch === ',' && !inQuotes) { parts.push(current.trim()); current = ''; }
      else { current += ch; }
    }
    parts.push(current.trim());
    return Object.fromEntries(headers.map((h, i) => [h, (parts[i] ?? '').replace(/^"|"$/g, '').trim()]));
  });
}

function rowFromCsv(r, langCode) {
  const key = r.word || r.nl;
  if (!key) return null;
  return {
    word:     key,
    en:       r.en       || null,
    meaning:  r.meaning  || null,
    sentence: r.sentence || null,
    reading:  r.reading  || null,
    romaji:   r.romaji   || null,
    synonyms: r.synonyms || null,
    language: langCode,
  };
}

function rowsEqual(a, b) {
  return ['en', 'meaning', 'sentence', 'reading', 'romaji', 'synonyms'].every(k => (a[k] ?? '') === (b[k] ?? ''));
}

async function fetchAll(langCode) {
  const PAGE = 1000;
  let all = [], from = 0;
  while (true) {
    const { data, error } = await supabase
      .from('words')
      .select('word, en, meaning, sentence, reading, romaji, synonyms, language')
      .eq('language', langCode)
      .range(from, from + PAGE - 1);
    if (error) { console.error(`Failed to fetch ${langCode}:`, error.message); process.exit(1); }
    if (data?.length) all = all.concat(data);
    if (!data || data.length < PAGE) break;
    from += PAGE;
  }
  return all;
}

async function sync(filePath, langCode) {
  console.log(`\n[${langCode.toUpperCase()}] Reading ${filePath}…`);

  // Parse CSV → deduplicated map
  const csvRows = new Map();
  for (const r of parseCsv(filePath)) {
    const row = rowFromCsv(r, langCode);
    if (row) csvRows.set(row.word, row);
  }
  console.log(`[${langCode.toUpperCase()}] ${csvRows.size} unique words in CSV`);

  // Fetch current DB state
  const dbRows = new Map();
  for (const r of await fetchAll(langCode)) dbRows.set(r.word, r);
  console.log(`[${langCode.toUpperCase()}] ${dbRows.size} words currently in database`);

  // Diff
  const toInsert = [];
  const toUpdate = [];
  const toDelete = [];

  for (const [word, csvRow] of csvRows) {
    if (!dbRows.has(word)) {
      toInsert.push(csvRow);
    } else if (!rowsEqual(csvRow, dbRows.get(word))) {
      toUpdate.push(csvRow);
    }
  }
  for (const word of dbRows.keys()) {
    if (!csvRows.has(word)) toDelete.push(word);
  }

  console.log(`[${langCode.toUpperCase()}] +${toInsert.length} to insert, ~${toUpdate.length} to update, -${toDelete.length} to delete`);

  if (dryRun) {
    if (toInsert.length) console.log(`  INSERT: ${toInsert.map(r => r.word).slice(0, 10).join(', ')}${toInsert.length > 10 ? ` … +${toInsert.length - 10} more` : ''}`);
    if (toUpdate.length) console.log(`  UPDATE: ${toUpdate.map(r => r.word).slice(0, 10).join(', ')}${toUpdate.length > 10 ? ` … +${toUpdate.length - 10} more` : ''}`);
    if (toDelete.length) console.log(`  DELETE: ${toDelete.slice(0, 10).join(', ')}${toDelete.length > 10 ? ` … +${toDelete.length - 10} more` : ''}`);
    return;
  }

  // Apply changes
  if (toInsert.length) {
    const { error } = await supabase.from('words').insert(toInsert);
    if (error) { console.error(`[${langCode.toUpperCase()}] Insert failed:`, error.message); process.exit(1); }
  }

  if (toUpdate.length) {
    const { error } = await supabase.from('words').upsert(toUpdate, { onConflict: 'word,language' });
    if (error) { console.error(`[${langCode.toUpperCase()}] Update failed:`, error.message); process.exit(1); }
  }

  if (toDelete.length) {
    const { error } = await supabase.from('words').delete().eq('language', langCode).in('word', toDelete);
    if (error) { console.error(`[${langCode.toUpperCase()}] Delete failed:`, error.message); process.exit(1); }
  }

  console.log(`[${langCode.toUpperCase()}] Done.`);
}

if (!lang || lang === 'nl') await sync('src/data/words_nl.csv', 'nl');
if (!lang || lang === 'ja') await sync('src/data/words_ja.csv', 'ja');
if (!lang || lang === 'es') await sync('src/data/words_es.csv', 'es');
