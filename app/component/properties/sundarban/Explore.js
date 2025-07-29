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
          title: "Sundarban National Park",
          content: "Sundarban National Park is a UNESCO World Heritage Site and one of the largest mangrove forests in the world. It is home to the famous Royal Bengal Tiger, along with saltwater crocodiles, spotted deer, various bird species, and other exotic wildlife. The park’s unique tidal waterways, mudflats, and small islands offer a surreal experience for nature lovers and wildlife enthusiasts. Boat safaris provide a chance to witness the untamed beauty of this biodiverse haven up close."
        },
        {
          title: "Sajnekhali Watch Tower",
          content: "Sajnekhali Watch Tower is one of the most popular spots in Sundarban for wildlife viewing. Located near the forest department's administrative office, it offers a panoramic view of the surrounding forest and river. The nearby Mangrove Interpretation Centre educates visitors on the rich biodiversity of the region. It's an ideal location to spot deer, monkeys, birds, and if lucky, a tiger in its natural habitat."
        },
        {
          title: "Dobanki Watch Tower & Canopy Walk",
          content: "Dobanki is famous for its elevated canopy walk that takes visitors through the forest treetops. This unique walkway allows for a thrilling perspective of the dense mangroves below. The watchtower here offers sightings of spotted deer, wild boars, and various avian species. It’s a must-visit for those looking to experience the wild from above without disturbing the natural environment."
        },
        {
          title: "Sudhanyakhali Watch Tower",
          content: "Sudhanyakhali Watch Tower is another prime location for wildlife spotting in the Sundarban region. It overlooks a freshwater pond where animals often come to drink, offering visitors a high chance of observing tigers, deer, and reptiles. The surrounding forest and wetlands provide a tranquil and immersive setting, perfect for nature photography and quiet contemplation."
        },
        {
          title: "Bonbibi Temple",
          content: "The Bonbibi Temple holds cultural and spiritual significance for the local people of Sundarban. Bonbibi is revered as the protector of the forest and its inhabitants, worshipped by both Hindus and Muslims. The temple symbolizes harmony and respect for nature, making it a must-visit for understanding the region’s deep-rooted spiritual connection with the environment."
        },
        {
          title: "Godkhali Ferry Ghat",
          content: "Godkhali Ferry Ghat is considered the gateway to Sundarban. From here, visitors embark on scenic boat rides through the delta’s winding waterways to reach their resorts and explore various forest zones. It’s the starting point of a tranquil journey into the world’s largest estuarine mangrove ecosystem, offering first glimpses of the serene riverine landscape."
        }
      ]
      ;

    return (
        <div className="sectiongap bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left pl-35 mb-5">
                    <h2 className="text-3xl sm:text-4xl font-gilda text-gray-800">
                        Explore the Wonders of Sundarban
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
