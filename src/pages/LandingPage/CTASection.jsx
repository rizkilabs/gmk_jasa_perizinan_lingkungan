import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  // Nomor WhatsApp dan pesan otomatis
  const whatsappNumber = "6281315816277"; // Ganti dengan nomor lu
  const message = encodeURIComponent(
    "Halo, saya mau konsultasi tentang kepatuhan lingkungan."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="position-relative cta-section text-center text-white py-5 cta-animated-bg">
      {/* Overlay supaya teks kontras */}
      <div className="cta-overlay"></div>

      <motion.div
        className="position-relative container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="fw-bold display-5 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "linear-gradient(90deg, #a7ffeb, #e0f7fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Siap Wujudkan Kepatuhan Lingkungan?
        </motion.h2>

        <p className="lead mb-4">Konsultasi gratis untuk semua jenis usaha!</p>

        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-light btn-lg fw-semibold text-toska cta-button d-inline-flex align-items-center gap-2"
        >
          Konsultasi Gratis
          <FaArrowRight />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CTASection;
