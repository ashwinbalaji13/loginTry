const express = require('express');
const bodyParser = require('body-parser');

var conn=require('./db');
var app = express();

conn.getConnection(function(err){
    if(err){
        console.log("Cannot Connect to DB");
    }
    else{
        console.log("Connected to DB");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        
        const validationRouter = require('./routes/login');
        app.use('/login', validationRouter);
    }
})

app.get('/loginPage/', function (req, res) {
    res.send('Login Page');
});

app.get('/',function(req,res){
    res.redirect('/loginPage/');
});

var port = 3000
app.listen(port, () => {
    console.log('Login Page service started in ' + port);
});
