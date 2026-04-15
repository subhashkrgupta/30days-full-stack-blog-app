import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { MessageCircle, X, Send, Loader2, Bot, User } from "lucide-react";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.GROQ_API_KEY, // Ya jo bhi API key aap use kar rahe hain
    baseURL: "https://api.groq.com/openai/v1" // Agar Llama3 (Groq) use kar rahe hain
});


const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { sender: "bot", text: "Hi! I am your AI assistant. How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever chat updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { sender: "user", text: message };
    setChat((prev) => [...prev, userMessage]);
    setMessage(""); // Message input ko jaldi clear karne ke liye
    setIsLoading(true);

    // API call me error handling add ki hai
    try {
      // Apne backend ka complete URL use karein
      const res = await axios.post("http://localhost:3000/api/chat", {
        prompt: message, // Backend 'prompt' expect kar raha hai
      });

      const botMessage = { sender: "bot", text: res.data.data };
      setChat((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat API Error:", error);
      setChat((prev) => [...prev, { sender: "bot", text: "Oops! API error, please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-gray-900 w-80 md:w-96 h-[30rem] rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-gray-800 mb-4 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
            <h3 className="font-semibold flex items-center gap-2">
              <Bot size={20} /> AI Assistant
            </h3>
            <button onClick={() => setIsOpen(false)} className="hover:bg-indigo-700 p-1.5 rounded-md transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800/30">
            {chat.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${msg.sender === "user" ? "bg-indigo-600 text-white rounded-tr-none" : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-600 rounded-tl-none"}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-2xl rounded-tl-none px-4 py-2 shadow-sm">
                  <Loader2 className="w-5 h-5 animate-spin text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              disabled={isLoading}
            />
            <button 
              onClick={sendMessage} 
              disabled={isLoading || !message.trim()}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white p-2.5 rounded-full transition-colors flex items-center justify-center"
            >
              <Send size={18} className="ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-105 flex items-center justify-center animate-bounce-short"
        >
          <MessageCircle size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;