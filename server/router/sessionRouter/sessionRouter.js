import { Router } from "express";
const router = Router();

router.get("/api/session", (req, res) => {
    try {
        if(req.session.userLoggedIn){
            res.send({data: req.session});
        } else {
            res.status(401).send({message: "Not logged in"})
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Error retrieving session data" });
    }
})

router.get("/api/sessiondestroy", (req, res) => {
    req.session.destroy()
    //res.redirect("/api/session")
})

export default router