
const express = require('express');
const app = express();

app.get("/",function(req,res){

res.send("<h1>hello kid</h1>");

});

app.get("/contact",function(req,res){

res.send("<h1>Contact me at : vs28@iitbbs.ac.in </h1>");

});

app.get("/about",function(req,res){

res.send("<h1><bold> Hi I am Vivekanand Sahoo from IITBBS </bold><h1>");

});

app.get("/blog",function(req,res){

res.send("<h1><bold> Hi This is my blogging page </bold><h1>");

});


app.listen(3000,function(){

console.log("server started on port 3000");

});
