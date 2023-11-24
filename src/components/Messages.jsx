import React from 'react'
import UserMessage from './UserMessage'
import './style.css'

function Messages() {
    return (
        <div>
            <div className='overflow-y-scroll h-[86vh] bg-slate-30000'>
                <UserMessage />
                <UserMessage />
                <UserMessage />
                <UserMessage />
                <UserMessage />
                <UserMessage />
                <UserMessage />
                <UserMessage />
                <UserMessage />
                <UserMessage />
                <UserMessage />
            </div>
        </div>
    )
}

export default Messages