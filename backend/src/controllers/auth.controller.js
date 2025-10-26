const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


async function registerController(req,res){
    const {fullName:{firstName, lastName}, email, userName, password } = req.body;
    const isUserAlreadyExists = await userModel.findOne({
        email
    })
    if(isUserAlreadyExists){
        res.status(400).json({
            message:"user already exists, please use another email "
        })
    }
    const hashPassword = await bcrypt.hash(password,10)

    const user = await userModel.create({
            fullName:{firstName, lastName}, 
            email, 
            userName,
            password : hashPassword
        })

    const token = jwt.sign({id:user._id}, process.env.JWT_SECRET);
    res.cookie('token',token)

    res.status(201).json({
        message: "user registered successfully",
        user:{
            email:user.email,
            id: user._id,
            userName: user.userName,
            fullName: user.fullName
        }
    })
}

async function loginController(req,res){
    const {email,password} = req.body;
    const user = await userModel.findOne({
        email
    })
    if(!user){
         return res.status(401).json({
             message:"invalid email or password"
         })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
     if(!isPasswordValid){
         return res.status(401).json({
             message:"invalid email or password"
         })
    }
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.cookie('token',token)
    res.status(201).json({
        message:"user logged in successfully",
        user:{
            email:user.email,
            id: user._id,
            userName: user.userName,
            fullName: user.fullName
        }
    })
} 
const logoutController = async(req,res)=>{
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        return res.status(200).json({
            message : "user logged out successfully"
        })
    } catch (error) {
        return res.status(400).json({
            message: `Error logging out user: ${error.message}`
        });
    }
}



module.exports = {
    registerController, loginController, logoutController
}