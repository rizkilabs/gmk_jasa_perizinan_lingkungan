// src/pages/Dashboard.jsx
import React from "react";
import Layout from "../components/Layout";
import MotionWrapper from "../components/MotionWrapper";
import { useStore } from "../hooks/useStore";

function Dashboard() {
  // Using selector pattern for better performance
  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);
  const chatbotVisible = useStore((state) => state.chatbotVisible);
  const toggleChatbot = useStore((state) => state.toggleChatbot);

  return (
    <Layout>
      <MotionWrapper>
        <div className="container py-5">
          <h1 className="mb-4">Dashboard</h1>
          <p className="mb-3">Theme: {theme}</p>

          <button className="btn btn-primary me-2" onClick={toggleTheme}>
            Toggle Theme
          </button>

          <button className="btn btn-secondary" onClick={toggleChatbot}>
            Toggle Chatbot ({chatbotVisible ? "On" : "Off"})
          </button>
        </div>
      </MotionWrapper>
    </Layout>
  );
}

export default Dashboard;
