require('dotenv').config()
const express = require("express")

const app = express()
const port = process.env.PORT;

app.get('/' , (req, res) =>{
    res.send(`Home page`);
})

app.get('/login' , (req, res) =>{
    res.send(`Login page`);
})

app.get('/twitter' , (req, res) =>{
    res.send(`Twitter page`);
})

app.listen(port , () =>{
    console.log(`Listening on ${port}`)
})