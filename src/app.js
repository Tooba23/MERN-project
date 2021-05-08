// require('dotenv').config()
const express = require("express");
const path = require("path");
const app = express();
const bcryptjs = require("bcryptjs");
// const jwt = require("jsonwebtoken")
// const cookieParser = require('cookie-parser')
const hbs = require("hbs")
    // const auth = require("./middleware/auth")
require("./db/conn");
const User = require("./models/userMessage")
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(staticPath))
app.set("view engine", "hbs");
app.set("views", templatePath)
hbs.registerPartials(partialPath)

// console.log("Secret key", process.env.SECRET_KEY)
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})

app.post("/contact", async(req, res) => {
    try {
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index")
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(port, () => {
    console.log(`connection established at ${port}`)
})