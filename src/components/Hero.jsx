import React from "react";
import "./Hero.css";
import { brandInfo } from "../data/products";

const Hero = ({ setActivePage }) => {
  return (
    <section className="hero">
      {/* Background texture */}
      <div className="hero-bg" />

      <div className="hero-inner">
        {/* Left: Text */}
        <div className="hero-text">
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
            <button
              className="btn-outline"
              onClick={() => setActivePage("contact")}
            >
              Custom Order
            </button>
          </div>

          {/* Trust badges */}
          <div className="hero-badges">
            <div className="badge">
              <span>☽</span> Handmade
            </div>
            <div className="badge-divider" />
            <div className="badge">
              <span>✦</span> Natural Stones
            </div>
            <div className="badge-divider" />
            <div className="badge">
              <span>◎</span> Gold Wire
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hero-visual">
          <div className="hero-visual-frame">
            {/* Celestial decorative SVG */}
            <svg
              className="hero-svg"
              viewBox="0 0 360 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer circle */}
              <circle
                cx="180"
                cy="200"
                r="155"
                stroke="#c8a96e"
                strokeWidth="0.8"
                strokeDasharray="4 6"
                opacity="0.4"
              />
              {/* Inner circle */}
              <circle
                cx="180"
                cy="200"
                r="110"
                stroke="#c8a96e"
                strokeWidth="0.6"
                opacity="0.3"
              />
              {/* Crescent moon */}
              <path
                d="M180 90 C140 90 110 120 110 160 C110 200 140 230 180 230 C160 220 148 200 148 160 C148 120 160 100 180 90Z"
                fill="#c8a96e"
                opacity="0.15"
                stroke="#c8a96e"
                strokeWidth="1.2"
              />
              <path
                d="M180 90 C140 90 110 120 110 160 C110 200 140 230 180 230 C160 220 148 200 148 160 C148 120 160 100 180 90Z"
                stroke="#c8a96e"
                strokeWidth="1.2"
                fill="none"
              />
              {/* Stars */}
              <text x="210" y="110" fontSize="14" fill="#c8a96e" opacity="0.7">
                ✦
              </text>
              <text x="245" y="160" fontSize="8" fill="#c8a96e" opacity="0.5">
                ✦
              </text>
              <text x="120" y="260" fontSize="10" fill="#c8a96e" opacity="0.5">
                ✦
              </text>
              <text x="230" y="300" fontSize="12" fill="#c8a96e" opacity="0.6">
                ✦
              </text>
              {/* Bead circles */}
              <circle
                cx="180"
                cy="310"
                r="10"
                stroke="#c8a96e"
                strokeWidth="1"
                fill="#c8a96e22"
              />
              <circle
                cx="155"
                cy="295"
                r="7"
                stroke="#c8a96e"
                strokeWidth="0.8"
                fill="#a0784022"
              />
              <circle
                cx="205"
                cy="295"
                r="7"
                stroke="#c8a96e"
                strokeWidth="0.8"
                fill="#7a9e8a22"
              />
              <circle
                cx="135"
                cy="270"
                r="6"
                stroke="#c8a96e"
                strokeWidth="0.8"
                fill="#c8a96e22"
              />
              <circle
                cx="225"
                cy="268"
                r="6"
                stroke="#c8a96e"
                strokeWidth="0.8"
                fill="#c8a96e22"
              />
              {/* Wire lines */}
              <path
                d="M135 270 Q148 282 155 295"
                stroke="#c8a96e"
                strokeWidth="0.8"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M155 295 Q167 302 180 310"
                stroke="#c8a96e"
                strokeWidth="0.8"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M180 310 Q192 302 205 295"
                stroke="#c8a96e"
                strokeWidth="0.8"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M205 295 Q215 282 225 268"
                stroke="#c8a96e"
                strokeWidth="0.8"
                fill="none"
                opacity="0.5"
              />
              {/* Bottom text */}
              <text
                x="180"
                y="390"
                textAnchor="middle"
                fontSize="11"
                fill="#c8a96e"
                opacity="0.6"
                fontFamily="Cormorant Garamond"
                fontStyle="italic"
              >
                est. 2024
              </text>
            </svg>

            <div className="hero-brand-badge">
              <div className="badge-moon">☽</div>
              <div className="badge-name">Celuna</div>
              <div className="badge-tag">Beaded soul, made to glow</div>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="stat-card stat-card--top">
            <div className="stat-num">100%</div>
            <div className="stat-lbl">Handmade</div>
          </div>
          <div className="stat-card stat-card--bottom">
            <div className="stat-num">Natural</div>
            <div className="stat-lbl">Gemstones</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
