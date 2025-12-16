"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useMobile } from "../hooks/useMobile";

interface ProductHeaderProps {
  backgroundImage?: string;
  headerImage?: string;
  slug?: string;
  icon?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({
  backgroundImage = "/images/home/header.png",
  headerImage,
  slug,
  icon,
  title = "Get your career on track",
  description = "From day one, know who your top Pro Fans are. Filter and organize these critical connections to ensure you nurture every relationship, no matter where an artist is in their career.",
  ctaText = "Explore products",
  ctaHref = "/book-a-demo",
}) => {
  const isMobile = useMobile();
  return (
    <>
      <style jsx>{`
        .product-header-bg {
          background-image: url(${backgroundImage});
        }
      `}</style>
      <div
        className="product-header-bg relative md:h-[45em] h-[38.75em] w-full bg-cover bg-center bg-no-repeat flex md:flex-row flex-col overflow-hidden"
        role="img"
        aria-label="Header background"
      >
        <div className="md:pl-[3.75em] md:pr-[2.5em] pl-[1.5625em] pr-[1.5625em] md:w-[45%] w-full flex flex-col justify-center  pt-[11.25em] pb-[2.5em] md:pb-0">
          <div className="flex flex-col gap-[0.625em]">
            {slug && (
              <div className="headline-05 text-white flex items-center gap-2">
                {icon ? <Image src={icon} alt="" width={40} height={40} aria-hidden="true" /> : null}
                <span>{slug.charAt(0).toUpperCase() + slug.slice(1)}</span>
              </div>
            )}
            <h1 className="text-white">
              <span className="headline-07 md:hidden">{title}</span>
              <span className="hidden md:block headline-02">{title}</span>
            </h1>
          </div>
          <div className="mt-[8.3125em]">
            <p className="body-copy text-white max-w-[31.9375em]">{description}</p>
            <Button href={ctaHref} className="mt-[2em]" variant="outline" scrollTo="Rectangle-132">{ctaText}</Button>
          </div>
        </div>
        {headerImage && !isMobile && (
          <div className="md:w-[55%] w-full flex items-end justify-end md:pr-[3.75em] pr-[1.5625em] pl-[1.5625em] pb-0 md:pb-0 md:pt-0 pt-0 relative md:overflow-visible overflow-hidden">
            <div className="relative w-full md:w-[120%] h-full md:-mt-[3.75em] md:ml-[10%] transform md:rotate-[-2deg] md:scale-110">
              <Image
                src={headerImage}
                alt={title || "Product header"}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductHeader;

