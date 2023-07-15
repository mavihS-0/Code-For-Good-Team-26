require("dotenv").config();
const express = require("express");
const cors = require("cors");
const loginRouter = require("./Routes/LoginRouter.js");
const dataRouter = require("./Routes/handlePumpQuality.js");
const dbconnect = require("./db.js");
const adminRouter = require("./Routes/admin.js");
const app = express();

//connecting to database :-
dbconnect();






//middlewares:-
app.use(express.json());
app.use(cors());







//login setup

app.use("/login",loginRouter);

app.use("/data",dataRouter);

app.use("/admin",adminRouter);






















app.listen(process.env.PORT,()=>{
    console.log("Server started on port 5000 !!");
})





