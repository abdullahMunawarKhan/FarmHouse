// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="bg-bgPrimary text-textPrimary min-h-screen flex flex-col items-center justify-center">
      <motion.h1
        className="text-5xl font-heading mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Escape the ordinary.
      </motion.h1>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A premium private retreat for unforgettable moments.
      </motion.p>
      <div className="mt-6 space-x-4">
        <a href="#estate-intro" className="px-6 py-2 bg-accent text-bgPrimary rounded hover:bg-accent/80 transition">Explore the Estate</a>
        <a href="#booking" className="px-6 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-bgPrimary transition">Enquire Now</a>
      </div>
    </section>
  );
}
