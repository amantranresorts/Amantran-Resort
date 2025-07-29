"use client"
import React from 'react';
import { FiWifi } from 'react-icons/fi';
import { FaParking, FaConciergeBell, FaUtensils, FaSwimmingPool, FaGamepad, FaChild, FaCalendarAlt, FaCoffee, FaBicycle, FaFish, FaDoorOpen, FaDumbbell, FaSnowflake, FaCocktail } from 'react-icons/fa';

const featuresData = [
  { title: "Wifi", description: "Free Wifi available throughout the property", icon: <FiWifi className="text-4xl text-blue-500" /> },
  { title: "Free Parking", description: "Spacious parking area for guests", icon: <FaParking className="text-4xl text-green-500" /> },
  { title: "Room Service", description: "24/7 room service at your disposal", icon: <FaConciergeBell className="text-4xl text-purple-500" /> },
  { title: "Restaurant", description: "Fine dining experience on site", icon: <FaUtensils className="text-4xl text-red-500" /> },
  { title: "Swimming Pool", description: "Relax in our luxurious pool", icon: <FaSwimmingPool className="text-4xl text-teal-500" /> },
  { title: "Indoor Games", description: "Fun activities available indoors", icon: <FaGamepad className="text-4xl text-orange-500" /> },
  { title: "Children Activities", description: "Various activities for young guests", icon: <FaChild className="text-4xl text-pink-500" /> },
  { title: "Conference Hall", description: "Modern facilities for effective meetings", icon: <FaCalendarAlt className="text-4xl text-indigo-500" /> },
  { title: "Cafe", description: "Cozy ambiance for coffee lovers", icon: <FaCoffee className="text-4xl text-yellow-500" /> },
  { title: "Cycling", description: "Bike rentals available", icon: <FaBicycle className="text-4xl text-lime-500" /> },
  { title: "Fishing Deck", description: "Enjoy fishing on our deck", icon: <FaFish className="text-4xl text-cyan-500" /> },
  { title: "Private Balcony", description: "Relax with scenic views", icon: <FaDoorOpen className="text-4xl text-amber-500" /> },
  { title: "Gymnasium", description: "State-of-the-art gym facilities", icon: <FaDumbbell className="text-4xl text-fuchsia-500" /> },
  { title: "Mini Fridge", description: "In-room mini fridge for your convenience", icon: <FaSnowflake className="text-4xl text-sky-500" /> },
  { title: "Bar Counter", description: "Enjoy our signature cocktails", icon: <FaCocktail className="text-4xl text-rose-500" /> },
];

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-10 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold text-amber-600 font-barlow">OUR SERVICES</h2>
        <h2 className="text-3xl md:text-4xl text-black font-gilda mt-2">Hotel Features &amp; Conveniences</h2>
        <p className="mt-4 max-w-2xl mx-auto font-serif text-gray-600">
          Enjoy a relaxing stay with all our facilities right at your service for a wonderful experience at our beautiful range of abodes.
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:px-40">
        {featuresData.map((feature, index) => (
          <div 
            key={index} 
            className="group bg-white shadow-lg shadow-gray-700 rounded-lg p-6 text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-amber-800 text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-900 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
