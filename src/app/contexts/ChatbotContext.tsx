import { createContext, useContext, useState, ReactNode } from 'react';

interface ChatbotContextType {
  isOpen: boolean;
  openChatbot: (message?: string) => void;
  closeChatbot: () => void;
  pendingMessage: string | null;
  clearPendingMessage: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingMessage, setPendingMessage] = useState<string | null>(null);

  const openChatbot = (message?: string) => {
    if (message) {
      setPendingMessage(message);
    }
    setIsOpen(true);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  const clearPendingMessage = () => {
    setPendingMessage(null);
  };

  return (
    <ChatbotContext.Provider
      value={{
        isOpen,
        openChatbot,
        closeChatbot,
        pendingMessage,
        clearPendingMessage,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
}
