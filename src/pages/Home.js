// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container-v3">
      <header className="home-header-v3">
        <div className="logo-container-v3">
          <div className="logo-placeholder"></div>
          <span className="app-name-v3">Your Creative Space</span>
        </div>
      </header>

      <main className="home-main-v3">
        <div className="hero-section-v3">
          <div className="hero-text-v3">
            <h1 className="hero-title-v3">Welcome to Our World of Innovation</h1>
            <p className="hero-subtitle-v3">
              Unleash your potential and get started with amazing thoughts of your creation.
            </p>
            <div className="hero-buttons-v3">
              <button className="primary-button-v3" onClick={() => navigate("/signup")}>
                Get Started
              </button>
              <button className="secondary-button-v3" onClick={() => navigate("/login")}>
                Already have an account? Log In
              </button>
            </div>
          </div>
          <div className="hero-visual-v3">
              <div className="abstract-design">
                <div className="cube"></div>
                <div className="sphere"></div>
                <div className="cylinder"></div>
              </div>
          </div>
        </div>


        <div className="background-animation-v3">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </main>

      <footer className="home-footer-v3">
        <p>&copy; {new Date().getFullYear()} Your Creative Space. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;