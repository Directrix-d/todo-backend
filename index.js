import  express from "express";
import Connection from "./database/db.js";
import cors from 'cors'
import route from "./routes/route.js";
import bodyParser from "body-parser";
const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', route)

Connection();

app.listen("3300",function(){
    console.log("server live")
})