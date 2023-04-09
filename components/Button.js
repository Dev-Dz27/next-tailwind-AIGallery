import { motion } from "framer-motion";
const Button = ({ children, className, onClick }) => {
  return (
    <motion.a
      className={`p-3 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, scale: .4 }}
      whileHover={{ scale: 1.28 }}
      whileTap={{ scale: 0.9 }}
      animate={{ opacity: 1, scale: 1.2,  }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.a>
  );
};

export default Button;
