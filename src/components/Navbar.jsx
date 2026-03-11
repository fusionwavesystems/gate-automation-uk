"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Models', href: '/models' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Features', href: '/#features' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? 'top-4 max-w-5xl mx-auto bg-white/90 backdrop-blur-lg shadow-xl rounded-[2.5rem] py-2 px-4 border border-slate-200/50'
        : 'top-0 bg-transparent py-4'
        }`}
    >
      <div className="w-full flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className={`relative h-10 w-10 md:h-12 md:w-12 p-1.5 rounded-xl transition-all duration-300 ${isScrolled ? 'bg-slate-100/50' : 'bg-white shadow-lg shadow-white/20'} flex items-center justify-center group-hover:scale-110`}>
              <Image
                src="/images/logo.png"
                alt="Gate Automation UK"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <span className={`text-lg md:text-xl font-bold font-display transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Gate <span className="text-primary">Automation</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu - Centered on scroll */}
        <div className={`hidden md:flex items-center space-x-8 ${isScrolled ? 'absolute left-1/2 -translate-x-1/2' : ''}`}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-semibold transition-all hover:text-primary relative group py-2 ${isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'}`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* WhatsApp Button - Right aligned */}
        <div className="flex-1 flex justify-end">
          <a
            href="https://wa.me/447449891198"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center space-x-2 bg-whatsapp text-white font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-whatsapp/20 ${isScrolled ? 'px-4 py-2 rounded-xl text-sm' : 'px-5 py-2.5 rounded-full'
              }`}
          >
            <FaWhatsapp className="text-xl" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-2xl ${isScrolled ? 'text-text-primary' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text-primary font-medium text-lg hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/447449891198"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-whatsapp text-white px-5 py-3 rounded-xl font-semibold w-full shadow-md"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
