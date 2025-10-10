"use client";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

const Explore = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Tarapith Temple",
      content:
        "Tarapith Temple is dedicated to the goddess Tara, who is worshipped as a form of the goddess Kali. It is believed to be one of the 51 Shakti Peethas, which are the holiest shrines of the Hindu religion. The temple complex is quite large and includes several smaller temples, a pond, and a sacred cremation ground. The main deity of the temple, Tara, is represented by a silver idol seated on a lotus. The idol is adorned with ornaments and is considered to be extremely powerful and auspicious. The temple is also known for its unique rituals and practices, such as the offering of alcohol and meat to the goddess. These offerings are believed to appease the goddess and bring good fortune to the devotees.",
    },
    {
      title: "Tarapith Maha Sasan",
      content:
        "Tarapith Burning Ghat is a sacred cremation ground located in the town of Tarapith in the Birbhum district of West Bengal, India. It is considered to be a very important and auspicious place for the Hindu religion, as it is believed that the ashes of the deceased who are cremated here are blessed by the goddess Tara and receive her divine protection and blessings. Overall, the Tarapith Burning Ghat is a significant and sacred place for Hindus and is believed to offer a gateway for the souls of the departed to attain liberation and spiritual transcendence.",
    },
    {
      title: "Tarapith Temple",
      content:
        "Tarapith Temple is dedicated to the goddess Tara, who is worshipped as a form of the goddess Kali. It is believed to be one of the 51 Shakti Peethas, which are the holiest shrines of the Hindu religion. The temple complex is quite large and includes several smaller temples, a pond, and a sacred cremation ground. The main deity of the temple, Tara, is represented by a silver idol seated on a lotus. The idol is adorned with ornaments and is considered to be extremely powerful and auspicious. The temple is also known for its unique rituals and practices, such as the offering of alcohol and meat to the goddess. These offerings are believed to appease the goddess and bring good fortune to the devotees.",
    },
    {
      title: "Tarapith Maha Sasan",
      content:
        "Tarapith Burning Ghat is a sacred cremation ground located in the town of Tarapith in the Birbhum district of West Bengal, India. It is considered to be a very important and auspicious place for the Hindu religion, as it is believed that the ashes of the deceased who are cremated here are blessed by the goddess Tara and receive her divine protection and blessings. Overall, the Tarapith Burning Ghat is a significant and sacred place for Hindus and is believed to offer a gateway for the souls of the departed to attain liberation and spiritual transcendence.",
    },
    // Add more sections as needed...
  ];

  return (
    <div className="sectiongap bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left pl-35 mb-5">
          <h2 className="text-3xl sm:text-4xl font-raleway text-gray-800">
            Explore the Wonders of Tarapith
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
                      openIndex === index
                        ? "rotate-90 text-blue-500"
                        : "text-gray-500"
                    }`}
                  />
                  <span className="text-base hover font-medium text-gray-700">
                    {section.title}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  {openIndex === index ? "Hide" : "Show"}
                </span>
              </button>
              <div
                id={`collapse${index}`}
                className={`transition-all duration-500 ease-in-out bg-[#f8f5f0] px-5 overflow-hidden ${
                  openIndex === index ? "max-h-screen py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
