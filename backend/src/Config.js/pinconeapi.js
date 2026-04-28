import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

export const pincon = new openai({
  apiKey: process.env.PINCON_API_KEY,
});
