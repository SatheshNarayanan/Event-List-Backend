const mongoose = require("mongoose");

const { Schema, model } = mongoose;

//user model Schema in Mongoose ODM
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  noOfSeats: {
    type: Number,
    required: true
  },
  attendeeName: {
    type: [String],
    required: true
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
    required: true
  }
});

const User = model("user", userSchema);

module.exports = User;
