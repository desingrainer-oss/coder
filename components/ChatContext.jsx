"use client";

import { createContext, useContext, useState, useCallback } from "react";

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("default");

  const openChat = useCallback((options = {}) => {
    if (options.mode) setMode(options.mode);
    else setMode("default");
    setIsOpen(true);
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen((prev) => {
      if (prev) setMode("default");
      return !prev;
    });
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
    setMode("default");
  }, []);

  return (
    <ChatContext.Provider value={{ isOpen, mode, setMode, setIsOpen, openChat, toggleChat, closeChat }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}
