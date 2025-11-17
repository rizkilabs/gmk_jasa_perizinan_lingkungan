import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import MotionWrapper from "../../components/MotionWrapper";

const HeroSection = () => {
  // load hero content from localStorage
  const savedHero = JSON.parse(localStorage.getItem("heroContent") || "{}");

  // fallback default content
  const titleText =
    savedHero.title || "Solusi untuk Lingkungan yang Lebih Baik 🌿";

  const subtitleText =
    savedHero.subtitle ||
    "Kami bantu perusahaan wujudkan kepatuhan lingkungan dengan mudah dan cepat.";

  return (
    <section
      className="position-relative d-flex align-items-center justify-content-center text-center text-white overflow-hidden"
      style={{
        height: "100vh",
        backgroundColor: "#000",
        paddingTop: "80px",
      }}
    >
      {/* Background video */}
      <motion.div
        className="position-absolute top-0 start-0 w-100 h-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ zIndex: 0 }}
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
            transform: "translate(-50%, -50%) scale(1.28)",
            zIndex: 0,
          }}
        ></video>

        <motion.div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.6, duration: 1 }}
        ></motion.div>
      </motion.div>

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
          {/* TITLE */}
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
            <Typewriter
              options={{
                strings: [titleText], // dynamic text
                autoStart: true,
                loop: true,
                deleteSpeed: 60,
                delay: 50,
                pauseFor: 1200,
              }}
            />
          </motion.h1>

          {/* SUBTITLE */}
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
            {subtitleText}
          </motion.p>

          {/* CTA BUTTON */}
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
