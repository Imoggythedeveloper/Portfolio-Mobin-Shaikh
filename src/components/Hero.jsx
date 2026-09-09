import React from 'react';
import clientImg from '../assets/client.png';

export default function Hero() {
  return (
    <section className="scroll-mt-24" id="home">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 lg:mb-28">
        <div className="lg:col-span-6 space-y-7">
          <div className="space-y-3">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-industrial-navy dark:text-[#F3F4F6] font-bold tracking-tight">
              Mobin Jiaoddin Shaikh
            </h1>
            <h2 className="font-headline-md text-headline-md text-on-surface-variant dark:text-[#9CA3AF]">
              Machine Technician | 30 Years of Pharmaceutical Excellence
            </h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface dark:text-[#CBD5E1] max-w-2xl leading-relaxed">
            Dedicated machine technician with 30 years of expertise in granulation, pharmaceutical manufacturing, and precision machinery setup. Proven track record supervising over 500 personnel with strict adherence to SOPs and ALCOA principles.
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
          {/* Clean Horizontal KPI Row */}
          <div className="pt-2">
            <div className="flex items-center divide-x divide-[#EAE5DC] dark:divide-[#2A3441] border-y border-[#EAE5DC] dark:border-[#2A3441] py-4 sm:py-5">
              <div className="flex-1 pr-3 sm:pr-6 text-left">
                <span className="block font-headline-md text-2xl sm:text-3xl lg:text-4xl text-industrial-navy dark:text-[#F3F4F6] font-bold tracking-tight">
                  30+
                </span>
                <span className="block font-label-sm text-[11px] sm:text-xs text-on-surface-variant dark:text-[#9CA3AF] uppercase tracking-wider mt-1">
                  Years Industry Exp
                </span>
              </div>
              <div className="flex-1 px-3 sm:px-6 text-left">
                <span className="block font-headline-md text-2xl sm:text-3xl lg:text-4xl text-industrial-navy dark:text-[#F3F4F6] font-bold tracking-tight">
                  25+
                </span>
                <span className="block font-label-sm text-[11px] sm:text-xs text-on-surface-variant dark:text-[#9CA3AF] uppercase tracking-wider mt-1">
                  Years Machine Ops
                </span>
              </div>
              <div className="flex-1 pl-3 sm:pl-6 text-left">
                <span className="block font-headline-md text-2xl sm:text-3xl lg:text-4xl text-industrial-navy dark:text-[#F3F4F6] font-bold tracking-tight">
                  500+
                </span>
                <span className="block font-label-sm text-[11px] sm:text-xs text-on-surface-variant dark:text-[#9CA3AF] uppercase tracking-wider mt-1">
                  Personnel Supervised
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Portrait Presentation */}
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

      {/* Core Competencies & Qualities */}
      <div className="space-y-10">
        <div className="border-b border-[#EAE5DC] dark:border-[#2A3441] pb-4">
          <h3 className="font-headline-md text-headline-md text-industrial-navy dark:text-[#F3F4F6] font-bold">
            Core Competencies &amp; Qualities
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Technical Expertise (~65% width) */}
          <div className="lg:col-span-8 border border-[#EAE5DC] dark:border-[#2A3441] bg-clinical-white dark:bg-[#121820] p-6 sm:p-8 space-y-6 rounded shadow-sm">
            <div className="flex items-center gap-3 text-industrial-navy dark:text-[#F3F4F6] pb-4 border-b border-[#EAE5DC] dark:border-[#2A3441]">
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

            {/* Clean 2 x 2 Editorial Grid - No nested boxes, badges, or progress bars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7 pt-2">
              {/* Skill 1 */}
              <div className="space-y-2 pb-6 border-b border-[#EAE5DC]/80 dark:border-[#2A3441]/80 sm:border-b">
                <h5 className="font-label-md text-base sm:text-[17px] font-semibold text-industrial-navy dark:text-[#F3F4F6]">
                  Granulation Processes
                </h5>
                <p className="font-body-md text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                  Expertise in wet &amp; dry granulation techniques.
                </p>
              </div>

              {/* Skill 2 */}
              <div className="space-y-2 pb-6 border-b border-[#EAE5DC]/80 dark:border-[#2A3441]/80 sm:border-b">
                <h5 className="font-label-md text-base sm:text-[17px] font-semibold text-industrial-navy dark:text-[#F3F4F6]">
                  Machinery Setup
                </h5>
                <p className="font-body-md text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                  Precise calibration &amp; preparation for production runs.
                </p>
              </div>

              {/* Skill 3 */}
              <div className="space-y-2 pt-1">
                <h5 className="font-label-md text-base sm:text-[17px] font-semibold text-industrial-navy dark:text-[#F3F4F6]">
                  Manufacturing Operations
                </h5>
                <p className="font-body-md text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                  Oversight of complex pharmaceutical production lines.
                </p>
              </div>

              {/* Skill 4 */}
              <div className="space-y-2 pt-1">
                <h5 className="font-label-md text-base sm:text-[17px] font-semibold text-industrial-navy dark:text-[#F3F4F6]">
                  Troubleshooting
                </h5>
                <p className="font-body-md text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                  Rapid identification &amp; resolution of mechanical faults.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Qualities (~35% width) */}
          <div className="lg:col-span-4 border border-[#EAE5DC] dark:border-[#2A3441] bg-clinical-white dark:bg-[#121820] p-6 sm:p-8 space-y-6 rounded shadow-sm">
            <div className="flex items-center gap-3 text-industrial-navy dark:text-[#F3F4F6] pb-4 border-b border-[#EAE5DC] dark:border-[#2A3441]">
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

            {/* Clean Vertical List with Subtle Separators - No large decorative numbers */}
            <ul className="divide-y divide-[#EAE5DC] dark:divide-[#2A3441] pt-1">
              <li className="py-3.5 flex items-center justify-between group">
                <span className="font-body-md text-[15px] text-on-surface dark:text-[#F3F4F6] font-medium tracking-wide">
                  Hardworking
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy/30 dark:bg-[#93C5FD]/40 group-hover:scale-125 transition-transform" />
              </li>
              <li className="py-3.5 flex items-center justify-between group">
                <span className="font-body-md text-[15px] text-on-surface dark:text-[#F3F4F6] font-medium tracking-wide">
                  Punctual
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy/30 dark:bg-[#93C5FD]/40 group-hover:scale-125 transition-transform" />
              </li>
              <li className="py-3.5 flex items-center justify-between group">
                <span className="font-body-md text-[15px] text-on-surface dark:text-[#F3F4F6] font-medium tracking-wide">
                  Strong Observation
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy/30 dark:bg-[#93C5FD]/40 group-hover:scale-125 transition-transform" />
              </li>
              <li className="py-3.5 flex items-center justify-between group">
                <span className="font-body-md text-[15px] text-on-surface dark:text-[#F3F4F6] font-medium tracking-wide">
                  SOP &amp; ALCOA Focused
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy/30 dark:bg-[#93C5FD]/40 group-hover:scale-125 transition-transform" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
