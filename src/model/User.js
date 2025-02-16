const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tests: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Test",
  }
});

module.exports = mongoose.model("User", UserSchema);