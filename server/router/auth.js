const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema')
router.get('/',(req, res)=>{
    res.send('hello sent from my server router')
});

// router.post('/register', (req,res)=>{
//     const { name, email, phone, work, password, cpassword} = req.body
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error: "Please filled the field properly"})
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email already registered"})
//         }
//         const user = new User(req.body)
//         user.save().then(()=>{
//             res.status(201).json({message: "User registered successfully"})
//         }).catch((err)=>res.status(500).json({error:"Failed to register"}))
//     }).catch(err=>console.log(err));
// });

router.post('/register',async (req,res)=>{
    console.log(req.body)
    const { name, email, phone, work, password, cpassword} = req.body
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "Please fill the field properly"})
    }

    try{
        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({error:"Email already registered"})
        }
        else if(password != cpassword){
            return res.status(422).json({error:"Password is not same as confirm password"})
        }
        
        const user = new User(req.body);
        const userRegister = await user.save();
        
        if(userRegister){
            res.status(201).json({message: "User registered successfully"});
        }else{
            res.status(500).json({error:"Failed to register"});
        }
    }
    catch(err){
        console.log(err)
    }
});


router.post('/signin',async (req,res)=>{
    try{
        const { email, password} = req.body;
        if(!email ||!password ){
            return res.status(400).json({error: "Please fill the field properly"});
        }
        
        const userExist = await User.findOne({email:email});
        
        if(!userExist){
            return res.status(422).json({error:"Invalid Credentials"})
        }
        
        const isMatch = await bcrypt.compare(password,userExist.password);
        
        if(!isMatch){
            return res.status(422).json({error:"Invalid Credentials"})
        }
        

        const token = await userExist.generateAuthToken();
        res.cookie("jwttoken",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly: true
        })
        return res.status(200).json({token:token});
    }
    catch(err){
        return res.status(404).json({error:err});
    }
});
module.exports = router;