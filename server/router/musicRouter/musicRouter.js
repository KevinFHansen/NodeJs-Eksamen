import { Router } from "express";
import db from "../../database/connection.js"
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
export default router