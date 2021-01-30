import { useChat } from "../../contexts/ChatProvider";

const Chat = () => {
  const { chats, sendMessage } = useChat();
  console.log(chats);
  return (
    <div>
      <h1>Chats</h1>
      <ul>
        {chats.map((chat, index) => <li key={index}>{chat}</li>)}
      </ul>
      <button onClick={() => sendMessage(`message ${chats.length + 1}`)}>Send</button>
    </div>
  );
};

export default Chat;