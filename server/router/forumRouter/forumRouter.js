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

router.post("/api/forum", async (req, res) => {
    try {
        const forum = req.body
        let date = new Date();
        forum.timeStampCreated = date.toLocaleString("en-GB");
        await db.forum.insertOne(forum);
        res.send({ message: "New forum created" });
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

router.post("/api/forum/topics", async (req, res) => {
    try {
        const topic = req.body;
        console.log(topic)
        let date = new Date();
        topic.timeStampCreated = date.toLocaleString("en-GB");
        await db.comments.insertOne(topic);
        res.send({ message: "Topic created"});
    } catch (error) {
        res.status(500).send({ error: "Error adding comment to forum" });
    }
})

router.put("/api/forum/:title", async (req, res) => {
    try {
        const forum = req.params.title;
        const comment = req.body.comment;
        await db.comments.updateOne({ forum: forum }, { $set: { comment: comment } });
        res.send({ message: "Comment updated in forum" });
    } catch (error) {
        res.status(500).send({ error: "Error updating comment in forum" });
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
        await db.comments.deleteOne({ _id: o_id });
        res.send({ message: "Forum deleted" });
    } catch (error) {
        res.status(500).send({ error: "Error deleting forum" });
    }
})

export default router