require("../dbConfig");
const User = require("../models/userModel");

//seeding data and functions for inserting testing data

const data = [
  {
    name: "Ram Kumar",
    email: "ramkumar@gmail.com",
    phoneNo: "1234567890",
    noOfSeats: 2,
    attendeeName: ["Rakesh"]
  },
  {
    name: "Suresh Kumar",
    email: "sureshkumar@gmail.com",
    phoneNo: "1234567890",
    noOfSeats: 4,
    attendeeName: ["Bala", "Vignesh", "Karthi"]
  },
  {
    name: "Moses",
    email: "moses@gmail.com",
    phoneNo: "1234567890",
    noOfSeats: 1,
    attendeeName: []
  }
];

const saveUser = (id) => {
  data.forEach(async (element) => {
    try {
      const newUser = new User({
        ...element,
        event: id
      });
      const result = await newUser.save();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports = saveUser;
