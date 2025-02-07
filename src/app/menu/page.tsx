import React from 'react'
import Menu2 from './menu2'
import Menu3 from './menu3'
import Menu4 from './menu4'
import Menu5 from './menu5'
import Menu6 from './menu6'
import Menu7 from './menu7'
import Common from '@/component/common'
import Header from '@/component/Header'
import Bottom from '@/component/bottom'
const page = () => {
  return (
    <div className='max-w-full'>
      <Header />
      <Common title='Our Menu' subtitle='Menu' />
        <Menu2/>
        <Menu3/>
        <Menu4/>
        <Menu5/>
        <Menu6/>
        <Menu7/>
        <Bottom /> 

    </div>
  )
}

export default page