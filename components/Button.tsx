"use client";

import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  scrollTo?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  scrollTo,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded border transition-colors font-medium";
  
  const variantClasses = {
    primary: "bg-white text-black border-white hover:bg-gray-100",
    secondary: "bg-black text-white border-black hover:bg-gray-900",
    outline: "bg-transparent text-white border-white hover:bg-white/10",
    ghost: "bg-transparent text-white border-transparent hover:bg-white/10",
  };

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-12 px-4 text-base",
    lg: "h-14 px-6 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Spring animation scroll function
  const springScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const startPosition = window.pageYOffset || window.scrollY;
    const targetPosition = target.offsetTop;
    const distance = targetPosition - startPosition;
    
    // Spring parameters
    const mass = 1;
    const stiffness = 100;
    const damping = 15;

    let startTime: number | null = null;
    const omega = Math.sqrt(stiffness / mass);
    const zeta = damping / (2 * Math.sqrt(stiffness * mass));

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000; // Convert to seconds
      
      let progress: number;
      if (zeta < 1) {
        // Underdamped spring
        const omegaD = omega * Math.sqrt(1 - zeta * zeta);
        progress = 1 - Math.exp(-zeta * omega * elapsed) * 
          (Math.cos(omegaD * elapsed) + (zeta * omega / omegaD) * Math.sin(omegaD * elapsed));
      } else {
        // Overdamped or critically damped
        progress = 1 - Math.exp(-omega * elapsed) * (1 + omega * elapsed);
      }

      const currentPosition = startPosition + distance * progress;
      window.scrollTo(0, currentPosition);

      // Continue animating until we're close enough (within 1px)
      if (Math.abs(currentPosition - targetPosition) > 1) {
        requestAnimationFrame(animate);
      } else {
        window.scrollTo(0, targetPosition);
      }
    };

    requestAnimationFrame(animate);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (scrollTo) {
      e.preventDefault();
      springScroll(scrollTo);
    }
    if (onClick) {
      onClick(e);
    }
  };

  // Check if it's an external link
  const isExternal = href.startsWith("http") || href.startsWith("//");

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default Button;

