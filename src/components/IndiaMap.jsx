import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import indiaMapData from '../data/indiaSvgMap';
import { getStateData } from '../data/indiaData';
import './IndiaMap.css';

gsap.registerPlugin(ScrollTrigger);

export default function IndiaMap({ selectedState, hoveredState, onStateClick, onStateHover }) {
  const mapRef = useRef(null);
  const svgRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(
        svgRef.current,
        { opacity: 0, scale: 0.94 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Subtle introductory spotlight on key cultural centers
      const demoStates = ['Rajasthan', 'Tamil Nadu', 'Odisha', 'Maharashtra'];
      demoStates.forEach((stateName, idx) => {
        const el = svgRef.current?.querySelector(`[data-statename="${stateName}"]`);
        if (!el) return;
        const tl = gsap.timeline({ delay: 1.2 + idx * 0.7 });
        tl.to(el, { fill: 'rgba(184,154,98,0.65)', duration: 0.45 })
          .to(el, { fill: '', duration: 0.45, delay: 0.35 });
      });
    }, mapRef);

    return () => ctx.revert();
  }, []);

  // Track mouse coordinates for tooltip
  const handleMouseMove = (e) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const isStateSelected = (name) => {
    if (!selectedState || !name) return false;
    const s1 = selectedState.toLowerCase().replace(/&/g, 'and').trim();
    const s2 = name.toLowerCase().replace(/&/g, 'and').trim();
    return s1 === s2 || s1.includes(s2) || s2.includes(s1);
  };

  const isStateHovered = (name) => {
    if (!hoveredState || !name) return false;
    const s1 = hoveredState.toLowerCase().replace(/&/g, 'and').trim();
    const s2 = name.toLowerCase().replace(/&/g, 'and').trim();
    return s1 === s2 || s1.includes(s2) || s2.includes(s1);
  };

  const getFill = (name) => {
    if (isStateSelected(name)) return 'var(--accent-gold)';
    if (isStateHovered(name)) return 'rgba(169, 96, 70, 0.75)';
    return '#22261E';
  };

  const getStroke = (name) => {
    if (isStateSelected(name)) return '#FFF8E7';
    if (isStateHovered(name)) return '#CEB07A';
    return 'rgba(184, 154, 98, 0.28)';
  };

  const activeHoverData = hoveredState ? getStateData(hoveredState) : null;

  return (
    <div
      ref={mapRef}
      className="india-map-container"
      id="india-map"
      onMouseMove={handleMouseMove}
    >
      {/* Background radial glow */}
      <div className="map-glow" />

      {/* Floating Hover Tooltip */}
      {hoveredState && (
        <div
          className="map-floating-tooltip"
          style={{
            transform: `translate(${mousePos.x + 14}px, ${mousePos.y - 36}px)`
          }}
        >
          <span className="tooltip-name">{hoveredState}</span>
          {activeHoverData && (
            <span className="tooltip-region label-tag">{activeHoverData.region}</span>
          )}
        </div>
      )}

      <svg
        ref={svgRef}
        viewBox={indiaMapData.viewBox || '0 0 612 696'}
        className="india-svg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Real Geographically Accurate Map of India"
      >
        <defs>
          <filter id="stateSelectedFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComponentTransfer in="blur" result="glow">
              <feFuncA type="linear" slope="0.8" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="stateHoverFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* States & Union Territories Layers */}
        <g className="states-group">
          {indiaMapData.locations.map((loc) => {
            const selected = isStateSelected(loc.name);
            const hovered = isStateHovered(loc.name);

            return (
              <path
                key={loc.id}
                d={loc.path}
                id={`state-path-${loc.id}`}
                data-statename={loc.name}
                fill={getFill(loc.name)}
                stroke={getStroke(loc.name)}
                strokeWidth={selected ? 1.6 : hovered ? 1.2 : 0.75}
                strokeLinejoin="round"
                strokeLinecap="round"
                filter={selected ? 'url(#stateSelectedFilter)' : undefined}
                className={`state-path state-path--clickable ${selected ? 'state-path--selected' : ''}`}
                onClick={() => onStateClick(loc.name)}
                onMouseEnter={() => onStateHover(loc.name)}
                onMouseLeave={() => onStateHover(null)}
              />
            );
          })}
        </g>

        {/* Subtle Decorative Map Elements */}
        {/* Compass Rose */}
        <g transform="translate(540, 580)" opacity="0.38">
          <circle cx="0" cy="0" r="16" fill="none" stroke="#B89A62" strokeWidth="0.6" />
          <circle cx="0" cy="0" r="11" fill="none" stroke="#B89A62" strokeWidth="0.4" strokeDasharray="1.5 2.5" />
          <line x1="0" y1="-16" x2="0" y2="16" stroke="#B89A62" strokeWidth="0.7" />
          <line x1="-16" y1="0" x2="16" y2="0" stroke="#B89A62" strokeWidth="0.7" />
          <polygon points="0,-16 2.5,-6 0,-8 -2.5,-6" fill="#B89A62" />
          <text x="0" y="-19" textAnchor="middle" fill="#B89A62" fontSize="7" fontFamily="'Manrope', sans-serif" fontWeight="700">N</text>
        </g>

        {/* Scale Indicator */}
        <g transform="translate(36, 646)" opacity="0.45">
          <line x1="0" y1="0" x2="60" y2="0" stroke="#B89A62" strokeWidth="0.8" />
          <line x1="0" y1="-3" x2="0" y2="3" stroke="#B89A62" strokeWidth="0.8" />
          <line x1="60" y1="-3" x2="60" y2="3" stroke="#B89A62" strokeWidth="0.8" />
          <text x="30" y="-6" textAnchor="middle" fill="#B89A62" fontSize="6.5" fontFamily="'Manrope', sans-serif">500 km</text>
        </g>

        {/* Water Bodies Notation */}
        <g opacity="0.22" fill="#B89A62" fontFamily="'Cormorant Garamond', serif" fontStyle="italic" fontSize="9">
          <text x="75" y="520" textAnchor="middle">Arabian Sea</text>
          <text x="490" y="520" textAnchor="middle">Bay of Bengal</text>
          <text x="280" y="680" textAnchor="middle">Indian Ocean</text>
        </g>
      </svg>
    </div>
  );
}
