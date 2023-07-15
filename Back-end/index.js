require("dotenv").config();
const express = require("express");
const cors = require("cors");
const loginRouter = require("./Routes/LoginRouter.js");
const app = express();






//middlewares:-
app.use(express.json());
app.use(cors());







//login setup

app.use("/login",loginRouter);






















app.listen(process.env.PORT,()=>{
    console.log("Server started on port 5000 !!");
})





