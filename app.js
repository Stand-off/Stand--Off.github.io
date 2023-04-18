const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const collection=require("./mongodb");
const bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.json());

//console.log(path.join(__dirname))
app.get('/index',function(req,res){
  res.sendFile(path.join(__dirname+"/index.html"));

});
 

app.get('/login1',function(req,res){
  res.sendFile(path.join(__dirname+"/login1.html"))
})

app.get('/login2',function(req,res){
  res.sendFile(path.join(__dirname+"/login2.html"))
})

app.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname+"/signup.html"))
})



app.post("/signup",async(req,res)=>{
  
  const salt = await bcrypt.genSalt(10);
    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


  const data=
  {
    username:req.body.username,
      email:req.body.email,
      password: req.body.password,
      hashed:hashedPassword
  }
  
  await collection.insertMany([data])
  res.sendFile(path.join(__dirname+"/login1.html"));
})



app.post("/login1",async(req,res)=>{
  try{
          const check=await collection.findOne({name:req.body.username})

          if(check.password===req.body.password)
          {
            res.sendFile(path.join(__dirname+"/download.html"));
          }
          else
          {
            res.sendFile(path.join(__dirname+"/login2.html"));
          }
          
  }
  catch(error)
  {
          res.send("wrong details")
  }

})


app.post("/login2",async(req,res)=>{
  try{
          const check=await collection.findOne({name:req.body.username})

          if(check.password===req.body.password)
          {
            res.sendFile(path.join(__dirname+"/download.html"));
          }
          else
          {
            res.sendFile(path.join(__dirname+"/login2.html"));
          }
  }
  catch(error)
  {
          res.send("wrong details")
  }

})



app.use('/', router);
app.listen(process.env.port || 8000);
 
console.log('Running at Port 8000');