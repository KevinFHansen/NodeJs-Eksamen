import {Router} from "express"
import bcrypt from "bcrypt"
import db from "../../database/connection.js"

const router = Router()


router.post("/api/signup", async (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = await bcrypt.hash(req.body.password, 10);

    try {
        const existingEmail = await db.users.find({ email: email }).toArray();
        const existingUsername = await db.users.find({ userName: userName }).toArray();
        if (existingEmail.length === 0 && existingUsername.length === 0) {
            const newUser = {
                userName: userName,
                email: email,
                password: password,
                user: "user"
            };
            await db.users.insertOne(newUser);
            res.status(201).send({ message: "User created successfully" , userName: userName});
        } else if (existingEmail.length !== 0) {
            res.status(400).send({ message: "A user with that email already exists" });
        } else if (existingUsername.length !== 0) {
            res.status(400).send({ message: "A user with that username already exists" });
        }
    } catch (error) {
        res.status(500).send({ error: "Error creating new user" });
    }
});

router.post("/api/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const user = await db.users.find({email: email}).toArray();

        if(user.length !== 0){
            const checkedPassword = await bcrypt.compare(password, user[0].password)
            if(checkedPassword === true){
                const userName = user[0].userName
                const email = user[0].email
                const role = user[0].user
                req.session.userName = userName;
                req.session.email = email;
                req.session.role = role;
                req.session.isUserLoggedIn = true;
                res.send({data: req.session})
            }
            else{
                res.status(500).send({message: "Something went wrong"})
            }
        } else {
            res.status(500).send({message: "Password or email incorrect"})
        }
    } catch (error) {
        res.status(500).send({ error: "Something went wrong" });
    }
})

export default router