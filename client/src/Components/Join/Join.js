import React, {useState} from 'react';
import {Link } from 'react-router-dom';

import './Join.css';

const Join = ({ userName, setUserName }) => {

	return (
		<div>
			<h2>
				Welcome! Please sign in. 
			</h2>
			<div>
				<input className="input-username" placeholder="select username" type="text" onChange={(event) => setUserName(event.target.value)} />
			</div>
			<Link to={'/rooms'}>
				<button className="button" type="submit">Sign In</button>
			</Link>
		</div>
	);
}

export default Join;