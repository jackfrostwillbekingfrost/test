const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let data = {};

// app.use(bodyParser.json()); // for parsing JSON
app.use(bodyParser.urlencoded({extended: true}));

app.get('/text', function(req, res) {
res.send(data);
res.end();
});

app.post('/text', function(req, res) {
console.log(req.body);
data['text'] = req.body.text;
res.json({ text: 'Successfuly set the message!' });
res.send(data);
res.end();
});

const port = process.env.PORT || 3000;
app.listen(port);
