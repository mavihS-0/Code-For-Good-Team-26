const mongoose=require('mongoose');

const qualityOperatorSchema=new mongoose.Schema({
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
    qualityData:Array,
    //TODO-ADD REQUIRED AND ADD FUNCTIONALITY OF authenticating and sending to the client the v_id and s_id
    v_id: String,
    s_id:String
})

module.exports= mongoose.model('qualityOperator',qualityOperatorSchema)