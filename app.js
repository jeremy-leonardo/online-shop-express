const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/favicon.ico", (req, res) => res.sendStatus(204));

app.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form>')
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/', (req, res, next) => {
    res.send('<h1>Home</h1>');
});

const server = http.createServer(app);

server.listen(3000);
console.log('Listening...');