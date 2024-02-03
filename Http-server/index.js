const express = require("express"); //import express library 
const bodyParser = require("body-parser"); //import this library to log out body.
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.post('/conversations', function(req, res){
    console.log(req.body);
    // console.log(req.headers);
    res.send('<b>HEHEHEHEH<b>');
})

// app.get('/', function(req, res) {
//     res.send('Hello world!')
// })

app.listen(port)