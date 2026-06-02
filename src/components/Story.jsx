import React from "react";
import "./Story.css";
import { brandInfo } from "../data/products";

const Story = () => (
  <section className="story-section">
    <div className="story-inner">
      {/* Video */}
      <div className="story-visual">
        <div className="story-video-wrap">
          <video
            className="story-video"
            src="/videos/celuna-story.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
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
              label: "Beaded jewellery",
              desc: "Hand-strung beads in every piece",
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
            <div className="s-num">Beaded </div>
            <div className="s-lbl">Jewellery</div>
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
