"use client";
import React from "react";
import { 
  FaRegClock, 
  FaIdCard, 
  FaRegMoneyBillAlt, 
  FaUndo, 
  FaEdit, 
  FaInfoCircle, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaDog, 
  FaSmokingBan, 
  FaUtensils, 
  FaExclamationTriangle 
} from "react-icons/fa";

const Section = ({ icon, title, children }) => (
  <section className="mb-10 bg-white/80 rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <span className="text-blue-600 text-2xl mr-3">{icon}</span>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="text-gray-700 text-base">{children}</div>
  </section>
);

const PolicyList = ({ items }) => (
  <ul className="list-disc pl-6 space-y-2">
    {items.map((item, idx) =>
      typeof item === "string" ? (
        <li key={idx}>{item}</li>
      ) : (
        <li key={idx}>
          <span className="font-semibold">{item.title}</span>
          <ul className="list-[circle] pl-6 mt-1 space-y-1">
            {item.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </li>
      )
    )}
  </ul>
);

const Page = () => {
  return (
    <div className="min-h-screen pt-30 bg-[#d8c499] font-barlow py-10 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold font-gilda text-amber-950 drop-shadow-lg flex items-center justify-center gap-3">
            <FaInfoCircle className="text-pink-500 animate-pulse" />
            Reservation & Refund Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Please review our policies for a smooth and delightful stay.
          </p>
        </header>

        <Section icon={<FaRegClock />} title="Check-In & Check-Out Timings">
          <PolicyList
            items={[
              "Tarapith & Chilapata: Check-In at 12:00 PM | Check-Out at 11:00 AM",
              "Lataguri: Check-In at 12:00 PM | Check-Out at 12:00 PM",
              "Sundarban & Rocky Island: Check-In at 1:00 PM | Check-Out at 11:00 AM",
            ]}
          />
          <div className="mt-3 flex items-center text-sm text-pink-600">
            <FaExclamationTriangle className="mr-2" />
            Early check-in or late check-out requests are subject to availability and may incur additional charges.
          </div>
        </Section>

        <Section icon={<FaIdCard />} title="Identification Requirements">
          <PolicyList
            items={[
              "All guests must present valid government-issued photo identification at check-in.",
              "PAN cards are not accepted as valid ID proof.",
              "The name on the reservation must match the ID presented.",
            ]}
          />
        </Section>

        <Section icon={<FaRegMoneyBillAlt />} title="Cancellation Policy">
          <PolicyList
            items={[
              {
                title: "Cancellation Policy",
                details: [
                  "Cancellation made more than 30 days prior to arrival: No retention charges.",
                  "Cancellation between 15 to 30 days prior to arrival: 50% retention charges on the reserved room rate.",
                  "Cancellation less than 15 days prior to arrival: 75% retention charges on the reserved room rate.",
                  "Cancellation less than 72 hours prior to arrival: 100% retention charges on the reserved room rate.",
                ],
              },
              {
                title: "Non-Refundable Rates",
                details: [
                  "Certain promotional or discounted rates are non-refundable. Please review the rate details at the time of booking.",
                ],
              },
            ]}
          />
        </Section>

        <Section icon={<FaUndo />} title="Refund Policy">
          <PolicyList
            items={[
              "Refunds for eligible cancellations will be processed within 7–10 working days.",
              "For payments made via credit/debit cards, refunds will be credited back to the original card used for the transaction.",
              "For payments made via cash or bank transfers, refunds will be issued through cheque.",
              "In case of duplicate payments, the excess amount will be refunded within 7–10 working days.",
            ]}
          />
        </Section>

        <Section icon={<FaEdit />} title="Amendment Policy">
          <PolicyList
            items={[
              "Amendments to reservations (such as date changes) are subject to availability and may incur additional charges.",
              "Amendments made more than 72 hours prior to arrival may be allowed with a 30% amendment fee on the total tariff.",
              "No amendments are permitted less than 72 hours prior to arrival.",
            ]}
          />
        </Section>

        <Section icon={<FaInfoCircle />} title="General Terms">
          <ul className="flex flex-col gap-2 pl-1">
            <li className="flex items-center gap-2">
              <FaDog className="text-pink-500" /> Pets are not allowed across all Amantran properties.
            </li>
            <li className="flex items-center gap-2">
              <FaUtensils className="text-blue-500" /> Outside food is not permitted within the hotel premises.
            </li>
            <li className="flex items-center gap-2">
              <FaSmokingBan className="text-red-500" /> Smoking is strictly prohibited in all indoor areas.
            </li>
            <li className="flex items-center gap-2">
              <FaExclamationTriangle className="text-yellow-500" /> Guests are responsible for any damage caused to hotel property during their stay.
            </li>
          </ul>
        </Section>

        <Section icon={<FaPhoneAlt />} title="Contact Information">
          <p className="mb-2">For any queries or assistance regarding reservations, cancellations, or refunds, please contact:</p>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" /> <span className="font-medium">+91 9147389029</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" /> <span className="font-medium">amantranmarketing2025@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" /> <span className="font-medium">info@amantranresorts.in</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-pink-600" />
              <span>
                4, Dr. Suresh Sarkar Road, Moulali, Amantran House (RTC House), 4th Floor, Kolkata, West Bengal 700014
              </span>
            </li>
          </ul>
        </Section>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          Please note that specific terms and conditions may vary based on the property and rate selected. It is advisable to review the detailed policies at the time of booking.
        </footer>
      </div>
    </div>
  );
};

export default Page;
