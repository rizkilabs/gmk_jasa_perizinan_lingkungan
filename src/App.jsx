// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ServiceList from "./pages/ServiceList";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DashboardRoutes from "./pages/dashboard/index.jsx";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useStore } from "./hooks/useStore";

function App() {
  const theme = useStore((s) => s.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/layanan" element={<ServiceList />} />
        <Route path="/layanan/:slug" element={<ServiceDetail />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* IMPORTANT: use /* so nested routes inside DashboardRoutes work */}
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
