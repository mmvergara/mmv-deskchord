import { Schema, Repository, Entity } from "redis-om";
import redisClient from "../db/RedisClient.js";

class User extends Entity {
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
}
export const UserSchema = new Schema(
  User,
  {
    username: { type: "string" },
    password: { type: "string" },
    email: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
);

export const userRepository = redisClient.fetchRepository(UserSchema);
