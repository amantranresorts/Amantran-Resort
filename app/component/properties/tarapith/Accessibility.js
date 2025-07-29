
"use client";
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Accessibility = () => {
  return (
    <div className="py-10 px-4 bg-[#f8f5f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-40">
        {/* Header Section */}
        <div className="text-left mb-10">
          <h3 className="text-base uppercase text-[#dfb574] font-semibold">Explore the Sacred Land of Tarapith</h3>
          <h2 className="text-4xl font-gilda">Here’s How To Reach Us</h2>
          <p className="text-gray-700 font-serif mx-auto">
            Know how to reach this luxury resort in Tarapith from Kolkata, including the distance from major locations in the city.
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
                { name: 'Kolkata Airport', distance: '218 km' },
                { name: 'Tarapith Road Railway Station', distance: '6 km' },
                { name: 'Tarapith Temple', distance: '1 km' },
                { name: 'Tarapith Maha Sasan', distance: '1 km' },
                { name: 'Bamakhepa Temple', distance: '223.3 km' },
                { name: 'Mallarpur Shiv Temple', distance: '17.4 km' },
                { name: 'Birchandrapur Temple', distance: '13.2 km' },
                { name: 'Bakreshwar Temple', distance: '67.0 km' },
                { name: 'Kankaleshwari Temple', distance: '119.1 km' },
                { name: 'Nalateswari Temple', distance: '23.0 km' },
              ].map((item, index) => (
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
                      4QQM+V9R, Tarapith Road, Belia, Rampurhat, West Bengal 731233
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#dfb574] mr-3">
                    <FaPhone className="text-2xl animate-pulse" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone:</div>
                    <div className="text-gray-700">
                      <a href="tel:+919147389021" className="hover:underline block">+91 9147389021</a>
                      <a href="tel:+919147389020" className="hover:underline block mt-1">+91 9147389020</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#dfb574] mr-3">
                    <FaEnvelope className="text-2xl animate-pulse" />
                  </div>
                  <div>
                    <div className="font-semibold">Email:</div>
                    <a 
                      href="mailto:tarapith@hotelsonarbangla.com" 
                      className="text-blue-600 hover:underline"
                    >
                      amantranmarketing2025@gmail.com
                    </a> <br />
                    <a 
                      href="mailto:tarapith@hotelsonarbangla.com" 
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58251.94780387413!2d87.74111080255192!3d24.14553082084851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa1e87fb8bfb8b%3A0xf891e302e97ae7c5!2sAmantran%20Resort!5e0!3m2!1sen!2sin!4v1721506133461!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="border-0"
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
