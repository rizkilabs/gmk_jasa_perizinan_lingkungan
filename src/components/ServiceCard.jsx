// src/components/ServiceCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getReactIcon } from "../lib/iconMap"; // adjust for react-icons

function ServiceCard({ icon, title, shortDesc, slug, category }) {
  const navigate = useNavigate();

  // pick icon component
  const IconComp = getReactIcon(icon);

  const cardAnim = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      variants={cardAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, rotate: [0, 1.5] }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 14 }}
      className="service-card"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/layanan/${slug}`)}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, rgba(0,191,166,0.08), rgba(128,222,234,0.06))",
            boxShadow: "0 6px 18px rgba(0,191,166,0.06)",
            flexShrink: 0,
          }}
        >
          {/* icon */}
          <div className="service-icon" aria-hidden>
            <IconComp size={36} />
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              justifyContent: "space-between",
            }}
          >
            <h4 className="service-title" style={{ margin: 0 }}>
              {title}
            </h4>

            <span
              style={{
                fontSize: 12,
                padding: "4px 8px",
                borderRadius: 999,
                background: "rgba(0, 191, 166, 0.08)",
                color: "var(--primary)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 0.6,
              }}
            >
              {category}
            </span>
          </div>

          <p className="service-desc" style={{ marginTop: 8, marginBottom: 0 }}>
            {shortDesc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
