import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { v4 as uuid } from 'uuid'
import { db } from '../firebase/firebase'

function Input() {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)
  const [text, setText] = useState('')

  const handleSend = async (e) => {
    e.preventDefault()
    await updateDoc(doc(db, "chats", data.chatID), {
      messages: arrayUnion({
        id: uuid(),
        text,
        uid: currentUser.uid,
        date: Timestamp.now()
      })
    })
    setText('');
  }
  return (
    <div className='mb-0 z-20 w-[100%] h-12 bg-white'>
      <form onSubmit={handleSend} className='flex justify-center'>
        <input value={text} onChange={(e) => setText(e.target.value)} className='w-[80%] h-12 p-2 outline-none bg-transparent' type="text" placeholder='Write something...' />
        <button className='w-20 h-9 bg-slate-700 rounded-md mt-2 text-white font-medium text-base'>Send</button>
      </form>
    </div>
  )
}

export default Input