import express from "express";
import { addSeat, updateSeat,deleteSeat, getALLSeat } from "../controllers/seatController.js";

const route = express.Router();

route.post("/",addSeat);
route.put("/:seatNumber",updateSeat);
route.delete("/:seatNumber",deleteSeat);
route.get("/",getALLSeat)

 export default route;