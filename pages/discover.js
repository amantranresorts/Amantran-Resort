import React from 'react';
import Image from 'next/image';

const Discover = () => {
  return (
    <div className="sectiongap">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side Text */}
          <div className="lg:w-1/2 property_about_txt">
            <div className="whitebox wow slideInUp tick tick_double mb-3 p-6 bg-white shadow-lg border border-gray-200 rounded">
              <div className="section_title mb-4">
                <h3 className="text-xl font-semibold text-gray-600">
                  Discover the Spiritual Essence &amp; Divinity
                </h3>
                <h2 className="text-3xl font-bold text-gray-800">
                  at Hotel Sonar Bangla Tarapith
                </h2>
              </div>
              <p className="mb-4 text-gray-700">
                During your visit to this auspicious land of Tarapith, book your staycation with Hotel Sonar Bangla Tarapith as it offers a haven filled with comfort and peace. Visitors can also experience the holy spirit of the temple, which is located nearby, and relish the luxurious accommodations and amenities that this renowned hotel chain offers. Here, every moment blends spiritual introspection with opulent relaxation, crafting an enchanting journey beyond the ordinary.
              </p>
              <ul className="list-disc ml-6 space-y-1 text-gray-700">
                <li>Settled in divine aura</li>
                <li>Comfortable Accommodation</li>
                <li>Fast Room Service</li>
                <li>Recreational Amenities and Facilities</li>
                <li>Warm hospitality</li>
                <li>High-speed Wi-Fi connectivity</li>
              </ul>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="lg:w-1/2">
            <div className="sticky top-8">
              <div className="choose-image">
                <div className="about_imgbox relative">
                  <div className="about_img wow slideInUp">
                    <Image
                      src="https://www.hotelsonarbangla.com/wp-content/uploads/2024/03/tarapith_mandir.webp"
                      alt="Main image of Tarapith Mandir"
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover rounded shadow-lg"
                    />
                    <div className="cont_scroll mt-4 ml-2">
                      <a
                        className="btn btn-primary pulseit inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow transition duration-300"
                        href="#"
                      >
                        <span className="mr-2">
                          <i className="fa-regular fa-thumbs-up"></i>
                        </span>
                        Book Now
                      </a>
                    </div>
                  </div>
                  <div className="child_imgbox absolute -bottom-10 right-4 wow slideInDown">
                    <div className="overflow-hidden rounded shadow-lg">
                      <Image
                        src="https://www.hotelsonarbangla.com/wp-content/uploads/2024/03/Tarapith-swiming-pool.webp"
                        alt="Secondary image: Swimming pool"
                        width={300}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Side */}
        </div>
      </div>
    </div>
  );
};

export default Discover;
