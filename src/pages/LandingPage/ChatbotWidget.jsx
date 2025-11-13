import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="btn btn-toska rounded-circle position-fixed bottom-0 end-0 m-4 p-3 shadow-lg"
        style={{ zIndex: 999 }}
      >
        <MessageCircle size={24} color="white" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="card position-fixed bottom-5 end-5 shadow-lg p-3"
            style={{ width: "300px", height: "400px", zIndex: 998 }}
          >
            <h6 className="fw-bold mb-2">GeoBot 🤖</h6>
            <div className="text-muted small mb-3">
              Hi! Ada yang bisa saya bantu hari ini?
            </div>
            <textarea
              className="form-control mb-2"
              placeholder="Tulis pesan..."
              rows={3}
            ></textarea>
            <button className="btn btn-toska w-100">Kirim</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
