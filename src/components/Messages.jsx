import React from 'react'
import UserMessage from './UserMessage'
import './style.css'

function Messages() {
    return (
        <div className=''>
            <div>
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