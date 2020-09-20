require("./database/dbConfig");
const express = require("express");
const bodyParser = require("body-parser");
const Event = require("./database/models/eventModel");
const cors = require("cors");
const helmet = require("helmet");
const User = require("./database/models/userModel");
const { userSchema } = require("./validation/userDataValidation");
const app = express();

app.use(
  cors({
    origin: "https://gq10d.csb.app"
  })
);
app.use(helmet());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.status(200).send("Event Backend");
});

//Since there are only 3 methods I haven't used any routing

//Get Request for listing all the events
app.get("/events", async (request, response) => {
  try {
    const event = await Event.find({}).sort({ date: "asc" });
    response.status(200).json({
      event
    });
  } catch (e) {
    console.log(e);
    response.status(500).send("Error while fetching!");
  }
});

//Getting specific event details
app.get("/events/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const event = await Event.findById(id).sort({ date: "asc" });
    response.status(200).json({
      event
    });
  } catch (e) {
    console.log(e);
    response.status(500).send("Error while fetching!");
  }
});

//Posting the user data against the events
app.post("/events/:id", async (request, response) => {
  //Validating the data using the Joi npm
  const result = userSchema.validate(request.body);

  if (result.error) {
    response.status(400).send({
      message: "Data entered is invalid!!"
    });
  } else {
    try {
      const { id } = request.params;
      const {
        name,
        email,
        phoneNo,
        noOfSeats,
        attendeeName,
        event
      } = request.body;
      console.log(request.body);
      const newUser = new User({
        name,
        email,
        phoneNo,
        noOfSeats,
        attendeeName,
        event
      });
      //Finding and updating the seat count
      let { seatsAvailable } = await Event.findById(id).sort({ date: "asc" });
      seatsAvailable = seatsAvailable - noOfSeats;
      await Event.findOneAndUpdate({ _id: id }, { seatsAvailable });

      //Saving the user data against the event
      const result = await newUser.save();
      response.status(200).json({
        result
      });
    } catch (e) {
      console.log(e);
      response.status(500).send("Error while Saving!");
    }
  }
});

app.get("*", (request, response) => {
  response.status(200).send("Page Not Found");
});

app.listen(8080, () => {
  console.log("Server is up and running!!");
});
