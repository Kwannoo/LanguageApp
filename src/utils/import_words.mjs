/**
 * One-time script to seed the Supabase `words` table from words.js.
 *
 * Usage:
 *   node scripts/import_words.mjs
 *
 * Requires SUPABASE_SERVICE_ROLE_KEY in .env.local (in addition to the
 * existing VITE_SUPABASE_URL). Find it in Supabase → Settings → API.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync }  from 'fs';

// Parse .env.local manually (no dotenv dependency needed)
const env = Object.fromEntries(
  readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter(l => l.trim() && !l.startsWith('#') && l.includes('='))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);

const { WORDS } = await import('../src/data/words.js');

const supabase = createClient(
  env.VITE_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY,
);

const rawRows = WORDS.map(w => ({
  nl:       w.nl.replace(/^\d+\s+/, ''),              // strip accidental "1 " prefixes
  en:       w.en,
  meaning:  w.meaning ?? null,
  sentence: w.example ? w.example.replace(/\*\*/g, '') : null,
}));

// Deduplicate by nl — PostgreSQL upsert cannot affect the same row twice in one batch
const seen = new Map();
for (const row of rawRows) seen.set(row.nl, row);
const rows = [...seen.values()];

console.log(`${WORDS.length} entries → ${rows.length} unique words (${WORDS.length - rows.length} duplicates removed)`);

const { error } = await supabase
  .from('words')
  .upsert(rows, { onConflict: 'nl' });

if (error) {
  console.error('Import failed:', error.message);
  process.exit(1);
}
console.log(`Imported ${rows.length} words.`);
