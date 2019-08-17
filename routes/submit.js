const express = require('express');
const bodyParser = require('body-parser');
const submitRouter = express.Router();

submitRouter.use(bodyParser.json());

submitRouter.route('/')
.all( (req,res,next) => {  
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get( (req,res,next) => {
    res.end('get request successfully');
})
.post( (req,res,next) => {
    res.end('post request successfull');
});

module.exports = submitRouter;