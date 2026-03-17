import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

// carete openai client object , to connect backend to openai server

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

// create service to genareate ai response
export const generateAIresponse = async (question, context) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `you are a kinza's personal assistant.
        answer questions using this information ${context}`,
      },
      {
        role: "user",
        content: question,
      },
    ],
  });
  return response.choices[0].message.content;
  //return "your chatbot is working kinza good news";
};
