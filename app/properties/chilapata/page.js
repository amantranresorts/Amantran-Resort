import Discover from '@/app/component/properties/chilapata/Discover'
import Elevate from '@/app/component/properties/chilapata/Elevate'
import Hero from '@/app/component/properties/chilapata/Hero'
import Corner  from '@/app/component/properties/chilapata/Corner'
import React from 'react'
import Accessibility from '@/app/component/properties/chilapata/Accessibility'
import Explore from '@/app/component/properties/chilapata/Explore'
import Offer from '@/app/component/properties/chilapata/Offer'
import Testimonials from '@/app/component/properties/chilapata/Testimonials'
import Upcoming from '@/app/component/home/Upcoming'
import CheckOut from '@/app/component/properties/chilapata/CheckOut'

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
  title: "Best Resort In Chilapata | Best Hotel In Chilapata",
  description: "Looking for the best resort in Chilapata? Stay at the top-rated hotel in Chilapata and enjoy nature, luxury, and local charm.",
};

