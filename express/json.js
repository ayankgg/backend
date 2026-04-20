const express = require('express');
const app = express();

app.get('/data', (req, res) => {
    const user = {
        name: "Mayank",
        age: 20,
        course: "BTech CSE"
    };

    res.json(user);   // JSON response bhejta hai
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
console.log('http://localhost:3000/data');
