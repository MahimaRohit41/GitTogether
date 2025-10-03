const express = require("express");

const app = express();
const { adminAuth, userAuth } = require('./middlewares/Auth');

app.get('/admin/getAllData', adminAuth, (req,res) => {
    // Store in DB
    res.send("Get all data")
});

app.get('/user', userAuth, (req,res) => {
    // Store in DB
    res.send("Get all user data")
});

app.listen(7777, () => {
    console.log("Server is running")
});