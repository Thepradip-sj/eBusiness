const mongoose=require("mongoose");
const userSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
     role: {
      type: String,
      enum: ["owner", "manager", "staff"],
      default: "staff",
    },

    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

modules.export=userSchema;