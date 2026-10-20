import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { artFormsGallery } from '../data/indiaData';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef(null);
  const [active, setActive] = React.useState(artFormsGallery[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-label, .gallery-heading, .gallery-sub',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo('.gallery-sidebar',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-layout', start: 'top 75%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo('.gallery-main-display',
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-layout', start: 'top 75%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="gallery-section" id="gallery-section">
      <div className="gallery-inner">
        <div className="gallery-header">
          <div className="gallery-label label-tag">Art Forms of India</div>
          <h2 className="gallery-heading">The Many Languages<br /><em>of Indian Art</em></h2>
          <p className="gallery-sub">
            Each tradition carries centuries of refinement, spiritual meaning, and visual ingenuity.
            Select an art form to explore its origins and practice.
          </p>
        </div>

        <div className="gallery-layout">
          {/* Sidebar: art form index */}
          <nav className="gallery-sidebar" aria-label="Art form selector">
            {artFormsGallery.map((art, i) => (
              <button
                key={art.id}
                className={`gallery-nav-item ${active.id === art.id ? 'gallery-nav-item--active' : ''}`}
                id={`gallery-nav-${art.id}`}
                onClick={() => setActive(art)}
              >
                <span className="gnav-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="gnav-text">
                  <span className="gnav-name">{art.name}</span>
                  <span className="gnav-region label-tag">{art.region}</span>
                </div>
                {active.id === art.id && (
                  <motion.div className="gnav-indicator" layoutId="galleryIndicator" />
                )}
              </button>
            ))}
          </nav>

          {/* Main display */}
          <div className="gallery-main-display">
            <AnimatedDisplay art={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedDisplay({ art }) {
  return (
    <motion.div
      key={art.id}
      className="gallery-display"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="gallery-display-img-wrap">
        <motion.img
          key={art.image + art.id}
          src={art.image}
          alt={art.name}
          className="gallery-display-img"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        />
        <div className="gallery-display-img-overlay" />
        <div className="gallery-display-tradition label-tag">{art.tradition}</div>
      </div>
      <div className="gallery-display-info">
        <div className="gallery-display-era label-tag">Era: {art.era}</div>
        <h3 className="gallery-display-name">{art.name}</h3>
        <div className="gallery-display-from">{art.region}</div>
        <p className="gallery-display-desc">{art.desc}</p>
        <div className="gallery-display-deco">
          <div className="deco-line" />
          <span className="label-tag">{art.tradition}</span>
          <div className="deco-line" />
        </div>
      </div>
    </motion.div>
  );
}
