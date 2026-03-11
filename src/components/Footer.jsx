import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
        {/* Brand */}
        <div className="space-y-6 flex flex-col items-center sm:items-start">
          <Link href="/" className="flex items-center group">
            <div className="relative h-20 w-56 md:h-28 md:w-72 transition-transform group-hover:scale-105 brightness-0 invert opacity-90">
              <Image 
                src="/images/logo.png" 
                alt="Gate Automation UK" 
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <p className="max-w-xs leading-relaxed text-sm md:text-base">
            Leading provider of smart, secure, and intelligent gate automation systems for residential and commercial properties.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-4 text-sm md:text-base">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/models" className="hover:text-primary transition-colors">Models</Link></li>
            <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link href="/#features" className="hover:text-primary transition-colors">Key Features</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-6 text-lg">Contact Details</h4>
          <ul className="space-y-4 text-sm md:text-base">
            <li>12 Harington road,<br />Feltham, London TW14 9AB</li>
            <li>Phone: 07300960920</li>
            <li>Email: gateautomationuk@outlook.com</li>
          </ul>
        </div>

        {/* WhatsApp Link */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="text-white font-semibold mb-6 text-lg">Support</h4>
          <p className="mb-6 text-sm md:text-base">Need quick help? Chat with our experts on WhatsApp.</p>
          <a
            href="https://wa.me/447449891198"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-whatsapp text-white px-6 py-3 rounded-xl font-semibold hover:bg-whatsapp/90 transition-all w-full sm:w-auto justify-center"
          >
            <FaWhatsapp className="text-xl" />
            <span>Chat Now</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-800 mt-20 pt-8 flex flex-col items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Fusion Wave Systems (Pvt) Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
