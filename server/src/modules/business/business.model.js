const mongoose=require("mongoose");

const businessSchema= new mongoose.Schema(
{
    name:{
        type: String,
        required: true,
        trim:true,
    },
    Subscription:{
        type:String,
        enum :["free","pro","enterprise"],
        default: "free",
    },
},
    {
        timestamps:true,
    }
);
module.exports=businessSchema;