import React from "react";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="bg-toska text-white text-center py-5">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Siap Wujudkan Kepatuhan Lingkungan?
    </motion.h2>
    <p className="mb-4">Konsultasi gratis untuk semua jenis usaha!</p>
    <a href="#kontak" className="btn btn-light">
      Konsultasi Gratis
    </a>
  </section>
);

export default CTASection;
