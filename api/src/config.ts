import dotenv from "dotenv";
dotenv.config();
console.log("REDIS_PASSWORD", process.env.REDIS_PASSWORD);
if (!process.env.REDIS_PASSWORD)
  throw new Error("REDIS_PASSWORD is not defined in .env file");

if (!process.env.JWT_SECRET_KEY)
  throw new Error("JWT_SECRET_KEY is not defined in .env file");

if (!process.env.REDIS_URL)
  throw new Error("REDIS_URL is not defined in .env file");

export const PORT = process.env.PORT || "3000";
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
export const REDIS_URL = process.env.REDIS_URL;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
