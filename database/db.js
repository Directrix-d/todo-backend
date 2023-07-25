import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config();

const Username = process.env.Db_UserName;
const Pass = process.env.Db_Pass;
 const Connection = ()=>{
    mongoose.connect(`mongodb+srv://${Username}:${Pass}@cluster0.oa7zlra.mongodb.net/?retryWrites=true&w=majority`).then(function(){
        console.log("connected db")
    }).catch(function(){
        console.log("Connectin error")
    })
}

export default Connection; 