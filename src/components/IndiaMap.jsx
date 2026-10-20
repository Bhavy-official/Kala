import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { statesData } from '../data/indiaData';
import './IndiaMap.css';

gsap.registerPlugin(ScrollTrigger);

// Simplified but geographically recognizable India SVG paths
// ViewBox: 0 0 800 900
const STATES = [
  { id: 'Jammu & Kashmir', path: 'M 185 30 L 260 25 L 310 45 L 330 80 L 300 105 L 270 120 L 240 110 L 210 95 L 190 70 Z' },
  { id: 'Ladakh', path: 'M 310 25 L 400 20 L 430 50 L 410 85 L 370 95 L 330 80 L 310 45 Z' },
  { id: 'Himachal Pradesh', path: 'M 240 110 L 290 105 L 310 125 L 300 155 L 270 160 L 245 145 Z' },
  { id: 'Punjab', path: 'M 190 115 L 240 110 L 245 145 L 230 168 L 200 172 L 175 155 L 178 130 Z' },
  { id: 'Uttarakhand', path: 'M 300 125 L 370 110 L 390 140 L 370 168 L 330 170 L 300 155 Z' },
  { id: 'Haryana', path: 'M 200 172 L 230 168 L 255 180 L 245 210 L 218 220 L 192 208 L 190 190 Z' },
  { id: 'Delhi', path: 'M 245 180 L 265 177 L 268 200 L 250 205 L 238 196 Z' },
  { id: 'Uttar Pradesh', path: 'M 255 180 L 370 168 L 430 185 L 450 220 L 420 265 L 360 280 L 290 275 L 250 255 L 245 220 L 255 205 Z' },
  { id: 'Rajasthan', path: 'M 120 175 L 200 172 L 218 220 L 245 255 L 230 300 L 195 335 L 155 345 L 110 320 L 85 280 L 80 230 L 100 195 Z' },
  { id: 'Bihar', path: 'M 430 185 L 510 178 L 545 200 L 540 240 L 500 258 L 450 265 L 420 245 L 420 220 Z' },
  { id: 'Sikkim', path: 'M 545 170 L 570 165 L 575 190 L 555 198 L 540 186 Z' },
  { id: 'Arunachal Pradesh', path: 'M 575 140 L 700 130 L 720 165 L 680 185 L 620 190 L 570 185 L 555 165 Z' },
  { id: 'Assam', path: 'M 555 198 L 620 190 L 660 210 L 650 240 L 595 250 L 560 240 L 545 220 Z' },
  { id: 'Nagaland', path: 'M 650 215 L 685 210 L 695 240 L 670 255 L 648 242 Z' },
  { id: 'Manipur', path: 'M 660 248 L 690 242 L 698 272 L 672 285 L 655 270 Z' },
  { id: 'Mizoram', path: 'M 648 275 L 672 268 L 678 300 L 656 312 L 638 298 Z' },
  { id: 'Tripura', path: 'M 620 258 L 648 252 L 650 280 L 628 290 L 610 278 Z' },
  { id: 'Meghalaya', path: 'M 560 245 L 610 240 L 615 262 L 585 272 L 555 264 Z' },
  { id: 'West Bengal', path: 'M 510 178 L 555 170 L 565 220 L 560 270 L 540 310 L 510 325 L 490 300 L 480 260 L 490 220 Z' },
  { id: 'Jharkhand', path: 'M 450 265 L 510 260 L 520 300 L 500 335 L 460 342 L 430 318 L 425 285 Z' },
  { id: 'Odisha', path: 'M 460 342 L 510 330 L 540 355 L 535 400 L 510 430 L 475 435 L 445 408 L 435 370 Z' },
  { id: 'Chhattisgarh', path: 'M 350 280 L 430 272 L 450 320 L 460 375 L 430 405 L 390 408 L 355 380 L 340 335 Z' },
  { id: 'Madhya Pradesh', path: 'M 195 335 L 340 320 L 355 370 L 330 415 L 275 420 L 215 408 L 175 375 L 165 340 Z' },
  { id: 'Gujarat', path: 'M 50 280 L 120 270 L 155 345 L 165 390 L 145 435 L 100 460 L 58 445 L 35 395 L 30 340 Z' },
  { id: 'Maharashtra', path: 'M 165 375 L 275 420 L 310 460 L 300 510 L 265 540 L 200 548 L 150 535 L 110 500 L 100 460 L 145 435 L 165 410 Z' },
  { id: 'Telangana', path: 'M 330 415 L 420 408 L 450 450 L 435 500 L 400 520 L 355 515 L 325 480 L 315 450 Z' },
  { id: 'Andhra Pradesh', path: 'M 355 515 L 430 505 L 475 435 L 510 460 L 515 520 L 500 570 L 460 595 L 415 590 L 375 560 Z' },
  { id: 'Karnataka', path: 'M 200 548 L 310 540 L 340 570 L 330 625 L 295 655 L 235 660 L 185 630 L 165 585 L 170 545 Z' },
  { id: 'Goa', path: 'M 145 535 L 172 530 L 175 558 L 153 565 L 135 552 Z' },
  { id: 'Kerala', path: 'M 215 660 L 270 650 L 295 690 L 285 750 L 255 790 L 220 800 L 198 775 L 195 725 L 205 685 Z' },
  { id: 'Tamil Nadu', path: 'M 295 655 L 375 630 L 420 660 L 415 730 L 385 785 L 340 815 L 290 820 L 255 790 L 285 750 L 295 700 Z' },
  { id: 'Puducherry', path: 'M 382 710 L 395 705 L 396 722 L 382 726 Z' },
  { id: 'Lakshadweep', path: 'M 110 700 L 118 695 L 122 708 L 112 712 Z' },
  { id: 'Andaman & Nicobar', path: 'M 640 480 L 650 472 L 658 510 L 650 560 L 638 580 L 628 545 L 628 505 Z' },
  { id: 'Daman & Diu', path: 'M 100 400 L 110 396 L 113 408 L 102 412 Z' },
  { id: 'Dadra & Nagar Haveli', path: 'M 118 430 L 128 425 L 132 438 L 120 443 Z' },
  { id: 'Chandigarh', path: 'M 218 150 L 226 148 L 228 160 L 218 162 Z' },
];

const DEMO_STATES = ['Rajasthan', 'Tamil Nadu', 'Odisha'];

export default function IndiaMap({ selectedState, hoveredState, onStateClick, onStateHover }) {
  const mapRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance: fade + scale
      gsap.fromTo(svgRef.current,
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Introductory demo: briefly highlight a few states
      const demoDelay = 1.4;

      DEMO_STATES.forEach((stateName, i) => {
        const el = svgRef.current?.querySelector(`[data-state="${stateName}"]`);
        if (!el) return;
        const tl = gsap.timeline({ delay: demoDelay + i * 0.8 });
        tl.to(el, { fill: 'rgba(184,154,98,0.55)', duration: 0.4 })
          .to(el, { fill: '', duration: 0.4, delay: 0.4 });
      });

    }, mapRef);

    return () => ctx.revert();
  }, []);

  const getFill = (id) => {
    if (id === selectedState) return 'var(--accent-gold)';
    if (id === hoveredState) return 'rgba(169,96,70,0.55)';
    if (!statesData[id]) return '#1e2118';
    return '#252920';
  };

  const getStroke = (id) => {
    if (id === selectedState) return '#B89A62';
    if (id === hoveredState) return '#A96046';
    return 'rgba(184,154,98,0.18)';
  };

  return (
    <div ref={mapRef} className="india-map-container" id="india-map">
      {/* Subtle background glow behind map */}
      <div className="map-glow" />

      <svg
        ref={svgRef}
        viewBox="0 0 780 860"
        className="india-svg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Interactive map of India showing all states and union territories"
      >
        <defs>
          <filter id="mapGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="selectedGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {STATES.map(({ id, path }) => {
          const isSelected = id === selectedState;
          const isHovered = id === hoveredState;
          const hasData = !!statesData[id];

          return (
            <g key={id}>
              <path
                d={path}
                data-state={id}
                fill={getFill(id)}
                stroke={getStroke(id)}
                strokeWidth={isSelected ? 1.5 : isHovered ? 1.2 : 0.8}
                filter={isSelected ? 'url(#selectedGlow)' : undefined}
                className={`state-path ${hasData ? 'state-path--clickable' : ''} ${isSelected ? 'state-path--selected' : ''}`}
                onClick={() => hasData && onStateClick(id)}
                onMouseEnter={() => onStateHover(id)}
                onMouseLeave={() => onStateHover(null)}
                style={{ transition: 'fill 0.25s ease, stroke 0.25s ease' }}
              />
              {/* State label for larger states */}
              {isSelected && (
                <text
                  className="state-label-text"
                  x={getPathCenter(path).x}
                  y={getPathCenter(path).y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="var(--bg-deep)"
                  fontSize="8"
                  fontFamily="Manrope, sans-serif"
                  fontWeight="600"
                  pointerEvents="none"
                >
                  {id.length > 10 ? id.substring(0, 9) + '…' : id}
                </text>
              )}
            </g>
          );
        })}

        {/* Decorative compass rose */}
        <g transform="translate(700, 780)" opacity="0.3">
          <circle cx="0" cy="0" r="18" fill="none" stroke="#B89A62" strokeWidth="0.5" />
          <line x1="0" y1="-18" x2="0" y2="18" stroke="#B89A62" strokeWidth="0.5" />
          <line x1="-18" y1="0" x2="18" y2="0" stroke="#B89A62" strokeWidth="0.5" />
          <text x="0" y="-22" textAnchor="middle" fill="#B89A62" fontSize="6" fontFamily="Manrope">N</text>
        </g>

        {/* Scale indicator */}
        <g transform="translate(30, 820)" opacity="0.4">
          <line x1="0" y1="0" x2="80" y2="0" stroke="#B89A62" strokeWidth="0.7" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="#B89A62" strokeWidth="0.7" />
          <line x1="80" y1="-4" x2="80" y2="4" stroke="#B89A62" strokeWidth="0.7" />
          <text x="40" y="-8" textAnchor="middle" fill="#B89A62" fontSize="5.5" fontFamily="Manrope">approx 1000 km</text>
        </g>
      </svg>
    </div>
  );
}

// Helper: get approximate center of a path from M commands
function getPathCenter(pathStr) {
  const nums = pathStr.match(/[-\d.]+/g)?.map(Number) || [];
  if (nums.length < 2) return { x: 0, y: 0 };
  let sumX = 0, sumY = 0, count = 0;
  for (let i = 0; i < nums.length - 1; i += 2) {
    sumX += nums[i]; sumY += nums[i + 1]; count++;
  }
  return { x: sumX / count, y: sumY / count };
}
