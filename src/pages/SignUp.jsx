import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gallery from '../assets/gallery.png'
import { doc, setDoc, updateProfile, auth, createUserWithEmailAndPassword, collection, db, ref, uploadBytesResumable, getDownloadURL, storage } from '../firebase/firebase.js'


function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log(file[0]);

        const mountainsRef = ref(storage, `images/${file[0].name}`);
        const uploadTask = uploadBytesResumable(mountainsRef, file[0]);
        uploadTask.on(
          (error) => {
            console.log(error)
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              // console.log(`File available at -> ${downloadURL}`);
              await setDoc(doc(db, "Users", user.uid), {
                userId: user.uid,
                name,
                email,
                password,
                photoURL: downloadURL,
              });
              await setDoc(doc(db, "chatUsers", user.uid), {});
              navigate('/')
              setLoading(false)
            });
          }
        );
      })
      .catch((error) => {
        setLoading(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }


  return (

    <div className="flex justify-center mt-36 ">
      <div className="shadow-md bg-slate-300 p-5 flex flex-col gap-3">
        <h1 className='text-2xl font-bold flex justify-center '>chatapp</h1>
        <h1 className='text-2xl font-bold flex justify-center '>sign up</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder='Username'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            type="text"
            placeholder='Email'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            type="password"
            placeholder='Password'
            className='p-2 rounded-md outline-none text-slate-900 ' />
          <label htmlFor="file" className='flex items-center gap-3'>
            <img className='w-10 cursor-pointer' src={gallery} alt="" />
            <p className='cursor-pointer'> Choose an avatar</p>
          </label>
          <input
            required
            onChange={(e) => setFile(e.target.files)}
            style={{ display: 'none' }} type="file" id='file' />
          <button className='bg-sky-600 rounded-lg text-white font-medium p-1'>{loading ? 'Loading...' : 'Sign Up'}</button>
          {/* <p>{err ? <span className='text-red-600'> {errorMessage} </span> : <span className='text-green-600'>Account is Created</span>}</p> */}
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