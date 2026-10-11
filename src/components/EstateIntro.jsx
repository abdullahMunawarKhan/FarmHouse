// src/components/EstateIntro.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/propertyContent';

export default function EstateIntro() {
  const { title, description, image } = content.estateIntro;
  return (
    <section id="estate-intro" className="py-16 bg-bgSecondary text-textPrimary">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <motion.img
          src={image}
          alt="Estate introduction"
          className="w-full lg:w-1/2 rounded-lg shadow-lg mb-8 lg:mb-0 lg:mr-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-heading mb-4">{title}</h2>
          <p className="text-lg leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
