import React, { useState } from 'react'

export default function Contact() {

  const [username, setUserName] = useState("top-10")
  const [userage, setUserAge] = useState("top-10")
  const [useremail, setUserEmail] = useState("top-10")
  const [userpassword, setUserPassword] = useState("top-10")

  function startType(id,value) {
    if (id == "username"){
      if (value) setUserName("top-0");
      else setUserName("top-10")
    }
    if (id == "userage"){
      if (value) setUserAge("top-0");
      else setUserAge("top-10")
    }
    if (id == "useremail"){
      if (value) setUserEmail("top-0");
      else setUserEmail("top-10")
    }
    if (id == "userpassword"){
      if (value) setUserPassword("top-0");
      else setUserPassword("top-10")
    }
  }

  return <>
    <div className='pt-24 pb-10 text-indigo-950 flex justify-center items-center flex-col'>
    <h1 className='text-[40px] font-bold uppercase pt-8 max-sm:text-[30px]'>conatct section </h1>
      <div className='flex justify-center items-center'>
        <div className='bg-indigo-950 w-28 h-1'></div>
        <i className="fa-solid fa-star px-4"></i>
        <div className='bg-indigo-950 w-28 h-1'></div>
      </div>
      <div className='w-1/2 max-md:w-[90%]'>
        <div className='flex flex-col pb-4'>
        <label htmlFor="username" className={`text-[#29b197] relative ${username} transition-all duration-500 `}>User Name:</label>
        <input id='username' type="text" placeholder='User Name' onInput={function(e){startType(e.target.id , e.target.value)}} className='outline-none relative border-b py-3 px-2 overflow-hidden placeholder:text-neutral-700' />
        </div>
        <div className='flex flex-col pb-4'>
        <label htmlFor="userage" className={`text-[#29b197] relative ${userage} transition-all duration-500 `}>User Age:</label>
        <input id='userage' type="text" placeholder='User Age' onInput={function(e){startType(e.target.id , e.target.value)}}  className='outline-none relative border-b py-3 px-2 overflow-hidden placeholder:text-neutral-700' />
        </div>
        <div className='flex flex-col pb-4'>
        <label htmlFor="useremail" className={`text-[#29b197] relative ${useremail} transition-all duration-500 `}>User Email:</label>
        <input id='useremail' type="email" placeholder='User Email' onInput={function(e){startType(e.target.id , e.target.value)}}  className='outline-none relative border-b py-3 px-2 overflow-hidden placeholder:text-neutral-700' />
        </div>
        <div className='flex flex-col pb-4'>
        <label htmlFor="userpassword" className={`text-[#29b197] relative ${userpassword} transition-all duration-500 `}>User Password:</label>
        <input id='userpassword' type="password" placeholder='User Password' onInput={function(e){startType(e.target.id , e.target.value)}}  className='outline-none relative border-b py-3 px-2 overflow-hidden placeholder:text-neutral-700' />
        </div>
        <button className='bg-[#29b197] py-2 px-3 rounded-md text-white'>send massage</button>
      </div>
    </div>
  </>
}
