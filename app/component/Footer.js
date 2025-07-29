
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-gilda py-12 flex justify-center">
      <div className="w-full max-w-7xl px-6">
        {/* Four-column layout for md and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: Corporate Office */}
          <div className="flex flex-col items-center text-center">
            <div className="space-y-3">
              <h2 className="text-xl text-[#dfb574] font-bold mb-4 border-b-2 border-gray-600 pb-2">
                Corporate Office
              </h2>
              <p className="flex gap-4 items-center">
                <span className="flex items-center justify-center w-10">
                  <FaMapMarkerAlt className="text-[#dfb574] text-2xl" />
                </span>
                <span className="text-left">
                  4, Dr Suresh Sarkar Road, Moulali, Amantran House (RTC House), 4th floor, Kolkata, West Bengal 700014
                </span>
              </p>
            </div>
          </div>
          {/* Section 2: Contact Us */}
          <div className="flex flex-col items-center text-center">
            <div className="space-y-3">
              <h2 className="text-xl text-[#dfb574] font-bold mb-4 border-b-2 border-gray-600 pb-2">
                Contact Us
              </h2>
              <p className="flex items-center justify-center space-x-2">
                <FaEnvelope className="text-[#dfb574]" />
                <span>amantranmarketing2025@gmail.com <br /> info@amantranresorts.in</span>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <FaPhoneAlt className="text-[#dfb574]" />
                <span>+91-91473 89029</span>
              </p>
            </div>
          </div>
          {/* Section 3: About Us and Social Media */}
          <div className="flex flex-col items-center text-center space-y-6">
            <Link
              href="/about"
              className="bg-white hover:bg-gray-300 text-black px-8 py-4 rounded-full cursor-pointer inline-block"
            >
              About Us
            </Link>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500" aria-label="Facebook">
                <FaFacebookF className="text-[#dfb574]" />
              </a>
              <a href="#" className="hover:text-blue-400" aria-label="Twitter">
                <FaTwitter className="text-[#dfb574]" />
              </a>
              <a href="#" className="hover:text-blue-700" aria-label="LinkedIn">
                <FaLinkedinIn className="text-[#dfb574]" />
              </a>
              <a href="#" className="hover:text-pink-500" aria-label="Instagram">
                <FaInstagram className="text-[#dfb574]" />
              </a>
            </div>
          </div>
          {/* Section 4: Other Links */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full">
              <h2 className="text-xl text-[#dfb574] font-bold mb-4 border-b-2 border-gray-600 pb-2">
                Other Links
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/reservation-and-refund-policy" className="hover:underline">
                    Reservation and Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row md:justify-between border-t border-gray-700 pt-6 text-center">
          <p className="text-sm mb-4 md:mb-0">
            Copyright © 2025. All Rights Reserved. Website Developed & Maintained by Digital Exposure Online Services
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Legal Agreement
            </a>
            <a href="#" className="text-sm hover:underline">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
