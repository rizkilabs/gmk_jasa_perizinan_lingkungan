import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ServiceCard({ icon, title, desc, slug }) {
  const navigate = useNavigate();

  // fade+scale animation
  const cardAnim = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      variants={cardAnim}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="service-card"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/layanan/${slug}`)}
    >
      <div className="service-icon">{icon}</div>

      <h4 className="service-title">{title}</h4>
      <p className="service-desc">{desc}</p>
    </motion.div>
  );
}

export default ServiceCard;
