const http = require("http")
const express = require("express");
const app = express();
const socketIo = require("socket.io");
const fs = require("fs");

const server = http.Server(app).listen(9999,()=>console.log('server has been started'));
const io = socketIo(server);

const rooms = [];
const games = [];
const users = [];

app.get('/',(req,res)=>{
    res.send(JSON.stringify('hello'))
})

io.on('connection',(socket)=>{
    console.log("User conected ",socket.id);
})