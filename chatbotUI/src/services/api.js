import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  //withCredentials: true,
});

// 👇 YE ADD KARNA HAI
export const sendMessageToAPI = async (message) => {
  try {
    const res = await api.post("/chat", {
      question: message,
    });

    return res.data.data; // backend se AI response
  } catch (error) {
    console.error("API Error:", error);
    return "Something went wrong...";
  }
};

export default api;
