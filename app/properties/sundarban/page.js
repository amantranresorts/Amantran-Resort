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
            "@context": "https://schema.org/",         
            "@type": "LocalBusiness",         
            "@id": "#LocalBusiness",         
            "url": "https://www.amantranresorts.in/properties/sundarban",          
            "legalName": "Amantran Resorts",
            "name": "Best Resort In Sundarban | Best Hotel In Sindarban",
            "description": "Enjoy serene views and comfort at the best resort in Sundarban. Your perfect getaway starts at the best hotel in Sundarban. Book now!",
            "image": "https://www.amantranresorts.in/_next/image?url=%2Fimages%2Fsundarban%2Fhome.jpg&w=2048&q=75",
            "logo": "https://www.amantranresorts.in/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75",
            "telephone": "+91 9147389026, +91 9147389029",
            "faxNumber": "",
            "email": "amantranmarketing2025@gmail.com,  info@amantranresorts.in",
            "address": {             
              "@type": "PostalAddress",             
              "streetAddress": "Vill- Sonagaon, P.O - Dulki, ",             
              "addressLocality": "P.S - Gosaba,",             
              "addressRegion": "Sunderban",             
              "addressCountry": "India",             
              "postalCode": "743370"        
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
