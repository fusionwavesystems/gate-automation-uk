"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const models = [
  {
    id: 1,
    name: 'Commercial Roller Shutters',
    description: 'High-security electric steel shutters designed for modern commercial and industrial units.',
    image: '/images/models/commercial-steel-shutter.png',
  },
  {
    id: 2,
    name: 'Aluminium Garage Doors',
    description: 'Premium automated aluminium rollers that combine sleek design with advanced insulation.',
    image: '/images/models/aluminium-garage-shutter.png',
  },
  {
    id: 3,
    name: 'Shopfront Security',
    description: 'Durable and aesthetically pleasing shopfront shutters that protect your business 24/7.',
    image: '/images/models/steel-shopfront-shutter.png',
  }
];

const ModelsPreview = () => {
  const [selectedModel, setSelectedModel] = useState(null);
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

  const getWhatsAppLink = () => {
    const text = `Hello, I'm interested in the ${selectedModel?.name}.
Name: ${formData.name}
Address: ${formData.address}
Order Details: ${formData.message}`;
    return `https://wa.me/447449891198?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[50%] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4"
          >
            Popular Gate Models
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-56 m-2 overflow-hidden rounded-[1.5rem]">
                <Image 
                  src={model.image} 
                  alt={model.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{model.name}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow">{model.description}</p>
                <button 
                  onClick={() => setSelectedModel(model)}
                  className="flex items-center justify-center space-x-2 bg-[#0f172a] text-white font-bold py-3 rounded-xl hover:bg-[#1e293b] transition-all shadow-md active:scale-95 group"
                >
                  <span>Order Now</span>
                  <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/models"
            className="inline-flex items-center justify-center bg-white text-primary border-2 border-primary/20 font-bold px-10 py-4 rounded-full hover:bg-primary/5 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/5"
          >
            Explore More Models
          </Link>
        </div>
      </div>

      {/* Model Detail Modal */}
      <AnimatePresence>
        {selectedModel && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedModel(null);
                setFormData({ name: '', address: '', message: '' });
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
                  setFormData({ name: '', address: '', message: '' });
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
      </AnimatePresence>
    </section>
  );
};

export default ModelsPreview;
