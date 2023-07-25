import  express from "express";
import Connection from "./database/db.js";
import cors from 'cors'
import route from "./routes/route.js";
import bodyParser from "body-parser";
import dotenv from "dotenv"
const app = express();
dotenv.config();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', route)

Connection();

const port = process.env.Port

app.listen(port,function(){
    console.log("server live")
})