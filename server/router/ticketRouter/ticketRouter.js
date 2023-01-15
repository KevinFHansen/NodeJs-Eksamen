import { Router } from "express";
import db from "../../database/connection.js"
import {ObjectId} from "mongodb";

const router = Router()

router.get("/api/tickets", async (req, res) => {
    try {
        const tickets = await db.tickets.find().toArray();
        res.send(tickets);
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error retrieving tickets data" });
    }
});


router.post("/api/tickets", async (req, res) => {
    try {
        const ticket = req.body;
        console.log(req)
        let date = new Date();
        ticket.timeStampCreated = date.toLocaleString("en-GB");
        await db.tickets.insertOne(ticket);
        res.send({ message: "Ticket added" });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error adding ticket" });
    }
});

// router.put("/api/tickets/:id", async (req, res) => {
//     try {
//         const id = req.params.id;
//         const ticket = req.body;
//         await db.tickets.updateOne({ _id: id }, { $set: ticket });
//         res.send({ message: "Ticket updated" });
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({ error: "Error updating ticket" });
//     }
// });

router.delete("/api/tickets/:id", async (req, res) => {
    try {
        const id = req.params.id;
        let o_id = new ObjectId(id)
        await db.tickets.deleteOne({ _id: o_id });
        res.send({ message: "Ticket deleted" });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error deleting ticket" });
    }
});

export default router