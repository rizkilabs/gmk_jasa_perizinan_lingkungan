import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, COLORS } from "../lib/constants";

function Navbar() {
  const { pathname } = useLocation();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [shrink, setShrink] = useState(false);

  // Shrink effect saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.body.classList.toggle("dark-mode", nextMode);
    localStorage.setItem("darkMode", nextMode);
  };

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
  }, [darkMode]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top px-4 py-3 shadow-sm ${
        darkMode ? "navbar-glass dark" : "navbar-glass"
      } ${shrink ? "navbar-shrink" : ""}`}
      style={{
        zIndex: 1000, // 🧱 pastiin di atas HeroSection
        backgroundColor: shrink
          ? darkMode
            ? "rgba(0,0,0,0.8)"
            : "rgba(255,255,255,0.85)"
          : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand fw-bold"
          style={{
            color: COLORS.primary,
            textShadow: "0 0 8px rgba(0,191,166,0.8)",
          }}
        >
          GeoMandiri
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {NAV_LINKS.map((link) => (
              <li className="nav-item mx-2" key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${
                    pathname === link.path ? "active fw-semibold" : ""
                  }`}
                  style={{
                    color:
                      pathname === link.path
                        ? COLORS.primary
                        : darkMode
                        ? COLORS.light
                        : COLORS.dark,
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="nav-item mx-3">
              <button
                className="dark-toggle"
                onClick={toggleDarkMode}
                title="Toggle Dark Mode"
              >
                {darkMode ? "🌙" : "☀️"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
