"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const ContactPage = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[400px] flex items-center">
        {/* Background Image with Fixed effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/images/contact-hero.png')",
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Darker Overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/60 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-white mb-6 uppercase tracking-tighter"
          >
            Get In <span className="text-primary italic-none">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto"
          >
            Have questions about our gate automation systems? Our team of experts is here to help you secure your property.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-6 font-display">Contact Details</h2>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  Whether you need a new installation, a repair, or a custom design consultation, we're ready to assist you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 text-xl">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="font-bold text-text-primary text-lg">Call Us</p>
                      <p className="text-text-muted text-lg">07300960920</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 text-xl">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="font-bold text-text-primary text-lg">Our Office</p>
                      <p className="text-text-muted text-lg">12 Harington road faltham London TW14 ab</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-whatsapp/10 p-8 rounded-3xl border border-whatsapp/20">
                <h3 className="text-xl font-bold text-whatsapp mb-4 flex items-center gap-2">
                  <FaWhatsapp className="text-2xl" />
                  Instant Support
                </h3>
                <p className="text-slate-700 mb-6">
                  Need a quick response? Message us directly on WhatsApp for real-time assistance.
                </p>
                <a 
                  href="https://wa.me/447449891198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-whatsapp text-white font-bold px-8 py-3 rounded-xl hover:bg-whatsapp/90 transition-all shadow-lg shadow-whatsapp/20"
                >
                  Message on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Google Map Integration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden h-[500px] lg:h-auto"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.299532585295!2d-0.42835492341258836!3d51.45265417178829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767396c21e646d%3A0xc3f5ce6368d374a5!2s12%20Harington%20Rd%2C%20Feltham%20TW14%209AB%2C%20UK!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
                className="w-full h-full rounded-[2rem] grayscale-[20%] contrast-[110%]"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
