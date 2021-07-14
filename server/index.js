// Jacob Schneck
// Server Thing for Star Trek Chat rooms

//--------------------- SERVER SETUP -------------------
const express = require('express');
const app = express();

const socketio = require('socket.io');
const http = require('http');

const cors = require('cors');
app.use(cors());

const corsOption = {
	cors: true,
	origin: ["localhost:3000"],
}

const server = http.createServer(app);
// const io = socketio(server)
const io = socketio(server, corsOption);

const PORT = process.env.PORT || 5000;

//---------------------  SHOW SERVER RUNNING -----------

// Check to see if server is up on Localhost:PORT
const router = express.Router();
router.get('/', (req, res) => {
	res.send('Server is up');
});
app.use(router);

//--------------------- USER UTILS -------------------- 

let users = [];
const addUser = ( {name, room, id } ) => {
	users.push({name, room, id});
}

const removeUser = (id) => {
	users = users.filter( user => user.id !== id);
	const index = users.findIndex( user => user === id);
	if ( index !== -1 ) {
		return users.splice(index, 1);
	}
}

//---------------------  SOCKETS -----------------------
io.on('connection', (socket) => {
	console.log("New user connected")
	

	socket.on('join', ({ name, room }, callback) => {
		console.log(`${name} joined ${room}`);
		addUser({ name, room, id: socket.id });
		console.log(users);
	});


	socket.on('leave', ({ name, room }) => {
		console.log(`${name} left ${room}\n`);
		console.log(users.length);
		removeUser(socket.id);
		console.log(users.length);
	});
});

server.listen(PORT, () => {
	console.log(`Listening on Port: ${PORT}`);
});