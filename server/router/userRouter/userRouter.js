import {Router} from "express"
import db from "../../database/connection.js";
import {ObjectId} from "mongodb";

const router = Router()

router.get("/api/users", async (req, res) => {

    try {
        const users = await db.users.find().toArray()
        let usersArray = []

        users.forEach((user) => {
            usersArray.push({_id: user._id, userName: user.userName, user: user.user})
        })

        res.status(200).send({data: usersArray})

    } catch (error) {
        res.status(404).send({data: `${error}`})
    }
})

router.patch("/api/users/:id", async (req, res) =>{
    
    const id = new ObjectId(req.params.id)
    const updatedUser = req.body
    try{
        await db.users.updateOne({_id: id}, {$set: updatedUser})
        res.send({message: "Succes"})
    }catch(error){
        res.status(500).send({message: "Error"})
    }
})

router.delete("/api/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        let o_id = new ObjectId(id)
        await db.users.deleteOne({ _id: o_id });
        res.send({ message: "User deleted" });
    } catch (error) {
        res.status(500).send({ error: "Error deleting user" });
    }
});


export default router