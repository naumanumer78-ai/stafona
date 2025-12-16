"use client";

import { useEffect, useRef } from "react";

interface Client {
  name: string;
  logo?: string;
  invertImage?: boolean;
}

const clients: Client[] = [
  { name: "Skild", logo: "/images/client/skild.webp", invertImage: false },
  { name: "Sugarwish", logo: "/images/client/sugarwish.svg", invertImage: false },
  { name: "Mozaic", logo: "/images/client/mozaic.svg", invertImage: false },
  { name: "SweetHome3D", logo: "/images/client/sweet.png", invertImage: false },
  { name: "Cyber Wolf", logo: "/images/client/cyberwolf.png", invertImage: false },
  { name: "SigParser", logo: "/images/client/sigparser.png", invertImage: true },
  { name: "TrackStack", logo: "/images/client/trackstack.svg", invertImage: true },
  { name: "Azavista", logo: "/images/client/azavista.svg", invertImage: false },
  { name: "Imanu", logo: "/images/client/imanu.svg", invertImage: false },
  { name: "Oteroqa", logo: "/images/client/oteroqa.png", invertImage: true },
  { name: "JuiceMind", logo: "/images/client/juice.png", invertImage: true },
  { name: "Fractionaltax", logo: "/images/client/fractionaltax.svg", invertImage: true },
];

export default function ClientsMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: 'var(--midnight-95)' }}>
      <div className="max-w-[1400px] mx-auto px-[1.5625em] md:px-[3.5em] mb-10">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#667eea]">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Clients We've Worked With
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0f1a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0f1a] to-transparent z-10 pointer-events-none"></div>

        {/* First Row - Scrolling Left */}
        <div className="flex mb-6 marquee-container">
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-4"
              >
                <div className="bg-[#020202] border border-white/10 rounded-xl px-8 py-5 flex items-center justify-center min-w-[200px] hover:border-[#667eea]/50 transition-colors group">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className={`h-8 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all ${client.invertImage ? 'invert' : ''}`}
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <span className={`text-lg font-bold bg-gradient-to-r from-white/60 to-white/40 bg-clip-text text-transparent group-hover:from-white group-hover:to-white/80 transition-all ${client.logo ? 'hidden' : ''}`}>
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee" aria-hidden="true">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`row1-dup-${index}`}
                className="flex-shrink-0 mx-4"
              >
                <div className="bg-[#020202] border border-white/10 rounded-xl px-8 py-5 flex items-center justify-center min-w-[200px] hover:border-[#667eea]/50 transition-colors group">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className={`h-8 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all ${client.invertImage ? 'invert' : ''}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <span className={`text-lg font-bold bg-gradient-to-r from-white/60 to-white/40 bg-clip-text text-transparent group-hover:from-white group-hover:to-white/80 transition-all ${client.logo ? 'hidden' : ''}`}>
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="flex marquee-container-reverse">
          <div className="flex animate-marquee-reverse">
            {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-4"
              >
                <div className="bg-[#020202] border border-white/10 rounded-xl px-8 py-5 flex items-center justify-center min-w-[200px] hover:border-[#667eea]/50 transition-colors group">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className={`h-8 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all ${client.invertImage ? 'invert' : ''}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <span className={`text-lg font-bold bg-gradient-to-r from-white/60 to-white/40 bg-clip-text text-transparent group-hover:from-white group-hover:to-white/80 transition-all ${client.logo ? 'hidden' : ''}`}>
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee-reverse" aria-hidden="true">
            {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
              <div
                key={`row2-dup-${index}`}
                className="flex-shrink-0 mx-4"
              >
                <div className="bg-[#131929] border border-white/10 rounded-xl px-8 py-5 flex items-center justify-center min-w-[200px] hover:border-[#667eea]/50 transition-colors group">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className={`h-8 w-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all ${client.invertImage ? 'invert' : ''}`}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <span className={`text-lg font-bold bg-gradient-to-r from-white/60 to-white/40 bg-clip-text text-transparent group-hover:from-white group-hover:to-white/80 transition-all ${client.logo ? 'hidden' : ''}`}>
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }

        .marquee-container:hover .animate-marquee,
        .marquee-container-reverse:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

