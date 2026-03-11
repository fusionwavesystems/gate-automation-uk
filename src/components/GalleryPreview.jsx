"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { galleryImages } from '@/data/galleryImages';

const GalleryPreview = () => {
  // Show only first 6 images for preview
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="relative py-24 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-text-primary mb-6 uppercase tracking-tighter"
          >
            Project <span className="text-primary italic-none">Showcase</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 120 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-2 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 auto-rows-[400px]">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white ${index === 1 || index === 4 ? 'row-span-1 lg:h-[500px] lg:-mt-24' : 'row-span-1'
                }`}
            >
              <Image
                src={image.imageUrl}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center bg-slate-900 text-white font-bold px-10 py-4 rounded-full hover:bg-slate-800 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-slate-200"
          >
            Explore Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
