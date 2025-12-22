"use client";

import { useState } from "react";

const teamMembers = [
  {
    name: "Talha Malik",
    role: "CEO",
    image: "/images/alpha/ceo.png",
    invertImage: false,
      bio: "Talha holds an MSc in Control Systems Engineering from the University of Sheffield and a B.E. in Avionics Engineering from NUST, and he is a Certified Professional Engineer (PEC). He spent seven years as a Navigation Systems Engineer at AERO, gaining deep technical expertise in complex systems. As CEO, he leverage his engineering background and experience in project and team management to align technical teams with business goals and drive strategic growth. Since 2009, we have served clients across the globe, consistently earning their trust and admiration—because while we may compromise on finances, we never compromise on the confidence clients place in us."
    },
  {
    name: "Nauman Umer",
    role: "CTO",
    image: "/images/alpha/nauman.jpeg",
    invertImage: false,
    bio: "Nauman is a technology leader with 12+ years of experience building and scaling products across healthcare, fintech, CRM (Salesforce), ecommerce, and the creator economy. He leads engineering teams end-to-end—from architecture to delivery—focused on quality, speed, and real business impact."
  },
  {
    name: "Numair Tariq",
    role: "Manager Operations",
    image: "/images/alpha/numair.jpeg",
    invertImage: false,
    bio: "Numair is responsible for overseeing the day-to-day operations of the company, ensuring smooth workflow and efficient resource allocation. His expertise in project management and team leadership helps maintain a productive and collaborative environment."
  },
  {
    name: "Rohail Shahid",
    role: "Senior Automation Engineer",
    image: "/images/alpha/rohail.jpeg",
    invertImage: false,
    bio: "Rohail specializes in delivering high-quality software by building robust automation frameworks using Playwright with the Page Object Model, along with advanced AI-driven testing through Claude Code, Playwright MCP, and Amazon's Nova Act. He brings 8+ years of experience in both manual and automation testing, combining scalable frameworks with strong CI/CD practices to reduce bugs and accelerate release cycles. Rohail translates complex business requirements into clear, testable workflows while collaborating closely with product and engineering teams. His focus remains on leveraging modern AI tools to expand test coverage, improve delivery speed, and ensure a seamless, reliable user experience."
  }
];

export default function TeamPage() {
  const [expandedTeamMember, setExpandedTeamMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
            Meet The Team
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Meet the Experts Behind Your Success
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our talented team of professionals dedicated to delivering excellence in every project
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#131929] p-6 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-all hover:transform hover:-translate-y-2">
                <div className="w-full aspect-square mb-6 rounded-md overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.invertImage ? 'invert' : ''}`}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#667eea] font-semibold mb-4">{member.role}</p>
                <p className={`text-white/70 text-sm leading-relaxed ${expandedTeamMember === index ? '' : 'line-clamp-4'}`}>
                  {member.bio}
                </p>
                <button
                  onClick={() => setExpandedTeamMember(expandedTeamMember === index ? null : index)}
                  className="text-[#667eea] hover:text-[#764ba2] text-sm font-semibold mt-2"
                >
                  {expandedTeamMember === index ? 'See Less' : 'See More +'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-gradient-to-r from-[#020202] to-[#131929] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Want to Join Our Team?</h2>
            <p className="text-white/90 text-lg mb-8">
              We're always looking for talented professionals to join our growing family
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/careers"
                className="px-8 py-3 bg-white text-[#020202] rounded-[10px] font-semibold hover:bg-white/90 transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded-[10px] font-semibold hover:bg-white hover:text-[#667eea] transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
