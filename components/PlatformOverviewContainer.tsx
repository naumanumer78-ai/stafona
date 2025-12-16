"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import Button from "./Button";

export default function PlatformOverviewContainer() {
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
    }, []);

    return (
        <div className="relative">
            <div className="relative pt-[4.1875em] md:h-[50.625em] h-[37.5em] overflow-hidden">
                {/* Video Background */}
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full md:h-full h-[40vh] object-cover md:mt-[5em] mt-[18em]"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                >
                    <source src="/Overview_BG.mp4" type="video/mp4" />
                </video>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-[0.3125em] items-center">
                    <div className="caption" style={{ color: 'var(--midnight-50)' }}>Professional Relationship Manager</div>
                    <h2 className="headline-04 md:hidden text-white text-center">Know who your Pro fans are</h2>
                    <h2 className="headline-03 hidden md:block text-white text-center">Know who your Pro fans are</h2>
                    <p className="pt-[0.625em] text-center max-w-[33.125em]" style={{ color: 'var(--midnight-10)' }}>
                        From day one, know who your top Pro Fans are. Filter and organize these critical connections to ensure you nurture every relationship, no matter where an artist is in their career.
                    </p>
                </div>
            </div>
        </div>
    );
}

