import { model, Schema } from "mongoose";

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  onBoarded: {
    type: Boolean,
    default: false,
  },
});

export default model("User", userSchema);
