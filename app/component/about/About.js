// components/About.js
import React from "react";

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f8fafc] via-[#f3f4f6] to-[#e0e7ef] py-16 px-4 md:px-20">
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-400/30 to-transparent rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-emerald-300/20 to-transparent rounded-full blur-2xl z-0"></div>

      <div className="container mx-auto border-amber-950 border-1 p-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-gilda font-extrabold text-gray-900 mb-4 tracking-tight">
            Welcome to Amantran Resort – A Soulful Escape
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 rounded-full mb-4"></div>
          <p className="text-lg md:text-xl text-gray-600 font-light font-barlow max-w-2xl mx-auto">
            Immerse Yourself in Tranquility, Tradition, and True Hospitality
          </p>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text */}
          <div className="flex flex-col justify-center space-y-2">
            <h3 className="text-sm md:text-lg uppercase font-medium font-barlow text-[#dfb574]">
              A Soulful Escape into Bengal’s Heritage and Warmth
            </h3>
            <h3 className="text-xl md:text-3xl font-gilda font-medium text-[#1a3a2b] pb-2">
              Crafting Memories, Not Just Stays
            </h3>
            <p className="text-base text-gray-700 font-serif leading-relaxed">
              At Amantran Resort, we believe in the magic of mindful
              travel—where every journey becomes a beautiful memory and every
              stay feels like home. Inspired by Bengal’s soul, we offer more
              than a place to rest. We curate immersive experiences that nourish
              the heart, mind, and spirit. Our resort is designed to blend
              luxury with authenticity, offering spaces that reflect regional
              charm, culture, and the joy of true hospitality. <br /> <span className="font-bold"> Rooted in
              Tradition, Built with Passion</span> <br /> Whether you’re a weekend wanderer, a
              spiritual seeker, or a corporate guest on retreat, Amantran Resort
              welcomes you with open arms. From eco-friendly designs and local
              craftsmanship to warm service and culinary delights, everything is
              thoughtfully designed to make you feel valued and connected. Our
              lush surroundings, traditional Bengali décor, and heartfelt
              hospitality ensure that your stay is not just comfortable—but
              unforgettable.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium shadow-sm">
                Eco-Friendly
              </span>
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium shadow-sm">
                Curated Luxury
              </span>
            </div>
          </div>
          {/* Right: Image with overlay */}
          <div className="relative flex justify-center">
            <img
              src="/images/rocky.jpg"
              alt="Luxury Hotel"
              className="rounded-3xl shadow-2xl object-cover w-full h-80"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image with overlay */}
          <div className="relative flex justify-center order-2 md:order-1">
            <img
              src="/images/slide4.jpg"
              alt="Culinary Experience"
              className="rounded-3xl shadow-2xl object-cover w-full h-80"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          {/* Right: Text */}
          <div className="flex flex-col justify-center space-y-2 order-1 md:order-2">
            <h3 className="text-sm md:text-lg uppercase font-medium font-barlow text-[#dfb574]">
              Rediscover Yourself in the Lap of Nature and Culture
            </h3>
            <h3 className="text-xl md:text-3xl font-gilda font-medium text-[#1a3a2b] pb-2">
              A Retreat Woven with Elegance and Earthiness
            </h3>
            <p className="text-base text-gray-700 font-serif leading-relaxed">
              Amantran Resort isn’t just a destination—it’s a story of Bengal’s
              warmth, charm, and timeless traditions. With every corner echoing
              tales of nature and nostalgia, we invite you to reconnect with
              yourself and your surroundings. Our resort captures the spirit of
              Bengal’s soulful hospitality—where every guest is family and every
              moment is cherished. <br /> <span className="font-bold"> Crafted for Comfort, Inspired by Bengal 
              </span> <br /> From serene rooms and soulful cuisine to lush gardens and handcrafted
              interiors, Amantran Resort is where simplicity meets
              sophistication. Our commitment to sustainability, community, and
              heartfelt service shines through in everything we do. Whether you
              come to relax, celebrate, or explore, we promise to make your time
              with us meaningful, magical, and memorable.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm">
                Local Culture
              </span>
              <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium shadow-sm">
                Gourmet Dining
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
