require("dotenv").config();
const express = require("express");

const LoginRouter = express.Router();

const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);


const jwt = require("jsonwebtoken");

const pumpOperator = require("../feature/Models/pumpOperator");
const qualityOperator = require("../feature/Models/qualityOperator");
const admin = require("../feature/Models/admin");

//TODO:-dont include "/loginCheck" route on github------------------------------------
//to check login functionality...storing a new document and hashing password
LoginRouter.get("/loginCheck",(req,res)=>{

       
       const hashedPassword = bcrypt.hashSync("999",salt);
       
       const newAdmin = new admin({
           name:"admin-2",
           password:hashedPassword,
           number:1111111111
       })
       
       newAdmin.save()
       .then((result) =>{
           console.log("logged In successfully !");
           res.send(result);
           
       }).catch((err) => {
           console.log(err);
           res.sendStatus(400);
       });

})


//TODO-------------------------------------------------------------------------------------------

 
    
    
    
    

///////////////////////////////////////////////////////////////////////

// TODO :- AUTHORISATION FUNCTIONALITY CHECKING THE jwt.verify method:-





//pump operator
LoginRouter.post("/pumpOperator",(req,res)=>{
    
    const {name,password,number} = req.body;
    
    pumpOperator.findOne({number:number})
    .then((operatorFound) => {

        const authenticated = bcrypt.compareSync(password,operatorFound.password);
        if(authenticated){
            //user password matches the database password:-
            const data = {
                user:{
                    name,
                    id:operatorFound._id
                }
            }
            const authToken = jwt.sign(data,process.env.JWT_SECRET);
            //TODO-add the below as a third option in the jwt.sign() method 
            // {
            //   expiresIn: '1h'
            // }
            //TODO---------------------------------------------
            res.send({login:true,authToken:authToken});
        }
        else{
            res.send({login:false});
        }

        
    }).catch((err) => {
        console.log(err);
        res.status(500).json({login:false});
    });
})



//qualityTeam
LoginRouter.post("/qualityOperator",(req,res)=>{
    
    const {name,password,number} = req.body;
    
    qualityOperator.findOne({number:number})
    .then((qualityOperatorFound) => {

        const authenticated = bcrypt.compareSync(password,qualityOperatorFound.password);
        if(authenticated){
            //user password matches the database password:-
            const data = {
                user:{
                    name,
                    id:qualityOperatorFound._id
                }
            }
            const authToken = jwt.sign(data,process.env.JWT_SECRET);
            res.send({login:true,authToken:authToken});
        }
        else{
            res.send({login:false});
        }

        
    }).catch((err) => {
        console.log(err);
        res.status(500).json({login:false});
    });
})



//qualityTeam
LoginRouter.post("/admin",(req,res)=>{
    console.log(req.body);
    const name = req.body.name;
    const password = req.body.password;
    const number = req.body.number;
    
    admin.findOne({number:number})
    .then((adminFound) => {
        
        const authenticated = bcrypt.compareSync(password,adminFound.password);
        if(authenticated){
            //user password matches the database password:-
            const data = {
                user:{
                    name,
                    id:adminFound._id
                }
            }
            const authToken = jwt.sign(data,process.env.JWT_SECRET);
            res.send({login:true,authToken:authToken});
        }
        else{
            res.send({login:false});
        }

        
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({login:false});
    });
})











module.exports = LoginRouter ;