// Jacob Schneck
// Server Thing for Star Trek Chat rooms

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

// Check to see if server is up on Localhost:PORT
const router = express.Router();
router.get('/', (req, res) => {
	res.send('Server is up');
});
app.use(router);

io.on('connection', (socket) => {
	// console.log(`New connection: ${socket.id}`)
	console.log("hi");

	socket.on('join', ({ userName, roomName }, callback) => {
		console.log(`${userName} joined`);
	})

	socket.on('disconnet', () => {
		console.log("goodbye");
	})
});

server.listen(PORT, () => {
	console.log(`Listening on Port: ${PORT}`);
});