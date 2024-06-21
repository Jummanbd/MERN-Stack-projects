import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname:  {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
   

  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;