import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    seatId: {
      type: "String",
     unique: true,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
   
    status: {
      type: Boolean,
    
      default: "active",
    },
  },
  
);

const ReservationModel = mongoose.model("reservations", reservationSchema);

export default ReservationModel;
