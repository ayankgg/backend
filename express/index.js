const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("heeloo");
})
app.get('/about',(req,res)=>{
    res.send("heeloo about page");
})
app.get('/contact',(req,res)=>{
    res.send("heeloo contact");
})
app.get('/home',(req,res)=>{
    res.send(`heeloo home page
        <a href='/about'> click</a>
        `);
})
app.get('/search',(req,res)=>{
    console.log(req.query.name);
    res.send("heeloo" + req.query);
})
app.use((req,res)=>{
    res.status(404).send("page not here");
})

app.listen(8002);
console.log('http://localhost:8002');

