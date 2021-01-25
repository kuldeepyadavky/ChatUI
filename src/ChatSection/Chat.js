import React from 'react'
import Chats from './ChatsComponent/Chat'
import Inbox from './Inbox'

import './Chat.css'

function Chat() {
	return (
		<div className='chat'>
			<h1> Chat Section</h1>
			<Chats />
			<Inbox />
		</div>
	)
}

export default Chat
