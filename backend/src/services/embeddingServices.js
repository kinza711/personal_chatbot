import OpenAI from "openai";
import dotenv from "dotenv";
import { openai } from "../config/openai.js"; // lowercase 'config'

dotenv.config();

// carete function to generate embeddings

export const generateEmbedding = async (text) => {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text, // user query vectors
  });
  console.log("✅ Embedding created");
  return response.data[0].embedding;
};

// ----------------with cache to optimise fast response-------------

// import OpenAI from "openai";
// import dotenv from "dotenv";
// import { openai } from "../config/openai.js";
// dotenv.config();

// //  cache yahan define karo (top pe)
// const embeddingCache = new Map();

// export const generateEmbedding = async (text) => {
//   //  cache check
//   if (embeddingCache.has(text)) {
//     console.log(" Cache HIT");
//     return embeddingCache.get(text);
//   }

//   console.log(" Generating new embedding...");

//   const response = await openai.embeddings.create({
//     model: "text-embedding-3-small",
//     input: text,
//   });

//   const embedding = response.data[0].embedding;

//   // 💾 cache store
//   embeddingCache.set(text, embedding);

//   return embedding;
// };
