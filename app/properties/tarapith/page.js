import Discover from '@/app/component/properties/tarapith/Discover'
import Elevate from '@/app/component/properties/tarapith/Elevate'
import Hero from '@/app/component/properties/tarapith/Hero'
import Corner from '@/app/component/properties/tarapith/Corner'
import React from 'react'
import Accessibility from '@/app/component/properties/tarapith/Accessibility'
import Explore from '@/app/component/properties/tarapith/Explore'
import Offer from '@/app/component/properties/tarapith/Offer'
import CheckOut from '@/app/component/properties/tarapith/CheckOut'
import Testimonials from '@/app/component/properties/tarapith/Testimonials'

const page = () => {
  return (
    <>
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
  description: "Experience serenity and luxury at the best resort in Tarapith. Stay at the best hotel in Tarapith for a divine and peaceful getaway.",
};
