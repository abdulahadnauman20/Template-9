import React from 'react'
import Hero from '@/component/hero'
import Hero1 from '@/component/hero1'
import Hero2 from '@/component/hero2'
import Hero4 from '@/component/hero4'
import FoodMenu from '@/component/foodmenu'
import Meetchef from '@/component/meetchef'
import Testimonials from '@/component/testimonials'
import Hero5 from '@/component/hero5'
import Hero6 from '@/component/hero6'
import Footer from '@/component/footer'
import Bottom from '@/component/bottom'
import Header from '@/component/Header'

const page = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Hero1/>
      <Hero2/>
      
      <Hero4/>
    <FoodMenu/>
    <Meetchef/>
   <Testimonials/>
   <Hero5/>
   <Hero6/>
   <Footer/>
   <Bottom/>
   
    </div>
  )
}

export default page