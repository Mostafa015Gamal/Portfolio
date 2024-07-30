import React from 'react'
import imgHome from "../imgs/avataaars.svg";
export default function Home() {
  return <>
    <div className='bg-[#1abc9c] w-full pt-36 pb-12 flex justify-center items-center text-white'>
      <div className='text-center'>
      <img src={imgHome} className='w-[60%] mx-auto' alt="" />
      <h1 className='text-[40px] max-md:text-[30px] font-bold uppercase pt-8 pb-2'>start Framework</h1>
      <div className='flex justify-center items-center'>
        <div className='bg-white w-28 h-1'></div>
        <i className="fa-solid fa-star px-4"></i>
        <div className='bg-white w-28 h-1'></div>
      </div>
      <p className='pt-4'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  </>
}
