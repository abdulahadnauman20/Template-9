"use client"
import React from 'react'
import Aboutus from './aboutus'
import TeamMember from './team'
import Testimonial1 from './testimonial'
import Foodmenu from './foodmenu'
import Footer from '@/component/footer'
import Header from '@/component/Header'
import Bottom from '@/component/bottom'
import Common from '@/component/common'
const page = () => {
  return (
    <div>
        <Header/>
        <Common title='About Us' subtitle='Blog'/>  
        <Aboutus/>
        <TeamMember/>
        <Testimonial1/>
        <Foodmenu/>
        <Footer/>
        <Bottom/>
    </div>
  )
}

export default page