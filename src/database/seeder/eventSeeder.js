require("../dbConfig");
const Event = require("../models/eventModel");
const saveUser = require("./userSeeder");
const {
  chuseok,
  chuseokPaper,
  gandhiJayanti,
  garlands,
  holi,
  loyKrathong,
  chuseokN,
  sumpahPemuda,
  sumpahPemudaHand
} = require("../images/eventImages");

//seeding data and functions for inserting testing data

const data = [
  {
    eventName: "Chuseok Event",
    eventDesc: "This is the Chuseok Event where we can do so and so..",
    eventImage: chuseok,
    date: new Date(),
    seatsAvailable: 22
  },
  {
    eventName: "Chuseok Paper",
    eventDesc: "This is the Chuseok Paper Event  where we can do so and so..",
    eventImage: chuseokPaper,
    date: new Date(),
    seatsAvailable: 22
  },
  {
    eventName: "Gandhi Jayanti Event",
    eventDesc: "This is the Gandhi Jayanti Event where we can do so and so..",
    eventImage: gandhiJayanti,
    date: new Date(),
    seatsAvailable: 22
  },
  {
    eventName: "Garlands Event",
    eventDesc: "This is the Garlands Event where we can do so and so..",
    eventImage: garlands,
    date: new Date(),
    seatsAvailable: 22
  },
  {
    eventName: "Holi",
    eventDesc: "This is Holi Event where we can do so and so..",
    eventImage: holi,
    date: new Date(),
    seatsAvailable: 22
  },
  {
    eventName: "Loy Krathong",
    eventDesc: "This is the Loy Krathong where we can do so and so..",
    eventImage: loyKrathong,
    date: new Date(),
    seatsAvailable: 22
  },
  {
    eventName: "Chuseok Necromar",
    eventDesc: "This is the Chuseok Necromar where we can do so and so..",
    eventImage: chuseokN,
    date: new Date(),
    seatsAvailable: 22
  },
  {
    eventName: "Sumpah Pemuda",
    eventDesc: "This is the Sumpah Pemuda where we can do so and so..",
    eventImage: sumpahPemuda,
    date: new Date(),
    seatsAvailable: 22
  },
  {
    eventName: "Sumpah Activity",
    eventDesc: "This is the Sumpah Activity where we can do so and so..",
    eventImage: sumpahPemudaHand,
    date: new Date(),
    seatsAvailable: 22
  }
];

const saveEvent = async () => {
  data.forEach(async (element) => {
    try {
      const newEvent = new Event(element);
      const result = await newEvent.save();
      console.log(result);
      const id = result["_id"];
      const user = await saveUser(id);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  });
};

saveEvent();
