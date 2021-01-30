import { createContext, useContext, useState } from "react";

export const ChatContext = createContext(null);
export const useChat = () => {
  const context = useContext(ChatContext);
  console.log(context, 'context');
  if (context === null) {
    throw new Error("useChat Must be used inside ChatProvider");
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);

  const sendMessage = (message) => {
    const newChats = [...chats];
    newChats.push(message);
    setChats(newChats);
  };

  
  return (
    <ChatContext.Provider value={{
      chats: chats,
      sendMessage
    }}>
      {children}
    </ChatContext.Provider>
  );
};