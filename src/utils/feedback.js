/** Play a short "correct" chime using the Web Audio API */
export function playCorrect() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5

    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.value = freq;

      const start = ctx.currentTime + i * 0.1;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.25, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);

      osc.start(start);
      osc.stop(start + 0.3);
    });
  } catch {
    // Audio not supported — fail silently
  }
}

/** Vibrate the device on a wrong answer */
export function vibrateWrong() {
  try {
    if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
  } catch {
    // Vibration not supported — fail silently
  }
}
