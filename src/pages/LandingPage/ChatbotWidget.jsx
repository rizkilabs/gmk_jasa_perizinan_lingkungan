import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, Bot, User, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { findBestResponse } from "../../lib/chatbotResponses"; // pastikan path sesuai

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hai 👋 Aku GeoBot! Aku bisa bantu kamu soal perizinan lingkungan seperti AMDAL, UKL-UPL, atau SPPL. Ada yang mau kamu tanyain?",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Scroll otomatis ke bawah
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Fungsi kirim pesan
  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, newUserMsg]);
    const userInput = input;
    setInput("");

    // Simulasi delay bot + ambil jawaban dari chatbotResponses.js
    setTimeout(() => {
      const botReply = findBestResponse(userInput);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="btn btn-toska rounded-circle position-fixed bottom-0 end-0 m-4 p-3 shadow-lg d-flex justify-content-center align-items-center"
        style={{
          zIndex: 999,
          transition: "transform 0.2s",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}
        aria-label="Toggle chat"
      >
        <MessageCircle size={28} color="white" />
      </button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="card shadow-lg border-0 rounded-4 position-fixed"
            style={{
              width: "360px",
              height: minimized ? "60px" : "500px",
              right: "1.5rem",
              bottom: "6rem",
              zIndex: 1000,
              overflow: "hidden",
              fontFamily: "'Poppins', sans-serif",
              transition: "height 0.3s ease",
            }}
          >
            {/* Header */}
            <div
              className="p-3 text-white d-flex align-items-center justify-content-between"
              style={{
                background: "linear-gradient(135deg, var(--primary), #00acc1)",
              }}
            >
              <div className="d-flex align-items-center gap-2">
                <div
                  className="bg-white text-toska rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: 30, height: 30 }}
                >
                  <Bot size={18} color="var(--primary)" />
                </div>
                <h6 className="fw-bold mb-0">GeoBot 🤖</h6>
              </div>
              <button
                onClick={() => setMinimized(!minimized)}
                className="btn btn-sm btn-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 26, height: 26 }}
                title={minimized ? "Maximize" : "Minimize"}
              >
                <Minus size={16} />
              </button>
            </div>

            {/* Chat Area */}
            {!minimized && (
              <div
                className="p-3 d-flex flex-column gap-2 overflow-auto"
                style={{
                  height: "380px",
                  backgroundColor: "#f8f9fa",
                  scrollBehavior: "smooth",
                }}
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`d-flex ${
                      msg.sender === "user"
                        ? "justify-content-end"
                        : "justify-content-start"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <div
                        className="me-2 bg-toska text-white rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: 32, height: 32 }}
                      >
                        <Bot size={16} />
                      </div>
                    )}
                    <div
                      className={`p-2 rounded-3 shadow-sm ${
                        msg.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-white"
                      }`}
                      style={{
                        maxWidth: "75%",
                        border:
                          msg.sender === "bot" ? "1px solid #e0e0e0" : "none",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {msg.text}
                    </div>
                    {msg.sender === "user" && (
                      <div
                        className="ms-2 bg-secondary text-white rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: 32, height: 32 }}
                      >
                        <User size={16} />
                      </div>
                    )}
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            )}

            {/* Input Area */}
            {!minimized && (
              <div className="p-2 border-top d-flex align-items-center gap-2 bg-white">
                <textarea
                  className="form-control flex-grow-1"
                  placeholder="Tulis pesan..."
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !e.shiftKey && handleSend()
                  }
                  style={{ resize: "none", fontSize: "0.9rem" }}
                ></textarea>
                <button
                  onClick={handleSend}
                  className="btn btn-toska d-flex align-items-center justify-content-center"
                  style={{ width: 42, height: 42 }}
                >
                  <Send size={18} />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
