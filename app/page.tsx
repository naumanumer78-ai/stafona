"use client";

import Link from "next/link";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ChatIcon from '@mui/icons-material/Chat';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SettingsIcon from '@mui/icons-material/Settings';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SchoolIcon from '@mui/icons-material/School';
import FlightIcon from '@mui/icons-material/Flight';
import TheatersIcon from '@mui/icons-material/Theaters';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ReviewsSlider from "@/components/ReviewsSlider";
import ClientsMarquee from "@/components/ClientsMarquee";

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [expandedTeamMember, setExpandedTeamMember] = useState<number | null>(null);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-[1.5625em] md:px-[3.5em] md:py-[13rem] overflow-hidden" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-[#667eea] opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-[#764ba2] opacity-20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#667eea]">
              10 Years of Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Stafona</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Build Faster, Ship Smarter — AI-Powered Dev & QA for Modern Companies
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <Link
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-[10px] font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[#667eea] text-white rounded-[10px] font-semibold text-lg hover:bg-[#667eea]/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#667eea]">10+</div>
              <div className="text-white/70 mt-2">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#667eea]">50+</div>
              <div className="text-white/70 mt-2">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#667eea]">30+</div>
              <div className="text-white/70 mt-2">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#667eea]">100%</div>
              <div className="text-white/70 mt-2">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <ClientsMarquee />

      {/* About Section - Image with Text */}
      <section className="py-20 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#667eea]">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Transforming Ideas Into Digital Reality
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Stafona commenced its journey by developing proprietary products before seamlessly transitioning into the outsourcing business. With a robust track record spanning 15 years and a representative presence in the USA, our expertise lies in modern technologies that power today's digital landscape.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Our adept development team thrives on tackling any challenge within the scope of these technologies, delivering solutions that exceed expectations and drive business growth.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center px-6 py-3 bg-[#667eea]/10 hover:bg-[#667eea]/20 border-2 border-[#667eea] text-[#667eea] hover:text-white hover:bg-[#667eea] rounded-[10px] font-semibold transition-all duration-300"
              >
                Learn More About Us
                <ArrowForwardIcon
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  sx={{ fontSize: 20 }}
                />
              </Link>
            </div>
            <div className="relative order-first md:order-last">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration and software development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#667eea]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-white/90 leading-relaxed">
                    Prioritizing client satisfaction through innovation and technical excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#667eea]">
              Excellence in Testing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Our QA & Automation Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              End-to-end quality assurance solutions designed to elevate your software.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#131929] p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0891b2] to-[#14b8a6] rounded-2xl flex items-center justify-center mb-6">
                <SmartToyIcon sx={{ fontSize: 28, color: 'white' }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI & LLM Testing</h3>
              <p className="text-white/70 leading-relaxed">
                Specialized testing for AI models, including Large Language Models (LLMs) and RAG systems to ensure accuracy and reliability.
              </p>
            </div>

            <div className="bg-[#131929] p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-[#fb923c] to-[#f97316] rounded-2xl flex items-center justify-center mb-6">
                <AutorenewIcon sx={{ fontSize: 28, color: 'white' }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Business Automation</h3>
              <p className="text-white/70 leading-relaxed">
                Automate workflows with tools like n8n and AI to boost efficiency and reduce operational costs.
              </p>
            </div>

            <div className="bg-[#131929] p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-[#84cc16] to-[#65a30d] rounded-2xl flex items-center justify-center mb-6">
                <LanguageIcon sx={{ fontSize: 28, color: 'white' }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Web App Testing</h3>
              <p className="text-white/70 leading-relaxed">
                Comprehensive testing for web applications, ensuring functionality, performance, and security across all browsers.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-[#131929] p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-[#eab308] to-[#ca8a04] rounded-2xl flex items-center justify-center mb-6">
                <PhoneAndroidIcon sx={{ fontSize: 28, color: 'white' }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile App Testing</h3>
              <p className="text-white/70 leading-relaxed">
                Rigorous testing for iOS and Android applications to ensure a flawless user experience on any device.
              </p>
            </div>

            <div className="bg-[#131929] p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-2xl flex items-center justify-center mb-6">
                <SettingsIcon sx={{ fontSize: 28, color: 'white' }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Manual & Automated Testing</h3>
              <p className="text-white/70 leading-relaxed">
                Comprehensive functional, regression, and performance testing tailored to your software needs.
              </p>
            </div>
            <div className="bg-[#131929] p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mb-6">
                <ChatIcon sx={{ fontSize: 28, color: 'white' }} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Chatbot Testing</h3>
              <p className="text-white/70 leading-relaxed">
                End-to-end testing for conversational AI to guarantee seamless user interactions and performance.
              </p>
            </div>

          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              Our Quality engineers play a pivotal role in fixing issues promptly, collaborating seamlessly with a team of professionals to guarantee that the final products are not only <strong className="text-[#667eea]">safe and reliable</strong> but also <strong className="text-[#667eea]">surpass customer expectations</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#667eea]">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Business Solutions That Drive Growth
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Blending technology, creativity, and strategic thinking to empower your business objectives
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#131929] p-4 md:p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors text-center">
              <div className="flex justify-center mb-2 md:mb-4">
                <AccountBalanceIcon sx={{ fontSize: { xs: 32, md: 48 }, color: '#667eea' }} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">FinTech</h3>
            </div>

            <div className="bg-[#131929] p-4 md:p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors text-center">
              <div className="flex justify-center mb-2 md:mb-4">
                <FavoriteBorderIcon sx={{ fontSize: { xs: 32, md: 48 }, color: '#667eea' }} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">Healthcare</h3>
            </div>

            <div className="bg-[#131929] p-4 md:p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors text-center">
              <div className="flex justify-center mb-2 md:mb-4">
                <ShoppingCartIcon sx={{ fontSize: { xs: 32, md: 48 }, color: '#667eea' }} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">E-commerce</h3>
            </div>

            <div className="bg-[#131929] p-4 md:p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors text-center">
              <div className="flex justify-center mb-2 md:mb-4">
                <SchoolIcon sx={{ fontSize: { xs: 32, md: 48 }, color: '#667eea' }} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">EdTech</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div className="bg-[#131929] p-4 md:p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors text-center">
              <div className="flex justify-center mb-2 md:mb-4">
                <FlightIcon sx={{ fontSize: { xs: 32, md: 48 }, color: '#667eea' }} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">Travel</h3>
            </div>

            <div className="bg-[#131929] p-4 md:p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors text-center">
              <div className="flex justify-center mb-2 md:mb-4">
                <TheatersIcon sx={{ fontSize: { xs: 32, md: 48 }, color: '#667eea' }} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">Entertainment</h3>
            </div>

            <div className="bg-[#131929] p-4 md:p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors text-center">
              <div className="flex justify-center mb-2 md:mb-4">
                <SportsEsportsIcon sx={{ fontSize: { xs: 32, md: 48 }, color: '#667eea' }} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">Gaming</h3>
            </div>

            <div className="bg-[#131929] p-4 md:p-8 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-colors text-center">
              <div className="flex justify-center mb-2 md:mb-4">
                <DeveloperBoardIcon sx={{ fontSize: { xs: 32, md: 48 }, color: '#667eea' }} />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white">SaaS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footprint Section - Image with Text */}
      <section className="py-20 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Global technology network and worldwide presence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#667eea]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Global Reach</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Successfully executing projects across continents with excellence
                  </p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#667eea]">
                Worldwide Presence
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Global Project Footprint
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Stafona's journey is marked by the successful execution of multiple projects for clients spread across the globe. With a versatile blend of technologies, our team navigates complexity with the singular goal of achieving <strong className="text-white">100% customer satisfaction</strong>.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                We prioritize client contentment over financial considerations, taking pride in the success achieved across every project to date. Our representative presence in the USA enables seamless collaboration with international clients.
              </p>
              <Link
                href="/projects"
                className="group inline-flex items-center px-6 py-3 bg-[#667eea]/10 hover:bg-[#667eea]/20 border-2 border-[#667eea] text-[#667eea] hover:text-white hover:bg-[#667eea] rounded-[10px] font-semibold transition-all duration-300 text-lg"
              >
                Explore Our Projects
                <ArrowForwardIcon
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  sx={{ fontSize: 20 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Slider */}
      <ReviewsSlider />

      {/* FAQ Section
      <section className="py-20 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#667eea]">
              Got Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="max-w-[900px] mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "What services does Stafona provide?",
                  answer: "Stafona specializes in custom software development with expertise in Java, React JS, React Native, Node JS, and Python. We offer Web 2.0 development, E-commerce solutions, Content Management Systems, Business Process Automation, SaaS development, and Service-Oriented Architecture implementation."
                },
                {
                  question: "How long has Stafona been in business?",
                  answer: "Stafona has been delivering excellence for over 15 years. We started by developing proprietary products before transitioning into outsourcing. Our track record includes a representative presence in the USA and successful projects for clients worldwide."
                },
                {
                  question: "What technologies do you specialize in?",
                  answer: "Our core expertise includes Java, React JS, React Native, Node JS, and Python. We also work with related frameworks, databases, cloud platforms (AWS, Azure, GCP), and DevOps tools to deliver comprehensive solutions."
                },
                {
                  question: "What is your approach to Quality Assurance?",
                  answer: "We take pride in our distinctive QA team that performs both Manual and Automated testing. We create comprehensive documentation, define rigorous testing criteria, and collaborate with developers to ensure products are safe, reliable, and exceed customer expectations."
                },
                {
                  question: "How do I start a project with Stafona?",
                  answer: "Simply contact us through our Contact page. We'll schedule a free consultation to discuss your requirements, provide a proposal with timeline and pricing, and if you're happy, we'll kick off the project with our proven development process."
                }
              ].map((faq, index) => {
                const isOpen = openFaqIndex === index;

                return (
                  <div
                    key={index}
                    className="bg-[#020202] rounded-xl border border-white/10 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full px-5 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="text-lg font-semibold text-white pr-4">
                        {faq.question}
                      </span>
                      <ExpandMoreIcon
                        className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                          }`}
                        sx={{ fontSize: 28, color: '#667eea' }}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="px-5 pt-5 pb-5">
                        <p className="text-white/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="group inline-flex items-center px-6 py-3 bg-[#667eea]/10 hover:bg-[#667eea]/20 border-2 border-[#667eea] text-[#667eea] hover:text-white hover:bg-[#667eea] rounded-[10px] font-semibold transition-all duration-300 text-lg"
              >
                View All FAQs
                <ArrowForwardIcon
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  sx={{ fontSize: 20 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-20 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#667eea]">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Meet the Experts Behind Your Success
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our talented team of professionals dedicated to delivering excellence in every project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-[#131929] p-6 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-full aspect-square mb-6 rounded-md overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2]">
                <img
                  src="/images/alpha/ceo.png"
                  alt="Talha Malik"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Talha Malik</h3>
              <p className="text-[#667eea] font-semibold mb-4">CEO</p>
              <p className={`text-white/70 text-sm leading-relaxed ${expandedTeamMember === 0 ? '' : 'line-clamp-4'}`}>
                Talha holds an MSc in Control Systems Engineering from the University of Sheffield and a B.E. in Avionics Engineering from NUST, and I am a Certified Professional Engineer (PEC). I spent seven years as a Navigation Systems Engineer at AERO, gaining deep technical expertise in complex systems.
                As CEO, I leverage my engineering background and experience in project and team management to align technical teams with business goals and drive strategic growth.
                Since 2009, we have served clients across the globe, consistently earning their trust and admiration—because while we may compromise on finances, we never compromise on the confidence clients place in us.
              </p>
              <button
                onClick={() => setExpandedTeamMember(expandedTeamMember === 0 ? null : 0)}
                className="text-[#667eea] hover:text-[#764ba2] text-sm font-semibold mt-2"
              >
                {expandedTeamMember === 0 ? 'See Less' : 'See More +'}
              </button>
            </div>

            <div className="bg-[#131929] p-6 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-full aspect-square mb-6 rounded-md overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2]">
                <img
                  src="/images/alpha/nauman.jpeg"
                  alt="Nauman"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Nauman Umer</h3>
              <p className="text-[#667eea] font-semibold mb-4">CTO</p>
              <p className={`text-white/70 text-sm leading-relaxed ${expandedTeamMember === 1 ? '' : 'line-clamp-4'}`}>
              Nauman is a technology leader with 12+ years of experience building and scaling products across healthcare, fintech, CRM (Salesforce), ecommerce, and the creator economy. He leads engineering teams end-to-end—from architecture to delivery—focused on quality, speed, and real business impact.
              </p>
              <button
                onClick={() => setExpandedTeamMember(expandedTeamMember === 1 ? null : 1)}
                className="text-[#667eea] hover:text-[#764ba2] text-sm font-semibold mt-2"
              >
                {expandedTeamMember === 1 ? 'See Less' : 'See More +'}
              </button>
            </div>
            <div className="bg-[#131929] p-6 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-full aspect-square mb-6 rounded-md overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2]">
                <img
                  src="/images/alpha/numair.jpeg"
                  alt="Numair Tariq"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Numair Tariq</h3>
              <p className="text-[#667eea] font-semibold mb-4">Manager Operations</p>
              <p className={`text-white/70 text-sm leading-relaxed ${expandedTeamMember === 2 ? '' : 'line-clamp-4'}`}>
              Numair is responsible for overseeing the day-to-day operations of the company, ensuring smooth workflow and efficient resource allocation. His expertise in project management and team leadership helps maintain a productive and collaborative environment.
              </p>
              <button
                onClick={() => setExpandedTeamMember(expandedTeamMember === 2 ? null : 2)}
                className="text-[#667eea] hover:text-[#764ba2] text-sm font-semibold mt-2"
              >
                {expandedTeamMember === 2 ? 'See Less' : 'See More +'}
              </button>
            </div>

            <div className="bg-[#131929] p-6 rounded-xl border border-white/10 hover:border-[#667eea]/50 transition-all hover:transform hover:-translate-y-2">
              <div className="w-full aspect-square mb-6 rounded-md overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2]">
                <img
                  src="/images/alpha/rohail.jpeg"
                  alt="Rohail"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rohail Shahid</h3>
              <p className="text-[#667eea] font-semibold mb-4">Technical Lead</p>
              <p className={`text-white/70 text-sm leading-relaxed ${expandedTeamMember === 3 ? '' : 'line-clamp-4'}`}>
                Rohail specializes in delivering high-quality software by building robust automation frameworks using Playwright with the Page Object Model, along with advanced AI-driven testing through Claude Code, Playwright MCP, and Amazon's Nova Act. He brings 8+ years of experience in both manual and automation testing, combining scalable frameworks with strong CI/CD practices to reduce bugs and accelerate release cycles. Rohail translates complex business requirements into clear, testable workflows while collaborating closely with product and engineering teams. His focus remains on leveraging modern AI tools to expand test coverage, improve delivery speed, and ensure a seamless, reliable user experience.
              </p>
              <button
                onClick={() => setExpandedTeamMember(expandedTeamMember === 3 ? null : 3)}
                className="text-[#667eea] hover:text-[#764ba2] text-sm font-semibold mt-2"
              >
                {expandedTeamMember === 3 ? 'See Less' : 'See More +'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-gradient-to-r from-[#191D23] to-[#020202] rounded-2xl p-4 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Let's collaborate to turn your vision into reality. Our team of experts is ready to tackle your next challenge.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[#020202] rounded-[10px] font-semibold text-lg hover:bg-white/90 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/careers"
                className="px-8 py-4 border-2 border-white text-white rounded-[10px] font-semibold text-lg hover:bg-white hover:text-[#667eea] transition-colors"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 