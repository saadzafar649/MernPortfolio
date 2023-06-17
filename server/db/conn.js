const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './.env'})
const DB = process.env.DATABASE;


mongoose.connect(DB).then(()=>{
    console.log('connection successfull');
}).catch((error)=>{console.log(error)})