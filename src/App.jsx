import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Storytelling from './components/Storytelling';
import MapSection from './components/MapSection';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const handleExplore = () => {
    const el = document.getElementById('storytelling') || document.getElementById('map-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Visual Ambiance & Textures */}
      <div className="grain-overlay" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-2" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero onExplore={handleExplore} />

        {/* Storytelling Narrative Chapters */}
        <Storytelling />

        {/* Interactive Map of India & State Inspector */}
        <MapSection />

        {/* Curated Art Forms Gallery */}
        <Gallery />

        {/* Project & Cultural Story About Section */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
