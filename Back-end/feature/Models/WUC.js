const mongoose=require('mongoose');

const WUCSchema=new mongoose.Schema({
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
    //storing date of account set up..
    date: String,
    //the WUC committee has both the pumpOperator data and the villageData from the 'ivr':-
    pumpData:Array,
    villageData:Array,

    //individual village and scheme id of WUC member:-
    v_id: String,
    s_id:String
})





module.exports = mongoose.model('wuc',adminSchema);