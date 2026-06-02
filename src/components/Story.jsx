import React from "react";
import "./Story.css";
import { brandInfo } from "../data/products";

const Story = () => (
  <section className="story-section">
    <div className="story-inner">
      {/* Visual */}
      <div className="story-visual">
        <div className="story-frame">
          <svg
            viewBox="0 0 300 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <rect
              x="20"
              y="20"
              width="260"
              height="320"
              stroke="#c8a96e"
              strokeWidth="0.8"
              fill="none"
              opacity="0.4"
            />
            <rect
              x="30"
              y="30"
              width="240"
              height="300"
              stroke="#c8a96e"
              strokeWidth="0.4"
              fill="#c8a96e05"
              opacity="0.6"
            />
            {/* Large moon */}
            <path
              d="M150 70 C100 70 65 105 65 150 C65 195 100 230 150 230 C125 218 110 190 110 150 C110 110 125 82 150 70Z"
              fill="#c8a96e"
              opacity="0.12"
              stroke="#c8a96e"
              strokeWidth="1.5"
            />
            {/* Stars */}
            <text x="195" y="100" fontSize="20" fill="#c8a96e" opacity="0.6">
              ✦
            </text>
            <text x="75" y="200" fontSize="12" fill="#c8a96e" opacity="0.4">
              ✦
            </text>
            <text x="210" y="190" fontSize="10" fill="#c8a96e" opacity="0.35">
              ✦
            </text>
            {/* Bead strand */}
            <circle
              cx="150"
              cy="270"
              r="12"
              fill="#c8a96e33"
              stroke="#c8a96e"
              strokeWidth="1"
            />
            <circle
              cx="122"
              cy="258"
              r="8"
              fill="#a0785022"
              stroke="#c8a96e"
              strokeWidth="0.8"
            />
            <circle
              cx="178"
              cy="258"
              r="8"
              fill="#7a9e8a22"
              stroke="#c8a96e"
              strokeWidth="0.8"
            />
            <circle
              cx="100"
              cy="240"
              r="7"
              fill="#c8a96e22"
              stroke="#c8a96e"
              strokeWidth="0.8"
            />
            <circle
              cx="200"
              cy="240"
              r="7"
              fill="#c8786022"
              stroke="#c8a96e"
              strokeWidth="0.8"
            />
            <path
              d="M100 240 Q111 249 122 258"
              stroke="#c8a96e"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M122 258 Q136 264 150 270"
              stroke="#c8a96e"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M150 270 Q164 264 178 258"
              stroke="#c8a96e"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M178 258 Q189 249 200 240"
              stroke="#c8a96e"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
            {/* Label */}
            <text
              x="150"
              y="325"
              textAnchor="middle"
              fontSize="13"
              fill="#c8a96e"
              opacity="0.55"
              fontFamily="Cormorant Garamond"
              fontStyle="italic"
            >
              Celuna
            </text>
          </svg>
        </div>
        <div className="story-accent-box" />
      </div>

      {/* Text */}
      <div className="story-text-side">
        <span className="section-eyebrow">The maker behind the pieces</span>
        <h2 className="section-title">
          Crafted by hand,
          <br />
          guided by heart
        </h2>
        <div
          className="gold-divider"
          style={{ justifyContent: "flex-start", marginBottom: "1.8rem" }}
        >
          <span className="moon">☽</span>
        </div>

        <p className="story-para">{brandInfo.story}</p>
        <p className="story-para" style={{ marginTop: "1rem" }}>
          From earthy tiger eye and coral to delicate moonstone and quartz —
          every stone is chosen with intention. Each bracelet, earring, and
          necklace is a small piece of wearable art.
        </p>

        {/* Values */}
        <div className="story-values">
          {[
            {
              icon: "☽",
              label: "Celestial-inspired",
              desc: "Moon & star motifs throughout",
            },
            {
              icon: "◎",
              label: "Wire-wrapped",
              desc: "Traditional goldsmithing technique",
            },
            {
              icon: "✦",
              label: "Natural stones",
              desc: "Ethically sourced gemstones",
            },
          ].map((v) => (
            <div key={v.label} className="value-item">
              <div className="value-icon">{v.icon}</div>
              <div>
                <div className="value-label">{v.label}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="story-stats">
          <div className="stat">
            <div className="s-num">100%</div>
            <div className="s-lbl">Handmade</div>
          </div>
          <div className="stat-sep" />
          <div className="stat">
            <div className="s-num">Natural</div>
            <div className="s-lbl">Gemstones</div>
          </div>
          <div className="stat-sep" />
          <div className="stat">
            <div className="s-num">☽✦</div>
            <div className="s-lbl">Celestial style</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Story;
