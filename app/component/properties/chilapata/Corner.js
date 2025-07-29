"use client";

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaThumbsUp } from 'react-icons/fa';

const practiceAreas = [
    {
        title: 'Whispers of the Wild, Wrapped in Comfort',
        image: '/images/chilapata/out2.jpg',
    },
    {
        title: 'A Symphony of Serenity and Style',
        image: '/images/chilapata/hotel4.jpg',
    },
    {
        title: 'Where Wilderness Meets Refined Living',
        image: '/images/chilapata/out3.jpg',
    },
    {
        title: "Elegance Rooted in Nature’s Heart",
        image: '/images/chilapata/out5.jpg',
    },
    {
        title: "Rustic Charms, Regal Comforts",
        image: '/images/chilapata/out4.jpg',
    },
    {
        title: "Comfort That Breathes with the Forest",
        image: '/images/chilapata/night.jpg',
    },
    {
        title: "Sophistication Beneath the Canopy",
        image: '/images/chilapata/out13.jpg',
    },
    {
        title: "In the Lap of Nature, Draped in Grace",
        image: '/images/chilapata/hotel5.jpg',
    },
    {
        title: "Tranquility Woven into Every Detail",
        image: '/images/chilapata/out7.jpg',
    },
    {
        title: "Escape. Embrace. Exhale.",
        image: '/images/chilapata/zoo.webp',
    },
    {
        title: "Where Every Stay Tells a Forest Tale",
        image: '/images/chilapata/safari.webp',
    },
    {
        title: "Nature’s Embrace, Amantran’s Touch",
        image: '/images/chilapata/Chilapata-Forest.webp',
    },
    {
        title: "The Soul of the Forest, Styled for You",
        image: '/images/chilapata/sightseeing.jpg',
    }
];

const Practice = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-out',
            delay: 100,
        });

    }, []);

    const handleCardClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };


    // Function to render card for reuse in both mobile and desktop views
    const renderCard = (area, index) => (
        <div 
            key={index} 
            onClick={() => handleCardClick(area.image)}
            className="cursor-pointer flex flex-col group bg-white shadow-md rounded overflow-hidden h-64 w-full" 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
        >
            <div style={{ height: '90%' }} className="overflow-hidden relative">
                <img
                    src={area.image}
                    alt={area.title}
                    style={{ transitionDuration: '3000ms' }}
                    className="w-full h-full object-cover transform transition-transform ease-in-out group-hover:scale-110"
                />
                <div
                    style={{ transitionDuration: '3000ms' }}
                    className="absolute inset-0 bg-black opacity-0 transition-opacity ease-in-out group-hover:opacity-25"
                ></div>
            </div>
            <div style={{ height: '10%' }} className="p-4 flex items-center justify-center">
                <h1 className="text-sm font-medium text-black text-center">{area.title}</h1>
            </div>
        </div>
    );

    return (
        <div className="p-5 bg-[#f8f5f0]">
            {/* Header Section */}
            <div className="w-full max-w-screen-xl mx-auto mb-10" data-aos="fade-up">
                <span className="block text-md text-[#d49c45] font-semibold">
                    Every Corner of the Resort is Embraced in Luxury
                </span>
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-4xl font-gilda">
                        Take a Look at the Surroundings
                    </h1>
                </div>
                <span className="block text-sm font-serif mb-2">
                Take a quick virtual stroll through the enchanting world of Hotel Amantran Chilapata. Amidst the lush greenery of the Chilapata forest, discover a property that blends rustic charm with elegant interiors, where every corner tells a story of serene beauty and comfort. The soothing ambiance and natural grace will surely tempt you to plan your escape to this hidden gem in Chilapata soon.
                </span>
            </div>
            {/* Responsive Grid Layout for All Devices */}
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {practiceAreas.map((area, index) => renderCard(area, index))}
                </div>
            </div>

            {/* Modal for Enlarged Image */}
            {selectedImage && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Enlarged view"
                            className="max-w-full max-h-[90vh] rounded shadow-lg"
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal();
                            }}
                            className="absolute top-2 right-2 bg-white p-1 rounded-full text-black"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            {/* Centered Book Now Button with Thumbs Up Icon */}
            <div className="mt-8 flex justify-center" data-aos="fade-up">
                <button className="bg-[#d49c45] text-white px-6 py-3 rounded-full flex items-center hover:bg-[#c08a35] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#d49c45]">
                    <FaThumbsUp className="mr-2" />
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default Practice;
