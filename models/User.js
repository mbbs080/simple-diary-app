import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
    since: {
      type: String,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Users = mongoose.models.User || mongoose.model("User", UserSchema);

export default Users;
