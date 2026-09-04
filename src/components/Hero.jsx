import React from 'react';
import clientImg from '../assets/client.png';

export default function Hero() {
  return (
    <section className="scroll-mt-24" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-industrial-navy dark:text-[#F3F4F6] font-bold">
              Mobin Jiaoddin Shaikh
            </h1>
            <h2 className="font-headline-md text-headline-md text-on-surface-variant dark:text-[#9CA3AF]">
              Machine Technician | 30 Years of Pharmaceutical Excellence
            </h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface dark:text-[#CBD5E1] max-w-2xl">
            Dedicated and precise machine technician with extensive experience in
            granulation, manufacturing processes, and complex machinery setup. A
            track record of supervising over 500 personnel while maintaining
            rigorous adherence to SOPs and ALCOA principles.
          </p>
          {/* Hero CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 bg-industrial-navy hover:bg-precision-blue dark:bg-[#1E293B] dark:hover:bg-[#334155] text-clinical-white font-label-md text-label-md px-6 py-3 rounded border border-industrial-navy dark:border-[#475569] shadow-sm hover:shadow transition-all duration-200 uppercase tracking-wider font-semibold group"
            >
              <span>VIEW EXPERIENCE</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform duration-200">
                arrow_forward
              </span>
            </a>
            <a
              href="/Mobin_Shaikh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mobin_Shaikh_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 bg-clinical-white dark:bg-[#121820] hover:bg-surface-container-low dark:hover:bg-[#1E293B] text-industrial-navy dark:text-[#F3F4F6] font-label-md text-label-md px-6 py-3 rounded border border-machine-gray dark:border-[#2A3441] hover:border-industrial-navy/40 shadow-sm transition-all duration-200 uppercase tracking-wider font-semibold group"
            >
              <span>DOWNLOAD CV</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-y-0.5 transition-transform duration-200">
                arrow_downward
              </span>
            </a>
          </div>
          {/* KPI Cards */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex flex-col border border-machine-gray dark:border-[#2A3441] bg-clinical-white dark:bg-[#121820] p-4 rounded min-w-[130px] flex-1 shadow-xs">
              <span className="font-headline-md text-headline-md text-industrial-navy dark:text-[#F3F4F6] font-bold">
                30
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-[#9CA3AF]">
                Years Industry Exp
              </span>
            </div>
            <div className="flex flex-col border border-machine-gray dark:border-[#2A3441] bg-clinical-white dark:bg-[#121820] p-4 rounded min-w-[130px] flex-1 shadow-xs">
              <span className="font-headline-md text-headline-md text-industrial-navy dark:text-[#F3F4F6] font-bold">
                25+
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-[#9CA3AF]">
                Years Machine Ops
              </span>
            </div>
            <div className="flex flex-col border border-machine-gray dark:border-[#2A3441] bg-clinical-white dark:bg-[#121820] p-4 rounded min-w-[130px] flex-1 shadow-xs">
              <span className="font-headline-md text-headline-md text-industrial-navy dark:text-[#F3F4F6] font-bold">
                500+
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-[#9CA3AF]">
                Personnel Supervised
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="client-frame relative w-full max-w-[560px] h-[440px] sm:h-[500px] md:h-[540px] lg:h-[560px] border border-transparent dark:border-[#2A3441] p-2 bg-transparent dark:bg-[#121820] rounded-lg overflow-hidden group">
            <div className="w-full h-full bg-gradient-to-b from-surface-container-low/30 to-surface-container-low/70 dark:from-[#1E293B]/40 dark:to-[#0B1118]/80 flex items-end justify-center overflow-hidden rounded">
              <img
                className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-all duration-500"
                alt="Mobin Jiaoddin Shaikh - Machine Technician"
                src={clientImg}
              />
            </div>
            <div className="absolute inset-0 pointer-events-none rounded"></div>
          </div>
        </div>
      </div>

      {/* Technical Expertise & Professional Qualities (Bento Grid) */}
      <div className="space-y-8">
        <div className="border-b border-machine-gray dark:border-[#2A3441] pb-4 mb-8">
          <h3 className="font-headline-md text-headline-md text-industrial-navy dark:text-[#F3F4F6] font-bold">
            Core Competencies &amp; Qualities
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
          {/* Core Competencies */}
          <div className="md:col-span-8 border border-machine-gray dark:border-[#2A3441] bg-clinical-white dark:bg-[#121820] p-6 sm:p-8 space-y-6 rounded shadow-sm">
            <div className="flex items-center justify-between border-b border-machine-gray/70 dark:border-[#2A3441] pb-4">
              <div className="flex items-center gap-3 text-industrial-navy dark:text-[#F3F4F6]">
                <span
                  className="material-symbols-outlined text-2xl text-industrial-navy dark:text-[#93C5FD]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  precision_manufacturing
                </span>
                <h4 className="font-headline-md text-headline-md font-bold">
                  Technical Expertise
                </h4>
              </div>
              <span className="font-label-sm text-[11px] uppercase tracking-wider text-industrial-navy dark:text-[#F3F4F6] font-bold px-3 py-1 bg-surface-container dark:bg-[#1E293B] border border-industrial-navy/30 dark:border-[#475569] rounded-md shadow-xs">
                High Proficiency
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Skill Card 1 */}
              <div className="p-4 rounded border border-machine-gray dark:border-[#2A3441] bg-surface-container-lowest dark:bg-[#0B1118] hover:border-industrial-navy/30 dark:hover:border-[#93C5FD]/40 transition-all duration-200 flex flex-col justify-between space-y-3">
                <div>
                  <span className="font-label-md text-label-md text-industrial-navy dark:text-[#F3F4F6] font-semibold block">
                    Granulation Processes
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant dark:text-[#9CA3AF] text-xs mt-1 block">
                    Expertise in wet &amp; dry granulation techniques.
                  </span>
                </div>
                <div className="w-full space-y-1.5 pt-1">
                  <div className="w-full bg-surface-container-high dark:bg-[#1E293B] rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-industrial-navy dark:bg-[#93C5FD] h-1.5 rounded-full transition-all duration-700"
                      style={{ width: '96%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Skill Card 2 */}
              <div className="p-4 rounded border border-machine-gray dark:border-[#2A3441] bg-surface-container-lowest dark:bg-[#0B1118] hover:border-industrial-navy/30 dark:hover:border-[#93C5FD]/40 transition-all duration-200 flex flex-col justify-between space-y-3">
                <div>
                  <span className="font-label-md text-label-md text-industrial-navy dark:text-[#F3F4F6] font-semibold block">
                    Machinery Setup
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant dark:text-[#9CA3AF] text-xs mt-1 block">
                    Precise calibration &amp; preparation for production runs.
                  </span>
                </div>
                <div className="w-full space-y-1.5 pt-1">
                  <div className="w-full bg-surface-container-high dark:bg-[#1E293B] rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-industrial-navy dark:bg-[#93C5FD] h-1.5 rounded-full transition-all duration-700"
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Skill Card 3 */}
              <div className="p-4 rounded border border-machine-gray dark:border-[#2A3441] bg-surface-container-lowest dark:bg-[#0B1118] hover:border-industrial-navy/30 dark:hover:border-[#93C5FD]/40 transition-all duration-200 flex flex-col justify-between space-y-3">
                <div>
                  <span className="font-label-md text-label-md text-industrial-navy dark:text-[#F3F4F6] font-semibold block">
                    Manufacturing Operations
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant dark:text-[#9CA3AF] text-xs mt-1 block">
                    Oversight of complex pharmaceutical production lines.
                  </span>
                </div>
                <div className="w-full space-y-1.5 pt-1">
                  <div className="w-full bg-surface-container-high dark:bg-[#1E293B] rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-industrial-navy dark:bg-[#93C5FD] h-1.5 rounded-full transition-all duration-700"
                      style={{ width: '97%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Skill Card 4 */}
              <div className="p-4 rounded border border-machine-gray dark:border-[#2A3441] bg-surface-container-lowest dark:bg-[#0B1118] hover:border-industrial-navy/30 dark:hover:border-[#93C5FD]/40 transition-all duration-200 flex flex-col justify-between space-y-3">
                <div>
                  <span className="font-label-md text-label-md text-industrial-navy dark:text-[#F3F4F6] font-semibold block">
                    Troubleshooting
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant dark:text-[#9CA3AF] text-xs mt-1 block">
                    Rapid identification &amp; resolution of mechanical faults.
                  </span>
                </div>
                <div className="w-full space-y-1.5 pt-1">
                  <div className="w-full bg-surface-container-high dark:bg-[#1E293B] rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-industrial-navy dark:bg-[#93C5FD] h-1.5 rounded-full transition-all duration-700"
                      style={{ width: '92%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Qualities */}
          <div className="md:col-span-4 border border-machine-gray dark:border-[#2A3441] bg-clinical-white dark:bg-[#121820] p-6 sm:p-8 space-y-5 rounded shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-industrial-navy dark:text-[#F3F4F6] mb-5 border-b border-machine-gray/70 dark:border-[#2A3441] pb-4">
                <span
                  className="material-symbols-outlined text-2xl text-industrial-navy dark:text-[#F2DF74]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  military_tech
                </span>
                <h4 className="font-headline-md text-headline-md font-bold">
                  Professional Qualities
                </h4>
              </div>
              <div className="space-y-0 divide-y divide-machine-gray/70 dark:divide-[#2A3441]">
                {/* Item 1 */}
                <div className="relative py-3.5 flex items-center justify-between group">
                  <span className="font-body-md text-on-surface dark:text-[#F3F4F6] font-semibold z-10">
                    Hardworking
                  </span>
                  <span className="font-headline-md text-3xl font-black text-industrial-navy/40 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy/60 dark:group-hover:text-[#F3F4F6]/50 transition-colors select-none font-mono tracking-tighter">
                    01
                  </span>
                </div>
                {/* Item 2 */}
                <div className="relative py-3.5 flex items-center justify-between group">
                  <span className="font-body-md text-on-surface dark:text-[#F3F4F6] font-semibold z-10">
                    Punctual
                  </span>
                  <span className="font-headline-md text-3xl font-black text-industrial-navy/40 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy/60 dark:group-hover:text-[#F3F4F6]/50 transition-colors select-none font-mono tracking-tighter">
                    02
                  </span>
                </div>
                {/* Item 3 */}
                <div className="relative py-3.5 flex items-center justify-between group">
                  <span className="font-body-md text-on-surface dark:text-[#F3F4F6] font-semibold z-10">
                    Strong Observation
                  </span>
                  <span className="font-headline-md text-3xl font-black text-industrial-navy/40 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy/60 dark:group-hover:text-[#F3F4F6]/50 transition-colors select-none font-mono tracking-tighter">
                    03
                  </span>
                </div>
                {/* Item 4 */}
                <div className="relative py-3.5 flex items-center justify-between group">
                  <span className="font-body-md text-on-surface dark:text-[#F3F4F6] font-semibold z-10">
                    SOP &amp; ALCOA Focused
                  </span>
                  <span className="font-headline-md text-3xl font-black text-industrial-navy/40 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy/60 dark:group-hover:text-[#F3F4F6]/50 transition-colors select-none font-mono tracking-tighter">
                    04
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
