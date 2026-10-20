import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Navbar.css';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    // Scroll-based background
    const handleScroll = () => {
      if (window.scrollY > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Entrance animation
    gsap.fromTo(nav,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power2.out' }
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav ref={navRef} className="navbar" id="navbar">
      <div className="navbar-inner">
        <div className="navbar-wordmark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="wordmark-row">
            <span className="wordmark-kala">KALĀ</span>
            <span className="wordmark-author-badge label-tag">By Bhavy Manchanda</span>
          </div>
          <span className="wordmark-sub">Living Art of India</span>
        </div>
        <div className="navbar-links">
          <button onClick={() => scrollTo('map-section')} className="nav-link">Explore</button>
          <button onClick={() => scrollTo('gallery-section')} className="nav-link">Art Forms</button>
          <button onClick={() => scrollTo('about-section')} className="nav-link">About</button>
        </div>
        <button className="nav-cta" onClick={() => scrollTo('map-section')}>Begin Exploring</button>
      </div>
    </nav>
  );
}
