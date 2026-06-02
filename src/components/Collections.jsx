import React from "react";
import "./Collections.css";
import { collections } from "../data/products";

const Collections = ({ setActivePage }) => {
  return (
    <section className="collections-section">
      <div className="collections-inner">
        <div className="section-header">
          <span className="section-eyebrow">Crafted for you</span>
          <h2 className="section-title">Our Collections</h2>
          <div className="gold-divider">
            <span className="moon">☽</span>
          </div>
        </div>

        <div className="collections-grid">
          {collections.map((col) => (
            <div
              key={col.id}
              className="col-card"
              onClick={() => setActivePage("collections")}
            >
              <div
                className="col-img"
                style={{ backgroundImage: `url(${col.image})` }}
              >
                <div className="col-overlay" />
                <div className="col-text">
                  <div className="col-tag">{col.tagline}</div>
                  <div className="col-name">{col.name}</div>
                  <div className="col-price">{col.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button
            className="btn-primary"
            onClick={() => setActivePage("contact")}
          >
            Enquire About a Piece
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
