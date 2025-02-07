import React from 'react'
import Link from 'next/link'
interface propstype{
    title:string;
    subtitle:string;
}

const Common:React.FC<propstype> = ({title,subtitle}:propstype ) => {
  return (
<div className="md:max-w-[1920px] h-[410px] w-full bg-[url('/Images/img.png')] bg-cover bg-center bg-no-repeat">
      <div className=' w-full h-[104px] top-{198px} text-center left-{850px}'>
        <h1 className='font-bold text-[48px] w-full pt-[8%] text-white'>{title}</h1>
        <div className='flex w-full text-white gap-2 pl-[47%] pt-[%]'>
           <Link href="/"> <span className='text-white'>Home</span></Link>&gt;<span className='text-[orange]'>{subtitle}</span>
        </div>
      </div>
    </div>
  )
}

export default Common
