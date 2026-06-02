import React from "react";
import "./Hero.css";
import { brandInfo } from "../data/products";

const Hero = ({ setActivePage }) => {
  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-inner">
        {/* Left: Text */}
        <div className="hero-text">
          <div className="hero-logo-mark">CELUNA</div>
          <span className="hero-eyebrow">✦ Handcrafted Jewellery</span>

          <h1 className="hero-title">
            <span className="hero-title-line">Beaded soul,</span>
            <span className="hero-title-line italic">made to glow</span>
          </h1>

          <p className="hero-desc">{brandInfo.description}</p>

          <div className="hero-btns">
            <button
              className="btn-primary"
              onClick={() => setActivePage("collections")}
            >
              Shop Collections
            </button>
          </div>

          <div className="hero-badges">
            <div className="badge">
              <span>☽</span> Handmade
            </div>
            <div className="badge-divider" />
            <div className="badge">
              <span>✦</span> Beaded Jewellery
            </div>
            <div className="badge-divider" />
            <div className="badge">
              <span>◎</span> Gold Wire
            </div>
          </div>
        </div>

        {/* Right: Brand image */}
        <div className="hero-visual">
          <img
            src="/images/hero-brand.jpeg"
            alt="Celuna handcrafted jewellery"
            className="hero-img"
          />

          {/* Floating stat cards */}
          <div className="stat-card stat-card--top">
            <div className="stat-num">100%</div>
            <div className="stat-lbl">Handmade</div>
          </div>
          <div className="stat-card stat-card--bottom">
            <div className="stat-num">Beaded</div>
            <div className="stat-lbl">Jwellery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
