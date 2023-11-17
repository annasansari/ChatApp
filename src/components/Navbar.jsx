import React from 'react'
import profile from '../assets/anasPic.jpg'

function Navbar() {
  return (
    <div>
      <div className='flex justify-around items-center h-16 bg-slate-900'>
        <h1 className='text-[15px] text-white'>ChatApp</h1>
        <div className='flex justify-center items-center gap-3'>
          <img className='w-7 h-7 rounded-full object-cover' src={profile} alt="" />
          <p className='text-[15px] text-white'>Anas Ansari</p>
          <button className='bg-sky-600 text-white rounded-md text-[12px] p-[5px] '>Sing out</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar