"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ElevatePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeRoom, setActiveRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      image: '/path/to/room1.jpg', // Replace with your image path
      title: 'Premium Non AC Double',
      maxOccupancy: 'Max Occupancy: 2',
      adults: 'Adults: 2',
      children: 'Children: 1',
      details: 'A cozy non AC double room with elegant interiors and modern amenities.',
    },
    {
      id: 2,
      image: '/path/to/room2.jpg', // Replace with your image path
      title: 'Premium AC Double',
      maxOccupancy: 'Max Occupancy: 3',
      adults: 'Adults: 3',
      children: 'Children: 1',
      details: 'Enjoy a cool and comfortable stay in our premium AC double room.',
    },
    {
      id: 3,
      image: '/path/to/room3.jpg', // Replace with your image path
      title: 'Premium Non AC Four Bed',
      maxOccupancy: 'Max Occupancy: 4',
      adults: 'Adults: 4',
      children: 'Children: 1',
      details: 'Spacious and elegant room ideal for families and groups.',
    },
    {
      id: 4,
      image: '/path/to/room4.jpg', // Replace with your image path
      title: 'Premium AC Four Bed',
      maxOccupancy: 'Max Occupancy: 4',
      adults: 'Adults: 4',
      children: 'Children: 1',
      details: 'A modern room with AC for an extra comfortable experience.',
    },
    {
      id: 5,
      image: '/path/to/room5.jpg', // Replace with your image path
      title: 'Premium Suite',
      maxOccupancy: 'Max Occupancy: 3',
      adults: 'Adults: 2',
      children: 'Children: 1',
      details: 'Indulge in luxurious living with our premium suite offering unmatched comfort.',
    },
    {
      id: 6,
      image: '/path/to/room6.jpg', // Replace with your image path
      title: 'Deluxe AC Double',
      maxOccupancy: 'Max Occupancy: 3',
      adults: 'Adults: 2',
      children: 'Children: 1',
      details: 'A deluxe room setting with modern designs and all essential amenities.',
    },
    {
      id: 7,
      image: '/path/to/room7.jpg', // Replace with your image path
      title: 'Deluxe AC Four Bed',
      maxOccupancy: 'Max Occupancy: 4',
      adults: 'Adults: 4',
      children: 'Children: 1',
      details: 'Spacious room tailored for larger groups or family vacations.',
    },
    {
      id: 8,
      image: '/path/to/room8.jpg', // Replace with your image path
      title: 'Deluxe AC Suite',
      maxOccupancy: 'Max Occupancy: 4',
      adults: 'Adults: 4',
      children: 'Children: 1',
      details: 'Experience the pinnacle of luxury with our deluxe AC suite.',
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
    <div className="container mx-auto p-4">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-semibold mb-2 font-cinzel">Elevate Your Stay With Unmatched Hospitality</h3>
        <h2 className="text-4xl font-bold mb-4 font-raleway">Every Room Ensures Comfort</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Unveil divine spirituality at Hotel Sonar Bangla, Tarapith, as opulent luxuries seamlessly blend with the comforting embrace of sacred surroundings.
          Lavish chambers, adorned by the picturesque tapestry and spiritual magnificence of Tarapith, create an idyllic retreat, inviting you to embrace a serene pilgrimage escape.
        </p>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="relative border rounded-lg overflow-hidden shadow-lg group">
            <Image 
              src={room.image} 
              alt={room.title} 
              width={857} 
              height={508} 
              className="object-cover w-full h-48" 
            />
            <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
              <h2 className="text-lg font-semibold">{room.title}</h2>
            </div>
            <div className="p-4">
              <ul className="mb-4 text-gray-700 space-y-1">
                <li>{room.maxOccupancy}</li>
                <li>{room.adults}</li>
                <li>{room.children}</li>
              </ul>
              <div className="flex justify-between">
                <Link href="/book">
                  <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Book Now
                  </a>
                </Link>
                <button onClick={() => handleViewMore(room)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors">
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
          <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{activeRoom.title}</h2>
            <p className="mb-6 text-gray-700">{activeRoom.details}</p>
            <div className="flex justify-end">
              <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ElevatePage;