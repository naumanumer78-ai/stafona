//@ts-nocheck
import React from 'react';
import MosaicImage from './MosaicImage';

type Anchor = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

interface PartialMosaicProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  background?: string; // base background color (e.g., '#0C1916')
  anchor?: Anchor;
  mosaicWidth?: string; // CSS size, e.g., '42%'
  mosaicHeight?: string; // CSS size, e.g., '55%'
  columns?: number;
  blockHeight?: number;
  soften?: number;
  className?: string;
  // Color synthesis options (no src image required)
  palette?: string[];
  gradientColors?: string[];
  gradientDirection?: 'horizontal' | 'vertical';
  rowShadeStrength?: number;
  // Custom left/top content instead of title/description
  content?: React.ReactNode;

  // Optional: reveal only a portion of the mosaic using stepped columns
  revealColumns?: number; // number of vertical slices to compute mask for
  revealMin?: number; // min visible height ratio (0..1) from bottom/top depending on anchor
  revealMax?: number; // max visible height ratio
  revealRandomness?: number; // 0..1 how much to jitter heights
  /**
   * How column heights are shaped.
   * - 'random' (default): eased gradient with jitter for organic edge
   * - 'stair': discrete steps for a staircase-like reveal
   */
  revealMode?: 'random' | 'stair';
  /** Number of steps when using 'stair' revealMode */
  revealSteps?: number;
}

/**
 * PartialMosaic composes the existing MosaicImage and clips it to a corner,
 * leaving ample space for copy on the opposite side. Useful for preview heroes.
 */
const PartialMosaic: React.FC<PartialMosaicProps> = ({
  title,
  description,
  background = '#0C1916',
  anchor = 'bottom-right',
  mosaicWidth = '46%',
  mosaicHeight = '60%',
  columns = 32,
  blockHeight = 28,
  soften = 0,
  className,
  palette,
  gradientColors,
  gradientDirection = 'horizontal',
  rowShadeStrength = 0.08,
  content,
  revealColumns = 0,
  revealMin = 0.2,
  revealMax = 0.95,
  revealRandomness = 0.15,
  revealMode = 'random',
  revealSteps = 6,
}) => {
  // Positioning helpers for the clipped mosaic block
  const posStyle: React.CSSProperties = {
    position: 'absolute',
    width: mosaicWidth,
    height: mosaicHeight,
    overflow: 'hidden',
  };
  if (anchor.includes('bottom')) posStyle.bottom = 0;
  if (anchor.includes('top')) posStyle.top = 0;
  if (anchor.includes('right')) posStyle.right = 0;
  if (anchor.includes('left')) posStyle.left = 0;

  // Soft fade toward the interior using CSS mask-image. We blend two
  // linear-gradients depending on the anchored edges so the outer edges are
  // opaque and the inner edges fade to transparent.
  const maskFrom = 'rgba(0,0,0,1)';
  const maskTo = 'rgba(0,0,0,0)';
  const fadeSize = '38%';

  const masks: Record<Anchor, string> = {
    'bottom-right': `linear-gradient(90deg, ${maskTo} 0, ${maskFrom} ${fadeSize}), linear-gradient(0deg, ${maskTo} 0, ${maskFrom} ${fadeSize})`,
    'bottom-left': `linear-gradient(270deg, ${maskTo} 0, ${maskFrom} ${fadeSize}), linear-gradient(0deg, ${maskTo} 0, ${maskFrom} ${fadeSize})`,
    'top-right': `linear-gradient(90deg, ${maskTo} 0, ${maskFrom} ${fadeSize}), linear-gradient(180deg, ${maskTo} 0, ${maskFrom} ${fadeSize})`,
    'top-left': `linear-gradient(270deg, ${maskTo} 0, ${maskFrom} ${fadeSize}), linear-gradient(180deg, ${maskTo} 0, ${maskFrom} ${fadeSize})`,
  };

  const mosaicMask: React.CSSProperties = {
    WebkitMaskImage: masks[anchor],
    maskImage: masks[anchor] as any,
    WebkitMaskComposite: 'source-over',
    maskComposite: 'add' as any,
  };

  // Build a stepped overlay that hides a portion of each column to create
  // a partial/covered reveal. Implemented as multiple background layers.
  const revealOverlayStyle = React.useMemo(() => {
    if (!revealColumns || revealColumns <= 0) return undefined;

    const cols = Math.max(4, Math.min(96, Math.floor(revealColumns)));
    const widthPct = 100 / cols;
    const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 2.2);
    const heights: number[] = [];
    for (let i = 0; i < cols; i++) {
      // Normalized position across the mosaic block from the interior edge
      // toward the anchored corner we want to build up.
      let t = i / (cols - 1 || 1);

      // For left anchors, reverse horizontal direction so tallest near the anchor
      if (anchor.endsWith('left')) t = 1 - t;

      let base = easeOut(t);

      // Optional staircase quantization
      if (revealMode === 'stair') {
        const steps = Math.max(2, Math.floor(revealSteps));
        const idx = Math.floor(base * steps); // 0..steps-1
        base = idx / (steps - 1); // snap to step
      }

      // Organic jitter only for 'random' mode
      const jitterAmt = revealMode === 'random' ? revealRandomness : 0;
      const jitter = (Math.sin(i * 3.33) * 0.5 + 0.5) * jitterAmt; // 0..jitterAmt

      const v = clamp01(
        (revealMin + (revealMax - revealMin) * base) * (0.9 + 0.2 * (jitterAmt ? jitter : 0))
      );
      heights.push(v);
    }

    // Compose multiple linear-gradients, one per column, that cover the
    // hidden region with the background color, leaving visible portion clear.
    // We keep bottom-visible for bottom anchors; for top anchors invert.
    const bgImages: string[] = [];
    const bgSizes: string[] = [];
    const bgPositions: string[] = [];
    for (let i = 0; i < cols; i++) {
      const v = clamp01(heights[i]);
      const visiblePct = Math.round(v * 10000) / 100; // 2dp
      const x = Math.round(i * widthPct * 100) / 100;

      let gradient: string;
      if (anchor.startsWith('bottom')) {
        // Keep bottom visible up to visiblePct, cover above
        gradient = `linear-gradient(to top, transparent ${visiblePct}%, ${background} ${visiblePct}%)`;
      } else {
        // Keep top visible up to visiblePct, cover below
        gradient = `linear-gradient(to bottom, transparent ${visiblePct}%, ${background} ${visiblePct}%)`;
      }
      bgImages.push(gradient);
      bgSizes.push(`${widthPct}% 100%`);
      bgPositions.push(`${x}% 0%`);
    }

    return {
      pointerEvents: 'none' as const,
      position: 'absolute' as const,
      inset: 0,
      backgroundImage: bgImages.join(','),
      backgroundSize: bgSizes.join(','),
      backgroundPosition: bgPositions.join(','),
      backgroundRepeat: 'no-repeat',
      zIndex: 1,
    } satisfies React.CSSProperties;
  }, [revealColumns, revealMin, revealMax, revealRandomness, revealMode, revealSteps, anchor, background]);

  return (
    <section
      className={className}
      style={{ position: 'relative', background, borderRadius: 12, overflow: 'hidden' }}
    >
      {/* Text zone */}
      <div style={{ position: 'relative', zIndex: 1, padding: '32px' }}>
        {content ? (
          content
        ) : (
          <div>
            {title && (
              <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 700, margin: 0 }}>{title}</h3>
            )}
            {description && (
              <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>{description}</p>
            )}
          </div>
        )}
      </div>

      {/* Clipped mosaic block in chosen corner */}
      <div style={{ ...posStyle }}>
        <div style={{ position: 'absolute', inset: 0, ...mosaicMask }}>
          <MosaicImage
            className="absolute inset-0 w-full h-full"
            columns={columns}
            blockHeight={blockHeight}
            soften={soften}
            palette={palette}
            gradientColors={gradientColors}
            gradientDirection={gradientDirection}
            rowShadeStrength={rowShadeStrength}
          />
          {revealOverlayStyle && <div style={revealOverlayStyle} />}
        </div>
      </div>
    </section>
  );
};

export default PartialMosaic;
