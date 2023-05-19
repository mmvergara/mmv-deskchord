import { createUser } from "../controllers/UserController.js";
import express from "express";

export default (router: express.Router) => {
  router.post("/user/create", createUser);
};
