import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.section
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <h1 className="text-7xl font-bold dark:text-white text-black">
        Welcome To the{" "}
        <span className="dark:text-purple-600 text-purple-500 ">
          AI Gellery
        </span>
      </h1>
      <h3 className="text-4xl my-3">None of the pictures are REAL</h3>
      <p className="text-gray-700 mb-8">
        To view the full size of the image, simply click on it{" "}
      </p>
      <a
        className="bg-purple-600 py-3 rounded-xl text-white px-6 cursor-pointer hover:ring-2 hover:ring-gray-300"
        href="#Gallery"
      >
        Take a Look!
      </a>
    </motion.section>
  );
};

export default Hero;
