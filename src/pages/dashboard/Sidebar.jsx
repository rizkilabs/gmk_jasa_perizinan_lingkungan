// src/pages/dashboard/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Home, List, MessageSquare, PlusSquare, LogIn } from "lucide-react";
import { useStore } from "../../hooks/useStore";

/**
 * Sidebar with nav links. Collapsible through 'collapsed' prop.
 */
export default function Sidebar({ collapsed, setCollapsed }) {
  const logout = useStore((s) => s.logout);
  const login = useStore((s) => s.login);

  return (
    <aside
      className="d-flex flex-column position-fixed h-100"
      style={{
        width: collapsed ? 80 : 250,
        // background: "linear-gradient(180deg,#ffffff,#f7f9fb)",
        borderRight: "1px solid rgba(0,0,0,0.05)",
        transition: "width 0.25s",
        zIndex: 1030,
      }}
    >
      <div className="p-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              background: "#00bfa6",
            }}
          />
          {!collapsed && <strong>GeoEnv Admin</strong>}
        </div>
        <button
          className="btn btn-sm btn-light"
          onClick={() => setCollapsed((c) => !c)}
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav className="flex-grow-1">
        <ul className="nav flex-column p-2">
          <li className="nav-item">
            <NavLink
              className="nav-link d-flex align-items-center gap-2 py-2"
              to="/dashboard"
            >
              <Home size={18} />
              {!collapsed && <span>Overview</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link d-flex align-items-center gap-2 py-2"
              to="/dashboard/permit"
            >
              <List size={18} />
              {!collapsed && <span>Permintaan Izin</span>}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link d-flex align-items-center gap-2 py-2"
              to="/dashboard/chatbot"
            >
              <MessageSquare size={18} />
              {!collapsed && <span>Chatbot Logs</span>}
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink
              className="nav-link d-flex align-items-center gap-2 py-2"
              to="/dashboard/permit?mode=add"
            >
              <PlusSquare size={18} />
              {!collapsed && <span>Tambah Izin</span>}
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="p-3 border-top">
        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-secondary btn-sm flex-grow-1"
            onClick={() => login()}
          >
            <LogIn size={14} /> {!collapsed && <span>Login</span>}
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => logout()}
          >
            {!collapsed ? "Logout" : "⎋"}
          </button>
        </div>
      </div>
    </aside>
  );
}
