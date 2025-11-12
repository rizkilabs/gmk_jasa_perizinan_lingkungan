import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, COLORS } from "../lib/constants";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg px-4 py-3 shadow-sm"
      style={{ backgroundColor: COLORS.light }}
    >
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand fw-bold"
          style={{ color: COLORS.primary }}
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
          <ul className="navbar-nav ms-auto">
            {NAV_LINKS.map((link) => (
              <li className="nav-item mx-2" key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${
                    pathname === link.path ? "fw-semibold" : ""
                  }`}
                  style={{
                    color:
                      pathname === link.path ? COLORS.primary : COLORS.dark,
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
