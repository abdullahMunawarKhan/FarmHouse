// src/components/Amenities.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/propertyContent';

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 bg-bgPrimary text-textPrimary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading text-center mb-12">Our Amenities</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.amenities.map((item) => (
            <motion.div
              key={item.id}
              className="bg-bgSecondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: item.id * 0.1 }}
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-heading mb-2" id={`amenity-${item.id}`}>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
