function speak(text, lang) {
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = lang === 'ja' ? 'ja-JP' : 'nl-NL';
  utt.rate = 0.7;
  utt.pitch = 0.5;
  window.speechSynthesis.speak(utt);
}

export default function FlashCard({ word, flipped, isCorrect, userAnswer, instant, direction = 'nl-en', language = 'nl' }) {
  const isForward = direction === 'nl-en' || direction === 'ja-en';
  const langNames = language === 'ja'
    ? { target: 'Japanese', base: 'English' }
    : { target: 'Dutch', base: 'English' };

  const promptLang  = isForward ? langNames.target : langNames.base;
  const answerLang  = isForward ? langNames.base   : langNames.target;
  const promptWord  = isForward ? word.nl          : word.en;
  const answerWord  = isForward ? word.en          : word.nl;

  // For Japanese, show reading below the main word
  const showReading = language === 'ja' && word.reading;

  const speakBtn = (
    <button
      className="speak-btn"
      onClick={e => { e.stopPropagation(); speak(word.nl, language); }}
      title="Listen"
    >
      🔊
    </button>
  );

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
          {isForward && speakBtn}
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
          {!isForward && showReading && (
            <p style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>
              {word.reading} ({word.romaji})
            </p>
          )}
          {!isForward && speakBtn}
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
