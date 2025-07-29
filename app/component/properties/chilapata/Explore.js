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
            title: "Chilapata Forest",
            content: "A dense forest corridor connecting Jaldapara National Park and Buxa Tiger Reserve, Chilapata is rich in wildlife and history. The forest is home to elephants, leopards, and a variety of birds. A jeep safari through this mystical woodland offers an immersive experience into the heart of nature."
          },
          {
            title: "Jaldapara National Park",
            content: "Located on the banks of the Torsa River, Jaldapara is famous for its population of Indian one-horned rhinoceroses. Elephant safaris and jeep rides provide an excellent chance to witness these majestic creatures along with other wildlife like bison, deer, and wild boar."
          },
          {
            title: "Buxa Tiger Reserve",
            content: "Known for its scenic beauty and rich biodiversity, Buxa is a haven for trekkers and wildlife lovers. The Buxa Fort and trails leading to Jayanti offer spiritual calm and historical intrigue amidst thick forest and hilly terrain."
          },
          {
            title: "Totopara Tribal Village",
            content: "Home to the Toto tribe, one of the smallest indigenous communities in India, Totopara offers visitors a glimpse into unique traditions, language, and lifestyle preserved over centuries. A visit here promises cultural immersion and respectful interaction."
          },
          {
            title: "Jayanti & Mahakal Cave",
            content: "A serene riverside hamlet along the Jayanti River, known as the 'Queen of Dooars.' The trek to Mahakal Cave—a revered Shiva site nestled within the Buxa hills—is a spiritually enriching experience surrounded by natural beauty."
          },
          {
            title: "South Khayerbari Rescue Center",
            content: "A wildlife rescue and rehabilitation center that houses leopards and Royal Bengal tigers rescued from circuses. Visitors can observe these majestic animals up close while learning about conservation efforts in the region."
          }
        // Add more sections as needed...
    ];

    return (
        <div className="sectiongap bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left pl-35 mb-5">
                    <h2 className="text-3xl sm:text-4xl font-gilda text-gray-800">
                        Explore the Wonders of Chilapata
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
