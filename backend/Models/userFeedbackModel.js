const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userFeedbackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  feedbackStatus: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  feedbackComment: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("UserFeedback", userFeedbackSchema);
