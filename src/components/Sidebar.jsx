import React from 'react'
import './style.css'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Users from './Users'

function Sidebar() {
  return (
    <div className='border-color flex-[1] bg-slate-500 overflow-y-scroll'>
      <Navbar />
      <SearchBar />
      <Users />
    </div>
  )
}

export default Sidebar