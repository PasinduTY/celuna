import React, { useState } from "react";
import "./Contact.css";
import { brandInfo } from "../data/products";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to a form service like Formspree or EmailJS
    console.log("Form submitted:", form);
    setSent(true);
  };

  return (
    <section className="contact-section">
      <div className="contact-inner">
        {/* Header */}
        <div className="contact-header">
          <span
            className="section-eyebrow"
            style={{ color: "var(--gold-light)" }}
          >
            Get in touch
          </span>
          <h2 className="section-title" style={{ color: "var(--cream)" }}>
            Have something
            <br />
            in mind?
          </h2>
          <div className="gold-divider">
            <span className="moon">☽</span>
          </div>
          <p className="contact-sub">
            Whether you'd love a custom piece, want to know more about a design,
            or simply want to say hello — I'd love to hear from you.
          </p>

          <div className="contact-info">
            <a
              href={brandInfo.facebook}
              className="contact-info-item"
              target="_blank"
              rel="noreferrer"
            >
              <span className="info-icon">📘</span>
              <span>Facebook</span>
            </a>
            <a
              href={`https://instagram.com/${brandInfo.instagram.replace("@", "")}`}
              className="contact-info-item"
              target="_blank"
              rel="noreferrer"
            >
              <span className="info-icon">📷</span>
              <span>{brandInfo.instagram}</span>
            </a>
            <a href={`mailto:${brandInfo.email}`} className="contact-info-item">
              <span className="info-icon">✉️</span>
              <span>{brandInfo.email}</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success">
              <div className="success-moon">☽</div>
              <h3>Thank you!</h3>
              <p>Your message has been sent. I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="e.g. Amara"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="hello@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Phone / WhatsApp (optional)</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+94 XX XXX XXXX"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Tell me about your vision</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="I'm looking for a custom bracelet with..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="form-submit">
                Send Message ✦
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
