import React from "react";
import MotionWrapper from "../components/MotionWrapper";
import Layout from "../components/Layout";
import { useStore } from "../hooks/useStore";

function Dashboard() {
  const { theme, toggleTheme, chatbotVisible, toggleChatbot } = useStore();

  return (
    <Layout>
      <MotionWrapper>
        {" "}
        <div className="container py-5">
          <h1>Dashboard</h1>
          <p>Theme: {theme}</p>
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
