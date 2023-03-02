const express = require('express');
const app = express()

app.use((req, res) => {
    console.log('We got a new Request!');
    res.send('<h1>Hello, we got your request! This is our response.</h1>');
})
//Server is on localhost:3000 //
app.listen(3000, () => {
    console.log("Listening on Port 3000!")
})