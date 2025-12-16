"use client";

import { useParams } from "next/navigation";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

// Mark this route as dynamic to prevent prerendering issues
export const dynamic = 'force-dynamic';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find the project based on slug
  const project = projects.find(p => p.slug === slug) || projects[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider px-4 py-2 bg-[#667eea]/20 text-[#667eea] rounded-[10px]">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mt-6 mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {project.fullDescription}
            </p>
          </div>

          {/* Project Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {project.icon}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h2 className="text-white font-bold text-lg mb-4">Project Info</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-white/50 text-sm">Client</p>
                    <p className="text-white">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Duration</p>
                    <p className="text-white">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Year</p>
                    <p className="text-white">{project.year}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-white font-bold text-lg mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#667eea]/20 text-[#667eea] text-sm font-semibold rounded-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-white font-bold text-lg mb-4">Results</h2>
                <ul className="space-y-2">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start text-white/70">
                      <span className="text-[#667eea] mr-2">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Challenge</h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Solution</h2>
                <p className="text-white/70 leading-relaxed text-lg mb-4">
                  {project.solution}
                </p>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-white/70">
                      <span className="text-[#667eea] mr-3 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Outcome</h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  {project.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Start Your Project</h2>
            <p className="text-white/90 text-lg mb-8">
              Ready to bring your vision to life? Let's talk about your project
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-[#667eea] rounded-[10px] font-semibold hover:bg-white/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/projects"
                className="px-8 py-3 border-2 border-white text-white rounded-[10px] font-semibold hover:bg-white hover:text-[#667eea] transition-colors"
              >
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

const projects = [
  {
    slug: "ecommerce-platform",
    icon: <ShoppingCartIcon sx={{ fontSize: 144, color: 'white' }} />,
    category: "Web Application",
    title: "E-Commerce Platform",
    fullDescription: "A comprehensive online marketplace with advanced filtering, payment integration, and real-time inventory management built for a leading retail brand.",
    tech: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
    client: "RetailCo Inc.",
    duration: "6 months",
    year: "2023",
    challenge: "The client needed a scalable e-commerce platform that could handle thousands of concurrent users while providing a seamless shopping experience across all devices.",
    solution: "We developed a modern, microservices-based architecture using React for the frontend and Node.js for the backend. The platform features real-time inventory management, advanced product filtering, and secure payment processing.",
    features: [
      "Real-time inventory synchronization across multiple warehouses",
      "Advanced search and filtering with Elasticsearch",
      "Secure payment processing with multiple payment gateways",
      "Personalized product recommendations using ML algorithms",
      "Admin dashboard for order and inventory management"
    ],
    outcome: "The platform successfully handles over 10,000 daily active users with 99.9% uptime. Sales increased by 150% in the first quarter after launch.",
    results: [
      "150% increase in online sales",
      "10,000+ daily active users",
      "99.9% platform uptime",
      "40% reduction in cart abandonment"
    ]
  },
  {
    slug: "fitness-tracking-app",
    icon: <FitnessCenterIcon sx={{ fontSize: 144, color: 'white' }} />,
    category: "Mobile Application",
    title: "Fitness Tracking App",
    fullDescription: "Cross-platform mobile application with AI-powered workout recommendations and social features for fitness enthusiasts.",
    tech: ["React Native", "Firebase", "TensorFlow", "Redux"],
    client: "FitLife Technologies",
    duration: "4 months",
    year: "2023",
    challenge: "Create a cross-platform mobile app that provides personalized workout plans and tracks user progress with social engagement features.",
    solution: "Built using React Native for cross-platform compatibility, integrated TensorFlow for AI-powered recommendations, and Firebase for real-time data sync.",
    features: [
      "AI-powered personalized workout recommendations",
      "Real-time progress tracking and analytics",
      "Social features for community engagement",
      "Integration with wearable devices",
      "Video tutorials and exercise library"
    ],
    outcome: "Achieved 100,000+ downloads within 3 months with a 4.8-star rating. Users report 60% increase in workout consistency.",
    results: [
      "100K+ app downloads",
      "4.8-star average rating",
      "60% improvement in user consistency",
      "85% user retention rate"
    ]
  }
];

