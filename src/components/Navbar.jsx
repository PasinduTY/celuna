import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "collections", label: "Collections" },
    { id: "story", label: "Our Story" },
    { id: "contact", label: "Contact" },
  ];

  const handleNav = (id) => {
    setActivePage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <button className="nav-logo" onClick={() => handleNav("home")}>
          <span className="moon-icon">☽</span> CELUNA
        </button>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link ${activePage === link.id ? "active" : ""}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="nav-cta" onClick={() => handleNav("contact")}>
          Custom Order
        </button>

        {/* Mobile hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="mobile-link"
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button className="mobile-cta" onClick={() => handleNav("contact")}>
            Custom Order
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
