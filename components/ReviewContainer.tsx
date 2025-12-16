"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

interface Review {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export default function ReviewContainer({ isProductPage = false, productTitleColor }: { isProductPage?: boolean; productTitleColor?: string }) {
  const reviews: Review[] = [
    {
      quote: "Private links, promos, and demos—all in one place. Inbox makes my life so much easier.",
      name: "Anatta",
      role: "DJ, Producer",
      avatar: "/images/reviews/anatta.png",
    },
    {
      quote: "Studio makes managing my content and connecting with my audience feel natural and stress-free.",
      name: "Guy Mac",
      role: "DJ, Producer",
      avatar: "/images/reviews/guy-mac.png",
    },
    {
      quote: "Inbox is the missing link I didn't know I needed. My sets are better, my workflow is faster — it's perfect.",
      name: "ODD MOBB",
      role: "DJ, Producer",
      avatar: "/images/reviews/odd-mobb.png",
    },
    {
      quote: "Trackstack has completely transformed how I manage my music career. Everything I need is in one place.",
      name: "Artist Name",
      role: "DJ, Producer",
      avatar: "/images/reviews/default.png",
    },
  ];

  const cardWidth = 416 + 24; // card width + gap
  const totalWidth = reviews.length * cardWidth;

  const location = usePathname();
  const isInboxProduct = location.includes('/products/inbox');
  return (
    <div className="pt-[4.1875em]" style={{ backgroundColor: 'var(--midnight)' }}>
      <div className="flex flex-col gap-[1.5em]">
        {/* Reviews Label */}
        <div className="flex flex-col gap-[0.4375em]">
          <div
            className={`md:desktop-caption caption text-[var(--midnight-50)]`}
            style={{
              color: isProductPage && productTitleColor ? productTitleColor : undefined
            }}
          >
            Testimonials
          </div>
          {/* Main Heading */}
          <div
            className="headline-04 md:hidden text-white max-w-[35em]"
          >
            {isInboxProduct ? (
              <>
                What top DJ:s and <br /> producers think
              </>
            ) : (
              'Preferred by Professionals'
            )}
          </div>
          <div className="headline-03 hidden md:block text-white max-w-[35em]">
            {isInboxProduct ? (
              'What top DJ:s and producers think'
            ) : (
              'Preferred by Professionals'
            )}
          </div>
        </div>

        {/* Review Cards Auto-Scrolling Carousel */}
        <div className="relative overflow-hidden" role="region" aria-label="Testimonials carousel">
          {/* Animated container */}
          <div
            className="flex flex-row gap-[1.5em] will-change-transform"
            style={{
              animation: `reviewScroll ${reviews.length * 6}s linear infinite`,
            }}
            aria-live="polite"
            aria-atomic="false"
          >
            {/* First set of reviews */}
            {reviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex-shrink-0 md:w-[26em] w-full md:h-[36.5em] min-h-[25em] rounded-[0.25em] p-[1.5em] flex flex-col justify-between"
                style={{ backgroundColor: 'var(--midnight-95)' }}
                role="article"
                aria-label={`Testimonial from ${review.name}`}
              >
                {/* Quote */}
                <div className="body-copy-large text-white flex-1" role="text">
                  {review.quote}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-[1em] mt-6">
                  <div className="relative w-[3em] h-[3em] rounded-full overflow-hidden">
                    <Image
                      src={review.avatar}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="3em"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="body-copy-emphasis text-white" role="text">{review.name}</div>
                    <div className="body-copy" style={{ color: 'var(--midnight-50)' }} role="text">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {reviews.map((review, index) => (
              <div
                key={`${review.name}-dup-${index}`}
                className="flex-shrink-0 md:w-[26em] w-full md:h-[36.5em] min-h-[25em] rounded-[0.25em] p-[1.5em] flex flex-col justify-between"
                style={{ backgroundColor: 'var(--midnight-95)' }}
                aria-hidden="true"
              >
                {/* Quote */}
                <div className="body-copy-large text-white flex-1">
                  {review.quote}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-[1em] mt-6">
                  <div className="relative w-[3em] h-[3em] rounded-full overflow-hidden">
                    <Image
                      src={review.avatar}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="3em"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="body-copy-emphasis text-white">{review.name}</div>
                    <div className="body-copy" style={{ color: 'var(--midnight-50)' }}>{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes reviewScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }
      `}</style>
    </div>
  );
}

