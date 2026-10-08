"use client";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Accessibility = () => {
  return (
    <div className="py-10 px-4 bg-[#f8f5f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-40">
        {/* Header Section */}
        <div className="text-left mb-10">
          <h3 className="text-base uppercase text-[#dfb574] font-semibold">
            Explore the Sacred Land of Sundarban
          </h3>
          <h2 className="text-4xl font-raleway">Here’s How To Reach Us</h2>
          <p className="text-gray-700 font-open-sans mx-auto ">
            Know how to reach this luxury resort in Sundarban from Kolkata,
            including the distance from major locations in the city.
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
              Reaching the Amantran Resort is easy. Below are the distances from
              various prominent locations in the city.
            </p>
            <ul className="space-y-2">
              {[
                {
                  name: "Kolkata Airport (Netaji Subhas Chandra Bose International Airport)", distance: "110 km",},
                { name: "Canning Railway Station", distance: "45 km" },
                { name: "Godkhali Ferry Ghat", distance: "13 km" },
                { name: "Sajnekhali Watch Tower", distance: "6 km" },
                { name: "Sudhanyakhali Watch Tower", distance: "10 km" },
                { name: "Dobanki Watch Tower", distance: "18 km" },
                { name: "Sundarban National Park", distance: "8 km" },
                { name: "Bonbibi Temple", distance: "7 km" },
                { name: "Pakhiralay", distance: "5 km" },
                { name: "Jharkhali Picnic Spot", distance: "30 km" },
                { name: "Henry Island", distance: "100 km" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
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
                    Vill- Sonagaon, P.O - Dulki, P.S - Gosaba, Sunderban, Sunderban, West Bengal 743370
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
                      <a
                        href="tel:+919147389026"
                        className="hover:underline block"
                      >
                        +91 9147389026
                      </a>
                      <a
                        href="tel:+919147389029"
                        className="hover:underline block mt-1"
                      >
                        +91 9147389029
                      </a>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.827438850823!2d88.80789829999999!3d22.132554100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0189bbb4fa0459%3A0x389d04bd33abda54!2sAmantran%20Resorts%20Sunderban!5e0!3m2!1sen!2sin!4v1745223134557!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="border-0"
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
