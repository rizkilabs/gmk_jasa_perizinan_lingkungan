// src/components/service/ServiceDocuments.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ServiceDocuments({ service }) {
  const dok = service.detail?.dokumen || [];

  if (!dok || dok.length === 0) return null;

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h5 className="fw-bold mb-2">Dokumen yang Dibutuhkan</h5>
      <ul style={{ marginBottom: 0, paddingLeft: "1.2rem" }}>
        {dok.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </motion.div>
  );
}
