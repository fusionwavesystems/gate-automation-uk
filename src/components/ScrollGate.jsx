"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollGate = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress of the entire window
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animation values:
  // We want the gate to be open at the very top (0)
  // Close at some point (e.g., 0.1 to 0.3)
  // Stay closed for a bit (0.3 to 0.4)
  // Open again (0.4 to 0.6)
  
  // Left gate moves from -100% to 0% and back to -100%
  const leftGateX = useTransform(
    smoothProgress,
    [0, 0.1, 0.25, 0.4, 0.55],
    ["-100%", "0%", "0%", "0%", "-100%"]
  );

  // Right gate moves from 100% to 0% and back to 100%
  const rightGateX = useTransform(
    smoothProgress,
    [0, 0.1, 0.25, 0.4, 0.55],
    ["100%", "0%", "0%", "0%", "100%"]
  );

  // Opacity for the gate container so it's not always there
  const gateOpacity = useTransform(
    smoothProgress,
    [0, 0.05, 0.5, 0.6],
    [0, 1, 1, 0]
  );

  return (
    <motion.div 
      style={{ opacity: gateOpacity }}
      className="absolute inset-0 z-[100] pointer-events-none flex"
    >
      {/* Left Gate Half */}
      <motion.div
        style={{ x: leftGateX }}
        className="relative h-full w-1/2 bg-slate-900 border-r-2 border-primary/30 flex items-center justify-end"
      >
        {/* Gate Texture/Detail */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="mr-8 flex flex-col gap-4 opacity-20">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="h-1 w-24 bg-primary rounded-full" />
            ))}
        </div>
      </motion.div>

      {/* Right Gate Half */}
      <motion.div
        style={{ x: rightGateX }}
        className="relative h-full w-1/2 bg-slate-900 border-l-2 border-primary/30 flex items-center justify-start"
      >
         {/* Gate Texture/Detail */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
         <div className="ml-8 flex flex-col gap-4 opacity-20">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="h-1 w-24 bg-primary rounded-full" />
            ))}
        </div>
        
        {/* Logo/Icon in the middle when closed */}
        <motion.div 
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center border-4 border-slate-900 shadow-2xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
        >
            <div className="w-10 h-10 border-4 border-white rounded-md rotate-45 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full" />
            </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollGate;
