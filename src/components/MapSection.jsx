import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { statesData } from '../data/indiaData';
import IndiaMap from './IndiaMap';
import StatePanel from './StatePanel';
import './MapSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function MapSection() {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.map-section-label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo('.map-section-heading',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo('.map-section-sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo('.map-legend',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.7, delay: 0.3,
          scrollTrigger: { trigger: '.map-layout', start: 'top 75%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo('.map-hint',
        { opacity: 0 },
        { opacity: 1, duration: 0.7, delay: 0.5,
          scrollTrigger: { trigger: '.map-layout', start: 'top 75%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleStateClick = (stateName) => {
    if (statesData[stateName]) {
      setSelectedState(stateName);
    }
  };

  return (
    <section ref={sectionRef} className="map-section" id="map-section">
      <div className="map-section-header">
        <div className="map-section-label label-tag">Interactive Map</div>
        <h2 className="map-section-heading">
          Explore India's<br /><em>Cultural Geography</em>
        </h2>
        <p className="map-section-sub">
          Select any state to discover its unique artistic heritage,
          ancient sites, and living craft traditions.
        </p>
      </div>

      <div className="map-layout">
        {/* Left — Map */}
        <div className="map-col">
          <div className="map-hint label-tag">
            {hoveredState ? `— ${hoveredState}` : 'Hover to preview · Click to explore'}
          </div>
          <IndiaMap
            selectedState={selectedState}
            hoveredState={hoveredState}
            onStateClick={handleStateClick}
            onStateHover={setHoveredState}
          />
          <div className="map-legend">
            <div className="legend-item">
              <span className="legend-dot legend-dot--default" />
              <span>State / Territory</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot legend-dot--hover" />
              <span>Hover</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot legend-dot--selected" />
              <span>Selected</span>
            </div>
            {selectedState && (
              <button className="legend-reset" onClick={() => setSelectedState(null)}>
                ✕ Clear Selection
              </button>
            )}
          </div>
        </div>

        {/* Right — Panel */}
        <div className="panel-col">
          <AnimatePresence mode="wait">
            {selectedState ? (
              <StatePanel
                key={selectedState}
                stateName={selectedState}
                data={statesData[selectedState]}
                onClose={() => setSelectedState(null)}
              />
            ) : (
              <motion.div
                key="placeholder"
                className="panel-placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="placeholder-ornament">
                  <svg viewBox="0 0 80 80" width="80" height="80">
                    <circle cx="40" cy="40" r="36" fill="none" stroke="#B89A62" strokeWidth="0.5" />
                    <circle cx="40" cy="40" r="24" fill="none" stroke="#B89A62" strokeWidth="0.5" strokeDasharray="3 6" />
                    <circle cx="40" cy="40" r="2" fill="#B89A62" />
                    <line x1="40" y1="4" x2="40" y2="18" stroke="#B89A62" strokeWidth="0.5" />
                    <line x1="40" y1="62" x2="40" y2="76" stroke="#B89A62" strokeWidth="0.5" />
                    <line x1="4" y1="40" x2="18" y2="40" stroke="#B89A62" strokeWidth="0.5" />
                    <line x1="62" y1="40" x2="76" y2="40" stroke="#B89A62" strokeWidth="0.5" />
                  </svg>
                </div>
                <h3 className="placeholder-heading">Select a State</h3>
                <p className="placeholder-text">
                  Click on any region of the map to reveal its cultural story,
                  art traditions, and heritage sites.
                </p>
                <div className="placeholder-examples">
                  {['Rajasthan', 'Tamil Nadu', 'Odisha', 'Kerala'].map(s => (
                    <button key={s} className="example-state-btn" onClick={() => handleStateClick(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
