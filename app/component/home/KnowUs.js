
"use client";
import React from "react";
import { FaPhone } from "react-icons/fa";

const KnowUs = () => {
  // Local images used for the grid
  const images = [
    "/images/tarapith/pond.jpg",
    "/images/chilapata/out8.jpg",
    "/images/5.jpg",
    "/images/bon.jpg",
  ];

  return (
    <section className="w-full bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-8 lg:py-12 lg:px-40">
        {/* Two-column layout on medium+ screens and vertical stacking on mobile */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Column: Responsive image grid */}
          <div className="w-full md:w-1/3 md:pr-6 lg:w-1/2">
            <div className="grid grid-cols-2 gap-2">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded"
                />
              ))}
            </div>
          </div>
          {/* Right Column: Responsive text content */}
          <div className="w-full md:w-2/3 mt-6 md:mt-0">
            <div className="flex flex-col items-center md:items-start text-left md:text-left">
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-xl font-semibold font-barlow text-[#d8aa00] mb-4">
                UNVEILING HERITAGE, LUXURY AND LEGACY
              </h1>
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-gilda text-black mb-4">
              Know Our Story
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-black font-serif mb-6">
                Amantran Resort, exemplifies the pinnacle of hospitality, offering guests a harmonious blend of comfort and cultural richness. With over 46 years of experience in the hospitality industry, Amantran has been dedicated to providing unforgettable stays, ensuring every guest feels valued and cared for. Also visit our <a href="https://www.amantranresorts.in/properties/chilapata" className="font-bold">Best Hotel in Chilapata</a>
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black font-serif mb-6">
                Our team at Amantran Resort goes above and beyond to showcase the true essence of “Bengal Hospitality.” From the moment you arrive, you'll be greeted with warmth and elegance, setting the tone for a memorable stay filled with personalized services and attention to detail.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-black font-serif mb-6">
                Staying true to our roots, Amantran Resort offers a unique experience that combines cultural vibrancy, delectable cuisines, and world-class amenities. Whether you're exploring our scenic walking park, indulging in exquisite local and international dishes, or relaxing by our pristine pools, we are committed to making your stay relaxing and pleasant.
              </p>
              <div className="flex items-center">
                <FaPhone size={32} className="mr-4 text-blue-600" />
                <div>
                  <h2 className="text-xl font-bold mb-2">Reservation</h2>
                  <p className="text-base">
                    Call us at: 
                    <span className="text-amber-800 ml-1">+91-91473 89029</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;
