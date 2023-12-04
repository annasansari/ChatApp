import React, { useContext, useEffect, useState } from 'react'
import UserMessage from './UserMessage'
import './style.css'
import { ChatContext } from '../context/ChatContext'
import { db, doc, onSnapshot } from '../firebase/firebase'

function Messages() {
    const [messages, setMessages] = useState([])
    const { data } = useContext(ChatContext)

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unSub();
        };
    }, [data.chatId]);

    console.log(messages);

    return (
        <>
            <div className='overflow-y-scroll h-[86vh] bg-slate-30000'>
                {messages.map((m) => {
                <UserMessage message={m}/>
               })}
            </div>
        </>
    )
}

export default Messages