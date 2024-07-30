
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [flag, setFlag] = useState(true)
  function toggleNavbar() {
    if (flag) setFlag(false)
      else setFlag(true)
  }
const [scroll, setScroll] = useState("py-8 h-fit")
window.onscroll = function changeNavbar() {
  if (this.scrollY >= 10) setScroll('py-5 h-fit')
    else setScroll('py-8 h-fit')
}
  return <>
  <nav className={flag == false ? `bg-slate-700 fixed w-full z-40 text-white transition-all duration-[.2s] ${scroll} items-center tracking-tighter  h-64 lg:h-fit` : `bg-slate-700 text-white transition-all duration-[.5s] fixed z-40 w-full h-[100px] overflow-hidden ${scroll} items-center tracking-tighter  lg:h-fit `}>
    <div className="grid grid-cols-2 px-6 md:px- lg:px-32">
    <div className='w-fit'>
      <Link to="" className='uppercase font-bold text-3xl max-sm:text-[22px]'>Start Framework</Link>
    </div>
    <div className='flex justify-end lg:hidden '>
      <button onClick={()=>toggleNavbar()} className='text-black  text-3xl border h-fit border-black px-4 py-1 rounded-md max-sm:text-[22px] max-sm:px-3 max-sm:py-1'><i className='fa-solid fa-bars '></i></button>
    </div>
<div className={flag == false ? 'flex w/full flex-col justify-end pt-7 lg:flex-row lg:pt-0' : 'pt-7 hidden lg:flex lg:flex-row lg:pt-0 lg:justify-end'}>
  <NavLink to="about" className=" w-fit uppercase font-bold text-md px-3 py-2 me-3">About</NavLink>
    <NavLink to="portfolio" className=" w-fit uppercase font-bold text-md px-3 py-2 me-3">portfolio</NavLink>
    <NavLink to="contact" className=" w-fit uppercase font-bold text-md px-3 py-2 me-3" >Contact</NavLink>
</div>
    </div>
  </nav>




  </>
}
