//@ts-nocheck
import React, { useEffect, useRef } from 'react';

export interface MosaicImageProps {
  src?: string; // optional when using palette/gradient
  alt?: string;
  className?: string;
  columns?: number; // number of horizontal cells (higher = finer)
  blockHeight?: number; // desired block height in px (optional)
  soften?: number; // optional extra blur after pixelation (px)
  animateColumns?: boolean; // animate each column vertically (off by default)
  columnSpeed?: number; // rows per second
  alternate?: boolean; // alternate column directions
  onReady?: () => void; // optional callback after first render completes

  // New: generate mosaic from colors instead of an image
  palette?: string[]; // array of hex/rgb strings; mapped across columns
  gradientColors?: string[]; // if provided, creates a linear gradient across columns
  gradientDirection?: 'horizontal' | 'vertical';
  rowShadeStrength?: number; // 0..1, subtle alternating row shading

  // New: subtle horizontal color drift (columns per second)
  colorShiftSpeed?: number; // 0 means off

  // New: color-only animation (no geometry movement)
  animateColors?: boolean; // default false
  colorPulseSpeed?: number; // cycles per second
  colorPulseAmount?: number; // 0..0.5 multiplier for brightness modulation
  colorPhaseX?: number; // per-column phase offset
  colorPhaseY?: number; // per-row phase offset
}

function coverRect(containerW: number, containerH: number, imgW: number, imgH: number) {
  const imgAspect = imgW / imgH;
  const canvasAspect = containerW / containerH;
  if (imgAspect > canvasAspect) {
    const drawH = containerH;
    const drawW = drawH * imgAspect;
    const offsetX = (containerW - drawW) / 2;
    return { drawW, drawH, offsetX, offsetY: 0 };
  } else {
    const drawW = containerW;
    const drawH = drawW / imgAspect;
    const offsetY = (containerH - drawH) / 2;
    return { drawW, drawH, offsetX: 0, offsetY };
  }
}

const MosaicImage: React.FC<MosaicImageProps> = ({
  src,
  alt,
  className,
  columns = 16,
  blockHeight = 40,
  soften = 0,
  animateColumns = false,
  columnSpeed = 0.5,
  alternate = true,
  onReady,
  palette,
  gradientColors,
  gradientDirection = 'horizontal',
  rowShadeStrength = 0,
  colorShiftSpeed = 0,
  animateColors = false,
  colorPulseSpeed = 0.06,
  colorPulseAmount = 0.12,
  colorPhaseX = 0.9,
  colorPhaseY = 1.2,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const smallRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const offsetsRef = useRef<number[] | null>(null);
  const dirsRef = useRef<number[] | null>(null);
  const colorShiftRef = useRef<number>(0); // in columns
  const baseDataRef = useRef<ImageData | null>(null); // original small colors
  const colorTimeRef = useRef<number>(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const small = document.createElement('canvas');
    smallRef.current = small;
    const sctx = small.getContext('2d');
    if (!sctx) return;

    let canceled = false;

    // Helper to signal ready
    const signalReady = () => {
      if (typeof onReady === 'function') {
        requestAnimationFrame(() => {
          if (!canceled) onReady();
        });
      }
    };

    // If src provided, load image; else we will synthesize from palette/gradient
    if (src) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = src;
      img.onload = () => {
        if (canceled) return;
        imgRef.current = img;
        // Ensure layout is settled before drawing
        requestAnimationFrame(() => {
          if (canceled) return;
          resize();
          draw();
          signalReady();
        });
      };
      img.onerror = () => {
        // On error, clear canvas
        try {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        } catch {}
      };
    } else {
      // No image; draw once from palette/gradient
      requestAnimationFrame(() => {
        if (canceled) return;
        resize();
        draw();
        signalReady();
      });
    }

    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));

    function resize() {
      const w = wrapper.clientWidth;
      const h = wrapper.clientHeight;
      if (!w || !h) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function applyPaletteToSmall(targetCols: number, targetRows: number) {
      // Fill the small canvas based on palette/gradient configuration
      sctx.clearRect(0, 0, targetCols, targetRows);

      if (gradientColors && gradientColors.length > 0) {
        const grad = gradientDirection === 'vertical'
          ? sctx.createLinearGradient(0, 0, 0, targetRows)
          : sctx.createLinearGradient(0, 0, targetCols, 0);
        const n = gradientColors.length;
        gradientColors.forEach((c, i) => grad.addColorStop(n === 1 ? 0 : i / (n - 1), c));
        sctx.fillStyle = grad as any;
        sctx.fillRect(0, 0, targetCols, targetRows);
      } else if (palette && palette.length > 0) {
        for (let x = 0; x < targetCols; x++) {
          const idx = Math.floor((x / Math.max(1, targetCols - 1)) * (palette.length - 1));
          const base = palette[idx] || palette[palette.length - 1];
          for (let y = 0; y < targetRows; y++) {
            // Subtle alternating row shade
            sctx.fillStyle = base;
            sctx.fillRect(x, y, 1, 1);
          }
        }
      } else {
        // Fallback neutral
        sctx.fillStyle = '#141B22';
        sctx.fillRect(0, 0, targetCols, targetRows);
      }

      // Optional subtle row banding to emulate mosaic depth
      if (rowShadeStrength > 0) {
        sctx.save();
        sctx.globalCompositeOperation = 'multiply';
        sctx.globalAlpha = Math.min(0.25, Math.max(0, rowShadeStrength));
        for (let y = 0; y < targetRows; y += 2) {
          sctx.fillStyle = '#000';
          sctx.fillRect(0, y, targetCols, 1);
        }
        sctx.restore();
      }

      // capture base colors after initial fill
      baseDataRef.current = sctx.getImageData(0, 0, targetCols, targetRows);
    }

    function draw() {
      // stop prior animation if any
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTsRef.current = null;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      // Determine small-canvas size based on desired columns
      const targetCols = Math.max(1, Math.floor(columns));
      let targetRows: number;
      if (blockHeight && blockHeight > 0) {
        targetRows = Math.max(1, Math.round(h / blockHeight));
      } else {
        const aspect = h > 0 ? w / h : 1;
        targetRows = Math.max(1, Math.round(targetCols / aspect));
      }

      small.width = targetCols;
      small.height = targetRows;

      // Populate small canvas either from image or palette/gradient
      sctx.clearRect(0, 0, targetCols, targetRows);
      sctx.imageSmoothingEnabled = true;
      if (imgRef.current) {
        const { drawW, drawH, offsetX, offsetY } = coverRect(
          targetCols,
          targetRows,
          imgRef.current.width,
          imgRef.current.height,
        );
        sctx.drawImage(imgRef.current, offsetX, offsetY, drawW, drawH);
        baseDataRef.current = sctx.getImageData(0, 0, targetCols, targetRows);
      } else {
        applyPaletteToSmall(targetCols, targetRows);
      }

      // If we need color animation, update the small canvas colors from the base colors
      if (animateColors && baseDataRef.current) {
        const base = baseDataRef.current;
        const out = sctx.createImageData(base.width, base.height);
        const src = base.data;
        const dst = out.data;
        colorTimeRef.current += 1 / 60; // approx, refined below
        const t = colorTimeRef.current; // seconds accumulator
        const omega = 2 * Math.PI * (colorPulseSpeed || 0);
        for (let y = 0; y < base.height; y++) {
          for (let x = 0; x < base.width; x++) {
            const i = (y * base.width + x) * 4;
            const phase = omega * t + colorPhaseX * x + colorPhaseY * y;
            const k = 1 + (colorPulseAmount || 0) * Math.sin(phase);
            dst[i] = Math.max(0, Math.min(255, Math.round(src[i] * k)));
            dst[i + 1] = Math.max(0, Math.min(255, Math.round(src[i + 1] * k)));
            dst[i + 2] = Math.max(0, Math.min(255, Math.round(src[i + 2] * k)));
            dst[i + 3] = src[i + 3];
          }
        }
        sctx.putImageData(out, 0, 0);
      }

      // Static draw when no animations requested
      if (!animateColumns && !(colorShiftSpeed && colorShiftSpeed !== 0)) {
        ctx.clearRect(0, 0, w, h);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(small, 0, 0, targetCols, targetRows, 0, 0, w, h);

        if (soften > 0) {
          ctx.save();
          ctx.filter = `blur(${soften}px)`;
          ctx.globalAlpha = 0.6;
          ctx.drawImage(canvas, 0, 0, w, h, 0, 0, w, h);
          ctx.restore();
        }
        return;
      }

      // Prepare per-column animation state
      if (!offsetsRef.current || offsetsRef.current.length !== targetCols) {
        offsetsRef.current = new Array(targetCols).fill(0);
      }
      if (!dirsRef.current || dirsRef.current.length !== targetCols) {
        dirsRef.current = new Array(targetCols).fill(1).map((_, i) => (alternate ? (i % 2 === 0 ? 1 : -1) : 1));
      }

      // Precompute integer-aligned X positions to avoid hairline gaps
      const xPos: number[] = new Array(targetCols + 1);
      for (let i = 0; i <= targetCols; i++) xPos[i] = Math.round((i * w) / targetCols);

      const frame = (ts: number) => {
        // handle cancellation across rerenders
        if (!smallRef.current) return;
        const last = lastTsRef.current ?? ts;
        lastTsRef.current = ts;
        const dt = (ts - last) / 1000; // seconds

        // advance color time accurately
        if (animateColors) colorTimeRef.current += dt;

        // update offsets (rows) only when vertical animation enabled
        const offsets = offsetsRef.current!;
        const dirs = dirsRef.current!;
        if (animateColumns) {
          const speed = columnSpeed || 0;
          for (let i = 0; i < targetCols; i++) {
            offsets[i] += dirs[i] * speed * dt;
            // keep offsets in a sane range
            if (offsets[i] >= targetRows) offsets[i] -= targetRows;
            if (offsets[i] < 0) offsets[i] += targetRows;
          }
        } else {
          for (let i = 0; i < targetCols; i++) offsets[i] = 0;
        }

        // update color shift (columns)
        if (colorShiftSpeed && colorShiftSpeed !== 0) {
          colorShiftRef.current += colorShiftSpeed * dt;
          // keep within range for numerical stability
          if (colorShiftRef.current >= targetCols) colorShiftRef.current -= targetCols;
          if (colorShiftRef.current < 0) colorShiftRef.current += targetCols;
        }

        ctx.clearRect(0, 0, w, h);
        ctx.imageSmoothingEnabled = false;

        const destRowH = h / targetRows;
        for (let i = 0; i < targetCols; i++) {
          const offRows = ((offsets[i] % targetRows) + targetRows) % targetRows; // 0..targetRows
          const offsetPx = offRows * destRowH; // smooth vertical offset in pixels
          const dx = xPos[i];
          const destColW = xPos[i + 1] - xPos[i];

          // Determine horizontally shifted source column
          const colorShift = colorShiftRef.current || 0;
          const sxi = ((Math.floor(i + colorShift) % targetCols) + targetCols) % targetCols;

          // Draw the whole column twice with vertical translation and wrap-around
          // First pass: shifted up by offsetPx (may start negative)
          ctx.drawImage(
            small,
            sxi, // sx
            0, // sy
            1, // sWidth
            targetRows, // sHeight
            dx, // dx
            -offsetPx, // dy
            destColW, // dWidth
            h, // dHeight
          );

          // Second pass: wrap-around to fill bottom portion
          ctx.drawImage(
            small,
            sxi,
            0,
            1,
            targetRows,
            dx,
            h - offsetPx,
            destColW,
            h,
          );
        }

        if (soften > 0) {
          ctx.save();
          ctx.filter = `blur(${soften}px)`;
          ctx.globalAlpha = 0.6;
          ctx.drawImage(canvas, 0, 0, w, h, 0, 0, w, h);
          ctx.restore();
        }

        rafRef.current = requestAnimationFrame(frame);
      };

      rafRef.current = requestAnimationFrame(frame);
    }

    const RO = (window as any).ResizeObserver as typeof ResizeObserver | undefined;
    const ro = RO ? new RO(() => resize()) : undefined;
    if (ro) ro.observe(wrapper);
    else window.addEventListener('resize', resize);

    return () => {
      // Prevent late onload from previous image drawing
      canceled = true;
      if (ro) ro.disconnect();
      else window.removeEventListener('resize', resize);
      // Clear canvas to avoid stale image during src switch
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } catch {}
      imgRef.current = null;
      smallRef.current = null;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTsRef.current = null;
      offsetsRef.current = null;
      dirsRef.current = null;
    };
  }, [src, columns, blockHeight, soften, animateColumns, columnSpeed, alternate, onReady, palette, gradientColors, gradientDirection, rowShadeStrength]);

  return (
    <div ref={wrapperRef} className={className} aria-label={alt}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
    </div>
  );
};

export default MosaicImage;
