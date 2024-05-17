import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import UserRoute from "./route/admin.route.js";

dotenv.config();

const port = 2000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.use(UserRoute);

app.listen(port, () => {
  console.log(`Server runs on port ${port}`);
});
