import express from "express";
const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json())

import cors from "cors";
app.use(cors({ credentials: true, origin: true }));

import forumRouter from "./router/forumRouter/forumRouter.js"
app.use(forumRouter)

import productRouter from "./router/productRouter/productRouter.js"
app.use(productRouter)

import musicRouter from "./router/musicRouter/musicRouter.js"
app.use(musicRouter)

import ticketRouter from "./router/ticketRouter/ticketRouter.js"
app.use(ticketRouter)


app.get("/", (req,res) => {
    res.send("jj");
});

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => { 
    console.log("Server is running on port", PORT);
});