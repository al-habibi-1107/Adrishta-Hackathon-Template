// initialising all packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// setting up an instance of express
const app = express();

// to serve up the static files 
app.use(express.static("public"));

// to set up body parser
app.use(bodyParser.urlencoded({extended:true}));

// to use templating for dynmic content
app.set("view engine","ejs");


var userQuestion ;
var options=[];
var totalUsers;
var startTime;


app.get('/admin',function(req,res){
    res.render('admin',{pageName:"Admin Page"});
});

app.post('/admin',function(req,res){

    userQuestion = req.body.ques;
    options.push(req.body.op1);
    options.push(req.body.op2);
    options.push(req.body.op3);
    totalUsers = req.body.totalVoters;
    if(userQuestion.length < 3||totalUsers<1){

        res.render("adminRes",{err:true,pageName: "Admin Page"});
    }
    else {
        res.render("adminRes",{err:false,pageName: "Admin Page"});
    }
        
});




// set up the server to listen at a port
app.listen('3000',function(){
    console.log("Server running at localhost 3000");
});

