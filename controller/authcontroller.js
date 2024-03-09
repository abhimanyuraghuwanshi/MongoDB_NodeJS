import "../config/mongofile.js";
import userschema from "../model/schema/userSchemaFile.js";
import response from "../sharedModule/response.js";
import * as statusCode from "../sharedModule/statusCode.json" assert { type: "json" };

export var checkUser = async (req, res, next) => {
  try {
    let userDetails = {
      email: req.body.email,
      password: req.body.password,
    };
    let userlist = await userschema.findOne(userDetails, { password: 0 });
    if (typeof userlist === "object" && userlist != null) {
      userDetails = { ...userDetails, role: req.body.role };
      let userlist = await userschema.findOne(userDetails, { password: 0 });
      if (typeof userlist === "object" && userlist != null) {
        req.body.userlist = userlist;
        next();
      } else {
        res.send(
          response(
            statusCode.default.Early_Hints,
            false,
            "Role according to username does not match"
          )
        );
      }
    } else {
      res.send(
        response(
          statusCode.default.Early_Hints,
          false,
          "Username or password does not match"
        )
      );
    }
  } catch (error) {
    res.send(response());
  }
};
