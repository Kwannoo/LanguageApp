# Taalkaarten 🇳🇱

A minimalist Dutch–English flashcard app with a 5-minute daily session timer and streak tracking.

## How it works

1. A Dutch word appears on the card
2. You type the English translation and press Enter
3. The card flips to reveal the correct answer and meaning
4. Keep going until the 5-minute timer runs out
5. Each day you complete a session, your streak grows

---

## Getting started locally

**Requirements:** Node.js 18+ (https://nodejs.org)

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens at http://localhost:5173)
npm run dev
```

---

## Project structure

```
taalkaarten/
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── vite.config.js          # Build tool config
└── src/
    ├── main.jsx            # React root mount
    ├── App.jsx             # Screen routing + streak logic
    ├── App.css             # All styles (uses CSS variables for dark mode)
    ├── data/
    │   └── words.js        # Dutch-English word list  ← add your words here
    └── components/
        ├── FlashCard.jsx   # Card with 3D flip animation
        ├── HomeScreen.jsx  # Landing screen
        ├── Session.jsx     # Active session (timer + input)
        └── Complete.jsx    # Post-session results screen
```

---

## Adding vocabulary

Open `src/data/words.js` and add entries to the `WORDS` array:

```js
{ nl: 'appel', en: 'apple', meaning: 'A round fruit with red or green skin' },
```

That's all — the app shuffles the full list and cycles through it.

---

## Supporting other language pairs

The app is wired for Dutch → English but nothing is hardcoded except the `words.js` data file. To switch to Spanish → English (for example):

1. Replace the entries in `words.js` (rename `nl` to `es` or keep as-is — the field name isn't used elsewhere)
2. Update the card label in `FlashCard.jsx`:  `<p className="word-label">Spanish word</p>`
3. Update the app title and `<title>` in `index.html`

---

## Deployment options

### Option 1 — Vercel (easiest, free)
Vercel is the simplest path: connect your GitHub repo and it deploys automatically on every push.

```bash
npm install -g vercel
vercel        # follow the prompts — done in ~2 minutes
```

Or go to https://vercel.com, click "Add New Project", import your GitHub repo, and hit Deploy. No config needed.

### Option 2 — Netlify (also free)
```bash
npm run build          # creates the dist/ folder
# Then drag-and-drop the dist/ folder at https://app.netlify.com/drop
```

Or connect your GitHub repo at https://netlify.com for automatic deployments.
Build command: `npm run build`  |  Publish directory: `dist`

### Option 3 — GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://<your-username>.github.io/<repo-name>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

In `vite.config.js` add: `base: '/<repo-name>/'`

Then run: `npm run deploy`

### Option 4 — Self-hosted VPS (Hetzner, DigitalOcean, etc.)
```bash
npm run build                   # build static files
# Upload the dist/ folder to your server
# Serve with nginx or caddy (static file serving)
```

---

## Extending the app

Ideas for future features:

- **Multiple languages** — add a language selector on the home screen
- **Spaced repetition** — track which words you get wrong and show them more often
- **Audio** — use the Web Speech API to pronounce the Dutch word
- **Progress history** — store session scores over time in localStorage
- **Custom word lists** — let users paste in their own vocabulary
- **Difficulty levels** — beginner / intermediate / advanced word sets
