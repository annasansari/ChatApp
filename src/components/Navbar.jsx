import React, { useContext, useState } from 'react'
import profile from '../assets/anasPic.jpg'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { AuthContext } from '../context/AuthContext'

function Navbar() {
  const { currentUser } = useContext(AuthContext)
  return (
    <div>
      <div className='flex justify-around items-center h-16 bg-slate-900'>
        <h1 className='text-[15px] text-white'>ChatApp</h1>
        <div className='flex justify-center items-center gap-6'>
          <img className='w-7 h-7 rounded-full object-cover' src={currentUser.photoURL} alt="" />
          <p className='text-[15px] text-white'>{currentUser.displayName}</p>
          <button className='bg-sky-600 text-white rounded-md text-[12px] p-[5px]' onClick={() => signOut(auth)}>Sing out</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar