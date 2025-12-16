"use client";

import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!'
        });
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-[#1e293b] p-6 rounded-2xl border border-white/5 flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#667eea] to-[#764ba2] flex-shrink-0">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white" style={{ margin: 0 }}>{info.title}</h2>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-white/60 text-base leading-relaxed">{detail}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-[#1e293b] p-6 rounded-2xl border border-white/5">
              <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 rounded-xl bg-[#667eea]/20 hover:bg-[#667eea] flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#1e293b] p-8 rounded-2xl border border-white/5">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="ai">AI & Machine Learning</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="blockchain">Blockchain</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="md:col-span-2">
                  {submitStatus && (
                    <div className={`p-4 rounded-lg mb-4 ${submitStatus.type === 'success' ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'}`}>
                      <p className={`text-sm ${submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {submitStatus.message}
                      </p>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-[10px] font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

const contactInfo = [
  {
    icon: <EmailIcon sx={{ fontSize: 32, color: 'white' }} />,
    title: "Email",
    details: ["talha@stafona.com", "nauman@stafona.com"]
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 32, color: 'white' }} />,
    title: "Phone",
    details: ["+92 321 5031780", "+92 336 0007007"]
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 32, color: 'white' }} />,
    title: "Office",
      details: ["1503 St 41-A, Bahria Town Phase IV Phase 4 Bahria Town, Rawalpindi, Pakistan"]
    }
];

const socialLinks = [
  { name: "LinkedIn", icon: <LinkedInIcon sx={{ fontSize: 24, color: 'white' }} />, url: "https://www.linkedin.com/company/stafona" },
  { name: "Twitter", icon: <TwitterIcon sx={{ fontSize: 24, color: 'white' }} />, url: "https://twitter.com/stafona" },
  { name: "GitHub", icon: <GitHubIcon sx={{ fontSize: 24, color: 'white' }} />, url: "https://github.com/stafona" },
  { name: "Facebook", icon: <FacebookIcon sx={{ fontSize: 24, color: 'white' }} />, url: "#" }
];

