// src/components/service/ServiceContent.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ServiceContent({ service }) {
  const detail = service.detail || {};

  return (
    <>
      <motion.div
        className="service-card"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h4 className="fw-bold mb-3">Tentang Layanan</h4>

        {/* If detail.longDesc is string show; if array show sections */}
        {Array.isArray(detail.longDesc) ? (
          detail.longDesc.map((sec, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              {sec.title && <h6 className="fw-bold">{sec.title}</h6>}
              <p style={{ whiteSpace: "pre-wrap", margin: 0 }}>{sec.body}</p>
            </div>
          ))
        ) : (
          <p style={{ margin: 0, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
            {detail.longDesc || service.shortDesc}
          </p>
        )}
      </motion.div>
    </>
  );
}
