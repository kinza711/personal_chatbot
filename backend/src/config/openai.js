import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
//dotenv.config({ path: "../../.env" });

// carete openai client object , to connect backend to openai server

export const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});
