import express from 'express';
import dotenv from 'dotenv';
import { appConfig } from './configs/appConfig.js';
import { connDb } from './configs/conn.js';
import { userRoute } from './Routes/user.route.js';
const app = express();

dotenv.config();



appConfig(app)

const port = process.env.PORT;

app.use('/api/user',userRoute);

connDb();


app.listen(port,()=>console.log("Server is running on http:localhost:"+port ))