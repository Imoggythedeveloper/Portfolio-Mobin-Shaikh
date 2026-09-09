import React, { useState, useEffect, useRef } from 'react';
import CertificateModal from './CertificateModal.jsx';

export default function Achievements() {
  const [modalOpen, setModalOpen] = useState(false);

  // Subtle reveal observer for major sections
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [section1Ref, section2Ref, section3Ref];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="scroll-mt-24" id="achievements">
      {/* 1. Page Header */}
      <div className="mb-16 lg:mb-20 pb-8 border-b border-[#EAE5DC] dark:border-[#2A3441]">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-industrial-navy dark:bg-[#93C5FD]"></span>
          <span className="font-label-sm text-xs font-bold uppercase tracking-[0.2em] text-industrial-navy dark:text-[#93C5FD]">
            Recognition &amp; Impact
          </span>
        </div>
        <h2 className="font-headline-lg-mobile text-3xl sm:text-4xl md:text-5xl font-bold text-industrial-navy dark:text-[#F3F4F6] mb-4 tracking-tight">
          Record of Excellence.
        </h2>
        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant dark:text-[#CBD5E1] max-w-3xl leading-relaxed">
          Quantifiable impact through rigorous inspection, proactive problem-solving, and
          continuous technical education in high-stakes pharmaceutical manufacturing
          environments.
        </p>
      </div>

      {/* 2. Key Achievements — Dominant 65/35 Asymmetric Grid (IMPACT) */}
      <div
        ref={section1Ref}
        className="opacity-0 translate-y-4 transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 mb-20 lg:mb-24 space-y-6"
      >
        <div className="flex items-center gap-2.5 text-industrial-navy dark:text-[#F3F4F6] pb-3 border-b border-[#EAE5DC] dark:border-[#2A3441]">
          <span className="material-symbols-outlined text-xl text-industrial-navy dark:text-[#93C5FD]">
            verified
          </span>
          <h3 className="font-headline-md text-base font-bold uppercase tracking-wider">
            Key Achievements
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Primary Achievement: ₹2 CRORE Loss Prevented (Dominant ~65% Desktop Weight) */}
          <div className="lg:col-span-8 bg-clinical-white dark:bg-[#121820] border border-[#EAE5DC] dark:border-[#2A3441] rounded-2xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between hover:border-industrial-navy/50 dark:hover:border-[#93C5FD]/50 transition-all duration-300 shadow-sm relative">
            <div className="space-y-6">
              <div className="space-y-2 pb-6 border-b border-[#EAE5DC] dark:border-[#2A3441]">
                <span className="font-headline-lg text-5xl sm:text-6xl lg:text-7xl font-black text-industrial-navy dark:text-[#F3F4F6] tracking-tight block font-mono leading-none">
                  ₹2 CRORE
                </span>
                <span className="font-label-sm text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-precision-blue dark:text-[#93C5FD] block">
                  Loss Prevented
                </span>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-headline-md text-2xl sm:text-3xl font-bold text-industrial-navy dark:text-[#F3F4F6] tracking-tight">
                  Critical Material Identification
                </h4>
                <p className="font-body-md text-base sm:text-lg text-on-surface-variant dark:text-[#CBD5E1] leading-relaxed max-w-3xl">
                  Prevented an estimated ₹2 crore loss by identifying and intercepting foreign particles in raw materials prior to the manufacturing cycle. This intervention maintained product integrity and regulatory compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Achievement: Employee of the Year (Supporting ~35% Desktop Weight) */}
          <div className="lg:col-span-4 bg-clinical-white dark:bg-[#121820] border border-[#EAE5DC] dark:border-[#2A3441] rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-industrial-navy/50 dark:hover:border-[#93C5FD]/50 transition-all duration-300 shadow-sm">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-surface-container-low dark:bg-[#1E293B] flex items-center justify-center text-amber-500 dark:text-[#F2DF74]">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  military_tech
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="font-headline-md text-xl sm:text-2xl font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  Employee of the Year
                </h4>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                  Recognized across the production facility for consistent operational excellence, zero-downtime maintenance initiatives, and unwavering adherence to safety protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Official Recognition: Editorial Feature with Prominent Certificate Preview (RECOGNITION) */}
      <div
        ref={section2Ref}
        className="opacity-0 translate-y-4 transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 mb-20 lg:mb-24"
      >
        <div className="bg-clinical-white dark:bg-[#121820] border border-[#EAE5DC] dark:border-[#2A3441] rounded-2xl p-8 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column ~60%: Editorial Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-precision-blue dark:text-[#93C5FD] font-label-sm text-xs font-bold uppercase tracking-[0.2em]">
                <span className="material-symbols-outlined text-base">workspace_premium</span>
                <span>Official Recognition</span>
              </div>
              <h4 className="font-headline-md text-2xl sm:text-3xl font-bold text-industrial-navy dark:text-[#F3F4F6] tracking-tight">
                Equipment Manufacturer Appreciation
              </h4>
              <p className="font-body-md text-base sm:text-lg text-on-surface-variant dark:text-[#CBD5E1] leading-relaxed">
                Received an official letter of appreciation from a leading pharmaceutical equipment manufacturer for providing critical feedback and technical insights that led to design improvements in their calibration modules.
              </p>
            </div>

            {/* Right Column ~40%: Genuine Certificate Preview with Click-to-Enlarge */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setModalOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setModalOpen(true);
                  }
                }}
                aria-label="View official manufacturer appreciation letter full size"
                className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-[#EAE5DC] dark:border-[#2A3441] hover:border-industrial-navy/60 dark:hover:border-[#93C5FD]/60 shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-precision-blue dark:focus:ring-[#93C5FD]"
              >
                {/* Genuine Certificate Image Preview */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTz_SBXPESxFR4yA7OwYOyk717UPMig2dO4BWuj1EZ0XVw104vkU8lGUj8Hg5lipcLrJRc1JRV4WvImEAH5nF1X6mWiASNfGNzi38-wt6OqiFlxHH2q7-7WN95qBwVLbyDTumdpdwxxMty9RB1djkxB-jw8wLsPd-NcFh64VoaiLpoBXabUwC18UaFCYCI6BOsmCHma3EjbZGX7l2b3W_lALEIs8fIqxSfP3F17yh5fDo4iisDDnFl"
                  alt="Official Letter of Appreciation from Pharmaceutical Equipment Manufacturer"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-500"
                />

                {/* Subtle Hover Action Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-navy/85 via-industrial-navy/20 to-transparent flex items-end justify-between p-4 sm:p-5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span className="font-label-sm text-xs sm:text-sm font-bold tracking-wider text-clinical-white uppercase flex items-center gap-1.5">
                    <span>View Full Certificate</span>
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      open_in_new
                    </span>
                  </span>
                  <span className="text-[11px] text-clinical-white/80 font-mono hidden sm:inline-block">
                    Click to enlarge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Lightbox for Certificate */}
      <CertificateModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* 4. Visual Subsection: Credentials & Professional Development (CREDENTIALS) */}
      <div
        ref={section3Ref}
        className="opacity-0 translate-y-4 transition-all duration-700 ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0 space-y-6"
      >
        {/* Distinction Section Header */}
        <div className="flex items-center gap-2.5 text-industrial-navy dark:text-[#F3F4F6] pb-3 border-b border-[#EAE5DC] dark:border-[#2A3441]">
          <span className="material-symbols-outlined text-xl text-industrial-navy dark:text-[#93C5FD]">
            school
          </span>
          <h3 className="font-headline-md text-base font-bold uppercase tracking-wider">
            Credentials &amp; Professional Development
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Formal Education: Compact Single Container (~35-40% Desktop) */}
          <div className="lg:col-span-5 bg-clinical-white dark:bg-[#121820] border border-[#EAE5DC] dark:border-[#2A3441] rounded-2xl p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-sm hover:border-industrial-navy/40 dark:hover:border-[#93C5FD]/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE5DC] dark:border-[#2A3441]">
                <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-outline dark:text-[#94A3B8]">
                  Formal Education
                </span>
                <span className="font-mono text-xs font-semibold text-outline dark:text-[#94A3B8]">
                  1994
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-headline-lg text-3xl sm:text-4xl font-bold text-industrial-navy dark:text-[#F3F4F6] block font-mono leading-tight">
                  B.Sc.
                </span>
                <h4 className="font-headline-md text-base sm:text-lg font-semibold text-industrial-navy dark:text-[#CBD5E1]">
                  Bachelor of Science
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant dark:text-[#9CA3AF]">
                  North Maharashtra University
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#EAE5DC] dark:border-[#2A3441] text-xs text-on-surface-variant dark:text-[#94A3B8] font-medium">
              Academic Foundation &bull; Science &amp; Industrial Chemistry
            </div>
          </div>

          {/* Technical & Safety Training: 100+ Visual Statistic & Structured Clean Matrix (~60-65% Desktop) */}
          <div className="lg:col-span-7 bg-clinical-white dark:bg-[#121820] border border-[#EAE5DC] dark:border-[#2A3441] rounded-2xl p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-sm hover:border-industrial-navy/40 dark:hover:border-[#93C5FD]/40 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between pb-3 border-b border-[#EAE5DC] dark:border-[#2A3441] gap-2">
                <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-outline dark:text-[#94A3B8]">
                  Technical &amp; Safety Training
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-md text-2xl font-black text-industrial-navy dark:text-[#93C5FD] font-mono leading-none">
                    100+
                  </span>
                  <span className="font-label-sm text-xs uppercase font-bold tracking-wider text-industrial-navy dark:text-[#F3F4F6]">
                    Specialized Programs
                  </span>
                </div>
              </div>

              <p className="font-body-md text-xs sm:text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                Completed over 100 specialized training programs focused on operational safety, emergency response, and technical compliance within sterile environments.
              </p>

              {/* Clean Structured List with Subtle Dividers (No cards or badge pills) */}
              <div className="divide-y divide-[#EAE5DC] dark:divide-[#2A3441] pt-1">
                {/* Row 1 */}
                <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                  <span className="font-semibold text-industrial-navy dark:text-[#F3F4F6] sm:w-44 shrink-0">
                    First Response
                  </span>
                  <span className="text-on-surface-variant dark:text-[#CBD5E1]">
                    CPR (Cardiopulmonary Resuscitation) Certified
                  </span>
                </div>
                {/* Row 2 */}
                <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                  <span className="font-semibold text-industrial-navy dark:text-[#F3F4F6] sm:w-44 shrink-0">
                    Hazard Control
                  </span>
                  <span className="text-on-surface-variant dark:text-[#CBD5E1]">
                    Advanced Firefighting &amp; Extinguisher Operation
                  </span>
                </div>
                {/* Row 3 */}
                <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                  <span className="font-semibold text-industrial-navy dark:text-[#F3F4F6] sm:w-44 shrink-0">
                    Operational Safety
                  </span>
                  <span className="text-on-surface-variant dark:text-[#CBD5E1]">
                    Industrial Equipment Safety &amp; LOTO Protocols
                  </span>
                </div>
                {/* Row 4 */}
                <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                  <span className="font-semibold text-industrial-navy dark:text-[#F3F4F6] sm:w-44 shrink-0">
                    Compliance
                  </span>
                  <span className="text-on-surface-variant dark:text-[#CBD5E1]">
                    95+ Additional specialized modules in GMP/SOPs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
