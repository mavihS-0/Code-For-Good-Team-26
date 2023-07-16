require("dotenv").config();
const express = require("express");

const LoginRouter = express.Router();

const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);


const jwt = require("jsonwebtoken");

const pumpOperator = require("../feature/Models/pumpOperator");
const qualityOperator = require("../feature/Models/qualityOperator");
const admin = require("../feature/Models/admin");






//pump operator
LoginRouter.post("/pumpOperator",(req,res)=>{
    
    const name = req.body.name;
    const password = req.body.password;
    const number = req.body.number;
    console.log("Data recieved from front-end",name,password,number);
    pumpOperator.findOne({number:number}).then((operatorFound) => {
        console.log("found the document in the pumpOperator collection !!");
        const authenticated = bcrypt.compareSync(password,operatorFound.password);
        if(authenticated){
            //user password matches the database password:-
            const data = {
                user:{
                    name,
                    id:operatorFound._id
                }
            }
            const authToken = jwt.sign(data,process.env.JWT_SECRET,{
                expiresIn: '1h'
              });

            

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



//qualityTeam
LoginRouter.post("/qualityOperator",(req,res)=>{
    
    const name = req.body.name;
    const password = req.body.password;
    const number = req.body.number;
    
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
            const authToken = jwt.sign(data,process.env.JWT_SECRET,{
                expiresIn: '1h'
              });
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
            const authToken = jwt.sign(data,process.env.JWT_SECRET,{
                expiresIn: '1h'
              });
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