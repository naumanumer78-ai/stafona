"use client";

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ShieldIcon from '@mui/icons-material/Shield';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReviewsSlider from "@/components/ReviewsSlider";
import ClientsMarquee from "@/components/ClientsMarquee";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color)' }}>
            About Stafona
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Building the Future, One Solution at a Time
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Empowering businesses with innovative technology solutions since 2013
          </p>
        </div>
      </section>

      {/* Our Story - Image with Text */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color)' }}>
              Our Story
            </span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-6">Who We Are</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              At Stafona, we're more than just a tech company—we're your partners in digital transformation. 
              With over a decade of experience, we've helped hundreds of businesses leverage cutting-edge 
              technology to achieve their goals and stay ahead of the competition.
            </p>
            <p className="text-white/70 leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively to deliver 
              innovative solutions that drive real business results. We believe in quality, transparency, 
              and building long-term relationships with our clients.
            </p>
          </div>
          <div className="relative order-first md:order-last">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                alt="Team collaboration and innovation at Stafona"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#667eea]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Innovation & Excellence</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
              Our Purpose
            </span>
            <h2 className="text-4xl font-bold text-white mt-4">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#020202] p-8 rounded-xl border border-white/10">
              <div className="w-16 h-16 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2]">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, efficiency, 
                and competitive advantage. We strive to be a trusted partner in our clients' digital 
                transformation journey.
              </p>
            </div>
            <div className="bg-[#020202] p-8 rounded-xl border border-white/10">
              <div className="w-16 h-16 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2]">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To be the global leader in innovative technology solutions, recognized for our commitment 
                to excellence, creativity, and client success. We envision a future where technology 
                seamlessly enhances every aspect of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
              What Drives Us
            </span>
            <h2 className="text-4xl font-bold text-white mt-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-[#020202] p-6 rounded-xl border border-white/10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#667eea]/20 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <ClientsMarquee />

      {/* Reviews Slider */}
      <ReviewsSlider />

      {/* CTA */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-gradient-to-r from-[#020202] to-[#131929] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Work Together?</h2>
            <p className="text-white/90 text-lg mb-8">Let's discuss how we can help transform your business</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="px-8 py-3 bg-white text-[#667eea] rounded-[10px] font-semibold hover:bg-white/90 transition-colors">
                Get In Touch
              </a>
              <a href="/careers" className="px-8 py-3 border-2 border-white text-white rounded-[10px] font-semibold hover:bg-white hover:text-[#667eea] transition-colors">
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

const stats = [
  { number: "15+", label: "Years", description: "Of Excellence" },
  { number: "500+", label: "Projects", description: "Completed" },
  { number: "200+", label: "Clients", description: "Worldwide" },
  { number: "50+", label: "Team", description: "Members" },
  { number: "25+", label: "Countries", description: "Served" },
  { number: "98%", label: "Satisfaction", description: "Rate" }
];

const values = [
  { icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: '#667eea' }} />, title: "Excellence", description: "We pursue the highest standards in everything we do" },
  { icon: <LightbulbIcon sx={{ fontSize: 32, color: '#667eea' }} />, title: "Innovation", description: "We embrace new technologies and creative solutions" },
  { icon: <HandshakeIcon sx={{ fontSize: 32, color: '#667eea' }} />, title: "Collaboration", description: "We work together to achieve shared success" },
  { icon: <ShieldIcon sx={{ fontSize: 32, color: '#667eea' }} />, title: "Integrity", description: "We build trust through honesty and transparency" },
  { icon: <BoltIcon sx={{ fontSize: 32, color: '#667eea' }} />, title: "Agility", description: "We adapt quickly to changing needs" },
  { icon: <FavoriteIcon sx={{ fontSize: 32, color: '#667eea' }} />, title: "Client-Centric", description: "Your success is our success" }
];

