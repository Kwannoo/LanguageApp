/**
 * FlashCard
 * Props:
 *   word       – { nl, en, meaning }  – current word object
 *   flipped    – boolean              – whether to show back face
 *   isCorrect  – boolean | null       – result of the last answer
 *   userAnswer – string               – what the user typed (shown on incorrect)
 *   instant    – boolean              – skip flip transition during card reset
 */
function speak(text) {
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'nl-NL';
  utt.rate = 0.7;
  utt.pitch = 0.5;
  window.speechSynthesis.speak(utt);
}

export default function FlashCard({ word, flipped, isCorrect, userAnswer, instant, direction = 'nl-en' }) {
  const isNlEn = direction === 'nl-en';
  const promptLang  = isNlEn ? 'Dutch'   : 'English';
  const answerLang  = isNlEn ? 'English'  : 'Dutch';
  const promptWord  = isNlEn ? word.nl    : word.en;
  const answerWord  = isNlEn ? word.en    : word.nl;

  return (
    <div className="card-scene">
      <div className={`card-3d${flipped ? ' flipped' : ''}${instant ? ' instant' : ''}`}>

        {/* ── Front face: prompt word ── */}
        <div className="card-face">
          <p className="word-label">{promptLang} word</p>
          <p className="word-dutch">{promptWord}</p>
          {isNlEn && (
            <button
              className="speak-btn"
              onClick={e => { e.stopPropagation(); speak(word.nl); }}
              title="Listen"
            >
              🔊
            </button>
          )}
        </div>

        {/* ── Back face: answer + meaning ── */}
        <div className="card-face card-back">
          {isCorrect !== null && (
            <span className={`result-badge ${isCorrect ? 'badge-correct' : 'badge-incorrect'}`}>
              {isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </span>
          )}
          <p className="word-label">{answerLang}</p>
          <p className="word-english">{answerWord}</p>
          <p className="word-meaning">{word.meaning}</p>
          {!isNlEn && (
            <button
              className="speak-btn"
              onClick={e => { e.stopPropagation(); speak(word.nl); }}
              title="Listen"
            >
              🔊
            </button>
          )}
          {word.sentence && (
            <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, fontStyle: 'italic' }}>
              "{word.sentence}"
            </p>
          )}
          {isCorrect === false && userAnswer && (
            <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8 }}>
              You typed: <em>{userAnswer}</em>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
