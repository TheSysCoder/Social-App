// import all global packages
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
const app = express();

//  import routers
import postRoutes from "./routes/posts.routes.js";
// setup morgan dev
app.use(morgan("dev"));

// configure body parser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
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

// connect ot DB
const dbURL =
  "mongodb://" +
  process.env.DB_URL +
  ":" +
  process.env.DB_PORT +
  "/" +
  process.env.DB_NAME;
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(process.env.API_PORT, (err) => {
      if (err) {
        console.error("Oops!! Something is wrong", err.message);
      } else {
        console.log(`Server is runnin on ${process.env.API_PORT}`);
      }
    });
  })
  .catch((err) => {
    console.error(
      "Something is wrong could not connect to database.",
      err.message
    );
    process.exit();
  });
// call the routers
app.use("/posts", postRoutes);
