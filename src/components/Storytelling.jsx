import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Storytelling.css';

gsap.registerPlugin(ScrollTrigger);

export default function Storytelling() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Chapter 1 — reveal
      gsap.fromTo('.ch1-label', { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: '.chapter-1', start: 'top 75%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo('.ch1-heading', { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.chapter-1', start: 'top 70%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo('.ch1-text', { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, scrollTrigger: { trigger: '.chapter-1', start: 'top 65%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo('.ch1-img', { scale: 1.1, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        { scale: 1, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: '.chapter-1', start: 'top 70%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo('.ch1-stat', { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: '.chapter-1', start: 'top 55%', toggleActions: 'play none none none' } }
      );

      // Chapter 2 — image stagger
      gsap.fromTo('.ch2-label, .ch2-heading, .ch2-text', { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.chapter-2', start: 'top 70%', toggleActions: 'play none none none' } }
      );

      const ch2Images = gsap.utils.toArray('.ch2-img-item');
      gsap.fromTo(ch2Images,
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.ch2-images', start: 'top 75%', toggleActions: 'play none none none' }
        }
      );

      // Chapter 3 — map invitation
      gsap.fromTo('.ch3-label, .ch3-heading, .ch3-sub', { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: '.chapter-3', start: 'top 72%', toggleActions: 'play none none none' } }
      );

      // Animated chapter indicator line
      gsap.fromTo('.chapter-progress-line',
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: 'power3.inOut',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 50%', end: 'bottom 50%', scrub: 1 } }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="storytelling-section" id="storytelling">

      {/* Chapter progress indicator */}
      <div className="chapter-progress">
        <div className="chapter-progress-line" />
      </div>

      {/* ===== CHAPTER 1 ===== */}
      <div className="chapter chapter-1">
        <div className="chapter-inner">
          <div className="chapter-text-col">
            <div className="ch1-label label-tag">Chapter 01</div>
            <h2 className="ch1-heading">A Land of<br /><em>Many Traditions</em></h2>
            <p className="ch1-text">
              India is not one story — it is thirty-six overlapping civilizations, each with its own
              visual language, ritual art forms, and sacred architectures. From the Himalayas to
              the Deccan Plateau, from the Thar Desert to the mangrove coastlines, geography
              shaped culture at every turn.
            </p>
            <div className="ch1-stats">
              {[
                { num: '500+', label: 'Living art traditions' },
                { num: '36', label: 'States & territories' },
                { num: '22', label: 'Official languages' },
                { num: '3,000', label: 'Years of recorded art' },
              ].map((s, i) => (
                <div key={i} className="ch1-stat">
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="chapter-img-col">
            <div className="ch1-img-wrap">
              <img className="ch1-img" src="/images/storytelling.jpg" alt="India's cultural diversity" />
              <div className="ch1-img-caption">
                <span className="label-tag">Textile · Sculpture · Dance · Pottery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CHAPTER 2 ===== */}
      <div className="chapter chapter-2">
        <div className="chapter-inner chapter-inner--center">
          <div className="ch2-label label-tag">Chapter 02</div>
          <h2 className="ch2-heading">Art Lives in<br /><em>Every Region</em></h2>
          <p className="ch2-text">
            Each state of India carries a distinct artistic identity — a visual fingerprint shaped
            by faith, climate, trade, and centuries of refined practice. Here is a glimpse.
          </p>
        </div>
        <div className="ch2-images">
          {[
            { img: '/images/art_gallery.jpg', label: 'Painting traditions', sub: 'Pattachitra · Kalighat · Gond' },
            { img: '/images/hero_bg.jpg', label: 'Heritage architecture', sub: 'Temple · Fort · Stepwell' },
            { img: '/images/storytelling.jpg', label: 'Textile & weaving', sub: 'Ikat · Pashmina · Patola' },
            { img: '/images/art_gallery.jpg', label: 'Sculpture & craft', sub: 'Bronze · Stone · Terracotta' },
          ].map((item, i) => (
            <div key={i} className="ch2-img-item">
              <div className="ch2-img-inner">
                <img src={item.img} alt={item.label} />
                <div className="ch2-img-overlay">
                  <span className="ch2-img-label">{item.label}</span>
                  <span className="ch2-img-sub label-tag">{item.sub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CHAPTER 3 ===== */}
      <div className="chapter chapter-3">
        <div className="chapter-inner chapter-inner--center chapter-3-content">
          <div className="ch3-label label-tag">Chapter 03</div>
          <h2 className="ch3-heading">Find<br /><em>Your Region</em></h2>
          <p className="ch3-sub">
            The map below shows every state and union territory. Click any region to discover
            its unique artistic heritage, ancient sites, and living craft traditions.
          </p>
          <div className="ch3-arrow-hint">
            <div className="ch3-arrow-line" />
            <span className="label-tag">Begin Below</span>
          </div>
        </div>
      </div>

    </section>
  );
}
