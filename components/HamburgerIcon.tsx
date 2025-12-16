"use client";

import React from "react";

interface HamburgerIconProps {
    color?: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function HamburgerIcon({
    color = "white",
    width = 50,
    height = 50,
    className = ""
}: HamburgerIconProps) {
    const lineHeight = 2; // 0.5px * 4 = 2px in viewBox (0.5px actual = 2px in 24px viewBox)
    const gap = 6; // 1.5 * 4 = 6px in viewBox (1.5px actual = 6px in 24px viewBox)
    const marginLeft = 10;

    return (
        <svg
            width={40}
            height={40}
            viewBox={`0 0 ${30} ${30}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect x={9} y={10} width={16} height={3} fill={color} />
            <rect x={-7} y={16} width={23} height={3} fill={color} rx={1} />
        </svg>
    );
}

