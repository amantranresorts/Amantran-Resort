"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);
  const [desktopPropertiesOpen, setDesktopPropertiesOpen] = useState(false);
  const timerRef = useRef(null);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  // Updated property list with refined items
  const propertyList = [
    { name: "Tarapith", href: "/properties/tarapith" },
    { name: "Rocky Island", href: "/properties/rocky-island" },
    { name: "Sundarban", href: "/properties/sundarban" },
    { name: "Chilapata", href: "/properties/chilapata" },
    { name: "Upcoming Project", href: "/properties/upcoming-project" },
  ];

  // Determine if the current route matches any property href for dynamic display
  const currentProperty = propertyList.find(
    (property) => property.href === pathname
  );
  const logoText = currentProperty ? currentProperty.name : "Amantran";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // reset mobile dropdown states when toggling main menu
    if (isOpen) {
      setMobilePropertiesOpen(false);
    }
  };

  const navItemContainerClass = "group relative cursor-pointer";

  const underlineClass =
    "absolute left-0 -bottom-1 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left";

  // Renders a standard nav link item
  const renderNavLink = (href, label, onClickHandler = null) => {
    const isActive = pathname === href;
    const activeTextClass = isActive ? "text-amber-800" : "";
    return (
      <li onClick={onClickHandler} className={navItemContainerClass}>
        <Link href={href}>
          <span
            className={`relative ${activeTextClass} py-1 hover:text-amber-700 transition-colors duration-300`}
          >
            {label}
            <span className={underlineClass}></span>
          </span>
        </Link>
      </li>
    );
  };

  // Handlers for desktop Properties dropdown mouse events
  const handleDesktopMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDesktopPropertiesOpen(true);
  };

  const handleDesktopMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setDesktopPropertiesOpen(false);
    }, 300); // Slightly faster close for better UX
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDesktopPropertiesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Renders Properties dropdown for desktop view in a grid layout with animations
  const renderDesktopProperties = () => (
    <li className={navItemContainerClass}>
      <div
        ref={dropdownRef}
        className="relative py-1"
        onMouseEnter={handleDesktopMouseEnter}
        onMouseLeave={handleDesktopMouseLeave}
      >
        <div className="flex items-center cursor-default">
          <span>Properties</span>
          <AiOutlineDown
            className={`ml-1 transition-transform duration-300 ${
              desktopPropertiesOpen ? "rotate-180" : ""
            }`}
          />
          <span className={underlineClass}></span>
        </div>
        <div
          className={`absolute left-0 top-full  mt-2 bg-white shadow rounded min-w-[430px] transition-all duration-200 ease-in-out z-20 transform ${
            desktopPropertiesOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none translate-y-2"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
            {propertyList.map((property) => (
              <Link key={property.href} href={property.href}>
                <div className="flex items-center space-x-2 px-2 py-2 hover:bg-gray-100 hover:text-amber-800 rounded transition-transform duration-200 hover:scale-105 w-full">
                  <FaRegBuilding size={20} />
                  <span className="whitespace-normal text-[12px]">
                    {property.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </li>
  );

  // Renders Properties dropdown for mobile view with a two-column grid layout and refined styling
  const renderMobileProperties = () => (
    <>
      <li
        onClick={() => setMobilePropertiesOpen(!mobilePropertiesOpen)}
        className={`${navItemContainerClass} border-b border-gray-200 w-full text-center py-2 cursor-pointer transition-colors duration-300 ease-in-out`}
      >
        Properties
      </li>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          mobilePropertiesOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="grid grid-cols-2 gap-2 p-2">
          {propertyList.map((property) => (
            <li key={property.href} className="w-full">
              <Link
                href={property.href}
                onClick={() => setIsOpen(false)}
                className=" bg-gray-50 px-2 py-3 hover:bg-gray-100 transition-colors duration-300 ease-in-out border border-gray-200 rounded flex items-center justify-center"
              >
                <div className="flex items-center space-x-1">
                  <FaRegBuilding size={16} />
                  <span className="text-xs">{property.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-5 h-22 bg-white text-black font-bold shadow rounded-md md:mx-45 m-2">
      <Link href="/">
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
          {/* Vertical line separator */}
          <div className="border-1 border-[#d49c45] h-18 mx-1"></div>
          <span className="font-bold font-raleway uppercase  text-amber-950 opacity-75 text-xl">
            {logoText}
          </span>
        </div>
      </Link>

      {/* Desktop menu */}
      <ul className="hidden md:flex flex-row gap-8 font-open-sans items-center">
        {renderNavLink("/", "Home")}
        {renderNavLink("/about", "About")}
        {renderDesktopProperties()}
        {renderNavLink("/events", "Events")}
        {renderNavLink("/mice-group-packages", "Mice/Group packages")}
        {renderNavLink("/contact", "Contact")}
      </ul>

      {/* Appointment button - desktop */}

      {/* Mobile menu toggle button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow rounded-b-md mt-2 z-10 w-full animate-fadeIn">
          <ul className="flex flex-col items-center gap-2 p-4 w-full">
            {renderNavLink("/", "Home", () => setIsOpen(false))}
            {renderNavLink("/about", "About", () => setIsOpen(false))}
            {renderNavLink("/contact", "Contact", () => setIsOpen(false))}
            {/* Properties dropdown in mobile */}
            {renderMobileProperties()}
            {renderNavLink("/mice-group-packages", "Mice/Group packages", () =>
              setIsOpen(false)
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
