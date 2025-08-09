import React from 'react'
import Script from 'next/script'
import Discover from '@/app/component/properties/rockyisland/Discover'
import Elevate from '@/app/component/properties/rockyisland/Elevate'
import Hero from '@/app/component/properties/rockyisland/Hero'
import Corner from '@/app/component/properties/rockyisland/Corner'
import Accessibility from '@/app/component/properties/rockyisland/Accessibility'
import Explore from '@/app/component/properties/rockyisland/Explore'
import Offer from '@/app/component/properties/rockyisland/Offer'
import CheckOut from '@/app/component/properties/rockyisland/CheckOut'

const page = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Best Resort In Rocky Island | Best Hotel In Rocky Island",
    "description": "Eco-lodge amidst Rocky Island, Samsing near the Murti River. Offers serene nature, in-house restaurant, room service, free parking, and more.",
    "url": "https://www.amantranresorts.in/properties/rocky-island",
    "image": [
      "https://www.amantranresorts.in/properties/rocky-island/image1.jpg",
      "https://www.amantranresorts.in/properties/rocky-island/image2.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Samsing Lower, Bhalukhop, Jaldhaka, Samsing",
      "addressLocality": "Samsing",
      "addressRegion": "West Bengal",
      "postalCode": "735223",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.7333,
      "longitude": 88.6167
    },
    "telephone": "+91-9147389029",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Room service", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24-hour front desk", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Garden", "value": true }
    ],
    "checkinTime": "12:00",
    "checkoutTime": "11:00",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "3",
      "bestRating": "5"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "7.7",
      "ratingCount": 7
    }
  }

  return (
    <>
      <Script
        id="rockyisland-schema"
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
  title: "Best Resort In Rocky Island | Best Hotel in Rocky Island",
  description:
    "Experience nature at its best! Book the Best Resort in Rocky Island for a serene getaway. Your ideal stay at the Best Hotel in Rocky Island awaits.",
}
