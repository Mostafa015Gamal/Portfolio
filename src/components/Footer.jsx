import React from 'react'

export default function Footer() {
  return <>
    <div className='bg-slate-700 text-white py-24 leading-6'>
      <div className='w-[85%] m-auto grid grid-cols-3 max-md:grid-cols-1 gap-12'>
      <div className='flex justify-center items-center flex-col'>
        <h2 className='text-3xl font-semibold'>LOCATION</h2>
        <p className='pb-3'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div  className='flex justify-center items-center flex-col pb-4'>
        <h2 className='text-3xl font-semibold'>AROUND THE WEB</h2>
        <div className='flex items-center pt-3'>
        <div className='w-10 h-10 me-3'>
        <i className='fa-brands  fa-facebook border p-3 rounded-full'></i>
        </div>
        <div className='w-10 h-10 me-3'>
        <i className='fa-brands fa-twitter border p-3 rounded-full'></i>
        </div>
        <div className='w-10 h-10 me-3'>
        <i className='fa-brands fa-linkedin-in border p-3 rounded-full'></i>
        </div>
        <div className='w-10 h-10 me-3'>
        <i className='fa-solid fa-globe border p-3 rounded-full'></i>
        </div>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col'>
        <h2 className='text-3xl font-semibold pb-5'>ABOUT FREELANCER</h2>
        <p className='text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
      </div>
    </div>
      <div className='bg-[#1a252f] py-5 text-white text-center'>
        <p>Copyright © Your Website 2021</p>
      </div>
</>
}
