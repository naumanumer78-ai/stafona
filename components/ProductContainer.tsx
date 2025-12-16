"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Button from "./Button";

export default function ProductContainer({ isProductPage = false }: { isProductPage?: boolean }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const products = [
        /* {
            image: "/images/products/master-brand.png",
            name: "Master brand",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            href: "/products/trackstack",
            icon: "/images/products/icons/master-brand.png",
        }, */
        {
            image: "/images/products/inbox.png",
            name: "Inbox",
            description: "All tracks, one powerful inbox.",
            href: "/products/inbox",
            icon: "/images/products/icons/inbox.png",
        },
        {
            image: "/images/products/studio.png",
            name: "Studio",
            description: "A community builder for a scalable, sustainable career.",
            href: "/products/studio",
            icon: "/images/products/icons/studio.png",
        },
        {
            image: "/images/products/elevate.png",
            name: "Elevate",
            description: "Monetize your expertise, with all your professional service in a first-of-its-kind store.",
            href: "/products/elevate",
            icon: "/images/products/icons/elevate.png",
        },
        {
            image: "/images/products/store.png",
            name: "Store",
            description: "Monetise your expertise, with all your professional services in a first-of-its-kind store.",
            href: "/products/store",
            icon: "/images/products/icons/store.png",
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

    const renderProducts = products.map((product) => (
        <div
            key={product.name}
            className="flex-shrink-0 md:w-[33.75em] w-full flex flex-col gap-4 hover:opacity-90 transition-opacity snap-start"
        >
            <div className="relative w-full md:h-[39.375em] h-[31.25em] overflow-hidden rounded">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33.75em"
                />
            </div>
            <div className="flex flex-row gap-[1em] items-center">
                <Image src={product.icon} alt="" width={48} height={48} aria-hidden="true" />
                <div className="headline-04 text-white" role="heading" aria-level={3}>{product.name}</div>
            </div>
            <div className="body-copy text-white line-clamp-3 flex-1" role="text">{product.description}</div>
            <div className="mt-auto">
                <Button href={product.href} variant="outline" className="max-w-[13.75em]" aria-label={`Learn more about ${product.name}`}>Learn more</Button>
            </div>
        </div>
    ));

    return (
        <div>
            <div className="flex flex-col gap-[1.5em]">
                {isProductPage ? (
                    <>
                        <div className="headline-04 md:hidden text-white">Products</div>
                        <div className="hidden md:block headline-02 text-white">Products</div>
                    </>
                ) : (
                    <div className="headline-04 text-white">Our products</div>
                )}
                <div className="relative">
                    {/* Scroll container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex flex-row gap-[1.5625em] md:overflow-x-auto overflow-x-auto scrollbar-hide scroll-smooth pb-4 snap-x snap-mandatory"
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
                        aria-label="Products carousel"
                        tabIndex={0}
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {renderProducts}
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
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                                aria-label="Scroll products left"
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
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                                aria-label="Scroll products right"
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

