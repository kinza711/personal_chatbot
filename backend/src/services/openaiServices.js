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
        content: `You are Kinza's personal assistant. 
        Answer short, clearly and professionally, but add a touch of warmth and approachability. 
        Keep it polite and helpful, and use casual phrases sparingly.
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
