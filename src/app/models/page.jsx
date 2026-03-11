"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const models = [
  {
    id: 1,
    name: 'Commercial Steel Roller Shutter',
    description: 'High-performance electric steel shutter designed for warehouses and commercial units. Provides maximum security and durability.',
    image: '/images/models/commercial-steel-shutter.png',
  },
  {
    id: 2,
    name: 'Steel Shopfront Roller Shutter',
    description: 'Elegant yet robust shopfront protection. Perforated design allows for window shopping while maintaining top-tier security.',
    image: '/images/models/steel-shopfront-shutter.png',
  },
  {
    id: 3,
    name: 'Single Doorway Roller Shutter',
    description: 'Compact electric shutter solution for individual doors and small entries. Silent operation with a sleek, minimalist finish.',
    image: '/images/models/single-doorway-shutter.png',
  },
  {
    id: 4,
    name: 'Industrial Steel Roller Shutter',
    description: 'Heavy-duty industrial grade shutter for large openings. Built to withstand high-frequency use and extreme conditions.',
    image: '/images/models/industrial-steel-shutter.png',
  },
  {
    id: 5,
    name: 'Aluminium Garage Roller Shutter',
    description: 'Premium aluminium garage door with automated electric opening. Lightweight, rust-resistant, and perfect for modern homes.',
    image: '/images/models/aluminium-garage-shutter.png',
  },
  {
    id: 6,
    name: 'Steel Roller Shutter (Chain-Operation)',
    description: 'Traditional manual chain-operated steel shutter. Highly reliable, cost-effective, and ideal for locations without power access.',
    image: '/images/models/steel-chain-shutter.png',
  },
  {
    id: 7,
    name: 'Steel Garage Roller Shutter',
    description: 'Robust steel garage door with electric motor. Combines the strength of steel with the convenience of automation.',
    image: '/images/models/steel-garage-electric-shutter.png',
  },
  {
    id: 8,
    name: 'Insulated Aluminium Garage Shutter',
    description: 'Advanced insulated slats provide thermal efficiency and noise reduction. The ultimate choice for energy-conscious homeowners.',
    image: '/images/models/insulated-aluminium-shutter.png',
  },
  {
    id: 9,
    name: 'Chain Link Roller Shutter',
    description: 'High-visibility electric chain link shutter. Perfect for internal mall units, bars, and areas requiring ventilation and security.',
    image: '/images/models/chain-link-shutter.png',
  }
];

const ModelsPage = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = formData.name.trim() && formData.address.trim() && formData.message.trim();

  const getWhatsAppLink = (isCustom = false) => {
    const subject = isCustom ? "Custom Gate Design Inquiry" : `Interest in ${selectedModel?.name}`;
    const text = `Hello, I'm interested in ${isCustom ? 'a Custom Gate Design' : selectedModel?.name}.
Name: ${formData.name}
Address: ${formData.address}
Details: ${formData.message}`;
    return `https://wa.me/447449891198?text=${encodeURIComponent(text)}`;
  };

  const resetForm = () => {
    setFormData({ name: '', address: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[400px] flex items-center">
        {/* Background Image with Parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/images/models-hero.png')",
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
            Explore <span className="text-primary italic-none">Models</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto"
          >
            Find the perfect automation solution for your property. From sleek residential designs to heavy-duty industrial systems.
          </motion.p>
        </div>
      </section>

      {/* Pages Description Section */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              At Gate Automation, we provide a diverse range of high-quality automated gate solutions designed for reliability, security, and aesthetic appeal.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Whether you are looking for a sleek sliding gate for your home or a heavy-duty industrial system, our models are engineered to the highest UK standards. Explore our premium collection below to find the perfect match for your property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {models.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={model.image} 
                    alt={model.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-text-primary mb-4 font-display">{model.name}</h2>
                  <p className="text-text-muted mb-8 leading-relaxed flex-grow">{model.description}</p>
                  <button 
                    onClick={() => setSelectedModel(model)}
                    className="flex items-center justify-center space-x-3 w-full bg-[#0f172a] text-white font-bold py-4 rounded-xl hover:bg-[#1e293b] transition-all shadow-md group"
                  >
                    <span>Order Now</span>
                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Detail Modal */}
      <AnimatePresence mode="wait">
        {selectedModel && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedModel(null);
                resetForm();
              }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
            >
              <button 
                onClick={() => {
                  setSelectedModel(null);
                  resetForm();
                }}
                className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-20"
              >
                <IoClose className="text-xl text-slate-600" />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="lg:w-2/5 relative h-64 lg:h-auto">
                  <Image 
                    src={selectedModel.image} 
                    alt={selectedModel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white lg:hidden">
                    <h3 className="text-2xl font-bold font-display">{selectedModel.name}</h3>
                  </div>
                </div>

                {/* Content & Form Section */}
                <div className="lg:w-3/5 p-8 lg:p-12 max-h-[90vh] overflow-y-auto">
                  <div className="hidden lg:block mb-8">
                    <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">Inquiry Details</span>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display leading-tight">{selectedModel.name}</h3>
                    <p className="text-slate-500 text-base leading-relaxed">{selectedModel.description}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Installation Address</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Address"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Order Details / Explanation</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Please describe your requirements..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      />
                    </div>
                    
                    <a 
                      href={isFormValid ? getWhatsAppLink() : '#'}
                      onClick={(e) => {
                        if(!isFormValid) {
                          e.preventDefault();
                          alert('Please fill in all details to proceed.');
                        }
                      }}
                      target={isFormValid ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center space-x-3 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-xl group ${isFormValid ? 'bg-[#00C853] hover:bg-[#00B248] shadow-green-200 active:scale-95' : 'bg-slate-300 cursor-not-allowed shadow-none'}`}
                    >
                      <FaWhatsapp className="text-2xl" />
                      <span>Order Now</span>
                    </a>

                    <p className="text-center text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      Response within 24 hours • Expert Support
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Custom Design Modal */}
        {isCustomModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsCustomModalOpen(false);
                resetForm();
              }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl z-10 p-8 md:p-12"
            >
              <button 
                onClick={() => {
                  setIsCustomModalOpen(false);
                  resetForm();
                }}
                className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-20"
              >
                <IoClose className="text-xl text-slate-600" />
              </button>

              <div className="text-center mb-8">
                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">Custom Solution</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">Start Custom Design</h3>
                <p className="text-slate-500">Provide your details and requirements for a bespoke gate automation solution.</p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Installation Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Requirements / Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Describe your vision or site requirements..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
                
                <a 
                  href={isFormValid ? getWhatsAppLink(true) : '#'}
                  onClick={(e) => {
                    if(!isFormValid) {
                      e.preventDefault();
                      alert('Please fill in all details to proceed.');
                    }
                  }}
                  target={isFormValid ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center space-x-3 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-xl group ${isFormValid ? 'bg-[#00C853] hover:bg-[#00B248] shadow-green-200 active:scale-95' : 'bg-slate-300 cursor-not-allowed shadow-none'}`}
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>Order Now</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 relative z-10">Don't see what you're looking for?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                We offer custom automation solutions tailored to your specific architectural requirements. Contact our design team today.
            </p>
            <button 
                onClick={() => setIsCustomModalOpen(true)}
                className="inline-flex items-center space-x-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-100 transition-all relative z-10 shadow-xl"
            >
                <FaWhatsapp className="text-2xl" />
                <span>Start Custom Design</span>
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ModelsPage;
