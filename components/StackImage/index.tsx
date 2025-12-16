//@ts-nocheck
import React, { CSSProperties, useEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';

export interface StackImageProps {
  src: string;
  name: string; // used for alt text
  className?: string;
  rounded?: boolean;
  // Visual tuning (sane defaults)
  columns?: number; // number of vertical slices
  blockHeight?: number; // px height of visible blocks
  gap?: number; // px gap between blocks
  speedMin?: number; // seconds
  speedMax?: number; // seconds
  blur?: number; // px blur for background image
}

// Deterministic pseudo-random generator for consistent SSR/CSR
const prng = (seed: number) => {
  const x = Math.sin(seed * 9999.1337) * 43758.5453;
  return x - Math.floor(x);
};

const StackImage: React.FC<StackImageProps> = ({
  src,
  name,
  className,
  rounded = true,
  columns = 24,
  blockHeight = 12,
  gap = 8,
  speedMin = 3,
  speedMax = 6,
  blur = 36,
}) => {
  const colArray = useMemo(() => Array.from({ length: Math.max(2, columns) }), [columns]);
  const colWidth = 100 / Math.max(2, columns);
  const periodPx = blockHeight + gap;

  // Refs for per-column layers to drive smooth RAF animation
  const layerRefsA = useRef<HTMLDivElement[]>([]);
  const layerRefsB = useRef<HTMLDivElement[]>([]);
  const setLayerRefA = (i: number) => (el: HTMLDivElement | null) => {
    if (el) layerRefsA.current[i] = el;
  };
  const setLayerRefB = (i: number) => (el: HTMLDivElement | null) => {
    if (el) layerRefsB.current[i] = el;
  };

  // Precompute deterministic per-column wave params
  const waveParams = useMemo(() =>
    colArray.map((_, i) => {
      const r = prng(i + 1);
      return {
        phase: r * Math.PI * 2,
        waveSpeed: 0.6 + r * 0.8, // Hz-like factor for sin()
        scrollSpeed: 18 + r * 18, // px/sec downward drift
        amplitude: Math.max(8, Math.min(24, periodPx * (0.35 + r * 0.25))),
      };
    })
  , [colArray.length, periodPx]);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = () => {
      const now = performance.now();
      const t = (now - start) / 1000; // seconds

      for (let i = 0; i < waveParams.length; i++) {
        const p = waveParams[i];
        const base = (t * p.scrollSpeed) % periodPx; // linear scroll
        const wave = Math.sin(t * p.waveSpeed + p.phase) * p.amplitude;
        // Primary layer offset
        const offA = (base + wave) % periodPx;
        // Secondary layer half-cycle offset to overlap
        const offB = (base + wave + periodPx / 2) % periodPx;

        const a = layerRefsA.current[i];
        const b = layerRefsB.current[i];
        if (a) {
          (a.style as any).webkitMaskPosition = `0px ${offA}px`;
          a.style.maskPosition = `0px ${offA}px`;
        }
        if (b) {
          (b.style as any).webkitMaskPosition = `0px ${offB}px`;
          b.style.maskPosition = `0px ${offB}px`;
        }
      }

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [waveParams, periodPx]);

  return (
    <div
      className={classNames('relative overflow-hidden bg-[#0B0B0C]', className, {
        'rounded-md': rounded,
      })}
      aria-label={name}
    >
      {/* Blurred background (gaussian feel) */}
      <img
        src={src}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: `blur(${blur}px) brightness(0.75)`, transform: 'scale(1.08)' }}
        aria-hidden
      />

      {/* Column mosaic revealing the sharp image with animated block masks */}
      <div className="relative z-10 flex h-full w-full">
        {colArray.map((_, i) => {
          const xPos = `${(i * colWidth).toFixed(3)}%`;
          const mask = `repeating-linear-gradient(to bottom, rgba(255,255,255,1) 0 ${blockHeight}px, transparent ${blockHeight}px ${periodPx}px)`;

          const base: CSSProperties = {
            position: 'relative',
            width: `${colWidth}%`,
            height: '100%',
          };

          const layerStyle = (): CSSProperties => ({
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: `${xPos} center`,
            WebkitMaskImage: mask,
            maskImage: mask,
            WebkitMaskSize: 'auto',
            maskSize: 'auto',
            willChange: 'mask-position, -webkit-mask-position',
          });

          return (
            <div key={i} className="h-full" style={base}>
              <div ref={setLayerRefA(i)} style={layerStyle()} />
              <div ref={setLayerRefB(i)} style={layerStyle()} />
            </div>
          );
        })}
      </div>

      {/* Keyframes scoped via styled-jsx for portability */}
      <style jsx>{``}</style>
    </div>
  );
};

export default StackImage;
