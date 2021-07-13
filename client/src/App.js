import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Join from "./Components/Join/Join";
import Rooms from "./Components/Rooms/Rooms";
import ChatRoom from './Components/ChatRoom/ChatRoom';

import './App.css';

function App() {
	const [userName, setUserName] = useState('ShutUpWesley');
  return (
    <Router>
      <Route exact path="/">
        <Join userName={userName} setUserName={setUserName}/>
      </Route>
      <Route exact path="/rooms">
        <Rooms/>
      </Route>

      {/* CHAT ROOM ROUTES */}
      <Route exact path="/rooms/TOS">
        <ChatRoom userName={userName} roomName={"Star Trek: The Original Series"}/>
      </Route>

      <Route exact path="/rooms/TNG">
        <ChatRoom userName={userName} roomName={"Star Trek: The Next Generation"}/>
      </Route>
      
      <Route exact path="/rooms/DS9">
        <ChatRoom userName={userName} roomName={"Star Trek: Deep Space Nine"}/>
      </Route>

      <Route exact path="/rooms/VOY">
        <ChatRoom userName={userName} roomName={"Star Trek: Voyager"}/>
      </Route>

      <Route exact path="/rooms/ENT">
        <ChatRoom userName={userName} roomName={"Star Trek: Enterprise"}/>
      </Route>

      <Route exact path="/rooms/H4">
        <ChatRoom userName={userName} roomName={"Holodeck Four"}/>
      </Route>
    </Router> 
  );
}

export default App;
