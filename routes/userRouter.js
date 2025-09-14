import express from "express";
import { getAllUsers, loginUser, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/",registerUser);
userRouter.post("/login",loginUser);
userRouter.get("/allusers",getAllUsers);



export default userRouter;