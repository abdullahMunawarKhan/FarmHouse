// src/components/Gallery.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/propertyContent';

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-bgSecondary text-textPrimary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading text-center mb-12">Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {content.gallery.images.map((src, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
