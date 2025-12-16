"use client";

import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaletteIcon from '@mui/icons-material/Palette';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ChatIcon from '@mui/icons-material/Chat';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReviewsSlider from "@/components/ReviewsSlider";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
            Our Work
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Featured Projects
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries and technologies
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-[10px] text-sm font-semibold transition-all ${
                  activeFilter === filter.value
                    ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white"
                    : "bg-[#020202] text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <a
                key={index}
                href={`/projects/${project.slug}`}
                className="bg-[#020202] rounded-xl overflow-hidden border border-white/10 hover:border-[#667eea] transition-all hover:transform hover:-translate-y-2 group block"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                  {project.icon}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">View Project</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#667eea]">
                    {project.category}
                  </span>
                  <h2 className="text-xl font-bold text-white mt-2 mb-3">{project.title}</h2>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#667eea]/20 text-[#667eea] text-xs font-semibold rounded-[10px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Slider */}
      <ReviewsSlider />

      {/* CTA Section */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-gradient-to-r from-[#191D23] to-[#020202] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Have a Project in Mind?</h2>
            <p className="text-white/90 text-lg mb-8">Let's bring your vision to life with our expertise</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-[#667eea] rounded-[10px] font-semibold hover:bg-white/90 transition-colors"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="px-8 py-3 border-2 border-white text-white rounded-[10px] font-semibold hover:bg-white hover:text-[#667eea] transition-colors"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "AI Solutions", value: "ai" },
  { label: "Blockchain", value: "blockchain" }
];

const projects = [
  {
    slug: "ecommerce-platform",
    icon: <ShoppingCartIcon sx={{ fontSize: 48, color: 'white' }} />,
    category: "web",
    title: "E-Commerce Platform",
    description: "A comprehensive online marketplace with advanced filtering, payment integration, and real-time inventory management.",
    tech: ["React", "Node.js", "MongoDB", "AWS"]
  },
  {
    slug: "fitness-tracking-app",
    icon: <FitnessCenterIcon sx={{ fontSize: 48, color: 'white' }} />,
    category: "mobile",
    title: "Fitness Tracking App",
    description: "Cross-platform mobile application with AI-powered workout recommendations and social features.",
    tech: ["React Native", "Firebase", "TensorFlow"]
  },
  {
    slug: "smart-analytics-dashboard",
    icon: <BarChartIcon sx={{ fontSize: 48, color: 'white' }} />,
    category: "ai",
    title: "Smart Analytics Dashboard",
    description: "AI-powered business intelligence platform with predictive analytics and automated reporting.",
    tech: ["Python", "TensorFlow", "AWS", "D3.js"]
  },
  {
    slug: "saas-project-management",
    icon: <AssignmentIcon sx={{ fontSize: 48, color: 'white' }} />,
    category: "web",
    title: "SaaS Project Management Tool",
    description: "Cloud-based collaboration platform with real-time updates, task management, and team analytics.",
    tech: ["Vue.js", "PostgreSQL", "Docker"]
  },
  {
    slug: "nft-marketplace",
    icon: <PaletteIcon sx={{ fontSize: 48, color: 'white' }} />,
    category: "blockchain",
    title: "NFT Marketplace",
    description: "Decentralized marketplace for digital assets with smart contract integration and wallet connectivity.",
    tech: ["Solidity", "Web3", "IPFS", "Ethereum"]
  },
  {
    slug: "delivery-service-app",
    icon: <LocalShippingIcon sx={{ fontSize: 48, color: 'white' }} />,
    category: "mobile",
    title: "Delivery Service App",
    description: "On-demand delivery application with real-time tracking, payment integration, and driver management.",
    tech: ["Flutter", "Google Maps", "Stripe"]
  },
  {
    slug: "customer-service-chatbot",
    icon: <ChatIcon sx={{ fontSize: 48, color: 'white' }} />,
    category: "ai",
    title: "Customer Service Chatbot",
    description: "NLP-powered chatbot that handles customer inquiries 24/7 with 95% accuracy rate.",
    tech: ["Python", "Dialogflow", "Node.js"]
  },
  {
    slug: "online-learning-platform",
    icon: <SchoolIcon sx={{ fontSize: 48, color: 'white' }} />,
    category: "web",
    title: "Online Learning Platform",
    description: "Comprehensive e-learning platform with video streaming, interactive quizzes, and progress tracking.",
    tech: ["Next.js", "Prisma", "Cloudflare"]
  },
  {
    slug: "defi-lending-platform",
    icon: <AccountBalanceIcon sx={{ fontSize: 48, color: 'white' }} />,
    category: "blockchain",
    title: "DeFi Lending Platform",
    description: "Decentralized finance platform enabling peer-to-peer lending with automated smart contracts.",
    tech: ["Solidity", "Hardhat", "React", "Polygon"]
  }
];

