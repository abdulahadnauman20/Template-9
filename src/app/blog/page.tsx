import React from 'react'
import Common from '@/component/common'
import Header from '@/component/Header'
import Footer from '@/component/footer'
import Bottom from '@/component/bottom'
import Blogpost from '@/component/blogpost'
const page = () => {
  return (
    <div>
      <Header />
      <Common title='Our Blog' subtitle='Blog'/>
      <Blogpost />
      <Footer />
      <Bottom />
    </div>
  )
}

export default page
