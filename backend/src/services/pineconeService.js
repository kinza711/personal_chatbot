import { index } from "../config/pinconeapi.js";

// to retrive relevent data from pinecone memory
export const queryPinecone = async (embedding) => {
  // question vector embedding paseed to pincone service (embedding)
  const result = await index.query({
    vector: embedding,
    topK: 2,
    includeMetadata: true,
    //includeValues: true,
  });

  return result.matches.map((match) => match.metadata.text).join("\n\n");
};
