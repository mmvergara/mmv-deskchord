import dotenv from "dotenv";
dotenv.config();
import { createClient } from "redis";

const client = createClient({
  password: "<password>",
  socket: {
    host: "redis-18159.c258.us-east-1-4.ec2.cloud.redislabs.com",
    port: 18159,
  },
});
