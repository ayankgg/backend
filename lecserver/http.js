const http=require("http");
let server=http.createServer((request,Response)=>{
    console.log(request);
    Response.end("server started sucessgully");

});
server.listen(8008,'localhost',(err)=>{
    if(err){
        console.log(err);
    }
    console.log(" server is running on http://localhost:8008");
})
// header, url, status code
