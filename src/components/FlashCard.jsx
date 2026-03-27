function speak(text, lang, voicePref) {
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  const langTag = lang === 'ja' ? 'ja-JP' : 'nl-NL';
  utt.lang = langTag;
  utt.rate = 0.7;

  // Try to find a matching voice for the gender preference
  const voices = window.speechSynthesis.getVoices();
  const langVoices = voices.filter(v => v.lang.startsWith(langTag.split('-')[0]));
  if (langVoices.length) {
    const preferred = langVoices.find(v =>
      voicePref === 'female'
        ? /female|zira|hazel|anna|haruka|nanami/i.test(v.name)
        : /male|david|mark|george|ichiro|takumi/i.test(v.name)
    );
    utt.voice = preferred || langVoices[0];
  }

  window.speechSynthesis.speak(utt);
}

export default function FlashCard({ word, flipped, isCorrect, instant, direction = 'nl-en', language = 'nl', voice = 'male', showSynonyms = false }) {
  const isForward = direction === 'nl-en' || direction === 'ja-en';
  const langNames = language === 'ja'
    ? { target: 'Japanese', base: 'English' }
    : { target: 'Dutch', base: 'English' };

  const promptLang  = isForward ? langNames.target : langNames.base;
  const answerLang  = isForward ? langNames.base   : langNames.target;
  const promptWord  = isForward ? word.nl          : word.en;
  const answerWord  = isForward ? word.en          : word.nl;

  const showReading = language === 'ja' && word.reading;

  const speakBtn = (
    <button
      className="speak-btn"
      onClick={e => { e.stopPropagation(); speak(word.nl, language, voice); }}
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
          {!isForward && speakBtn}
          {word.sentence && (
            <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, fontStyle: 'italic' }}>
              "{word.sentence}"
            </p>
          )}

        </div>

      </div>
    </div>
  );
}
