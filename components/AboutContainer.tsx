"use client";

import React from "react";
import Image from "next/image";
import { Product } from "../data/products";
import { useMobile } from "../hooks/useMobile";

interface AboutContainerProps {
    product: Product;
}

export default function AboutContainer({ product }: AboutContainerProps) {
    const isMobile = useMobile();

    if (!product.aboutTitle || !product.aboutFeatures) {
        return null;
    }

    return (
        <div
            className="relative w-full pt-[4.1875em] flex flex-col gap-[3.5em]"
            style={{ backgroundColor: 'var(--midnight)' }}>
            <h2 className="text-white max-w-[56.75em]">
                <span className="headline-05 md:hidden">{product.aboutTitle}</span>
                <span className="hidden md:block headline-02">{product.aboutTitle}</span>
            </h2>

            {product.aboutImage && (
                <div className="rounded-[0.5em] md:pt-[3.9375em] md:px-[6.25em] md:py-[0px] py-[1.875em] overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${product.aboutBackgroundImage})` }}>
                    <Image
                        src={product.aboutImage}
                        alt={product.name}
                        width={isMobile ? 341 : 1112}
                        height={isMobile ? 314 : 557}
                        className="w-full h-auto object-contain md:ml-0 ml-[1.25em]"
                    //sizes="(max-width: 768px) 100vw, 1200px"
                    />
                </div>
            )}

            {/* Feature Cards */}
            {product.aboutFeatures && product.aboutFeatures.length > 0 && (
                <div className="mx-auto">
                    {/* Desktop: Horizontal layout */}
                    <div className="hidden md:grid md:grid-cols-3 md:gap-[1.5em]">
                        {product.aboutFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-[1em]"
                            >
                                {/* Icon */}
                                {feature.icon && (
                                    <div
                                        className="w-[3em] h-[3em] rounded-[0.5em] flex items-center justify-center"
                                        style={{
                                            backgroundColor: feature.iconColor || 'var(--bright-purple)',
                                        }}
                                    >
                                        <Image
                                            src={feature.icon}
                                            alt=""
                                            width={30}
                                            height={30}
                                            className="w-8 h-8"
                                            aria-hidden="true"
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="flex flex-col gap-[0.5em]">
                                    <h3 className="headline-04 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="body-copy" style={{ color: 'var(--midnight-50)' }}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Vertical layout */}
                    <div className="flex md:hidden flex-col gap-[1.5em]">
                        {product.aboutFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-[1.5em] items-start"
                            >
                                {/* Icon */}
                                {feature.icon && (
                                    <div
                                        className="flex-shrink-0 w-[4em] h-[4em] rounded-[0.25em] flex items-center justify-center"
                                        style={{
                                            backgroundColor: feature.iconColor || 'var(--bright-purple)',
                                        }}
                                    >
                                        <Image
                                            src={feature.icon}
                                            alt=""
                                            width={32}
                                            height={32}
                                            className="w-8 h-8"
                                            aria-hidden="true"
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="flex-1 flex flex-col gap-[0.5em]">
                                    <h3 className="headline-05 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="body-copy" style={{ color: 'var(--midnight-50)' }}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

