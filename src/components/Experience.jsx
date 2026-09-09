import React, { useEffect, useRef, useState } from 'react';

export default function Experience() {
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!timelineRef.current) {
            ticking = false;
            return;
          }

          const triggerPoint = window.innerHeight * 0.5;
          const items = itemRefs.current.filter(Boolean);

          if (items.length > 0) {
            const firstItemRect = items[0].getBoundingClientRect();
            const lastItemRect = items[items.length - 1].getBoundingClientRect();

            // Calculate progress between first and last timeline nodes
            const startY = firstItemRect.top + 10;
            const endY = lastItemRect.top + 10;
            const totalDistance = endY - startY;

            if (totalDistance > 0) {
              const currentDistance = triggerPoint - startY;
              const rawProgress = (currentDistance / totalDistance) * 100;
              const clampedProgress = Math.min(100, Math.max(0, rawProgress));
              setTimelineProgress(clampedProgress);
            }

            // Determine active item based on proximity to the trigger line
            let currentActive = 0;
            items.forEach((item, index) => {
              const rect = item.getBoundingClientRect();
              if (rect.top <= triggerPoint + 60) {
                currentActive = index;
              }
            });

            setActiveIndex(currentActive);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="scroll-mt-24" id="experience">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10 border-b border-[#EAE5DC] dark:border-[#2A3441] pb-5">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-industrial-navy dark:text-[#F3F4F6] mb-3 font-bold">
          Professional Track Record
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#9CA3AF] max-w-2xl">
          A chronological overview of 26+ years of operational excellence in
          pharmaceutical machine operation, supervision, and stringent compliance
          management.
        </p>
      </div>

      {/* Main Layout: Dominant Timeline (~65%) & Supporting Info (~35%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Career Progression (Dominant) */}
        <div className="lg:col-span-8 flex flex-col">
          <h3 className="font-headline-md text-headline-md text-industrial-navy dark:text-[#F3F4F6] mb-8 flex items-center gap-2 font-bold">
            <span className="material-symbols-outlined text-industrial-navy dark:text-[#93C5FD]">
              history
            </span>
            Career Progression
          </h3>

          <div ref={timelineRef} className="relative pl-6 space-y-12 sm:space-y-14 flex-1">
            {/* Continuous Vertical Base Track (Neutral) */}
            <div className="absolute left-[7px] top-3 bottom-4 w-[2px] bg-industrial-navy/15 dark:bg-white/15 rounded-full"></div>

            {/* Scroll-Driven Filled Progress Track (Blue Accent) */}
            <div
              className="absolute left-[7px] top-3 w-[2px] bg-industrial-navy dark:bg-[#93C5FD] rounded-full transition-all duration-150 ease-out origin-top motion-reduce:transition-none"
              style={{ height: `${timelineProgress}%` }}
              aria-hidden="true"
            ></div>

            {/* Timeline Item 1: VS International */}
            <div
              ref={(el) => (itemRefs.current[0] = el)}
              className={`relative pl-6 transition-all duration-500 ease-out motion-reduce:transition-none ${
                activeIndex === 0
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-80 translate-y-0.5 motion-reduce:translate-y-0'
              }`}
            >
              {/* Milestone Node */}
              <div
                className={`absolute left-[-23px] top-1.5 w-4 h-4 rounded-full border-4 border-[#FAF8F5] dark:border-[#0c141d] transition-all duration-300 motion-reduce:transition-none ${
                  activeIndex === 0
                    ? 'bg-industrial-navy dark:bg-[#93C5FD] scale-125 shadow-[0_0_12px_rgba(1,58,88,0.35)] dark:shadow-[0_0_14px_rgba(147,197,253,0.5)]'
                    : activeIndex > 0
                    ? 'bg-industrial-navy/90 dark:bg-[#93C5FD]/90 scale-100'
                    : 'bg-industrial-navy/40 dark:bg-[#93C5FD]/40 scale-100'
                }`}
                aria-hidden="true"
              ></div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                <h4
                  className={`font-headline-md text-lg sm:text-xl font-bold transition-colors duration-200 ${
                    activeIndex === 0
                      ? 'text-industrial-navy dark:text-[#F3F4F6]'
                      : 'text-industrial-navy/90 dark:text-[#E5E7EB]'
                  }`}
                >
                  VS International Pvt. Ltd.
                </h4>
                {/* Understated Duration Label */}
                <div className="font-label-sm text-xs font-medium inline-flex items-center gap-1.5 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-safety-yellow animate-pulse"></span>
                  <span className="text-industrial-navy dark:text-[#F2DF74] font-semibold">Present</span>
                  <span className="text-on-surface-variant/70 dark:text-[#9CA3AF]/70">(1 Year)</span>
                </div>
              </div>
              <div
                className={`font-body-md text-sm font-semibold mb-2 transition-colors duration-200 ${
                  activeIndex === 0
                    ? 'text-precision-blue dark:text-[#93C5FD]'
                    : 'text-precision-blue/85 dark:text-[#93C5FD]/85'
                }`}
              >
                Senior Machine Technician
              </div>
              <p className="font-body-md text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                Currently leading machine operations with a focus on
                precision execution and maintaining high standards of
                production output within strict regulatory frameworks.
              </p>
            </div>

            {/* Timeline Item 2: Ipca Laboratories */}
            <div
              ref={(el) => (itemRefs.current[1] = el)}
              className={`relative pl-6 transition-all duration-500 ease-out motion-reduce:transition-none ${
                activeIndex === 1
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-80 translate-y-0.5 motion-reduce:translate-y-0'
              }`}
            >
              {/* Milestone Node */}
              <div
                className={`absolute left-[-23px] top-1.5 w-4 h-4 rounded-full border-4 border-[#FAF8F5] dark:border-[#0c141d] transition-all duration-300 motion-reduce:transition-none ${
                  activeIndex === 1
                    ? 'bg-industrial-navy dark:bg-[#93C5FD] scale-125 shadow-[0_0_12px_rgba(1,58,88,0.35)] dark:shadow-[0_0_14px_rgba(147,197,253,0.5)]'
                    : activeIndex > 1
                    ? 'bg-industrial-navy/90 dark:bg-[#93C5FD]/90 scale-100'
                    : 'bg-industrial-navy/40 dark:bg-[#93C5FD]/40 scale-100'
                }`}
                aria-hidden="true"
              ></div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                <h4
                  className={`font-headline-md text-lg sm:text-xl font-bold transition-colors duration-200 ${
                    activeIndex === 1
                      ? 'text-industrial-navy dark:text-[#F3F4F6]'
                      : 'text-industrial-navy/90 dark:text-[#E5E7EB]'
                  }`}
                >
                  Ipca Laboratories Ltd.
                </h4>
                {/* Understated Duration Label */}
                <div className="font-label-sm text-xs font-medium text-on-surface-variant/80 dark:text-[#9CA3AF] tracking-wide">
                  11 Years
                </div>
              </div>
              <div
                className={`font-body-md text-sm font-semibold mb-2 transition-colors duration-200 ${
                  activeIndex === 1
                    ? 'text-precision-blue dark:text-[#93C5FD]'
                    : 'text-precision-blue/85 dark:text-[#93C5FD]/85'
                }`}
              >
                Senior Machine Technician
              </div>
              <p className="font-body-md text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                Served over a decade managing complex machinery,
                troubleshooting operational issues, and ensuring
                seamless production cycles while adhering to rigid
                pharmaceutical standards.
              </p>
            </div>

            {/* Timeline Item 3: Lyka Labs */}
            <div
              ref={(el) => (itemRefs.current[2] = el)}
              className={`relative pl-6 transition-all duration-500 ease-out motion-reduce:transition-none ${
                activeIndex === 2
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-80 translate-y-0.5 motion-reduce:translate-y-0'
              }`}
            >
              {/* Milestone Node */}
              <div
                className={`absolute left-[-23px] top-1.5 w-4 h-4 rounded-full border-4 border-[#FAF8F5] dark:border-[#0c141d] transition-all duration-300 motion-reduce:transition-none ${
                  activeIndex === 2
                    ? 'bg-industrial-navy dark:bg-[#93C5FD] scale-125 shadow-[0_0_12px_rgba(1,58,88,0.35)] dark:shadow-[0_0_14px_rgba(147,197,253,0.5)]'
                    : 'bg-industrial-navy/40 dark:bg-[#93C5FD]/40 scale-100'
                }`}
                aria-hidden="true"
              ></div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                <h4
                  className={`font-headline-md text-lg sm:text-xl font-bold transition-colors duration-200 ${
                    activeIndex === 2
                      ? 'text-industrial-navy dark:text-[#F3F4F6]'
                      : 'text-industrial-navy/90 dark:text-[#E5E7EB]'
                  }`}
                >
                  Lyka Labs Ltd.
                </h4>
                {/* Understated Duration Label */}
                <div className="font-label-sm text-xs font-medium text-on-surface-variant/80 dark:text-[#9CA3AF] tracking-wide">
                  18 Years
                </div>
              </div>
              <div
                className={`font-body-md text-sm font-semibold mb-2 transition-colors duration-200 ${
                  activeIndex === 2
                    ? 'text-precision-blue dark:text-[#93C5FD]'
                    : 'text-precision-blue/85 dark:text-[#93C5FD]/85'
                }`}
              >
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

        {/* Right Column: Supporting Information (Sticky on Desktop) */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28 transition-all">
          {/* Leadership Milestone (Presented directly on background with subtle divider) */}
          <div className="pb-8 border-b border-[#EAE5DC] dark:border-[#2A3441]">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="material-symbols-outlined text-safety-yellow text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
              <h4 className="font-headline-md text-base sm:text-lg font-bold text-industrial-navy dark:text-[#F3F4F6]">
                Leadership Milestone
              </h4>
            </div>
            <p className="font-body-md text-sm text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
              Successfully supervised and guided an extensive team of{' '}
              <strong className="text-industrial-navy dark:text-[#F2DF74] font-semibold">
                500+ officers, operators, and workers
              </strong>{' '}
              across shift operations, fostering a culture of technical rigor
              and safety.
            </p>
          </div>

          {/* Core Responsibilities (Clean vertical editorial list) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-industrial-navy dark:text-[#F3F4F6] pb-3 border-b border-[#EAE5DC] dark:border-[#2A3441]">
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

            <ul className="divide-y divide-[#EAE5DC]/80 dark:divide-[#2A3441]">
              <li className="py-3.5 first:pt-1 last:pb-1">
                <div className="font-body-md text-[15px] font-semibold text-industrial-navy dark:text-[#F3F4F6]">
                  Granulation Control
                </div>
                <div className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-0.5">
                  Strict adherence to BMR protocols
                </div>
              </li>
              <li className="py-3.5 first:pt-1 last:pb-1">
                <div className="font-body-md text-[15px] font-semibold text-industrial-navy dark:text-[#F3F4F6]">
                  SOP Compliance
                </div>
                <div className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-0.5">
                  100% execution to standard operating procedures
                </div>
              </li>
              <li className="py-3.5 first:pt-1 last:pb-1">
                <div className="font-body-md text-[15px] font-semibold text-industrial-navy dark:text-[#F3F4F6]">
                  Data Integrity
                </div>
                <div className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-0.5">
                  Accurate logging and reporting mechanisms
                </div>
              </li>
              <li className="py-3.5 first:pt-1 last:pb-1">
                <div className="font-body-md text-[15px] font-semibold text-industrial-navy dark:text-[#F3F4F6]">
                  Safety &amp; Hygiene
                </div>
                <div className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-0.5">
                  Maintaining sterile and secure environments
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
