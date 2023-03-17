const express = require('express');
const app = express()

/*app.use((req, res) => {
    console.log('We got a new Request!');
    res.send('<h1>Hello, we got your request! This is our response.</h1>');
})*/

app.get('/', (req, res) => {
    res.send('This is the home page!!')
})

// Creating a Route in Express
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

// Defining Patterns for our Route

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post Id: ${postId} on the ${subreddit} subreddit </h1>`)
})

//example of a POST Request

app.post('/cats', (req, res) => {
    res.send('Post Request To /cats!!!!! This Is Different Than A Get ReQuest!!!')
})

app.get('/cats', (req, res) => {
    res.send('CAT REquest!!!')
})

app.get('/dogs', (req, res) => {
    res.send('DOg Request!!')
})
//Working with query strings//
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found if noothings searched!')
    }
    res.send(`<h1> search results for: ${q} </h1>`)
})


app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})
//Working with query strings//



//Server is on localhost:3000 //
app.listen(3000, () => {
    console.log("Listening on Port 3000!")
})