// src/components/service/ServiceHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { getReactIcon } from "../../lib/iconMap";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "6281315816277"; // replace with your WA number

function buildWhatsAppLink(number, text) {
  const encoded = encodeURIComponent(text || "");
  return `https://wa.me/${number}?text=${encoded}`;
}

export default function ServiceHero({ service, navigate }) {
  const IconComp = getReactIcon(service.icon);

  const whatsappText = `Halo, saya ingin bertanya tentang layanan: ${service.title}`;

  return (
    <>
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            padding: "16px 22px",
            borderRadius: 18,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <div className="service-icon" style={{ fontSize: 54 }}>
            <IconComp size={54} />
          </div>
          <div style={{ textAlign: "left" }}>
            <h1 className="service-title-section mb-1" style={{ fontSize: 26 }}>
              {service.title}
            </h1>
            <div className="service-desc-section">{service.shortDesc}</div>
            <div style={{ fontSize: 13, marginTop: 6, opacity: 0.75 }}>
              Kategori: {service.category}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA group */}
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        <a
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent("openChatbot", {
                detail: {
                  message: `Saya ingin konsultasi gratis mengenai: ${service.title}`,
                  autoSend: true,
                },
              })
            );
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          target="_blank"
          rel="noreferrer"
          className="btn btn-toska"
        >
          {service.detail?.cta?.whatsapp || "Hubungi Kami"}
        </a>

        <a
          href="https://drive.google.com/drive/folders/16zMbUZwZjQCjWHdgIixPQUU1Py9VTMnr"
          target="_blank"
          rel="noreferrer"
          className="btn btn-light btn-outline-dark"
          onClick={() => {
            window.scrollTo({
              // top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
        >
          {service.detail?.cta?.konsultasi || "Konsultasi Gratis"}
        </a>

        <Link
          to="/dashboard"
          className="btn btn-light btn-outline-dark"
          // onClick={() =>
          //   navigate("/login", {
          //     state: { serviceSlug: service.slug, serviceId: service.id },
          //   })
          // }
        >
          {service.detail?.cta?.form || "Ajukan Layanan"}
        </Link>
      </div>
    </>
  );
}
