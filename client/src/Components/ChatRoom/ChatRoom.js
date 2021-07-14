import React, { useEffect, useState } from 'react';
import { io, openSocket } from 'socket.io-client';

import "./ChatRoom.css"

let socket;

const ChatRoom = ({userName, roomName}) => {
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const ENDPOINT = "localhost:5000";

	// likely bug on refresh
	useEffect(() => {
		socket = io(ENDPOINT);
	
		console.log("emit to join");
		socket.emit('join', {
			name: userName,
			room: roomName,
		});

		const cleanup = () => {
			socket.emit("leave", {
				name: userName,
				room: roomName,
			});
			socket.off();
		}

		window.addEventListener('beforeunload', cleanup);
		return () => {
			window.removeEventListener('beforeunload', cleanup);
			socket.emit("leave", {
				name: userName,
				room: roomName,
			});
			socket.off();
		}

	}, []);

	const sendMessage = (event) => {
		event.preventDefault();
		console.log(message);
		setMessages([...messages, message]);
	}

	return (
		<div>
			<form>
				<input type="text" placeholder="write message" onChange={(event) => setMessage(event.target.value)} />
				<input type="submit" value="submit" onClick={(event) => sendMessage(event)} />
			</form>
			<ul>
				{messages.map( mes => {
					return (
						<li>{ mes }</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ChatRoom;