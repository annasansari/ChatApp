import React, { useContext, useEffect, useState } from 'react'
import { db, query, where, getDocs, collection, setDoc, updateDoc, serverTimestamp, getDoc, doc } from '../firebase/firebase'
import profile from '../assets/avatar.png'
import { AuthContext } from '../context/AuthContext'


function SearchBar() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)
  const { currentUser } = useContext(AuthContext)


  useEffect(() => {
    console.log('Updated user:', user);
  }, [user]);

  const handleSearch = async () => {
    setErr(false)
    const q = query(collection(db, "Users"), where("displayName", "==", username))

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log('User data set:', doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  }
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  const handleSelect = async () => {
    const combinedID =
      currentUser.uid > user.userID
        ? currentUser.uid + user.userID
        : user.userID + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedID));

      if (!res.exists()) {
        // Creating documents in the 'chats' collection
        await setDoc(doc(db, "chats", combinedID), { messages: [] });

        // Updating documents in the 'usersChat' collection
        await updateDoc(doc(db, "usersChat", currentUser.uid), {
          [combinedID + ".userInfo"]: {
            uid: user.userID,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedID + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "usersChat", user.userID), {
          [combinedID + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedID + ".date"]: serverTimestamp(),
        });
      } else {
        console.log("Document already exists.");
      }
    } catch (err) {
      console.log("Error updating documents:", err.message);
    }
    setUsername('')
    setUser(null)
  };


  return (
    <>
      <div>
        <input value={username} onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Search User' className='bg-transparent p-3 text-slate-300 h-10 outline-none placeholder:text-slate-400 w-[100%] ' />
      </div>
      {
        user && <div onClick={handleSelect} className='h-16 bg-slate-200 cursor-pointer border-btm'>
          <div className='flex items-center gap-2'>
            <div>
              <img src={user.photoURL || profile} alt="" className='w-12 h-12 rounded-full object-cover mt-2' />
            </div>
            <div>
              <h1 className='font-bold'>{user.displayName}</h1>
              <p className='text-sm'>Ok Thank you</p>
            </div>
          </div>
        </div>
      }
    </>

  )
}

export default SearchBar





// {err && <span className='text-slate-300 font-semibold text-5xlg flex justify-center items-center'>User not found</span>}