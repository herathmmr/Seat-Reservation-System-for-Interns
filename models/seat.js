import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
    seatNumber :{
        type :String,
        required : true,
        unique : true,
    },
    location :{
        type : String,
        required: true,

    },
   availability :{
        type : Boolean,
        required : true,

    }
})
const seat = mongoose.model("seats",seatSchema)
export default seat;