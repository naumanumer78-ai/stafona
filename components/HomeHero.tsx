"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import Container from "./Container";

const phrases = [
  "sustainable career growth",
  "new relationships",
  "closer connections",
  "endless discovery",
  "new revenue streams",
];

const HomeHero: React.FC = () => {
  const [idx, setIdx] = useState(0); // 0..phrases.length (last is clone)
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [lineHeight, setLineHeight] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  // Measure line height based on first item
  const measure = useCallback(() => {
    const first = listRef.current?.firstElementChild as HTMLElement | null;
    if (first) {
      const h = first.offsetHeight;
      if (h && h !== lineHeight) setLineHeight(h);
    }
  }, [lineHeight]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  // Schedule next advance when in a stable slide (not the clone)
  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    if (idx === phrases.length) return; // wait for transitionEnd to reset
    timerRef.current = window.setTimeout(() => {
      setIdx((prev) => prev + 1);
    }, 3000) as unknown as number;
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [idx]);

  const handleTransitionEnd = () => {
    // When reaching the cloned last slide, jump back to 0 without animating.
    if (idx === phrases.length) {
      // 1) Disable transition so the reset is instant.
      setTransitionEnabled(false);
      // 2) On next frame, reset index to 0 (no transition applies now).
      requestAnimationFrame(() => {
        setIdx(0);
        // 3) On the following frame, re-enable transition for subsequent moves.
        requestAnimationFrame(() => setTransitionEnabled(true));
      });
    }
  };

  return (
    <div className="relative h-screen flex items-end">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-screen object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="https://media.istockphoto.com/id/1346693283/video/dj-playing-music-in-the-nightclub.mp4?s=mp4-640x640-is&k=20&c=maZOISCk5yub-RD-hAO9gWqIeGoRcfFSrCkeZiWpmqc="
          type="video/mp4"
        />
      </video>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>

      <Container className="relative z-10 pb-32">
        <div className="max-w-[62.5em]">
          <h1 className="text-6xl font-normal">
            <div>Trackstack powers</div>
            <div
              className="relative overflow-hidden"
              style={{ height: lineHeight ? `${lineHeight}px` : undefined }}
            >
              <div
                ref={listRef}
                className={
                  transitionEnabled
                    ? "transition-transform duration-500 ease-out"
                    : ""
                }
                style={{
                  transform: `translateY(-${idx * (lineHeight || 0)}px)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {[...phrases, phrases[0]].map((line, i) => (
                  <div key={i} className="leading-tight">
                    {line}
                  </div>
                ))}
              </div>
            </div>
            <div>for electronic music professionals</div>
          </h1>
          <p className="mt-4 text-3xl text-white/60">
            All-in-one tools that turn your inbox into income—so you can <br className="hidden md:block" />focus
            on the music
          </p>
          <div className="mt-8">
            <a
              href="/pricing"
              className="inline-flex items-center rounded-full border bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-100"
            >
              Get Started
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
