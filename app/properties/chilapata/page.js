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
  title: "Amantran Resort, Chilapata | A Jungle Stay Near Jaldapara",
  description: "Unwind at Amantran Resort, Chilapata — nestled in the heart of the Chilapata Forest. Ideal for jungle safaris, birdwatching, and forest getaways.",
};

