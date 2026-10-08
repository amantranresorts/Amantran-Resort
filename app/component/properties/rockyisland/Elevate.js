"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Elevate = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeRoom, setActiveRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      image: "/images/room1.webp", // Replace with your image path
      title: "Premium Non AC Double",
      maxOccupancy: "Max Occupancy: 2",
      adults: "Adults: 2",
      children: "Children: 1",
    },
    {
      id: 2,
      image: "/images/room2.webp", // Replace with your image path
      title: "Premium AC Double",
      maxOccupancy: "Max Occupancy: 3",
      adults: "Adults: 3",
      children: "Children: 1",
    },
    {
      id: 3,
      image: "/images/room3.webp", // Replace with your image path
      title: "Premium Non AC Four Bed",
      maxOccupancy: "Max Occupancy: 4",
      adults: "Adults: 4",
      children: "Children: 1",
    },
    {
      id: 4,
      image: "/images/room4.webp", // Replace with your image path
      title: "Premium AC Four Bed",
      maxOccupancy: "Max Occupancy: 4",
      adults: "Adults: 4",
      children: "Children: 1",
    },
    {
      id: 5,
      image: "/images/room5.webp", // Replace with your image path
      title: "Premium Suite",
      maxOccupancy: "Max Occupancy: 3",
      adults: "Adults: 2",
      children: "Children: 1",
    },
    {
      id: 6,
      image: "/images/room2.webp", // Replace with your image path
      title: "Deluxe AC Double",
      maxOccupancy: "Max Occupancy: 3",
      adults: "Adults: 2",
      children: "Children: 1",
    },
    {
      id: 7,
      image: "/images/room4.webp", // Replace with your image path
      title: "Deluxe AC Four Bed",
      maxOccupancy: "Max Occupancy: 4",
      adults: "Adults: 4",
      children: "Children: 1",
    },
    {
      id: 8,
      image: "/images/room1.webp", // Replace with your image path
      title: "Deluxe AC Suite",
      maxOccupancy: "Max Occupancy: 4",
      adults: "Adults: 4",
      children: "Children: 1",
    },
    // Add more rooms as needed
  ];

  const handleViewMore = (room) => {
    setActiveRoom(room);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveRoom(null);
  };

  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-40 py-6">
      {/* Section Header */}
      <div className="text-left mb-10">
        <h3 className="text-base text-[#d49c45] uppercase font-semibold">
          Experience Nature's Embrace with Exceptional Comfort
        </h3>
        <h2 className="text-3xl md:text-4xl font-raleway mt-2">
          The Best Hotel in Rocky Island Offers a Journey into Serenity
        </h2>
        <p className="text-black font-open-sans mt-4 md:pr-20">
          Discover the tranquil beauty of Amantran Hotel & Resort – the best hotel in Rocky
          Island, where the gentle murmur of the Murti River and the lush
          greenery of Samsing create a harmonious backdrop for relaxation. Our
          thoughtfully designed accommodations blend rustic charm with modern
          amenities, offering a peaceful retreat amidst nature's splendor.
        </p>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="relative group rounded-lg overflow-hidden shadow-lg aspect-video"
          >
            <Image
              src={room.image}
              alt={room.title}
              width={857}
              height={508}
              className="object-cover w-full h-full transition duration-300 group-hover:brightness-50"
            />
            {/* Title Overlay */}
            <div className="absolute top-0 left-0 bg-black/10 p-2 z-20">
              <h2 className="text-lg font-bold text-white transition duration-300 group-hover:text-white">
                {room.title}
              </h2>
            </div>
            {/* Hover Overlay with Details and Buttons */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-black/50 flex flex-col justify-center items-center text-center p-4 z-10">
              <ul className="mb-4 space-y-1">
                <li className="text-white">{room.maxOccupancy}</li>
                <li className="text-white">{room.adults}</li>
                <li className="text-white">{room.children}</li>
              </ul>
              <div className="flex flex-wrap justify-center gap-2">
                <Link
                  href="/book"
                  className="px-3 py-1 bg-white text-black rounded hover:bg-amber-800 hover:text-white transition duration-300 text-sm"
                >
                  Book Now
                </Link>
                <button
                  onClick={() => handleViewMore(room)}
                  className="px-3 py-1 bg-white text-black rounded hover:bg-amber-800 hover:text-white transition duration-300 text-sm"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for View More */}
      {showModal && activeRoom && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold">
                {activeRoom.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-4">
              <Image
                src={activeRoom.image}
                alt={activeRoom.title}
                width={800}
                height={500}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Room Details</h3>
                <ul className="space-y-2">
                  <li>{activeRoom.maxOccupancy}</li>
                  <li>{activeRoom.adults}</li>
                  <li>{activeRoom.children}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Amenities</h3>
                <ul className="space-y-2">
                  <li>Free Wi-Fi</li>
                  <li>Daily Housekeeping</li>
                  <li>Room Service</li>
                  <li>TV with Cable</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <Link
                href="/book"
                className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors"
              >
                Book Now
              </Link>
              <button
                onClick={closeModal}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Elevate;
