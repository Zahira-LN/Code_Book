import React from 'react'
import Hero from './component/Hero.jsx'
import FeaturedProducts from './component/FeaturedProducts.jsx'
import Testimonials from './Testimonials.jsx'
import Faq from './component/Faq.jsx'
import useTitle from '../../hooks/useTitle.jsx'

const HomePage = () => {
  useTitle("Access Latest Computer Science E-Books - CodeBook")
  return (
    <div className='mx-auto p-2'>
     
      <Hero/>
      <FeaturedProducts/>
      <Testimonials/>
      <Faq/>
    </div>
  )
}

export default HomePage