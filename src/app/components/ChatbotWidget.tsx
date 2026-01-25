import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  X,
  Send,
  Loader2,
  MoreVertical,
  Paperclip,
  Smile,
  Image as ImageIcon,
  Mic,
} from "lucide-react";
import { useChatbot } from "@/app/contexts/ChatbotContext";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatbotWidget() {
  const { isOpen, openChatbot, closeChatbot, pendingMessage, clearPendingMessage } = useChatbot();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! You're speaking with RYN AI Agent.\n\nI'm well trained and ready to assist you today, but you can ask for the team at any time.\n\nHow can I help?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Handle pending message from CTA clicks
  useEffect(() => {
    if (pendingMessage && isOpen) {
      sendMessage(pendingMessage);
      clearPendingMessage();
    }
  }, [pendingMessage, isOpen]);

  // This helper turns AI markdown (**bold**) into HTML (<b>bold</b>) and detects links
  const formatMessage = (text: string) => {
    // 1. Convert **bold** to <b>bold</b>
    let formatted = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    // 2. Convert *italics* to <i>italics</i>
    formatted = formatted.replace(/\*(.*?)\*/g, "<i>$1</i>");

    // 3. Convert URLs to clickable links (opens in new tab)
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    formatted = formatted.replace(urlRegex, (url) => {
      // Clean punctuation at end of URL if exists
      const cleanUrl = url.replace(/[.,;)]$/, "");
      return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-200 underline hover:text-white transition-colors">${cleanUrl}</a>`;
    });

    // 4. Convert newlines to breaks
    formatted = formatted.replace(/\n/g, "<br />");

    return formatted;
  };

  const WEBHOOK_URL =
    "https://ryn-py-chatbot.hf.space/webhook/2e791a0c-1f04-4996-98e9-b03d963dd7ed";

  const quickQuestions = [
    "What services do you offer?",
    "Tell me about your data analytics capabilities",
    "How can RYN help my business?",
    "What industries do you serve?",
    "I'd like to schedule a consultation",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [sessionId] = useState(
    () =>
      "session-" + Math.random().toString(36).substring(2, 15),
  );

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      // 2. UPDATED FETCH REQUEST
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text.trim(),
          sessionId: sessionId, // <--- CRITICAL NEW LINE
          timestamp: new Date().toISOString(),
        }),
      });

      let botResponseText =
        "I'm here to help! Could you please rephrase your question?";

      if (response.ok) {
        try {
          const data = await response.json();

          // Handle different response formats
          botResponseText =
            data.response ||
            data.message ||
            data.output ||
            data.reply ||
            data.text ||
            (typeof data === "string"
              ? data
              : JSON.stringify(data));
        } catch (parseError) {
          // If JSON parsing fails, try to get text
          const textResponse = await response.text();
          botResponseText =
            textResponse ||
            "I received your message. How else can I assist you?";
        }
      } else {
        // Handle non-OK responses
        console.warn(
          "Webhook returned non-OK status:",
          response.status,
        );
        botResponseText =
          "I'm here to help! Our team will get back to you shortly. Meanwhile, you can also reach us at rynsolutions@protonmail.com";
      }

      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);

      // Fallback response
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message! While our AI assistant is temporarily unavailable, our team is ready to help. Please email us at rynsolutions@protonmail.com or call us directly for immediate assistance.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    sendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputText);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            onClick={() => openChatbot()}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0f4c81] hover:bg-[#0a3a61] text-white rounded-full shadow-lg flex items-center justify-center group transition-all duration-300 hover:scale-110"
            aria-label="Open chat"
          >
            <MessageCircle
              className="w-6 h-6"
              strokeWidth={2}
            />

            {/* Notification indicator */}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#0891b2] rounded-full" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-48px)] h-[650px] max-h-[calc(100vh-100px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0f4c81] rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">
                    RYN Solutions
                  </h3>
                  <p className="text-xs text-gray-500">
                    We are here to help
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 hover:bg-gray-100 rounded-lg"
                  aria-label="More options"
                >
                  <MoreVertical
                    className="w-5 h-5"
                    strokeWidth={2}
                  />
                </button>
                <button
                  onClick={() => closeChatbot()}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 hover:bg-gray-100 rounded-lg"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50"
              style={{ scrollBehavior: "smooth" }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex flex-col max-w-[85%]">
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-[#0f4c81] text-white rounded-br-md"
                          : "bg-white text-gray-800 rounded-bl-md border border-gray-100"
                      }`}
                    >
                      <p
                        className="text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: formatMessage(message.text),
                        }}
                      />
                    </div>
                    <p
                      className={`text-xs mt-1.5 px-1 ${
                        message.sender === "user"
                          ? "text-right text-gray-400"
                          : "text-left text-gray-400"
                      }`}
                    >
                      {message.sender === "bot"
                        ? "RYN • AI Agent"
                        : "You"}{" "}
                      •{" "}
                      {message.timestamp.toLocaleTimeString(
                        [],
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 border border-gray-100">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Questions */}
              {messages.length === 1 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2 pt-2"
                >
                  <p className="text-xs text-gray-500 font-medium px-1">
                    Suggested questions:
                  </p>
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      onClick={() =>
                        handleQuickQuestion(question)
                      }
                      className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 transition-all duration-200 hover:border-[#0891b2] hover:shadow-sm"
                    >
                      {question}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="p-5 bg-white border-t border-gray-100"
            >
              <div className="relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                  className="w-full pl-4 pr-36 py-3.5 border-2 border-gray-900 rounded-full focus:outline-none focus:ring-0 focus:border-gray-900 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed placeholder:text-gray-400"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <button
                    type="button"
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full"
                    aria-label="Attach file"
                  >
                    <Paperclip
                      className="w-4 h-4"
                      strokeWidth={2}
                    />
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full"
                    aria-label="Add emoji"
                  >
                    <Smile
                      className="w-4 h-4"
                      strokeWidth={2}
                    />
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full"
                    aria-label="Add image"
                  >
                    <ImageIcon
                      className="w-4 h-4"
                      strokeWidth={2}
                    />
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 rounded-full"
                    aria-label="Voice message"
                  >
                    <Mic className="w-4 h-4" strokeWidth={2} />
                  </button>
                  <button
                    type="submit"
                    disabled={!inputText.trim() || isLoading}
                    className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full transition-colors disabled:opacity-40 disabled:cursor-not-allowed ml-1"
                    aria-label="Send message"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send
                        className="w-4 h-4"
                        strokeWidth={2}
                      />
                    )}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}