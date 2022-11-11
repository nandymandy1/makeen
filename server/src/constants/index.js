import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const DB = process.env.DATABASE;
