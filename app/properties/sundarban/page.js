import Accessibility from '@/app/component/properties/sundarban/Accessibility'
import CheckOut from '@/app/component/properties/sundarban/CheckOut'
import Corner from '@/app/component/properties/sundarban/Corner'
import Discover from '@/app/component/properties/sundarban/Discover'
import Elevate from '@/app/component/properties/sundarban/Elevate'
import Explore from '@/app/component/properties/sundarban/Explore'
import Hero from '@/app/component/properties/sundarban/Hero'
import Offer from '@/app/component/properties/sundarban/Offer'
import React from 'react'

const page = () => {
  return (
    <>
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
  title: "Amantran Resort, Sundarban | Riverside Luxury Amidst the Mangroves",
  description: "Explore the wild beauty of Sundarban from Amantran Resort. Enjoy riverside stays, boat safaris, and eco-luxury amidst the world’s largest mangrove forest.",
};

