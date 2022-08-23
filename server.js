const express = require('express');
const cors = require('cors')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors:'*',
    method:'*'
});


app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

server.listen(8080, () => {
  console.log('listening on *: 8080');
});