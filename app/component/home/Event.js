"use client";
import React from "react";

const events = [
  {
    id: 1,
    title: "Weddings, Anniversaries & Birthdays",
    description: "Celebrate your special day in a spectacular venue.",
    image: "images/wed.avif",
  },
  {
    id: 2,
    title: "Corporate Events",
    description:
      "Professional settings for meetings, seminars and conferences.",
    image: "images/corp.avif",
  },
  {
    id: 3,
    title: "Festivals and Cultural Events",
    description: "Experience vibrant celebrations and cultural extravaganzas.",
    image: "images/event_img.webp",
  },
  {
    id: 4,
    title: "Plan Your Event With Us",
    description: "Exclusive spaces for memorable private celebrations.",
    image: "images/event.jpg",
  },
];

const Event = () => {
  return (
    <div className="p-4 md:p-16 bg-amber-50">
      <div className="mb-8 px-4 md:px-20">
        <h1 className="text-lg text-[#FFC145] font-raleway tracking-widest">
          GRANDEUR GALAS & EXQUISITE AFFAIRS
        </h1>
        <h2 className="text-4xl font-open-sans my-2">Events</h2>
        <p className="text-gray-700 max-w-7xl mb-6">
          Amantran Resort offers exquisite event venues and banquet halls,
          perfect for weddings, corporate meetings, festivals, and celebrations.
          With versatile spaces accommodating various guest capacities, our
          resort ensures a seamless experience for every occasion. Enjoy
          top-notch services, elegant décor, and a serene ambiance that adds
          charm to your special events. Book now to create unforgettable
          memories at Amantran Resort.
        </p>
      </div>
      {/* Two cards per row on mobile/tablet and larger screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 md:px-20">
        {events.map((event) => (
          <div
            key={event.id}
            className="shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 hover:bg-black/60 flex flex-col justify-center items-center p-4">
                <h3 className="font-raleway text-2xl text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-200 text-xl text-center font-open-sans">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
