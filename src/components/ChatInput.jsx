import { useState, useRef, useEffect } from "react";
import { Chatbot } from "supersimpledev";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function saveInputText(event) {
    setInputText(event.target.value);
  }
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
      },
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setInputText("");

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
      },
    ]);
  }
  return (
    <div className="chat-input-container">
      <input
        className="user-input"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

export default ChatInput;
