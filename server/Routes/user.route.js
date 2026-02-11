import { Router } from "express";

const user = Router();

user.get('/test',(req,res)=>{
    res.send("api is working bro lets enjoy your project")
})

export const userRoute = user;
