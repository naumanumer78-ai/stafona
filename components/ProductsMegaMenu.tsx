"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { products as productData } from "../data/products";

const moreLinks = [
  // { href: "/mobile-app", label: "Mobile App" },
  { href: "/support", label: "Support" },
  { href: "/faq", label: "FAQ" },
];

const productSlugs = ["inbox", "studio", "elevate", "store"];

// Product images mapping
const productImages: Record<string, string> = {
  inbox: "/images/products/inbox.png",
  studio: "/images/products/studio.png",
  elevate: "/images/products/elevate.png",
  store: "/images/products/store.png",
};

const productDescriptions: Record<string, string> = {
  inbox: "All tracks, one powerful inbox.",
  studio: "A community builder for a scalable, sustainable career.",
  elevate: "Monetize your expertise, with all your professional service in a first-of-its-kind store.",
  store: "Monetise your expertise, with all your professional services in a first-of-its-kind store.",
};

interface ProductsMegaMenuProps {
  onClose?: () => void;
}

export default function ProductsMegaMenu({ onClose }: ProductsMegaMenuProps) {
  const products = productSlugs
    .map((slug) => productData[slug])
    .filter(Boolean);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is fully rendered
    const checkAfterRender = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          checkScrollability();
        });
      });
    };

    // Initial check with delay to ensure layout is complete
    const timeoutId = setTimeout(checkAfterRender, 100);

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);

      // Use ResizeObserver to detect when container size changes
      const resizeObserver = new ResizeObserver(() => {
        checkScrollability();
      });
      resizeObserver.observe(container);

      return () => {
        clearTimeout(timeoutId);
        container.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
        resizeObserver.disconnect();
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 450; // Width of card + gap
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const newScroll = direction === "left"
      ? currentScroll - scrollAmount
      : currentScroll + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="pb-[70px] bg-white text-black w-full">
      <div className="max-w-[90%] mx-auto flex flex-row">
        {/* Left Sidebar */}
        <div className=" flex flex-col justify-center w-[20%] h-[100%]">
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-black headline-03 pb-[170px] mt-[120px]" >Products</h2>
            <div className="space-y-1">
              <div
                className="mb-3"
                style={{
                  fontFamily: "'Next Pan Book', sans-serif",
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  color: '#000000'
                }}
              >
                More
              </div>
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block py-1 transition-colors"
                  style={{
                    fontFamily: "'Next Pan Book', sans-serif",
                    fontWeight: 300,
                    fontSize: '18px',
                    lineHeight: '22px',
                    letterSpacing: '0%',
                    color: '#86888B'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Product Cards */}
        <div className="flex-1 p-2 w-[70%] relative">
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-all shadow-lg backdrop-blur-sm"
              aria-label="Scroll left"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Right Scroll Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-all shadow-lg backdrop-blur-sm"
              aria-label="Scroll right"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex flex-row gap-6 overflow-x-auto scrollbar-hide pr-[30px]"
          >
            {products.map((product) => {
              const productImage = productImages[product.slug];
              const productDescription = productDescriptions[product.slug];
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="group flex flex-col transition-opacity duration-200 ease-in-out hover:opacity-80 w-[400px] flex-shrink-0 gap-[16px] items-start"
                >
                  {/* Device Mockup Image */}
                  <div className="relative w-full h-[320px] mb-4 rounded-lg overflow-hidden rounded-[8px]">
                    {productImage && (
                      <Image
                        src={productImage}
                        alt={product.name}
                        fill
                        sizes="400px"
                        className="object-cover rounded-[8px]"
                      />
                    )}
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-2">
                    {product.icon && (
                      <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0">
                        <Image
                          src={product.icon}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    )}
                    <div
                      className="flex items-center"
                      style={{
                        fontFamily: "'Next Pan Book', sans-serif",
                        fontWeight: 500,
                        fontSize: '24px',
                        lineHeight: '24px',
                        letterSpacing: '0%',
                        color: '#0D1117',
                        height: '40px'
                      }}
                    >
                      {product.slug.charAt(0).toUpperCase() + product.slug.slice(1)}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="line-clamp-2"
                    style={{
                      fontFamily: "'Next Pan Book', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '20px',
                      letterSpacing: '0%',
                      color: '#0D1117'
                    }}
                  >
                    {productDescription}
                  </p>
                </Link>
              );
            })}
          </div>
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

