import express from "express";
const app = express();
import dotenv from "dotenv/config"
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge: 1000 * 60 * 60  
    }
}));


import http from "http";
import { Server } from "socket.io";
const server = http.createServer(app);
const io = new Server(server);

import helmet from "helmet";
app.use(helmet())

import cors from "cors";
app.use(cors({ credentials: true, origin: true}));

import forumRouter from "./router/forumRouter/forumRouter.js"
app.use(forumRouter)

import productRouter from "./router/productRouter/productRouter.js"
app.use(productRouter)

import musicRouter from "./router/musicRouter/musicRouter.js"
app.use(musicRouter)

import ticketRouter from "./router/ticketRouter/ticketRouter.js"
app.use(ticketRouter)

import sessionRouter from "./router/sessionRouter/sessionRouter.js";
app.use(sessionRouter)

import authRouter from "./router/authRouter/authRouter.js";
app.use(authRouter)

import userRouter from "./router/userRouter/userRouter.js"
app.use(userRouter)


let increment = 0;
io.on('connection', (socket, req) => {

    console.log('A user connected');
    increment++
    // emit an event to the client
    socket.emit('user-connected', { message: `Connected:${increment}`});

    socket.on("disconnect", ()=>{
        increment--
    })
});

const PORT = 8080 || process.env.PORT;
server.listen(PORT, () => { 
    console.log("Server is running on port", PORT);
});