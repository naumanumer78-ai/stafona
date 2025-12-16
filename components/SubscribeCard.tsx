"use client";

import React from "react";

export default function SubscribeCard() {
  return (
    <div
      className="w-full  relative rounded-[0.5em] overflow-hidden p-[2em] flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/subscribe.png)',
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, var(--dark-purple) 0%, var(--mid-purple) 50%, var(--bright-purple) 100%)',
          mixBlendMode: 'multiply',
        }}
      />
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Label */}
        <div className="flex flex-col gap-[0.75em]">
          <div
            className="text-[0.875em] leading-[1.125em] font-normal text-white capitalize"
          >
            Subscribe
          </div>

          {/* Main Heading */}
          <div
            className="text-[2.5em] leading-[2.5em] font-medium text-white"
          >
            Stay in the loop.
          </div>

          {/* Body Copy */}
          <div
            className="text-[1.125em] leading-[1.375em] font-light text-white"
          >
            New features, insights, and stories that matter
          </div>
        </div>

        {/* Input and Button */}
        <form className="relative mt-[1em]" onSubmit={(e) => { e.preventDefault(); }}>
          <label htmlFor="subscribe-email" className="sr-only">Email address</label>
          <input
            id="subscribe-email"
            type="email"
            placeholder="Subscribe to our newsletter"
            required
            aria-required="true"
            className="w-full h-[3em] px-[1em] pr-[3.5em] rounded-[0.25em] bg-white outline-none border border-white/20 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            style={{ color: 'var(--midnight-95)' }}
            aria-label="Email address for newsletter subscription"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 w-[2.5em] h-[2.5em] rounded-[0.25em] flex items-center justify-center transition-colors border border-white/20 border-l-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            style={{ backgroundColor: 'var(--midnight)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--midnight-90)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--midnight)'}
            onFocus={(e) => e.currentTarget.style.backgroundColor = 'var(--midnight-90)'}
            onBlur={(e) => e.currentTarget.style.backgroundColor = 'var(--midnight)'}
            aria-label="Subscribe to newsletter"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve" width="20" height="20" aria-hidden="true">
              <path d="M77.499,15H38.608c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5L59.392,30L19.163,70.229  c-2.929,2.929-2.929,7.678,0,10.607s7.678,2.929,10.607,0l40.229-40.229l0.001,20.784c0,4.142,3.358,7.5,7.5,7.5  c4.142,0,7.5-3.358,7.5-7.5V22.5C84.999,18.357,81.641,15,77.499,15z" fill="white" />
            </svg>
          </button>
        </form>
      </div>
      <style jsx>{`
        input::placeholder {
          color: var(--midnight-50);
        }
      `}</style>
    </div>
  );
}

