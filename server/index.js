const http = require("http")
const express = require("express");
const app = express();
const socketIo = require("socket.io");
const fs = require("fs");
const cors=require("cors");
const server = http.Server(app).listen(9999,()=>console.log('server has been started'));
const io = socketIo(server);
const uuidv4 = require('uuid').v4;

const rooms = [];
const games = [];
const users = [{
    'name':"Dima",
    "email":"dima.pavlov0311@gmail.com",
    "password":"goldvju81",
    "id":"1"
},{
    'name':"Oleg",
    "email":"123@gmail.com",
    "password":"123456",
    "id":"2"
},
{
    'name':"TestUser",
    "email":"1234@gmail.com",
    "password":"1234",
    "id":"3"
}];

const corsOptions ={
   origin:'*', 
   credentials:true,       
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(JSON.stringify('hello'))
})
app.post('/user',(req,res)=>{
    const {email,password} = req.body.data;
    const user = users.find((user)=>user.email === email);
    if(user && user.password === password) {
        return res.send({user});
    }else{
        res.status(400)
        return res.send({
            error:'User not valid email or password'
        })
    }
})
app.get("/rooms",(req,res)=>{
    res.send({rooms})
})
io.on('connection',(socket)=>{
    console.log('user connected',socket.id)
    socket.on("create-new-room",(data)=>{
        const {user,roomName} = JSON.parse(data);
        const newRoom = {
            id:uuidv4(),
            title: roomName,
            status: 'Waiting',
            users: [{...user,role:0}],
            game: []
        };
        rooms.push(newRoom);
        io.emit("add-new-room",JSON.stringify({newRoom}))
    })
})