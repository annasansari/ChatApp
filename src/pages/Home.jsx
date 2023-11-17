import React from 'react'
import Sidebar from '../components/Sidebar'
import Chats from '../components/Chats'

function Home() {
  return (
    <div className='bg-slate-600 flex justify-center h-screen items-center over'>
      <div className="border-2 w-[65%] h-[80%] rounded-md flex">
        <Sidebar />
        <Chats />
      </div>
    </div>
  )
}

export default Home