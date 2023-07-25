import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config();

const Mongo_Url = process.env.mongoUrl;
 const Connection = ()=>{
    mongoose.connect(Mongo_Url).then(function(){
        console.log("connected db")
    }).catch(function(){
        console.log("Connectin error")
    })
}

export default Connection; 