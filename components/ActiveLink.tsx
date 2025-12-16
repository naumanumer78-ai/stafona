"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function ActiveLink({ 
  href, 
  children, 
  className = "", 
  activeClassName = "",
  onClick,
  style 
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </Link>
  );
}

