import React from 'react';

export default function Expertise() {
  const processStages = [
    {
      step: '01',
      title: 'Granulation',
      desc: 'Wet & dry granulation techniques and binder addition.',
    },
    {
      step: '02',
      title: 'Precision Blending',
      desc: 'Homogeneous active blend and content uniformity.',
    },
    {
      step: '03',
      title: 'Tablet Compression',
      desc: 'High-speed multi-station rotary tooling and turret setup.',
    },
    {
      step: '04',
      title: 'Capsule Filling',
      desc: 'Volumetric dosing, tamping pin alignment, and sealing.',
    },
    {
      step: '05',
      title: 'Automated Cartoning',
      desc: 'Secondary packaging line operations and final verification.',
    },
  ];

  return (
    <section className="scroll-mt-24 relative" id="expertise">
      {/* Engineering Dotted Grid Texture */}
      <div
        className="absolute inset-0 bg-pattern opacity-25 dark:opacity-30 pointer-events-none -mx-margin-mobile md:-mx-margin-desktop rounded-3xl"
        aria-hidden="true"
      ></div>

      {/* 1. Header with Integrated 30+ Years Proof Point */}
      <div className="relative mb-20 lg:mb-24 pb-10 border-b border-[#EAE5DC] dark:border-[#2A3441]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-industrial-navy dark:bg-[#93C5FD]"></span>
              <span className="font-label-sm text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-industrial-navy dark:text-[#93C5FD]">
                Technical Authority
              </span>
            </div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl sm:text-4xl md:text-5xl font-bold text-industrial-navy dark:text-[#F3F4F6] tracking-tight">
              Technical Expertise
            </h2>
            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant dark:text-[#CBD5E1] leading-relaxed">
              Comprehensive knowledge and hands-on proficiency across the pharmaceutical manufacturing lifecycle. Engineered for mechanical precision, rigorous compliance, and sustained operational excellence.
            </p>
          </div>

          {/* Integrated 30+ Years Proof Point */}
          <div className="flex items-center gap-5 lg:pl-8 lg:border-l-2 border-industrial-navy/30 dark:border-[#93C5FD]/40 shrink-0">
            <span className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-black text-industrial-navy dark:text-[#F3F4F6] tracking-tight leading-none font-mono">
              30+
            </span>
            <div className="space-y-0.5">
              <span className="font-label-sm text-xs sm:text-sm uppercase tracking-[0.16em] text-industrial-navy dark:text-[#93C5FD] font-bold block">
                Years Field Exp
              </span>
              <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant dark:text-[#9CA3AF] block">
                Pharmaceutical operations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MODULE 1: CORE MANUFACTURING PROCESS (Connected Horizontal System) */}
      <div className="relative mb-24 lg:mb-28 space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DC] dark:border-[#2A3441]">
          <div className="flex items-center gap-3 text-industrial-navy dark:text-[#F3F4F6]">
            <span
              className="material-symbols-outlined text-2xl text-industrial-navy dark:text-[#93C5FD]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              precision_manufacturing
            </span>
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold tracking-tight text-industrial-navy dark:text-[#F3F4F6]">
              Core Manufacturing Process
            </h3>
          </div>
          <span className="font-label-sm text-xs font-semibold text-outline dark:text-[#9CA3AF] uppercase tracking-widest hidden sm:inline-block">
            End-to-End Pipeline
          </span>
        </div>

        {/* Connected Workflow */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            className="hidden lg:block absolute top-[2.25rem] left-10 right-10 h-[2px] bg-[#EAE5DC] dark:bg-[#2A3441] z-0"
            aria-hidden="true"
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {processStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="group relative flex flex-col justify-between p-6 rounded-xl border border-[#EAE5DC] dark:border-[#2A3441] bg-clinical-white dark:bg-[#121820] shadow-sm hover:shadow-md hover:border-industrial-navy/60 dark:hover:border-[#93C5FD]/60 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Node & Step Number Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-clinical-white dark:bg-[#121820] border-2 border-industrial-navy dark:border-[#93C5FD] group-hover:scale-110 group-hover:bg-industrial-navy dark:group-hover:bg-[#93C5FD] transition-all duration-300 inline-block shadow-xs"></span>
                    <span className="font-headline-md text-2xl sm:text-3xl font-bold font-mono text-industrial-navy/40 dark:text-[#94A3B8]/40 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] transition-colors duration-300">
                      {stage.step}
                    </span>
                  </div>
                  {idx < processStages.length - 1 ? (
                    <span className="material-symbols-outlined text-base text-outline/40 dark:text-[#94A3B8]/40 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] group-hover:translate-x-1 transition-all duration-300 hidden lg:inline-block">
                      arrow_forward
                    </span>
                  ) : (
                    <span
                      className="material-symbols-outlined text-base text-industrial-navy dark:text-[#93C5FD] hidden lg:inline-block"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  )}
                </div>

                {/* Stage Title & Description */}
                <div className="space-y-2">
                  <h4 className="font-headline-md text-base sm:text-lg font-bold text-industrial-navy dark:text-[#F3F4F6] leading-snug group-hover:text-precision-blue dark:group-hover:text-[#93C5FD] transition-colors duration-200">
                    {stage.title}
                  </h4>
                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant dark:text-[#9CA3AF] group-hover:text-on-surface dark:group-hover:text-[#CBD5E1] transition-colors duration-200 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODULE 2: SPECIALIZED MACHINERY & TOOLING (3 Large Premium Cards) */}
      <div className="relative mb-24 lg:mb-28 space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DC] dark:border-[#2A3441]">
          <div className="flex items-center gap-3 text-industrial-navy dark:text-[#F3F4F6]">
            <span
              className="material-symbols-outlined text-2xl text-industrial-navy dark:text-[#93C5FD]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              construction
            </span>
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold tracking-tight text-industrial-navy dark:text-[#F3F4F6]">
              Specialized Machinery &amp; Tooling Systems
            </h3>
          </div>
          <span className="font-label-sm text-xs font-semibold text-outline dark:text-[#9CA3AF] uppercase tracking-widest hidden sm:inline-block">
            Setup &amp; Calibration
          </span>
        </div>

        {/* Exactly Three Equal Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Granulation & Drying */}
          <div className="group p-7 sm:p-8 rounded-xl bg-clinical-white dark:bg-[#121820] border border-[#EAE5DC] dark:border-[#2A3441] hover:border-industrial-navy/50 dark:hover:border-[#93C5FD]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-low dark:bg-[#1E293B] flex items-center justify-center text-industrial-navy dark:text-[#93C5FD]">
                <span className="material-symbols-outlined text-2xl">
                  grain
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline-md text-xl sm:text-2xl font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  Granulation &amp; Drying
                </h4>
                <p className="font-body-md text-sm sm:text-[15px] text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                  Wet &amp; dry granulation setups, binder addition, and precise fluidization parameters.
                </p>
              </div>
            </div>

            {/* Clean Machine List */}
            <div className="pt-5 border-t border-[#EAE5DC] dark:border-[#2A3441] space-y-3">
              <span className="font-label-sm text-xs uppercase tracking-wider text-outline dark:text-[#94A3B8] font-bold block">
                Mastered Systems
              </span>
              <ul className="space-y-2 text-sm sm:text-[15px] font-medium text-industrial-navy dark:text-[#E5E7EB]">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy/40 dark:bg-[#93C5FD]/50"></span>
                  Sionazer Mixer Granulator
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy/40 dark:bg-[#93C5FD]/50"></span>
                  Rapid Mixer Granulator (RMG)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy/40 dark:bg-[#93C5FD]/50"></span>
                  Fluid Bed Dryer (FBD)
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Tablet Compression */}
          <div className="group p-7 sm:p-8 rounded-xl bg-clinical-white dark:bg-[#121820] border border-[#EAE5DC] dark:border-[#2A3441] hover:border-industrial-navy/50 dark:hover:border-[#93C5FD]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-low dark:bg-[#1E293B] flex items-center justify-center text-industrial-navy dark:text-[#93C5FD]">
                <span className="material-symbols-outlined text-2xl">
                  compress
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline-md text-xl sm:text-2xl font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  Tablet Compression
                </h4>
                <p className="font-body-md text-sm sm:text-[15px] text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                  Multi-station turret calibration, weight variation control, and hardness tolerance tuning.
                </p>
              </div>
            </div>

            {/* Clean Machine List */}
            <div className="pt-5 border-t border-[#EAE5DC] dark:border-[#2A3441] space-y-3">
              <span className="font-label-sm text-xs uppercase tracking-wider text-outline dark:text-[#94A3B8] font-bold block">
                Mastered Systems
              </span>
              <ul className="space-y-2 text-sm sm:text-[15px] font-medium text-industrial-navy dark:text-[#E5E7EB]">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy/40 dark:bg-[#93C5FD]/50"></span>
                  CTX32 Compression Press
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy/40 dark:bg-[#93C5FD]/50"></span>
                  Rotary Multi-Station Presses
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Capsule Filling */}
          <div className="group p-7 sm:p-8 rounded-xl bg-clinical-white dark:bg-[#121820] border border-[#EAE5DC] dark:border-[#2A3441] hover:border-industrial-navy/50 dark:hover:border-[#93C5FD]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-surface-container-low dark:bg-[#1E293B] flex items-center justify-center text-industrial-navy dark:text-[#93C5FD]">
                <span className="material-symbols-outlined text-2xl">
                  medication
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline-md text-xl sm:text-2xl font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  Capsule Filling
                </h4>
                <p className="font-body-md text-sm sm:text-[15px] text-on-surface-variant dark:text-[#9CA3AF] leading-relaxed">
                  High-speed automatic tamping pin alignment and powder filling volumetric accuracy.
                </p>
              </div>
            </div>

            {/* Clean Machine List */}
            <div className="pt-5 border-t border-[#EAE5DC] dark:border-[#2A3441] space-y-3">
              <span className="font-label-sm text-xs uppercase tracking-wider text-outline dark:text-[#94A3B8] font-bold block">
                Mastered Systems
              </span>
              <ul className="space-y-2 text-sm sm:text-[15px] font-medium text-industrial-navy dark:text-[#E5E7EB]">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy/40 dark:bg-[#93C5FD]/50"></span>
                  SA9 Automatic Encapsulator
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-industrial-navy/40 dark:bg-[#93C5FD]/50"></span>
                  AF90 High Speed Encapsulation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MODULE 3: QUALITY, COMPLIANCE & DOCUMENTATION (1 Large Unified Anchor Panel) */}
      <div className="relative">
        <div className="rounded-2xl border border-[#EAE5DC] dark:border-[#2A3441] bg-clinical-white dark:bg-[#121820] p-8 sm:p-12 shadow-sm space-y-10">
          <div className="flex items-center justify-between pb-5 border-b border-[#EAE5DC] dark:border-[#2A3441]">
            <div className="flex items-center gap-3 text-industrial-navy dark:text-[#F3F4F6]">
              <span
                className="material-symbols-outlined text-2xl text-industrial-navy dark:text-[#93C5FD]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <h3 className="font-headline-md text-xl sm:text-2xl font-bold tracking-tight text-industrial-navy dark:text-[#F3F4F6]">
                Quality, Compliance &amp; Documentation
              </h3>
            </div>
            <span className="font-label-sm text-xs font-semibold text-outline dark:text-[#9CA3AF] uppercase tracking-widest hidden sm:inline-block">
              Rigorous Standards
            </span>
          </div>

          {/* Two-Column Internal Layout Separated by a Single Divider */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: In-Process Quality Control */}
            <div className="lg:col-span-6 space-y-8 lg:border-r border-[#EAE5DC] dark:border-[#2A3441] lg:pr-12">
              <div className="space-y-2">
                <h4 className="font-headline-md text-lg sm:text-xl font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  In-Process Quality Control (IPQC)
                </h4>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant dark:text-[#CBD5E1] leading-relaxed">
                  Rigorous continuous monitoring parameters to ensure dimensional precision, hardness tolerance, and batch-to-batch integrity during active production runs.
                </p>
              </div>

              {/* 2×2 Test Parameters Grid (No nested cards, clean typography & dividers) */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 py-6 border-y border-[#EAE5DC] dark:border-[#2A3441]">
                <div className="space-y-1">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-outline dark:text-[#94A3B8] font-bold block">
                    Parameter 01
                  </span>
                  <span className="font-headline-md text-base sm:text-lg font-bold text-industrial-navy dark:text-[#F3F4F6] block">
                    Thickness
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-outline dark:text-[#94A3B8] font-bold block">
                    Parameter 02
                  </span>
                  <span className="font-headline-md text-base sm:text-lg font-bold text-industrial-navy dark:text-[#F3F4F6] block">
                    Hardness
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-outline dark:text-[#94A3B8] font-bold block">
                    Parameter 03
                  </span>
                  <span className="font-headline-md text-base sm:text-lg font-bold text-industrial-navy dark:text-[#F3F4F6] block">
                    Friability
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-xs uppercase tracking-wider text-outline dark:text-[#94A3B8] font-bold block">
                    Parameter 04
                  </span>
                  <span className="font-headline-md text-base sm:text-lg font-bold text-industrial-navy dark:text-[#F3F4F6] block">
                    Disintegration
                  </span>
                </div>
              </div>

              {/* Defect Prevention Callout */}
              <div className="flex flex-wrap items-baseline gap-2.5 pt-1">
                <span className="font-label-sm text-xs sm:text-sm font-bold text-industrial-navy dark:text-[#F3F4F6] uppercase tracking-wide">
                  Defect Prevention:
                </span>
                <span className="font-body-md text-sm sm:text-base text-precision-blue dark:text-[#93C5FD] font-semibold">
                  Sticking &amp; Picking Elimination
                </span>
              </div>
            </div>

            {/* Right Column: Compliance & Documentation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <h4 className="font-headline-md text-lg sm:text-xl font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  Compliance &amp; Documentation
                </h4>
              </div>

              <div className="divide-y divide-[#EAE5DC] dark:divide-[#2A3441]">
                {/* ALCOA+ */}
                <div className="py-4 first:pt-0 space-y-1">
                  <span className="font-headline-md text-base sm:text-[17px] font-bold text-industrial-navy dark:text-[#F3F4F6] block">
                    ALCOA+ Principles
                  </span>
                  <span className="font-body-md text-xs sm:text-sm text-on-surface-variant dark:text-[#9CA3AF] block leading-relaxed">
                    Attributable, Legible, Contemporaneous, Original, Accurate
                  </span>
                </div>

                {/* SOP Compliance */}
                <div className="py-4 space-y-1">
                  <span className="font-headline-md text-base sm:text-[17px] font-bold text-industrial-navy dark:text-[#F3F4F6] block">
                    SOP Compliance
                  </span>
                  <span className="font-body-md text-xs sm:text-sm text-on-surface-variant dark:text-[#9CA3AF] block leading-relaxed">
                    Zero-deviation line execution across every shift
                  </span>
                </div>

                {/* cGMP & BMR */}
                <div className="py-4 space-y-1">
                  <span className="font-headline-md text-base sm:text-[17px] font-bold text-industrial-navy dark:text-[#F3F4F6] block">
                    cGMP &amp; Batch Manufacturing Records (BMR)
                  </span>
                  <span className="font-body-md text-xs sm:text-sm text-on-surface-variant dark:text-[#9CA3AF] block leading-relaxed">
                    Rigorous execution adhering to cGMP with full 26+ years audit-trail integrity
                  </span>
                </div>

                {/* Validated Cleaning Protocols */}
                <div className="pt-4 flex flex-wrap items-baseline gap-2.5">
                  <span className="font-label-sm text-xs sm:text-sm font-bold text-industrial-navy dark:text-[#F3F4F6] uppercase tracking-wide">
                    Validated Cleaning Protocols:
                  </span>
                  <span className="font-body-md text-sm sm:text-base text-on-surface-variant dark:text-[#CBD5E1] font-medium">
                    Type A &bull; Type B &bull; Type C
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
