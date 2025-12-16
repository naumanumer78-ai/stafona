"use client";

import React from "react";
import Image from "next/image";
import { Product } from "../data/products";
import CheckIcon from "./CheckIcon";
import { useMobile } from "../hooks/useMobile";
import Button from "./Button";

interface DownloadContainerProps {
  product: Product;
}

export default function DownloadContainer({ product }: DownloadContainerProps) {
  const isMobile = useMobile();

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[31.25em] md:h-[34.375em] px-[1.5625em] md:px-[3.5em] py-[2.5em] md:py-0 gap-[2em] md:gap-0" style={{ background: `linear-gradient(to right, ${product.download.gradientLeft}, ${product.download.gradientRight})` }}>

      <div className="flex flex-col gap-[1.5em] md:gap-[2em] w-full md:w-auto">
        <div className="flex flex-col gap-[0.5em]">
          <div className="headline-05 md:hidden text-white max-w-[22.6875em]" role="heading" aria-level={2}>{product.download.title}</div>
          <div className="hidden md:block headline-03 text-white max-w-[37.5em]" role="heading" aria-level={2}>{product.download.title}</div>
          <div className="body-copy text-white/70 max-w-[22.75em]" role="text">{product.download.description}</div>
        </div>
        <div className="flex flex-row gap-[1em]">
          <Button href={product.download.downloadLink} variant="primary" style={{ background: product.download.downloadBtnColor, borderColor: product.download.downloadBtnColor, color: '#fff', width: '9.625em' }} aria-label={`Download ${product.name}`}>Download</Button>
          <Button href={product.download.pricingLink} variant="outline" style={{ width: '9.625em' }} aria-label={`See pricing for ${product.name}`}>See pricing</Button>
        </div>
      </div>
      <div className="flex justify-center md:hidden">
        <Image src={product.icon} alt={product.slug} height={233} width={233} className="w-auto h-auto object-contain max-h-[14.5625em]" />
      </div>
      <div className="hidden md:flex flex-1 justify-center">
        <Image src={product.icon} alt={product.slug} height={300} width={300} className="object-contain" />
      </div>

    </div>
  );
}

