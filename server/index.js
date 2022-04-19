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
        console.log(`O usuário ${socket.id} se juntou a sala ${data}`);
    });

    socket.on("disconnect", () => {
        console.log(`Usuário ${socket.id} se desconectou!`);
    });
});


const PORT = 3001;
server.listen(PORT, () =>{
    console.log(`Servidor rodando na ${PORT}`);
});