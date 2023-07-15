const mongoose=require('mongoose');
 const waterQualitySchema=new mongoose.Schema({
    lastActiveAt: Date,
    FeedbackData:Object,
    village_id: String,
    scheme_id:String
 })