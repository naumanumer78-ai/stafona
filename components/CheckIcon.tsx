"use client";

import React, { useId } from "react";

interface CheckIconProps {
  color?: string;
  size?: number;
}

export default function CheckIcon({ color = "var(--bright-cerise)", size = 16 }: CheckIconProps) {
  const maskId = useId();
  
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id={maskId} style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <path d="M16 0H0V16H16V0Z" fill="white"/>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d="M8.46697 10.8809L5.29297 7.70691L6.70697 6.29291L8.53297 8.11891L13.3025 3.78491L14.6475 5.26491L8.46697 10.8809Z" fill={color}/>
        <path d="M11.5 13.5H2.5V2.5H11V4.5H4.5V11.5H11.5V13.5Z" fill={color}/>
      </g>
    </svg>
  );
}

