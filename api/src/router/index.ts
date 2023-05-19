import { Router } from "express";
import UserRoutes from "./UserRoutes.js";

const router = Router();

export default (): Router => {
  UserRoutes(router);
  return router;
};
