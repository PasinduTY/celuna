import React from "react";
import "./Marquee.css";

const items = [
  "Handcrafted",
  "✦",
  "Wire Wrapped",
  "✦",
  "Beaded Soul",
  "✦",
  "Gold Wire",
  "✦",
  "Custom Orders",
  "✦",
  "Made to Glow",
  "✦",
  "Tiger Eye",
  "✦",
  "Moonstone",
  "✦",
  "Handcrafted",
  "✦",
  "Wire Wrapped",
  "✦",
  "Natural Gemstones",
  "✦",
  "Beaded Soul",
  "✦",
  "Gold Wire",
  "✦",
  "Custom Orders",
  "✦",
];

const Marquee = () => (
  <div className="marquee-wrap">
    <div className="marquee-track">
      {items.map((item, i) => (
        <span key={i} className={item === "✦" ? "marquee-dot" : "marquee-word"}>
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
