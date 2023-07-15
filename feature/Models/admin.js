const mongoose=require('mongoose');

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

module.exports= mongoose.model('admin',adminSchema)