// src/pages/dashboard/Sidebar.jsx
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, List, FileEdit, LogOut } from "lucide-react";
import useStore from "../../hooks/useStore";

export default function Sidebar({ collapsed, setCollapsed }) {
  const logout = useStore((s) => s.logout);
  const user = useStore((s) => s.user); // get user with role
  const navigate = useNavigate();

  const role = user?.role || "user"; // fallback user

  const handleLogout = () => {
    logout();
    localStorage.removeItem("loggedInUser");
    navigate("/login", { replace: true });
  };

  return (
    <aside
      className="d-flex flex-column position-fixed h-100 shadow-sm"
      style={{
        width: collapsed ? 80 : 250,
        borderRight: "1px solid rgba(0,0,0,0.06)",
        transition: "width 0.25s ease",
        zIndex: 1030,
      }}
    >
      {/* LOGO + Collapse Button */}
      <div className="p-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#00bfa6",
            }}
          />
          {!collapsed && <strong style={{ fontSize: 16 }}>GeoEnv Admin</strong>}
        </div>

        <button
          className="btn btn-sm btn-light"
          onClick={() => setCollapsed((c) => !c)}
          style={{ borderRadius: 6 }}
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      {/* MENU */}
      <nav className="flex-grow-1">
        <ul className="nav flex-column px-2">
          {/* Overview */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 py-2 px-2 rounded ${
                  isActive ? "fw-semibold" : ""
                }`
              }
              to="/dashboard"
            >
              <Home size={18} />
              {!collapsed && <span>Overview</span>}
            </NavLink>
          </li>

          {/* Permintaan Izin - visible for all */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 py-2 px-2 rounded ${
                  isActive ? "fw-semibold" : ""
                }`
              }
              to="/dashboard/permit"
            >
              <List size={18} />
              {!collapsed && <span>Permintaan Izin</span>}
            </NavLink>
          </li>

          {/* Edit Content (ADMIN ONLY) */}
          {role === "admin" && (
            <li className="nav-item mt-3">
              <NavLink
                className={({ isActive }) =>
                  `nav-link d-flex align-items-center gap-2 py-2 px-2 rounded ${
                    isActive ? "fw-semibold" : ""
                  }`
                }
                to="/dashboard/edit-content"
              >
                <FileEdit size={18} />
                {!collapsed && <span>Edit Content</span>}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>

      {/* LOGOUT */}
      <div className="p-3 border-top">
        <button
          className="btn btn-outline-danger btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
          onClick={handleLogout}
        >
          <LogOut size={14} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
