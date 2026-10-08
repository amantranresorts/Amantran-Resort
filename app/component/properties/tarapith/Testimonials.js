"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Harsha Shah",
    testimonial:
      "Beautiful resort... We stay here every tym when we visit tarapith... Lovely environment... ♥️",
    rating: 5,
    daysAgo: 330,
  },
  {
    name: "Rima Saha Podder",
    testimonial:
      "It's really a very good experience in this hotel. The ambience of the hotel and food is just excellent.",
    rating: 5,
    daysAgo: 300,
  },
  {
    name: "Rajat Subhra Das",
    testimonial:
      "A bit of peace 'far from the madding crowd'. Exotic place, great soothing environment near famous Tara Maa temple. Must have a stay and must enjoy the pool. An evening spent in the park will be a memory for ever.",
    rating: 5,
    daysAgo: 720,
  },
  {
    name: "Palash Pusti",
    testimonial:
      "Good food quality excellent service excellent staff",
    rating: 5,
    daysAgo: 60,
  },
  {
    name: "SAHIL Suman",
    testimonial:
      "Very nice food sarvice & room also",
    rating: 5,
    daysAgo: 180,
  },
  {
    name: "Dev Pramanik",
    testimonial:
      "his place is butiful and food is good 😊",
    rating: 5,
    daysAgo: 210,
  },
  {
    name: "Rima Saha Podder",
    testimonial:
      "It's really a very good experience in this hotel. The ambience of the hotel and food is just excellent.",
    rating: 5,
    daysAgo: 300,
  },
  {
    name: "Harsha Shah",
    testimonial:
      "Beautiful resort... We stay here every tym when we visit tarapith... Lovely environment... ♥️",
    rating: 5,
    daysAgo: 330,
  },
  
  {
    name: "Mohan Jha",
    testimonial:
      "Nice property with nice campus.",
    rating: 5,
    daysAgo: 300,
  },
];

const GAP = 50;
const DRAG_THRESHOLD = 100;

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const [cardHeight, setCardHeight] = useState(220);

  // Helper function to format time ago based on days
  const formatTimeAgo = (days) => {
    if (days < 30) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (days < 365) {
      const months = Math.round(days / 30);
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else {
      const years = Math.round(days / 365);
      return `${years} year${years > 1 ? "s" : ""} ago`;
    }
  };
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardWidth(500);
        setCardHeight(350);
      } else {
        setCardWidth(320);
        setCardHeight(220);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragEnd = (event, info) => {
    if (
      info.offset.x < -DRAG_THRESHOLD &&
      activeIndex < testimonialsData.length - 1
    ) {
      setActiveIndex(activeIndex + 1);
    } else if (info.offset.x > DRAG_THRESHOLD && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < testimonialsData.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const getCardAnimation = (index) => {
    const diff = index - activeIndex;
    if (Math.abs(diff) > 1) {
      return { x: 0, opacity: 0, scale: 0.8, zIndex: 0 };
    }
    if (diff === 0) {
      return {
        x: 0,
        scale: 1,
        y: 0,
        opacity: 1,
        boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
        zIndex: 3,
      };
    } else if (diff === -1) {
      return {
        x: -(cardWidth / 2 + GAP),
        scale: 0.92,
        y: 10,
        opacity: 0.8,
        boxShadow: "0px 6px 12px rgba(0,0,0,0.15)",
        zIndex: 2,
      };
    } else if (diff === 1) {
      return {
        x: cardWidth / 2 + GAP,
        scale: 0.92,
        y: 10,
        opacity: 0.8,
        boxShadow: "0px 6px 12px rgba(0,0,0,0.15)",
        zIndex: 1,
      };
    }
  };

  const sortedIndices = [...Array(testimonialsData.length).keys()].sort(
    (a, b) => {
      if (a === activeIndex) return 1;
      if (b === activeIndex) return -1;
      return a - b;
    }
  );

  return (
    <section className="py-12 px-4 bg-gray-200 overflow-x-hidden">
      <h2 className="text-4xl font-extrabold text-amber-600 mb-10 text-center">
        Testimonials
      </h2>
      <div
        className="relative mx-auto mb-10 w-full max-w-2xl overflow-visible"
        style={{ height: cardHeight + 60 }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="w-full h-full relative"
          style={{ cursor: "grab" }}
        >
          {sortedIndices.map((index) => {
            const testimonial = testimonialsData[index];
            return (
              <div
                key={index}
                className="absolute top-0 left-1/2"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  transform: "translateX(-50%)",
                }}
              >
                <motion.div
                  animate={getCardAnimation(index)}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full h-full bg-white overflow-hidden rounded-xl p-4 md:p-6 flex flex-col justify-between"
                >
                  <p className="text-gray-700 text-base md:text-lg italic text-center break-words">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex flex-col items-center my-2">
                    <div className="flex gap-1 mb-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <FaStar key={i} className="text-amber-500" />
                        )
                      )}
                    </div>
                    <p className="text-gray-500 text-xs">
                      {formatTimeAgo(testimonial.daysAgo)}
                    </p>
                  </div>
                  <p className="mt-4 text-center text-xs md:text-sm font-semibold text-gray-900">
                    - {testimonial.name}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex justify-center items-center gap-3 md:gap-6">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className={`px-3 py-1 md:px-6 md:py-2 text-sm md:text-base rounded-full transition-colors ${
            activeIndex === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-amber-500 hover:bg-amber-600 text-black"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={activeIndex === testimonialsData.length - 1}
          className={`px-3 py-1 md:px-6 md:py-2 text-sm md:text-base rounded-full transition-colors ${
            activeIndex === testimonialsData.length - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-amber-500 hover:bg-amber-600 text-black"
          }`}
        >
          Next
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={`Go to testimonial ${index + 1}`}
          >
            <span
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-amber-500" : "bg-gray-300"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
