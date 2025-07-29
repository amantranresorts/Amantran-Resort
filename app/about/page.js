import React from 'react'
import Hero from '../component/about/Hero'
import About from '../component/about/About'
import CheckOut from '../component/about/CheckOut'
import Upcoming from '../component/home/Upcoming'

const about = () => {
  return (
    <>
    <Hero />
    <About />
    <CheckOut />
    <Upcoming />
    </>
  )
}

export default about

export const metadata = {
  title: "About Us - Amantran Resorts | Where Tradition Meets Tranquility",
  description: "Discover the story behind Amantran Resorts – a chain of luxury hotels offering serene escapes across Bengal. Rooted in culture, built with elegance, and crafted for unforgettable stays.",
};
