import React from "react";
import User from "./components/User";
import Chat from "./pages/Chat/Chat";
import { ChatProvider } from "./contexts/ChatProvider";
import { UserProvider } from "./contexts/UserContext";

const App = () => {

  return (
    <UserProvider >
      <h1>App Component</h1>
      <User />
      <ChatProvider>
        <Chat />
      </ChatProvider>
    </UserProvider>
  );
};

export default App;