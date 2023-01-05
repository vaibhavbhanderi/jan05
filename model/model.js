const mongoose = require("mongoose");

const StudentShema = new mongoose.Schema({
  name: {
    type: String,
  },

  password: {
    type: String,
  },
});

module.exports = new mongoose.model("Student", StudentShema);
