require("dotenv").config();
const express = require("express");

const LoginRouter = express.Router();

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

//pump operator
LoginRouter.post("/pumpOperator",(req,res)=>{
    
    const {name,password,number} = req.body;
    
    pumpOperator.findOne({number:number})
    .then((operatorFound) => {
        //TODO :- FIX THE BCRYPT FUNCTIONALITY
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
    
    const {name,password,number} = req.body;
    
    admin.findOne({number:number})
    .then((adminFound) => {
        //TODO :- FIX THE BCRYPT FUNCTIONALITY
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

        
    }).catch((err) => {
        console.log(err);
        res.status(500).json({login:false});
    });
})



//qualityTeam
LoginRouter.post("/admin",(req,res)=>{
    
    const {name,password,number} = req.body;
    
    admin.findOne({number:number})
    .then((adminFound) => {
        //TODO :- FIX THE BCRYPT FUNCTIONALITY
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