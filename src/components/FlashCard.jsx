import { useRef, useEffect } from 'react';

/**
 * FlashCard
 * Props:
 *   word       – { nl, en, meaning }  – current word object
 *   flipped    – boolean              – whether to show back face
 *   isCorrect  – boolean | null       – result of the last answer
 *   userAnswer – string               – what the user typed (shown on incorrect)
 */
export default function FlashCard({ word, flipped, isCorrect, userAnswer }) {
  return (
    <div className="card-scene">
      <div className={`card-3d ${flipped ? 'flipped' : ''}`}>

        {/* ── Front face: Dutch word ── */}
        <div className="card-face">
          <p className="word-label">Dutch word</p>
          <p className="word-dutch">{word.nl}</p>
          <p style={{ fontSize: 11, color: 'var(--hint)', marginTop: '0.75rem' }}>
            type the English translation below
          </p>
        </div>

        {/* ── Back face: English answer + meaning ── */}
        <div className="card-face card-back">
          {isCorrect !== null && (
            <span className={`result-badge ${isCorrect ? 'badge-correct' : 'badge-incorrect'}`}>
              {isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </span>
          )}
          <p className="word-label">English</p>
          <p className="word-english">{word.en}</p>
          <p className="word-meaning">{word.meaning}</p>
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
