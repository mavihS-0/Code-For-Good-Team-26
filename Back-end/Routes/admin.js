require("dotenv").config();
const express = require("express");

const adminRouter = express.Router();

const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);


const jwt = require("jsonwebtoken");

const pumpOperator = require("../feature/Models/pumpOperator");

const qualityOperator = require("../feature/Models/qualityOperator");


//admin priviliges:-


//admin can add/update the pump operator by giving the required v_id and s_id and
//details:-

adminRouter.post("/pump",(req,res)=>{
    //retrieving data from the request that the admin wants to add a new pump operator :-
    const name  = req.body.name ; 
    const password = req.body.password;
    const number = req.body.number;


    const hashedPassword = bcrypt.hashSync(password,salt);

    //create operation:-
    const newPump = new pumpOperator({
        name,
        password,
        number,
    })
    newPump.save()
    .then((saved)=>{
        res.send({newPumpOperatorAdded:true})
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).send({message:"Couldnt create a new pumpOperator!!!"})
    })
})


adminRouter.post("/pump/delete",(req,res)=>{
    //retrieving data from the request that the admin wants to delete the existing pump operator :-
    //we can use only the 'number' field to delete the 
    const {name,password,number,v_id,s_id} = req.body;

    //create operation:-
    pumpOperator.deleteOne({number:number})
    .then((deleted)=>{
        res.send({givenPumpOperatorDeleted:true})
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).send({message:"Couldnt delete the pumpOperator!!!"})
    })
})

//CREATING THE WATER QUALITY TEAM MEMBER :-
adminRouter.post("/quality",(req,res)=>{
    //retrieving data from the request that the admin wants to add a new pump operator :-
    console.log(req.data);

    const name  = req.body.name ; 
    const password = req.body.password;
    const number = req.body.number;

    
    const hashedPassword = bcrypt.hashSync(password,salt);
    console.log(hashedPassword);
    //create operation:-
    const newQualityOperator = new qualityOperator({
        name,
        password:hashedPassword,
        number,
        qualityData:[{"test":"testdatadocument"}]
    })
    newQualityOperator.save()
    .then((saved)=>{
        res.send({newPumpOperatorAdded:true})
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).send({message:"Couldnt create a new pumpOperator!!!"})
    })
})




adminRouter.post("/quality/delete",(req,res)=>{
    //retrieving data from the request that the admin wants to delete the existing pump operator :-
    //we can use only the 'number' field to delete the 
    const {name,password,number,v_id,s_id} = req.body;

    //create operation:-
    qualityOperator.deleteOne({number:number})
    .then((deleted)=>{
        res.send({givenQualityOperatorDeleted:true})
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).send({message:"Couldn't delete QualityOperator!!!"})
    })
})



module.exports = adminRouter ;