import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 md:py-16 bg-[#121820] text-clinical-white border-t border-[#2A3441] mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
        {/* Left Side: Exact Navbar Branding Identity & Dynamic Copyright */}
        <div className="space-y-3">
          <a
            href="#home"
            className="group inline-flex flex-col justify-center text-left select-none decoration-transparent focus:outline-none"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-signature text-3xl sm:text-4xl text-[#F3F4F6] font-normal leading-none tracking-wide group-hover:text-[#F2DF74] transition-colors duration-300">
                Mobin
              </span>
              <span className="font-editorial-serif text-2xl sm:text-3xl text-[#E5E7EB] font-semibold tracking-tight uppercase leading-none">
                Shaikh
              </span>
            </div>
          </a>
          <p className="font-body-sm text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
            &copy; <span id="currentYear">{currentYear}</span> Mobin Jiaoddin Shaikh. Industrial Excellence.
          </p>
        </div>

        {/* Right Side: Clean Nav Links & Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 w-full md:w-auto justify-between md:justify-end">
          <ul className="flex items-center gap-6 font-modern-sans text-xs uppercase tracking-[0.2em] font-medium text-[#9CA3AF]">
            <li>
              <a
                className="hover:text-[#F3F4F6] hover:underline decoration-safety-yellow underline-offset-4 transition-colors duration-200"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#F3F4F6] hover:underline decoration-safety-yellow underline-offset-4 transition-colors duration-200"
                href="mailto:contact@mobinshaikh.com"
              >
                Email
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="/Mobin_Shaikh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mobin_Shaikh_Resume.pdf"
              className="bg-[#1E293B] hover:bg-[#334155] border border-[#475569] text-[#F3F4F6] font-label-sm text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-xs transition-all duration-200 uppercase tracking-wider group cursor-pointer"
            >
              <span>Download CV</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-y-0.5 transition-transform">
                download
              </span>
            </a>
            <a
              href="#home"
              className="bg-[#1E293B] hover:bg-[#334155] border border-[#475569] text-[#F3F4F6] font-label-sm text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-xs transition-all duration-200 uppercase tracking-wider group"
            >
              <span>Back to Top</span>
              <span className="material-symbols-outlined text-sm group-hover:-translate-y-0.5 transition-transform">
                arrow_upward
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
