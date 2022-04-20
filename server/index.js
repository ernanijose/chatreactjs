const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`Usuario ${socket.id} conectado`);

    //aqui pega os usuarios que estão se juntando a sala
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });

    //aqui é onde escuta quem entrou na sala para mostrar no reactjs
    socket.on("send_message", (data) => {
        //console.log(data);
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log(`Usuário ${socket.id} se desconectou!`);
    });
});


const PORT = 3001;
server.listen(PORT, () =>{
    console.log(`Servidor rodando na ${PORT}`);
});