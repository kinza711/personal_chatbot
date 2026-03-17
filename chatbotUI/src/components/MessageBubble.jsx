export default function MessageBubble({ message }) {
  const isUser = message.type === "user";
  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
      <div
        className={`max-w-[85%] p-3 rounded-2xl shadow-sm text-sm ${
          isUser
            ? "bg-[#3bb6c9] text-white rounded-tr-none shadow-md"
            : "bg-white text-slate-700 rounded-tl-none border border-slate-100"
        }`}
      >
        {message.text}
      </div>
      <span
        className={`text-[10px] text-slate-400 mt-1 ${isUser ? "mr-1" : "ml-1"}`}
      >
        {message.time}
      </span>
    </div>
  );
}
