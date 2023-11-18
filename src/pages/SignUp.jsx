import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, auth, createUserWithEmailAndPassword } from '../firebase/firebase.js'

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  console.log(email, password);

  const handleSubmit = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User==>', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage-->', errorMessage);
        // ..
      });
  }

  return (

    <div className="flex justify-center mt-36 ">
      <div className="shadow-md bg-slate-300 p-5 flex flex-col gap-3">
        <h1 className='text-2xl font-bold flex justify-center '>chatapp</h1>
        <h1 className='text-2xl font-bold flex justify-center '>sign up</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Username'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <input
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            type="text"
            placeholder='Email'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <input
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            type="text"
            placeholder='Password'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <button className='bg-sky-600 rounded-lg text-white font-medium p-1'>Sign up</button>
          <Link to={'/signin'}>
            <p className='px-6'>Already have an account?<span className='text-sky-500 cursor-pointer hover:underline'> Sign In</span></p>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp