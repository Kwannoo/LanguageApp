import { useEffect, useRef, useState } from 'react';

export default function PageTransition({ screenKey, children }) {
  const [displayed, setDisplayed] = useState({ key: screenKey, node: children });
  const [phase, setPhase]         = useState('idle');
  const pendingRef                = useRef(null);
  const timerRef                  = useRef(null);

  useEffect(() => {
    if (screenKey === displayed.key) {
      setDisplayed(d => ({ ...d, node: children }));
      return;
    }

    pendingRef.current = { key: screenKey, node: children };
    setPhase('exiting');

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDisplayed(pendingRef.current);
      setPhase('entering');
      timerRef.current = setTimeout(() => setPhase('idle'), 400);
    }, 220);

    return () => clearTimeout(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenKey]);

  const cls = phase === 'idle' ? '' : `pt-zoom-${phase}`;

  return (
    <div className={`pt-wrapper ${cls}`}>
      {displayed.node}
    </div>
  );
}
