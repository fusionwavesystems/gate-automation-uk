"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    text: "The Elite Sliding Gate is a game changer. Super quiet and the app control is flawless. Highly recommended!"
  },
  {
    name: "Sarah Smith",
    rating: 5,
    text: "Excellent service and top-notch technology. The installation was quick and professional. Great job!"
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "Secure, reliable, and looks amazing. It has definitely added value and security to my property."
  },
  {
    name: "Emily Wilson",
    rating: 5,
    text: "I love the automatic closing feature. I never have to worry about if I closed the gate or not."
  },
  {
    name: "David Brown",
    rating: 5,
    text: "The camera integration is very useful. I can see visitors even when I'm not at home. Very happy with the purchase."
  }
];

// Duplicate reviews for infinite scroll
const duplicatedReviews = [...reviews, ...reviews, ...reviews];

const GoogleReviews = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold font-display text-text-primary mb-4"
        >
          Trusted by Our Customers
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 80 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-1 bg-primary mx-auto rounded-full"
        />
      </div>

      <div className="relative">
        {/* Continuous scrolling container */}
        <motion.div 
          className="flex space-x-4 md:space-x-6 w-max"
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50, // Slightly slower for better readability
              ease: "linear",
            },
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <div 
              key={index}
              className="w-[280px] md:w-[350px] bg-white p-6 md:p-8 rounded-[2rem] md:rounded-3xl shadow-lg border border-slate-50 flex flex-col"
            >
              <div className="flex text-yellow-400 mb-4 text-sm md:text-base">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm md:text-base text-text-primary italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-text-primary text-sm md:text-base">{review.name}</p>
                <p className="text-[10px] md:text-xs text-text-muted">Verified Customer</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default GoogleReviews;
