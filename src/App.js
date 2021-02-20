import React from "react";
import Todo from "./components/Todo/Todo";
import User from "./components/User";
import Chat from "./pages/Chat/Chat";
import { ChatProvider } from "./contexts/ChatProvider";
import { UserProvider } from "./contexts/UserContext";

const App = () => {

  return (
    <UserProvider >
      <h1>App Component</h1>
      <Todo />
      <User />
      <ChatProvider>
        <Chat />
      </ChatProvider>
    </UserProvider>
  );
};

export default App;