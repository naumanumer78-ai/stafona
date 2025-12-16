"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";

const PlatformOverview: React.FC = () => {
  const [isMasterInView, setIsMasterInView] = useState(false);
  const masterRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = masterRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsMasterInView(true);
      },
      { root: null, threshold: 0.25 }
    );
    obs.observe(el);

    // If the user has already scrolled past the marker on load, activate immediately
    const markerTop = el.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY > markerTop) setIsMasterInView(true);

    const onScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      const sectionTop = sec.getBoundingClientRect().top + window.scrollY;
      // If user scrolls back to (or above) the top of the section, revert to midnight
      if (window.scrollY <= sectionTop + 1) setIsMasterInView(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Observe the PRM animation video; when it becomes visible, revert to dark background
  useEffect(() => {
    const vidEl = videoRef.current;
    if (!vidEl) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsMasterInView(false);
      },
      { root: null, threshold: 0.25 }
    );
    obs.observe(vidEl);

    // If already in view on load, ensure dark background
    const rectTop = vidEl.getBoundingClientRect().top;
    const rectBottom = vidEl.getBoundingClientRect().bottom;
    const inView = rectTop < window.innerHeight && rectBottom > 0;
    if (inView) setIsMasterInView(false);

    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 -mt-12">
      <div
        className={`rounded-3xl overflow-hidden pt-12 transition-colors duration-700 ${
          isMasterInView ? "bg-white" : "bg-trackstack-midnight"
        }`}
      >
        <Container>
          {/* Eyebrow */}
          <div className="mb-2">
            <div
              className={`font-mono text-xs font-medium transition-colors duration-700 ${
                isMasterInView ? "text-trackstack-midnight70" : "text-white/60"
              }`}
            >
              PROFESSIONAL RELATIONSHIP MANAGEMENT
            </div>
          </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2
              className={`text-5xl font-normal leading-tight transition-colors duration-700 ${
                isMasterInView ? "text-trackstack-midnight" : "text-white"
              }`}
            >
              Knowing your Pro fans
              <br />
              powers your career
            </h2>
          </div>
          <p
            className={`text-lg transition-colors duration-700 ${
              isMasterInView ? "text-trackstack-midnight70" : "text-white/60"
            }`}
          >
            From day one, know who your top Pro Fans are. Filter and organize
            these critical connections to ensure you nurture every relationship,
            <br />
            no matter where an artist is in their career.
          </p>
        </div>
        <div className="mt-12" ref={videoRef}>
          <video
            className="block w-full mx-auto my-12 rounded-3xl shadow-xl"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="/Trackstack%20PRM%20animation_01.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        </Container>

        <Container className="pt-24">
          <div className="mb-2" ref={masterRef}>
            <div
              className={`font-mono text-xs font-medium transition-colors duration-700 ${
                isMasterInView ? "text-trackstack-midnight70" : "text-white/60"
              }`}
            >
              PROFESSIONAL RELATIONSHIP MASTER
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`text-5xl font-normal leading-tight transition-colors duration-700 ${
                  isMasterInView ? "text-trackstack-midnight" : "text-white"
                }`}
              >
                Elevate your professional relationships <br /> to new heights
              </h2>
            </div>
            <p
              className={`text-lg transition-colors duration-700 ${
                isMasterInView ? "text-trackstack-midnight70" : "text-white/60"
              }`}
            >
              Meet the next generation of professional tools. Strengthen
              connections, increase engagement, and do more—with less.
              <br />
              Designed to help you connect, engage, and grow efficiently.
            </p>
          </div>

          {/* Full-width mosaic break */}
          <div className="w-full my-12">
            <img
              src="/images/product-placeholder.png"
              alt="Platform Overview Mosaic"
              className="w-full"
            />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PlatformOverview;
