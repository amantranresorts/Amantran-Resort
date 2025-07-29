"use client";
import React from 'react';
import { FaPhone } from 'react-icons/fa';

const Offer = () => {
    const phoneNumbers = [
        { id: 1, number: "+91-91473 89022", href: "tel:+91-91473 89022" },
        { id: 2, number: "+91-91473 89023", href: "tel:+91-91473 89023" },
        { id: 3, number: "+91-91473 89029", href: "tel:+91-91473 89029" }
    ];

    return (
        <div className="py-12 px-4 sm:px-8 md:px-10 lg:px-40 bg-[#f8f5f0]">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Text Content */}
                    <div className="w-full md:w-2/3 mb-8 md:mb-0 px-2">
                        <div className="wow slideInUp">
                            <h3 className="text-base sm:text-lg md:text-xl uppercase text-[#d49c45]">
                                Tailor Made Packages and Offerings
                            </h3>
                            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-gilda text-gray-700">
                                MICE/GROUP Packages
                            </h2>
                            <p className="mt-2 text-sm sm:text-base md:text-lg font-serif text-amber-950 leading-relaxed">
                                Transform your journey with a personal touch. Experience the magic of customization and tailor your package as per your requirement, because true luxury lies in the little things that make it uniquely yours.
                            </p>
                        </div>
                    </div>
                    {/* Contact Numbers */}
                    <div className="w-full md:w-1/3 tick_double wow zoomIn grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
                        {phoneNumbers.map((phone) => (
                            <div key={phone.id} className="flex items-center p-3 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                                <FaPhone className="text-[#603100] text-xl mr-3" />
                                <a href={phone.href} className="text-[#603100] font-bold break-words text-sm sm:text-base">
                                    {phone.number}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
