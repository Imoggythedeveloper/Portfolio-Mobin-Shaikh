import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Expertise from './components/Expertise.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync theme with HTML root class & localStorage
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Active navigation highlight on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'expertise', 'achievements', 'contact'];
      let current = 'home';

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const sectionTop = el.offsetTop - 120;
          if (window.pageYOffset >= sectionTop) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <>
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-6 pb-12 md:pt-10 md:pb-24 space-y-24 md:space-y-32">
        <Hero />
        <Experience />
        <Expertise />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
