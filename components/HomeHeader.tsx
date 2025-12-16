"use client";

import React, { useRef, useEffect } from "react";
import Button from "./Button";
import { useMobile } from "../hooks/useMobile";

const HomeHeader: React.FC = () => {
  const isMobile = useMobile();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure seamless looping by immediately restarting when video ends
    const handleEnded = () => {
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {
          // Ignore play errors (autoplay restrictions)
        });
      }
    };

    // Preload and ensure video is ready
    const handleLoadedData = () => {
      if (video) {
        video.play().catch(() => {
          // Ignore play errors
        });
      }
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, [isMobile]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      role="img"
      aria-label="Header background"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        key={isMobile ? 'mobile' : 'desktop'}
      >
        <source src={isMobile ? "/Mobile-header.mp4" : "/Desktop-Header.mp4"} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end md:pl-[3.75em] md:pr-[3.75em] pl-[1.5625em] pr-[1.5625em] pb-[4em] md:pb-[6em]">
        <div className="flex flex-col gap-[0.625em]">
          <div className="caption text-white">The platform for electronic music professionals</div>
          <div className="headline-07 md:hidden text-white">Get your career on track</div>
          <div className="headline-02 hidden md:block text-white">Get your career on track</div>
        </div>
        <div className="mt-[2em] md:mt-[3em]">
          <div className="body-copy text-white max-w-[31.9375em]">From day one, know who your top Pro Fans are. Filter and organize these critical connections to ensure you nurture every relationship, no matter where an artist is in their career.</div>
          <Button href="/book-a-demo" className="mt-[2em]" variant="outline" scrollTo="Rectangle-132">Explore products</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;

