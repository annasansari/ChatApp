import React from 'react'
import TopBar from '../components/TopBar'
import Messages from './Messages'
import Input from './Input'


function Chats() {
  return (
    <div className='flex-[2] h-[100vh]'>
      <TopBar />
      <Messages />
      <Input />
    </div>
  )
}

export default Chats