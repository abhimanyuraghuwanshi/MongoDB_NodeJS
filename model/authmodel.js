import "../config/mongofile.js";
import jwt from "jsonwebtoken";
import activityschema from "./schema/activitySchemaFile.js";
import response from "../sharedModule/response.js";
import * as statusCode from "../sharedModule/statusCode.json" assert { type: "json" };

export var generateJwt = async (req, res) => {
  try {
    let userlist = req.body.userlist;
    let payload = {
      email: userlist.email,
      id: userlist._id.toString(),
      role: 2,
    };
    let token = jwt.sign(payload, process.env.JWTSECRETKEYADMIN, {
      expiresIn: process.env.JWTSESSIONTIMEOUT,
    });
    await activityschema.create({
      activity: "Login",
      userId: userlist._id,
    });
    res.send(
      response(statusCode.default.OK, true, "Success", {
        token: token,
        userDetails: userlist,
      })
    );
  } catch (error) {
    res.send(response());
  }
};
