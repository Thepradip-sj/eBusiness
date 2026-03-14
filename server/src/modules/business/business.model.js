const mongoose=require("mongoose");

const businessSchema= new mongoose.Schema(
{
    name:{
        type: string,
        required: true,
        trim:true,
    },
    Subscription:{
        type:string,
        enum :["free","pro","enterprise"],
        default: "free",
    },
},
    {
        timestamps:true,
    }
);
modules.export=businessSchema;