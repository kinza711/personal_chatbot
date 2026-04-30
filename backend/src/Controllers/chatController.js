import { generateEmbedding } from "../services/embeddingServices.js";
import { generateAIresponse } from "../services/openaiServices.js";
import { searchContext } from "../utils/searchContext.js";

// carete logic function

export const chatWithAI = async (req, res) => {
  try {
    const { question } = req.body; // get user question
    //const start = Date.now();
    const questionEmbedding = await generateEmbedding(question); // carete vector or embeddig
    //console.log("⏱ embedding time:", Date.now() - start, "ms");
    const context = await searchContext(questionEmbedding); //find  context from data
    const aiResponse = await generateAIresponse(question, context); // genearte res

    res.status(200).json({
      message: "Response created successfully",
      data: aiResponse,
    });
  } catch (err) {
    console.log(err, "chat not generated");
    res.status(500).json({
      message: "server error",
      error: err.message,
    });
  }
};
