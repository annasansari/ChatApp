import React, { useContext } from 'react'
import camera from '../assets/cam-recorder.png'
import friend from '../assets/friends.png'
import more from '../assets/more.png'
import avatar from '../assets/avatar.png'
import { AuthContext } from '../context/AuthContext'



function TopBar() {
    const { currentUser } = useContext(AuthContext)
    return (
        <div className='w-100 bg-slate-300 h-12 shadow-lg'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-center gap-2 mx-5 mt-2'>
                    <img src={currentUser.photoURL} alt="" className='w-8 h-8 rounded-full object-cover' />
                    <h1 className='font-semibold mt-1'>{currentUser.displayName}</h1>
                </div>
                <div className='flex justify-center items-center gap-6 px-9 mt-2'>
                    <img src={camera} alt="" className='w-6 h-6 cursor-pointer' />
                    <img src={friend} alt="" className='w-5 h-5 cursor-pointer' />
                    <img src={more} alt="" className='w-5 h-5 cursor-pointer' />
                </div>
            </div>

        </div>
    )
}

export default TopBar