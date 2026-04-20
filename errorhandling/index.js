const express=require('express');
const app = express();
const errorHandler=require('./error');

app.get('/',(req,res)=>{
    res.send("home page");
});
app.use((req,res,next)=>{
    const error =new Error("page not  found");
    error.statusCode=404;
    error.status='fail';
    next(error);
})
app.use(errorHandler);
app.listen(2000);