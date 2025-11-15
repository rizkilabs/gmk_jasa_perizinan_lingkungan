// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS, COLORS } from "../lib/constants";
import useStore from "../hooks/useStore";

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [shrink, setShrink] = useState(false);
  const userLoggedIn = useStore((s) => s.userLoggedIn);
  const logout = useStore((s) => s.logout);

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
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

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top px-4 py-3 shadow-sm ${
        darkMode ? "navbar-glass dark" : "navbar-glass"
      } ${shrink ? "navbar-shrink" : ""}`}
      style={{
        zIndex: 1000,
        backgroundColor: shrink
          ? darkMode
            ? "rgba(0,0,0,0.8)"
            : "rgba(255,255,255,0.85)"
          : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container-fluid">
        {/* Brand */}
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

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {/* Dynamic nav links */}
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

            {/* Auth button */}
            {/* Auth button */}
            {userLoggedIn ? (
              <li className="nav-item mx-2">
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              pathname !== "/register" && (
                <li className="nav-item mx-2">
                  {/* SIGN UP BUTTON (baru) */}
                  <Link
                    className="btn px-4 py-2 text-white"
                    to="/register"
                    style={{
                      backgroundColor: COLORS.primary,
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                      e.target.style.boxShadow =
                        "0 4px 12px rgba(0,191,166,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    Pendaftaran
                  </Link>
                </li>
              )
            )}

            {/* Dark Mode Toggle */}
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
