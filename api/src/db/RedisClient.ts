import { Client } from "redis-om";
import { REDIS_URL } from "../config.js";

/* create and open the Redis OM Client */
const client = await new Client().open(REDIS_URL);

export default client;
