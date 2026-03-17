import { useState } from "react";
import { sendMessageToAPI } from "../services/api";

export function useChat() {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! I'm Aura kinza's personal assistant. How may I help you today?",
      time: "10:42 AM",
    },
  ]);

  const sendMessage = async (text) => {
    const timeNow = new Date().toLocaleTimeString();

    const userMessage = {
      type: "user",
      text,
      time: timeNow,
    };

    // 1️⃣ user message show karo + typing add karo
    setMessages((prev) => [
      ...prev,
      userMessage,
      { type: "bot", text: "Typing...", isTyping: true, time: "" },
    ]);

    try {
      const reply = await sendMessageToAPI(text);

      const botMessage = {
        type: "bot",
        text: reply,
        time: new Date().toLocaleTimeString(),
      };

      // 2️⃣ typing remove karo + real response add karo
      setMessages((prev) => {
        const filtered = prev.filter((msg) => !msg.isTyping);

        return [...filtered, botMessage];
      });
    } catch (error) {
      setMessages((prev) => {
        const filtered = prev.filter((msg) => !msg.isTyping);

        return [
          ...filtered,
          { type: "bot", text: "Something went wrong 😔", time: "" },
        ];
      });
      console.log(error);
    }
  };

  return { messages, sendMessage };
}
