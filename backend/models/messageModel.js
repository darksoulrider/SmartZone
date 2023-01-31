import mongoose, { Schema } from "mongoose";

const MessageSchema = new mongoose.Schema({
    chatType:{
        type:String,
        enum:["Group","Personal"],
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    messages: [{
        text: {
          type: String,
          required: true
        },
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true
        },
        timestamp: {
          type: Date,
          default: Date.now
        }
      }],
    groupDetails:{
        required:function(){this.type == "Group"},
        ref:"Group",
    }
})