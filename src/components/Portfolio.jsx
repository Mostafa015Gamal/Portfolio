import React, { useState } from 'react'
import img1 from "../imgs/poert1.png";
import img2 from "../imgs/port2.png";
import img3 from "../imgs/port3.png";

export default function Portfolio() {
  const [img, setImg] = useState()
  const [fixed, setFixed] = useState('hidden')

  function getImg(src) {
    setImg(src)
    setFixed('flex')
  }
  function closeDev() {
    setFixed("hidden"); 
  }

  return <>
    <div className='w-full pt-32 pb-6 text-indigo-950 flex justify-center items-center flex-col'>
      <h1 className='text-[40px] font-bold uppercase max-sm:text-[30px]'>portfolio component</h1>
      <div className='flex justify-center items-center'>
        <div className='bg-indigo-950 w-28 h-1'></div>
        <i className="fa-solid fa-star px-4"></i>
        <div className='bg-indigo-950 w-28 h-1'></div>
      </div>
    </div>
    <div className='grid grid-cols-3 pb-6 gap-10 w-[85%] mx-auto max-md:grid-cols-1 max-lg:grid-cols-2'>
      <div  className='cursor-pointer relative group'>
        <img src={img1} className='w-full rounded-lg' alt="" />
        <div onClick={()=>getImg(img1)} className='bg-[#29b197]/80 text-white w-full h-full rounded-lg start-0 top-0 absolute flex justify-center items-center transition-all duration-700 opacity-0 group-hover:opacity-100'><i className="fa-solid fa-plus text-8xl"></i></div>
      </div>
      <div className='cursor-pointer relative group'>
        <img src={img2} className='w-full rounded-lg' alt="" />    
        <div onClick={()=>getImg(img2)} className='bg-[#29b197]/80 text-white w-full h-full rounded-lg start-0 top-0 absolute flex justify-center items-center transition-all duration-700 opacity-0 group-hover:opacity-100'><i className="fa-solid fa-plus text-8xl"></i></div>
      </div>
      <div className='cursor-pointer relative group'>
        <img src={img3} className='w-full rounded-lg' alt="" />
        <div onClick={()=>getImg(img3)} className='bg-[#29b197]/80 text-white w-full h-full rounded-lg start-0 top-0 absolute flex justify-center items-center transition-all duration-700 opacity-0 group-hover:opacity-100'><i className="fa-solid fa-plus text-8xl"></i></div>
      </div>
      <div className='cursor-pointer relative group'>
        <img src={img1} className='w-full rounded-lg' alt="" />
        <div onClick={()=>getImg(img1)} className='bg-[#29b197]/80 text-white w-full h-full rounded-lg start-0 top-0 absolute flex justify-center items-center transition-all duration-700 opacity-0 group-hover:opacity-100'><i className="fa-solid fa-plus text-8xl"></i></div>
      </div>
      <div className='cursor-pointer relative group'>
        <img src={img2} className='w-full rounded-lg' alt="" />
        <div onClick={()=>getImg(img2)} className='bg-[#29b197]/80 text-white w-full h-full rounded-lg start-0 top-0 absolute flex justify-center items-center transition-all duration-700 opacity-0 group-hover:opacity-100'><i className="fa-solid fa-plus text-8xl"></i></div>
      </div>
      <div className='cursor-pointer relative group'>
        <img src={img3} className='w-full rounded-lg' alt="" />
        <div onClick={()=>getImg(img3)} className='bg-[#29b197]/80 text-white w-full h-full rounded-lg start-0 top-0 absolute flex justify-center items-center transition-all duration-700 opacity-0 group-hover:opacity-100'><i className="fa-solid fa-plus text-8xl"></i></div>
      </div>
    </div>
    <div onClick={(e)=>closeDev(e)} className={`w-screen h-screen fixed top-0 z-50 bg-[#c2dbfe]/30 ${fixed} justify-center items-center`} >
      <img onClick={(e)=>{e.stopPropagation()}} src={img} className='w-[45%] max-md:w-[90%]' alt="" />
    </div>
</>
}
