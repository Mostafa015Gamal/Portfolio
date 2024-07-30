import React from 'react'

export default function About() {
  return (
    <div className='bg-[#1abc9c] w-full pt-60 pb-40 text-white flex justify-center items-center flex-col'>
      <h1 className='text-[40px] font-bold uppercase max-sm:text-[30px]'>about component</h1>
      <div className='flex justify-center items-center'>
        <div className='bg-white w-28 h-1'></div>
        <i className="fa-solid fa-star px-4"></i>
        <div className='bg-white w-28 h-1'></div>
      </div>
      <div className='grid grid-cols-2 w-3/4 pt-9 gap-11 max-md:grid-cols-1'>
        <p>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        <p>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  )
}
