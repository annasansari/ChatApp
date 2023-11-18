import React from 'react'
import './style.css'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Message from '../components/Message'

function Sidebar() {
  return (
    <div className='border-color flex-[1] bg-slate-500 overflow-y-scroll'>
      <Navbar />
      <SearchBar />
      <div className='mt-2'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  )
}

export default Sidebar