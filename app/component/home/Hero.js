"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// Dummy data for slider images with hotel details
const sliderData = [
  {
    id: 1,
    src: "/images/tarapith.jpg",
    title: "Amantran Resorts Tarapith",
    details:
      "Located approximately 3.5 km from the sacred Tarapith Temple, offering a peaceful stay for pilgrims and travelers alike.",
  },
  {
    id: 2,
    src: "/images/hotel1.jpg",
    title: "Amantran Resorts Chilapata",
    details:
      "Surrounded by the lush Chilapata Forest, this retreat is perfect for wildlife lovers and those seeking tranquility in nature.",
  },
  {
    id: 3,
    src: "/images/rocky.jpg",
    title: "Amantran Resorts Rocky Island",
    details:
      "Set in the picturesque village of Rocky Island in the Samsing area, ideal for nature lovers, adventure seekers, and camping enthusiasts.",
  },
  {
    id: 4,
    src: "/images/slide4.jpg",
    title: "Amantran Resorts Sundarban",
    details:
      "A riverside retreat close to Sundarban National Park, offering immersive mangrove experiences and serene backwater escapes.",
  },
];
// Slider component for hotel images with overlay text using AnimatePresence and swipe functionality
const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const slideCount = sliderData.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 4000); // change slide every 4 seconds
    return () => clearInterval(timer);
  }, [slideCount]);

  // Handlers for swipe actions
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slideCount),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 1 + slideCount) % slideCount),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full h-104 lg:h-screen overflow-hidden"
    >
      <AnimatePresence>
        {sliderData.map((slide, index) => {
          return (
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute font-raleway inset-0 bg-black/50 flex flex-col justify-center items-center p-4 md:p-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-2">
                    {slide.title}
                  </h3>
                  <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-white text-center max-w-3xl px-2">
                    {slide.details}
                  </p>
                </div>
              </motion.div>
            )
          );
        })}
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slideCount) % slideCount)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-center hover:bg-opacity-75 rounded-full p-2 md:p-3 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slideCount)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-center bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 md:p-3 focus:outline-none"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-16 md:bottom-20 left-0 right-0 flex justify-center gap-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full mt-10 lg:mt-0 lg:h-screen">
      {/* Fullscreen slider */}
      <ImageSlider />

      {/* Button options overlaid at the bottom */}
      <div
        className="
        absolute bottom-6 left-1/2 transform -translate-x-1/2 
        w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl 
        flex flex-col sm:flex-row items-center justify-center 
        gap-2 sm:gap-3 px-4 py-3 z-10
        bg-black/30 backdrop-blur-sm rounded-md
      "
      >
        <a
          href="tel:9147389029"
          className="
            w-full sm:w-auto 
            flex-1 sm:flex-none
            bg-green-600 hover:bg-green-700 
            text-white font-semibold 
            py-2 px-4 md:py-2.5 md:px-6 
            rounded transition duration-300 
            text-sm md:text-base 
            flex items-center justify-center gap-2 shadow-md
            whitespace-nowrap
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2zm14-14a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5a2 2 0 012-2h2zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2z"
            />
          </svg>
          Call: 91473 89029
        </a>
        <a
          href="/contact"
          className="
            w-full sm:w-auto 
            flex-1 sm:flex-none
            bg-[#d49c45] hover:bg-amber-600 
            text-white font-semibold 
            py-2 px-4 md:py-2.5 md:px-6 
            rounded transition duration-300 
            text-sm md:text-base 
            flex items-center justify-center shadow-md
            whitespace-nowrap
          "
        >
          Contact Us
        </a>
        <a
          href="/about"
          className="
            w-full sm:w-auto 
            flex-1 sm:flex-none
            bg-transparent border border-white 
            text-white font-semibold 
            py-2 px-4 md:py-2.5 md:px-6 
            rounded transition duration-300 
            hover:bg-white hover:text-blue-500 
            text-sm md:text-base 
            flex items-center justify-center shadow-md
            whitespace-nowrap
          "
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default Hero;
