// initialising all packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// setting up an instance of express
const app = express();

// to serve up the static files 
app.use(express.static('public'));

// to set up body parser
app.use(bodyParser.urlencoded({extended:true}));


app.get('/admin',function(req,res){

    res.sendFile(__dirname+"/admin.html");
});



// set up the server to listen at a port
app.listen('3000',function(){
    console.log("Server running at localhost 3000");
});

