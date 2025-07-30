import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">UB</div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="https://udaybudhija.btw.so/">Blog</a>
            <a href="https://github.com/BudhijaUday" target="_blank" rel="noopener noreferrer">Github</a>
          </nav>
          <a href="https://drive.google.com/file/d/1FIaFJF-B1hB3__9cA-PoEwcN3XciNtSR/view?usp=sharing" className="resume-btn">
            Resume <Download size={16} />
          </a>
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a href="https://udaybudhija.btw.so/" onClick={() => setIsMenuOpen(false)}>Blog</a>
          <a href="https://github.com/BudhijaUday" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://drive.google.com/file/d/1FIaFJF-B1hB3__9cA-PoEwcN3XciNtSR/view?usp=sharing" onClick={() => setIsMenuOpen(false)}>Resume</a>
          <a href="#" className="resume-btn">Resume <Download size={16} /></a>
        </div>
      </div>
    </header>
  );
}
