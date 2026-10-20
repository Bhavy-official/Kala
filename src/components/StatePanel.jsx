import React from 'react';
import { motion } from 'framer-motion';
import { getStateExploreUrl } from '../data/indiaData';
import './StatePanel.css';

const panelVariants = {
  initial: { opacity: 0, x: 40, scale: 0.97 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, x: -20, scale: 0.97, transition: { duration: 0.3 } }
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } }
};

const childVariant = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
};

export default function StatePanel({ stateName, data, onClose }) {
  if (!data) return null;

  const handleDiscover = () => {
    const url = getStateExploreUrl(stateName, data);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="state-panel"
      variants={panelVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      id={`state-panel-${stateName.toLowerCase().replace(/\s/g,'-')}`}
    >
      {/* Image */}
      <motion.div className="panel-img-wrap" variants={childVariant}>
        <img src={data.image} alt={stateName} className="panel-img" />
        <div className="panel-img-overlay">
          <div className="panel-region label-tag">{data.region}</div>
          <button className="panel-close" onClick={onClose} aria-label="Close panel">✕</button>
        </div>
        <div className="panel-state-name-over">
          <h2 className="panel-state-name">{stateName}</h2>
          <span className="panel-capital label-tag">Capital: {data.capital}</span>
        </div>
      </motion.div>

      <motion.div className="panel-body" variants={staggerChildren} initial="initial" animate="animate">

        {/* Introduction */}
        <motion.p className="panel-intro" variants={childVariant}>{data.intro}</motion.p>

        {/* Divider */}
        <motion.div className="panel-divider" variants={childVariant} />

        {/* Art Forms */}
        <motion.div className="panel-block" variants={childVariant}>
          <div className="panel-block-label label-tag">Notable Art Forms</div>
          <div className="panel-art-forms">
            {data.artForms.map((art, i) => (
              <motion.div
                key={i}
                className="art-form-item"
                variants={childVariant}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="art-form-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="art-form-content">
                  <div className="art-form-name">{art.name}</div>
                  <div className="art-form-desc">{art.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Heritage */}
        <motion.div className="panel-block" variants={childVariant}>
          <div className="panel-block-label label-tag">Heritage Sites</div>
          <div className="panel-heritage">
            {data.heritage.map((site, i) => (
              <div key={i} className="heritage-item">
                <span className="heritage-dot" />
                <span className="heritage-name">{site}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fact */}
        <motion.div className="panel-fact" variants={childVariant}>
          <div className="panel-fact-icon">✦</div>
          <p className="panel-fact-text">{data.fact}</p>
        </motion.div>

        {/* CTA */}
        <motion.div variants={childVariant}>
          <motion.button
            className="panel-cta"
            id={`discover-${stateName.toLowerCase().replace(/\s/g,'-')}-btn`}
            onClick={handleDiscover}
            title={`Read comprehensive cultural documentation on ${stateName}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span>Discover {stateName}</span>
            <span className="panel-cta-arrow">↗</span>
          </motion.button>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}
