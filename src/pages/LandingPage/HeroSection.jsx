import React from "react";
import { motion } from "framer-motion";
import MotionWrapper from "../../components/MotionWrapper";

const HeroSection = () => {
  return (
    <section
      className="position-relative d-flex align-items-center justify-content-center text-center text-white overflow-hidden"
      style={{
        height: "100vh",
        backgroundColor: "#000",
        paddingTop: "80px", // 🧩 nambah jarak dikit di bawah navbar
      }}
    >
      {/* 🎬 Background Video */}
      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          zIndex: 0, // 🧩 ini penting
        }}
      >
        <video
          src="/assets/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%) scale(1.28)", // 👈 zoom dikit
            zIndex: 0,
          }}
        ></video>

        {/* 🌈 Gradient Overlay biar lebih soft */}
        <motion.div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
            zIndex: 1,
            pointerEvents: "none", // penting juga!
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.6, duration: 1 }}
        ></motion.div>
      </motion.div>

      {/* ✨ Hero Content */}
      <MotionWrapper>
        <motion.div
          className="px-3"
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "700px",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="fw-bold mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: "1.3",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Solusi AI untuk Lingkungan yang Lebih Baik 🌿
          </motion.h1>

          <motion.p
            className="lead mb-4"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Kami bantu perusahaan wujudkan kepatuhan lingkungan dengan mudah dan
            cepat.
          </motion.p>

          <motion.a
            href="#layanan"
            className="btn btn-toska px-4 py-2"
            style={{
              fontWeight: 600,
              fontSize: "1.1rem",
              borderRadius: "50px",
              padding: "0.75rem 2rem",
              boxShadow: "0 4px 15px rgba(32, 201, 151, 0.3)",
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 25px rgba(32, 201, 151, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Lihat Layanan
          </motion.a>
        </motion.div>
      </MotionWrapper>
    </section>
  );
};

export default HeroSection;
