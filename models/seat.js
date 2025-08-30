import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
    seatNumber :{
        type :String,
        required : true,
        unique : true,
    },
    location :{
        trype : String,
        required: true,

    },
    avalability :{
        type : Boolean,
        required : true,

    }
})
const seat = mongoose.model("seats",seatSchema)
export default seat;