import cookieParser from "cookie-parser";
import express from 'express'
import cors from 'cors'; 


export const appConfig = async (app) => {
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({
        origin:"http://localhost:5173",
        Credential:true
    }));
}