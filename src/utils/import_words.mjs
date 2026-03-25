/**
 * Seed the Supabase `words` table from words.js (Dutch) and/or wordsJa.js (Japanese).
 *
 * Usage:
 *   node src/utils/import_words.mjs           # import both
 *   node src/utils/import_words.mjs nl        # Dutch only
 *   node src/utils/import_words.mjs ja        # Japanese only
 *
 * Requires SUPABASE_SERVICE_ROLE_KEY in .env.local.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync }  from 'fs';

const lang = process.argv[2]; // 'nl', 'ja', or undefined (both)

const env = Object.fromEntries(
  readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter(l => l.trim() && !l.startsWith('#') && l.includes('='))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);

const supabase = createClient(env.VITE_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

async function importDutch() {
  const { WORDS } = await import('../../src/data/words.js');
  const rawRows = WORDS.map(w => ({
    nl:       w.nl.replace(/^\d+\s+/, ''),
    en:       w.en,
    meaning:  w.meaning ?? null,
    sentence: w.example ? w.example.replace(/\*\*/g, '') : null,
    language: 'nl',
  }));

  const seen = new Map();
  for (const row of rawRows) seen.set(row.nl, row);
  const rows = [...seen.values()];

  console.log(`[NL] ${WORDS.length} entries → ${rows.length} unique words`);

  const { error } = await supabase.from('words').upsert(rows, { onConflict: 'nl,language' });
  if (error) { console.error('[NL] Import failed:', error.message); process.exit(1); }
  console.log(`[NL] Imported ${rows.length} words.`);
}

async function importJapanese() {
  const { WORDS_JA } = await import('../../src/data/wordsJa.js');
  const rawRows = WORDS_JA.map(w => ({
    nl:       w.word,
    en:       w.en,
    meaning:  w.meaning ?? null,
    sentence: w.sentence ?? null,
    reading:  w.reading ?? null,
    romaji:   w.romaji ?? null,
    language: 'ja',
  }));

  const seen = new Map();
  for (const row of rawRows) seen.set(row.nl, row);
  const rows = [...seen.values()];

  console.log(`[JA] ${WORDS_JA.length} entries → ${rows.length} unique words`);

  const { error } = await supabase.from('words').upsert(rows, { onConflict: 'nl,language' });
  if (error) { console.error('[JA] Import failed:', error.message); process.exit(1); }
  console.log(`[JA] Imported ${rows.length} words.`);
}

if (!lang || lang === 'nl') await importDutch();
if (!lang || lang === 'ja') await importJapanese();
