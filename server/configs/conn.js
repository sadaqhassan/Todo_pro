import mongoose from "mongoose";

export const connDb = async () => {
    const uri = process.env.MONGO_DB;
    await  mongoose.connect(uri).then(()=>console.log("server is connected to the database"));
};

