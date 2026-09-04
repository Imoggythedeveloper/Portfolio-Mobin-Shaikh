import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    purpose: 'Full-time Machine Technician Role',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Inquiry submitted successfully. Mobin will review your requirements promptly.');
  };

  return (
    <section className="scroll-mt-24" id="contact">
      {/* Section Intro & Technical Eyebrow */}
      <div className="mb-12 border-b border-machine-gray dark:border-[#2A3441] pb-6">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-industrial-navy dark:bg-[#93C5FD]"></span>
          <span className="font-label-sm text-xs font-bold uppercase tracking-[0.2em] text-industrial-navy dark:text-[#93C5FD]">
            Contact / Professional Inquiries
          </span>
        </div>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg font-bold text-industrial-navy dark:text-[#F3F4F6] mb-3 tracking-tight">
          DIRECT EMPLOYER &amp; RECRUITER INQUIRY
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9CA3AF] max-w-3xl leading-relaxed">
          For employment opportunities, manufacturing assignments, plant equipment setup consultation, or detailed credential requests.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Professional Dossier Panel (38% Desktop Width) */}
        <div className="lg:col-span-5 bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] rounded-xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            {/* Monogram & Header */}
            <div className="flex items-center gap-4 border-b border-machine-gray/70 dark:border-[#2A3441] pb-6">
              <div className="w-14 h-14 bg-industrial-navy dark:bg-[#1E293B] text-clinical-white dark:text-[#93C5FD] border border-industrial-navy dark:border-[#475569] flex items-center justify-center font-headline-md text-xl font-bold rounded-lg shrink-0 shadow-xs">
                MS
              </div>
              <div>
                <h3 className="font-headline-md text-lg sm:text-xl font-bold text-industrial-navy dark:text-[#F3F4F6] leading-tight">
                  Mobin Jiaoddin Shaikh
                </h3>
                <p className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] font-medium mt-1">
                  Senior Pharmaceutical Machine Technician
                </p>
              </div>
            </div>

            {/* Prominent Proof Point Anchor */}
            <div className="p-4 bg-surface-container-low dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg flex items-center justify-between">
              <div>
                <span className="font-headline-lg text-3xl font-black text-industrial-navy dark:text-[#F3F4F6] block font-mono leading-none">
                  30+ YEARS
                </span>
                <span className="font-label-sm text-[10px] uppercase font-bold tracking-[0.16em] text-industrial-navy dark:text-[#93C5FD] block mt-1">
                  Pharmaceutical Manufacturing
                </span>
              </div>
              <span className="material-symbols-outlined text-2xl text-industrial-navy/30 dark:text-[#93C5FD]/30">
                factory
              </span>
            </div>

            {/* Structured Credentials List */}
            <div className="space-y-4">
              {/* Target Roles */}
              <div className="p-3 bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg">
                <span className="font-label-sm text-[10px] uppercase font-bold text-outline dark:text-[#94A3B8] tracking-wider block">
                  Target Roles
                </span>
                <span className="font-body-md text-xs sm:text-sm font-bold text-industrial-navy dark:text-[#F3F4F6] block mt-1">
                  Machine Technician / Granulation &amp; Compression Lead
                </span>
              </div>

              {/* Current Designation */}
              <div className="p-3 bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-[10px] uppercase font-bold text-outline dark:text-[#94A3B8] tracking-wider block">
                    Current Designation
                  </span>
                  <span className="font-body-md text-xs sm:text-sm font-semibold text-industrial-navy dark:text-[#F3F4F6] block mt-0.5">
                    Senior Machine Technician (VS International)
                  </span>
                </div>
              </div>

              {/* Compliance Mastery */}
              <div className="p-3 bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg">
                <span className="font-label-sm text-[10px] uppercase font-bold text-outline dark:text-[#94A3B8] tracking-wider block">
                  Compliance Mastery
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  <span className="font-label-sm text-[11px] font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-clinical-white dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] px-2 py-0.5 rounded">
                    cGMP
                  </span>
                  <span className="font-label-sm text-[11px] font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-clinical-white dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] px-2 py-0.5 rounded">
                    ALCOA+
                  </span>
                  <span className="font-label-sm text-[11px] font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-clinical-white dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] px-2 py-0.5 rounded">
                    BMR
                  </span>
                  <span className="font-label-sm text-[11px] font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-clinical-white dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] px-2 py-0.5 rounded">
                    IPQC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CV Resource Button */}
          <a
            href="/Mobin_Shaikh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Mobin_Shaikh_Resume.pdf"
            className="w-full bg-clinical-white dark:bg-[#0B1118] hover:bg-surface-container-low dark:hover:bg-[#1E293B] text-industrial-navy dark:text-[#F3F4F6] border border-industrial-navy/30 dark:border-[#475569] font-label-md text-xs font-bold py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 shadow-xs transition-all duration-200 uppercase tracking-wider group"
          >
            <span className="material-symbols-outlined text-base text-industrial-navy dark:text-[#93C5FD] group-hover:translate-y-0.5 transition-transform">
              download
            </span>
            <span>DOWNLOAD / PRINT FORMAL CV</span>
          </a>
        </div>

        {/* Right Column: Recruiter Inquiry Workspace (62% Desktop Width) */}
        <div className="lg:col-span-7 bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] rounded-xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-between space-y-6">
          <div className="border-b border-machine-gray/70 dark:border-[#2A3441] pb-4">
            <h3 className="font-headline-md text-lg font-bold text-industrial-navy dark:text-[#F3F4F6] uppercase tracking-wider">
              Direct Recruiter Workspace
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-1">
              Please provide details regarding the plant location, machinery setup, or role requirements for direct evaluation.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Row 1: Name & Organization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] uppercase tracking-wider mb-1.5">
                  Recruiter / Contact Name <span className="text-error font-bold">*</span>
                </label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg px-4 py-2.5 font-body-md text-sm text-industrial-navy dark:text-[#F3F4F6] placeholder-on-surface-variant/50 focus:border-industrial-navy dark:focus:border-[#93C5FD] focus:ring-1 focus:ring-industrial-navy dark:focus:ring-[#93C5FD] outline-none transition-colors"
                  placeholder="e.g. Dr. Rajesh Verma / HR Lead"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] uppercase tracking-wider mb-1.5">
                  Organization / Plant Name
                </label>
                <input
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg px-4 py-2.5 font-body-md text-sm text-industrial-navy dark:text-[#F3F4F6] placeholder-on-surface-variant/50 focus:border-industrial-navy dark:focus:border-[#93C5FD] focus:ring-1 focus:ring-industrial-navy dark:focus:ring-[#93C5FD] outline-none transition-colors"
                  placeholder="e.g. Torrent Pharma / Cipla Ltd."
                  type="text"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] uppercase tracking-wider mb-1.5">
                  Work Email Address <span className="text-error font-bold">*</span>
                </label>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg px-4 py-2.5 font-body-md text-sm text-industrial-navy dark:text-[#F3F4F6] placeholder-on-surface-variant/50 focus:border-industrial-navy dark:focus:border-[#93C5FD] focus:ring-1 focus:ring-industrial-navy dark:focus:ring-[#93C5FD] outline-none transition-colors"
                  placeholder="hr@pharmaplant.com"
                  type="email"
                />
              </div>
              <div>
                <label className="block font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] uppercase tracking-wider mb-1.5">
                  Contact Phone / Mobile
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg px-4 py-2.5 font-body-md text-sm text-industrial-navy dark:text-[#F3F4F6] placeholder-on-surface-variant/50 focus:border-industrial-navy dark:focus:border-[#93C5FD] focus:ring-1 focus:ring-industrial-navy dark:focus:ring-[#93C5FD] outline-none transition-colors"
                  placeholder="+91 98765 43210"
                  type="tel"
                />
              </div>
            </div>

            {/* Engagement Purpose */}
            <div>
              <label className="block font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] uppercase tracking-wider mb-1.5">
                Inquiry / Engagement Purpose
              </label>
              <div className="relative">
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg px-4 py-2.5 font-body-md text-sm text-industrial-navy dark:text-[#F3F4F6] focus:border-industrial-navy dark:focus:border-[#93C5FD] focus:ring-1 focus:ring-industrial-navy dark:focus:ring-[#93C5FD] outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option className="dark:bg-[#121820]">Full-time Machine Technician Role</option>
                  <option className="dark:bg-[#121820]">Granulation / Compression Lead Position</option>
                  <option className="dark:bg-[#121820]">Plant Equipment Setup &amp; Calibration Consultation</option>
                  <option className="dark:bg-[#121820]">Detailed Credential / Document Verification</option>
                  <option className="dark:bg-[#121820]">Other Professional Inquiry</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline dark:text-[#94A3B8] text-base">
                  expand_more
                </span>
              </div>
            </div>

            {/* Message / Job Description */}
            <div>
              <label className="block font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] uppercase tracking-wider mb-1.5">
                Message / Job Description Overview
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg px-4 py-3 font-body-md text-sm text-industrial-navy dark:text-[#F3F4F6] placeholder-on-surface-variant/50 focus:border-industrial-navy dark:focus:border-[#93C5FD] focus:ring-1 focus:ring-industrial-navy dark:focus:ring-[#93C5FD] outline-none transition-colors resize-y"
                placeholder="Briefly describe the manufacturing facility location, machinery portfolio (e.g. RMG, rotary presses), and shift requirements..."
              ></textarea>
            </div>

            {/* Form Action & Confidence Signal */}
            <div className="pt-2 space-y-4">
              <button
                type="submit"
                className="w-full bg-industrial-navy hover:bg-precision-blue dark:bg-[#1E293B] dark:hover:bg-[#334155] text-clinical-white font-label-md text-xs sm:text-sm font-bold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 border border-industrial-navy dark:border-[#475569] shadow-sm hover:shadow transition-all duration-200 uppercase tracking-widest group cursor-pointer"
              >
                <span>SEND RECRUITER INQUIRY</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                  send
                </span>
              </button>

              <div className="flex items-center justify-center gap-2 text-center text-outline dark:text-[#94A3B8] font-label-sm text-[11px] uppercase tracking-widest">
                <span className="material-symbols-outlined text-xs text-industrial-navy dark:text-[#93C5FD]">
                  lock
                </span>
                <span>Direct Professional Contact · Employment · Technical Inquiries</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
