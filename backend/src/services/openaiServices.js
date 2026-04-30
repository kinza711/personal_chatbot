import OpenAI from "openai";
import dotenv from "dotenv";
import { openai } from "../config/openai.js";

dotenv.config();

// create service to genareate ai response
export const generateAIresponse = async (question, context) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are Kinza's personal assistant.

Rules:
- Answer in 1-2 short sentences only.
- Maximum 40 words.
- Be clear, direct, and to the point.
- No long explanations.
- No extra details unless asked.
- Keep a warm, slightly friendly tone.

Use this information to answer:
${context}`,
      },
      {
        role: "user",
        content: `${question} (Answer briefly in 1-2 sentences only)`,
      },
    ],
  });
  return response.choices[0].message.content;
  //return "your chatbot is working kinza good news";
};
