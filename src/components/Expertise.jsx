import React from 'react';

export default function Expertise() {
  return (
    <section
      className="scroll-mt-24 bg-pattern -mx-margin-mobile md:-mx-margin-desktop px-margin-mobile md:px-margin-desktop py-14 md:py-20 rounded-xl border border-machine-gray/80 dark:border-[#2A3441] relative"
      id="expertise"
    >
      {/* 1. Editorial Section Intro with Major 30+ Years Proof Point */}
      <div className="mb-14 border-b border-machine-gray/80 dark:border-[#2A3441] pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-industrial-navy dark:bg-[#93C5FD]"></span>
              <span className="font-label-sm text-xs font-bold uppercase tracking-[0.2em] text-industrial-navy dark:text-[#93C5FD]">
                Technical Authority
              </span>
            </div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-industrial-navy dark:text-[#F3F4F6] tracking-tight">
              Technical Expertise
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-[#CBD5E1] max-w-2xl leading-relaxed">
              Comprehensive knowledge and hands-on proficiency across the pharmaceutical manufacturing lifecycle. Engineered for precision, compliance, and operational excellence.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="border-l-2 lg:border-l-0 lg:border-r-2 border-industrial-navy dark:border-[#93C5FD] pl-4 lg:pl-0 lg:pr-6 text-left lg:text-right py-1">
              <span className="font-headline-lg text-4xl sm:text-5xl font-black text-industrial-navy dark:text-[#F3F4F6] tracking-tight leading-none block font-mono">
                30+
              </span>
              <span className="font-label-sm text-xs uppercase tracking-[0.16em] text-industrial-navy dark:text-[#93C5FD] font-bold block mt-1">
                Years Field Experience
              </span>
              <span className="font-body-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] block mt-0.5">
                Hands-on pharmaceutical manufacturing
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Core Manufacturing Expertise: Sequential Process Strip */}
      <div className="mb-16 space-y-6">
        <div className="flex items-center justify-between border-b border-machine-gray dark:border-[#2A3441] pb-3">
          <div className="flex items-center gap-2 text-industrial-navy dark:text-[#F3F4F6]">
            <span className="material-symbols-outlined text-xl text-industrial-navy dark:text-[#93C5FD]">
              precision_manufacturing
            </span>
            <h3 className="font-headline-md text-base font-bold uppercase tracking-wider text-industrial-navy dark:text-[#F3F4F6]">
              Core Manufacturing Process Workflow
            </h3>
          </div>
          <span className="font-label-sm text-[11px] font-semibold text-outline dark:text-[#9CA3AF] uppercase tracking-widest hidden sm:inline-block">
            End-to-End Execution
          </span>
        </div>

        {/* Connected Sequential Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {/* Step 01 */}
          <div className="group relative p-4 rounded-lg bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] hover:border-industrial-navy dark:hover:border-[#93C5FD] transition-all duration-300 flex flex-col justify-between space-y-3 hover:shadow-xs">
            <div className="flex items-center justify-between">
              <span className="font-headline-md text-2xl font-black text-industrial-navy/30 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] transition-colors font-mono">
                01
              </span>
              <span className="material-symbols-outlined text-base text-outline/50 dark:text-[#94A3B8]/50 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] group-hover:translate-x-0.5 transition-all hidden md:inline-block">
                arrow_forward
              </span>
            </div>
            <div>
              <h4 className="font-body-md text-sm font-bold text-industrial-navy dark:text-[#F3F4F6] leading-snug">
                Granulation
              </h4>
              <p className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-1 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] transition-colors">
                Wet &amp; dry granulation
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="group relative p-4 rounded-lg bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] hover:border-industrial-navy dark:hover:border-[#93C5FD] transition-all duration-300 flex flex-col justify-between space-y-3 hover:shadow-xs">
            <div className="flex items-center justify-between">
              <span className="font-headline-md text-2xl font-black text-industrial-navy/30 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] transition-colors font-mono">
                02
              </span>
              <span className="material-symbols-outlined text-base text-outline/50 dark:text-[#94A3B8]/50 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] group-hover:translate-x-0.5 transition-all hidden md:inline-block">
                arrow_forward
              </span>
            </div>
            <div>
              <h4 className="font-body-md text-sm font-bold text-industrial-navy dark:text-[#F3F4F6] leading-snug">
                Precision Blending
              </h4>
              <p className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-1 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] transition-colors">
                Homogeneous active blend
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="group relative p-4 rounded-lg bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] hover:border-industrial-navy dark:hover:border-[#93C5FD] transition-all duration-300 flex flex-col justify-between space-y-3 hover:shadow-xs">
            <div className="flex items-center justify-between">
              <span className="font-headline-md text-2xl font-black text-industrial-navy/30 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] transition-colors font-mono">
                03
              </span>
              <span className="material-symbols-outlined text-base text-outline/50 dark:text-[#94A3B8]/50 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] group-hover:translate-x-0.5 transition-all hidden md:inline-block">
                arrow_forward
              </span>
            </div>
            <div>
              <h4 className="font-body-md text-sm font-bold text-industrial-navy dark:text-[#F3F4F6] leading-snug">
                Tablet Compression
              </h4>
              <p className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-1 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] transition-colors">
                High-speed rotary tooling
              </p>
            </div>
          </div>

          {/* Step 04 */}
          <div className="group relative p-4 rounded-lg bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] hover:border-industrial-navy dark:hover:border-[#93C5FD] transition-all duration-300 flex flex-col justify-between space-y-3 hover:shadow-xs">
            <div className="flex items-center justify-between">
              <span className="font-headline-md text-2xl font-black text-industrial-navy/30 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] transition-colors font-mono">
                04
              </span>
              <span className="material-symbols-outlined text-base text-outline/50 dark:text-[#94A3B8]/50 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] group-hover:translate-x-0.5 transition-all hidden md:inline-block">
                arrow_forward
              </span>
            </div>
            <div>
              <h4 className="font-body-md text-sm font-bold text-industrial-navy dark:text-[#F3F4F6] leading-snug">
                Capsule Filling
              </h4>
              <p className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-1 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] transition-colors">
                Volumetric dosing &amp; sealing
              </p>
            </div>
          </div>

          {/* Step 05 */}
          <div className="group relative p-4 rounded-lg bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] hover:border-industrial-navy dark:hover:border-[#93C5FD] transition-all duration-300 flex flex-col justify-between space-y-3 hover:shadow-xs">
            <div className="flex items-center justify-between">
              <span className="font-headline-md text-2xl font-black text-industrial-navy/30 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] transition-colors font-mono">
                05
              </span>
              <span
                className="material-symbols-outlined text-base text-industrial-navy dark:text-[#93C5FD] hidden md:inline-block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
            <div>
              <h4 className="font-body-md text-sm font-bold text-industrial-navy dark:text-[#F3F4F6] leading-snug">
                Automated Cartoning
              </h4>
              <p className="font-label-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-1 group-hover:text-industrial-navy dark:group-hover:text-[#93C5FD] transition-colors">
                Secondary packaging line
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Machinery Expertise & Systems: Distinct Capability Panels with Progressive Disclosure */}
      <div className="mb-16 space-y-6">
        <div className="flex items-center justify-between border-b border-machine-gray dark:border-[#2A3441] pb-3">
          <div className="flex items-center gap-2 text-industrial-navy dark:text-[#F3F4F6]">
            <span className="material-symbols-outlined text-xl text-industrial-navy dark:text-[#93C5FD]">
              construction
            </span>
            <h3 className="font-headline-md text-base font-bold uppercase tracking-wider text-industrial-navy dark:text-[#F3F4F6]">
              Specialized Machinery &amp; Tooling Systems
            </h3>
          </div>
          <span className="font-label-sm text-[11px] font-semibold text-outline dark:text-[#9CA3AF] uppercase tracking-widest hidden sm:inline-block">
            Setup &amp; Calibration
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Capability Panel 01 */}
          <div className="p-6 rounded-xl bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] hover:border-industrial-navy/50 dark:hover:border-[#93C5FD]/50 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:shadow-sm">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-machine-gray/70 dark:border-[#2A3441] pb-3">
                <span className="font-headline-md text-3xl font-black text-industrial-navy/25 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy/40 dark:group-hover:text-[#93C5FD] font-mono transition-colors">
                  01
                </span>
                <span className="font-label-sm text-[10px] uppercase font-bold tracking-widest text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2 py-0.5 rounded border border-machine-gray dark:border-[#2A3441]">
                  Process Core
                </span>
              </div>
              <div>
                <h4 className="font-headline-md text-lg font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  Granulation &amp; Drying
                </h4>
                <p className="font-body-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-1">
                  Wet &amp; dry granulation setups, binder addition, and precise fluidization.
                </p>
              </div>
            </div>

            {/* Systems Badge Strip */}
            <div className="pt-4 border-t border-machine-gray/60 dark:border-[#2A3441] space-y-2">
              <span className="font-label-sm text-[10px] uppercase font-bold tracking-wider text-outline dark:text-[#94A3B8] block">
                Mastered Systems
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="font-body-md text-xs font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2.5 py-1 rounded border border-machine-gray dark:border-[#2A3441] group-hover:border-industrial-navy/30 dark:group-hover:border-[#93C5FD]/30 transition-colors">
                  Sionazer Mixer Granulator
                </span>
                <span className="font-body-md text-xs font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2.5 py-1 rounded border border-machine-gray dark:border-[#2A3441] group-hover:border-industrial-navy/30 dark:group-hover:border-[#93C5FD]/30 transition-colors">
                  Rapid Mixer Granulator (RMG)
                </span>
                <span className="font-body-md text-xs font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2.5 py-1 rounded border border-machine-gray dark:border-[#2A3441] group-hover:border-industrial-navy/30 dark:group-hover:border-[#93C5FD]/30 transition-colors">
                  Fluid Bed Dryer (FBD)
                </span>
              </div>
            </div>
          </div>

          {/* Capability Panel 02 */}
          <div className="p-6 rounded-xl bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] hover:border-industrial-navy/50 dark:hover:border-[#93C5FD]/50 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:shadow-sm">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-machine-gray/70 dark:border-[#2A3441] pb-3">
                <span className="font-headline-md text-3xl font-black text-industrial-navy/25 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy/40 dark:group-hover:text-[#93C5FD] font-mono transition-colors">
                  02
                </span>
                <span className="font-label-sm text-[10px] uppercase font-bold tracking-widest text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2 py-0.5 rounded border border-machine-gray dark:border-[#2A3441]">
                  Precision Tooling
                </span>
              </div>
              <div>
                <h4 className="font-headline-md text-lg font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  Tablet Compression
                </h4>
                <p className="font-body-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-1">
                  Multi-station turret calibration, weight variation control, and hardness tuning.
                </p>
              </div>
            </div>

            {/* Systems Badge Strip */}
            <div className="pt-4 border-t border-machine-gray/60 dark:border-[#2A3441] space-y-2">
              <span className="font-label-sm text-[10px] uppercase font-bold tracking-wider text-outline dark:text-[#94A3B8] block">
                Mastered Systems
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="font-body-md text-xs font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2.5 py-1 rounded border border-machine-gray dark:border-[#2A3441] group-hover:border-industrial-navy/30 dark:group-hover:border-[#93C5FD]/30 transition-colors">
                  CTX32 Compression Press
                </span>
                <span className="font-body-md text-xs font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2.5 py-1 rounded border border-machine-gray dark:border-[#2A3441] group-hover:border-industrial-navy/30 dark:group-hover:border-[#93C5FD]/30 transition-colors">
                  Rotary Multi-Station Presses
                </span>
              </div>
            </div>
          </div>

          {/* Capability Panel 03 */}
          <div className="p-6 rounded-xl bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] hover:border-industrial-navy/50 dark:hover:border-[#93C5FD]/50 transition-all duration-300 flex flex-col justify-between space-y-6 group hover:shadow-sm">
            <div className="space-y-4">
              <div className="flex items-baseline justify-between border-b border-machine-gray/70 dark:border-[#2A3441] pb-3">
                <span className="font-headline-md text-3xl font-black text-industrial-navy/25 dark:text-[#94A3B8]/30 group-hover:text-industrial-navy/40 dark:group-hover:text-[#93C5FD] font-mono transition-colors">
                  03
                </span>
                <span className="font-label-sm text-[10px] uppercase font-bold tracking-widest text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2 py-0.5 rounded border border-machine-gray dark:border-[#2A3441]">
                  High-Speed Dosing
                </span>
              </div>
              <div>
                <h4 className="font-headline-md text-lg font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  Capsule Filling
                </h4>
                <p className="font-body-sm text-xs text-on-surface-variant dark:text-[#9CA3AF] mt-1">
                  High-speed automatic tamping pin alignment and powder filling accuracy.
                </p>
              </div>
            </div>

            {/* Systems Badge Strip */}
            <div className="pt-4 border-t border-machine-gray/60 dark:border-[#2A3441] space-y-2">
              <span className="font-label-sm text-[10px] uppercase font-bold tracking-wider text-outline dark:text-[#94A3B8] block">
                Mastered Systems
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="font-body-md text-xs font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2.5 py-1 rounded border border-machine-gray dark:border-[#2A3441] group-hover:border-industrial-navy/30 dark:group-hover:border-[#93C5FD]/30 transition-colors">
                  SA9 Automatic Encapsulator
                </span>
                <span className="font-body-md text-xs font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2.5 py-1 rounded border border-machine-gray dark:border-[#2A3441] group-hover:border-industrial-navy/30 dark:group-hover:border-[#93C5FD]/30 transition-colors">
                  AF90 High Speed Encapsulation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Quality & Compliance Architecture: Dual High-Authority Systems */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left System: In-Process Quality Checks (IPQC Strip & Defect Prevention) */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-machine-gray dark:border-[#2A3441] pb-3">
              <div className="flex items-center gap-2 text-industrial-navy dark:text-[#F3F4F6]">
                <span className="material-symbols-outlined text-xl text-industrial-navy dark:text-[#93C5FD]">
                  fact_check
                </span>
                <h4 className="font-headline-md text-base font-bold uppercase tracking-wider text-industrial-navy dark:text-[#F3F4F6]">
                  In-Process Quality Control (IPQC)
                </h4>
              </div>
              <span className="font-label-sm text-[10px] font-bold uppercase tracking-wider text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2 py-0.5 rounded border border-machine-gray dark:border-[#2A3441]">
                Continuous Checks
              </span>
            </div>
            <p className="font-body-sm text-xs text-on-surface-variant dark:text-[#CBD5E1] leading-relaxed">
              Rigorous continuous monitoring parameters to ensure dimensional precision, hardness tolerance, and batch-to-batch integrity during active runs.
            </p>

            {/* Connected Quality Check Parameters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="p-3 bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg text-center">
                <span className="font-label-sm text-[10px] uppercase font-bold text-outline dark:text-[#94A3B8] block">
                  Test 01
                </span>
                <span className="font-body-md text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] block mt-0.5">
                  Thickness
                </span>
              </div>
              <div className="p-3 bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg text-center">
                <span className="font-label-sm text-[10px] uppercase font-bold text-outline dark:text-[#94A3B8] block">
                  Test 02
                </span>
                <span className="font-body-md text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] block mt-0.5">
                  Hardness
                </span>
              </div>
              <div className="p-3 bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg text-center">
                <span className="font-label-sm text-[10px] uppercase font-bold text-outline dark:text-[#94A3B8] block">
                  Test 03
                </span>
                <span className="font-body-md text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] block mt-0.5">
                  Friability
                </span>
              </div>
              <div className="p-3 bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] rounded-lg text-center">
                <span className="font-label-sm text-[10px] uppercase font-bold text-outline dark:text-[#94A3B8] block">
                  Test 04
                </span>
                <span className="font-body-md text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] block mt-0.5">
                  Disintegration
                </span>
              </div>
            </div>
          </div>

          {/* Technical Callout: Defect Elimination */}
          <div className="p-3.5 bg-surface-container-low dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] rounded-lg flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-base text-industrial-navy dark:text-[#93C5FD]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield_with_heart
              </span>
              <span className="font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] uppercase tracking-wide">
                Defect Prevention Mastery:
              </span>
            </div>
            <span className="font-body-md text-xs font-semibold text-industrial-navy dark:text-[#F3F4F6] bg-clinical-white dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] px-3 py-1 rounded-full shadow-2xs">
              Sticking &amp; Picking Elimination
            </span>
          </div>
        </div>

        {/* Right System: Compliance & GMP Authority */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-clinical-white dark:bg-[#121820] border border-machine-gray dark:border-[#2A3441] flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-machine-gray dark:border-[#2A3441] pb-3">
              <div className="flex items-center gap-2 text-industrial-navy dark:text-[#F3F4F6]">
                <span className="material-symbols-outlined text-xl text-industrial-navy dark:text-[#93C5FD]">
                  verified_user
                </span>
                <h4 className="font-headline-md text-base font-bold uppercase tracking-wider text-industrial-navy dark:text-[#F3F4F6]">
                  Compliance &amp; Documentation
                </h4>
              </div>
              <span className="font-label-sm text-[10px] font-bold uppercase tracking-wider text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] px-2 py-0.5 rounded border border-machine-gray dark:border-[#2A3441]">
                Regulatory Rigor
              </span>
            </div>

            {/* Compliance Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] flex items-start gap-2.5">
                <span className="material-symbols-outlined text-industrial-navy dark:text-[#93C5FD] text-lg shrink-0 mt-0.5">
                  checklist
                </span>
                <div>
                  <span className="font-body-md text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] block">
                    ALCOA+ Principles
                  </span>
                  <span className="font-label-sm text-[11px] text-on-surface-variant dark:text-[#9CA3AF] mt-0.5 block">
                    Attributable, legible, contemporaneous, original, accurate
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-lowest dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] flex items-start gap-2.5">
                <span className="material-symbols-outlined text-industrial-navy dark:text-[#93C5FD] text-lg shrink-0 mt-0.5">
                  gavel
                </span>
                <div>
                  <span className="font-body-md text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] block">
                    SOP Plant Protocol
                  </span>
                  <span className="font-label-sm text-[11px] text-on-surface-variant dark:text-[#9CA3AF] mt-0.5 block">
                    Zero-deviation line execution across every shift
                  </span>
                </div>
              </div>
            </div>

            {/* Batch Manufacturing Records Proof */}
            <div className="p-3 bg-surface-container-low dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-industrial-navy dark:text-[#93C5FD]">
                  history_edu
                </span>
                <span className="font-body-md text-xs font-bold text-industrial-navy dark:text-[#F3F4F6]">
                  cGMP &amp; Batch Manufacturing Records (BMR)
                </span>
              </div>
              <span className="font-headline-md text-xs font-extrabold text-industrial-navy dark:text-[#F3F4F6] bg-clinical-white dark:bg-[#0B1118] border border-machine-gray dark:border-[#2A3441] px-2.5 py-0.5 rounded-full font-mono">
                26+ Yrs
              </span>
            </div>
          </div>

          {/* Cleaning Protocols Line */}
          <div className="pt-3 flex flex-wrap items-center justify-between border-t border-machine-gray/70 dark:border-[#2A3441] gap-2">
            <span className="font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] uppercase tracking-wide">
              Validated Cleaning Protocols:
            </span>
            <div className="flex gap-1.5">
              <span className="font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] px-2.5 py-0.5 rounded-md">
                Type A
              </span>
              <span className="font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] px-2.5 py-0.5 rounded-md">
                Type B
              </span>
              <span className="font-label-sm text-xs font-bold text-industrial-navy dark:text-[#F3F4F6] bg-surface-container-low dark:bg-[#1E293B] border border-machine-gray dark:border-[#2A3441] px-2.5 py-0.5 rounded-md">
                Type C
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
