"use client";

import { useState } from "react";
import Link from "next/link";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What services does Stafona provide?",
          answer: "Stafona is a distinguished software development service provider with 15 years of experience. We specialize in Java, React JS, React Native, Node JS, and Python. Our services include Web 2.0 development, E-commerce solutions, Content Management Systems, Business Process Automation, SaaS development, and Service-Oriented Architecture implementation."
        },
        {
          question: "How long has Stafona been in business?",
          answer: "Stafona has been delivering excellence for over 15 years. We started by developing proprietary products before seamlessly transitioning into the outsourcing business. Our robust track record includes a representative presence in the USA and successful projects for clients across the globe."
        },
        {
          question: "Where is Stafona located?",
          answer: "Stafona has a global presence with a representative office in the USA. This enables us to serve clients worldwide and maintain seamless collaboration with international partners across different time zones."
        },
        {
          question: "What industries does Stafona serve?",
          answer: "We serve diverse industries including e-commerce, healthcare, fintech, education, entertainment, logistics, and more. Our versatile blend of technologies allows us to navigate complexity across any sector with the goal of achieving 100% customer satisfaction."
        }
      ]
    },
    {
      category: "Services & Solutions",
      questions: [
        {
          question: "What technologies do you specialize in?",
          answer: "Our core expertise lies in modern web and mobile technologies including Java, React JS, React Native, Node JS, and Python. We also work with related frameworks, databases, cloud platforms (AWS, Azure, GCP), and DevOps tools to deliver comprehensive solutions."
        },
        {
          question: "Do you provide custom software development?",
          answer: "Yes, absolutely! We specialize in custom software development tailored to your specific business needs. From web applications to mobile apps, enterprise solutions to SaaS platforms, we build scalable, secure, and high-performance software from scratch."
        },
        {
          question: "Can you help with existing projects?",
          answer: "Yes, we can help maintain, enhance, or completely revamp existing projects. Our team is experienced in taking over legacy codebases, performing code audits, fixing bugs, adding new features, and modernizing outdated technology stacks."
        },
        {
          question: "Do you offer e-commerce development?",
          answer: "Yes, we're proficient in e-commerce development, offering comprehensive solutions that cater to diverse online business needs. We build custom e-commerce platforms with payment integration, inventory management, order tracking, and more."
        },
        {
          question: "What is your approach to Quality Assurance?",
          answer: "Stafona takes pride in its distinctive Quality Assurance team. We perform both Manual and Automated testing, create comprehensive documentation, and define rigorous testing criteria. Our QA engineers collaborate with developers to ensure products are safe, reliable, and exceed customer expectations."
        }
      ]
    },
    {
      category: "Process & Timeline",
      questions: [
        {
          question: "What is your development process?",
          answer: "Our development process includes: 1) Requirements Analysis - understanding your needs and goals, 2) Design & Planning - creating technical architecture and project roadmap, 3) Development - agile sprints with regular updates, 4) Quality Assurance - comprehensive testing, 5) Deployment - smooth launch, and 6) Support & Maintenance - ongoing assistance."
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while complex enterprise applications can take 3-6 months or more. After understanding your requirements, we'll provide a detailed timeline with milestones."
        },
        {
          question: "Do you use Agile methodology?",
          answer: "Yes, we primarily use Agile methodology with regular sprints, daily standups, and continuous client collaboration. This approach ensures flexibility, transparency, and the ability to adapt to changing requirements while maintaining quality."
        },
        {
          question: "How do you handle project communication?",
          answer: "We maintain transparent communication through regular meetings, progress reports, and collaborative tools. You'll have direct access to our project manager and development team through your preferred communication channels (email, Slack, video calls, etc.)."
        }
      ]
    },
    {
      category: "Pricing & Engagement",
      questions: [
        {
          question: "How do you price your services?",
          answer: "We offer flexible pricing models based on your needs: fixed-price for well-defined projects, time & material for evolving requirements, and dedicated team for long-term engagements. Contact us for a detailed quote tailored to your specific project."
        },
        {
          question: "Do you sign NDAs?",
          answer: "Yes, absolutely. We understand the importance of confidentiality and intellectual property protection. We're happy to sign Non-Disclosure Agreements and other legal documents before discussing your project details."
        },
        {
          question: "What are your payment terms?",
          answer: "Payment terms are typically structured around project milestones. For most projects, we follow a schedule like: 30% upfront, 40% at mid-project milestone, and 30% upon completion. Terms can be adjusted based on project size and duration."
        },
        {
          question: "Do you provide post-launch support?",
          answer: "Yes, we offer comprehensive post-launch support and maintenance services. This includes bug fixes, performance monitoring, security updates, feature enhancements, and technical support to ensure your application runs smoothly."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I start a project with Stafona?",
          answer: "Starting is easy! Simply contact us through our Contact page, email, or phone. We'll schedule a consultation to discuss your requirements, goals, and budget. After that, we'll provide a proposal, timeline, and if you're happy, we'll kick off the project."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we offer free initial consultations to understand your project requirements and provide guidance on the best technical approach. This helps us create an accurate proposal and gives you insight into how we work."
        },
        {
          question: "Can I see examples of your work?",
          answer: "Absolutely! Visit our Projects page to see case studies of successful projects we've delivered. We showcase our work across various industries and technologies, demonstrating our versatility and expertise."
        },
        {
          question: "Are you hiring?",
          answer: "Yes! We're always looking for talented developers, designers, and QA engineers to join our team. Visit our Careers page to see current openings and submit your application. We offer competitive compensation and a collaborative work environment."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#667eea]">
            Help Center
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and how we can help bring your project to life
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[900px] mx-auto">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b border-white/10">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div
                      key={qIndex}
                      className="bg-[#020202] rounded-xl border border-white/10 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-5 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </span>
                        <ExpandMoreIcon 
                          className={`flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          sx={{ fontSize: 28, color: '#667eea' }}
                        />
                      </button>
                      <div 
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-white/90 text-lg mb-8">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-[#667eea] rounded-[10px] font-semibold hover:bg-white/90 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:info@stafona.com"
                className="px-8 py-3 border-2 border-white text-white rounded-[10px] font-semibold hover:bg-white hover:text-[#667eea] transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

