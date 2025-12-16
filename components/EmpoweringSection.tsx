"use client";

import React, { useState } from "react";
import Container from "./Container";

const roles = [
  "Producers",
  "DJs",
  "Creators",
  "Educators",
  "Managers",
  "Promoters",
  "Curators",
];

const customers = [
  {
    name: "@expertsonly",
    img: "https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/681af81606eec1b07b258092_Frame%20557.svg",
    role: "Label",
  },
  {
    name: "@Kick&Bass",
    img: "https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/681b0214699a7de182a2f425_Frame%20557%20(1).svg",
    role: "Studio",
  },
  {
    name: "@Hugel",
    img: "https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/681b03452e90c78535d86737_Frame%20557%20(3).svg",
    role: "DJ, Producer",
  },
  {
    name: "@blackbook",
    img: "https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/681b04e2ebb95555a924e7fa_Frame%20557%20(5).svg",
    role: "Label",
  },
  {
    name: "@IlarioAlicante",
    img: "https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/686be54aabbc71a019680691_Ilario-Alicante%20(1).jpg",
    role: "DJ, Producer",
  },
  {
    name: "@Nervous",
    img: "https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/681b05efee312d954433d8bd_Frame%20557%20(8).svg",
    role: "Label",
  },
  {
    name: "@Traceamounts",
    img: "https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/681b066681ced540075b464f_Frame%20557%20(9).svg",
    role: "Label",
  },
  {
    name: "@Joshwa",
    img: "https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/681b07133ebcaf4ccf08c566_Frame%20557%20(10).svg",
    role: "DJ, Producer",
  },
  {
    name: "@MOODCHILD",
    img: "https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/686be3f17775fdaa829c98f5_mood.jpg",
    role: "Label",
  },
  {
    name: "@MandaMoor",
    img: "https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/681b07ee97c02e8d1a8e537d_Frame%20557%20(12).svg",
    role: "DJ, Producer",
  },
];

const EmpoweringSection: React.FC = () => {
  const [hoverKey, setHoverKey] = useState<"left" | "middle" | "right" | null>(null);
  const phraseCls = (key: "left" | "middle" | "right") => {
    const color =
      key === "left"
        ? "text-trackstack-midCerice"
        : key === "middle"
        ? "text-trackstack-midOrange"
        : "text-trackstack-midPurple";
    return `text-3xl transition-colors duration-300 ${hoverKey === key ? color : "text-white/40"}`;
  };

  return (
  <section className="py-36">
    <Container>
      <div className="mb-6">
        <div className="font-mono text-xs font-medium text-white/60">
          SUPERCHARGE YOUR CAREER
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-normal leading-tight">
        The one music platform behind it all
        <br />
      </h2>
      <div className="flex gap-4">
        <p className={phraseCls("left")}>Manage your relationships.</p>
        <p className={phraseCls("middle")}>Build your community.</p>
        <p className={phraseCls("right")}>Monetize your expertise.</p>
      </div>

        <div className="mt-12">
        <div className="grid grid-cols-1 md:[grid-template-columns:4fr_2.5fr_5.5fr] gap-6">
          {/* Wide column (right on desktop) */}
          <div
            className="group relative md:order-3 rounded-2xl overflow-hidden ring-1 ring-white/10"
            onMouseEnter={() => setHoverKey("right")}
            onMouseLeave={() => setHoverKey(null)}
          >
            <img
              src="/images/3.png"
              alt="Super Serious Coaching"
              className="h-64 sm:h-80 md:h-[26rem] w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end bg-trackstack-midnight70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-white text-2xl font-medium">Super Serious Coaching</div>
            </div>
          </div>

          {/* Medium column (left on desktop) */}
          <div
            className="group relative md:order-1 rounded-2xl overflow-hidden ring-1 ring-white/10"
            onMouseEnter={() => setHoverKey("left")}
            onMouseLeave={() => setHoverKey(null)}
          >
            <img
              src="/images/5.png"
              alt="Jamie Jones"
              className="h-64 sm:h-80 md:h-[26rem] w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end bg-trackstack-midnight70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-white text-2xl font-medium">Jamie Jones</div>
            </div>
          </div>

          {/* Thin column (middle on desktop) */}
          <div
            className="group relative md:order-2 rounded-2xl overflow-hidden ring-1 ring-white/10"
            onMouseEnter={() => setHoverKey("middle")}
            onMouseLeave={() => setHoverKey(null)}
          >
            <img
              src="/images/1.png"
              alt="Placeholder"
              className="h-64 sm:h-80 md:h-[26rem] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-end bg-trackstack-midnight70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 text-white text-2xl font-medium">Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
  );
};

export default EmpoweringSection;
