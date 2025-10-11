"use client";
import React from "react";
import { FaPhone, FaStar, FaAward, FaHeart } from "react-icons/fa";

const KnowUs = () => {
  const images = [
    "/images/tarapith/26.jpg",
    "/images/chilapata/out8.jpg",
    "/images/5.jpg",
    "/images/bon.jpg",
  ];

  const stats = [
    { number: "46+", label: "Years Experience", icon: <FaAward className="text-amber-600" /> },
    { number: "5★", label: "Luxury Rating", icon: <FaStar className="text-amber-600" /> },
    { number: "98%", label: "Guest Satisfaction", icon: <FaHeart className="text-amber-600" /> },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-amber-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Enhanced Image Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main featured image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={images[0]}
                  alt="Resort Featured"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-amber-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Premium Luxury
                  </span>
                </div>
              </div>

              {/* Image grid with overlay effect */}
              <div className="grid grid-cols-3 gap-4 relative">
                {images.slice(1).map((src, index) => (
                  <div
                    key={index}
                    className="relative group rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <img
                      src={src}
                      alt={`Gallery ${index + 2}`}
                      className="w-full h-32 lg:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-amber-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                ))}
                
                {/* Decorative overlay */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-60"></div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-amber-600 text-white px-6 py-3 rounded-2xl shadow-xl transform -rotate-6">
                <div className="text-center">
                  <div className="font-bold text-lg">46+ Years</div>
                  <div className="text-xs opacity-90">Of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enhanced Content */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-2xl">
              {/* Section headers with improved hierarchy */}
              <div className="mb-2">
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                  About Amantran
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-cinzel font-bold text-gray-900 mb-6 leading-tight">
                Know Our <span className="text-amber-600">Story</span>
              </h1>
              
              <div className="mb-8">
                <h2 className="text-xl lg:text-2xl font-cinzel text-amber-700 mb-6 font-semibold">
                  Unveiling Heritage, Luxury and Legacy
                </h2>
              </div>

              {/* Content paragraphs */}
              <div className="space-y-6 mb-8">
                <p className="text-gray-700 leading-relaxed text-lg font-open-sans">
                  <span className="font-semibold text-amber-700">Amantran Resort</span> exemplifies 
                  the pinnacle of hospitality, offering guests a harmonious blend of comfort and 
                  cultural richness. With over 46 years of experience, we are dedicated to 
                  providing unforgettable stays that make every guest feel truly valued.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg font-open-sans">
                  Our team showcases the true essence of <span className="italic text-amber-700">"Bengal Hospitality"</span> — 
                  from warm greetings to elegant service, setting the tone for a memorable 
                  experience filled with personalized attention to detail.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg font-open-sans">
                  Experience cultural vibrancy, exquisite cuisine, and world-class amenities. 
                  Explore our scenic walking park, indulge in culinary delights, or relax by 
                  our pristine pools — we are committed to making your stay extraordinary.
                </p>
              </div>

              {/* Stats section */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl shadow-lg border border-amber-100">
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-amber-700 mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-600 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Reservation CTA */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <FaPhone className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Reservation Hotline</h3>
                      <p className="text-amber-100 text-sm">
                        Available 24/7 for your convenience
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-xl">+91-91473 89029</div>
                    <button className="mt-2 bg-white text-amber-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-200">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional property link */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  Also visit our{" "}
                  <a 
                    href="https://www.amantranresorts.in/properties/chilapata" 
                    className="text-amber-600 font-semibold hover:text-amber-700 underline transition-colors duration-200"
                  >
                    Premium Resort in Chilapata
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;