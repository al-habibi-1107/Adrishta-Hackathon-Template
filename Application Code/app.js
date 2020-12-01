// initialising all packages
const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('formidable');
const fs = require('fs');


// setting up an instance of express
const app = express();

// to serve up the static files 
app.use(express.static("public"));

// to set up body parser
app.use(bodyParser.urlencoded({extended:true}));

// to use templating for dynmic content
app.set("view engine","ejs");



var voteCounter=0;
var userQuestion ="" ;
var options=[];
var optionsVote=[0,0,0];
var voterArr =[];
var fileName;
var flag =1;

var SecurityCode = "";


//////////////// Home Route ////////////////

app.get('/',function(req,res){


    res.render('homepage',{pageName: "Home"})
});

app.post('/',function(req,res){
    if(req.body.code == SecurityCode){
        res.redirect('/polls')
    }else{
        res.render('error');
    }
})



/////////////// ADMIN ROUTE /////////////////
app.get('/admin',function(req,res){
    res.render('admin',{pageName:"Admin Page"});
});

app.post('/admin',function(req,res){

    // security code
   

    var formData = formidable.IncomingForm();
    formData.parse(req,function(err,feilds,files){
        
       fileName = files.file.name;
        var newpath = __dirname+"/uploads/"+files.file.name;
        fs.rename(files.file.path,newpath,function(err){
            
        });
            
                        userQuestion = feilds.ques;
                        options.push(feilds.op1);
                        options.push(feilds.op2);
                        options.push(feilds.op3);
                        totalUsers = feilds.totalVoters;

                        SecurityCode =  [...Array(6)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
                        console.log(SecurityCode);
                        if(userQuestion.length<3){
                    
                            res.render("adminRes",{err:true,pageName: "Admin Page",code:SecurityCode});
                        }
                        else {
                            res.render("adminRes",{err:false,pageName: "Admin Page",code:SecurityCode});
                        }
                        console.log(userQuestion);
                        console.log(userQuestion.length);
    });

        
   

        
});

///////////////////// Poll Route /////////////////

app.get('/polls',function(req,res){

    res.render('poll',{pageName:"Polls",question: userQuestion,op1: options[0],op2:options[1],op3:options[2]});
});

app.post('/polls',function(req,res){

 if(flag==1){
     var array = fs.readFileSync(__dirname+'/uploads/'+fileName).toString().split("\n");
      for(i in array) {
          voterArr.push(array[i]);
          flag = 0;
 }
   }
   if(voterArr.includes(req.body.mail)){
        if(req.body.op === options[0]){
            optionsVote[0]++;
        }else if(req.body.op === options[1]){
            optionsVote[1]++;
        }else{
            optionsVote[2]++;
        }
        voteCounter++;

      var index = voterArr.indexOf(req.body.mail)
       console.log(index);
       if (index > -1) {
        voterArr.splice(index, 1);
      }
        
   }

   console.log(voterArr);


   res.render("resp");

});

//////////////// RESULT ROUTE ///////////////////

app.get('/result',function(req,res){

    res.render('result',{pageName: "Vote",op1:options[0],v1:optionsVote[0],op2:options[1],v2:optionsVote[1],op3:options[2],v3:optionsVote[2]});

});

// set up the server to listen at a port
app.listen('3000',function(){
    console.log("Server running at localhost 3000");
});

