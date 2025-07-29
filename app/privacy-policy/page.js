import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Privacy Policy - Amantran Hotel & Resort",
  description: "Privacy Policy for Amantran Hotel & Resort detailing how we collect, use, and safeguard personal information."
};

const PrivacyPolicy = () => {
  return (
    <>
      <main className="bg-[#d8c499] font-barlow pt-30 pb-10 px-10 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <section className="shadow rounded-lg p-8 mb-8">
            <h1 className="text-4xl font-bold font-gilda text-center text-amber-950 decoration-wavy decoration-white mb-4">Privacy Policy for Amantran Hotel & Resort</h1>
            <p className="text-gray-700 font-barlow text-center">Your privacy is our priority.</p>
          </section>

          {/* Introduction */}
          <section className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Amantran Hotel & Resort is committed to safeguarding the privacy of
              our guests and website visitors. This Privacy Policy outlines how we
              collect, use, disclose, and protect your personal information.
            </p>
          </section>

          {/* Information Collection & Use */}
          <section className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us,
              including but not limited to your name, date of birth, address,
              marital status, telephone number, and credit card details. This
              information is gathered during processes such as room reservations,
              event bookings, and newsletter subscriptions.
            </p>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Use of Information</h2>
              <p className="text-gray-700 mb-4">The personal information collected is used to:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Facilitate reservations and provide requested services.</li>
                <li>Process payments and confirm transactions.</li>
                <li>Communicate with you regarding your stay or inquiries.</li>
                <li>Enhance our services and tailor them to your preferences.</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              Amantran Hotel & Resort assures you that your personal information
              will not be disclosed to third parties, except in the following
              circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                For the purpose of completing the intended business transaction
                with you.
              </li>
              <li>If required by law through due legal process.</li>
              <li>
                With subsidiaries or business associates, solely for the purpose
                of providing the requested services.
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          {/* Cookies */}
          <section className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              To personalize your experience on our website, we may use
              cookies—small text files stored on your device. Cookies help enhance
              website functionality and user experience. They do not collect
              personal information and cannot access data on your hard drive.
            </p>
          </section>

          {/* Policy Updates */}
          <section className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              Amantran Hotel & Resort reserves the right to revise this Privacy
              Policy periodically to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We encourage you to review
              this policy regularly to stay informed about how we are protecting
              your information.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-white shadow rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns regarding this Privacy Policy or
              the handling of your personal information, please contact us at:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Email: <a href="mailto:amantranmarketing2025@gmail.com" className="text-blue-500 hover:underline">amantranmarketing2025@gmail.com</a></li>
              <li>Email: <a href="mailto:info@amantranresorts.in" className="text-blue-500 hover:underline">info@amantranresorts.in</a></li>
              <li>Phone: <a href="tel:+919147389029" className="text-blue-500 hover:underline">+91 9147389029</a></li>
              <li>Address: 4, Dr. Suresh Sarkar Road, Moulali, Amantran House (RTC House), 4th Floor, Kolkata, West Bengal 700014</li>
            </ul>
          </section>

          {/* Acknowledgement */}
          <section className="bg-white shadow rounded-lg p-8">
            <h2 className="text-center text-xl font-semibold text-gray-800">
              By accessing or using our services, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy.
            </h2>
          </section>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
