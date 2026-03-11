"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] -right-[5%] w-[35%] h-[50%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[40%] bg-blue-400/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left Side: Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-5xl font-bold font-display text-slate-900 mb-4 md:mb-6 leading-tight">
                Professional Gate & <span className="text-primary">Security Solutions</span> in London
              </h2>
              <div className="h-1 w-16 md:h-1.5 md:w-20 bg-primary rounded-full mb-6 md:mb-8" />
              
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 leading-relaxed text-left">
                <p>
                  At Gate Automation, we specialise in gate automation, metal gates, railings, and roller shutter supply and installation across London and surrounding areas.
                </p>
                <p>
                  With over 20 years of experience in the UK, we provide reliable and professional services for both residential and commercial properties.
                </p>
                <p className="font-semibold text-slate-800">
                  Our goal is to deliver secure, durable, and high-quality installations that meet the highest industry standards.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Visual Element (Glassmorphic Stats/Features) */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 overflow-hidden shadow-2xl relative">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                  <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
                    {[
                      { label: 'Years Experience', value: '20+' },
                      { label: 'Quality Standards', value: '100%' },
                      { label: 'Service Areas', value: 'London' },
                      { label: 'Security Focus', value: 'High' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/60 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/40 shadow-sm flex flex-col items-center justify-center text-center">
                        <span className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</span>
                        <span className="text-[10px] md:text-xs uppercase tracking-wider text-slate-500 font-bold">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Accents */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
