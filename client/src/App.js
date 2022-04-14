import './App.css';
import io from "socket.io-client";
import { useState } from 'react';

const socket = io.connect("http://localhost:3001");

function App() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    
  };

  return (
    <div className="App">
      <h3>Entrou no Chat</h3>
      <input type="text" value="Ernani..." />
      <input type="text" value="ID da Sala..." />
      <button>Entrar na Sala</button>
    </div>
  );
}

export default App;
