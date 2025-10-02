const express = require("express");

const app = express();

app.use('/test', (req,res) => {
    res.send("Hello from test");
});

app.use('/profile', (req,res) => {
    res.send("Hello from profile");
});

app.listen(7777, () => {
    console.log("Server is running")
});