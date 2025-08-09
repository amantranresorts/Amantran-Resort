import React from 'react'
import Script from 'next/script'
import Accessibility from '@/app/component/properties/sundarban/Accessibility'
import CheckOut from '@/app/component/properties/sundarban/CheckOut'
import Corner from '@/app/component/properties/sundarban/Corner'
import Discover from '@/app/component/properties/sundarban/Discover'
import Elevate from '@/app/component/properties/sundarban/Elevate'
import Explore from '@/app/component/properties/sundarban/Explore'
import Hero from '@/app/component/properties/sundarban/Hero'
import Offer from '@/app/component/properties/sundarban/Offer'

const page = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Best Resort In Sundarban | Best Hotel In Sundarban",
    "description": "Executive suites with panoramic Sundarban views, modern amenities, and serene surroundings.",
    "url": "https://www.amantranresorts.in/properties/sundarban",
    "image": [
      "https://www.amantranresorts.in/properties/sundarban/image1.jpg",
      "https://www.amantranresorts.in/properties/sundarban/image2.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sonagaon, P.O. – Dulki, P.S. – Gosaba",
      "addressLocality": "Sundarbans",
      "addressRegion": "West Bengal",
      "postalCode": "743370",
      "addressCountry": "IN"
    },
    "telephone": "+91-91473-89029",
    "checkinTime": "13:00",
    "checkoutTime": "11:00",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Garden", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "3.0",
      "ratingCount": 3
    }
  }

  return (
    <>
      <Script
        id="sundarban-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <Discover />
      <Elevate />
      <Corner />
      <CheckOut />
      <Accessibility />
      <Explore />
      <Offer />
    </>
  )
}

export default page

export const metadata = {
  title: "Best Resort In Sundarban | Best Hotel in Sundarban",
  description:
    "Enjoy serene views and comfort at the best resort in Sundarban. Your perfect getaway starts at the best hotel in Sundarban. Book now!",
}
