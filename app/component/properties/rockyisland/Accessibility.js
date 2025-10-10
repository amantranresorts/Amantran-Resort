
"use client";
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Accessibility = () => {
  return (
    <div className="py-10 px-4 bg-[#f8f5f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-40">
        {/* Header Section */}
        <div className="text-left mb-10">
          <h3 className="text-base uppercase text-[#dfb574] font-semibold">Explore the Sacred Land of Rocky Island</h3>
          <h2 className="text-4xl font-raleway">Here’s How To Reach Us</h2>
          <p className="text-gray-700 font-open-sans mx-auto">
            Know how to reach this luxury resort in Rocky Island from Kolkata, including the distance from major locations in the city.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Distance Information */}
          <div className="bg-white p-6 shadow-lg rounded-lg top-4 border border-gray-100">
            <h4 className="text-xl font-bold flex items-center mb-4">
              <img 
                src="https://www.hotelsonarbangla.com/wp-content/themes/hsb/images/distance.png" 
                alt="Distance Icon" 
                className="inline-block mr-2 w-6 h-6" 
              />
              Distance From
            </h4>
            <p className="text-gray-600 mb-4">
              Reaching the Amantran Resort is easy. Below are the distances from various prominent locations in the city.
            </p>
            <ul className="space-y-2">
              {[
  { name: 'Bagdogra Airport', distance: '59.3 km' },
  { name: 'New Mal Junction Railway Station', distance: '30 km' },
  { name: 'Murti River', distance: '0.1 km' },
  { name: 'Samsing Village', distance: '1 km' },
  { name: 'Suntalekhola', distance: '1 km' },
  { name: 'Laliguras Picnic Spot', distance: '2.5 km' },
  { name: 'Rocky Island Campsite', distance: '0.5 km' },
  { name: 'Lataguri', distance: '24.6 km' },
  { name: 'Gorumara National Park', distance: '25 km' },
  { name: 'Chalsa', distance: '30 km' },
  { name: 'Jaldhaka River Viewpoint', distance: '12 km' },
  { name: 'Buxa Tiger Reserve', distance: '75 km' }
]
.map((item, index) => (
                <li key={index} className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold">{item.name}</span>
                  <span className="bg-amber-950 text-white px-2 py-0.5 rounded-xl text-[10px]">{item.distance}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Map Section */}
          <div className="space-y-8">
            {/* Get In Touch Section */}
            <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-100">
              <h4 className="text-xl font-bold flex items-center mb-4">
                <img 
                  src="https://www.hotelsonarbangla.com/wp-content/themes/hsb/images/thumbsup.png" 
                  alt="Contact Icon" 
                  className="inline-block mr-2 w-6 h-6" 
                />
                Get in Touch
              </h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[#dfb574] mr-3">
                    <FaMapMarkerAlt className="text-2xl animate-pulse" />
                  </div>
                  <div>
                    <div className="font-semibold">Address:</div>
                    <p className="text-gray-700">
                     Samsing Lower, Bhalukhop, Jaldhaka, Samsing Khasmahal, 735223
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#dfb574] mr-3">
                    <FaPhone className="text-2xl animate-pulse" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone:</div>
                    <p className="text-gray-700 space-y-1">
                      <a href="tel:+91-9147389024" className="hover:underline">+91 9147389024 ||</a>
                      <a href="tel:+91-9147389025" className="hover:underline">+91-9147389025 ||</a>
                      <a href="tel:+91-9147389029" className="hover:underline">+91-9147389029</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#dfb574] mr-3">
                    <FaEnvelope className="text-2xl animate-pulse" />
                  </div>
                  <div>
                    <div className="font-semibold">Email:</div>
                    <a 
                      href="mailto:mantranmarketing2025@gmail.com" 
                      className="text-blue-600 hover:underline"
                    >
                      amantranmarketing2025@gmail.com
                    </a> <br />
                    <a 
                      href="mailto:mantranmarketing2025@gmail.com" 
                      className="text-blue-600 hover:underline"
                    >
                      info@amantranresorts.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Map */}
            <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-100">
              <h4 className="text-xl font-bold flex items-center mb-4">
                <img 
                  src="https://www.hotelsonarbangla.com/wp-content/themes/hsb/images/location.png" 
                  alt="Location Map Icon" 
                  className="inline-block mr-2 w-6 h-6" 
                />
                Location Map
              </h4>
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.7113528222967!2d88.8045106!3d27.0076792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3f9007fa09829%3A0x624dcbb9f6b757c3!2sAamantran%20Hotel%20%26%20Resort%20(Rocky%20island)!5e0!3m2!1sen!2sin!4v1745065834489!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="border-0"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
