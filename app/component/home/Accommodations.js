"use client"
import React, { useState } from 'react';
import Link from 'next/link';

// Sample data for accommodations with various categories and phone numbers for calling
const accommodationsData = [
  {
    id: 'tarapith',
    name: 'Tarapith',
    category: 'Luxury',
    image: 'images/front2.jpg',
    details: 'Experience the ultimate in luxury with our premium amenities and breathtaking views.',
    phone: '+1234567890'
  },
  {
    id: 'chilapata',
    name: 'Chilapata',
    category: 'Premium',
    image: '/images/hotel1.jpg',
    details: 'Enjoy spacious rooms with modern decor and exceptional service for a memorable stay.',
    phone: '+2345678901'
  },
  {
    id: 'rocky-island',
    name: 'Rocky Island',
    category: 'Deluxe',
    image: '/images/rocky.jpg',
    details: 'Relax in our deluxe accommodations designed for comfort and tranquility.',
    phone: '+3456789012'
  },
  {
    id: 'sundarban',
    name: 'Sunderban',
    category: 'Luxury',
    image: '/images/slide4.jpg',
    details: 'Our executive suites offer unparalleled luxury with panoramic views and exclusive amenities.',
    phone: '+4567890123'
  },
];

// Filter categories
const filterCategories = ['All', 'Luxury', 'Premium', 'Deluxe'];

// Preset WhatsApp number to send the enquiry message
const whatsappNumber = "911234567890"; // Use country code without '+' in wa.me URL

const Accommodations = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    mobile: "",
    totalMembers: "",
    date: ""
  });

  // Filter accommodations based on the selected category
  const filteredAccommodations = activeCategory === 'All'
    ? accommodationsData
    : accommodationsData.filter(accommodation => accommodation.category === activeCategory);
    
  // Handle open enquiry modal
  const openEnquiryModal = (accommodation) => {
    setSelectedAccommodation(accommodation);
    // Reset form on open
    setEnquiryForm({ name: "", mobile: "", totalMembers: "", date: "" });
    setShowEnquiryModal(true);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission - format enquiry and send to WhatsApp
  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const message = `Enquiry for ${selectedAccommodation.name}:
Name: ${enquiryForm.name}
Mobile: ${enquiryForm.mobile}
Total Members: ${enquiryForm.totalMembers}
Date: ${enquiryForm.date}`;
    
    // Construct WhatsApp URL
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setShowEnquiryModal(false);
  };

  return (
    <section className="p-4 sm:p-6 bg-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-barlow text-amber-800 font-bold">
            EXPLORE OUR LAVISH CHAMBERS AND MAGNIFICENT SUITES
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-gilda text-black mt-2">
            Accommodations
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-serif text-black mb-4">
            Prioritizing every stay as an unforgettable experience, we welcome you to explore the epitome of luxury and comfort, where elegance meets top-notch service.
          </p>

          {/* Filter Buttons */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center sm:justify-start">
            {filterCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm sm:text-base font-medium shadow transition duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-800 text-white'
                    : 'bg-white text-amber-800 hover:bg-amber-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Accommodation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-gilda">
          {filteredAccommodations.map(accommodation => (
            <div
              key={accommodation.id}
              className="relative group rounded-lg overflow-hidden shadow-lg h-64"
            >
              <img
                src={accommodation.image}
                alt={accommodation.name}
                className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
              />
              
              {/* Accommodation Name Overlay (Property name color change on hover) */}
              <div className="absolute top-0 left-0 bg-black/10 p-2 z-20">
                <h3 className="text-xl font-bold text-black group-hover:text-white transition duration-300">
                  {accommodation.name}
                </h3>
              </div>

              {/* Hover Overlay for Details and Action Buttons */}
              <div className="absolute inset-0 group-hover:bg-black/50 transition duration-300 flex flex-col justify-center items-center text-center p-4 z-10">
                <div className="opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="mb-4 text-white text-sm sm:text-base">{accommodation.details}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {/* Explore button: navigates to /property/{id} */}
                    <Link href={`/properties/${accommodation.id}`}>
                      <button className="px-3 py-1 bg-white text-black rounded hover:bg-amber-800 hover:text-white transition duration-300 text-xs sm:text-sm">
                        Explore
                      </button>
                    </Link>
                    {/* Book Now button: tel link calling the property's phone */}
                    <a href={`tel:${accommodation.phone}`}>
                      <button className="px-3 py-1 bg-white text-black rounded hover:bg-amber-800 hover:text-white transition duration-300 text-xs sm:text-sm">
                        Book Now
                      </button>
                    </a>
                    {/* Enquiry button: opens the enquiry modal */}
                    <button 
                      className="px-3 py-1 bg-white text-black rounded hover:bg-amber-800 hover:text-white transition duration-300 text-xs sm:text-sm"
                      onClick={() => openEnquiryModal(accommodation)}
                    >
                      Enquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 relative">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Enquiry for {selectedAccommodation.name}</h2>
            <form onSubmit={handleEnquirySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={enquiryForm.name} 
                  onChange={handleInputChange} 
                  required 
                  className="mt-1 w-full border rounded p-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Mobile Number</label>
                <input 
                  type="tel" 
                  name="mobile" 
                  value={enquiryForm.mobile} 
                  onChange={handleInputChange} 
                  required 
                  className="mt-1 w-full border rounded p-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Total Members</label>
                <input 
                  type="number" 
                  name="totalMembers" 
                  value={enquiryForm.totalMembers} 
                  onChange={handleInputChange} 
                  required 
                  className="mt-1 w-full border rounded p-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Date</label>
                <input 
                  type="date" 
                  name="date" 
                  value={enquiryForm.date} 
                  onChange={handleInputChange} 
                  required 
                  className="mt-1 w-full border rounded p-2 text-sm"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-amber-800 text-white py-2 rounded hover:bg-amber-900 transition duration-300 text-sm"
              >
                Submit Enquiry
              </button>
            </form>
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowEnquiryModal(false)}
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Accommodations;
