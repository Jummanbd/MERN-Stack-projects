import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {

    title:  {
      type: String,
      
    },
    desc:{
        type:String,
    },
    picturePath: {
      type: String,
      default: "",
    },

  },
  { timestamps: true }
);

const Posts= mongoose.model("Posts", PostSchema);
export default Posts;