import dotenv from "dotenv";
import { Pinecone } from "@pinecone-database/pinecone";

dotenv.config();
//dotenv.config({ path: "../../.env" });

console.log("PINECONE KEY:", process.env.PINECONE_API_KEY);

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});
export const index = pc.index(
  "personal-chatbot",
  "https://personal-chatbot-vx4lmth.svc.aped-4627-b74a.pinecone.io",
);
