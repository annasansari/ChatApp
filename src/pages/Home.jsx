import React from 'react'
import Sidebar from '../components/Sidebar'
import Chats from '../components/Chats'

function Home() {
  return (
    <div className='bg-slate-300 flex justify-center h-screen items-center over'>
      <div className="border-2 w-[100%] h-[100%]  rounded-md flex ">
        <Sidebar />
        <Chats />
      </div>
    </div>
  )
}

export default Home