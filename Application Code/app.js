// initialising all packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const readXlsxFile = require('read-excel-file/node');
const multer = require('multer');
const xlxs = require('xlsx');



// setting up an instance of express
const app = express();

// to serve up the static files 
app.use(express.static("public"));

// to set up body parser
app.use(bodyParser.urlencoded({extended:true}));

// to use templating for dynmic content
app.set("view engine","ejs");


//to locate and save the xlxs file by the user


var voteCounter;
var userQuestion ="What has 4 legs?" ;
var options=["man","dan","pan"];
var totalUsers=5;
var startTime;

/////////////// ADMIN ROUTE /////////////////
app.get('/admin',function(req,res){
    res.render('admin',{pageName:"Admin Page"});
});

app.post('/admin',function(req,res){

    


    userQuestion = req.body.ques;
    options.push(req.body.op1);
    options.push(req.body.op2);
    options.push(req.body.op3);
    totalUsers = req.body.totalVoters;

    
    

    //// to read and save the excel file to the server directory
    // let filePath = __dirname + "/uploads/" + req.body.file;

    //readXlsxFile(req.body.file).then(rows => console.log(rows));



    if(userQuestion.length < 3||totalUsers<1){

        res.render("adminRes",{err:true,pageName: "Admin Page"});
    }
    else {
        res.render("adminRes",{err:false,pageName: "Admin Page"});
    }
        
});

///////////////////// Poll Route /////////////////

app.get('/polls',function(req,res){

    res.render('poll',{pageName:"Polls",question: userQuestion,op1: options[0],op2:options[1],op3:options[2]});
});

app.post('/polls',function(req,res){
   console.log(req.body.mail);
   console.log(req.body.op);
});


// set up the server to listen at a port
app.listen('3000',function(){
    console.log("Server running at localhost 3000");
});

