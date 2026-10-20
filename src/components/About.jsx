import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-label, .about-heading, .about-text, .about-attribution',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo('.about-img',
        { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        { opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section" id="about-section">
      <div className="about-inner">
        <div className="about-text-col">
          <div className="about-label label-tag">About KALĀ</div>
          <h2 className="about-heading">
            A Digital Museum<br />of Living <em>Traditions</em>
          </h2>
          <p className="about-text">
            KALĀ is an interactive cultural atlas dedicated to documenting and celebrating India's
            extraordinary artistic heritage. From prehistoric rock art to thriving contemporary craft
            movements, India's visual traditions represent one of humanity's most remarkable
            unbroken creative continuities.
          </p>
          <p className="about-text">
            This project was built as an immersive educational experience — combining interactive
            cartography, editorial storytelling, and a curated art database to make India's
            cultural geography accessible and beautiful.
          </p>
          <div className="about-facts">
            {[
              { label: 'Art traditions documented', val: '50+' },
              { label: 'States & territories', val: '36' },
              { label: 'Heritage sites included', val: '40+' },
              { label: 'Years of Indian art history', val: '30,000' },
            ].map((f, i) => (
              <div key={i} className="about-fact">
                <span className="about-fact-val">{f.val}</span>
                <span className="about-fact-label">{f.label}</span>
              </div>
            ))}
          </div>
          <div className="about-attribution">
            <div className="attr-line" />
            <p className="attr-text">
              Crafted with reverence for India's living artistic traditions.
              <br />
              <span className="label-tag" style={{ marginTop: 8, display: 'block' }}>
                Indian Art Form · KALĀ © 2026
              </span>
            </p>
          </div>
        </div>
        <div className="about-img-col">
          <img className="about-img" src="/images/art_gallery.jpg" alt="Indian art forms" />
          <div className="about-img-caption">
            <span className="label-tag">Madhubani · Warli · Pattachitra · Tanjore · Gond</span>
          </div>
        </div>
      </div>
    </section>
  );
}
