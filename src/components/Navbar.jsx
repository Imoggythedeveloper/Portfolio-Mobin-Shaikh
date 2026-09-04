import React from 'react';

export default function Navbar({ isDark, onToggleTheme, activeSection, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <nav className="w-full top-0 sticky bg-[#FAF8F5]/95 dark:bg-[#121820]/95 backdrop-blur-md border-b border-[#EAE5DC] dark:border-[#2A3441] z-50 transition-colors duration-300">
      <div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Left: Elegant Branding Section */}
        <a
          href="#home"
          className="group flex flex-col justify-center text-left select-none decoration-transparent focus:outline-none"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-signature text-3xl sm:text-4xl text-[#1B2B3A] dark:text-[#F3F4F6] font-normal leading-none tracking-wide group-hover:text-[#B38A20] transition-colors duration-300">
              Mobin
            </span>
            <span className="font-editorial-serif text-2xl sm:text-3xl text-[#1B2B3A] dark:text-[#E5E7EB] font-semibold tracking-tight uppercase leading-none">
              Shaikh
            </span>
          </div>
          <span className="font-modern-sans text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#6B7280] dark:text-[#9CA3AF] font-medium mt-1">
            Machine Technician &bull; 30 Yrs Exp
          </span>
        </a>

        {/* Center: Clean, Uppercase Sans-Serif Menu Links (Widely Spaced) */}
        <ul className="hidden lg:flex items-center space-x-10 xl:space-x-12">
          <li>
            <a
              className={`nav-link-indicator font-modern-sans text-xs uppercase tracking-[0.22em] py-1 transition-colors duration-200 ${
                activeSection === 'home'
                  ? 'active font-semibold text-[#1B2B3A] dark:text-[#F9FAFB]'
                  : 'font-medium text-[#4B5563] hover:text-[#1B2B3A] dark:text-[#9CA3AF] dark:hover:text-[#F3F4F6]'
              }`}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`nav-link-indicator font-modern-sans text-xs uppercase tracking-[0.22em] py-1 transition-colors duration-200 ${
                activeSection === 'experience'
                  ? 'active font-semibold text-[#1B2B3A] dark:text-[#F9FAFB]'
                  : 'font-medium text-[#4B5563] hover:text-[#1B2B3A] dark:text-[#9CA3AF] dark:hover:text-[#F3F4F6]'
              }`}
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className={`nav-link-indicator font-modern-sans text-xs uppercase tracking-[0.22em] py-1 transition-colors duration-200 ${
                activeSection === 'expertise'
                  ? 'active font-semibold text-[#1B2B3A] dark:text-[#F9FAFB]'
                  : 'font-medium text-[#4B5563] hover:text-[#1B2B3A] dark:text-[#9CA3AF] dark:hover:text-[#F3F4F6]'
              }`}
              href="#expertise"
            >
              Expertise
            </a>
          </li>
          <li>
            <a
              className={`nav-link-indicator font-modern-sans text-xs uppercase tracking-[0.22em] py-1 transition-colors duration-200 ${
                activeSection === 'achievements'
                  ? 'active font-semibold text-[#1B2B3A] dark:text-[#F9FAFB]'
                  : 'font-medium text-[#4B5563] hover:text-[#1B2B3A] dark:text-[#9CA3AF] dark:hover:text-[#F3F4F6]'
              }`}
              href="#achievements"
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              className={`nav-link-indicator font-modern-sans text-xs uppercase tracking-[0.22em] py-1 transition-colors duration-200 ${
                activeSection === 'contact'
                  ? 'active font-semibold text-[#1B2B3A] dark:text-[#F9FAFB]'
                  : 'font-medium text-[#4B5563] hover:text-[#1B2B3A] dark:text-[#9CA3AF] dark:hover:text-[#F3F4F6]'
              }`}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Minimalist Dark-Mode Toggle & Pill Call-To-Action Button */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-6">
          {/* Minimalist Dark Mode Toggle */}
          <button
            id="themeToggleBtn"
            onClick={onToggleTheme}
            aria-label="Toggle Dark Mode"
            className="theme-toggle-btn w-10 h-10 rounded-full flex items-center justify-center text-[#4B5563] hover:text-[#1B2B3A] dark:text-[#9CA3AF] dark:hover:text-[#F9FAFB] hover:bg-[#F0EBE1] dark:hover:bg-[#1E293B] border border-transparent hover:border-[#E2DDD3] dark:hover:border-[#334155] focus:outline-none transition-all"
          >
            <span className="material-symbols-outlined text-[20px] dark:hidden">dark_mode</span>
            <span className="material-symbols-outlined text-[20px] hidden dark:inline-block text-[#F2DF74]">
              light_mode
            </span>
          </button>

          {/* Prominent Rounded Pill-Shaped CTA Button with Outline & Trailing Arrow */}
          <a
            href="#contact"
            className="cta-pill-btn group/btn inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#1B2B3A] dark:border-[#E5E7EB] bg-transparent hover:bg-[#1B2B3A] dark:hover:bg-[#F3F4F6] text-[#1B2B3A] hover:text-[#FAF8F5] dark:text-[#F3F4F6] dark:hover:text-[#121820] font-modern-sans text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300"
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined text-sm font-semibold cta-arrow transition-transform duration-300">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Mobile Actions (Toggle + Hamburger) */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="themeToggleBtnMobile"
            onClick={onToggleTheme}
            aria-label="Toggle Dark Mode"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#4B5563] dark:text-[#9CA3AF] hover:bg-[#F0EBE1] dark:hover:bg-[#1E293B]"
          >
            <span className="material-symbols-outlined text-[18px] dark:hidden">dark_mode</span>
            <span className="material-symbols-outlined text-[18px] hidden dark:inline-block text-[#F2DF74]">
              light_mode
            </span>
          </button>
          <button
            id="mobileMenuBtn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="text-[#1B2B3A] dark:text-[#FAF8F5] p-2 hover:bg-[#F0EBE1] dark:hover:bg-[#1E293B] rounded-lg"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobileMenu"
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } lg:hidden bg-[#FAF8F5] dark:bg-[#121820] border-b border-[#EAE5DC] dark:border-[#2A3441] px-6 py-5 transition-all`}
      >
        <ul className="flex flex-col space-y-4">
          <li>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block font-modern-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#1B2B3A] dark:text-[#F9FAFB] py-1.5"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block font-modern-sans text-xs uppercase tracking-[0.2em] font-medium text-[#4B5563] dark:text-[#9CA3AF] py-1.5"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block font-modern-sans text-xs uppercase tracking-[0.2em] font-medium text-[#4B5563] dark:text-[#9CA3AF] py-1.5"
              href="#expertise"
            >
              Expertise
            </a>
          </li>
          <li>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block font-modern-sans text-xs uppercase tracking-[0.2em] font-medium text-[#4B5563] dark:text-[#9CA3AF] py-1.5"
              href="#achievements"
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block font-modern-sans text-xs uppercase tracking-[0.2em] font-medium text-[#4B5563] dark:text-[#9CA3AF] py-1.5"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="mt-5 pt-4 border-t border-[#EAE5DC] dark:border-[#2A3441]">
          <a
            onClick={() => setMobileMenuOpen(false)}
            href="#contact"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-[#1B2B3A] dark:border-[#E5E7EB] text-[#1B2B3A] dark:text-[#F3F4F6] font-modern-sans text-xs uppercase tracking-[0.18em] font-semibold"
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
