import { useEffect, useRef } from 'react';

const MathCanvas = ({ variant = 'lissajous', opacity = 0.15 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Color palette
    const colors = {
      orange: `rgba(255,150,68,${opacity})`,
      peach: `rgba(255,206,153,${opacity * 0.7})`,
      brown: `rgba(86,47,0,${opacity * 0.4})`,
    };

    // Lissajous curves
    const drawLissajous = () => {
      const cx = W() / 2;
      const cy = H() / 2;
      const curves = [
        { a: 3, b: 2, d: Math.PI / 4, A: Math.min(W(), H()) * 0.35, color: colors.orange },
        { a: 5, b: 4, d: Math.PI / 3, A: Math.min(W(), H()) * 0.28, color: colors.peach },
        { a: 7, b: 6, d: Math.PI / 6, A: Math.min(W(), H()) * 0.22, color: colors.brown },
      ];

      curves.forEach(({ a, b, d, A, color }) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        for (let t = 0; t <= Math.PI * 2; t += 0.01) {
          const x = cx + A * Math.sin(a * (t + time * 0.3) + d);
          const y = cy + A * Math.sin(b * (t + time * 0.3));
          t === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
    };

    // Fourier series wave
    const drawFourier = () => {
      const waves = [
        { freq: 1, amp: H() * 0.08, color: colors.orange },
        { freq: 2, amp: H() * 0.05, color: colors.peach },
        { freq: 3, amp: H() * 0.03, color: colors.brown },
      ];

      waves.forEach(({ freq, amp, color }, idx) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        for (let x = 0; x <= W(); x += 2) {
          let y = H() / 2;
          for (let n = 1; n <= 5; n++) {
            y += (amp / n) * Math.sin(2 * Math.PI * n * freq * (x / W()) + time * (0.5 + idx * 0.2));
          }
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
    };

    // Fibonacci spiral particles
    const drawFibonacci = () => {
      const cx = W() / 2;
      const cy = H() / 2;
      const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
      const n = 200;
      
      for (let i = 0; i < n; i++) {
        const angle = i * 2.399963 + time * 0.1; // Golden angle
        const r = Math.sqrt(i) * Math.min(W(), H()) * 0.025;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        const size = 1 + (i / n) * 3;
        const alpha = (1 - i / n) * opacity * 2;
        
        ctx.beginPath();
        ctx.fillStyle = i % 3 === 0 ? colors.orange : i % 3 === 1 ? colors.peach : colors.brown;
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Perlin-like flow field
    const drawFlowField = () => {
      const gridSize = 30;
      const cols = Math.ceil(W() / gridSize) + 1;
      const rows = Math.ceil(H() / gridSize) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          const angle = Math.sin(x * 0.005 + time * 0.3) * Math.cos(y * 0.005 + time * 0.2) * Math.PI * 2;
          const len = gridSize * 0.5;

          ctx.beginPath();
          ctx.strokeStyle = (i + j) % 3 === 0 ? colors.orange : (i + j) % 3 === 1 ? colors.peach : colors.brown;
          ctx.lineWidth = 1;
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
          ctx.stroke();
        }
      }
    };

    // Sine wave mesh
    const drawSineMesh = () => {
      const spacing = 40;
      // Horizontal waves
      for (let y = 0; y < H(); y += spacing) {
        ctx.beginPath();
        ctx.strokeStyle = colors.peach;
        ctx.lineWidth = 0.8;
        for (let x = 0; x <= W(); x += 3) {
          const offsetY = Math.sin(x * 0.01 + time * 0.5 + y * 0.02) * 15;
          x === 0 ? ctx.moveTo(x, y + offsetY) : ctx.lineTo(x, y + offsetY);
        }
        ctx.stroke();
      }
      // Vertical waves
      for (let x = 0; x < W(); x += spacing) {
        ctx.beginPath();
        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 0.5;
        for (let y = 0; y <= H(); y += 3) {
          const offsetX = Math.sin(y * 0.01 + time * 0.4 + x * 0.02) * 12;
          y === 0 ? ctx.moveTo(x + offsetX, y) : ctx.lineTo(x + offsetX, y);
        }
        ctx.stroke();
      }
    };

    const drawVariant = {
      lissajous: drawLissajous,
      fourier: drawFourier,
      fibonacci: drawFibonacci,
      flowfield: drawFlowField,
      sinemesh: drawSineMesh,
    };

    const animate = () => {
      ctx.clearRect(0, 0, W(), H());
      const drawFn = drawVariant[variant] || drawLissajous;
      drawFn();
      time += 0.016;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [variant, opacity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default MathCanvas;
