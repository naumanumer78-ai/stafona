"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "../data/products";
import CheckIcon from "./CheckIcon";
import { useMobile } from "../hooks/useMobile";

interface ProductFeatureContainerProps {
  product: Product;
}

export default function ProductFeatureContainer({ product }: ProductFeatureContainerProps) {
  const isMobile = useMobile();
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  if (!product.prosAndCons) {
    return null;
  }

  const { title, features } = product.feature;
  const activeFeature = features[activeFeatureIndex];
  const prosColor = "var(--bright-green)";
  const consColor = "var(--bright-cerise)";

  return (
    <div className="flex flex-col md:flex-row pt-[4.1875em] gap-[1.5em] md:gap-[11.0625em]">
      <div className="w-full md:w-[30%] md:min-w-[30%] flex flex-col gap-[1.5em] md:gap-[11.375em]">
        <div className="flex flex-col gap-[0.4375em]">
          <div className="caption" style={{ color: product.prosAndCons?.titleColor || 'white' }}>
            Features
          </div>

          <h2 className="headline-05 md:hidden text-white max-w-[22.6875em]">
            {title}
          </h2>
          <h2 className="hidden md:block headline-04 text-white max-w-[37.5em]">
            {title}
          </h2>
        </div>
        {activeFeature?.image && isMobile && (
          <div className="rounded-[0.5em] md:pt-[3.9375em] md:px-[6.25em] md:py-[0px] py-[1.875em] overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${product.aboutBackgroundImage})` }}>
            <Image
              key={activeFeatureIndex}
              src={activeFeature.image}
              alt={activeFeature.text}
              width={isMobile ? 341 : 1112}
              height={isMobile ? 314 : 557}
              className="w-full h-auto object-contain md:ml-[25em] ml-[1.25em] animate-fade-in"
            //sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        )}
        <div className="flex flex-col gap-[0.375em]">
          {features.map((feature, index) => {
            const isActive = index === activeFeatureIndex;
            return (
              <div
                key={feature.text}
                className="flex flex-row gap-[0.75em] items-center cursor-pointer"
                onClick={() => setActiveFeatureIndex(index)}
              >
            <div
                  className="flex-shrink-0 w-[0.375em] h-[0.375em] rounded-full self-center mt-[-0.7em]"
                  style={{ backgroundColor: isActive ? (product.prosAndCons?.titleColor || 'white') : 'transparent' }}
              aria-hidden="true"
            />
                <h3 className={`headline-05 transition-all duration-300 ${isActive ? 'text-white' : 'text-white/60 hover:text-white hover:translate-x-1'}`}>
                  {feature.text}
            </h3>
          </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col w-full md:w-[60%] md:max-w-[60%]">
        {activeFeature?.image && !isMobile && (
          <div className="rounded-[0.5em] pt-[3.4375em] pl-[3.4375em] overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${product.aboutBackgroundImage})` }}>
            <Image
              key={activeFeatureIndex}
              src={activeFeature.image}
              alt={activeFeature.text}
              width={1112}
              height={557}
              className="animate-fade-in"
              style={{ marginLeft: '1.5625em' }}
            />
          </div>
        )}
      </div>


      {/* Before and After Comparison */}
      {/* <div className="grid md:grid-cols-2 grid-cols-1 gap-[24px] md:gap-[40px]">
          
          {before && (
            <div className="flex flex-col gap-[24px]">
             
              {before.image && (
                <div className="relative w-full h-auto rounded-[8px] overflow-hidden">
                  <Image
                    src={before.image}
                    alt={before.title}
                    width={656}
                    height={411}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              )}
               <h3 className="headline-04 text-white">{before.title}</h3>
              {before.cons && before.cons.length > 0 && (
                <div className="flex flex-col gap-[16px]">
                  {before.cons.map((con, index) => (
                    <div key={index} className="flex flex-row gap-[12px] items-start">
                      <div className="flex-shrink-0 mt-[2px]">
                        <CheckIcon color={consColor} size={16} />
                      </div>
                      <p className="body-copy text-white/70 flex-1">{con}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {after && (
            <div className="flex flex-col gap-[24px]">
              
              {after.image && (
                <div className="relative w-full h-auto rounded-[8px] overflow-hidden">
                  <Image
                    src={after.image}
                    alt={after.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              )}
            <h3 className="headline-04 text-white">{after.title}</h3>
              {after.pros && after.pros.length > 0 && (
                <div className="flex flex-col gap-[16px]">
                  {after.pros.map((pro, index) => (
                    <div key={index} className="flex flex-row gap-[12px] items-start">
                      <div className="flex-shrink-0 mt-[2px]">
                        <CheckIcon color={prosColor} size={16} />
                      </div>
                      <p className="body-copy text-white/70 flex-1">{pro}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div> */}
    </div>
  );
}

