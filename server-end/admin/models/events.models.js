const mongoose=require("mongoose")

const eventSchema=new mongoose.Schema({
    adminId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin"
    },
    organisationName:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    countMale:{
        type:Number,
        default:0
    },
    countFemale:{
        type:Number,
        default:0
    },
    description:{
        type:String,
        required:true
        
    },
    duration:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true,
        trim:true
    },
    contactDetails:{
        area:{
            type:String,
            required:true,
            trim:true,
            lowercase:true
        },
        district:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:String,
            required:true
        }
    }},{timestamps:true}
)

const Event=mongoose.model("Event",eventSchema);
module.exports=Event;