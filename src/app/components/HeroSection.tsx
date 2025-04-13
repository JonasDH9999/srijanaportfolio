// my-portfolio/src/app/components/HeroSection.tsx
"use client";

import { motion } from 'framer-motion';
import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-600">This is my awesome hero section.</p>
    </motion.div>
  );
};

export default HeroSection;
