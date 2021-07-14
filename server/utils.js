const USERS = [];

const addUser = ({ id, name, room }) => {
	const user = {
		id: id,
		name: name,
		room: room,
	}

	USERS.push(user);
	return { user };
}

const removeUser = (id) => {
	const index = USERS.findIndex( (user) => user.id === id);
	if (index !== -1) {
				return USERS.splice(index, 1)[0];
	}

	// alternative
	// users.filter( (user) => user.id !== id);

}

// const removeUser = (id) => {
// 	USERS.filter( user => user.id !== id)
// }

module.exports = { USERS, addUser, removeUser };