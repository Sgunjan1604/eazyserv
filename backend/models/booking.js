const mongoose = require("mongoose");
const { Schema } = mongoose;
const bookingSchema = new mongoose.Schema(
  {
    // Date when the service will be provided
    serviceDate: {
      type: Date,
      required: true,
    },

    
    time: {
      type: String,
      required: true,
    },

    paymentMode: {
      type: String,
      enum: ["Cash", "UPI", "Card", "Online", "Wallet"],
      required: true,
    },

   
    bookingId: {
      type: String,
      required: true,
      unique: true,
    },


    address: {
      type: String,
      required: true,
    },

   
    totalAmount: {
      type: Number,
      required: true,
    },

    discount: {
      type: Number,
      default: 0,
    },

    finalPaid: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Completed", "Cancelled"],
      default: "Pending",
    },

  
  },
  {
    timestamps: true, 
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;