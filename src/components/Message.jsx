import React from 'react'
import profile from '../assets/avatar.png'
import './style.css'

function Message() {
  return (
    <div className='h-16 bg-slate-200 cursor-pointer border-btm'>
      <div className='flex items-center gap-2'>
        <div>
          <img src={profile} alt="" className='w-14 h-14 rounded-full object-cover mt-1' />
        </div>
        <div>
          <h1 className='font-bold'>Anas Ansari</h1>
          <p className='text-sm'>Ok Thank you</p>
        </div>
      </div>
    </div>
  )
}

export default Message