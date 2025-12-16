"use client";

import React from "react";
import Image from "next/image";
import { Product } from "../data/products";
import { useMobile } from "../hooks/useMobile";

interface OverviewContainerProps {
    product: Product;
}

export default function OverviewContainer({ product }: OverviewContainerProps) {
    const isMobile = useMobile();

    const heroImage: Record<string, string> = {
        inbox: "/images/products/overview/inbox.png",
        studio: "/images/products/overview/studio.png",
        elevate: "/images/products/overview/elevate.png",
        store: "/images/products/overview/store.png",
    };

    const details = [{
        title: "Insights",
        description: "Unlock deeper insights into your submissions with rich analytics on sender behaviour. Measure responses and confidently guide every Inbox with data.",
    },
    {
        title: "Contacts",
        description: "Understand your connections at a glance with detailed contact profiles. See past interactions and submission history to strengthen your professional relationships.",
    },
    {
        title: "Releases",
        description: "Keep your releases organized and on track with a robust workflow. From shortlisting to final mixes, streamline the process and ensure every track is release-ready.",
    },
    {
        title: "Library",
        description: "Gather your tracks, present them beautifully, and store them securely. Organize with projects and send in all with a single click.",
    },
    ];

    const renderImage = (type: string) => {
        if (type.toLowerCase() === "insights") {
            return <div className="relative w-full h-[18.75em] md:h-[38em] md:max-h-[38em] max-h-[26.4375em] overflow-hidden rounded-[0.25em]" style={{ backgroundImage: `linear-gradient(to bottom, var(--midnight-90), var(--midnight-80))` }}>
                <Image src="/images/products/overview/insights.png" alt="Insights" width={297} height={376} className="w-full h-auto object-contain" style={{ height: '150%' }} />
            </div>;
        } else if (type.toLowerCase() === "contacts") {
            return <div className="relative w-full h-[18.75em] md:h-[38em] md:max-h-[38em] max-h-[26.4375em] overflow-hidden rounded-[0.25em]" style={{ backgroundImage: `linear-gradient(to bottom, var(--midnight-90), var(--midnight-80))` }}>
                <Image src="/images/products/overview/contacts.png" alt="Contacts" width={512} height={373} className="w-full h-auto object-contain" style={{ height: '120%' }} />
            </div>;
        } else if (type.toLowerCase() === "releases") {
            return <div className="relative w-full h-[18.75em] md:h-[38em] md:max-h-[38em] overflow-hidden rounded-[0.25em]" style={{ backgroundImage: `linear-gradient(to bottom, #25292E, #3D4145)` }}>
                <Image src="/images/products/overview/releases.png" alt="Releases" width={383} height={309} className="w-full h-auto object-contain" style={{ height: '100%' }} />
            </div>;
        } else if (type.toLowerCase() === "library") {
            return <div className="relative w-full h-[18.75em] md:h-[38em] md:max-h-[38em] overflow-hidden rounded-[0.25em]" style={{ backgroundImage: `linear-gradient(to bottom, #25292E, #3D4145)` }}>
                <Image src="/images/products/overview/library.png" alt="Library" width={503} height={314} className="w-full h-auto object-contain" style={{ height: '110%' }} />
            </div>;
        }
        return null;
    };

    const heroImageSrc = heroImage[product.slug];

    return (
        <div className="w-full pt-[4.1875em]" style={{ backgroundColor: 'var(--midnight)' }}>
            {/* Hero Section */}

            <div className="flex flex-col gap-[1.5em]">
                <div className="flex flex-col gap-[0.4375em]">
                    <div className="caption" style={{ color: product.prosAndCons?.titleColor || 'white' }}>Overview</div>
                    <h2 className="headline-05 md:hidden text-white max-w-[22.6875em]">
                        Built for DJs.<br />
                        Designed for control.
                    </h2>
                    <h2 className="hidden md:block headline-03 text-white max-w-[37.5em]">
                        Built for DJs.<br />
                        Designed for control.
                    </h2>
                </div>
                {heroImageSrc && (
                    <div className="relative w-full h-auto">
                        <Image
                            src={heroImageSrc}
                            alt={product.name || "Overview hero"}
                            width={1200}
                            height={600}
                            className="w-full h-auto object-contain"
                            sizes="(max-width: 768px) 100vw, 75em"
                        />
                    </div>
                )}
            </div>

            {/* Features Grid */}
            {details && details.length > 0 && (
                <div className="pt-[1.5em]">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-[1.5em] md:gap-[1em]">
                        {details.map((detail, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-[1em] rounded-[0.5em] md:h-[36.8125em] p-[1.5em] transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:scale-[1.02] cursor-pointer"
                                style={{ backgroundColor: 'var(--midnight-95)' }}
                            >
                                {renderImage(detail.title.toLowerCase())}
                                <div className="flex flex-col gap-[0.5em]">
                                    <h3 className="headline-05 md:hidden text-white">{detail.title}</h3>
                                    <h3 className="hidden md:block headline-04 text-white">{detail.title}</h3>
                                    <p className="body-copy text-white/70">{detail.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

