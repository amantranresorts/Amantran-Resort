"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaThumbsUp } from "react-icons/fa";

const practiceAreas = [
  {
    title: "Into the Heart of the Wild",
    image: "/images/sundarban/oth1.jpg",
  },
  {
    title: "Serenity Along the Mangrove Trails",
    image: "/images/sundarban/oth2.jpg",
  },
  {
    title: "Where Luxury Meets Wilderness",
    image: "/images/sundarban/oth3.jpg",
  },
  {
    title: "A Riverside Retreat Like No Other",
    image: "/images/sundarban/oth4.jpg",
  },
  {
    title: "Cradled by Nature, Pampered by Comfort",
    image: "/images/sundarban/oth5.jpg",
  },
  {
    title: "Unwind Amidst Verdant Stillness",
    image: "/images/sundarban/oth6.jpg",
  },
  {
    title: "The Call of the Wild, Answered in Style",
    image: "/images/sundarban/oth7.jpg",
  },
  {
    title: "Jungle Mystique, Refined Stay",
    image: "/images/sundarban/oth8.jpg",
  },
  {
    title: "Wake Up to Nature’s Symphony",
    image: "/images/sundarban/oth9.jpg",
  },
  {
    title: "Eco-Elegance in Every Detail",
    image: "/images/sundarban/oth10.jpg",
  },
  {
    title: "Tranquil Escapes, Timeless Moments",
    image: "/images/sundarban/oth11.jpg",
  },
  {
    title: "Nature’s Lap, Your Luxury Nap",
    image: "/images/sundarban/oth12.jpg",
  },
  {
    title: "A Harmonious Hideaway by the Delta",
    image: "/images/sundarban/oth13.jpg",
  },
  {
    title: "Wilderness Wonders, Amantran Warmth",
    image: "/images/sundarban/oth14.jpg",
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
      className="cursor-pointer flex flex-col group bg-white shadow-md rounded overflow-hidden h-64 w-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div style={{ height: "90%" }} className="overflow-hidden relative">
        <img
          src={area.image}
          alt={area.title}
          style={{ transitionDuration: "3000ms" }}
          className="w-full h-full object-cover transform transition-transform ease-in-out group-hover:scale-110"
        />
        <div
          style={{ transitionDuration: "3000ms" }}
          className="absolute inset-0 bg-black opacity-0 transition-opacity ease-in-out group-hover:opacity-25"
        ></div>
      </div>
      <div
        style={{ height: "10%" }}
        className="p-4 flex items-center justify-center"
      >
        <h1 className="text-sm font-medium text-black text-center">
          {area.title}
        </h1>
      </div>
    </div>
  );

  return (
    <div className="p-5 bg-[#f8f5f0]">
      {/* Header Section */}
      <div className="w-full max-w-screen-xl mx-auto mb-10" data-aos="fade-up">
        <span className="block text-md text-[#d49c45] font-semibold">
          Every Corner of the Resort Resonates with Nature’s Charm
        </span>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-4xl font-gilda">
            The Best Resort in Sundarban - Take a Look at the Surroundings
          </h1>
        </div>
        <span className="block text-sm font-serif mb-2">
          Embark on a virtual escape into the untouched beauty of Amantran
          Resorts, best resort in Sundarban. Tucked away in the heart of Bengal’s lush mangrove
          delta, this resort offers a perfect blend of rustic elegance and
          modern comfort. Guests are invited to experience the wild serenity of
          the sundarban while enjoying warm hospitality, eco-conscious living,
          and immersive tranquility. Whether you're a nature lover, a peace
          seeker, or an adventurer at heart, Amantran Resorts, the best hotel in Sundarban
          promises a stay filled with unforgettable moments, soothing
          landscapes, and the rhythm of the wild.
        </span>
      </div>
      {/* Responsive Grid Layout for All Devices */}
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {practiceAreas.map((area, index) => renderCard(area, index))}
        </div>
      </div>

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
