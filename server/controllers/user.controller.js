import { userModel } from "../Models/user.model.js";
import bcrypt from 'bcryptjs';

//register

export const registerApi =  async (req,res) => {
    const {email,password,name,inviteAdmin} = req.body;

    try {
        const isUser = await userModel.findOne({email});

        if(isUser){
            return res.status(400).json({success:false,message:"user is alrady exist"});
        };

        const hashed = await bcrypt.hash(password,10);

        let roling = "user";

        if(inviteAdmin && inviteAdmin === process.env.inviteAdmin){
            roling = "admin"
        };

        const newUser = new userModel({
            name,
            password:hashed,
            email,
            role:roling
        });

        await newUser.save();

        return res.status(201).json({success:true,message:"Regiser succeefully"});

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"server error"})
    }
};



//login

export const loginApi =  async (req,res) => {
    const {email,password} = req.body;

    try {
        const isUser = await userModel.findOne({email});

        if(!isUser){
            return res.status(400).json({success:false,message:"incorrect email or password"});
        };

        const isCompare = await bcrypt.compare(password,isUser.password);


        if(!isCompare){
            return res.status(400).json({success:false,message:"incorrect email or password"});
        };

        const token = jwt.sign({id:isUser._id} , process.env.JWT_SECRET ,{expiresIn:"7d"});

        return res.cookie(token,{httpOnly:true}).status(201).json({success:true,message:"Regiser succeefully"});

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message:"server error"})
    }
};