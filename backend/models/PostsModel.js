import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    image:{
        public_id:String,
        public_url:String,
    },
    description:{
        type:String,
        required:function(){if(!this.image){return true}},
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    comments:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
            },
            text:{
                type:String,
                required:true,
            },
            timestamps:true
        }
    ],
    
},{timestamps:true})

export const PostModel = mongoose.model('Post',PostSchema);