import express from "express";
import * as Validation from "../middleware/loginValidation.js";
import * as usercontroller from "../controller/authcontroller.js";
import * as authmodel from "../model/authmodel.js"

const router = express.Router();

router.post("/login",Validation.Login,usercontroller.checkUser,authmodel.generateJwt);



export default router;