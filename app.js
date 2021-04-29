const express = require("express");
const app = express();

const server = require("http").createServer(app); //created server that takes app server

const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("A socket connected", socket.id);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/colors.html");
})


const PORT = process.env.PORT || 8080;
server.listen(PORT, e => e ? console.log(e) : 'server is running on: ',PORT);

    