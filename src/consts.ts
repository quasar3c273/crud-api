import {UserInterface} from "./types/User";
import {env} from "process";
import dotenv from "dotenv";

dotenv.config();

export const users: Array<UserInterface> = [];
export const port = env.PORT || 3000;
export const host = env.HOST || 'localhost';