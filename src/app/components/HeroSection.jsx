// components/HeroSection.jsx
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center justify-center bg-gray-100"
    >
      <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
    </motion.div>
  );
}
