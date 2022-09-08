import express, { application, json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4444;
app.use(express.json);
app.use(cors());

const start = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB IS OK !");
      })
      .catch((error) => {
        console.log(error);
      });
    app.listen(PORT, () => {
      console.log("Server started on " + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

app.get("/get", (req, res) => {res.send("HELLO !")})

start();
