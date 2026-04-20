const http=require("http");
const fs=require("fs");
const url=require("url");

let server=http.createServer((request,res)=>{
    switch(request.url){
        case '/': fs.readFile('./component/h.html',(err,page)=>{
            if(err){
                res.end();
            }else{
                res.write(page);
            }
            res.end();
        })
        break;
         case '/about': fs.readFile('./component/a.html',(err,page)=>{
            if(err){
                res.end();
            }else{
                res.write(page);
            }
            res.end();
        })
        break;
    }
    // console.log(request);
    // Response.write("server started sucessgully");
    // Response.end();
});
server.listen(8006,'localhost',(err)=>{
    if(err){
        console.log(err);
    }
    console.log(" server is running on http://localhost:8006");
})