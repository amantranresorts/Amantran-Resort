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
  title: "Amantran Hotel & Resort, Tarapith | Peaceful Stay Near the Sacred Temple",
  description: "Stay close to spirituality at Amantran Resort, Tarapith — located near the iconic Tarapith Temple. Experience soulful hospitality, comfort, and divine tranquility.",
};
