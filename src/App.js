const express = require("express");
const connectDB = require('./config/Database');
const User = require('./models/user.js');
const app = express();


app.post('/signup', async (req, res) => {
    const user = new User({
        firstName: "Virat",
        lastName: "Kohli",
        emailId: "viratkohli@gmail.com",
        password: "Virat@123"
    });

    try{
        await user.save();
        res.send("User added successfully");
    }
    catch(err){
        res.status(400).send("Something went wrong in adding user");
    }
});

connectDB().then(() => {
     console.log("Succesfully connected to DB");

    app.listen(7777, () => {
    console.log("Server is running")
})
})
.catch((error) => {
    console.log("Error connecting to database")
});

