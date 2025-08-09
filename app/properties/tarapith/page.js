import React from 'react'
import Script from 'next/script'
import Discover from '@/app/component/properties/tarapith/Discover'
import Elevate from '@/app/component/properties/tarapith/Elevate'
import Hero from '@/app/component/properties/tarapith/Hero'
import Corner from '@/app/component/properties/tarapith/Corner'
import Accessibility from '@/app/component/properties/tarapith/Accessibility'
import Explore from '@/app/component/properties/tarapith/Explore'
import Offer from '@/app/component/properties/tarapith/Offer'
import CheckOut from '@/app/component/properties/tarapith/CheckOut'
import Testimonials from '@/app/component/properties/tarapith/Testimonials'

const page = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Best Resort In Tarapith | Best Hotel In Tarapith",
    "description": "A serene spiritual retreat in Tarapith blending comfort, warm hospitality, and modern amenities near sacred temples.",
    "url": "https://www.amantranresorts.in/properties/tarapith",
    "image": [
      "https://www.amantranresorts.in/properties/tarapith/image1.jpg",
      "https://www.amantranresorts.in/properties/tarapith/image2.jpg"
    ],
    "telephone": "+91 9147389020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4QQM+V9R, Tarapith Road, Belia, Rampurhat",
      "addressLocality": "Tarapith",
      "addressRegion": "West Bengal",
      "postalCode": "731233",
      "addressCountry": "IN"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "3",
      "bestRating": "5"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Restaurant", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Conference / Banquet Hall", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Café", "value": true }
    ],
    "checkinTime": "12:00",
    "checkoutTime": "11:00",
    "priceRange": "₹₹",
    "sameAs": [
      "https://www.facebook.com/amantranresorts",
      "https://www.instagram.com/amantranresorts"
    ]
  }

  return (
    <>
      <Script
        id="tarapith-schema"
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
  title: "Best Resort In Tarapith | Best Hotel in Tarapith",
  description:
    "Experience serenity and luxury at the best resort in Tarapith. Stay at the best hotel in Tarapith for a divine and peaceful getaway.",
}
