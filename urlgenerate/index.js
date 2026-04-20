const express=require("express");
const router=require("./routes/urlroutes")
const {connection}=require("./config/db");
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

connection('mongodb://127.0.0.1:27017/shorturl').then(()=>{
    console.log("db connect")
}).catch((err)=>{
    console.log(err);
})

app.use('/', router);

app.listen(3001);
