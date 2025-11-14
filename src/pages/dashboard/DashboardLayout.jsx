// src/pages/dashboard/DashboardLayout.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import { useStore } from "../../hooks/useStore";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const theme = useStore((s) => s.theme);

  useEffect(() => {
    // Add/remove class on body
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <div className={`d-flex vh-100 ${collapsed ? "sidebar-collapsed" : ""}`}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className="flex-grow-1 d-flex flex-column"
        style={{
          marginLeft: collapsed ? "80px" : "250px",
          transition: "margin 0.25s",
        }}
      >
        <Topbar setCollapsed={setCollapsed} />

        <main
          className="flex-grow-1 overflow-auto"
          style={{ padding: "1.5rem" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
