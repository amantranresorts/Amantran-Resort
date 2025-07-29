// Event.js
import React from "react";

const Event = () => {
  // If you use a custom font, import it in your global CSS or _app.js
  // Example: import '@fontsource/playfair-display'; // npm install @fontsource/playfair-display

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
          image: "/images/ev7.jpg",
          description: "Explore the wildlife with guided safari tours.",
        },
        {
          title: "Photography Workshop",
          image: "/images/ev8.jpg",
          description: "Learn photography skills in a picturesque setting.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-2xl md:text-3xl text-center"
          style={{ color: "#e0c68a", fontFamily: "'Inter', sans-serif" }}
        >
          Moments that Rise Above Time
        </h2>
        <h1
          className="text-5xl md:text-6xl text-amber-950 text-center font-gilda"
        >
          Create Memories Here
        </h1>
        <p>
          Experience the joy of celebration and cherished moments with us.
          Discover the exquisite venues at Hotel Sonar Bangla for your private
          triumphs, weddings and other personal affairs. Our event venues are a
          canvas for your memories where every moment becomes a cherished one
          for a lifetime. Make us a part of your big day and witness as we
          enhance the uniqueness of your celebrations.
        </p>

        {events.map((eventGroup, index) => (
          <div key={index} className="mb-16">
            <h3
              className="text-3xl md:text-4xl font-semibold mb-8 text-center"
            >
              {eventGroup.location}
            </h3>
            <div className="flex flex-col gap-10">
              {eventGroup.eventDetails.map((event, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`relative bg-amber-100 rounded-2xl shadow-2xl overflow-hidden group transition-transform duration-300 hover:scale-105 flex flex-col md:flex-row ${
                      !isEven ? "md:flex-row-reverse" : ""
                    }`}
                    style={{
                      border: "1.5px solid #FFD700",
                    }}
                  >
                    {/* Image Section */}
                    <div className="md:w-1/2 w-full relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 md:h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0  to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-[#FFD700] text-[#232526] px-3 py-1 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider">
                        Premium
                      </div>
                    </div>
                    {/* Text Section */}
                    <div className="md:w-1/2 w-full p-6 flex flex-col justify-between h-60 md:h-auto">
                      <div>
                        <h4
                          className="text-2xl font-bold mb-2"
                        >
                          {event.title}
                        </h4>
                        <p
                          className="text-gray-200 mb-6"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {event.description}
                        </p>
                      </div>
                      <button
                        className="mt-auto bg-gradient-to-r from-[#FFD700] to-[#e0c68a] text-[#232526] font-bold px-6 py-3 rounded-full shadow-lg hover:from-[#e0c68a] hover:to-[#FFD700] transition-all duration-300 uppercase tracking-wider"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
