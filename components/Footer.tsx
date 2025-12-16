"use client";

import Link from "next/link";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="px-[1.5625em] md:px-[3.5em] py-[2.5em] md:py-[3.75em]" style={{ backgroundColor: '#181C22' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 md:pr-[6.25em] md:pb-[6.25em]">
            {/* Logo and Tagline */}
            <div className="flex flex-row flex-wrap items-start gap-[5.1875em]">
              <Link href="/" className="inline-flex items-center flex-shrink-0">
                <img
                  src="/images/logo.avif"
                  loading="lazy"
                  alt="Stafona"
                />
              </Link>
              <div className="text-white max-w-[19.6875em] md:pt-8 pt-6 text-base md:text-lg">
                Supercharge your workflow and unleash your potential with innovative tech solutions.
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-[9.375em] md:pt-8 pt-6 w-full md:w-auto">
              <div className="flex flex-col gap-4 hidden md:flex">
                <div className="text-white font-semibold pb-[1.875em]">Company</div>
                <nav className="list-none flex flex-col gap-2">
                  <Link href="/" className="text-[#86888B] hover:text-white transition-colors">Home</Link>
                  <Link href="/about" className="text-[#86888B] hover:text-white transition-colors">About Us</Link>
                  <Link href="/team" className="text-[#86888B] hover:text-white transition-colors">Our Team</Link>
                  <Link href="/careers" className="text-[#86888B] hover:text-white transition-colors">Careers</Link>
                  <Link href="/contact" className="text-[#86888B] hover:text-white transition-colors">Contact</Link>
                  <Link href="/faq" className="text-[#86888B] hover:text-white transition-colors">FAQ</Link>
                </nav>
              </div>

              <div className="flex flex-col gap-4 hidden md:flex">
                <div className="text-white font-semibold pb-[1.875em]">Services</div>
                <nav className="list-none flex flex-col gap-2">
                  <Link href="/services" className="text-[#86888B] hover:text-white transition-colors">Our Services</Link>
                  <Link href="/services#web" className="text-[#86888B] hover:text-white transition-colors">Web Development</Link>
                  <Link href="/services#mobile" className="text-[#86888B] hover:text-white transition-colors">Mobile Apps</Link>
                  <Link href="/services#ai" className="text-[#86888B] hover:text-white transition-colors">AI Solutions</Link>
                  <Link href="/services#cloud" className="text-[#86888B] hover:text-white transition-colors">Cloud Services</Link>
                </nav>
              </div>

              <div className="flex flex-col gap-4 w-full md:hidden">
                {/* Company Accordion */}
                <div className="w-full border border-white/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('company')}
                    className="w-full flex items-center justify-between px-5 py-5 text-white font-semibold hover:bg-white/5 transition-colors"
                  >
                    <span>Company</span>
                    <ExpandMoreIcon 
                      className={`transition-transform duration-300 ${
                        openSection === 'company' ? 'rotate-180' : ''
                      }`}
                      sx={{ fontSize: 24, color: '#667eea' }}
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openSection === 'company' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <nav className="list-none flex flex-col gap-2 px-5 pt-5 pb-5 w-full">
                      <Link href="/" className="text-[#86888B] hover:text-white transition-colors w-full block">Home</Link>
                      <Link href="/about" className="text-[#86888B] hover:text-white transition-colors w-full block">About Us</Link>
                      <Link href="/team" className="text-[#86888B] hover:text-white transition-colors w-full block">Our Team</Link>
                      <Link href="/careers" className="text-[#86888B] hover:text-white transition-colors w-full block">Careers</Link>
                      <Link href="/contact" className="text-[#86888B] hover:text-white transition-colors w-full block">Contact</Link>
                      <Link href="/faq" className="text-[#86888B] hover:text-white transition-colors w-full block">FAQ</Link>
                    </nav>
                  </div>
                </div>

                {/* Services Accordion */}
                <div className="w-full border border-white/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('services')}
                    className="w-full flex items-center justify-between px-5 py-5 text-white font-semibold hover:bg-white/5 transition-colors"
                  >
                    <span>Services</span>
                    <ExpandMoreIcon 
                      className={`transition-transform duration-300 ${
                        openSection === 'services' ? 'rotate-180' : ''
                      }`}
                      sx={{ fontSize: 24, color: '#667eea' }}
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openSection === 'services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <nav className="list-none flex flex-col gap-2 px-5 pt-5 pb-5 w-full">
                      <Link href="/services" className="text-[#86888B] hover:text-white transition-colors w-full block">Our Services</Link>
                      <Link href="/services" className="text-[#86888B] hover:text-white transition-colors w-full block">Web Development</Link>
                      <Link href="/services" className="text-[#86888B] hover:text-white transition-colors w-full block">Mobile Apps</Link>
                      <Link href="/services" className="text-[#86888B] hover:text-white transition-colors w-full block">AI Solutions</Link>
                      <Link href="/services" className="text-[#86888B] hover:text-white transition-colors w-full block">Cloud Services</Link>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full md:w-auto md:gap-[1.875em]">
                {/* Follow Us - Desktop */}
                <div className="hidden md:flex flex-col gap-4">
                  <div className="text-white font-semibold pb-[1.875em]">Follow Us</div>
                  <nav className="list-none flex flex-col gap-2">
                    <Link href="https://www.instagram.com/stafona/" target="_blank" className="flex items-center gap-2 text-[#86888B] hover:text-white transition-colors">
                      <InstagramIcon sx={{ fontSize: 20 }} />
                      <span>Instagram</span>
                    </Link>
                    <Link href="https://twitter.com/stafona" target="_blank" className="flex items-center gap-2 text-[#86888B] hover:text-white transition-colors">
                      <TwitterIcon sx={{ fontSize: 20 }} />
                      <span>Twitter</span>
                    </Link>
                    <Link href="https://www.linkedin.com/company/stafona" target="_blank" className="flex items-center gap-2 text-[#86888B] hover:text-white transition-colors">
                      <LinkedInIcon sx={{ fontSize: 20 }} />
                      <span>LinkedIn</span>
                    </Link>
                    <Link href="https://github.com/stafona" target="_blank" className="flex items-center gap-2 text-[#86888B] hover:text-white transition-colors">
                      <GitHubIcon sx={{ fontSize: 20 }} />
                      <span>GitHub</span>
                    </Link>
                  </nav>
                </div>

                {/* Follow Us Accordion - Mobile */}
                <div className="flex md:hidden w-full border border-white/10 rounded-lg overflow-hidden">
                  <div className="w-full">
                    <button
                      onClick={() => toggleSection('social')}
                      className="w-full flex items-center justify-between px-5 py-5 text-white font-semibold hover:bg-white/5 transition-colors"
                    >
                      <span>Follow Us</span>
                      <ExpandMoreIcon 
                        className={`transition-transform duration-300 ${
                          openSection === 'social' ? 'rotate-180' : ''
                        }`}
                        sx={{ fontSize: 24, color: '#667eea' }}
                      />
                    </button>
                    <div 
                      className={`transition-all duration-300 ease-in-out ${
                        openSection === 'social' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <nav className="list-none flex flex-col gap-2 px-5 pt-5 pb-5 w-full">
                        <Link href="https://www.instagram.com/stafona/" target="_blank" className="flex items-center gap-2 text-[#86888B] hover:text-white transition-colors w-full">
                          <InstagramIcon sx={{ fontSize: 20 }} />
                          <span>Instagram</span>
                        </Link>
                        <Link href="https://twitter.com/stafona" target="_blank" className="flex items-center gap-2 text-[#86888B] hover:text-white transition-colors w-full">
                          <TwitterIcon sx={{ fontSize: 20 }} />
                          <span>Twitter</span>
                        </Link>
                        <Link href="https://www.linkedin.com/company/stafona" target="_blank" className="flex items-center gap-2 text-[#86888B] hover:text-white transition-colors w-full">
                          <LinkedInIcon sx={{ fontSize: 20 }} />
                          <span>LinkedIn</span>
                        </Link>
                        <Link href="https://github.com/stafona" target="_blank" className="flex items-center gap-2 text-[#86888B] hover:text-white transition-colors w-full">
                          <GitHubIcon sx={{ fontSize: 20 }} />
                          <span>GitHub</span>
                        </Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-white/10"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <Link href="/" className="text-3xl font-bold text-white">
              Stafona<span className="text-xs align-top">&reg;</span>
            </Link>
            <div className="flex flex-col md:flex-row gap-4 md:gap-[9.25em]">
              <nav className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm text-[#86888B]">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              </nav>
              <div className="text-sm text-[#86888B] pr-0 md:pr-[2.5em]">
                &copy; {new Date().getFullYear()} Stafona Tech Ltd. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
