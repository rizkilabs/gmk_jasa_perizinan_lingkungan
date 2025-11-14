import { motion } from "framer-motion";

const TimelineItem = ({ year, title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="p-4 bg-white rounded-4 shadow-sm border mb-3"
    >
      <h5 className="fw-bold text-primary">{year}</h5>
      <h6 className="fw-semibold">{title}</h6>
      <p className="text-muted mb-0">{desc}</p>
    </motion.div>
  );
};
export default TimelineItem;
