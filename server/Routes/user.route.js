import { Router } from "express";
import { loginApi, registerApi } from "../controllers/user.controller.js";

const user = Router();

user.post('/register',registerApi)
user.post('/login',loginApi)

export const userRoute = user;
