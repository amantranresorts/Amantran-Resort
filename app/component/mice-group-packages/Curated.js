"use client";
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Curated = () => {
    // Data for the left and right contact blocks
    const leftContacts = [
        {
            location: 'Tarapith',
            phones: ['+91 91473 89021', '+91 91473 89020'],
            emails: ['amantranmarketing2025@gmail.com', 'info@amantranresorts.in'],
        },
        {
            location: 'Rocky Island',
            phones: ['+91 91473 89024', '+91 91473 89025'],
            emails: ['amantranmarketing2025@gmail.com', 'info@amantranresorts.in'],
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Extract form data using FormData API
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const headers = formData.get('headers');
        const fromDate = formData.get('from-date');
        const toDate = formData.get('to-date');
        const location = formData.get('location');

        // Format the message to be sent via WhatsApp
        const message = 
`Name: ${name}
Phone: ${phone}
Email: ${email}
No of Headers: ${headers}
Visit Date: ${fromDate} to ${toDate}
Location: ${location}`;

        // Construct WhatsApp URL with the phone number 9147389029
        const whatsappUrl = `https://wa.me/9147389029?text=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab/window
        window.open(whatsappUrl, '_blank');
    };

    const rightContacts = [
        {
            location: 'Chilapata',
            phones: ['+91 91473 89022', '+91 91473 89023'],
            emails: ['amantranmarketing2025@gmail.com', 'info@amantranresorts.in'],
        },
        {
            location: 'Sundarbon',
            phones: ['+91 91473 89026'],
            emails: ['amantranmarketing2025@gmail.com', 'info@amantranresorts.in'],
        },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Page Heading */}
                <div className="text-center mb-10">
                    <h3 className="text-xl font-semibold font-barlow uppercase text-[#dfb574]">Tailor Made Packages and Offerings</h3>
                    <h2 className="text-4xl font-gilda text-gray-800 mt-2">Curated Just For You</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Transform your journey with a personal touch. Experience the magic of customization and tailor your package as per your requirement, 
                        because true luxury lies in the little things that make it uniquely yours.
                    </p>
                </div>
                {/* Main Content: Left Text - Image - Right Text */}
                <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-8">
                    {/* Left Contact Block */}
                    <div className="w-full lg:w-1/3 bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">For Customized Packages, Call :</h3>
                        {leftContacts.map((item, index) => (
                            <div key={index} className="mb-4 border-b pb-3 last:border-b-0">
                                <h5 className="text-lg font-semibold flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-amber-900" /> {item.location}
                                </h5>
                                <div className="flex items-start gap-2 mt-1">
                                    <FaPhoneAlt className="text-[#dfb574] mt-1" />
                                    <div>
                                        {item.phones.map((phone, idx) => (
                                            <p key={idx} className="leading-tight">
                                                <a href={`tel:${phone}`} className="text-amber-800 hover:underline">
                                                    {phone}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 mt-1">
                                    <FaEnvelope className="text-[#dfb574] mt-1" />
                                    <div>
                                        {item.emails.map((email, idx) => (
                                            <p key={idx} className="leading-tight">
                                                <a href={`mailto:${email}`} className="text-amber-800 hover:underline">
                                                    {email}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Image */}
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <img
                            src="https://www.hotelsonarbangla.com/wp-content/uploads/2024/03/custom-made-packages.webp"
                            alt="Customized Package"
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Right Contact Block */}
                    <div className="w-full lg:w-1/3 bg-white p-6 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">For Customized Packages, Call :</h3>
                        {rightContacts.map((item, index) => (
                            <div key={index} className="mb-4 border-b pb-3 last:border-b-0">
                                <h5 className="text-lg font-semibold flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-amber-900" /> {item.location}
                                </h5>
                                <div className="flex items-start gap-2 mt-1">
                                    <FaPhoneAlt className="text-[#dfb574] mt-1" />
                                    <div>
                                        {item.phones.map((phone, idx) => (
                                            <p key={idx} className="leading-tight">
                                                <a href={`tel:${phone}`} className="text-amber-800 hover:underline">
                                                    {phone}
                                             </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-start gap-2 mt-1">
                                    <FaEnvelope className="text-[#dfb574] mt-1" />
                                    <div>
                                        {item.emails.map((email, idx) => (
                                            <p key={idx} className="leading-tight">
                                                <a href={`mailto:${email}`} className="text-amber-800 hover:underline">
                                                    {email}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="mt-12 text-center">
                    <h5 className="text-xl font-semibold">Need More Details?</h5>
                    <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                        Fill in the form below and our team shall get in touch with you to offer the best deals and packages.
                    </p>
                    <div className="mt-6">
                        <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl mx-auto">
                            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                                {/* Row 1: Name and Phone Number */}
                                <div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Name"
                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="Phone Number"
                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                {/* Row 2: Email and No of Headers */}
                                <div>
                                    <input
                                       type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Email"
                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        id="headers"
                                        name="headers"
                                        min="1"
                                        required
                                        placeholder="No of Headers"
                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                   />
                                </div>
                                {/* Row 3: From Date and To Date */}
                                <div>
                                    <input
                                        type="date"
                                        id="from-date"
                                        name="from-date"
                                        required
                                        placeholder="From Date"
                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="date"
                                        id="to-date"
                                        name="to-date"
                                        required
                                        placeholder="To Date"
                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                {/* Row 4: Location */}
                                <div className="col-span-2">
                                    <select
                                        id="location"
                                        name="location"
                                        required
                                        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">Select Location</option>
                                        <option value="Tarapith">Tarapith</option>
                                        <option value="Rocky Island">Rocky Island</option>
                                        <option value="Chilapata">Chilapata</option>
                                        <option value="Sundarbon">Sundarbon</option>
                                    </select>
                                </div>
                                {/* Submit Button spanning full width */}
                                <div className="col-span-2 pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#dfb574] text-white py-3 rounded-md hover:bg-[#b39e59] transition-colors"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    );
};

export default Curated;
