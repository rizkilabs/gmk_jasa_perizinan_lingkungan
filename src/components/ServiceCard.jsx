import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, desc }) => (
  <motion.div
    className="card shadow-sm text-center p-4 border-0"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div className="mb-3 fs-1 text-toska">{icon}</div>
    <h5 className="fw-bold mb-2">{title}</h5>
    <p className="text-muted">{desc}</p>
  </motion.div>
);

export default ServiceCard;
