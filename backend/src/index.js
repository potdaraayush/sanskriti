//require('dotenv').config({path: './env'}) //no problem as such, it just ruins
//the consistency of the code. but it is solved by using another approach
import dotenv from 'dotenv';
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()