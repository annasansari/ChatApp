import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import { db, doc, onSnapshot, } from '../firebase/firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

function Users() {
    const [chat, setChats] = useState([])
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext)

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "usersChat", currentUser.uid), (doc) => {
                setChats(doc.data())
            });
            return () => {
                unsub()
            }
        }
        currentUser.uid && getChats()
    }, [currentUser.uid])

    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u })
    }


    return (
        <div className='h-16 cursor-pointer'>
            {Object.entries(chat)?.map((chat) => (
                <div className='p-2 flex items-center gap-2 bg-slate-500 hover:bg-slate-600 border-btm' key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                    <div>
                        <img src={chat[1].userInfo.photoURL} alt="" className='w-14 h-14 rounded-full object-cover mt-1' />
                    </div>
                    <div>
                        <h1 className='font-bold text-white'>{chat[1].userInfo.displayName}</h1>
                        <p className='text-sm'>{chat[1].userInfo.lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Users
