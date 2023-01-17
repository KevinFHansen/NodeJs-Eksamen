import { Router } from "express";
const router = Router();

router.get("/api/session", (req, res) => {
    try {
        if(req.session.isUserLoggedIn){
            res.send({data: req.session});
        } else {
            
            res.send({message: "Not logged in"})
        }
    } catch (error) {
        res.status(500).send({ error: "Error retrieving session data" });
    }
})

router.get("/api/logout", (req, res) => {
    req.session.destroy()
})

export default router