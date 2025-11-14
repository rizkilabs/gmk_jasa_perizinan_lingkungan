// src/pages/dashboard/Topbar.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { SunMoon, Plus } from "lucide-react";

export default function Topbar({ setCollapsed }) {
  const theme = useStore((s) => s.theme);
  const toggleTheme = useStore((s) => s.toggleTheme);
  const navigate = useNavigate();
  const loc = useLocation();

  const title = loc.pathname.includes("permit")
    ? "Permintaan Izin"
    : loc.pathname.includes("chatbot")
    ? "Chatbot Logs"
    : "Dashboard Overview";

  return (
    <header
      className="d-flex align-items-center justify-content-between px-4 py-2 border-bottom"
      style={{ background: "transparent" }}
    >
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => setCollapsed((c) => !c)}
        >
          ☰
        </button>
        <h5 className="mb-0">{title}</h5>
      </div>

      <div className="d-flex align-items-center gap-2">
        <button
          className="btn btn-toska btn-sm d-flex align-items-center gap-2"
          onClick={() => navigate("/dashboard/permit?mode=add")}
        >
          <Plus size={16} /> Tambah
        </button>

        <button
          className="btn btn-sm btn-light"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          <SunMoon size={16} />
        </button>
      </div>
    </header>
  );
}
