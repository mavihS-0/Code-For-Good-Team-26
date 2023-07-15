require("dotenv").config();
const express = require("express");

const adminRouter = express.Router();

const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);


const jwt = require("jsonwebtoken");

const pumpOperator = require("../feature/Models/pumpOperator");
const adminOperator = require("../feature/Models/qualityOperator");
const admin = require("../feature/Models/admin");


//admin priviliges:-


//admin can add/update the pump operator by giving the required v_id and s_id and
//details:-

adminRouter.post("/pump",(req,res)=>{
    //retrieving data from the request that the admin wants to add a new pump operator :-
    const {name,password,number,v_id,s_id} = req.body;

    //create operation:-
    const newPump = new pumpOperator({
        name,
        password,
        number,
        v_id,
        s_id
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
        res.status(400).send({message:"Couldnt create a new pumpOperator!!!"})
    })
})




module.exports = adminRouter ;