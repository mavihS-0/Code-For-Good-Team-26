const mongoose=require('mongoose');
const bcrypt = require("bcrypt");
const adminSchema=new mongoose.Schema({
    name :{
        type: String,
        required:[true,'username can not be blank']

    },
    number:{
        type :Number,
        required :[true,'phone number can not be blank'],
        length: 10
    },
    password:{
        type: String,
        required:[true,'password can not be blank'],
        min:0
    }
})


//TODO:-checking on admin route :-


module.exports = mongoose.model('admin',adminSchema);

// const adminCheck = ()=>{

// //hashing 
// const salt = bcrypt.genSaltSync(10);
// const hashedPassword = bcrypt.hashSync("1234",salt);

// const newAdmin = new admin({
//     name:"abc",
//     password:hashedPassword,
//     number:1234567890
// })

// newAdmin.save()
// .then((result) =>{
//     console.log("logged In successfully !");
    
// }).catch((err) => {
//     console.log(err);
// });



// }





