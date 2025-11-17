// src/components/service/ServiceSidebar.jsx
import React from "react";
import { motion } from "framer-motion";
import { getReactIcon } from "../../lib/iconMap";
import { Link } from "react-router-dom";

export default function ServiceSidebar({ service, onOpenEstimator }) {
  const IconComp = getReactIcon(service.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="d-flex flex-column gap-3"
    >
      {/* Service Info Card */}
      <div className="service-card">
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="service-icon" aria-hidden>
              <IconComp size={28} />
            </div>
          </div>

          <div>
            <h5 style={{ margin: 0 }}>{service.title}</h5>
            <div style={{ fontSize: 13, opacity: 0.8 }}>{service.category}</div>
          </div>
        </div>

        <hr style={{ margin: "12px 0" }} />

        {/* Time Info */}
        <div style={{ fontSize: 14, lineHeight: 1.6 }}>
          <strong>Estimasi Waktu:</strong> {service.detail?.waktu || "-"}
        </div>

        {/* Highlights */}
        {service.detail?.manfaat && service.detail.manfaat.length > 0 && (
          <>
            <hr style={{ margin: "12px 0" }} />
            <div style={{ fontSize: 14 }}>
              <strong>Highlight:</strong>
              <ul style={{ paddingLeft: "1.1rem", marginTop: 8 }}>
                {service.detail.manfaat.slice(0, 4).map((m, i) => (
                  <li key={i} style={{ fontSize: 13 }}>
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Buttons */}
        <div className="d-flex gap-2 mt-3">
          <a
            className="btn btn-toska flex-grow-1"
            style={{ color: "black" }}
            href={`https://wa.me/6281315816277?text=${encodeURIComponent(
              `Halo, saya ingin tanya tentang: ${service.title}`
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Hubungi
          </a>

          <Link
            to="/dashboard"
            state={{ serviceSlug: service.slug }}
            className="btn btn-light"
            style={{ whiteSpace: "nowrap" }}
          >
            Ajukan
          </Link>
        </div>

        {/* Estimator Button */}
        <button
          className="btn btn-outline-primary w-100 mt-3"
          onClick={onOpenEstimator}
        >
          Estimasi Biaya
        </button>
      </div>
    </motion.div>
  );
}
