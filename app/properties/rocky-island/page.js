import Discover from '@/app/component/properties/rockyisland/Discover'
import Elevate from '@/app/component/properties/rockyisland/Elevate'
import Hero from '@/app/component/properties/rockyisland/Hero'
import Corner from '@/app/component/properties/rockyisland/Corner'
import React from 'react'
import Accessibility from '@/app/component/properties/rockyisland/Accessibility'
import Explore from '@/app/component/properties/rockyisland/Explore'
import Offer from '@/app/component/properties/rockyisland/Offer'
import CheckOut from '@/app/component/properties/rockyisland/CheckOut'

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
  title: "Best Resort In Rocky Island | Best Hotel in Rocky Island",
  description: "Experience nature at its best! Book the Best Resort in Rocky Island for a serene getaway. Your ideal stay at the Best Hotel in Rocky Island awaits.",
};

// export function generateMetadata(){}