"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaKey, FaCloudSun, FaShieldAlt, FaClock, FaVideo } from 'react-icons/fa';

const features = [
  {
    icon: <FaMobileAlt />,
    title: 'Smartphone Control',
    text: 'Open and close your gate from anywhere using our dedicated mobile app.'
  },
  {
    icon: <FaKey />,
    title: 'Remote Access',
    text: 'Grant temporary access to guests or deliveries with secure digital keys.'
  },
  {
    icon: <FaCloudSun />,
    title: 'Weather Resistant',
    text: 'Our systems are built to withstand extreme temperatures and harsh weather.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'High Security Motors',
    text: 'Robust motor design with anti-pry technology for maximum protection.'
  },
  {
    icon: <FaClock />,
    title: 'Automatic Closing',
    text: 'Configurable auto-close patterns to ensure your property is never left open.'
  },
  {
    icon: <FaVideo />,
    title: 'Camera Integration',
    text: 'See who is at your gate in real-time with integrated HD video streaming.'
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-slate-50/50 overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-text-primary mb-6 uppercase tracking-tighter"
          >
            Intelligent <span className="text-primary italic-none">Systems</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 120 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-2 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white transition-all hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] hover:bg-white group"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3 font-display">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
