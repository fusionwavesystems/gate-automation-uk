"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '@/data/galleryImages';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const GalleryPage = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/images/hero-3.png')",
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-white mb-6 uppercase tracking-tighter"
          >
            Installation <span className="text-primary italic-none">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto"
          >
            Discover the quality and craftsmanship of our automated gate solutions.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border border-white"
              >
                <Image 
                  src={image.imageUrl} 
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GalleryPage;
