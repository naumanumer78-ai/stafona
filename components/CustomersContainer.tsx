"use client";

import React from "react";

export default function CustomersContainer() {
  const topRowRoles = ["Artists", "Producers", "DJ:s", "Managers"];
  const bottomRowRoles = ["Curators", "Educators", "Pro", "Promoters"];

  // Calculate approximate width for animation (each role + gap)
  // Using a rough estimate: headline-01 is ~100px font size, so each role is roughly 200-400px + 48px gap
  const estimatedRoleWidth = 300; // Approximate width per role
  const gap = 48;
  const topRowWidth = topRowRoles.length * (estimatedRoleWidth + gap);
  const bottomRowWidth = bottomRowRoles.length * (estimatedRoleWidth + gap);

  return (
    <div className="pt-[4.1875em]" style={{ backgroundColor: 'var(--midnight)' }}>
      <div className="flex flex-col gap-[1.5em]">
        {/* Label Section */}
        <div className="flex flex-col gap-[0.4375em]">
          <div
            className="md:desktop-caption caption text-[var(--midnight-50)]"
          >
            Customers
          </div>
          {/* Main Heading */}
          <h2
            className="headline-05 md:hidden text-white"
          >
            Built for your journey
          </h2>
          <h2 className="headline-03 hidden md:block text-white">
            Built for your journey
          </h2>
        </div>

        {/* Large Text Rows with Fade Effect */}
        <div className="relative" role="region" aria-label="Customer roles">
          {/* Top Row */}
          <div className="relative overflow-hidden mb-[1.5em]">
            <div
              className="flex flex-row gap-[3em] will-change-transform"
              style={{
                // animation: `customersScrollTop ${topRowRoles.length * 6}s linear infinite`,
                maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
              }}
            >
              {topRowRoles.map((role, index) => (
                <div
                  key={`top-${role}-${index}`}
                  className="headline-01 text-white whitespace-nowrap"
                >
                  {role}
                </div>
              ))}
              {/* Duplicate for seamless infinite loop */}
              {topRowRoles.map((role, index) => (
                <div
                  key={`top-dup-${role}-${index}`}
                  className="headline-01 text-white whitespace-nowrap"
                  aria-hidden="true"
                >
                  {role}
                </div>
              ))}
              {/* Additional duplicate for continuous flow */}
              {topRowRoles.map((role, index) => (
                <div
                  key={`top-dup2-${role}-${index}`}
                  className="headline-01 text-white whitespace-nowrap"
                  aria-hidden="true"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative overflow-hidden">
            <div
              className="flex flex-row gap-[3em] will-change-transform"
              style={{
                // animation: `customersScrollBottom ${bottomRowRoles.length * 6}s linear infinite reverse`,
                maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
              }}
            >
              {bottomRowRoles.map((role, index) => (
                <div
                  key={`bottom-${role}-${index}`}
                  className="headline-01 text-white whitespace-nowrap"
                >
                  {role}
                </div>
              ))}
              {/* Duplicate for seamless infinite loop */}
              {bottomRowRoles.map((role, index) => (
                <div
                  key={`bottom-dup-${role}-${index}`}
                  className="headline-01 text-white whitespace-nowrap"
                  aria-hidden="true"
                >
                  {role}
                </div>
              ))}
              {/* Additional duplicate for continuous flow */}
              {bottomRowRoles.map((role, index) => (
                <div
                  key={`bottom-dup2-${role}-${index}`}
                  className="headline-01 text-white whitespace-nowrap"
                  aria-hidden="true"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes customersScrollTop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${topRowWidth}px);
          }
        }
        
        @keyframes customersScrollBottom {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${bottomRowWidth}px);
          }
        }
      `}</style>
    </div>
  );
}

