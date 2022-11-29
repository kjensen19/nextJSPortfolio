import { motion } from "framer-motion";

const MotionLayout = ({ children }) => (
  <motion.div
  


//   animate={{
//     scale: [1, 2, 2, 1, 1],
//     rotate: [0, 0, 270, 270, 0],
//     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
//   }}
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);
export default MotionLayout;