"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const location = formData.get("location");
    const persons = formData.get("persons");
    const fromDate = formData.get("fromDate");
    const toDate = formData.get("toDate");
    const messageField = formData.get("message");

    // Format the message for WhatsApp
    const message = 
`Name: ${name}
Email: ${email}
Phone: ${phone}
Location: ${location}
Number of Persons: ${persons}
From Date: ${fromDate}
To Date: ${toDate}
Message: ${messageField}`;

    // Construct WhatsApp URL; number is 9147389029
    const whatsappUrl = `https://wa.me/9147389029?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-40 py-8 sm:py-12">
      <div className="container mx-auto px-0 sm:px-2">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-base sm:text-lg md:text-xl uppercase font-semibold font-barlow text-[#DAA520]">
            Initiate Collaboration and Explore Opportunities
          </h2>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-gilda text-black">
            Connect With Us
          </h1>
          <h3 className="mt-1 text-xs sm:text-sm font-medium text-black">
            Get in touch with the team. We’re waiting to begin a meaningful
            conversation, turning your inquiries into an array of opportunities
            and scope for enduring relationship.
          </h3>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4 mb-10 md:mb-12">
          {/* Left Box - Address and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-2xl rounded-xl p-5 sm:p-8 w-full md:w-1/2 mb-6 md:mb-0"
          >
            <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-amber-950">
              Get in Touch <span className="text-base sm:text-lg">(Central Reservation)</span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-[#DAA520] mr-3" size={20} />
                <span className="text-gray-700 text-base sm:text-lg">91473 89029</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#DAA520] mr-3" size={20} />
                <span className="text-gray-700 text-base sm:text-lg">
                amantranmarketing2025@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#DAA520] mr-3" size={20} />
                <span className="text-gray-700 text-base sm:text-lg">
                info@amantranresorts.in
                </span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt
                  className="text-[#DAA520] mr-3 mt-1"
                  size={20}
                />
                <p className="text-gray-700 text-base sm:text-lg">
                  4 TH FLOOR, AMANTRAN HOUSE, <br />
                  4, Dr Suresh Sarkar Rd, Maula Ali, <br />
                  Entally, Kolkata, West Bengal 700014
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Box - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-2xl rounded-xl p-5 sm:p-8 w-full md:w-1/2"
          >
            <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#DAA520]">
              Request a Call Back
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name and Email */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="text"
                  name="name"
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                  placeholder="Your Email"
                  required
                />
              </div>
              {/* Row 2: Phone Number and Location */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="tel"
                  name="phone"
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                  placeholder="Your Phone Number"
                  required
                />
                <select
                  name="location"
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                  required
                >
                  <option value="">Select Location</option>
                  <option value="Tarapith">Tarapith</option>
                  <option value="Rocky-Island">Rocky-Island</option>
                  <option value="Sundarbon">Sundarbon</option>
                  <option value="Chilapata">Chilapata</option>
                </select>
              </div>
              {/* Row 2.5: Number of Persons */}
              <div>
                <input
                  type="number"
                  name="persons"
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                  placeholder="Number of Persons"
                  min="1"
                  required
                />
              </div>
              {/* Row 3: Date Range (From Date, To Date) */}
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input
                  type="date"
                  name="fromDate"
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                  required
                  placeholder="From Date"
                />
                <input
                  type="date"
                  name="toDate"
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                  required
                  placeholder="To Date"
                />
              </div>
              {/* Row 4: Message - full width */}
              <div>
                <textarea
                  name="message"
                  className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#DAA520] text-white py-3 rounded-lg hover:bg-[#d49c45] transition duration-200 shadow-md text-base sm:text-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 md:mb-12"
        >
          <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
            Find Us Here
          </h4>
          <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden shadow-2xl">
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5594.359749721215!2d88.36361499713385!3d22.55998677381826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276fecd563a27%3A0x7f7424d103ae87eb!2sAmantran%20Group!5e0!3m2!1sen!2sin!4v1719995772643!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
