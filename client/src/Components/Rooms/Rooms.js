import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Rooms.css";


const Rooms = () => {
	const [room, setRoom] = useState('');

	return (
		<div className="link-container">
			<Link className="link" to={'/rooms/TOS'}>
				<button className="button"> Star Trek: The Original Series </button>
			</Link>

			<Link className="link" to={'/rooms/TNG'}>
				<button className="button"> Star Trek: The Next Generation </button>
			</Link>

			<Link className="link" to={'/rooms/DS9'}>
				<button className="button"> Star Trek: Deep Space Nine </button>
			</Link>

			<Link className="link" to={'/rooms/VOY'}>
				<button className="button"> Star Trek: Voyager </button>
			</Link>

			<Link className="link" to={'/rooms/ENT'}>
				<button className="button"> Star Trek: Enterprise </button>
			</Link>

			<Link className="link" to={'/rooms/H4'}>
				<button className="button"> Holodeck Four </button>
			</Link>

		</div>
	);
}

export default Rooms;