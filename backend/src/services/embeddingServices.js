import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

// carete openai client object , to connect backend to openai server

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

// carete function to generate embeddings

export const generateEmbedding = async (text) => {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return response.data[0].embedding;
};
