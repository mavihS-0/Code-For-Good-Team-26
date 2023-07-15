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
    lastActiveAt: Date,
    FeedbackData:Object,
    village_id: String,
    scheme_id:String
})

module.exports= mongoose.model('qualityOperator',qualityOperatorSchema)