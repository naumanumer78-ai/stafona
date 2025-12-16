"use client";

import React from "react";
import Image from "next/image";
import { Product } from "../data/products";
import CheckIcon from "./CheckIcon";

interface ProsAndConsContainerProps {
    product: Product;
}

export default function ProsAndConsContainer({ product }: ProsAndConsContainerProps) {
    if (!product.prosAndCons) {
        return null;
    }

    const { title, titleColor, subTitle, before, after } = product.prosAndCons;
    const prosColor = "var(--bright-green)";
    const consColor = "var(--bright-cerise)";

    return (
        <div className="relative w-full pt-[4.1875em] flex flex-col gap-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
            {/* Title Section */}
            {title && (
                <div className="flex flex-col gap-[0.4375em]">
                    <div
                        className="caption text-white"
                        style={{ color: titleColor || 'white' }}
                    >
                        {title}
                    </div>
                    {subTitle && (
                        <h2 className="headline-05 md:hidden text-white max-w-[22.6875em]">
                            {subTitle}
                        </h2>
                    )}
                    {subTitle && (
                        <h2 className="hidden md:block headline-03 text-white max-w-[37.5em]">
                            {subTitle}
                        </h2>
                    )}
                </div>
            )}

            {/* Before and After Comparison */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[1.5em] md:gap-[2.5em]">
                {/* Before Section (Cons) */}
                {before && (
                    <div className="flex flex-col gap-[1.5em]">

                        {before.image && (
                            <div className="relative w-full h-auto rounded-[0.5em] overflow-hidden">
                                <Image
                                    src={before.image}
                                    alt={before.title}
                                    width={656}
                                    height={411}
                                    className="w-full h-auto object-contain"
                                    sizes="(max-width: 768px) 100vw, 37.5em"
                                />
                            </div>
                        )}
                        <h3 className="headline-05 md:hidden text-white max-w-[22.6875em]">{before.title}</h3>
                        <h3 className="hidden md:block headline-03 text-white max-w-[37.5em]">{before.title}</h3>
                        {before.cons && before.cons.length > 0 && (
                            <div className="flex flex-col gap-[1em]">
                                {before.cons.map((con, index) => (
                                    <div key={index} className="flex flex-row gap-[0.75em] items-start">
                                        <div className="flex-shrink-0 mt-[0.125em]">
                                            <CheckIcon color={consColor} size={16} />
                                        </div>
                                        <p className="body-copy text-white/70 flex-1">{con}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* After Section (Pros) */}
                {after && (
                    <div className="flex flex-col gap-[1.5em]">

                        {after.image && (
                            <div className="relative w-full h-auto rounded-[0.5em] overflow-hidden">
                                <Image
                                    src={after.image}
                                    alt={after.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-contain"
                                    sizes="(max-width: 768px) 100vw, 37.5em"
                                />
                            </div>
                        )}
                        <h3 className="headline-05 md:hidden text-white max-w-[22.6875em]">{after.title}</h3>
                        <h3 className="hidden md:block headline-03 text-white max-w-[37.5em]">{after.title}</h3>
                        {after.pros && after.pros.length > 0 && (
                            <div className="flex flex-col gap-[1em]">
                                {after.pros.map((pro, index) => (
                                    <div key={index} className="flex flex-row gap-[0.75em] items-start">
                                        <div className="flex-shrink-0 mt-[0.125em]">
                                            <CheckIcon color={prosColor} size={16} />
                                        </div>
                                        <p className="body-copy text-white/70 flex-1">{pro}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

