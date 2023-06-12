const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');


dotenv.config({path: './config.env'})
require('./db/conn');

app.use(express.json())
// const User = require('./model/userSchema')

app.use(require('./router/auth'));

const PORT = process.env.PORT;


// Middleware

const middleware=(req,res,next)=>{
    console.log('My middleware');
    next();
};


app.get('/',(req, res)=>{
    res.send('hello sent from my server')
});

app.get('/about',middleware,(req, res)=>{
    res.send('hello about from my server')
});

app.get('/contact',(req, res)=>{
    res.send('hello contact from my server')
});

app.get('/login',(req, res)=>{
    res.send('hello login from my server')
});

app.get('/signup',(req, res)=>{
    res.send('hello signup from my server')
});


app.listen(PORT,()=>{
    console.log('server is running on port 3000')
});