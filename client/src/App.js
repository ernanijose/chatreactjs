import './App.css';
import { useState } from 'react';
import io from "socket.io-client";


const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  //aqui envia via socket os usuarios que estão se juntando a sala
  const joinRoom = () => {
    if(username !== '' && room !== '')
    {
      socket.emit("join_room", room);      
    }
    
  };

  return (
    <div className="App">
      <h3>Entrou no Chat</h3>
      <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
      <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
      <button onClick={joinRoom}>Join A Room</button>
    </div>
  );
}

export default App;
