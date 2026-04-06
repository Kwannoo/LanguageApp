import { useEffect, useRef, useState } from 'react';

export default function PageTransition({ screenKey, children }) {
  const [displayedKey, setDisplayedKey] = useState(screenKey);
  const [phase, setPhase]               = useState('idle');
  const pendingRef                      = useRef(null);
  const timerRef                        = useRef(null);
  const prevChildrenRef                 = useRef(children);

  // Keep a ref of the previous children for exit animation
  if (screenKey === displayedKey) {
    prevChildrenRef.current = children;
  }

  useEffect(() => {
    if (screenKey === displayedKey) return;

    pendingRef.current = screenKey;
    setPhase('exiting');

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDisplayedKey(pendingRef.current);
      setPhase('entering');
      timerRef.current = setTimeout(() => setPhase('idle'), 180);
    }, 100);

    return () => clearTimeout(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenKey]);

  // If the key just changed but the effect hasn't run yet, treat this render
  // as already exiting so we don't flash the incoming screen for one frame.
  const transitioning = screenKey !== displayedKey;
  const effectivePhase = transitioning && phase !== 'exiting' ? 'exiting' : phase;
  const cls = effectivePhase === 'idle' ? '' : `pt-zoom-${effectivePhase}`;

  return (
    <div className={`pt-wrapper ${cls}`}>
      {effectivePhase === 'exiting' ? prevChildrenRef.current : children}
    </div>
  );
}
