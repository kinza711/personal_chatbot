// import { useState, useEffect, useRef } from "react";
// import MessageBubble from "./MessageBubble";
// import ChatInput from "./ChatInput";
// import { useChat } from "../hooks/useChat";
// import { IoCloseSharp } from "react-icons/io5";
// import Kinza from "/kinza.jpg";

// export default function ChatWindow() {
//   const { messages, sendMessage } = useChat();
//   const chatEndRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false); // toggle state

//   useEffect(() => {
//     if (isOpen) chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, isOpen]);

//   return (
//     <>
//       {/* Chat Icon */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-20  right-16 overflow-hidden border-2 border-[#1c919d] w-14 h-14 rounded-full bg-[#295dc4] text-white flex items-center justify-center shadow-2xl hover:bg-[#10398b] transition-all"
//         >
//           <img src={Kinza} alt="" size={28} />
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-6 right-6 w-80 sm:w-96 flex flex-col shadow-2xl rounded-2xl overflow-hidden animate-slide-up glass-effect">
//           {/* Header */}
//           <header className="bg-gradient-to-r from-[#1e609d] to-[#2097a7] via-[#036d68] p-4 flex items-center justify-between text-white">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 overflow-hidden rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
//                 <img src={Kinza} alt="pic" />
//               </div>
//               <div>
//                 <h2 className="font-semibold text-sm">Aura Mini</h2>
//                 <p className="text-[10px] text-indigo-100 opacity-80">
//                   Kinza's AI Assistant • Online
//                 </p>
//               </div>
//             </div>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="hover:bg-white/10 p-1.5 bg-[#10398B] rounded-xl transition-colors"
//             >
//               <IoCloseSharp />
//             </button>
//           </header>

//           {/* Chat history */}
//           <main className="h-60 overflow-y-auto p-4 space-y-5 bg-white/40">
//             {messages.map((msg, i) => (
//               <MessageBubble key={i} message={msg} />
//             ))}
//             <div ref={chatEndRef} />
//           </main>

//           {/* Input area */}
//           <ChatInput sendMessage={sendMessage} />
//         </div>
//       )}
//     </>
//   );
// }

import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import { useChat } from "../hooks/useChat";

export default function ChatWindow() {
  const { messages, sendMessage } = useChat();
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom whenever a new message is added
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 w-80 sm:w-96 flex flex-col shadow-2xl rounded-2xl overflow-hidden glass-effect">
      {/* Chat history */}
      <main className="h-60 overflow-y-auto p-4 space-y-4 bg-white/40">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}
        <div ref={chatEndRef} />
      </main>

      {/* Input area */}
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}
