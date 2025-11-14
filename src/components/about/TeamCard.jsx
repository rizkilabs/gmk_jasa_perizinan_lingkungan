import { motion } from "framer-motion";

const TeamCard = ({ name, role, img }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center p-3 bg-white rounded-4 shadow-sm border"
    >
      <img
        src={img}
        alt={name}
        className="rounded-circle mb-3"
        style={{ width: 90, height: 90, objectFit: "cover" }}
      />
      <h6 className="fw-bold">{name}</h6>
      <p className="text-muted small">{role}</p>
    </motion.div>
  );
};
export default TeamCard;
