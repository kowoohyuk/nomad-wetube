import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
  videos: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Video"
    }
  ],
  comments: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
