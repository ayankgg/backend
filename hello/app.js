const express=require("express");
const session=require("express-session");
const fileStore = require("session-file-store");
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { maxaAge: 5 * 60 * 1000 }
}));
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.render("login");
});

app.post('/login',(req,res)=>{
    const {username}=req.body;
    res.redirect('home');
});
app.get('/home',(req,res)=>{
    res.render('home',{username:"req.session.user"});
});

app.get('/logout',(req,res)=>{
    req.session.destroy
    res.render("logout");
});

app.get('/profile',(req,res)=>{
    res.render("profile",{username:"req.session.user"});
});



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
