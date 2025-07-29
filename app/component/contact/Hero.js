"use client";
import React, { useEffect, useState } from "react";

// New facilities list with images
const facilitiesList = [
  {
    title: "Air Conditioning",
    image:
      "https://www.hotelsonarbangla.com/wp-content/uploads/2024/03/Air-Conditioner.webp",
  },
  {
    title: "Restaurant",
    image:
      "https://www.hotelsonarbangla.com/wp-content/uploads/2024/03/Restaurant-icon-2.webp",
  },
  {
    title: "Internet",
    image:
      "https://www.hotelsonarbangla.com/wp-content/uploads/2024/03/wifi-2.webp",
  },
  {
    title: "Room Service",
    image:
      "https://www.hotelsonarbangla.com/wp-content/uploads/2024/03/Room-Service-icon-1.webp",
  },
  {
    title: "Swimming Pool",
    image:
      "https://www.hotelsonarbangla.com/wp-content/uploads/2024/03/Swimming-Pool-icon-2.webp",
  },
  {
    title: "Conference / Banquet Hall",
    image:
      "https://www.hotelsonarbangla.com/wp-content/uploads/2024/03/Conference-hall-icon-2.webp",
  },
  {
    title: "Cafe",
    image:
      "https://www.hotelsonarbangla.com/wp-content/uploads/2024/03/Cafe-2-1-1.webp",
  },
];

// Define separate image arrays for left and right sides
const leftSideImages = [
  "/images/con1.jpg",
  "/images/con2.jpg",
  "/images/con3.jpg",
];

const rightSideImages = [
  "/images/con4.jpg",
  "/images/con5.jpg",
  "/images/tara5.jpg",
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
        <div className="container mx-auto flex flex-row mt-10 bg-[#dfb574] p-4 items-center justify-around shadow-lg">
          {/* Left Side Images */}
          <div className="flex flex-row space-x-2 md:mr-4">
            {leftSideImages.map((src, index) => (
              <img
                key={`left-${index}`}
                src={src}
                alt={`Left image ${index + 1}`}
                className="w-50 h-50 md:w-55 md:h-50 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>

          {/* Center Text with underline effect */}
          <div className="text-center">
            <h1 className="text-3xl md:text-3xl font-gilda font-bold text-[#603100] drop-shadow-lg inline-block border-b-4 border-[#603100] pb-1">
              Contact
            </h1>
          </div>

          {/* Right Side Images */}
          <div className="flex flex-row space-x-2 md:ml-4">
            {rightSideImages.map((src, index) => (
              <img
                key={`right-${index}`}
                src={src}
                alt={`Right image ${index + 1}`}
                className="w-50 h-50 md:w-55 md:h-50 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
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
              Contact
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
