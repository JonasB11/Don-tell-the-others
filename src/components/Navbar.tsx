'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <div className="brand-logo">
          <Image src="/pics/logo.svg" alt="Band Logo" width={40} height={40} />
        </div>
        <div className="brand-text">Dont tell the others</div>
      </div>
      <button
        className={`nav-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a onClick={() => handleNavClick('home')}>Start</a></li>
        <li><a onClick={() => handleNavClick('band')}>Band</a></li>
        <li><a onClick={() => handleNavClick('gallery')}>Galerie</a></li>
        <li><a onClick={() => handleNavClick('tour')}>Termine</a></li>
        <li><a onClick={() => handleNavClick('contact')}>Kontakt</a></li>
      </ul>
    </nav>
  );
}
