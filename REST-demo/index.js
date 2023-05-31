const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true })) // code line is needed to run either codes or function on every single request.

app.use(express.json())// parses incoming requests with JSON data instead of url.
app.get('/tacos', (req, res) => {
    res.send('Get/ tacos response')
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Ok, here are your ${qty} ${meat}`)
})
app.listen(3000, () => {
    console.log('on port 3000!');
})

