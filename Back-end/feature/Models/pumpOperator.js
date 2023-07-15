const mongoose=require('mongoose');

const pumpOperatorSchema=new mongoose.Schema({
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
    },
    date: String,
    pumpData:Array,
    v_id: String,
    s_id:String
})

module.exports= mongoose.model('pumpOperator',pumpOperatorSchema)