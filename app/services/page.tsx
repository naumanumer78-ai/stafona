"use client";

import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudIcon from '@mui/icons-material/Cloud';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PaletteIcon from '@mui/icons-material/Palette';
import SettingsIcon from '@mui/icons-material/Settings';
import LinkIcon from '@mui/icons-material/Link';
import LockIcon from '@mui/icons-material/Lock';
import ReviewsSlider from "@/components/ReviewsSlider";
import ClientsMarquee from "@/components/ClientsMarquee";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
            What We Offer
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive innovation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#020202] p-8 rounded-xl border border-white/10 hover:border-[#667eea] transition-all hover:transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 mb-6 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2]">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 border-t border-white/10 pt-6 pl-0">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-white/60">
                      <span className="text-[#667eea] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <ClientsMarquee />

      {/* Reviews Slider */}
      <ReviewsSlider />

      {/* CTA Section */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-gradient-to-r from-[#020202] to-[#131929] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-white/90 text-lg mb-8">
              Let's discuss how our services can help you achieve your goals
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-[#000000] rounded-[10px] font-semibold hover:bg-white/90 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/projects"
                className="px-8 py-3 border-2 border-white text-white rounded-[10px] font-semibold hover:bg-white hover:text-[#667eea] transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: "Custom Software Development",
    description: "Tailored software solutions built to address your unique business challenges and drive growth.",
    features: [
      "Enterprise application development",
      "Legacy system modernization",
      "API development & integration",
      "Microservices architecture"
    ]
  },
  {
    icon: <SmartToyIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes and gain valuable insights.",
    features: [
      "Predictive analytics & forecasting",
      "Natural language processing (NLP)",
      "Computer vision solutions",
      "ML model development & deployment"
    ]
  },
  {
    icon: <CloudIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for enhanced performance and reliability.",
    features: [
      "Cloud migration & strategy",
      "Infrastructure as Code (IaC)",
      "Cloud-native application development",
      "Cost optimization & monitoring"
    ]
  },
  {
    icon: <LanguageIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: "Web Development",
    description: "Modern, responsive websites and web applications that deliver exceptional user experiences.",
    features: [
      "Progressive web applications (PWA)",
      "E-commerce platforms",
      "Content management systems",
      "Single-page applications (SPA)"
    ]
  },
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android that users love.",
    features: [
      "iOS & Android native apps",
      "Cross-platform (React Native, Flutter)",
      "Mobile app UI/UX design",
      "App maintenance & support"
    ]
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience and conversion in mind.",
    features: [
      "User research & persona development",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Usability testing & optimization"
    ]
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 40, color: 'white' }} />,
    title: "DevOps & Automation",
    description: "Streamline your development pipeline with continuous integration and deployment solutions.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure automation",
      "Container orchestration (Kubernetes)",
      "Monitoring & logging solutions"
    ]
  },
  // {
  //   icon: <LinkIcon sx={{ fontSize: 40, color: 'white' }} />,
  //   title: "Blockchain Development",
  //   description: "Secure, decentralized solutions leveraging blockchain technology for various applications.",
  //   features: [
  //     "Smart contract development",
  //     "DeFi & NFT platforms",
  //     "Cryptocurrency wallets",
  //     "Blockchain consulting"
  //   ]
  // },
  // {
  //   icon: <LockIcon sx={{ fontSize: 40, color: 'white' }} />,
  //   title: "Cybersecurity",
  //   description: "Protect your digital assets with comprehensive security audits and implementation services.",
  //   features: [
  //     "Security audits & assessments",
  //     "Penetration testing",
  //     "Security architecture design",
  //     "Compliance & risk management"
  //   ]
  // }
];

