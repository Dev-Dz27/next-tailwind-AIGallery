import { motion } from "framer-motion";
const Button = ({ children, className, onClick }) => {
  return (
    <motion.a
      className={`p-3 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

export default Button;
