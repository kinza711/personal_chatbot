import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";
import { index } from "../config/pinconeapi.js";
import { openai } from "../config/openai.js";
//import { generateEmbedding } from "../services/embeddingServices.js";
//--------------***********for test pincone understanding only *******-----------------
async function run() {
  const texts = [
    "im robort ",
    "rabbit is animal",
    "fish cannot fly",
    "kinza can swim",
  ];

  // Step 1: Embeddings banao
  console.log("⏳ Generating embeddings...");
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: texts,
  });
  console.log("✅ Embeddings generated:", res.data.length);

  // Step 2: Pinecone mein store karo
  const vectors = texts.map((t, i) => ({
    id: `vec_${i}`, // data will override for same id
    //id: `vec_${Date.now()}_${i}`, // for store data each time
    values: res.data[i].embedding,
    metadata: { text: t },
  }));

  await index.upsert(vectors); // ⚠️ array directly dena hai, object nahi
  console.log("✅ Data inserted into Pinecone");

  // Step 3: Query karo
  const queryRes = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: "Who can dance?",
  });
  // query result
  const result = await index.query({
    vector: queryRes.data[0].embedding,
    topK: 1,
    includeMetadata: true,
    includeValues: true,
  });

  console.log("🔍 Query Result:", result.matches);
}

//
run();
