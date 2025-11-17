import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatbotWidget from "../pages/LandingPage/ChatbotWidget";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-vh-100">{children}</main>
      <Footer />
      <ChatbotWidget />
    </>
  );
}

export default Layout;
