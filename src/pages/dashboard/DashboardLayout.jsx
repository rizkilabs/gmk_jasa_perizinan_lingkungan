// src/pages/dashboard/DashboardLayout.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import { useStore } from "../../hooks/useStore";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const theme = useStore((s) => s.theme);

  useEffect(() => {
    // Apply theme to body
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <div
      className={`d-flex min-vh-100 ${collapsed ? "sidebar-collapsed" : ""}`}
      style={{
        backgroundColor: theme === "dark" ? "#252525" : "#f5f5f5",
        transition: "all 0.25s ease",
      }}
    >
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main area */}
      <div
        className="flex-grow-1 d-flex flex-column"
        style={{
          marginLeft: collapsed ? "80px" : "250px",
          transition: "margin 0.25s ease",
        }}
      >
        {/* Topbar */}
        <TopBar ar setCollapsed={setCollapsed} />

        {/* Page Content */}
        <main
          className="flex-grow-1 overflow-auto"
          style={{
            padding: "1.5rem",
            paddingTop: "1rem",
          }}
        >
          {/* IMPORTANT: Without Outlet, redirect will NOT work */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
