const http = require("http");
const url = require("url");
const fs = require("fs");

let server  = http.createServer((req,res)=>{
    res.end("Server Created Sucessfully");
})

server.listen(8009,"Localhost",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server started at http://localhost:8008");

})

let myUrl = "http://localhost:8009";
let parsed = url.parse(myUrl,true);
console.log(parsed);