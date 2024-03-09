import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS.split(",").map((origin) => origin),
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

//user routing files are in folder
import userrouter from "./router/userrouter.js";
app.use("/user", userrouter);

let server = app.listen(process.env.PORT || 5029, function (err) {
  if (!err) {
    const port = server.address().port;
    console.log("Server is Successfully Running on ", port);
  } else {
    console.log("Error occurred, server can't start", err);
  }
});
