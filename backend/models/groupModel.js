import mongoose from "mongoose";
const GroupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  admins: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }],
  profilePicture:{
    publicId:{
        type:String,
        required: true,
        default:"" // name of an image
    },
    publicUrl:{
        type:String,
        required: true,
        default:""// url
    }
  },

});

export const GroupModel = mongoose.model("Group", GroupSchema);
