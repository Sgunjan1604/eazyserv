const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "others"],
  },
  DOB: {
    type: Date,
  },
  address: {
    landmark: String,
    street: String,
    city: String,
    state: String,
    pincode: String
  },
  profilePhoto: {
    type: String,
  },
  role: {
    type: String,
    enum: ["worker", "customer", "admin"],
    required: true,
  },
  isProfileCompleted:{
    type: Boolean,
    default: false
  },
  workerInfo: {
    skills: {
      type: [String],
    },
    experience: {
      type: Number,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    serviceArea: {
      type: [String],
    },
    rating: {
      type: Number,
      default: 0,
    },
    completedJobs: {
      type: Number,
      default: 0,
    },
    earnings: {
      type: Number,
      default: 0
    },
  },
  customerInfo: {
    bookingHistory: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "booking",
      default: []
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("user", UserSchema);
