const http = require("http");
const url = require("url");
const fs = require("fs");

let server  = http.createServer((req,res)=>{
    const da=new Date;
    fs.appendFile("serverlog.txt",`${da},${req.url} new request rewined`,(err)=>{
        if(err){
            console.log(err);
        }
    });
    console.log("Server started at http://localhost:8009");
    console.log(req.url);
    res.write("<h1>Welcome</h1>");
    res.end();
})

server.listen(8009,"Localhost",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server started at http://localhost:8009");

})

let myUrl = "http://localhost:8009";
let parsed = url.parse(myUrl,true);
console.log(parsed);