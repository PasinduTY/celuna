import React from 'react';
import './Footer.css';
import { brandInfo } from '../data/products';

const Footer = ({ setActivePage }) => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="footer-logo">☽ Celuna</div>
        <div className="footer-tagline">{brandInfo.tagline}</div>
      </div>

      <div className="footer-links">
        <button onClick={() => setActivePage('home')}>Home</button>
        <button onClick={() => setActivePage('collections')}>Collections</button>
        <button onClick={() => setActivePage('story')}>Our Story</button>
        <button onClick={() => setActivePage('contact')}>Contact</button>
      </div>

      <div className="footer-social">
        <a href={`https://instagram.com/${brandInfo.instagram.replace('@','')}`} target="_blank" rel="noreferrer">Instagram</a>
        <a href={`https://wa.me/${brandInfo.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} Celuna. All rights reserved.</span>
      <span>Handcrafted with ♡</span>
    </div>
  </footer>
);

export default Footer;
