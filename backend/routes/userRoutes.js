import express from "express"
const Router = express.Router();
import { LoginController,RegisterController } from "../controllers/userController.js";


Router.route("/login").post(LoginController);
Router.route("/register").post(RegisterController);



export default Router;