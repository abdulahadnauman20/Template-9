import React from 'react'
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
const Header = () => {
  return (
    <div className='lg:max-w-[1920px] h-[90px] w-full bg-[black]'>
      <div className='lg:max-w-[1320px] h-[32px] w-full justify-around p-8 left-{300px} top-{29px} flex flex-col lg:flex-row md-flex-row'>
         <div className='flex'>
          <h1 className='font-bold text-[24px]  text-[white]'>Food</h1>
          <span className='font-bold text-[24px] text-[orange]'>Tuck</span>
         </div>
         <ul className='flex w-[508px] h-[24px] gap-4'>
          <li className='text-[16px] font-bold text-[orange]'><Link href="/">Home</Link></li>
          <li className='text-[16px] font-bold text-white'><Link href="/menu">Menu</Link></li>
          <li className='text-[16px] font-bold text-white'><Link href="/blog">Blog</Link></li>
          <li className='text-[16px] font-bold text-white'><Link href="/pages">Pages</Link></li>
          <li className='text-[16px] font-bold text-white'><Link href="/about">About</Link></li>
          <li className='text-[16px] font-bold text-white'><Link href="/shop">Shop</Link></li>
          <li className='text-[16px] font-bold text-white'><Link href="/contact">Contact</Link></li>
         </ul>
         <div className='flex gap-3'>
         <IoIosSearch size={24} className='text-white'  />
         <FaRegUser size={24} className='text-white'  />
         <IoBagOutline size={24} className='text-white'  />
         </div>
      </div>
    </div>
  )
}

export default Header;
