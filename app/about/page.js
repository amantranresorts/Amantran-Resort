import React from "react";
import Hero from "../component/about/Hero";
import About from "../component/about/About";
import CheckOut from "../component/about/CheckOut";
import Upcoming from "../component/home/Upcoming";
import Script from "next/script";

const about = () => {
  return (
    <>
      {/* ✅ Schema Markup for About Page */}
      <Script id="about-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Amantran Resort",
          "legalName": "Amantran Resorts Private Limited",
          "url": "https://www.amantranresorts.in/about",
          "logo": "https://www.amantranresorts.in/images/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "RTC House, 4 Dr Suresh Sarkar Road, Entally",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "postalCode": "700014",
            "addressCountry": "IN"
          },
          "telephone": "+91-91473 89029",
          "email": "info@amantranresorts.in",
          "foundingDate": "1996-09-16",
          "founders": [
            { "@type": "Person", "name": "Swapan Kumar Das" },
            { "@type": "Person", "name": "Sharmistha Das" }
          ],
          "sameAs": [
            "https://www.facebook.com/amantranresorts",
            "https://www.instagram.com/amantranresorts",
            "https://www.linkedin.com/company/amantran-resorts"
          ],
          "description":
            "Amantran Resort blends heritage and luxury in Bengal’s most scenic destinations. With over 46 years of hospitality experience, we offer cultural richness and personalized service across Tarapith, Chilapata, Sundarban & more."
        })}
      </Script>

      <Hero />
      <About />
      <CheckOut />
      <Upcoming />
    </>
  );
};

export default about;

export const metadata = {
  title: "About Us - Amantran Resorts | Where Tradition Meets Tranquility",
  description:
    "Discover the story behind Amantran Resorts – a chain of luxury hotels offering serene escapes across Bengal. Rooted in culture, built with elegance, and crafted for unforgettable stays.",
};
