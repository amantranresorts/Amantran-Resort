"use client";

import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  const scrollToTop = () => {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      
      window.scrollTo(0, currentScroll - currentScroll / 8);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-2">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9147389029"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full transition-opacity duration-300"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp className="text-xl" />
      </a>
      
      {/* Call Button */}
      <a
        href="tel:9147389029"
        className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full transition-opacity duration-300"
        aria-label="Call"
      >
        <FaPhone className="text-xl" />
      </a>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 flex items-center justify-center bg-white text-black rounded-full transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
