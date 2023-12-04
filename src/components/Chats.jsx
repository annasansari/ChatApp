import React, { useContext } from 'react'
import avatar from '../assets/avatar.png'
import camera from '../assets/cam-recorder.png'
import friend from '../assets/friends.png'
import more from '../assets/more.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'


function Chats() {
  const { data } = useContext(ChatContext)
  return (
    <div className='flex-[2] h-[100vh]'>
      <div className='flex justify-between items-center shadow-lg p-2'>
        <div className='flex justify-center gap-2 mx-5 mt-2'>
          <img src={data.user?.photoURL} alt="" className='w-8 h-8 rounded-full object-cover' />
          <h1 className='font-semibold mt-1'>{data.user?.displayName}</h1>
        </div>
        <div className='flex justify-center items-center gap-6 px-9 mt-2'>
          <img src={camera} alt="" className='w-6 h-6 cursor-pointer' />
          <img src={friend} alt="" className='w-5 h-5 cursor-pointer' />
          <img src={more} alt="" className='w-5 h-5 cursor-pointer' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chats