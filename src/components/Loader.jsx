import React, { useState, useEffect } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    let rafId;
    const tick = () => {
      setProgress(prev => {
        const next = Math.min(prev + Math.random() * 15 + 5, 100);
        if (next >= 100) {
          setTimeout(() => {
            setHiding(true);
            setTimeout(onComplete, 600);
          }, 500);
          return 100;
        }
        rafId = setTimeout(tick, 200);
        return next;
      });
    };
    const startTimer = setTimeout(tick, 300);
    return () => { clearTimeout(startTimer); clearTimeout(rafId); };
  }, [onComplete]);

  return (
    <div id="loader" className={hiding ? 'hidden' : ''}>
      <div className="loader-inner">
        <div className="loader-logo">TANTRSHELL</div>
        <div className="loader-bar">
          <div className="loader-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="loader-text mono">LOADING EXPERIENCE</div>
      </div>
    </div>
  );
}
