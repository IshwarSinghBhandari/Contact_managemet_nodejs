const asyncHandler = require('express-async-handler')
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @desc Register a user
// @route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req,res)=>{
    const {username,email,password} =req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("Please fill in all the fields");
    }
     const userAvailable = await User.findOne({email});
     if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
     }
     //Hash password
     const hashedPassword = await bcrypt.hash(password, 10);
     console.log("Hashed password:", hashedPassword);
     const user = await User.create({
        username,
        email,
        password: hashedPassword
     });
    res.json(user);
});

// @desc Login a user
// @route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error("Please fill in all the fields");
    }
    const user = await User.findOne({email});
    //compare password
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken =jwt.sign({
          user:{
            username: user.username,
            email: user.email,
            id: user.id
          }  
        }, process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "45m"}
        );
        res.status(200).json({accessToken})
    }
    else{
        res.status(401);
        throw new Error("Invalid email or password");
    }
    res.json({message:"Login Route"});
});

// @desc Get current user
// @route GET /api/users/current
//@access private
const getCurrentUser = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.user.id).select("-password");
    res.json({message:"Current User ", user});
});

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser
}