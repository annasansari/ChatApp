import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gallery from '../assets/gallery.png'
import { doc, setDoc, updateProfile, auth, createUserWithEmailAndPassword, collection, db, ref, uploadBytesResumable, getDownloadURL, storage } from '../firebase/firebase.js'


function SignUp() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const displayName = (e.target[0].value);
    const email = (e.target[1].value);
    const password = (e.target[2].value);
    const file = (e.target[3].files[0]);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, 'images/rivers.jpg');
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          setErr(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "Users", res.user.uid), {
              userID: res.user.uid,
              displayName,
              email,
              password,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "usersChat", res.user.uid), {});
            setLoading(false)
            navigate('/')
          });
        }
      );
    } catch (error) {
      setLoading(false)
      setErr(true)
      console.log(error.message);
      setHasError(error.message)
      if (error.message === 'Firebase: Error (auth/invalid-email).') {
        setHasError('Weak Password')
      }
      else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        setHasError('Input Invalid Email')
      }
      else {
        setHasError("Account Created")
      }
    }
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
            id='email'
            type="text"
            placeholder='Email'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <input
            id='password'
            type="password"
            placeholder='Password'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <label htmlFor="file" className='flex items-center gap-3'>
            <img className='w-10 cursor-pointer' src={gallery} alt="" />
            <p className='cursor-pointer'> Choose an avatar</p>
          </label>
          <input
            style={{ display: 'none' }} type="file" id='file' />
          <button className='bg-sky-600 rounded-lg text-white font-medium p-1'>{loading ? "Loading..." : "Sign Up"}</button>
          <p>{err && <span className='text-red-600'>{hasError}</span>}</p>
          <Link to={'/signin'}>
            <p className='px-6'>Already have an account?<span className='text-sky-500 cursor-pointer hover:underline'> Sign In</span></p>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp




// const displayName = e.target[0].value
//     const email = e.target[1].value
//     const password = e.target[2].value
//     const file = e.target[3].files[0]

//     console.log(displayName, email, password, file);

//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password)
//       const storageRef = ref(storage, displayName);

//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         (error) => {
//           setError(true)
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//             await updateProfile(res.user, {
//               displayName,
//               photoURL: downloadURL,
//             })
//             await setDoc(collection(db, "users", res.user.uid), {
//               userId: res.user.uid,
//               displayName,
//               photoURL,
//               email,
//               password
//             });
//             await setDoc(collection(db, 'userChat', res, user.uid), {});
//             navigate('/')
//           });
//         }
//       );
//     }
//     catch (err) {
//       setError(true)
//     }