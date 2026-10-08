import React from 'react'
import Script from 'next/script'
import Discover from '@/app/component/properties/chilapata/Discover'
import Elevate from '@/app/component/properties/chilapata/Elevate'
import Hero from '@/app/component/properties/chilapata/Hero'
import Corner from '@/app/component/properties/chilapata/Corner'
import Accessibility from '@/app/component/properties/chilapata/Accessibility'
import Explore from '@/app/component/properties/chilapata/Explore'
import Offer from '@/app/component/properties/chilapata/Offer'
import Testimonials from '@/app/component/properties/chilapata/Testimonials'
import Upcoming from '@/app/component/home/Upcoming'
import CheckOut from '@/app/component/properties/chilapata/CheckOut'

const page = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Best Resort In Chilapata | Best Hotel In Chilapata",
    "description": "Nestled in the lush Chilapata Forest, Amantran Resort offers serene nature, modern comforts, a restaurant, pool, and banquet facilities.",
    "url": "https://www.amantranresorts.in/properties/chilapata",
    "image": [
      "https://www.amantranresorts.in/properties/chilapata/image1.jpg",
      "https://www.amantranresorts.in/properties/chilapata/image2.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dakshin Mendabari, Kalchini, Chilapata",
      "addressLocality": "Alipurduar",
      "addressRegion": "West Bengal",
      "postalCode": "735214",
      "addressCountry": "IN"
    },
    "telephone": "+91-91473-89022",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.561057,
      "longitude": 89.415935
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Conference / Banquet Hall", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Café", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true }
    ],
    "checkinTime": "14:00",
    "checkoutTime": "11:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": 1
    }
  }

  return (
    <>
      <Script
        id="chilapata-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <Discover />
      <Elevate />
      <Corner />
      <Testimonials />
      <CheckOut />
      <Accessibility />
      <Explore />
      <Offer />
    </>
  )
}

export default page

export const metadata = {
  title: "Best Resort In Chilapata | Best Hotel In Chilapata",
  description: "Looking for the best resort in Chilapata? Stay at the top-rated hotel in Chilapata and enjoy nature, luxury, and local charm.",
}
