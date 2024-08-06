import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'

import bookRoute from '../routes/book.route.js';
import userRoute from '../routes/user.route.js';

const app = express()
 app.use(cors());
 app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4002

//mongodb connection

const M_URI=process.env.MONGODB_URI;

try{
  mongoose.connect(M_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  }
);
console.log("mongodb connected")

}
catch(error){
  console.log(error); 

}

//defining routes

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})