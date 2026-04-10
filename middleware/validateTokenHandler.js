const asynchHndler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const validateToken = asynchHndler(async(req,res,next)=>{
    let token;
    let authHeader =req.headers.Authorization || req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer")) {
        res.status(401);
        throw new Error("No token provided");
    }
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if (err){
                res.status(401);
                throw new Error("Unauthorized"); 
            }
            console.log("decoded", decoded);
            req.user = decoded.user;
            next();
        });
    }
});

module.exports = validateToken;