import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Collections from "./components/Collections";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activePage, setActivePage] = useState("home");

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar activePage={activePage} setActivePage={navigate} />

      {/* HOME PAGE */}
      {activePage === "home" && (
        <>
          <Hero setActivePage={navigate} />
          <Marquee />
          <Collections setActivePage={navigate} />
          <Story />
          <Contact />
        </>
      )}

      {/* COLLECTIONS PAGE */}
      {activePage === "collections" && (
        <div style={{ paddingTop: "80px" }}>
          <Collections setActivePage={navigate} />
        </div>
      )}

      {/* STORY PAGE */}
      {activePage === "story" && (
        <div style={{ paddingTop: "80px" }}>
          <Story />
        </div>
      )}

      {/* CONTACT PAGE */}
      {activePage === "contact" && (
        <div style={{ paddingTop: "80px" }}>
          <Contact />
        </div>
      )}

      <Footer setActivePage={navigate} />
    </div>
  );
}

export default App;
