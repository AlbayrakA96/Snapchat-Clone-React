import React from 'react'
import './Chat.css'
import { Avatar } from "@material-ui/core";

function Chat({id, username, timestamp, read, imageUrl, profilePic}) {
    return (
        <div className='chat'>
            <Avatar src={profilePic} />
            <div className="chat__info">
                <h4>{username}</h4>
                <p>Tap to view - {new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
    )
}

export default Chat
