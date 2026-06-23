import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  const links = ['About', 'Journey', 'Projects', 'Skills', 'Experience', 'Achievements', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.getElementById(link.toLowerCase()));
      const scrollPos = window.scrollY + 100;

      sections.forEach(sec => {
        if (sec && sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) {
          setActiveSection(sec.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-[1100px] mx-auto px-8 h-[60px] flex items-center justify-between">
        <a href="#" className="font-bold text-base tracking-tight text-text">
          harsh<span className="text-accent">.</span>dev
        </a>
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-sm transition-colors duration-200 ${
                  activeSection === link.toLowerCase() ? 'text-text' : 'text-text-muted hover:text-text'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}