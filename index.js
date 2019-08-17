const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const submitRouter = require('./routes/submit.js');

const hostname = 'localhost';
const port = 3000;
//main api programming starts

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/submit',submitRouter);

app.use(express.static(__dirname + '/public'));


//api programming ends....



// creating server.....
const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server is running at http://${hostname}:${port}`);
});
