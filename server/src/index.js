import express, { json } from "express";
import cors from "cors";
import { DB, PORT } from "./constants";
import mongoose from "mongoose";
import passport from "passport";

import { UserRouter } from "./apis";

const app = express();

app.use(cors());
app.use(json());
app.use(passport.initialize());

app.use("/users", UserRouter);

const main = async () => {
  try {
    await mongoose.connect(DB);
    console.log(`Database Connected...`);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.log("UNABLE TO START SERVER", err);
  }
};

export default main;
