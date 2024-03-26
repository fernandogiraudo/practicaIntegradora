import jwt from 'jsonwebtoken';
import config from "../config/config.js";

export const register = (req,res)=>{
    res.send({status:"success",message:"User registered",payload:req.user._id});
}

export const failedRegister = (req,res)=>{
    res.send("failed Register");
}

export const login = (req,res)=>{
    //serializedUser podrá convertirse en un DTO más adelante.
    const serializedUser = {
        id : req.user._id,
        name : `${req.user.first_name} ${req.user.last_name}`,
        role: req.user.role,
        email: req.user.email
    }
    const token = jwt.sign(serializedUser, config.jwt.SECRET,{expiresIn:"1h"})
    res.cookie(config.jwt.COOKIE, token,{maxAge:3600000}).send({status:"success",payload:serializedUser});
}

export const failedLogin = (req,res)=>{
    console.log(req.message);
    res.send("failed Login");
}

export const getCurrentUser = (req, res) => {
    res.send(req.user);
}