"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import ScrollGate from './ScrollGate';

const images = [
  '/images/hero-1.png',
  '/images/hero-2.png',
  '/images/hero-3.png',
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Scroll lock for first 2 seconds
    document.body.style.overflow = 'hidden';
    const lockTimer = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 2000);

    // Auto slideshow
    const slideTimer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      clearTimeout(lockTimer);
      clearInterval(slideTimer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <ScrollGate />
      {/* Background Slideshow */}
      <AnimatePresence mode="alternate">
        <motion.div
          key={current}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{
            duration: 2,
            ease: [0.4, 0, 0.2, 1] // Custom cubic-bezier for smoother feel
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[current]})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="flex flex-col font-display font-black leading-tight mb-4 md:mb-8">
            <span className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter">
              Smart Gate
            </span>
            <span className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-primary uppercase tracking-tighter -mt-1 md:-mt-2">
              Automation
            </span>
          </h1>
          <p className="text-base md:text-xl text-slate-200 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Secure, modern and intelligent gate systems for homes and businesses. Experience the future of entry control.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/models"
              className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
            >
              Explore Gate Models
            </Link>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-whatsapp text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-whatsapp/90 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-whatsapp/20 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-2xl" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full ${current === idx ? 'w-8 bg-primary' : 'w-2 bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSlider;
