import React from 'react'
import Hero from '../component/contact/Hero'
import ContactUs from '../component/contact/ContactUs'
import Director from '../component/contact/Director'

const page = () => {
  return (
    <>
    <Hero />
    <Director />
    <ContactUs />
    </>
  )
}

export default page

export const metadata = {
  title: "Contact Us - Amantran Resorts | Reach Out for Bookings & Queries",
  description: "Get in touch with Amantran Resorts for bookings, support, or any inquiries. Our team is here to assist you with personalized hospitality across all our luxury destinations.",
};
