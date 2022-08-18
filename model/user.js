const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const BusinessSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: "Job",
  },
  location: {
    type: String,
  },
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

exports.Business = mongoose.model("Business", BusinessSchema);
