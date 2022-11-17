// import all global packages
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser, { json } from "body-parser";
import dotenv from "dotenv";

const app = express();

// configure body parser
app.use(bodyParser, json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// config dotenv
dotenv.config({
  path: "./config.env",
});

// configure CORS

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  })
);

// listen app

app.listen(process.env.API_PORT, (err) => {
  if (err) {
    console.error("Oops, Something went wrong, please check and try again!!");
    process.exit();
  } else {
    console.log(`Awesome!! Server is started . . . `);
  }
});
