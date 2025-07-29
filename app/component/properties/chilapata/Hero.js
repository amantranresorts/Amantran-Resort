"use client"
import React, { useEffect, useState } from 'react';
import { FaWifi, FaSwimmer, FaUtensils, FaMugHot, FaSnowflake, FaConciergeBell, FaUsers } from "react-icons/fa";

// New facilities list with React icons
const facilitiesList = [
  { title: "Air Conditioning", icon: <FaSnowflake size={48} color="#603100" /> },
  { title: "Restaurant", icon: <FaUtensils size={48} color="#603100" /> },
  { title: "Internet", icon: <FaWifi size={48} color="#603100" /> },
  { title: "Room Service", icon: <FaConciergeBell size={48} color="#603100" /> },
  { title: "Swimming Pool", icon: <FaSwimmer size={48} color="#603100" /> },
  { title: "Conference / Banquet Hall", icon: <FaUsers size={48} color="#603100" /> },
  { title: "Cafe", icon: <FaMugHot size={48} color="#603100" /> },
];

// Define separate image arrays for left and right sides
const leftSideImages = [
  '/images/chilapata/out8.jpg',
  '/images/chilapata/out12.jpg',
  '/images/chilapata/left.jpg',
];

const rightSideImages = [
  '/images/chilapata/right.jpg',
  '/images/chilapata/out2.jpg',
  '/images/chilapata/out7.jpg',
];


const Hero = () => {
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade-in effect once the component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Desktop & Laptop Version */}
      <section className="bg-gray-100 py-15 hidden md:block">
        <div className="container mx-auto flex flex-row mt-10 bg-[#dfb574] p-2 items-center justify-around shadow-lg">
          {/* Left Side Images */}
          <div className="flex flex-row space-x-2 md:mr-4">
            {leftSideImages.map((src, index) => (
              <img
                key={`left-${index}`}
                src={src}
                alt={`Left image ${index + 1}`}
                className="w-50 h-50 md:w-55 md:h-55 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>

          {/* Center Text with underline effect */}
          <div className="text-center pl-4">
            <h1 className="text-3xl md:text-3xl font-gilda font-bold text-[#603100] drop-shadow-lg inline-block border-b-4 border-[#603100] pb-1">
               Chilapata
            </h1>
          </div>

          {/* Right Side Images */}
          <div className="flex flex-row space-x-2 md:ml-4">
            {rightSideImages.map((src, index) => (
              <img
                key={`right-${index}`}
                src={src}
                alt={`Right image ${index + 1}`}
                className="w-50 h-50 md:w-55 md:h-55 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile & Tablet Version */}
      <section className="bg-gray-100 py-15 md:hidden">
        <div className="container mx-auto flex flex-col items-center mt-10 bg-[#dfb574] p-4 shadow-lg">
          {/* Top Row: Left Side Images with smaller dimensions */}
          <div className="flex justify-center gap-2 mb-4">
            {leftSideImages.map((src, index) => (
              <img
                key={`mob-left-${index}`}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-32 h-32 max-w-full object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>

          {/* Center Text */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-gilda font-bold text-[#603100] drop-shadow-lg inline-block border-b-4 border-[#603100] pb-1">
              Chilapata
            </h1>
          </div>

          {/* Bottom Row: Right Side Images with smaller dimensions */}
          <div className="flex justify-center gap-2">
            {rightSideImages.map((src, index) => (
              <img
                key={`mob-right-${index}`}
                src={src}
                alt={`Image ${index + 4}`}
                className="w-32 h-32 max-w-full object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Facilities Section with Auto-Scrolling */}
      <section className="bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/4 p-4">
              <div className="text-xl md:text-2xl font-bold text-gray-800 border-l-4 pl-2 border-orange-500">
                Amenities &amp; Facilities
              </div>
            </div>

            {/* Auto-Scrolling Facilities Carousel */}
            <div className={`w-full md:w-3/4 p-4 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
              <div className="overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  <div className="flex space-x-6">
                    {facilitiesList.map((facility, index) => (
                      <div key={`item1-${index}`} className="flex flex-col items-center flex-shrink-0 bg-gray-50 rounded-lg p-4 shadow hover:shadow-xl transform transition duration-300 hover:-translate-y-1">
                        {/* Icon instead of image */}
                        <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                          {facility.icon}
                        </div>
                        <span className="mt-2 text-sm md:text-base text-gray-700 text-center">
                          {facility.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Duplicate the items for a seamless marquee effect */}
                  <div className="flex space-x-6">
                    {facilitiesList.map((facility, index) => (
                      <div key={`item2-${index}`} className="flex flex-col items-center flex-shrink-0 bg-gray-50 rounded-lg p-4 shadow hover:shadow-xl transform transition duration-300 hover:-translate-y-1">
                        {/* Icon instead of image */}
                        <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                          {facility.icon}
                        </div>
                        <span className="mt-2 text-sm md:text-base text-gray-700 text-center">
                          {facility.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
