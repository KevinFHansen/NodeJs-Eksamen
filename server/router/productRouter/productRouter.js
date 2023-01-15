import { Router } from "express";
import db from "../../database/connection.js"
import {ObjectId} from "mongodb";
const router = Router()

router.get("/api/products", async (req, res) => {
    try {
        const products = await db.products.find().toArray();
        res.send(products);
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error retrieving products data" });
    }
})

router.post("/api/products", async (req, res) => {
    try {
        const product = req.body;
        console.log(product)
        await db.products.insertOne(product);
        res.send({message: "New product added to database"});
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: "Error adding the product" });
    }
});

router.put("/api/products/:id", async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        const product = req.body;
        await db.products.updateOne({ _id: id }, { $set: product });
        res.send({ message: "Product updated" });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error updating product" });
    }
});

router.delete("/api/products/:id", async (req, res) => {
    try {
        const id = new ObjectId(req.params.id);
        await db.products.deleteOne({ _id: id });
        res.send({ message: "Product deleted" });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error deleting product" });
    }
});

export default router