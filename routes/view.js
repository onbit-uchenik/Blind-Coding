const express = require('express');
const viewRouter = express.Router();
const bodyParser = require('body-parser');
let x = 5;

viewRouter.use(bodyParser.json());
viewRouter.use(bodyParser.urlencoded({extended:true}));

viewRouter.route('/')
.get( (req,res,next) => {
    if(x > 0 && x<=5) {
        res.statusCode = 200;
        x--;
        res.setHeader('Content-Type','text/plain');
        res.end();
    }
    else {
        res.statusCode = 403;
        res.setHeader('Content-Type','text/plain');
        res.end();
    }
})
.put( (req,res,next) => {
    res.statusCode = 200;
    x++;
    res.setHeader('Content-Type','text/plain');
    res.end();
});

module.exports = viewRouter;
