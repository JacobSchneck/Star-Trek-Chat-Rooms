import React, { useEffect, useState } from 'react';
import { io, openSocket } from 'socket.io-client';

import "./ChatRoom.css"

let socket;

const ChatRoom = ({userName, roomName}) => {
	const [message, setMessage] = useState('');
	const ENDPOINT = "localhost:5000";
	// io.set('origins', ENDPOINT);

	useEffect(() => {
		socket = io(ENDPOINT, {
		});
		// console.log(userName);
		// socket.emit(`join`, { userName, roomName }, () => {

		// });
	

		return () => {
			socket.disconnect();
			socket.off();
		}
	}, []);

	return (
		<div>
			HELLO
		</div>
	);
}

export default ChatRoom;