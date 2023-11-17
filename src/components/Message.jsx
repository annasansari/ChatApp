import React from 'react'
import profile from '../assets/avatar.png'

function Message() {
  return (
    <div className='h-16 bg-slate-200 cursor-pointer'>
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