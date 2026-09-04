import React from 'react';

export default function Experience() {
  return (
    <section className="scroll-mt-24" id="experience">
      <div className="mb-16 border-b border-machine-gray dark:border-[#2A3441] pb-8">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-industrial-navy dark:text-[#F3F4F6] mb-4 font-bold">
          Professional Track Record
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9CA3AF] max-w-2xl">
          A chronological overview of 26+ years of operational excellence in
          pharmaceutical machine operation, supervision, and stringent compliance
          management.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Column: Timeline */}
        <div className="lg:col-span-7 flex flex-col">
          <h3 className="font-headline-md text-headline-md text-industrial-navy dark:text-[#F3F4F6] mb-8 flex items-center gap-2 font-bold">
            <span className="material-symbols-outlined text-industrial-navy dark:text-[#93C5FD]">
              history
            </span>
            Career Progression
          </h3>
          <div className="relative pl-6 space-y-10 flex-1">
            {/* Continuous Vertical Connecting Line */}
            <div className="absolute left-[7px] top-3 bottom-4 w-[2px] bg-industrial-navy/20 dark:bg-white/20"></div>

            {/* Timeline Item 1 */}
            <div className="relative pl-6 group">
              <div className="absolute left-[-23px] top-1.5 w-4 h-4 bg-industrial-navy dark:bg-[#93C5FD] rounded-full border-4 border-background dark:border-[#0B1118] shadow-xs"></div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="font-headline-md text-lg sm:text-xl font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  VS International Pvt. Ltd.
                </h4>
                <span className="font-label-sm text-xs font-semibold bg-industrial-navy dark:bg-[#1E293B] text-clinical-white dark:text-[#F3F4F6] border border-transparent dark:border-[#475569] px-2.5 py-1 rounded shadow-2xs inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-safety-yellow animate-pulse"></span>
                  Present (1 Year)
                </span>
              </div>
              <div className="font-body-md text-primary dark:text-[#93C5FD] font-semibold mb-2">
                Senior Machine Technician
              </div>
              <p className="font-body-md text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                Currently leading machine operations with a focus on
                precision execution and maintaining high standards of
                production output within strict regulatory frameworks.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-6 group">
              <div className="absolute left-[-23px] top-1.5 w-4 h-4 bg-industrial-navy dark:bg-[#93C5FD] rounded-full border-4 border-background dark:border-[#0B1118] shadow-xs"></div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="font-headline-md text-lg sm:text-xl font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  Ipca Laboratories Ltd.
                </h4>
                <span className="font-label-sm text-xs font-semibold bg-surface-container dark:bg-[#1E293B] text-industrial-navy dark:text-[#F3F4F6] border border-industrial-navy/20 dark:border-[#475569] px-2.5 py-1 rounded shadow-2xs">
                  11 Years
                </span>
              </div>
              <div className="font-body-md text-primary dark:text-[#93C5FD] font-semibold mb-2">
                Senior Machine Technician
              </div>
              <p className="font-body-md text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                Served over a decade managing complex machinery,
                troubleshooting operational issues, and ensuring
                seamless production cycles while adhering to rigid
                pharmaceutical standards.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-6 group">
              <div className="absolute left-[-23px] top-1.5 w-4 h-4 bg-industrial-navy dark:bg-[#93C5FD] rounded-full border-4 border-background dark:border-[#0B1118] shadow-xs"></div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="font-headline-md text-lg sm:text-xl font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  Lyka Labs Ltd.
                </h4>
                <span className="font-label-sm text-xs font-semibold bg-surface-container dark:bg-[#1E293B] text-industrial-navy dark:text-[#F3F4F6] border border-industrial-navy/20 dark:border-[#475569] px-2.5 py-1 rounded shadow-2xs">
                  18 Years
                </span>
              </div>
              <div className="font-body-md text-primary dark:text-[#93C5FD] font-semibold mb-2">
                Skilled Operator
              </div>
              <p className="font-body-md text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                Foundational experience operating essential
                pharmaceutical manufacturing equipment. Developed core
                competencies in continuous process monitoring and
                efficiency optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Unified Sidebar System */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Unified Sidebar Container */}
          <div className="border border-machine-gray dark:border-[#2A3441] bg-clinical-white dark:bg-[#121820] rounded-lg shadow-sm overflow-hidden flex flex-col h-full justify-between">
            {/* Leadership Milestone Feature Banner */}
            <div className="bg-industrial-navy dark:bg-[#1E293B] p-6 text-clinical-white border-b border-on-primary-fixed-variant dark:border-[#334155]">
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="material-symbols-outlined text-safety-yellow text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
                <h4 className="font-headline-md text-lg font-bold text-clinical-white">
                  Leadership Milestone
                </h4>
              </div>
              <p className="font-body-md text-sm text-surface-container-high dark:text-[#CBD5E1] leading-relaxed">
                Successfully supervised and guided an extensive team of{' '}
                <strong className="text-safety-yellow font-semibold">
                  500+ officers, operators, and workers
                </strong>{' '}
                across shift operations, fostering a culture of technical rigor
                and safety.
              </p>
            </div>

            {/* Core Responsibilities List Section */}
            <div className="p-6 space-y-5 flex-1 bg-clinical-white dark:bg-[#121820]">
              <div className="flex items-center gap-2 text-industrial-navy dark:text-[#F3F4F6] border-b border-machine-gray dark:border-[#2A3441] pb-3">
                <span
                  className="material-symbols-outlined text-xl text-industrial-navy dark:text-[#93C5FD]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  checklist
                </span>
                <h4 className="font-headline-md text-base font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  Core Responsibilities
                </h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-surface-container-low dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] rounded text-industrial-navy dark:text-[#93C5FD] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-base">
                      precision_manufacturing
                    </span>
                  </div>
                  <div>
                    <div className="font-body-md text-sm font-bold text-industrial-navy dark:text-[#F3F4F6]">
                      Granulation Control
                    </div>
                    <div className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-0.5">
                      Strict adherence to BMR protocols
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-surface-container-low dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] rounded text-industrial-navy dark:text-[#93C5FD] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-base">
                      rule
                    </span>
                  </div>
                  <div>
                    <div className="font-body-md text-sm font-bold text-industrial-navy dark:text-[#F3F4F6]">
                      SOP Compliance
                    </div>
                    <div className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-0.5">
                      100% execution to standard operating procedures
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-surface-container-low dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] rounded text-industrial-navy dark:text-[#93C5FD] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-base">
                      database
                    </span>
                  </div>
                  <div>
                    <div className="font-body-md text-sm font-bold text-industrial-navy dark:text-[#F3F4F6]">
                      Data Integrity
                    </div>
                    <div className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-0.5">
                      Accurate logging and reporting mechanisms
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 bg-surface-container-low dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] rounded text-industrial-navy dark:text-[#93C5FD] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-base">
                      health_and_safety
                    </span>
                  </div>
                  <div>
                    <div className="font-body-md text-sm font-bold text-industrial-navy dark:text-[#F3F4F6]">
                      Safety &amp; Hygiene
                    </div>
                    <div className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-0.5">
                      Maintaining sterile and secure environments
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
