import { useState } from "react";
import { IoIosSend } from "react-icons/io";

export default function ChatInput({ sendMessage }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    sendMessage(input);
    setInput("");
  };

  return (
    <footer className="p-4 bg-white/60 border-t border-slate-200/50">
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Know about kinza..."
          className="flex-1 bg-[#e9fafb] border-slate-200 rounded-xl text-sm px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-slate-400"
        />
        <button
          className="bg-[#295dc4] hover:bg-[#10398b] text-white p-2.5 rounded-xl transition-all shadow-lg shadow-indigo-200 active:scale-95"
          type="submit"
        >
          <IoIosSend />
        </button>
      </form>
      <p className="text-center text-[9px] text-slate-400 mt-3 uppercase tracking-wider font-medium">
        Powered by Kinza
      </p>
    </footer>
  );
}
