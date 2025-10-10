import React from "react";
import {
  FaPhone,
  FaLock,
  FaTimesCircle,
  FaTag,
  FaGift,
  FaCheck,
} from "react-icons/fa";

const Treat = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:p-16 md:p-8 p-4 bg-gray-100">
      {/* Left Text Section */}
      <div className="lg:w-1/2 w-full p-2 md:p-4 flex flex-col justify-center">
        <h1 className="text-lg md:text-xl text-amber-600 font-bold font-cinzel mb-1">
          EVERY AMENITY HERE IS THE BEST YOU CAN GET
        </h1>
        <h1 className="text-2xl md:text-2xl lg:text-4xl text-black font-raleway font-semibold mb-4">
          Treat yourself to lavish comfort
        </h1>
        <p className="font-open-sans text-sm md:text-base text-black mb-3 md:mb-4">
          Amantran Resort, a distinguished name in India's hospitality sector,
          offers a blend of opulence and comfort tailored to meet the diverse
          needs of global travelers. With over 46 years of experience, our
          commitment to excellence is evident in every aspect of our service.
          Guests can indulge in a variety of world-class amenities, including a
          serene swimming pool, gourmet dining options, and elegantly designed
          rooms equipped with modern facilities like air conditioning,
          flat-screen TVs, and complimentary Wi-Fi.Vist our{" "}
          <a
            href="https://www.amantranresorts.in/properties/sundarban"
            className="font-bold"
          >
            best Hotel in Sundarban
          </a>{" "}
          for more information.
        </p>
        <p className="text-sm md:text-base text-black mb-3 md:mb-4">
          By booking directly through our official website, guests can enjoy
          exclusive benefits such as the lowest guaranteed rates, special
          packages, and a seamless reservation experience without any hidden
          charges. Our secure payment gateway ensures that your transactions are
          safe and hassle-free. You can book our{" "}
          <a
            href="https://www.amantranresorts.in/properties/rocky-island"
            className="font-bold"
          >
            best Hotel in Rocky Island
          </a>
        </p>
        <p className="text-sm md:text-base text-black mb-3 md:mb-4">
          Discover the perfect getaway at Amantran Resort,{" "}
          <a
            href="https://www.amantranresorts.in/properties/tarapith"
            className="font-bold"
          >
            Best Resorts in Tarapith
          </a>{" "}
          where luxury meets tradition, and every stay is curated to provide an
          unforgettable experience. Whether you're seeking a peaceful retreat or
          an adventurous escape, Amantran Resort is your ideal destination.
        </p>
        <div className="flex items-center text-black mb-2 md:mb-4">
          <FaPhone className="text-3xl md:text-4xl text-amber-600 mr-3" />
          <h2 className="text-lg md:text-xl font-bold mb-0">Reservation</h2>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-amber-800 font-open-sans text-base md:text-xl">
            +91 9147389029
          </span>
          <span className="font-semibold text-amber-800 font-open-sans text-base md:text-xl break-all">
            amantranmarketing2025@gmail.com
          </span>
          <span className="font-semibold text-amber-800 font-open-sans text-base md:text-xl break-all">
            info@amantranresorts.in
          </span>
        </div>
      </div>

      {/* Right Cards Section */}
      <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6 p-2 md:p-4">
        {/* Hassle-free Booking Card */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-black flex flex-col items-center min-h-[180px] md:min-h-[200px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-3 md:mb-4">
            <FaLock className="text-2xl md:text-3xl text-amber-600 mr-2" />
            <h3 className="text-lg md:text-xl font-bold">
              Hassle-free Booking
            </h3>
          </div>
          <ul className="space-y-2">
            <li className="text-xs md:text-sm flex items-center">
              <FaCheck className="mr-2 text-amber-600" />
              Trust in our secure payment gateway for a safe and reliable
              transaction.
            </li>
            <li className="text-xs md:text-sm flex items-center">
              <FaCheck className="mr-2 text-amber-600" />
              Receive instant confirmation of your reservation.
            </li>
          </ul>
        </div>

        {/* Hassle-free Cancellation Card */}
        <div className="bg-white p-4 md:p-6 rounded-lg text-black shadow-lg flex flex-col items-center min-h-[180px] md:min-h-[200px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-3 md:mb-4">
            <FaTimesCircle className="text-2xl md:text-3xl text-amber-600 mr-2" />
            <h3 className="text-lg md:text-xl font-bold">
              Hassle-free Cancellation
            </h3>
          </div>
          <ul className="space-y-2">
            <li className="text-xs md:text-base flex items-center">
              <FaCheck className="mr-2 text-amber-600" />
              Hassle-free Cancellation
            </li>
            <li className="text-xs md:text-base flex items-center">
              <FaCheck className="mr-2 text-amber-600" />
              Receive instant confirmation of your cancellation.
            </li>
          </ul>
        </div>

        {/* Best Price Guaranteed Card */}
        <div className="bg-white p-4 md:p-6 rounded-lg text-black shadow-lg flex flex-col items-center min-h-[180px] md:min-h-[200px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-3 md:mb-4">
            <FaTag className="text-2xl md:text-3xl text-amber-600 mr-2" />
            <h3 className="text-lg md:text-xl font-bold">
              Best Price Guaranteed
            </h3>
          </div>
          <ul className="space-y-2">
            <li className="text-xs md:text-base flex items-center">
              <FaCheck className="mr-2 text-amber-600" />
              Enjoy the lowest prices.
            </li>
            <li className="text-xs md:text-base flex items-center">
              <FaCheck className="mr-2 text-amber-600" />
              No hidden fees or additional charges.
            </li>
          </ul>
        </div>

        {/* Season Best Offers Card */}
        <div className="bg-white p-4 md:p-6 rounded-lg text-black shadow-lg flex flex-col items-center min-h-[180px] md:min-h-[200px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center mb-3 md:mb-4">
            <FaGift className="text-2xl md:text-3xl text-amber-600 mr-2" />
            <h3 className="text-lg md:text-xl font-bold">Season Best Offers</h3>
          </div>
          <ul className="space-y-2">
            <li className="text-xs md:text-base flex items-center">
              <FaCheck className="mr-2 text-amber-600" />
              Enjoy special offers and discounts on your customized booking.
            </li>
            <li className="text-xs md:text-base flex items-center">
              <FaCheck className="mr-2 text-amber-600" />
              Access exclusive seasonal packages on additional services.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Treat;
