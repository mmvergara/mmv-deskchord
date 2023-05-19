import { LoginUser } from "@controllers/AuthController.js";
import express from "express";

export default (router: express.Router) => {
  router.post("/auth/login", LoginUser);
  router.put("/auth/register", LoginUser);
};
