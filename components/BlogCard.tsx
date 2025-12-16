"use client";

import React from "react";
import Link from "next/link";

export default function BlogCard() {
  return (
    <div
      className="w-full relative rounded-[0.5em] overflow-hidden p-[2em] flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/blog.png)',
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, var(--dark-cerise) 0%, var(--mid-cerise) 50%, var(--bright-cerise) 100%)',
          mixBlendMode: 'multiply',
        }}
      />
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Label */}
        <div className="flex flex-col gap-[0.75em]">
          <div
            className="text-[0.875em] leading-[1.125em] font-normal text-white capitalize"
            style={{ letterSpacing: '0%' }}
          >
            Blog
          </div>

          {/* Main Heading */}
          <div
            className="text-[2.5em] leading-[2.5em] font-medium text-white"
            style={{ letterSpacing: '0%' }}
          >
            What's new
          </div>

          {/* Body Copy */}
          <div
            className="text-[1.125em] leading-[1.375em] font-light text-white"
            style={{ letterSpacing: '0%' }}
          >
            Insights, stories, & trends shaping the future of electronic music.
          </div>
        </div>

        {/* Button */}
        <div className="mt-[1em]">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center h-[3em] px-[1.5em] rounded-[0.25em] border border-white text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent transition-colors"
            aria-label="Explore our blog"
            tabIndex={0}
          >
            Explore Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

