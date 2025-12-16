"use client";

import React from "react";

interface RectangleIconProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function RectangleIcon({ 
  color = "white", 
  width = 15, 
  height = 3,
  className = ""
}: RectangleIconProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width={width} height={height} fill={color} />
    </svg>
  );
}

