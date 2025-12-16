"use client";

import React, { useState } from "react";
import Container from "./Container";

const steps = [
  { n: 1, title: "Select your plan", color: "text-trackstack-brightCerice", href: "/pricing" },
  { n: 2, title: "Set up your Profile", color: "text-trackstack-brightPurple", href: "#profile" },
  { n: 3, title: "Start building your network", color: "text-trackstack-brightYellow", href: "#network" },
];

const images = [
  "/images/5.png",
  "/images/3.png",
  "/images/1.png",
];

const CtaSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-normal leading-tight">
            It’s easy to get started
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: single image that changes per step */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <a href={steps[current].href} className="block rounded-3xl overflow-hidden">
              <img
                src={images[current]}
                alt={steps[current].title}
                className="w-full h-64 sm:h-80 md:h-[26rem] object-cover object-center"
                loading="lazy"
              />
            </a>
          </div>

          {/* Right: vertical steps */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  onMouseEnter={() => setCurrent(i)}
                  className="block group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className={`${s.color} text-2xl md:text-3xl font-semibold tabular-nums`}>{String(s.n).padStart(2, '0')}</span>
                    <span className="text-white/80 group-hover:text-white transition-colors text-xl md:text-3xl font-medium">
                      {s.title}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mt-3 h-px bg-white/20" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a
                href="/pricing"
                className="inline-flex items-center rounded-full border bg-white text-gray-900 px-6 py-3 text-base md:text-lg font-medium hover:bg-gray-100"
              >
                Start now
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
