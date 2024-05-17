import express from "express";

import { getAllUser, getUser, addUser, updateUser, deleteUser } from "../controller/admin.controller.js";

/** initiate object that instance of express */
const app = express();
/** allow to read 'request' with json type */
app.use(express.json());

const Router = express.Router();

Router.get("/getAll", getAllUser);
Router.get("/getUser/:id", getUser);
Router.post("/addUser", addUser);
Router.put("/updateUser/:id", updateUser);
Router.delete("/deleteUser/:id", deleteUser);

export default Router;
