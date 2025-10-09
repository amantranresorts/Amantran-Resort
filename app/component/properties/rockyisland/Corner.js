"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaThumbsUp } from "react-icons/fa";

const practiceAreas = [
  {
    title: "Dive in the Aquatic Embrace",
    image: "/images/rocky/rocky1.jpg",
  },
  {
    title: "A Haven of Comfort and Luxury",
    image: "/images/rocky/rocky2.jpg",
  },
  {
    title: "Luxury and Sophistication in Every Corner",
    image: "/images/rocky/rocky3.jpg",
  },
  {
    title: "Blessings Wrapped in Comfort",
    image: "/images/rocky/rocky4.jpg",
  },
  {
    title: "Where Divinity Meets Indulgence",
    image: "/images/rocky/rocky5.jpg",
  },
  {
    title: "Whispers of Calm, Echoes of Comfort",
    image: "/images/rocky/rocky6.jpg",
  },
  {
    title: "Where Comfort Wears a Crown",
    image: "/images/rocky/rocky7.jpg",
  },
  {
    title: "Luxury Living in the Lap of the Divine",
    image: "/images/rocky/rocky8.jpg",
  },
  {
    title: "Nature’s Calm, Amantran’s Charm",
    image: "/images/rocky/rocky9.jpg",
  },
  {
    title: "Peace Woven in Every Corner",
    image: "/images/rocky/rocky10.jpg",
  },
  {
    title: "Spiritual Grace, Luxurious Embrace",
    image: "/images/rocky/7.jpg",
  },
  {
    title: "Unwind in Opulent Tranquility",
    image: "/images/rocky/5.jpg",
  },
  {
    title: "Your Heavenly Home, Away from Home",
    image: "/images/rocky/pro4.jpg",
  },
];

const Practice = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const handleCardClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Function to render card for reuse in both mobile and desktop views
  const renderCard = (area, index) => (
    <div
      key={index}
      onClick={() => handleCardClick(area.image)}
      className="cursor-pointer group bg-white rounded-2xl shadow-xl overflow-hidden h-80 w-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Image Container with Enhanced Overlay */}
      <div className="h-64 relative overflow-hidden">
        <img
          src={area.image}
          alt={area.title}
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* View Indicator */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <svg
            className="w-4 h-4 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>

        {/* Icon Badge */}
        <div className="absolute top-4 left-4 bg-amber-500 text-white rounded-full p-2 shadow-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Text Content with Enhanced Styling */}
      <div className="h-16 bg-gradient-to-r from-amber-50 to-white group-hover:from-amber-100 group-hover:to-amber-50 transition-all duration-500 flex items-center justify-center p-4">
        <h4 className="text-sm font-semibold text-gray-800 text-center leading-tight font-playfair group-hover:text-amber-700 transition-colors duration-300">
          {area.title}
        </h4>
      </div>

      {/* Bottom Border Effect */}
      <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );

  return (
    <div className="p-5 bg-[#f8f5f0]">
      {/* Header Section */}
      <div className="w-full max-w-screen-xl mx-auto mb-16" data-aos="fade-up">
        {/* Premium Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-6 py-2 rounded-full inline-flex items-center gap-2 shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold tracking-wider uppercase">
              Premium Nature Retreat
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-4">
          <span className="text-lg font-light text-amber-600 tracking-widest uppercase border-b border-amber-200 pb-2">
            Every Corner of the Resort is Embraced in Luxury
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight font-gilda">
            The Best Resort in Rocky Island <br />
            <span className="text-amber-600">Surrounded by Natural Beauty</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-light mb-6">
            Embark on a virtual journey through{" "}
            <span className="font-semibold text-amber-700">
              Amantran Hotel & Resort
            </span>{" "}
            – best resort in Rocky Island, nestled in the serene landscapes of
            Samsing. Situated beside the gentle flow of the Murti River, our
            eco-lodge offers a harmonious blend of rustic charm and modern
            comfort.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-light">
            Each of our 12 thoughtfully designed cottages provides a tranquil
            retreat, allowing guests to immerse themselves in the natural beauty
            of the Dooars region. Whether you're seeking adventure or
            relaxation,{" "}
            <span className="font-semibold text-amber-700">Amantran</span>, the
            best hotel in Rocky Island promises an unforgettable experience
            amidst nature's embrace.
          </p>
        </div>
      </div>

      {/* Responsive Grid Layout for All Devices */}
      <div className="w-full max-w-screen-xl mx-auto mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => renderCard(area, index))}
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-gray-800 hover:bg-white transition-all duration-200 shadow-lg hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <p className="text-white text-sm text-center font-medium">
                {
                  practiceAreas.find((area) => area.image === selectedImage)
                    ?.title
                }
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] rounded shadow-lg"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="absolute top-2 right-2 bg-white p-1 rounded-full text-black"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Centered Book Now Button with Thumbs Up Icon */}
      <div className="mt-8 flex justify-center" data-aos="fade-up">
        <button className="bg-[#d49c45] text-white px-6 py-3 rounded-full flex items-center hover:bg-[#c08a35] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#d49c45]">
          <FaThumbsUp className="mr-2" />
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Practice;
