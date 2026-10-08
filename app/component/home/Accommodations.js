"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaPhone, FaWhatsapp, FaSearch, FaStar, FaUsers, FaCalendarAlt } from "react-icons/fa";

// Sample data for accommodations with various categories and phone numbers for calling
const accommodationsData = [
  {
    id: "tarapith",
    name: "Tarapith",
    category: "Luxury",
    image: "images/front2.jpg",
    details: "Experience the ultimate in luxury with our premium amenities and breathtaking views.",
    phone: "+91-91473 89029",
    rating: 4.8,
    features: ["Sea View", "Private Pool", "Spa", "Fine Dining"]
  },
  {
    id: "chilapata",
    name: "Chilapata",
    category: "Premium",
    image: "/images/hotel1.jpg",
    details: "Enjoy spacious rooms with modern decor and exceptional service for a memorable stay.",
    phone: "+91-91473 89029",
    rating: 4.6,
    features: ["Forest View", "Luxury Spa", "Gourmet Restaurant", "Bar"]
  },
  {
    id: "rocky-island",
    name: "Rocky Island",
    category: "Deluxe",
    image: "/images/rocky.jpg",
    details: "Relax in our deluxe accommodations designed for comfort and tranquility.",
    phone: "+91-91473 89029",
    rating: 4.5,
    features: ["Island View", "Beach Access", "Water Sports", "Pool"]
  },
  {
    id: "sundarban",
    name: "Sunderban",
    category: "Luxury",
    image: "/images/slide4.jpg",
    details: "Our executive suites offer unparalleled luxury with panoramic views and exclusive amenities.",
    phone: "+91-91473 89029",
    rating: 4.9,
    features: ["River View", "Wildlife Safari", "Luxury Tent", "Bonfire"]
  },
  // {
  //   id: "heritage",
  //   name: "Heritage Palace",
  //   category: "Luxury",
  //   image: "/images/5.jpg",
  //   details: "Step back in time with our heritage suites featuring royal architecture and modern luxury.",
  //   phone: "+91-91473 89029",
  //   rating: 4.7,
  //   features: ["Heritage Architecture", "Royal Suite", "Cultural Shows", "Fine Dining"]
  // },
  // {
  //   id: "mountain",
  //   name: "Mountain Retreat",
  //   category: "Premium",
  //   image: "/images/bon.jpg",
  //   details: "Nestled in the mountains, perfect for nature lovers and adventure seekers.",
  //   phone: "+91-91473 89029",
  //   rating: 4.4,
  //   features: ["Mountain View", "Trekking", "Adventure Sports", "Camping"]
  // }
];

// Filter categories
const filterCategories = ["All", "Luxury", "Premium", "Deluxe"];

// Preset WhatsApp number to send the enquiry message
const whatsappNumber = "919147389029"; // Use country code without '+' in wa.me URL

const Accommodations = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    mobile: "",
    totalMembers: "",
    date: "",
    message: ""
  });

  // Filter accommodations based on the selected category
  const filteredAccommodations =
    activeCategory === "All"
      ? accommodationsData
      : accommodationsData.filter(
          (accommodation) => accommodation.category === activeCategory
        );

  // Handle open enquiry modal
  // const openEnquiryModal = (accommodation) => {
  //   setSelectedAccommodation(accommodation);
    // Reset form on open
  //   setEnquiryForm({ name: "", mobile: "", totalMembers: "", date: "", message: "" });
  //   setShowEnquiryModal(true);
  // };

  // Handle input change
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setEnquiryForm((prev) => ({ ...prev, [name]: value }));
  // };

  // Handle form submission - format enquiry and send to WhatsApp
//   const handleEnquirySubmit = (e) => {
//     e.preventDefault();
//     const message = `🏨 Accommodation Enquiry - ${selectedAccommodation.name}

// 👤 Name: ${enquiryForm.name}
// 📱 Mobile: ${enquiryForm.mobile}
// 👥 Total Members: ${enquiryForm.totalMembers}
// 📅 Preferred Date: ${enquiryForm.date}
// 💬 Additional Message: ${enquiryForm.message || "None"}

// I'm interested in booking ${selectedAccommodation.name} (${selectedAccommodation.category} Category)`;

//     // Construct WhatsApp URL
//     const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//     setShowEnquiryModal(false);
//   };

  return (
    <section className="px-16 py-16 lg:py-24 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-amber-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-amber-200 rounded-full opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaStar className="text-amber-600" />
            Premium Accommodations
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-cinzel font-bold text-gray-900 mb-4">
            Our <span className="text-amber-600">Accommodations</span>
          </h1>
          
          <h2 className="text-xl lg:text-2xl font-raleway text-amber-700 font-semibold mb-6">
            EXPLORE OUR LAVISH CHAMBERS AND MAGNIFICENT SUITES
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-open-sans">
            Prioritizing every stay as an unforgettable experience, we welcome you to explore 
            the epitome of luxury and comfort, where elegance meets top-notch service in 
            perfectly curated spaces.
          </p>

          {/* Filter Buttons */}
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category
                    ? "bg-amber-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-amber-700 border border-amber-200 hover:bg-amber-50 hover:shadow-md"
                }`}
              >
                {category === "All" && <FaSearch size={14} />}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Accommodation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredAccommodations.map((accommodation) => (
            <div
              key={accommodation.id}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    accommodation.category === "Luxury" ? "bg-red-500" :
                    accommodation.category === "Premium" ? "bg-purple-500" : "bg-blue-500"
                  }`}>
                    {accommodation.category}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 px-2 py-1 rounded-full">
                  <FaStar className="text-amber-400 text-sm" />
                  <span className="text-white text-sm font-bold">{accommodation.rating}</span>
                </div>
                
                {/* Property Name */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white font-cinzel">
                    {accommodation.name}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed font-open-sans">
                  {accommodation.details}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {accommodation.features.slice(0, 3).map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                  {accommodation.features.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{accommodation.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                {/* <div className="flex flex-wrap gap-3">
                  <Link href={`/properties/${accommodation.id}`} className="flex-1 min-w-[120px]">
                    <button className="w-full px-4 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors duration-300 font-semibold text-sm flex items-center justify-center gap-2">
                      Explore
                    </button>
                  </Link>
                  
                  <a href={`tel:${accommodation.phone}`} className="flex-1 min-w-[120px]">
                    <button className="w-full px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-300 font-semibold text-sm flex items-center justify-center gap-2">
                      <FaPhone size={14} />
                      Call
                    </button>
                  </a>
                  
                  <button
                    onClick={() => openEnquiryModal(accommodation)}
                    className="flex-1 min-w-[120px] px-4 py-3 border border-amber-600 text-amber-600 rounded-xl hover:bg-amber-50 transition-colors duration-300 font-semibold text-sm flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp size={16} />
                    Enquiry
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredAccommodations.length === 0 && (
          <div className="text-center py-16">
            <div className="text-amber-400 text-6xl mb-4">🏨</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Accommodations Found</h3>
            <p className="text-gray-500">Try selecting a different category to see more options.</p>
          </div>
        )}
      </div>

      {/* Enhanced Enquiry Modal */}
      {/* {showEnquiryModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100"> */}
            {/* Modal Header */}
            {/* <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Enquiry for {selectedAccommodation.name}
                  </h2>
                  <p className="text-amber-100 text-sm mt-1">
                    {selectedAccommodation.category} Category
                  </p>
                </div>
                <button
                  className="text-white hover:text-amber-200 transition-colors duration-200"
                  onClick={() => setShowEnquiryModal(false)}
                >
                  <FaPhone size={20} />
                </button>
              </div>
            </div> */}

            {/* Modal Form */}
            {/* <form onSubmit={handleEnquirySubmit} className="p-6 space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={enquiryForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={enquiryForm.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your WhatsApp number"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <FaUsers className="inline mr-1" />
                      Total Members *
                    </label>
                    <input
                      type="number"
                      name="totalMembers"
                      value={enquiryForm.totalMembers}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="0"
                      min="1"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <FaCalendarAlt className="inline mr-1" />
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={enquiryForm.date}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={enquiryForm.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Any special requirements or questions..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <FaWhatsapp size={18} />
                Send WhatsApp Enquiry
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                We'll connect you directly via WhatsApp for instant assistance
              </p>
            </form> */}
          {/* </div>
        </div>
      )} */}
    </section>
  );
};

export default Accommodations;