// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ServiceList from "./pages/ServiceList";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DashboardRoutes from "./pages/dashboard/index.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useStore } from "./hooks/useStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <>
      {/* GLOBAL TOAST (WAJIB ADA DI SINI) */}
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/layanan" element={<ServiceList />} />
          <Route path="/layanan/:slug" element={<ServiceDetail />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
