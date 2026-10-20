import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onExplore }) {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const labelRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollHintRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Coordinated entrance timeline
      const tl = gsap.timeline({ delay: 0.1 });

      // Image reveal via clip-path
      tl.fromTo(imgRef.current,
        { clipPath: 'inset(0 100% 0 0)', scale: 1.1 },
        { clipPath: 'inset(0 0% 0 0)', scale: 1.04, duration: 1.6, ease: 'expo.inOut' }
      );

      // Decorative lines
      tl.fromTo([line1Ref.current, line2Ref.current],
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', transformOrigin: 'left center' },
        '-=0.8'
      );

      // Label
      tl.fromTo(labelRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.5'
      );

      // Headline — word by word stagger
      const words = h1Ref.current.querySelectorAll('.hero-word');
      tl.fromTo(words,
        { y: 60, opacity: 0, rotateX: -20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out' },
        '-=0.4'
      );

      // Sub text
      tl.fromTo(subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.4'
      );

      // CTA
      tl.fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
        '-=0.3'
      );

      // Scroll hint pulse
      tl.fromTo(scrollHintRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2'
      );

      // Parallax on scroll
      gsap.to(imgRef.current, {
        yPercent: 20,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

      // Text parallax
      gsap.to('.hero-content', {
        yPercent: 30,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '60% top',
          scrub: 1,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headline = "Every Region Has a Story.";
  const words = headline.split(' ');

  return (
    <section ref={heroRef} className="hero" id="hero">
      {/* Background image */}
      <div className="hero-img-wrap">
        <img ref={imgRef} src="/images/hero_bg.jpg" alt="Indian art and heritage" className="hero-img" />
        <div className="hero-img-overlay" />
      </div>

      {/* Decorative lines */}
      <div className="hero-deco-lines">
        <div ref={line1Ref} className="hero-deco-line" />
        <div ref={line2Ref} className="hero-deco-line hero-deco-line--right" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div ref={labelRef} className="hero-label label-tag">An Atlas of Indian Culture</div>

        <h1 ref={h1Ref} className="hero-headline">
          {words.map((w, i) => (
            <span key={i} className="hero-word-wrap">
              <span className="hero-word">{w}</span>
              {i < words.length - 1 && ' '}
            </span>
          ))}
        </h1>

        <p ref={subRef} className="hero-sub">
          From the rock shelters of Bhimbetka to the living ateliers of Madhubani — India's
          artistic traditions span 30,000 years and every region of the subcontinent.
          <span className="serif-italic"> Discover them through an interactive journey.</span>
        </p>

        <div ref={ctaRef} className="hero-cta-row">
          <button className="hero-cta-btn" id="hero-begin-btn" onClick={onExplore}>
            <span>Begin Exploring</span>
            <span className="cta-arrow">→</span>
          </button>
          <span className="hero-cta-note">28 states · 8 union territories · 500+ traditions</span>
        </div>
      </div>

      {/* Scroll hint */}
      <div ref={scrollHintRef} className="hero-scroll-hint">
        <div className="scroll-line" />
        <span className="scroll-label label-tag">Scroll</span>
      </div>
    </section>
  );
}
