// // // import { useState, useRef, useEffect } from "react";
// // // import { useForm } from "react-hook-form";
// // // import axiosClient from "../utils/axiosClient";
// // // import { Send } from 'lucide-react';

// // // function ChatAi({problem}) {
// // //     const [messages, setMessages] = useState([
// // //         { role: 'model', parts:[{text: "Hi, How are you"}]},
// // //         { role: 'user', parts:[{text: "I am Good"}]}
// // //     ]);

// // //     const { register, handleSubmit, reset,formState: {errors} } = useForm();
// // //     const messagesEndRef = useRef(null);

// // //     useEffect(() => {
// // //         messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //     }, [messages]);

// // //     const onSubmit = async (data) => {
        
// // //         setMessages(prev => [...prev, { role: 'user', parts:[{text: data.message}] }]);
// // //         reset();

// // //         try {
            
// // //             const response = await axiosClient.post("/ai/chat", {
// // //                 messages:messages,
// // //                 title:problem.title,
// // //                 description:problem.description,
// // //                 testCases: problem.visibleTestCases,
// // //                 startCode:problem.startCode
// // //             });

           
// // //             setMessages(prev => [...prev, { 
// // //                 role: 'model', 
// // //                 parts:[{text: response.data.message}] 
// // //             }]);
// // //         } catch (error) {
// // //             console.error("API Error:", error);
// // //             setMessages(prev => [...prev, { 
// // //                 role: 'model', 
// // //                 parts:[{text: "Error from AI Chatbot"}]
// // //             }]);
// // //         }
// // //     };

// // //     return (
// // //         <div className="flex flex-col h-screen max-h-[80vh] min-h-[500px]">
// // //             <div className="flex-1 overflow-y-auto p-4 space-y-4">
// // //                 {messages.map((msg, index) => (
// // //                     <div 
// // //                         key={index} 
// // //                         className={`chat ${msg.role === "user" ? "chat-end" : "chat-start"}`}
// // //                     >
// // //                         <div className="chat-bubble bg-base-200 text-base-content">
// // //                             {msg.parts[0].text}
// // //                         </div>
// // //                     </div>
// // //                 ))}
// // //                 <div ref={messagesEndRef} />
// // //             </div>
// // //             <form 
// // //                 onSubmit={handleSubmit(onSubmit)} 
// // //                 className="sticky bottom-0 p-4 bg-base-100 border-t"
// // //             >
// // //                 <div className="flex items-center">
// // //                     <input 
// // //                         placeholder="Ask me anything" 
// // //                         className="input input-bordered flex-1" 
// // //                         {...register("message", { required: true, minLength: 2 })}
// // //                     />
// // //                     <button 
// // //                         type="submit" 
// // //                         className="btn btn-ghost ml-2"
// // //                         disabled={errors.message}
// // //                     >
// // //                         <Send size={20} />
// // //                     </button>
// // //                 </div>
// // //             </form>
// // //         </div>
// // //     );
// // // }

// // // export default ChatAi;

// // // import { useState, useRef, useEffect } from "react";
// // // import { useForm } from "react-hook-form";
// // // import axiosClient from "../utils/axiosClient";
// // // import { Send } from "lucide-react";
// // // import { motion } from "framer-motion";

// // // function ChatAi({ problem }) {
// // //   const [messages, setMessages] = useState([
// // //     { role: "model", parts: [{ text: "Hi, How are you?" }] },
// // //     { role: "user", parts: [{ text: "I am Good" }] },
// // //   ]);
// // //   const [typingMessage, setTypingMessage] = useState(""); // for animated typing

// // //   const { register, handleSubmit, reset, formState: { errors } } = useForm();
// // //   const messagesEndRef = useRef(null);

// // //   useEffect(() => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [messages, typingMessage]);

// // //   // Typing animation function
// // //   const animateText = (text) => {
// // //     setTypingMessage("");
// // //     let i = 0;
// // //     const interval = setInterval(() => {
// // //       setTypingMessage((prev) => prev + text[i]);
// // //       i++;
// // //       if (i >= text.length) clearInterval(interval);
// // //     }, 30); // speed of animation
// // //   };

// // //   const onSubmit = async (data) => {
// // //     setMessages((prev) => [...prev, { role: "user", parts: [{ text: data.message }] }]);
// // //     reset();

// // //     try {
// // //       const response = await axiosClient.post("/ai/chat", {
// // //         messages: messages,
// // //         title: problem.title,
// // //         description: problem.description,
// // //         testCases: problem.visibleTestCases,
// // //         startCode: problem.startCode,
// // //       });

// // //       // Instead of adding full text instantly → animate it
// // //       animateText(response.data.message);

// // //       setMessages((prev) => [...prev, { role: "model", parts: [{ text: "" }] }]); 
// // //     } catch (error) {
// // //       console.error("API Error:", error);
// // //       setMessages((prev) => [
// // //         ...prev,
// // //         { role: "model", parts: [{ text: "⚠️ Error from AI Chatbot" }] },
// // //       ]);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (typingMessage && messages[messages.length - 1]?.role === "model") {
// // //       setMessages((prev) => {
// // //         const updated = [...prev];
// // //         updated[updated.length - 1] = {
// // //           ...updated[updated.length - 1],
// // //           parts: [{ text: typingMessage }],
// // //         };
// // //         return updated;
// // //       });
// // //     }
// // //   }, [typingMessage]);

// // //   return (
// // //     <div className="flex flex-col h-screen max-h-[80vh] min-h-[500px] bg-base-100 rounded-2xl shadow-lg overflow-hidden">
// // //       {/* Chat Area */}
// // //       <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-base-200 to-base-100">
// // //         {messages.map((msg, index) => (
// // //           <motion.div
// // //             key={index}
// // //             initial={{ opacity: 0, y: 5 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.3 }}
// // //             className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
// // //           >
// // //             <div
// // //               className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl shadow ${
// // //                 msg.role === "user"
// // //                   ? "bg-primary text-primary-content rounded-br-none"
// // //                   : "bg-base-200 text-base-content rounded-bl-none"
// // //               }`}
// // //             >
// // //               {msg.parts[0].text}
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //         <div ref={messagesEndRef} />
// // //       </div>

// // //       {/* Input Box */}
// // //       <form
// // //         onSubmit={handleSubmit(onSubmit)}
// // //         className="p-4 bg-base-100 border-t flex items-center gap-3"
// // //       >
// // //         <input
// // //           placeholder="Ask me anything..."
// // //           className="input input-bordered flex-1 rounded-full px-4"
// // //           {...register("message", { required: true, minLength: 2 })}
// // //         />
// // //         <button
// // //           type="submit"
// // //           className="btn btn-primary rounded-full shadow-md"
// // //           disabled={errors.message}
// // //         >
// // //           <Send size={20} />
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default ChatAi;

// // // import { useState, useRef, useEffect } from "react";
// // // import { useForm } from "react-hook-form";
// // // import axiosClient from "../utils/axiosClient";
// // // import { Send } from "lucide-react";
// // // import { motion } from "framer-motion";
// // // import ReactMarkdown from "react-markdown";
// // // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // // import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// // // function ChatAi({ problem }) {
// // //   const [messages, setMessages] = useState([
// // //     { role: "model", parts: [{ text: "Hi, How are you?" }] },
// // //     { role: "user", parts: [{ text: "I am Good" }] },
// // //   ]);
// // //   const [typingMessage, setTypingMessage] = useState(""); // for typing animation

// // //   const { register, handleSubmit, reset, formState: { errors } } = useForm();
// // //   const messagesEndRef = useRef(null);

// // //   useEffect(() => {
// // //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // //   }, [messages, typingMessage]);

// // //   // Typing animation
// // //   const animateText = (text) => {
// // //     setTypingMessage("");
// // //     let i = 0;
// // //     const interval = setInterval(() => {
// // //       setTypingMessage((prev) => prev + text[i]);
// // //       i++;
// // //       if (i >= text.length) clearInterval(interval);
// // //     }, 20);
// // //   };

// // //   const onSubmit = async (data) => {
// // //     setMessages((prev) => [...prev, { role: "user", parts: [{ text: data.message }] }]);
// // //     reset();

// // //     try {
// // //       const response = await axiosClient.post("/ai/chat", {
// // //         messages: messages,
// // //         title: problem.title,
// // //         description: problem.description,
// // //         testCases: problem.visibleTestCases,
// // //         startCode: problem.startCode,
// // //       });

// // //       animateText(response.data.message);

// // //       setMessages((prev) => [...prev, { role: "model", parts: [{ text: "" }] }]);
// // //     } catch (error) {
// // //       console.error("API Error:", error);
// // //       setMessages((prev) => [
// // //         ...prev,
// // //         { role: "model", parts: [{ text: "⚠️ Error from AI Chatbot" }] },
// // //       ]);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (typingMessage && messages[messages.length - 1]?.role === "model") {
// // //       setMessages((prev) => {
// // //         const updated = [...prev];
// // //         updated[updated.length - 1] = {
// // //           ...updated[updated.length - 1],
// // //           parts: [{ text: typingMessage }],
// // //         };
// // //         return updated;
// // //       });
// // //     }
// // //   }, [typingMessage]);

// // //   return (
// // //     <div className="flex flex-col h-screen max-h-[80vh] min-h-[500px] bg-base-100 rounded-2xl shadow-lg overflow-hidden">
// // //       {/* Chat Messages */}
// // //       <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-base-200 to-base-100">
// // //         {messages.map((msg, index) => (
// // //           <motion.div
// // //             key={index}
// // //             initial={{ opacity: 0, y: 5 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.1 }}
// // //             className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
// // //           >
// // //             <div
// // //               className={`max-w-xl px-4 py-3 rounded-2xl shadow text-sm md:text-base whitespace-pre-wrap ${
// // //                 msg.role === "user"
// // //                   ? "bg-primary text-primary-content rounded-br-none"
// // //                   : "bg-base-200 text-base-content rounded-bl-none"
// // //               }`}
// // //             >
// // //               {/* Render Markdown with Code Blocks */}
// // //               <ReactMarkdown
// // //                 children={msg.parts[0].text}
// // //                 components={{
// // //                   code({ inline, className, children, ...props }) {
// // //                     const match = /language-(\w+)/.exec(className || "");
// // //                     return !inline && match ? (
// // //                       <SyntaxHighlighter
// // //                         style={oneDark}
// // //                         language={match[1]}
// // //                         PreTag="div"
// // //                         className="rounded-lg my-2 "
// // //                         {...props}
// // //                       >
// // //                         {String(children).replace(/\n$/, "")}
// // //                       </SyntaxHighlighter>
// // //                     ) : (
// // //                       <code className="bg-gray-800 px-1 rounded" {...props}>
// // //                         {children}
// // //                       </code>
// // //                     );
// // //                   },
// // //                 }}
// // //               />
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //         <div ref={messagesEndRef} />
// // //       </div>

// // //       {/* Input */}
// // //       <form
// // //         onSubmit={handleSubmit(onSubmit)}
// // //         className="p-4 bg-base-100 border-t flex items-center gap-3"
// // //       >
// // //         <input
// // //           placeholder="Ask me anything..."
// // //           className="input input-bordered flex-1 rounded-full px-4"
// // //           {...register("message", { required: true, minLength: 2 })}
// // //         />
// // //         <button
// // //           type="submit"
// // //           className="btn btn-primary rounded-full shadow-md"
// // //           disabled={errors.message}
// // //         >
// // //           <Send size={20} />
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default ChatAi;



// // import { useState, useRef, useEffect } from "react";
// // import { useForm } from "react-hook-form";
// // import axiosClient from "../utils/axiosClient";
// // import { Send } from "lucide-react";
// // import { motion } from "framer-motion";
// // import ReactMarkdown from "react-markdown";
// // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// // function ChatAi({ problem }) {
// //   const [messages, setMessages] = useState([
// //     { role: "model", parts: [{ text: "Hi, How can help you" }] },
// //     { role: "user", parts: [{ text: "I am Good" }] },
// //   ]);
// //   const [typingMessage, setTypingMessage] = useState("");
// //   const [autoScroll, setAutoScroll] = useState(true);

// //   const { register, handleSubmit, reset, formState: { errors } } = useForm();
// //   const messagesEndRef = useRef(null);
// //   const chatContainerRef = useRef(null);

// //   // Detect scroll position
// //   const handleScroll = () => {
// //     const el = chatContainerRef.current;
// //     if (!el) return;
// //     const isAtBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 50;
// //     setAutoScroll(isAtBottom);
// //   };

// //   useEffect(() => {
// //     if (autoScroll) {
// //       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //     }
// //   }, [messages, typingMessage, autoScroll]);

// //   // 🔥 Typing animation with instant code rendering
// //   const animateText = (text) => {
// //     const codeBlockRegex = /```([\s\S]*?)```/g;
// //     const parts = [];
// //     let lastIndex = 0;
// //     let match;

// //     while ((match = codeBlockRegex.exec(text)) !== null) {
// //       if (match.index > lastIndex) {
// //         parts.push({ type: "text", content: text.slice(lastIndex, match.index) });
// //       }
// //       parts.push({ type: "code", content: match[1] });
// //       lastIndex = codeBlockRegex.lastIndex;
// //     }
// //     if (lastIndex < text.length) {
// //       parts.push({ type: "text", content: text.slice(lastIndex) });
// //     }

// //     let i = 0;
// //     const printNextPart = () => {
// //       if (i >= parts.length) return;
// //       const part = parts[i];

// //       if (part.type === "text") {
// //         let j = 0;
// //         const interval = setInterval(() => {
// //           setTypingMessage((prev) => prev + part.content[j]);
// //           j++;
// //           if (j >= part.content.length) {
// //             clearInterval(interval);
// //             i++;
// //             printNextPart();
// //           }
// //         }, 5); // fast typing
// //       } else if (part.type === "code") {
// //         setTypingMessage((prev) => prev + "\n```" + part.content + "```\n");
// //         i++;
// //         printNextPart();
// //       }
// //     };

// //     setTypingMessage("");
// //     printNextPart();
// //   };

// //   const onSubmit = async (data) => {
// //     setMessages((prev) => [...prev, { role: "user", parts: [{ text: data.message }] }]);
// //     reset();

// //     try {
// //       const response = await axiosClient.post("/ai/chat", {
// //         messages: messages,
// //         title: problem.title,
// //         description: problem.description,
// //         testCases: problem.visibleTestCases,
// //         startCode: problem.startCode,
// //       });

// //       animateText(response.data.message);

// //       setMessages((prev) => [...prev, { role: "model", parts: [{ text: "" }] }]);
// //     } catch (error) {
// //       console.error("API Error:", error);
// //       setMessages((prev) => [
// //         ...prev,
// //         { role: "model", parts: [{ text: "⚠️ Error from AI Chatbot" }] },
// //       ]);
// //     }
// //   };

// //   useEffect(() => {
// //     if (typingMessage && messages[messages.length - 1]?.role === "model") {
// //       setMessages((prev) => {
// //         const updated = [...prev];
// //         updated[updated.length - 1] = {
// //           ...updated[updated.length - 1],
// //           parts: [{ text: typingMessage }],
// //         };
// //         return updated;
// //       });
// //     }
// //   }, [typingMessage]);

// //   return (
// //     <div className="flex flex-col h-screen max-h-[80vh] min-h-[500px] bg-base-100 rounded-2xl shadow-lg overflow-hidden">
// //       {/* Chat Messages */}
// //       <div
// //         ref={chatContainerRef}
// //         onScroll={handleScroll}
// //         className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-base-200 to-base-100"
// //       >
// //         {messages.map((msg, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 5 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.1 }}
// //             className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
// //           >
// //             <div
// //               className={`max-w-xl px-4 py-3 rounded-2xl shadow text-sm md:text-base whitespace-pre-wrap ${
// //                 msg.role === "user"
// //                   ? "bg-primary text-primary-content rounded-br-none"
// //                   : "bg-base-200 text-base-content rounded-bl-none"
// //               }`}
// //             >
// //               <ReactMarkdown
// //                 children={msg.parts[0].text}
// //                 components={{
// //                   code({ inline, className, children, ...props }) {
// //                     const match = /language-(\w+)/.exec(className || "");
// //                     return !inline && match ? (
// //                       <SyntaxHighlighter
// //                         style={oneDark}
// //                         language={match[1]}
// //                         PreTag="div"
// //                         className="rounded-lg my-2"
// //                         {...props}
// //                       >
// //                         {String(children).replace(/\n$/, "")}
// //                       </SyntaxHighlighter>
// //                     ) : (
// //                       <code className="bg-gray-800 px-1 rounded" {...props}>
// //                         {children}
// //                       </code>
// //                     );
// //                   },
// //                 }}
// //               />
// //             </div>
// //           </motion.div>
// //         ))}
// //         <div ref={messagesEndRef} />
// //       </div>

// //       {/* Input */}
// //       <form
// //         onSubmit={handleSubmit(onSubmit)}
// //         className="p-4 bg-base-100 border-t flex items-center gap-3"
// //       >
// //         <input
// //           placeholder="Ask me anything..."
// //           className="input input-bordered flex-1 rounded-full px-4"
// //           {...register("message", { required: true, minLength: 2 })}
// //         />
// //         <button
// //           type="submit"
// //           className="btn btn-primary rounded-full shadow-md"
// //           disabled={errors.message}
// //         >
// //           <Send size={20} />
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default ChatAi;


// import { useState, useRef, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import axiosClient from "../utils/axiosClient";
// import { Send } from "lucide-react";
// import { motion } from "framer-motion";
// import ReactMarkdown from "react-markdown";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// function ChatAi({ problem }) {
//   const [messages, setMessages] = useState([
//     { role: "model", parts: [{ text: "👋 Hi! How can I help you with DSA today?" }] },
//   ]);
//   const [typingMessage, setTypingMessage] = useState("");
//   const [autoScroll, setAutoScroll] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const messagesEndRef = useRef(null);
//   const chatContainerRef = useRef(null);

//   // Detect scroll position
//   const handleScroll = () => {
//     const el = chatContainerRef.current;
//     if (!el) return;
//     const isAtBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 50;
//     setAutoScroll(isAtBottom);
//   };

//   useEffect(() => {
//     if (autoScroll) {
//       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages, typingMessage, autoScroll]);

//   // 🔥 Typing animation with instant code rendering
//   const animateText = (text) => {
//     const codeBlockRegex = /```([\s\S]*?)```/g;
//     const parts = [];
//     let lastIndex = 0;
//     let match;

//     while ((match = codeBlockRegex.exec(text)) !== null) {
//       if (match.index > lastIndex) {
//         parts.push({ type: "text", content: text.slice(lastIndex, match.index) });
//       }
//       parts.push({ type: "code", content: match[1] });
//       lastIndex = codeBlockRegex.lastIndex;
//     }
//     if (lastIndex < text.length) {
//       parts.push({ type: "text", content: text.slice(lastIndex) });
//     }

//     let i = 0;
//     const printNextPart = () => {
//       if (i >= parts.length) return;
//       const part = parts[i];

//       if (part.type === "text") {
//         let j = 0;
//         const interval = setInterval(() => {
//           setTypingMessage((prev) => prev + part.content[j]);
//           j++;
//           if (j >= part.content.length) {
//             clearInterval(interval);
//             i++;
//             printNextPart();
//           }
//         }, 5); // fast typing
//       } else if (part.type === "code") {
//         setTypingMessage((prev) => prev + "\n```" + part.content + "```\n");
//         i++;
//         printNextPart();
//       }
//     };

//     setTypingMessage("");
//     printNextPart();
//   };

//   const onSubmit = async (data) => {
//     setMessages((prev) => [...prev, { role: "user", parts: [{ text: data.message }] }]);
//     reset();
//     setLoading(true);

//     try {
//       const response = await axiosClient.post("/ai/chat", {
//         messages: messages,
//         title: problem.title,
//         description: problem.description,
//         testCases: problem.visibleTestCases,
//         startCode: problem.startCode,
//       });

//       animateText(response.data.message);

//       setMessages((prev) => [...prev, { role: "model", parts: [{ text: "" }] }]);
//     } catch (error) {
//       console.error("API Error:", error);

//       let errorMsg = "⚠️ Error from AI Chatbot";
//       if (error.response?.status === 503) {
//         errorMsg = "⚠️ Server busy (503). Please try again later.";
//       }

//       setMessages((prev) => [
//         ...prev,
//         { role: "model", parts: [{ text: errorMsg }] },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (typingMessage && messages[messages.length - 1]?.role === "model") {
//       setMessages((prev) => {
//         const updated = [...prev];
//         updated[updated.length - 1] = {
//           ...updated[updated.length - 1],
//           parts: [{ text: typingMessage }],
//         };
//         return updated;
//       });
//     }
//   }, [typingMessage]);

//   return (
//     <div className="flex flex-col h-screen max-h-[80vh] min-h-[500px] bg-base-100 rounded-2xl shadow-lg overflow-hidden">
//       {/* Chat Messages */}
//       <div
//         ref={chatContainerRef}
//         onScroll={handleScroll}
//         className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-base-200 to-base-100"
//       >
//         {messages.map((msg, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 5 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.1 }}
//             className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//           >
//             <div
//               className={`max-w-xl px-4 py-3 rounded-2xl shadow text-sm md:text-base whitespace-pre-wrap ${
//                 msg.role === "user"
//                   ? "bg-primary text-primary-content rounded-br-none"
//                   : "bg-base-200 text-base-content rounded-bl-none"
//               }`}
//             >
//               <ReactMarkdown
//                 children={msg.parts[0].text}
//                 components={{
//                   code({ inline, className, children, ...props }) {
//                     const match = /language-(\w+)/.exec(className || "");
//                     return !inline && match ? (
//                       <SyntaxHighlighter
//                         style={oneDark}
//                         language={match[1]}
//                         PreTag="div"
//                         className="rounded-lg my-2"
//                         {...props}
//                       >
//                         {String(children).replace(/\n$/, "")}
//                       </SyntaxHighlighter>
//                     ) : (
//                       <code className="bg-gray-800 px-1 rounded" {...props}>
//                         {children}
//                       </code>
//                     );
//                   },
//                 }}
//               />
//             </div>
//           </motion.div>
//         ))}

//         {loading && (
//           <div className="text-center text-sm text-gray-500">⏳ Thinking...</div>
//         )}

//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input */}
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="p-4 bg-base-100 border-t flex items-center gap-3"
//       >
//         <input
//           placeholder="Ask me anything about this problem..."
//           className="input input-bordered flex-1 rounded-full px-4"
//           {...register("message", { required: true, minLength: 2 })}
//         />
//         <button
//           type="submit"
//           className="btn btn-primary rounded-full shadow-md"
//           disabled={errors.message || loading}
//         >
//           <Send size={20} />
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ChatAi;

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import axiosClient from "../utils/axiosClient";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ChatAi({ problem }) {
  const [messages, setMessages] = useState([
    { role: "model", parts: [{ text: "👋 Hi! How can I help you with DSA today?" }] },
  ]);
  const [typingMessage, setTypingMessage] = useState("");
  const [autoScroll, setAutoScroll] = useState(true);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  // Detect scroll position
  const handleScroll = () => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      const el = chatContainerRef.current;
      if (!el) return;
      
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight;
      const clientHeight = el.clientHeight;
      
      // Check if user is at the bottom (with 50px threshold)
      const isAtBottom = scrollHeight - scrollTop <= clientHeight + 50;
      setAutoScroll(isAtBottom);
    }, 100);
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "nearest"
    });
  };

  useEffect(() => {
    if (autoScroll) {
      scrollToBottom();
    }
  }, [messages, typingMessage, autoScroll]);

  // 🔥 Ultra-fast typing animation with immediate code rendering
  const animateText = (text) => {
    // Split text into parts (regular text and code blocks)
    const codeBlockRegex = /(```[\s\S]*?```)/g;
    const parts = text.split(codeBlockRegex);
    
    let currentText = "";
    let partIndex = 0;
    
    const processNextPart = () => {
      if (partIndex >= parts.length) return;
      
      const part = parts[partIndex];
      
      // Check if this part is a code block
      if (part.startsWith("```") && part.endsWith("```")) {
        // Add the complete code block immediately (no animation)
        currentText += part;
        setTypingMessage(currentText);
        partIndex++;
        
        // Process next part immediately with minimal delay
        setTimeout(processNextPart, 10);
      } else {
        // Regular text - type character by character (very fast)
        let charIndex = 0;
        const textPart = part;
        
        const typeNextChar = () => {
          if (charIndex < textPart.length) {
            currentText += textPart[charIndex];
            setTypingMessage(currentText);
            charIndex++;
            
            // Very fast typing for regular text (2ms delay)
            setTimeout(typeNextChar, 2);
          } else {
            partIndex++;
            // Minimal delay before next part
            setTimeout(processNextPart, 5);
          }
        };
        
        typeNextChar();
      }
    };
    
    setTypingMessage("");
    processNextPart();
  };

  const onSubmit = async (data) => {
    setMessages((prev) => [...prev, { role: "user", parts: [{ text: data.message }] }]);
    reset();
    setLoading(true);

    try {
      const response = await axiosClient.post("/ai/chat", {
        messages: messages,
        title: problem.title,
        description: problem.description,
        testCases: problem.visibleTestCases,
        startCode: problem.startCode,
      });

      // Add empty message for the AI response
      setMessages((prev) => [...prev, { role: "model", parts: [{ text: "" }] }]);
      
      // Start animating the response text
      animateText(response.data.message);
    } catch (error) {
      console.error("API Error:", error);

      let errorMsg = "⚠️ Error from AI Chatbot";
      if (error.response?.status === 503) {
        errorMsg = "⚠️ Server busy (503). Please try again later.";
      }

      setMessages((prev) => [
        ...prev,
        { role: "model", parts: [{ text: errorMsg }] },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typingMessage && messages[messages.length - 1]?.role === "model") {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          parts: [{ text: typingMessage }],
        };
        return updated;
      });
    }
  }, [typingMessage]);

  // Add manual scroll to bottom button
  const ScrollToBottomButton = () => {
    if (autoScroll) return null;
    
    return (
      <button
        onClick={() => {
          setAutoScroll(true);
          scrollToBottom();
        }}
        className="fixed bottom-24 right-6 btn btn-circle btn-primary btn-sm"
        aria-label="Scroll to bottom"
      >
        ↓
      </button>
    );
  };

  return (
    <div className="flex flex-col h-screen max-h-[80vh] min-h-[500px] bg-base-100 rounded-2xl shadow-lg overflow-hidden">
      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-base-200 to-base-100"
      >
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xl px-4 py-3 rounded-2xl shadow text-sm md:text-base whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-primary text-primary-content rounded-br-none"
                  : "bg-base-200 text-base-content rounded-bl-none"
              }`}
            >
              <ReactMarkdown
                children={msg.parts[0].text}
                components={{
                  code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-lg my-2"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-gray-800 px-1 rounded" {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </div>
          </motion.div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="max-w-xl px-4 py-3 rounded-2xl shadow bg-base-200 text-base-content rounded-bl-none">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="animate-pulse">⏳</div>
                Thinking...
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 bg-base-100 border-t flex items-center gap-3"
      >
        <input
          placeholder="Ask me anything about this problem..."
          className="input input-bordered flex-1 rounded-full px-4"
          {...register("message", { required: true, minLength: 2 })}
        />
        <button
          type="submit"
          className="btn btn-primary rounded-full shadow-md"
          disabled={errors.message || loading}
        >
          <Send size={20} />
        </button>
      </form>

      <ScrollToBottomButton />
    </div>
  );
}

export default ChatAi;