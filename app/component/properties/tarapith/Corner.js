"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaThumbsUp } from "react-icons/fa";

const practiceAreas = [
  {
    title: "Dive in the Aquatic Embrace",
    image: "/images/tarapith/pool.jpg",
  },
  {
    title: "A Haven of Comfort and Luxury",
    image: "/images/tarapith/hotel1.jpg",
  },
  {
    title: "Luxury and Sophistication in Every Corner",
    image: "/images/tarapith/front2.jpg",
  },
  {
    title: "Blessings Wrapped in Comfort",
    image: "/images/tarapith/night2.jpg",
  },
  {
    title: "Where Divinity Meets Indulgence",
    image: "/images/tarapith/tara6.jpg",
  },
  {
    title: "Whispers of Calm, Echoes of Comfort",
    image: "/images/tarapith/night.jpg",
  },
  {
    title: "Where Comfort Wears a Crown",
    image: "/images/tarapith/front.jpg",
  },
  {
    title: "Luxury Living in the Lap of the Divine",
    image: "/images/tarapith/cat.jpg",
  },
  {
    title: "Nature’s Calm, Amantran’s Charm",
    image: "/images/tarapith/pond.jpg",
  },
  {
    title: "Peace Woven in Every Corner",
    image: "/images/tarapith/out1.jpg",
  },
  {
    title: "Spiritual Grace, Luxurious Embrace",
    image: "/images/tarapith/out2.jpg",
  },
  {
    title: "Unwind in Opulent Tranquility",
    image: "/images/tarapith/event.jpg",
  },
  {
    title: "A Sacred Stay in the Heart of Tarapith",
    image: "/images/tarapith/gate.jpg",
  },
  {
    title: "Your Heavenly Home, Away from Home",
    image: "/images/tarapith/night3.jpg",
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
          Every Corner of the Resort is Embraced in Luxury
        </span>
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-4xl font-gilda">
            Take a Look at the Surroundings
          </h1>
        </div>
        <span className="block text-sm font-serif mb-2">
          Embark on a virtual journey through the tranquil realm of Hotel Amantran
           Tarapith. Nestled amidst the spiritual aura of
          Tarapith, this resort seamlessly blends traditional charm with modern
          elegance. Guests can enjoy a peaceful retreat away from the bustling
          crowds, yet remain close to the sacred sites. The resort's serene
          environment, combined with its warm hospitality, offers a rejuvenating
          experience for pilgrims and travelers alike. Let the harmonious
          ambience and spiritual essence of Hotel Amantran Tarapith
          inspire your next soulful getaway.
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
