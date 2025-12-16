"use client";

import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useMobile } from "../hooks/useMobile";

interface Feature {
  number: string;
  title: string;
  description: string;
  image: string;
}

export default function FeatureContainer() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isMobile = useMobile();

  const features: Feature[] = [
    {
      number: "01",
      title: "Discover your pro fans",
      description: "Pro fans are the DJs, producers, and industry insiders who amplify your career far beyond the typical music fan. They support your releases, products, and services, helping you grow every aspect of your brand.",
      image: "/images/features/profans.png",
    },
    {
      number: "02",
      title: "Build your community",
      description: "Pro fans are the DJs, producers, and industry insiders who amplify your career far beyond the typical music fan. They support your releases, products, and services, helping you grow every aspect of your brand.",
      image: "/images/features/community.png",
    },
    {
      number: "03",
      title: "Monetize your expertise",
      description: "Pro fans are the DJs, producers, and industry insiders who amplify your career far beyond the typical music fan. They support your releases, products, and services, helping you grow every aspect of your brand.",
      image: "/images/features/monetize.png",
    },
  ];

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollability();
    const handleResize = () => checkScrollability();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      const targetScroll = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--midnight)' }}>
      <div className="flex flex-col gap-[1.5em]">
        {/* Features Label */}
        <div className="flex flex-col gap-[0.4375em]">
          <div className="md:desktop-caption caption text-[var(--midnight-50)]">
            Features
          </div>
          {/* Main Heading */}
          <div className="headline-04 md:hidden text-white max-w-[44.75em]">
            Streamline your process — Amplify your impact
          </div>
          <div className="headline-03 hidden md:block text-white max-w-[44.75em]">
            Streamline your process — Amplify your impact
          </div>
        </div>



        {/* Feature Cards Carousel */}
        <div className="relative">
          {/* Scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex flex-row gap-[1.5em] md:overflow-x-auto overflow-x-auto scrollbar-hide scroll-smooth pb-4 snap-x snap-mandatory"
            onScroll={checkScrollability}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft' && canScrollLeft) {
                e.preventDefault();
                scroll('left');
              } else if (e.key === 'ArrowRight' && canScrollRight) {
                e.preventDefault();
                scroll('right');
              }
            }}
            role="region"
            aria-label="Features carousel"
            tabIndex={0}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {features.map((feature) => (
              <>
                {isMobile ? (
                  <div
                    key={feature.number}
                    className="flex-shrink-0 relative md:w-[66.75em] w-full min-h-[25em] md:h-[40.9375em] rounded-[0.5em] p-[1.5em] flex flex-col gap-[2.5em] snap-start"
                    style={{ backgroundColor: 'var(--midnight-95)' }}
                  >
                    <div className="">
                      <Image src={feature.image} alt={feature.title} width={568} height={607} />
                    </div>

                    <div className="flex flex-col justify-between gap-[2.9375em]">

                      <div className="flex flex-col gap-[1.1875em]">
                        <div className="headline-04 text-white">{feature.title}</div>
                        <div className="body-copy text-white">{feature.description}</div>
                      </div>
                      <div className="headline-01" style={{ color: 'var(--midnight-70)' }}>{feature.number}</div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={feature.number}
                    className="flex-shrink-0 relative md:w-[66.75em] w-full min-h-[25em] md:h-[40.9375em] rounded-[0.5em] p-[1.5em] flex flex-row gap-[2.5em] snap-start"
                    style={{ backgroundColor: 'var(--midnight-95)' }}
                  >
                    <div className="min-w-[40%] max-w-[40%] flex flex-col justify-between">
                      <div className="headline-01" style={{ color: 'var(--midnight-70)' }}>{feature.number}</div>
                      <div className="flex flex-col gap-[1.1875em]">
                        <div className="headline-04 text-white">{feature.title}</div>
                        <div className="body-copy text-white">{feature.description}</div>
                      </div>
                    </div>

                    <div className="min-w-[60%] max-w-[60%]">
                      <Image src={feature.image} alt={feature.title} width={568} height={607} />
                    </div>
                  </div>
                )}

              </>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="block">
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scroll('left');
                  }
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent text-white p-3 rounded-full transition-colors backdrop-blur-sm z-10"
                aria-label="Scroll features left"
                tabIndex={0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scroll('right');
                  }
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent text-white p-3 rounded-full transition-colors backdrop-blur-sm z-10"
                aria-label="Scroll features right"
                tabIndex={0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

