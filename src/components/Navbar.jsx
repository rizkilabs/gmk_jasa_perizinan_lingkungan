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
  const [openDropdown, setOpenDropdown] = useState(false);

  const userLoggedIn = useStore((s) => s.userLoggedIn);
  const logout = useStore((s) => s.logout);

  // Split NAV_LINKS
  const tentangIndex = NAV_LINKS.findIndex((l) => l.name === "Tentang");
  const beforeTentang = NAV_LINKS.slice(0, tentangIndex); // Beranda, Layanan
  const afterTentang = NAV_LINKS.slice(tentangIndex + 1); // Kontak, Dashboard

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const mode = !darkMode;
    setDarkMode(mode);
    document.body.classList.toggle("dark-mode", mode);
    localStorage.setItem("darkMode", mode);
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {/* BEFORE TENTANG */}
            {beforeTentang.map((link) => (
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

            {/* DROPDOWN TENTANG */}
            <li className="nav-item dropdown mx-2 position-relative">
              <button
                className="btn nav-link"
                onClick={() => setOpenDropdown(!openDropdown)}
                style={{
                  color: pathname.includes("tentang")
                    ? COLORS.primary
                    : darkMode
                    ? COLORS.light
                    : COLORS.dark,
                  cursor: "pointer",
                }}
              >
                Tentang ▾
              </button>

              <ul
                className="dropdown-menu"
                style={{
                  display: openDropdown ? "block" : "none",
                  marginTop: "6px",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  backgroundColor: darkMode ? "#333" : "#fff",
                }}
              >
                <li style={{ marginBottom: "6px" }}>
                  <Link
                    className="dropdown-item drop"
                    to="/tentang"
                    style={{ color: darkMode ? "#fff" : "#000" }}
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li style={{ marginBottom: "6px" }}>
                  <Link
                    className="dropdown-item"
                    to="/portfolio"
                    style={{ color: darkMode ? "#fff" : "#000" }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/dokumentasi"
                    style={{ color: darkMode ? "#fff" : "#000" }}
                  >
                    Dokumentasi
                  </Link>
                </li>
              </ul>
            </li>

            {/* AFTER TENTANG */}
            {afterTentang.map((link) => (
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

            {/* AUTH */}
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
                  <Link
                    className="btn px-4 py-2 text-white"
                    to="/register"
                    style={{
                      backgroundColor: COLORS.primary,
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Pendaftaran
                  </Link>
                </li>
              )
            )}

            <li className="nav-item mx-3">
              <button className="dark-toggle" onClick={toggleDarkMode}>
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
