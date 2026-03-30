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
      timerRef.current = setTimeout(() => setPhase('idle'), 400);
    }, 220);

    return () => clearTimeout(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenKey]);

  const cls = phase === 'idle' ? '' : `pt-zoom-${phase}`;

  return (
    <div className={`pt-wrapper ${cls}`}>
      {phase === 'exiting' ? prevChildrenRef.current : children}
    </div>
  );
}
