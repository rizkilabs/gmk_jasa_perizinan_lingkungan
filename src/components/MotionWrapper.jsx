import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({ children }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "relative", // biar nggak bikin layer global
        zIndex: 0, // biar nggak nutup navbar
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
