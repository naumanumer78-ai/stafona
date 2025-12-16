"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import ProductsMegaMenu from "./ProductsMegaMenu";
import HamburgerIcon from "./HamburgerIcon";
import ActiveLink from "./ActiveLink";
import { products as productData } from "../data/products";
import {
  products,
  company,
  resources,
  productDropdown,
  type NavIconItem,
  type DropdownItem,
} from "./navConfig";

const SectionList: React.FC<{ title: string; items: NavIconItem[] }> = ({
  title,
  items,
}) => (
  <div className="space-y-2">
    <div className="text-xs uppercase tracking-wide text-white/60">{title}</div>
    {items.map((it) => (
      <Link
        key={it.label}
        href={it.href}
        className="inline-flex items-center gap-2 py-1.5 text-sm text-white/90 hover:text-white"
      >
        {it.iconSrc && <img src={it.iconSrc} loading="lazy" alt="" className="h-4 w-4" />}
        <div>{it.label}</div>
      </Link>
    ))}
    <div className="my-3 h-px bg-white/10"></div>
  </div>
);

const moreLinks = [
  // { href: "/mobile-app", label: "Mobile App" },
  { href: "/support", label: "Support" },
  { href: "/faq", label: "FAQ" },
];

const productSlugs = ["inbox", "studio", "elevate", "store"];

const productImages: Record<string, string> = {
  inbox: "/images/products/inbox.png",
  studio: "/images/products/studio.png",
  elevate: "/images/products/elevate.png",
  store: "/images/products/store.png",
};

const productDescriptions: Record<string, string> = {
  inbox: "All tracks, one powerful inbox.",
  studio: "A community builder for a scalable, sustainable career.",
  elevate: "Monetize your expertise, with all your professional service in a first-of-its-kind store.",
  store: "Monetise your expertise, with all your professional services in a first-of-its-kind store.",
};

const MobileDropdown: React.FC<{
  isMobile?: boolean;
  label: string;
  id: string;
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  onCloseMenu?: () => void;
}> = ({ label, id, children, isMobile = false, onOpenChange, onCloseMenu }) => {
  const [open, setOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const toggle = useCallback(() => {
    const newOpen = !open;
    setOpen(newOpen);
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  }, [open, onOpenChange]);

  const checkScrollability = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    if (open && id === "mobile-products") {
      // Use requestAnimationFrame to ensure DOM is fully rendered
      const checkAfterRender = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            checkScrollability();
          });
        });
      };

      // Initial check with delay to ensure layout is complete
      const timeoutId = setTimeout(checkAfterRender, 100);

      const container = scrollContainerRef.current;
      if (container) {
        container.addEventListener("scroll", checkScrollability);
        window.addEventListener("resize", checkScrollability);

        // Use ResizeObserver to detect when container size changes
        const resizeObserver = new ResizeObserver(() => {
          checkScrollability();
        });
        resizeObserver.observe(container);

        return () => {
          clearTimeout(timeoutId);
          container.removeEventListener("scroll", checkScrollability);
          window.removeEventListener("resize", checkScrollability);
          resizeObserver.disconnect();
        };
      }
    }
  }, [open, id, checkScrollability]);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 300; // Width of card (280px) + gap (24px)
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const newScroll = direction === "left"
      ? currentScroll - scrollAmount
      : currentScroll + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  }, []);

  const isProducts = id === "mobile-products";

  return (
    <div className="relative">
      <button
        onClick={toggle}
        className={`w-full flex items-center justify-between py-2 px-3 text-[#0D1117] hover:bg-gray-50 rounded-md ${isMobile ? "" : "text-sm font-medium"}`}
        style={isMobile ? {
          fontFamily: "'Next Pan Book', sans-serif",
          fontWeight: 500,
          fontSize: '48px',
          lineHeight: '56px',
          letterSpacing: '0%'
        } : {}}
        aria-expanded={open}
        aria-controls={`mobile-dropdown-${id}`}
      >
        <span>{label}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div
          id={`mobile-dropdown-${id}`}
          className={isProducts ? "mt-6" : "mt-1 pl-4 space-y-1"}
        >
          {isProducts ? (
            <div className="flex flex-col gap-4">
              {/* Horizontal Scrolling Product Cards */}
              <div className="relative -ml-[24px] pl-[24px] pr-[24px]">
                {/* Left Scroll Button */}
                {canScrollLeft && (
                  <button
                    onClick={() => scroll("left")}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/90 hover:bg-black active:bg-black/70 text-white flex items-center justify-center transition-all shadow-lg backdrop-blur-sm touch-manipulation"
                    aria-label="Scroll left"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                )}

                {/* Right Scroll Button */}
                {canScrollRight && (
                  <button
                    onClick={() => scroll("right")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/90 hover:bg-black active:bg-black/70 text-white flex items-center justify-center transition-all shadow-lg backdrop-blur-sm touch-manipulation"
                    aria-label="Scroll right"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                )}

                <div
                  ref={scrollContainerRef}
                  className="flex gap-4 overflow-x-auto scrollbar-hide min-w-0 items-start"
                >
                  {productSlugs.map((slug) => {
                    const product = productData[slug];
                    if (!product) return null;
                    const productImage = productImages[slug];
                    const productDescription = productDescriptions[slug];
                    return (
                      <Link
                        key={slug}
                        href={`/products/${slug}`}
                        onClick={onCloseMenu}
                        className="group flex flex-col hover:opacity-90 transition-opacity w-[280px] flex-shrink-0 gap-[16px] items-start"
                      >
                        {/* Device Mockup Image */}
                        <div className="relative w-full h-[200px] rounded-lg overflow-hidden rounded-[8px]">
                          {productImage && (
                            <Image
                              src={productImage}
                              alt={product.name}
                              fill
                              sizes="280px"
                              className="object-cover rounded-[8px]"
                            />
                          )}
                        </div>

                        {/* Icon and Title */}
                        <div className="flex items-center gap-3">
                          {product.icon && (
                            <div className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0">
                              <Image
                                src={product.icon}
                                alt={product.name}
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                              />
                            </div>
                          )}
                          <div
                            className="group-hover:text-gray-700 flex items-center"
                            style={{
                              fontFamily: "'Next Pan Book', sans-serif",
                              fontWeight: 500,
                              fontSize: '24px',
                              lineHeight: '24px',
                              letterSpacing: '0%',
                              color: '#0D1117',
                              height: '40px'
                            }}
                          >
                            {product.slug.charAt(0).toUpperCase() + product.slug.slice(1)}
                          </div>
                        </div>

                        {/* Description */}
                        <p
                          className="line-clamp-2"
                          style={{
                            fontFamily: "'Next Pan Book', sans-serif",
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20px',
                            letterSpacing: '0%',
                            color: '#0D1117'
                          }}
                        >
                          {productDescription}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>

              {/* More links - After product cards */}
              <div className="flex flex-col gap-4 pt-[70px]">
                <div className="space-y-1">
                  <div
                    className="mb-3"
                    style={{
                      fontFamily: "'Next Pan Book', sans-serif",
                      fontWeight: 500,
                      fontSize: '24px',
                      lineHeight: '24px',
                      letterSpacing: '0%',
                      color: '#000000'
                    }}
                  >
                    More
                  </div>
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onCloseMenu}
                      className="block py-2 transition-colors"
                      style={{
                        fontFamily: "'Next Pan Book', sans-serif",
                        fontWeight: 300,
                        fontSize: '18px',
                        lineHeight: '22px',
                        letterSpacing: '0%',
                        color: '#86888B'
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            children
          )}
        </div>
      )}
    </div>
  );
};

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setProductsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <div className="w-full" role="banner">
        <Container className="flex items-center justify-between py-3">
          <Link href="/" aria-current="page" className="inline-flex items-center" aria-label="home">
            <img
              loading="lazy"
              src="/images/logo.avif"
              alt="Trackstack"
              className="h-6 w-auto"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="menu"
            aria-controls="mobile-nav-overlay"
            aria-haspopup="menu"
            aria-expanded={isOpen}
          >
            <HamburgerIcon color={isOpen ? "black" : "white"} />
          </button>
        </Container>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60]"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-overlay"
        className={`fixed inset-0 z-[70] w-full bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-nav-title"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 ">
            <a href="/">
              <img
                loading="lazy"
                src="/images/logo.avif"
                alt="Stafona"
                className="h-6 w-auto"
              />
            </a>
            <button
              onClick={closeMenu}
              className="p-2 text-gray-600 hover:text-gray-800"
              aria-label="Close menu"
            >
              <HamburgerIcon color="black" width={40} height={40} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-[24px] transition-[padding-top] duration-300 ease-in-out" style={{ paddingTop: productsOpen ? '20px' : '0px' }}>
            <div className="space-y-1">
              <ActiveLink
                href="/"
                onClick={closeMenu}
                className="block pb-2 px-3 text-[#0D1117] hover:bg-gray-50 rounded-md"
                activeClassName="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:from-[#667eea] hover:to-[#764ba2]"
                style={{
                  fontFamily: "'Next Pan Book', sans-serif",
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '56px',
                  letterSpacing: '0%'
                }}
              >
                Home
              </ActiveLink>

              <ActiveLink
                href="/services"
                onClick={closeMenu}
                className="block pb-2 px-3 text-[#0D1117] hover:bg-gray-50 rounded-md"
                activeClassName="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:from-[#667eea] hover:to-[#764ba2]"
                style={{
                  fontFamily: "'Next Pan Book', sans-serif",
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '56px',
                  letterSpacing: '0%'
                }}
              >
                Our Services
              </ActiveLink>

              {/* <ActiveLink
                href="/projects"
                onClick={closeMenu}
                className="block pb-2 px-3 text-[#0D1117] hover:bg-gray-50 rounded-md"
                activeClassName="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:from-[#667eea] hover:to-[#764ba2]"
                style={{
                  fontFamily: "'Next Pan Book', sans-serif",
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '56px',
                  letterSpacing: '0%'
                }}
              >
                Projects
              </ActiveLink> */}

              <ActiveLink
                href="/about"
                onClick={closeMenu}
                className="block pb-2 px-3 text-[#0D1117] hover:bg-gray-50 rounded-md"
                activeClassName="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:from-[#667eea] hover:to-[#764ba2]"
                style={{
                  fontFamily: "'Next Pan Book', sans-serif",
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '56px',
                  letterSpacing: '0%'
                }}
              >
                About Us
              </ActiveLink>

              <ActiveLink
                href="/contact"
                onClick={closeMenu}
                className="block pb-2 px-3 text-[#0D1117] hover:bg-gray-50 rounded-md"
                activeClassName="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:from-[#667eea] hover:to-[#764ba2]"
                style={{
                  fontFamily: "'Next Pan Book', sans-serif",
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '56px',
                  letterSpacing: '0%'
                }}
              >
                Contact Us
              </ActiveLink>

              <ActiveLink
                href="/careers"
                onClick={closeMenu}
                className="block pb-2 px-3 text-[#0D1117] hover:bg-gray-50 rounded-md"
                activeClassName="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:from-[#667eea] hover:to-[#764ba2]"
                style={{
                  fontFamily: "'Next Pan Book', sans-serif",
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '56px',
                  letterSpacing: '0%'
                }}
              >
                Careers
              </ActiveLink>

              <ActiveLink
                href="/team"
                onClick={closeMenu}
                className="block pb-2 px-3 text-[#0D1117] hover:bg-gray-50 rounded-md"
                activeClassName="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:from-[#667eea] hover:to-[#764ba2]"
                style={{
                  fontFamily: "'Next Pan Book', sans-serif",
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '56px',
                  letterSpacing: '0%'
                }}
              >
                Team
              </ActiveLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

const DropdownCard: React.FC<{ item: DropdownItem }> = ({ item }) => (
  <Link
    href={item.href}
    className="flex items-start justify-between gap-4 rounded-lg p-4 hover:bg-trackstack-midnight80 transition"
    tabIndex={0}
  >
    <div className="flex-1">
      <h1 className="text-sm font-semibold text-white">{item.title}</h1>
      {item.description && (
        <div className="mt-1 text-sm text-white/70">{item.description}</div>
      )}
    </div>
    {item.imageSrc && (
      <div className="shrink-0">
        <img src={item.imageSrc} loading="lazy" alt="" className="h-24 w-24 object-contain" />
      </div>
    )}
  </Link>
);

const DropdownMenu: React.FC<{
  label: string;
  id: string;
  children: React.ReactNode;
  isMegaMenu?: boolean;
  onOpenChange?: (open: boolean) => void;
  onCloseMenu?: () => void;
}> = ({ label, id, children, isMegaMenu = false, onOpenChange, onCloseMenu }) => {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  const clearClose = useCallback(() => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    // Don't auto-close mega menus
    if (isMegaMenu) {
      return;
    }
    clearClose();
    closeTimeout.current = window.setTimeout(() => {
      setOpen(false);
      if (isMegaMenu && onOpenChange) {
        onOpenChange(false);
      }
    }, 150) as unknown as number;
  }, [clearClose, isMegaMenu, onOpenChange]);

  const openMenu = useCallback(() => {
    clearClose();
    setOpen(true);
    if (isMegaMenu && onOpenChange) {
      onOpenChange(true);
    }
  }, [clearClose, isMegaMenu, onOpenChange]);

  const closeMenu = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  const closeMenuImmediate = useCallback(() => {
    clearClose();
    setOpen(false);
    if (isMegaMenu && onOpenChange) {
      onOpenChange(false);
    }
  }, [clearClose, isMegaMenu, onOpenChange]);
  const toggle = useCallback(() => {
    const newOpen = !open;
    setOpen(newOpen);
    if (isMegaMenu && onOpenChange) {
      onOpenChange(newOpen);
    }
  }, [open, isMegaMenu, onOpenChange]);

  return (
    <>
      <div className="relative" onMouseEnter={openMenu} onMouseLeave={isMegaMenu ? undefined : closeMenu}>
        <div
          className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium cursor-pointer select-none transition-colors ${isMegaMenu && open
            ? "text-black/80 hover:text-black"
            : "text-white/80 hover:text-white"
            }`}
          id={`w-dropdown-toggle-${id}`}
          aria-controls={`w-dropdown-list-${id}`}
          aria-haspopup="menu"
          aria-expanded={open}
          role="button"
          tabIndex={0}
          onClick={toggle}
          onMouseEnter={openMenu}
          onMouseLeave={isMegaMenu ? undefined : closeMenu}
        >
          <div>{label}</div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {isMegaMenu ? (
        <nav
          className={`fixed left-0 right-0 top-[73px] rounded-lg shadow-xl ring-1 ring-white/10 z-50 bg-white ${open ? "block" : "hidden"
            }`}
          id={`w-dropdown-list-${id}`}
          aria-labelledby={`w-dropdown-toggle-${id}`}
          style={{ opacity: open ? 1 : 0 }}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenuImmediate}
        >
          {React.isValidElement(children) && React.cloneElement(children as React.ReactElement<any>, {
            onClose: () => {
              setOpen(false);
              if (onOpenChange) {
                onOpenChange(false);
              }
            }
          })}
        </nav>
      ) : (
        <nav
          className={`absolute left-0 mt-2 w-[28rem] rounded-lg bg-trackstack-midnight text-white shadow-xl ring-1 ring-white/10 z-50 p-4 ${open ? "block" : "hidden"
            }`}
          id={`w-dropdown-list-${id}`}
          aria-labelledby={`w-dropdown-toggle-${id}`}
          style={{ opacity: open ? 1 : 0 }}
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
        >
          {children}
        </nav>
      )}
    </>
  );
};

const DropdownSimple: React.FC<{
  isMobile?: boolean;
  label: string;
  id: string;
  children: React.ReactNode;
}> = ({ label, id, children, isMobile = false }) => {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<number | null>(null);
  const clearClose = useCallback(() => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);
  const scheduleClose = useCallback(() => {
    clearClose();
    closeTimeout.current = window.setTimeout(() => setOpen(false), 150) as unknown as number;
  }, [clearClose]);
  const openMenu = useCallback(() => {
    clearClose();
    setOpen(true);
  }, [clearClose]);
  const closeMenu = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  return (
    <div className="relative md:hidden" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <div
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white cursor-pointer select-none"
        id={`w-dropdown-toggle-${id}`}
        aria-controls={`w-dropdown-list-${id}`}
        aria-haspopup="menu"
        aria-expanded={open}
        role="button"
        tabIndex={0}
        onClick={toggle}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        <div className={` ${isMobile ? "text-[48px]" : "text-sm"}`}>{label}</div>
      </div>
      <nav
        className="absolute left-0 mt-2 w-64 rounded-lg bg-trackstack-midnight text-white shadow-xl ring-1 ring-white/10 z-50 p-3"
        id={`w-dropdown-list-${id}`}
        aria-labelledby={`w-dropdown-toggle-${id}`}
        style={{ display: open ? "block" : "none", opacity: open ? 1 : 0 }}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
      >
        {children}
        <div className="my-3 h-px bg-white/10"></div>
      </nav>
    </div>
  );
};

const DesktopNav: React.FC<{ onMegaMenuOpenChange?: (open: boolean) => void; megaMenuOpen?: boolean }> = ({ onMegaMenuOpenChange, megaMenuOpen = false }) => (
  <div className="hidden md:block">
    <div className="flex justify-between p-[25px]">
      <div>
        <Link href="/" aria-current="page" className="inline-flex items-center" aria-label="home">
          <img
            src="/images/logo.avif"
            loading="lazy"
            alt="Stafona"
            className="w-[150px] h-[24px]"
          />
        </Link>
      </div>
      <div>
        <nav role="navigation" className="flex items-center gap-2">
          <ActiveLink 
            href="/" 
            className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors relative"
            activeClassName="text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2]"
          >
            Home
          </ActiveLink>
          
          <ActiveLink 
            href="/services" 
            className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors relative"
            activeClassName="text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2]"
          >
            Our Services
          </ActiveLink>
          
          {/* <ActiveLink 
            href="/projects" 
            className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors relative"
            activeClassName="text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2]"
          >
            Projects
          </ActiveLink> */}
          
          <ActiveLink 
            href="/about" 
            className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors relative"
            activeClassName="text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2]"
          >
            About Us
          </ActiveLink>
          
          <ActiveLink 
            href="/contact" 
            className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors relative"
            activeClassName="text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2]"
          >
            Contact Us
          </ActiveLink>
          
          <ActiveLink 
            href="/careers" 
            className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors relative"
            activeClassName="text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2]"
          >
            Careers
          </ActiveLink>
          
          <ActiveLink 
            href="/team" 
            className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors relative"
            activeClassName="text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2]"
          >
            Team
          </ActiveLink>
        </nav>
      </div>
    </div>
  </div>
);

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur bg-[#0a0e27]/95" : "bg-transparent"
      }`}
    >
      <MobileNav />
      <DesktopNav />
    </div>
  );
};

export default Navigation;
