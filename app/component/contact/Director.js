// components/Director.js

import React from 'react';

const Director = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-300 flex flex-col md:flex-row m-4">
      {/* Image Section */}
      <div className="relative md:w-1/2 w-full h-95 md:h-auto">
        <img
          src="images/md.jpg"
          alt="Managing Director"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        {/* Name and title */}
        <div className="absolute bottom-6 left-6">
          <h2 className="text-white text-3xl font-extrabold drop-shadow-lg tracking-wide">
            Swapan Kumar Das
          </h2>
          <span className="inline-block mt-1 px-3 py-1 bg-yellow-400/90 text-gray-900 text-sm font-semibold rounded-full shadow-md">
            Managing Director
          </span>
        </div>
        {/* Decorative gold accent */}
        <div className="absolute top-0 left-0 w-24 h-2 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-br-2xl"></div>
      </div>
      {/* Text Section */}
      <div className="md:w-1/2 w-full p-8 pb-6 flex flex-col justify-center">
        <p className="text-gray-700 text-lg leading-relaxed font-medium mb-4">
          With over <span className="font-bold text-yellow-600">20 years</span> of experience in the hospitality industry, Swapan Kumar Das has been instrumental in shaping our hotel's vision and success.
        </p>
        <ul className="mt-2 mb-4 space-y-2 text-gray-600 text-base list-disc list-inside">
          <li>Oversees all aspects of hotel operations.</li>
          <li>Implements innovative strategies to enhance guest experiences.</li>
          <li>Leads a team of <span className="font-semibold text-yellow-600">200+</span> dedicated hospitality professionals.</li>
          <li>Committed to sustainable practices and community engagement.</li>
        </ul>
        <p className="text-gray-700 text-base">
          Under his leadership, our hotel has consistently achieved high guest satisfaction scores and industry recognition.
        </p>
        {/* Signature */}
        <div className="mt-8 flex items-center gap-3">
          <span className="text-gray-800 font-semibold text-lg">Swapan Kumar Das</span>
        </div>
      </div>
    </div>
  );
};

export default Director;
