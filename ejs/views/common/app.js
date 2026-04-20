const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/ayank')
.then(()=>{
    console.log('db connect');
})
.catch((err)=>{
    console.log('err');
})

const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

const User =mongoose.model('users',newSchema);


app.use(express.urlencoded({extended:true}));
app.post('/users', async(req, res) => {
    const user=await User.find();
    res.json(user);
})
app.get('/users', async(req, res) => {
    const data=req.body;
    const user=await User.create(req.body);
    res.json(user);
})

app.listen(3000);
