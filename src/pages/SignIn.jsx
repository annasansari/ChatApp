import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, signInWithEmailAndPassword } from '../firebase/firebase.js'

function SignIn() {
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setErr(false)
    setLoading(true)
    const email = (e.target[0].value);
    const password = (e.target[1].value);

    try {
      await signInWithEmailAndPassword(auth, email, password)
      setLoading(false)
      setErr(false)
      navigate('/')
    } catch (error) {
      setErr(true)
      setLoading(false)
      console.log(error.message);
    }
  }
  return (

    <div className="flex justify-center mt-36 ">
      <div className="shadow-md bg-slate-300 p-5 flex flex-col gap-3">
        <h1 className='text-2xl font-bold flex justify-center '>chatapp</h1>
        <h1 className='text-2xl font-bold flex justify-center '>sign In</h1>
        <form className='flex flex-col gap-4' onSubmit={handleLogin}>
          <input
            type="email"
            placeholder='Email'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <input
            type="password"
            placeholder='Password'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <button className='bg-sky-600 rounded-lg text-white font-medium p-1 w-[100%]'>{loading ? "Loading..." : "Sign In"}</button>
          <p>{err && <span className='text-red-600 font-semibold'>Wrong Email or Password</span>}</p>
          <Link to={'/signup'}>
          <p className='px-6'>Don't have an account?<span className='text-sky-500 cursor-pointer hover:underline'> Sign Up</span></p>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignIn



// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')
// const [loading, setLoading] = useState(false)
// const [err, setErr] = useState(false)
// const navigate = useNavigate()

// const login = async (e) => {
//   e.preventDefault()
//   try {
//     setErr(false)
//     setLoading(true)
//     await signInWithEmailAndPassword(auth, email, password)
//     navigate('/')
//     setLoading(false)
//   } catch (err) {
//     setErr(true)
//     setLoading(false)
//     console.log(err);
//   }
// }