import express from "express";
import { addSeat, updateSeat,deleteSeat, getALLSeat, BookSeat } from "../controllers/seatController.js";

const route = express.Router();

route.post("/",addSeat);
route.put("/:seatNumber",updateSeat);
route.delete("/:seatNumber",deleteSeat);
route.get("/",getALLSeat);
route.put("/book/:seatNumber",BookSeat);


 export default route;