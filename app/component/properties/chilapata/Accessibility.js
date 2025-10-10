"use client";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Accessibility = () => {
  return (
    <div className="py-10 px-4 bg-[#f8f5f0]">
      {/* Responsive container width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-left mb-10">
          <h3 className="text-base uppercase text-[#dfb574] font-semibold">
            Explore the Sacred Land of Chilapata
          </h3>
          <h2 className="text-3xl sm:text-4xl font-raleway mt-2">
            Here’s How To Reach Us
          </h2>
          <p className="text-gray-700 font-open-sans mt-4">
            Discover the convenience of reaching our luxury resort, nestled
            amidst nature in West Bengal. Find directions and distances from key
            locations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Distance Information */}
          <div className="bg-white p-6 shadow-lg rounded-lg top-4 border border-gray-100">
            <h4 className="text-xl font-bold font-cinzel flex items-center mb-4">
              <img
                src="https://www.hotelsonarbangla.com/wp-content/themes/hsb/images/distance.png"
                alt="Distance Icon"
                className="inline-block mr-2 w-6 h-6"
              />
              Distance From
            </h4>
            <p className="text-gray-600 mb-4">
              Reaching Amantran Resort Chilapata is a breeze. Below we have
              listed distances from various prominent locations.
            </p>
            <ul className="space-y-2">
              {[
                { name: "Hasimara Railway Station", distance: "20 km" },
                { name: "Alipurduar Junction", distance: "25 km" },
                { name: "Bagdogra Airport (Siliguri)", distance: "155 km" },
                { name: "Jaldapara National Park", distance: "18 km" },
                { name: "Buxa Tiger Reserve", distance: "35 km" },
                { name: "Phuentsholing (Bhutan Border)", distance: "45 km" },
                { name: "Cooch Behar Palace", distance: "70 km" },
                { name: "Jayanti Hills & Mahakal Cave", distance: "40 km" },
                { name: "Totopara Tribal Village", distance: "22 km" },
                { name: "South Khayerbari Rescue Center", distance: "12 km" },
                { name: "Chilapata Forest Safari Point", distance: "1.5 km" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2 last:border-0"
                >
                  <span className="font-semibold">{item.name}</span>
                  <span className="bg-amber-950 text-white px-2 py-0.5 rounded-xl text-[10px]">
                    {item.distance}
                  </span>
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
                      Dakshin Mendabari, Kalchini, Chilapata, West Bengal 735214
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
                      <a
                        href="tel:+91-9147389022"
                        className="hover:underline block"
                      >
                        +91-91473 89022
                      </a>
                      <a
                        href="tel:+91-9147389023"
                        className="hover:underline block"
                      >
                        +91-91473 89023
                      </a>
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
                      href="mailto:tarapith@hotelsonarbangla.com"
                      className="text-blue-600 hover:underline"
                    >
                      amantranmarketing2025@gmail.com
                    </a>{" "}
                    <br />
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.7261152369474!2d89.4158796!3d26.561065199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2532b86c0821d%3A0x754bc8c28efd3685!2sAmantran%20Resort%20Chilapata!5e0!3m2!1sen!2sin!4v1744443146825!5m2!1sen!2sin"
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
