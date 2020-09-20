const mongoose = require("mongoose");

const { Schema, model } = mongoose;

//event model Schema in Mongoose ODM
const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true
  },
  eventDesc: {
    type: String,
    required: true
  },
  eventImage: {
    type: String,
    reauired: true
  },
  date: {
    type: String,
    required: true
  },
  seatsAvailable: {
    type: Number,
    min: 0,
    required: true
  }
});

const Event = model("event", eventSchema);

module.exports = Event;
