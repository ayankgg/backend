const express = require('express');
const app = express();
const users = require('./sample_400_entries.json');

app.get('/',(req,res)=>{
    res.send("welcome");

})
app.get('/api/users',(req,res)=>{
    return res.json(users);

})
app.get('/api/users/:id',(req,res)=>{
const id = Number (req.params.id);

    const user = users.find((u)=>{
        return(u.id===id);
    })
    return res.json(user);
})

app.post('/api/users/post',(req,res)=>{
    const data =req.body;
    console.log(data);
    res.end();
    return res.json({"message":"sucess"});
})

app.listen(3000);

// cap theorem?