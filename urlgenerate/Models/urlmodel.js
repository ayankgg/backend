const mongoose=require('mongoose');

const newSchema=new mongoose.Schema({
    shorturl:{
        type:String,
        required:true
    },
    actualurl:{
        type:String,
        required:true
    },
},{timestamps:true})
const url=mongoose.model('urlmodel',newSchema);
module.exports={url};
