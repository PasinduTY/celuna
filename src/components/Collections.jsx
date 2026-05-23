import React from 'react';
import './Collections.css';
import { collections, products } from '../data/products';

// Bead icons per collection
const icons = {
  bracelets: (
    <svg viewBox="0 0 80 80" fill="none" width="70" height="70">
      <circle cx="40" cy="40" r="28" stroke="#c8a96e" strokeWidth="1.2" fill="none"/>
      <circle cx="40" cy="12" r="5" fill="#c8a96e" opacity="0.7"/>
      <circle cx="63" cy="25" r="4" fill="#a07850" opacity="0.7"/>
      <circle cx="63" cy="55" r="5" fill="#7a9e8a" opacity="0.7"/>
      <circle cx="40" cy="68" r="4" fill="#c8a96e" opacity="0.7"/>
      <circle cx="17" cy="55" r="5" fill="#c87070" opacity="0.6"/>
      <circle cx="17" cy="25" r="4" fill="#a07850" opacity="0.7"/>
    </svg>
  ),
  earrings: (
    <svg viewBox="0 0 80 80" fill="none" width="70" height="70">
      <line x1="32" y1="10" x2="32" y2="22" stroke="#c8a96e" strokeWidth="1.5"/>
      <circle cx="32" cy="26" r="3" fill="#c8a96e"/>
      <path d="M29 30 Q26 38 32 44" stroke="#c8a96e" strokeWidth="1.2" fill="none"/>
      <circle cx="32" cy="48" r="7" stroke="#c8a96e" strokeWidth="1" fill="#c8a96e22"/>
      <line x1="52" y1="10" x2="52" y2="22" stroke="#c8a96e" strokeWidth="1.5"/>
      <circle cx="52" cy="26" r="3" fill="#c8a96e"/>
      <path d="M49 30 Q46 38 52 44" stroke="#c8a96e" strokeWidth="1.2" fill="none"/>
      <circle cx="52" cy="48" r="7" stroke="#c8a96e" strokeWidth="1" fill="#a0785022"/>
    </svg>
  ),
  necklaces: (
    <svg viewBox="0 0 80 80" fill="none" width="70" height="70">
      <path d="M20 20 Q40 55 60 20" stroke="#c8a96e" strokeWidth="1.2" fill="none"/>
      <circle cx="20" cy="20" r="4" fill="#c8a96e" opacity="0.7"/>
      <circle cx="32" cy="38" r="5" fill="#7a9e8a" opacity="0.8"/>
      <circle cx="40" cy="44" r="6" fill="#c8a96e" opacity="0.5"/>
      <circle cx="48" cy="38" r="5" fill="#a07850" opacity="0.8"/>
      <circle cx="60" cy="20" r="4" fill="#c8a96e" opacity="0.7"/>
      {/* Moon charm */}
      <text x="37" y="64" fontSize="14" fill="#c8a96e">☽</text>
    </svg>
  ),
};

const Collections = ({ setActivePage }) => {
  return (
    <section className="collections-section">
      <div className="collections-inner">
        <div className="section-header">
          <span className="section-eyebrow">Crafted for you</span>
          <h2 className="section-title">Our Collections</h2>
          <div className="gold-divider"><span className="moon">☽</span></div>
        </div>

        <div className="collections-grid">
          {collections.map((col) => (
            <div key={col.id} className="col-card" onClick={() => setActivePage('collections')}>
              <div className="col-icon-wrap" style={{ background: col.bg }}>
                {icons[col.id]}
              </div>
              <div className="col-info">
                <div className="col-tag">{col.tagline}</div>
                <div className="col-name">{col.name}</div>
                <div className="col-count">{col.count} pieces</div>
              </div>
              <div className="col-arrow">→</div>
            </div>
          ))}
        </div>

        {/* Featured products preview */}
        <div className="section-header" style={{ marginTop: '5rem' }}>
          <span className="section-eyebrow">New arrivals</span>
          <h2 className="section-title">Featured Pieces</h2>
        </div>

        <div className="products-grid">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img" style={{ background: product.id % 2 === 0 ? '#f0e8d8' : '#e8f0ec' }}>
                {icons[product.category] || icons.bracelets}
                <div className="product-wish">♡</div>
              </div>
              <div className="product-info">
                <div className="product-cat">{product.category}</div>
                <div className="product-name">{product.name}</div>
                <div className="product-mat">{product.materials}</div>
                <div className="product-price">{product.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn-primary" onClick={() => setActivePage('contact')}>
            Enquire About a Piece
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
