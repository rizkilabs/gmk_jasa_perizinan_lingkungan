import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import all icons you need
import { Leaf, Building2, Factory } from "lucide-react";

// Map string → icon component
const iconMap = {
  Leaf,
  Building2,
  Factory,
};

function ServiceCard({ icon, title, desc, slug }) {
  const navigate = useNavigate();

  // Fade + scale animation
  const cardAnim = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  // Convert string icon to JSX component
  const IconComp = iconMap[icon];

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
      <div className="service-icon">
        {/* Render icon dynamically */}
        {IconComp && <IconComp size={40} />}
      </div>

      <h4 className="service-title">{title}</h4>
      <p className="service-desc">{desc}</p>
    </motion.div>
  );
}

export default ServiceCard;
