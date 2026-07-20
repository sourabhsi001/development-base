const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (username === "sourabh" && password === "1234") {

        res.cookie("username", username);

        res.send("Login Successful");

    } else {

        res.send("Invalid Credentials");

    }

});