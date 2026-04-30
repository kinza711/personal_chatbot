// controllers/adminController.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { openai } from "../config/openai.js";
import { index } from "../config/pinconeapi.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const uploadDataToPinecone = async (req, res) => {
  try {
    const dataPath = path.join(__dirname, "../data");
    const files = fs.readdirSync(dataPath);

    for (const file of files) {
      const content = fs.readFileSync(path.join(dataPath, file), "utf-8");

      // Chunks banao
      const words = content.split(" ");
      const chunks = [];
      // divide data into chunks
      for (let i = 0; i < words.length; i += 200) {
        //token rage should be 200-400
        chunks.push(words.slice(i, i + 200).join(" "));
      }

      const docName = file.replace(".txt", "");

      // create embedding from chunks
      for (let i = 0; i < chunks.length; i++) {
        const embeddingRes = await openai.embeddings.create({
          model: "text-embedding-3-small",
          input: chunks[i], //data vectors
        });

        // vector stors to vector db
        await index.upsert([
          {
            id: `${docName}_chunk_${i}`,
            values: embeddingRes.data[0].embedding,
            metadata: {
              text: chunks[i],
              source: file,
              chunkIndex: i,
              createdAt: Date.now(),
              date: new Date().toLocaleString(),
            },
          },
        ]);
      }
    }

    res.status(200).json({
      message: "✅ Data successfully uploaded to Pinecone!",
    });
  } catch (err) {
    res.status(500).json({
      message: "Upload failed",
      error: err.message,
    });
  }
};
