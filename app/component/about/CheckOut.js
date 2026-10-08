"use client";
import Link from "next/link";
import { FiMap } from "react-icons/fi"; // Map icon for property locations

const CheckOut = () => {
  const properties = [
    {
      name: "Chilapata",
      image: "/images/chilapata/hotel1.jpg",
      link: "/properties/chilapata",
    },
    {
      name: "Rocky Island",
      image: "/images/rocky.jpg",
      link: "/properties/rocky-island",
    },
    {
      name: "Sundarbon",
      image: "/images/slide4.jpg",
      link: "/properties/sundarbon",
    },
    {
      name: "Tarapith",
      image: "/images/tarapith/out2.jpg",
      link: "/properties/tarapith",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 p-6">
      <p className="text-xl text-left font-semibold uppercase font-cinzel text-[#DAA520]">
        Explore Our Properties
      </p>
      <h1 className="text-5xl text-left font-raleway text-gray-800 mb-8">
        Explore Our Properties
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <Link key={property.name} href={property.link} passHref>
            <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer transform hover:scale-105">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-amber-950 font-raleway text-center flex items-center justify-center">
                  <FiMap className="mr-2 text-[#DAA520]" /> {property.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
