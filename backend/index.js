let express = require("express");
let bodyParser = require("body-parser");
let mongoose =require("mongoose");
let cors =require("cors");
const dotenv =require("dotenv");

dotenv.config();
let port =process.env.port;
let dbcon = process.env.cloud_mongodb_con;

let app = new express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

mongoose.connect(dbcon,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

 
var con =mongoose.connection;
if(!con) console.log("veritabanına bağlanılamadı")
else
{
    console.log("mongodb başarılı ile bağlandı.")
}

app.get("/",(req,res)=>{
    res.send("Hello Worldl")
})

app.listen(port,()=>{
    console.log("nodejs server çalışıyor")
})