"use client";

import React from "react";
import Container from "./Container";

const HomeBgTestimonial: React.FC = () => (
  <div
    className="bg-cover bg-center h-[40.3125em] rounded-3xl"
    style={{
      backgroundImage:
        "url(https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67bdb6ab1cd744b7b4ae090b_content-container-mackbook-14_.png)",
    }}
  >
    <Container className="py-12">
      <div className="flex flex-col gap-4">
        <div className="font-mono text-xs font-medium text-white/60">
          TRUSTED BY PROFESSIONALS
        </div>
        <p className="max-w-[29.375em] text-xl leading-snug text-white/90">
          "Trackstack has completely changed the way I manage tracks. I used to
          lose track of my DMs and emails with artists and they would get angry
          I wasn't responding. It created a lot of anxiety and resentment but
          now everything is in one place. I’m responding faster, building better
          relationships, and actually signing more tracks. Game-changer!”
        </p>
        <div className="mt-2">
          <div className="text-white">Jamie Jones</div>
          <div className="text-white/60">
            DJ, Producer &amp; Multi-Label Owner
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default HomeBgTestimonial;
