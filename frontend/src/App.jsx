import { useState, useRef, useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";

function App() {
  const [socket, setsocket] = useState(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I assist you today?",
    },
  ]);
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);

    socket.emit("ai-message", input);
    setInput("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    let socketInstance = io("http://localhost:3000");
    setsocket(socketInstance);

    socketInstance.on("ai-message-response", (response) => {
      const aiMessage = {
        id: Date.now() + 1,
        text: response,
        sender: "ai",
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    });
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">Chat App</div>
      <div className="chat-history">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          placeholder="Type your message..."
        />
        <button
          className="send-btn"
          onClick={handleSend}
          disabled={input.trim() === ""}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
