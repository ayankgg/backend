// const express=require('express');
// const app=express();
// const port=3000;
// const path=require('path');
// const path2=path.join(__dirname,'components');
// app.use(express.static(path2));
// // app.use(express.static(path.join(__filename,'about.html')));
// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'components/about.html'));
// })
// app.listen(3000, () => {
// console.log('http://localhost:3000');
// });
const {
  addTodo,
  listTodos,
  markDone,
  deleteTodo
} =require("./todo");

addTodo("Learn Node.js fs");
addTodo("Build mini backend");
listTodos();

// Copy an ID from todos.json
markDone(1737263812);


deleteTodo(1737263812);


