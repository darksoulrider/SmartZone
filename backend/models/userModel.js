import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please enter a username"],
        unique: true,
    },
    password:{
        type: String,
        required: [true,"Please enter a password"],
        select: false,
    },
    email:{
        type: String,
        required: [true,"Please enter a email address"],
        unique: true,
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
            default:"https://res.cloudinary.com/dj7rv21dq/image/upload/v1675097642/SmartZone/default-User_ynivjt.png"
        }
    },
    friends:[
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref:"User",
        }
    ],
    resetPasswordToken: String,
    resetPasswordExpire: String,
},{timestamps:true})


// UserMethods -----

// we need to use function keywords here to access the this filds..

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcryptjs.hash(this.password, 10);
    next();
})

UserSchema.methods.getJWTToken = async function(){
    return await jwt.sign({_id:this._id},process.env.JWT_SECRET,{
        expiresIn: "15d",
    });
}

UserSchema.methods.comparePassword = async function(password){
    return bcryptjs.compare(password,this.password);
}

UserSchema.methods.getResetToken = async function(){

}

export const UserModel=  mongoose.model("User",UserSchema);


