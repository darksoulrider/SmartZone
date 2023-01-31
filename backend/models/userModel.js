import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please enter a username"],
        unique: true,
    },
    password:{
        type: String,
        required: [true,"Please enter a password"],
    },
    email:{
        type: String,
        required: [true,"Please enter a email address"],
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    profilePicture:{
        public_id:{
            type: String,
            required:true,
            default:"default-User_ynivjt.png"
        },
        public_url:{
            type: String,
            required:true,
            default:"https://asset.cloudinary.com/dj7rv21dq/e3fcab0f3ade99ec9ca1245ad9f8b175"
        }

    },
    friends:[
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref:"User",
        }
    ]
},{
    timestamps:true,
})

export const UserModel=  mongoose.model("User",UserSchema);