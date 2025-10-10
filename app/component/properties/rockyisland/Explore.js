"use client"
import React, { useState } from 'react';
import { FaCaretRight } from 'react-icons/fa';

const Explore = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
          title: "Murti River",
          content: "A serene river flowing beside the resort, ideal for nature walks, bird watching, and experiencing the tranquil beauty of Dooars."
        },
        {
          title: "Neora Valley National Park",
          content: "A biodiversity hotspot located nearby, offering rich flora and fauna, and opportunities for trekking and wildlife photography."
        },
        {
          title: "Suntalekhola",
          content: "A picturesque hamlet known for its hanging bridges, orange orchards, and as a gateway to various trekking routes."
        },
        {
          title: "Mouchuki",
          content: "A scenic spot offering panoramic views of the Himalayan range and lush green plains, perfect for short treks and nature exploration."
        },
        {
          title: "Jhandidara Viewpoint",
          content: "A vantage point providing breathtaking views of the surrounding hills and valleys, especially mesmerizing during sunrise and sunset."
        }
      ]
      ;

    return (
        <div className="sectiongap bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left pl-35 mb-5">
                    <h2 className="text-3xl sm:text-4xl font-raleway text-gray-800">
                        Explore the Wonders of Rocky Island
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto">
                 {sections.map((section, index) => (
                        <div 
                            key={index} 
                            className="mb-2 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-2 bg-white hover:bg-gray-50 transition-colors"
                                aria-expanded={openIndex === index}
                                aria-controls={`collapse${index}`}
                            >
                                <div className="flex items-center text-left">
                                    <FaCaretRight 
                                        className={`mr-3 transform transition-transform duration-300 ${
                                            openIndex === index ? 'rotate-90 text-blue-500' : 'text-gray-500'
                                        }`} 
                                    />
                                    <span className="text-base hover font-medium text-gray-700">{section.title}</span>
                                </div>
                                <span className="text-sm text-gray-500">{openIndex === index ? 'Hide' : 'Show'}</span>
                            </button>
                            <div
                                id={`collapse${index}`}
                                className={`transition-all duration-500 ease-in-out bg-[#f8f5f0] px-5 overflow-hidden ${
                                    openIndex === index ? 'max-h-screen py-4' : 'max-h-0'
                                }`}
                            >
                                <p className="text-gray-600 leading-relaxed">{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;
