import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  //id is given by default
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, // cant create a board without userId
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    trim: true,
    default: "New Board",
    ref: "Name",
  },
  isPublic: {
    type: Boolean,
    default: true, // Make boards public by default
  },
});

export default mongoose.models.Board || mongoose.model("Board", boardSchema);
