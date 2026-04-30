// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export const searchContext = async () => {
//   const datapath = path.join(__dirname, "../data"); // src/data folder

//   const files = fs.readdirSync(datapath);

//   let combinedText = "";
//   files.forEach((file) => {
//     const content = fs.readFileSync(path.join(datapath, file), "utf-8");
//     combinedText += content + "\n";
//   });

//   return combinedText;
// };

//----------------- to req pincone to find data -------------------

import { queryPinecone } from "../services/pineconeService.js";

// to request pincoe to seacrch relevt data after embedding user query from vector db

export const searchContext = async (questionEmbedding) => {
  try {
    const context = await queryPinecone(questionEmbedding);
    return context || "No relevant context found.";
  } catch (error) {
    console.error("Error fetching context:", error);
    return "Context unavailable.";
  }
};
