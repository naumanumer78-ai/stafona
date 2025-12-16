"use client";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
            Join Our Team
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Build Your Career at Stafona
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Join our dynamic team and work on exciting projects that make a real impact
          </p>
        </div>
      </section>

      {/* Why Work With Us - Image with Text */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
              Why Stafona?
            </span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-6">Why Work With Us</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We're always looking for talented individuals who are passionate about technology and innovation. 
              Join our dynamic team and work on exciting projects that make a real impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[#667eea] text-xl">✓</span>
                  <span className="text-white/70 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                alt="Professional team working together at Stafona"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#667eea]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Join Our Team</h3>
                <p className="text-white/90">Build your career with us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
              Current Openings
            </span>
            <h2 className="text-4xl font-bold text-white mt-4">Open Positions</h2>
          </div>

          {/* No Positions Available Message */}
          <div className="max-w-[800px] mx-auto">
            <div className="bg-[#1e293b] p-12 rounded-2xl border border-white/5 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#667eea]/20 flex items-center justify-center">
                <span className="text-4xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Positions Available</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                There are no open positions available at the moment. Please visit our page for further details or check back later for new opportunities.
              </p>
              <p className="text-white/60 text-base">
                Interested in joining our team? Feel free to send us your resume at{' '}
                <a href="mailto:careers@stafona.com" className="text-[#667eea] hover:text-[#764ba2] transition-colors">
                  careers@stafona.com
                </a>
              </p>
            </div>
          </div>

          {/* Commented out job listings
          <div className="grid md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-[#020202] p-6 rounded-xl border border-white/10 hover:border-[#667eea] transition-all">
                <h3 className="text-2xl font-bold text-white mb-3">{position.title}</h3>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-[#667eea]/20 text-[#667eea] text-xs font-semibold rounded-[10px]">
                    {position.type}
                  </span>
                  <span className="px-3 py-1 bg-[#667eea]/20 text-[#667eea] text-xs font-semibold rounded-[10px]">
                    {position.location}
                  </span>
                  <span className="px-3 py-1 bg-[#667eea]/20 text-[#667eea] text-xs font-semibold rounded-[10px]">
                    {position.salary}
                  </span>
                </div>
                <p className="text-white/70 mb-6 leading-relaxed">{position.description}</p>
                <a
                  href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-[10px] font-semibold hover:opacity-90 transition-opacity"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
          */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-gradient-to-r from-[#020202] to-[#131929] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Don't See Your Role?</h2>
            <p className="text-white/90 text-lg mb-8">
              Send us your resume and we'll keep you in mind for future opportunities
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-[#020202] rounded-[10px] font-semibold hover:bg-white/90 transition-colors"
              >
                Send Your Resume
              </a>
              <a
                href="/about"
                className="px-8 py-3 border-2 border-white text-white rounded-[10px] font-semibold hover:bg-white hover:text-[#667eea] transition-colors"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

const benefits = [
  "Competitive Salary",
  "Remote Work Options",
  "Professional Development",
  "Health Benefits",
  "Flexible Hours",
  "Team Events"
];

const positions = [
  {
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$120k - $160k",
    description: "We're looking for an experienced full-stack developer proficient in React, Node.js, and cloud technologies."
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Hybrid",
    salary: "$90k - $120k",
    description: "Join our design team to create beautiful, intuitive interfaces for web and mobile applications."
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    salary: "$110k - $150k",
    description: "Help us build and maintain scalable infrastructure with Kubernetes, Docker, and CI/CD pipelines."
  },
  {
    title: "Mobile App Developer",
    type: "Full-time",
    location: "Remote",
    salary: "$100k - $140k",
    description: "Build amazing mobile experiences with React Native or Flutter for iOS and Android platforms."
  },
  {
    title: "Data Scientist",
    type: "Full-time",
    location: "Hybrid",
    salary: "$130k - $170k",
    description: "Apply machine learning and data analysis to solve complex business problems and drive insights."
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Hybrid",
    salary: "$95k - $130k",
    description: "Lead cross-functional teams to deliver projects on time and within budget using Agile methodologies."
  }
];

