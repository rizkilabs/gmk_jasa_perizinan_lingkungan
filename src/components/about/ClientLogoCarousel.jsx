import { motion } from "framer-motion";

const ClientLogoCarousel = ({ logos }) => {
  return (
    <div className="overflow-hidden py-3">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="d-flex gap-5"
      >
        {[...logos, ...logos].map((logo, i) => (
          <img
            src={logo}
            key={i}
            alt="client-logo"
            style={{ height: 40, opacity: 0.9 }}
          />
        ))}
      </motion.div>
    </div>
  );
};
export default ClientLogoCarousel;
