import React from "react";
import Image from "next/image";

const Discover = () => {
  return (
    <div className="py-8 bg-[#f8f5f0]">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Left Side Text */}
          <div className="w-full md:w-1/2">
            <div className="whitebox wow slideInUp tick tick_double mb-3 p-6 bg-white shadow-lg border border-gray-200 rounded">
              <div className="section_title mb-4">
                <h3 className="text-base font-barlow font-semibold uppercase text-[#d49c45]">
                Embrace Nature's Serenity & Luxury
                </h3>
                <h2 className="text-3xl sm:text-4xl font-gilda text-gray-800">
                The Best Hotel In Chilapata
                </h2>
              </div>
              <p className="mb-4 font-serif text-gray-700 text-sm sm:text-base">
              Nestled amidst the lush greenery of the Chilapata Forest, Amantran Resort, The Best Hotel InChilapata offers a harmonious blend of comfort and nature. Located just 11 miles from Alipurduar Junction, our resort provides an ideal retreat for those seeking peace and rejuvenation. Guests can indulge in our well-appointed rooms, savor delectable cuisine at our on-site restaurant, and explore the rich biodiversity of the surrounding forest. With amenities like free Wi-Fi, air conditioning, and room service, every stay promises relaxation and convenience. Experience the tranquility of nature without compromising on luxury at Amantran Resort Chilapata.You can also visit <a href="https://www.amantranresorts.in/properties/sundarban" className="font-bold">best Hotel in Sundarban</a>
              </p>
              <ul className="grid grid-cols-2 gap-2 font-serif text-xs sm:text-sm">
                <li className="p-2 bg-[#f4efdf] border border-gray-300 rounded text-gray-700">
                  Settled in divine aura
                </li>
                <li className="p-2 bg-[#f4efdf] border border-gray-300 rounded text-gray-700">
                  Comfortable Accommodation
                </li>
                <li className="p-2 bg-[#f4efdf] border border-gray-300 rounded text-gray-700">
                  Prompt Room Service
                </li>
                <li className="p-2 bg-[#f4efdf] border border-gray-300 rounded text-gray-700">
                  Recreational Amenities and Facilities
                </li>
                <li className="p-2 bg-[#f4efdf] border border-gray-300 rounded text-gray-700">
                  Warm hospitality
                </li>
                <li className="p-2 bg-[#f4efdf] border border-gray-300 rounded text-gray-700">
                  High-speed Wi-Fi connectivity
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <div className="sticky top-8 space-y-6">
              {/* Main Image Container with Secondary Image Overlay */}
              <div className="relative w-full h-72 sm:h-80 md:h-92">
                <Image
                  src="/images/chilapata/Chilapata.jpg"
                  alt="Main image of Tarapith Mandir"
                  fill
                  className="object-cover rounded shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 md:-bottom-15 md:-right-15 w-2 h-24 md:w-42 md:h-42 border-4 border-white rounded shadow-lg">
                  <Image
                    src="/images/hotel1.jpg"
                    alt="Secondary image: Swimming pool"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              {/* Book Now Button */}
              <div className="mt-4 text-center md:text-left">
                <a
                  className="btn btn-primary pulseit inline-block bg-[#d49c45] text-white px-4 py-2 rounded hover:bg-amber-700 shadow transition duration-300"
                  href="tel:9147389022"
                >
                  <span className="mr-2">
                    <i className="fa-regular fa-thumbs-up"></i>
                  </span>
                  Book Now
                </a>
              </div>
            </div>
          </div>
          {/* End Right Side */}
        </div>
      </div>
    </div>
  );
};

export default Discover;
