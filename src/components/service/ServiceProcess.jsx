// src/components/service/ServiceProcess.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ServiceProcess({ service }) {
  const proses = service.detail?.proses || [];

  if (!proses || proses.length === 0) return null;

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <h5 className="fw-bold mb-2">Alur Proses Kerja</h5>
      <ol style={{ marginBottom: 0, paddingLeft: "1.2rem" }}>
        {proses.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ol>
    </motion.div>
  );
}
