function getWordType(en) {
  if (!en) return null;
  const e = en.trim().toLowerCase();
  if (e.startsWith('to ')) return 'verb';
  if (e === 'the' || e === 'a/an' || e === 'a' || e === 'an') return 'article';
  return null;
}

export default function FlashCard({ word, flipped, isCorrect, instant, direction = 'nl-en', language = 'nl', showSynonyms = false }) {
  const isForward = direction === 'nl-en' || direction === 'ja-en' || direction === 'es-en';
  const langNames = language === 'ja'
    ? { target: 'Japanese', base: 'English' }
    : language === 'es'
      ? { target: 'Spanish', base: 'English' }
      : { target: 'Dutch', base: 'English' };

  const promptLang  = isForward ? langNames.target : langNames.base;
  const answerLang  = isForward ? langNames.base   : langNames.target;
  const promptWord  = isForward ? word.word        : word.en;
  const answerWord  = isForward ? word.en          : word.word;

  const showReading = language === 'ja' && word.reading;

  return (
    <div className="card-scene">
      <div className={`card-3d${flipped ? ' flipped' : ''}${instant ? ' instant' : ''}`}>

        {/* ── Front face: prompt word ── */}
        <div className="card-face">
          <p className="word-label">{promptLang} word</p>
          <p className="word-dutch">{promptWord}</p>
          {isForward && showReading && (
            <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>
              {word.reading} ({word.romaji})
            </p>
          )}
          {isForward && getWordType(word.en) && (
            <span style={{
              display: 'inline-block',
              marginTop: 8,
              padding: '3px 10px',
              borderRadius: 99,
              fontSize: 11,
              fontWeight: 700,
              background: 'var(--amber-light)',
              color: 'var(--amber-dark)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              {getWordType(word.en)}
            </span>
          )}
        </div>

        {/* ── Back face: answer ── */}
        <div className="card-face card-back">
          {isCorrect === true && (
            <span className="result-badge badge-correct">✓ Correct</span>
          )}
          {isCorrect === false && (
            <span className="result-badge badge-incorrect">✗ Incorrect</span>
          )}

          {/* Original prompt word */}
          <p className="word-label">{promptLang}</p>
          <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{promptWord}</p>
          {showReading && (
            <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 6 }}>
              {word.reading} ({word.romaji})
            </p>
          )}

          <p className="word-label">{answerLang}</p>
          <p className="word-english">{answerWord}</p>
          {showSynonyms && word.synonyms && (
            <p style={{ fontSize: 12, color: 'var(--hint)', marginTop: 2 }}>
              Also: {word.synonyms}
            </p>
          )}
          {!isForward && showReading && (
            <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>
              {word.reading} ({word.romaji})
            </p>
          )}
          {word.sentence && (
            <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, fontStyle: 'italic' }}>
              "{word.sentence.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
                part.startsWith('**') && part.endsWith('**')
                  ? <strong key={i} style={{ color: 'var(--text)', fontStyle: 'normal' }}>{part.slice(2, -2)}</strong>
                  : part
              )}"
            </p>
          )}

        </div>

      </div>
    </div>
  );
}
