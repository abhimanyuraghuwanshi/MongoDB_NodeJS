import mongoose from "mongoose";

mongoose
  .connect("mongodb://15.206.186.16/neurulaHealth")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(() => {
    console.log("err in mongodb");
  });
