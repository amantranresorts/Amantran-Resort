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
  title: "Best Resort In Sundarban | Best Hotel in Sundarban",
  description: "Enjoy serene views and comfort at the best resort in Sundarban. Your perfect getaway starts at the best hotel in Sundarban. Book now!",
};

