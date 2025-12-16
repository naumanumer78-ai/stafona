"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Mark this route as dynamic to prevent prerendering issues
export const dynamic = 'force-dynamic';

function ApplicationForm() {
  const searchParams = useSearchParams();
  const position = searchParams.get("position") || "General Application";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    position: position,
    experience: "",
    availability: "",
    coverLetter: "",
    resume: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your application! We'll review it and get back to you soon.");
    // Reset form or redirect
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--primary-color, #667eea)' }}>
            Join Our Team
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Apply for Position
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {position !== "General Application" ? `Applying for: ${position}` : "Submit your application to join our talented team"}
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-[1.5625em] md:px-[3.5em]" style={{ backgroundColor: 'var(--midnight-95)' }}>
        <div className="max-w-[900px] mx-auto">
          <form onSubmit={handleSubmit} className="bg-[#020202] p-8 md:p-12 rounded-xl border border-white/10">
            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                      placeholder="Doe"
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
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-semibold mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-semibold mb-2">
                      Portfolio/Website
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>
              </div>

              {/* Position Details */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Position Details</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm font-semibold mb-2">
                      Position Applying For *
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                    >
                      <option value="">Select a position</option>
                      <option value="Senior Full-Stack Developer">Senior Full-Stack Developer</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="Mobile App Developer">Mobile App Developer</option>
                      <option value="Data Scientist">Data Scientist</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-semibold mb-2">
                      Years of Experience *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                    >
                      <option value="">Select experience</option>
                      <option value="0-2">0-2 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white/70 text-sm font-semibold mb-2">
                      When Can You Start? *
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none"
                    >
                      <option value="">Select availability</option>
                      <option value="Immediately">Immediately</option>
                      <option value="2 weeks">2 weeks notice</option>
                      <option value="1 month">1 month notice</option>
                      <option value="2+ months">2+ months</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Cover Letter</h2>
                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Tell us why you'd be a great fit *
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none resize-none"
                    placeholder="Share your passion, experience, and what makes you unique..."
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Resume</h2>
                <div>
                  <label className="block text-white/70 text-sm font-semibold mb-2">
                    Upload Your Resume * (PDF, DOC, DOCX - Max 5MB)
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 bg-[#0a0e27] border border-white/10 rounded-lg text-white focus:border-[#667eea] focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-[10px] file:border-0 file:text-sm file:font-semibold file:bg-[#667eea] file:text-white hover:file:bg-[#5568d3]"
                  />
                  {formData.resume && (
                    <p className="mt-2 text-sm text-white/60">
                      Selected: {formData.resume.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-[10px] font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  Submit Application
                </button>
                <p className="text-white/60 text-sm text-center mt-4">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}

export default function JobApplicationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--midnight)' }}>
        <div className="text-white text-xl">Loading...</div>
      </div>
    }>
      <ApplicationForm />
    </Suspense>
  );
}
