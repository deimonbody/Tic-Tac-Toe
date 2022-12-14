const http = require("http")
const express = require("express");
const app = express();
const socketIo = require("socket.io");
const fs = require("fs");
const cors=require("cors");
const server = http.Server(app).listen(9999,()=>console.log('server has been started'));
const io = socketIo(server);
const uuidv4 = require('uuid').v4;

let rooms = [];
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
    "password":"12345",
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
        socket.join(newRoom.id);
        io.emit("add-new-room",JSON.stringify({newRoom}))
        socket.emit("current-user-joined-to-room",JSON.stringify({room:newRoom}));
    });
    socket.on("join-to-room",(data)=>{
        const { roomId,user } = JSON.parse(data);
        socket.join(roomId);
        rooms = rooms.map((room)=>{
            if(room.id === roomId) {
                // 0 - нолик 1-хрестик ,якщо останній юзер,який в цій кімнаті - нолик - тоді новий буде хрестиком,й навпаки
                if(room.users.length){
                    const role = room.users[room.users.length-1].role === 0 ? 1 : 0; 
                    room.users.push({...user,role});
                }else{
                    room.users.push({...user,role:0});
                }
                if(room.users.length === 2){
                    room.status = 'InProcess';
                }
                io.in(roomId).emit("new-user-joined-to-room",JSON.stringify({room}))
            }
            return room;
        })
        io.emit("update-room-list",JSON.stringify({rooms}));
    });
    socket.on("leave-room",(data)=>{
        const { roomId,user } = JSON.parse(data);
        socket.leave(roomId);       
        rooms = rooms.map((room)=>{
                if(room.id === roomId){
                    const findUserIndex = room.users.findIndex((roomUser)=>roomUser.id === user.id);
                    room.users.splice(findUserIndex,1);
                    room.game = [];
                    if(!room.status === "GameEnd"){
                        room.status = "Waiting";
                    }
                    io.in(roomId).emit("user-leaved-the-room",JSON.stringify({room}));
                }
                return room
        })
        io.emit("update-room-list",JSON.stringify({rooms}));
    });
    socket.on("make-action",(data)=>{
        const {action,roomId} = JSON.parse(data);
        rooms = rooms.map((room)=>{
            if(room.id === roomId){
                room.game.push({action});
                io.in(roomId).emit("user-make-action",JSON.stringify({room}));
            }
            return room;
        })
        io.emit("update-room-list",JSON.stringify({rooms}));
    })
    socket.on("end-game",(data)=>{
        const {roomId} = JSON.parse(data);
        console.log(roomId);
        rooms = rooms.map((room)=>{
            if(room.id === roomId){
                room.isGameEnded = true;
                room.status = 'GameEnd'
            }
            io.in(roomId).emit("current-game-finished");
            return room;
        })
        io.emit("update-room-list",JSON.stringify({rooms}));
    })
})