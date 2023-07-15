require("dotenv").config();
const express = require("express");

const dataRouter = express.Router();


const jwt = require("jsonwebtoken");

const pumpOperator = require("../feature/Models/pumpOperator");
const qualityOperator = require("../feature/Models/qualityOperator");
const admin = require("../feature/Models/admin");




dataRouter.post("/pumpData",async (req,res)=>{
    //fetching the pump details submitted by the user:-
    const { data } = req.body ;

    //we need to verify the pumpOperator:-
    const verified = jwt.verify(req.body.authToken,process.env.JWT_SECRET);


   
    if(verified){
        pumpOperator.findOne({_id:verified.user.id})
        .then((operatorFound)=>{
            //add a new pumpFeedback data as an object :
            const updatedData = operatorFound.pumpData; 
            updatedData.unshift({
                Date: new Date().toLocaleDateString(),
                data
            });
            res.send(updatedData);
            pumpOperator.updateOne({_id:verified.user.id},{
                pumpData:updatedData
            })
            .then((updateRes)=>{
                res.send({formSubmitted : true});
            })
            .catch((err)=>{
                console.log(err);
            })
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).send({message:"Couldnt found the pumpOperator in the DB !!"})
        })

        


    }
    else{
        res.send({message:"Unauthorized Action !!"})
    }



})



dataRouter.post("/qualityData",async (req,res)=>{
    //fetching the pump details submitted by the user:-
    const { data } = req.body ;

    //we need to verify the pumpOperator:-
    const verified = jwt.verify(req.body.authToken,process.env.JWT_SECRET);


   
    if(verified){
        qualityOperator.findOne({_id:verified.user.id})
        .then((qualityOperatorFound)=>{
            //add a new pumpFeedback data as an object :
            const updatedData = qualityOperatorFound.qualityData; 
            updatedData.unshift({
                Date: new Date().toLocaleTimeString(),
                data
            });
            qualityOperator.updateOne({_id:verified.user.id},{
                qualityData:updatedData
            })
            .then((updateRes)=>{
                res.send({QualityFormSubmitted : true});
            })
            .catch((err)=>{
                console.log(err);
            })
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).send({message:"Couldnt found the qualityOperator in the DB !!"})
        })

        


    }
    else{
        res.send({message:"Unauthorized Action !!"})
    }



})






















module.exports = dataRouter ;