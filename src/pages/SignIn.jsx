import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (

    <div className="flex justify-center mt-36 ">
      <div className="shadow-md bg-slate-300 p-5 flex flex-col gap-3">
        <h1 className='text-2xl font-bold flex justify-center '>chatapp</h1>
        <h1 className='text-2xl font-bold flex justify-center '>sign In</h1>
        <form className='flex flex-col gap-4'>
          <input
            type="text"
            placeholder='Email'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <input
            type="text"
            placeholder='Password'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <Link to={'/chat'}>
            <button className='bg-sky-600 rounded-lg text-white font-medium p-1 w-[100%]'>Sign up</button>
          </Link>
          <Link to={'/signup'}>
            <p className='px-6'>Don't have an account?<span className='text-sky-500 cursor-pointer hover:underline'> Sign Up</span></p>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignIn