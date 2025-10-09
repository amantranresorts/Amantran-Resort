// Event.js
import React from "react";
import Link from 'next/link';
const Event = () => {
  const events = [
    {
      location: "Amantran Resorts Sunderban",
      eventDetails: [
        {
          title: "Nature Retreat",
          image: "/images/ev3.jpg",
          description: "Join us for a serene nature retreat with guided tours.",
        },
        {
          title: "Cultural Fest",
          image: "/images/ev2.jpg",
          description:
            "Experience the rich culture of Sundarbans with local performances.",
        },
      ],
    },
    {
      location: "Aamantran Hotel & Resort (Rocky Island)",
      eventDetails: [
        {
          title: "Adventure Sports",
          image: "/images/ev1.jpg",
          description: "Engage in thrilling water sports and activities.",
        },
        {
          title: "Beach Bonfire Night",
          image: "/images/ev4.jpg",
          description: "Enjoy a cozy bonfire night with music and stories.",
        },
      ],
    },
    {
      location: "Amantran Resort Tarapith",
      eventDetails: [
        {
          title: "Spiritual Retreat",
          image: "/images/ev5.jpg",
          description: "Participate in spiritual sessions and meditation.",
        },
        {
          title: "Festive Celebration",
          image: "/images/ev6.jpg",
          description:
            "Join us for a grand celebration during the festive season.",
        },
      ],
    },
    {
      location: "Amantran Resort Chilapata",
      eventDetails: [
        {
          title: "Wildlife Safari",
          image: "/images/ev7.webp",
          description: "Explore the wildlife with guided safari tours.",
        },
        {
          title: "Photography Workshop",
          image: "/images/ev8.webp",
          description: "Learn photography skills in a picturesque setting.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100/30 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-6 py-2 rounded-full inline-flex items-center gap-2 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-semibold tracking-wider uppercase">
                Premium Events & Celebrations
              </span>
            </div>
          </div>

          <h2 className="text-lg font-light text-amber-600 tracking-widest uppercase border-b border-amber-200 pb-2 mb-4">
            Moments that Rise Above Time
          </h2>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-gilda">
            Create <span className="text-amber-600">Memories</span> Here
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-8"></div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
            Experience the joy of celebration and cherished moments with us.
            Discover the exquisite venues at Amantran Resorts for your private
            triumphs, weddings and other personal affairs. Our event venues are
            a canvas for your memories where every moment becomes a cherished
            one for a lifetime. Make us a part of your big day and witness as we
            enhance the uniqueness of your celebrations.
          </p>
        </div>

        {/* Events Grid */}
        {events.map((eventGroup, index) => (
          <div key={index} className="mb-20">
            {/* Location Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-gilda">
                {eventGroup.location}
              </h3>
              <div className="w-16 h-0.5 bg-amber-400 mx-auto rounded-full"></div>
            </div>

            {/* Events */}
            <div className="flex flex-col gap-8">
              {eventGroup.eventDetails.map((event, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative bg-white rounded-2xl shadow-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl flex flex-col md:flex-row ${
                      !isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image Section */}
                    <div className="md:w-1/2 w-full relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 md:h-80 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                        Premium Event
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2 w-full p-8 flex flex-col justify-between bg-gradient-to-br from-amber-50 to-white group-hover:from-amber-100 transition-all duration-500">
                      <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-gilda">
                          {event.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-6 text-lg font-light">
                          {event.description}
                        </p>
                      </div>
                      <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider flex items-center gap-2 group/btn">
                        Enquire Now
                        <svg
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Border Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl p-12 border border-amber-200">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-gilda">
            Ready to Create Unforgettable Memories?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto font-light">
            Let us help you plan the perfect event at any of our luxurious
            resort locations.
          </p>
          
          <Link
            href="tel:+919147389029"
            className="text-white font-bold px-10 py-4 rounded-full shadow-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-lg flex items-center justify-center gap-3 group no-underline"
          >
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 uppercase tracking-wider text-lg">
            Contact Our Event Planners
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
