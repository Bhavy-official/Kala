import React from 'react';
import './Footer.css';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-wordmark">KALĀ</div>
            <p className="footer-tagline">The Living Art of India</p>
            <p className="footer-desc">
              An interactive atlas of Indian culture, art traditions,
              and architectural heritage — built with reverence.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-label label-tag">Explore</div>
              <ul>
                <li><button onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })}>Interactive Map</button></li>
                <li><button onClick={() => document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth' })}>Art Gallery</button></li>
                <li><button onClick={() => document.getElementById('storytelling')?.scrollIntoView({ behavior: 'smooth' })}>Stories</button></li>
                <li><button onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="footer-col-label label-tag">Art Forms</div>
              <ul>
                {['Madhubani', 'Warli', 'Pattachitra', 'Tanjore', 'Gond Art', 'Kalamkari'].map(a => (
                  <li key={a}><span className="footer-art-name">{a}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-ornament">
            <div className="footer-orn-line" />
            <svg viewBox="0 0 40 40" width="32" height="32">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#B89A62" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="1.5" fill="#B89A62" />
              {[0,90,180,270].map(a => (
                <line key={a}
                  x1="20" y1="2" x2="20" y2="8"
                  stroke="#B89A62" strokeWidth="0.5"
                  transform={`rotate(${a} 20 20)`}
                />
              ))}
            </svg>
            <div className="footer-orn-line" />
          </div>
          <div className="footer-meta">
            <span className="footer-copy">© 2026 KALĀ — The Living Art of India</span>
            <span className="footer-note">College Project · Frontend Development</span>
            <button className="footer-back-top" onClick={scrollTop} id="footer-back-top-btn">
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
