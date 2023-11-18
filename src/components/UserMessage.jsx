import React from 'react'
import profile from '../assets/anasPic.jpg'
import avatar from '../assets/avatar.png'

import './style.css'

function UserMessage() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={avatar} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* <img src={profile} alt="" /> */}
      </div>
    </div>
  )
}

export default UserMessage


{/* <div className='flex justify-start items-center gap-5 mt-6 px-3 owner'>
        <div>
          <img src={profile} alt="" className='w-9 h-9 rounded-full object-cover ' />
        </div>
        <div className="w-auto h-auto p-3 set-borders bg-slate-500">
          <p>Hey! how are you?</p>
        </div>
      </div> */}