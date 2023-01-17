import { Router } from "express";
import db from "../../database/connection.js"
import {ObjectId} from "mongodb";
const router = Router()

router.get("/api/forum", async (req, res) => {
    try {
        const forumData = await db.forum.find().toArray();
        res.send(forumData)
    } catch (error) {
        res.status(500).send({ error: "Error retrieving forum data" });
    }
})

router.get("/api/forum/:title", async (req, res) => {
    try {
        const forum = req.params.title;
        const forumData = await db.comments.find({forum: forum}).toArray();
        res.send({forumData})
    } catch (error) {
        res.status(500).send({ error: "Error retrieving forum data" });
    }
})

router.post("/api/forum", async (req, res) => {
    try {
        const forum = req.body
        let date = new Date();
        forum.timeStampCreated = date.toLocaleString("en-GB");
        await db.forum.insertOne(forum);
        res.status(200).send({ message: "New forum created" });
    } catch (error) {
        res.status(500).send({ error: "Error retrieving forum data" });
    }
})

router.post("/api/forum/topics", async (req, res) => {
    try {
        const topic = req.body;
        let date = new Date();
        topic.timeStampCreated = date.toLocaleString("en-GB");
        await db.comments.insertOne(topic);
        res.send({ message: "Topic created"});
    } catch (error) {
        res.status(500).send({ error: "Error adding comment to forum" });
    }
})

router.patch("/api/topics/:id", async (req, res) =>{
    const id = new ObjectId(req.params.id)
    const updatedTopic = req.body
    try{
        await db.comments.updateOne({_id: id}, {$push: { posts: { $each: updatedTopic.posts } } })
        res.send({message: "Succes"})
    }catch(error){
        res.status(500).send({message: "Error"})
    }
})



router.delete("/api/forum/topics/:id", async (req, res) => {
    try {
        const id = req.params.id;
        let o_id = new ObjectId(id)
        await db.comments.deleteOne({ _id: o_id });
        res.send({ message: "Topic deleted" });
    } catch (error) {
        res.status(500).send({ error: "Error deleting topic" });
    }
})

router.delete("/api/forum/:id", async (req, res) => {
    try {
        const id = req.params.id;
        let o_id = new ObjectId(id)
        await db.forum.deleteOne({ _id: o_id });
        res.send({ message: "Forum deleted" });
    } catch (error) {
        res.status(500).send({ error: "Error deleting forum" });
    }
})

export default router