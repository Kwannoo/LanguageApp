/**
 * Seed the Supabase `words` table from CSV files.
 *
 * Usage:
 *   node src/utils/import_words.mjs           # import all three
 *   node src/utils/import_words.mjs nl        # Dutch only
 *   node src/utils/import_words.mjs ja        # Japanese only
 *   node src/utils/import_words.mjs es        # Spanish only
 *
 * Requires SUPABASE_SERVICE_ROLE_KEY in .env.local.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync }  from 'fs';

const lang = process.argv[2]; // 'nl', 'ja', 'es', or undefined (all)

const env = Object.fromEntries(
  readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter(l => l.trim() && !l.startsWith('#') && l.includes('='))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);

const supabase = createClient(env.VITE_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

function parseCsv(filePath) {
  const lines = readFileSync(filePath, 'utf-8').trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  return lines.slice(1).filter(l => l.trim()).map(line => {
    const parts = line.split(',');
    return Object.fromEntries(headers.map((h, i) => [h, (parts[i] ?? '').trim()]));
  });
}

async function importCsv(filePath, langCode) {
  const raw = parseCsv(filePath);
  const seen = new Map();
  for (const r of raw) {
    const key = r.word || r.nl;
    if (!key) continue;
    seen.set(key, {
      word:       key,
      en:       r.en || null,
      meaning:  r.meaning || null,
      sentence: r.sentence || null,
      reading:  r.reading || null,
      romaji:   r.romaji || null,
      synonyms: r.synonyms || null,
      language: langCode,
    });
  }
  const rows = [...seen.values()];
  console.log(`[${langCode.toUpperCase()}] ${raw.length} entries → ${rows.length} unique words`);

  const { error } = await supabase.from('words').upsert(rows, { onConflict: 'word,language' });
  if (error) { console.error(`[${langCode.toUpperCase()}] Import failed:`, error.message); process.exit(1); }
  console.log(`[${langCode.toUpperCase()}] Imported ${rows.length} words.`);
}

if (!lang || lang === 'nl') await importCsv('src/data/words_nl.csv', 'nl');
if (!lang || lang === 'ja') await importCsv('src/data/words_ja.csv', 'ja');
if (!lang || lang === 'es') await importCsv('src/data/words_es.csv', 'es');
