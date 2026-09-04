import React, { useState } from 'react';
import CertificateModal from './CertificateModal.jsx';

export default function Achievements() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="scroll-mt-24" id="achievements">
      <div className="mb-12 border-b border-machine-gray dark:border-[#2A3441] pb-6">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-industrial-navy dark:bg-[#93C5FD]"></span>
          <span className="font-label-sm text-xs font-bold uppercase tracking-[0.2em] text-industrial-navy dark:text-[#93C5FD]">
            Recognition &amp; Impact
          </span>
        </div>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg font-bold text-industrial-navy dark:text-[#F3F4F6] mb-3 tracking-tight">
          Record of Excellence.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9CA3AF] max-w-3xl leading-relaxed">
          Quantifiable impact through rigorous inspection, proactive problem-solving, and
          continuous technical education in high-stakes pharmaceutical manufacturing
          environments.
        </p>
      </div>

      {/* Key Achievements Grid: Dominant 65/35 Split */}
      <div className="space-y-6 mb-12">
        <div className="flex items-center gap-2 text-industrial-navy dark:text-[#F3F4F6] border-b border-machine-gray dark:border-[#2A3441] pb-3">
          <span className="material-symbols-outlined text-xl text-industrial-navy dark:text-[#93C5FD]">
            verified
          </span>
          <h3 className="font-headline-md text-base font-bold uppercase tracking-wider">
            Key Achievements
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Primary Achievement: ₹2 CRORE Loss Prevented (Dominant 65% weight) */}
          <div className="lg:col-span-8 bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] rounded-xl p-6 sm:p-8 flex flex-col justify-between group hover:border-industrial-navy/50 dark:hover:border-[#93C5FD]/50 transition-all duration-300 shadow-sm relative overflow-hidden">
            <div className="space-y-4">
              <div className="border-b border-machine-gray/70 dark:border-[#2A3441] pb-4">
                <span className="font-headline-lg text-4xl sm:text-5xl font-black text-industrial-navy dark:text-[#F3F4F6] tracking-tight block font-mono">
                  ₹2 CRORE
                </span>
                <span className="font-label-sm text-xs font-bold uppercase tracking-[0.18em] text-industrial-navy dark:text-[#93C5FD] block mt-1">
                  Loss Prevented
                </span>
              </div>
              <div>
                <h4 className="font-headline-md text-xl font-bold text-industrial-navy dark:text-[#F3F4F6] mb-2">
                  Critical Material Identification
                </h4>
                <p className="font-body-md text-on-surface-variant dark:text-[#CBD5E1] leading-relaxed max-w-2xl">
                  Successfully prevented a ₹2 crore loss by identifying and intercepting foreign particles in raw materials prior to the manufacturing cycle. This intervention maintained product integrity and regulatory compliance.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-machine-gray/70 dark:border-[#2A3441] flex items-center justify-between">
              <div className="flex items-center gap-2 text-industrial-navy dark:text-[#93C5FD] font-label-sm text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-base">visibility</span>
                <span>Inspection Protocol Executed</span>
              </div>
              <span className="font-label-sm text-[10px] uppercase font-bold tracking-widest text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2.5 py-1 rounded border border-machine-gray dark:border-[#2A3441]">
                Production Safeguard
              </span>
            </div>
          </div>

          {/* Secondary Achievement: Employee of the Year (Supporting 35% weight) */}
          <div className="lg:col-span-4 bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] rounded-xl p-6 sm:p-8 flex flex-col justify-between group hover:border-industrial-navy/50 dark:hover:border-[#93C5FD]/50 transition-all duration-300 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-machine-gray/70 dark:border-[#2A3441] pb-4">
                <span
                  className="material-symbols-outlined text-3xl text-industrial-navy dark:text-[#F2DF74]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  military_tech
                </span>
                <span className="font-label-sm text-[10px] uppercase font-bold tracking-widest text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2 py-0.5 rounded border border-machine-gray dark:border-[#2A3441]">
                  Plant Honors
                </span>
              </div>
              <div>
                <h4 className="font-headline-md text-lg font-bold text-industrial-navy dark:text-[#F3F4F6] mb-2">
                  Employee of the Year
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                  Recognized across the production facility for consistent operational excellence, zero-downtime maintenance initiatives, and unwavering adherence to safety protocols.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-machine-gray/70 dark:border-[#2A3441]">
              <span className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] font-medium block">
                Facility-Wide Recognition
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Official Recognition: High-Contrast Dark Block with Prominent Interactive Certificate */}
      <div className="mb-14">
        <div className="bg-industrial-navy dark:bg-[#121820] text-clinical-white border border-industrial-navy dark:border-[#2A3441] rounded-xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 shadow-md">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-[#93C5FD] font-label-sm text-xs font-bold uppercase tracking-[0.16em]">
              <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
              <span>Official Recognition</span>
            </div>
            <h4 className="font-headline-md text-2xl font-bold text-clinical-white">
              Equipment Manufacturer Appreciation
            </h4>
            <p className="font-body-md text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              Received an official letter of appreciation from a leading pharmaceutical equipment manufacturer for providing critical feedback and technical insights that led to design improvements in their calibration modules.
            </p>
          </div>

          {/* Interactive Certificate Evidence View */}
          <div className="w-full md:w-64 shrink-0 flex flex-col items-center md:items-end">
            <button
              onClick={() => setModalOpen(true)}
              aria-label="View official appreciation certificate"
              className="group relative w-full h-36 bg-[#0B1118] border border-[#334155] hover:border-[#93C5FD] rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#93C5FD]"
            >
              <div
                className="bg-cover bg-center w-full h-full opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTz_SBXPESxFR4yA7OwYOyk717UPMig2dO4BWuj1EZ0XVw104vkU8lGUj8Hg5lipcLrJRc1JRV4WvImEAH5nF1X6mWiASNfGNzi38-wt6OqiFlxHH2q7-7WN95qBwVLbyDTumdpdwxxMty9RB1djkxB-jw8wLsPd-NcFh64VoaiLpoBXabUwC18UaFCYCI6BOsmCHma3EjbZGX7l2b3W_lALEIs8fIqxSfP3F17yh5fDo4iisDDnFl')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1118]/90 via-transparent to-transparent flex items-end p-2.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-clinical-white group-hover:text-[#93C5FD] transition-colors">
                  <span>VIEW CERTIFICATE</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    open_in_new
                  </span>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Lightbox for Certificate */}
      <CertificateModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Education & Training: Structured Proof Points */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Education: Compact Editorial Block */}
        <div className="lg:col-span-4 bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-machine-gray/70 dark:border-[#2A3441] pb-3">
              <div className="flex items-center gap-2 text-industrial-navy dark:text-[#F3F4F6]">
                <span className="material-symbols-outlined text-lg text-industrial-navy dark:text-[#93C5FD]">
                  school
                </span>
                <h3 className="font-headline-md text-sm font-bold uppercase tracking-wider">
                  Formal Education
                </h3>
              </div>
              <span className="font-headline-md text-xs font-bold text-industrial-navy dark:text-[#93C5FD] font-mono bg-surface-container-low dark:bg-[#1E293B] px-2 py-0.5 rounded border border-machine-gray dark:border-[#2A3441]">
                1994
              </span>
            </div>

            <div>
              <span className="font-headline-lg text-3xl font-bold text-industrial-navy dark:text-[#F3F4F6] block font-mono leading-none">
                B.Sc.
              </span>
              <h4 className="font-body-md text-sm font-semibold text-industrial-navy dark:text-[#CBD5E1] mt-1.5">
                Bachelor of Science
              </h4>
              <p className="font-body-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-1">
                North Maharashtra University
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-machine-gray/70 dark:border-[#2A3441] flex items-center justify-between">
            <span className="font-label-sm text-[11px] text-on-surface-variant dark:text-[#9CA3AF]">
              Graduation Year
            </span>
            <span className="font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6]">
              1994
            </span>
          </div>
        </div>

        {/* Technical & Safety Training: 100+ Proof Point & Clean Two-Column Matrix */}
        <div className="lg:col-span-8 bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex flex-wrap items-baseline justify-between border-b border-machine-gray/70 dark:border-[#2A3441] pb-3 gap-2">
              <div className="flex items-center gap-2 text-industrial-navy dark:text-[#F3F4F6]">
                <span className="material-symbols-outlined text-lg text-industrial-navy dark:text-[#93C5FD]">
                  model_training
                </span>
                <h3 className="font-headline-md text-sm font-bold uppercase tracking-wider">
                  Technical &amp; Safety Training
                </h3>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-headline-md text-xl font-black text-industrial-navy dark:text-[#93C5FD] font-mono leading-none">
                  100+
                </span>
                <span className="font-label-sm text-[10px] uppercase font-bold tracking-wider text-industrial-navy dark:text-[#F3F4F6]">
                  Specialized Programs
                </span>
              </div>
            </div>

            <p className="font-body-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
              Completed over 100+ specialized training programs focused on operational safety, emergency response, and technical compliance within sterile environments.
            </p>

            {/* Clean Training Two-Column Matrix */}
            <div className="divide-y divide-machine-gray/70 dark:divide-[#2A3441] pt-1">
              {/* Row 1 */}
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-semibold text-industrial-navy dark:text-[#F3F4F6] sm:w-44 shrink-0">
                  First Response
                </span>
                <span className="text-on-surface-variant dark:text-[#CBD5E1]">
                  CPR (Cardiopulmonary Resuscitation) Certified
                </span>
              </div>
              {/* Row 2 */}
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-semibold text-industrial-navy dark:text-[#F3F4F6] sm:w-44 shrink-0">
                  Hazard Control
                </span>
                <span className="text-on-surface-variant dark:text-[#CBD5E1]">
                  Advanced Firefighting &amp; Extinguisher Operation
                </span>
              </div>
              {/* Row 3 */}
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-semibold text-industrial-navy dark:text-[#F3F4F6] sm:w-44 shrink-0">
                  Operational Safety
                </span>
                <span className="text-on-surface-variant dark:text-[#CBD5E1]">
                  Industrial Equipment Safety &amp; LOTO Protocols
                </span>
              </div>
              {/* Row 4 */}
              <div className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
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
    </section>
  );
}
