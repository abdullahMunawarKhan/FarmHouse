// src/components/Experiences.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/propertyContent';

export default function Experiences() {
  return (
    <section id="experiences" className="py-16 bg-bgPrimary text-textPrimary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading text-center mb-12">Experiences</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {content.experiences.items.map((item) => (
            <motion.div
              key={item.id}
              className="p-6 bg-bgSecondary rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: item.id * 0.1 }}
            >
              <h3 className="text-xl font-heading mb-2" id={`experience-${item.id}`}>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
