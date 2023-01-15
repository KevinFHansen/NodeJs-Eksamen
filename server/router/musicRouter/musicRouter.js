import { Router } from "express";
import db from "../../database/connection.js"
import {ObjectId} from "mongodb";
const router = Router();

router.get("/api/music/album/:title", async (req, res) =>{
    try {
        const albumTitelToFind = req.params.title
        const albumData = await db.music.find({albumTitle: albumTitelToFind}).toArray();
        res.send({albumData})
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error retrieving album data" });
    }
})

router.post("/api/music", async (req, res) => {
    try {
        const song = req.body;
        let date = new Date();
        song.timeStampCreated = date.toLocaleString("en-GB");
        await db.music.insertOne(song);
        res.send({ message: "song added"});
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error adding album" });
    }
})

router.put("/api/music/album/:title", async (req, res) => {
    try {
        const albumTitle = req.params.title;
        const artist = req.body.artist;
        await db.music.updateOne({ albumTitle: albumTitle }, { $set: { artist: artist } });
        res.send({ message: "Album updated" });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error updating album" });
    }
})


router.delete("/api/music/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        let o_id = new ObjectId(id)
        await db.music.deleteOne({ _id: o_id });
        res.send({ message: "Song deleted" });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error deleting song" });
    }
});











// router.get("/api/music/album/:title", async (req, res) =>{
//     const albumTitelToFind = req.params.title
//     const albumData = await db.music.find({albumTitle: albumTitelToFind}).toArray();
//     res.send({albumData})
// })


export default router