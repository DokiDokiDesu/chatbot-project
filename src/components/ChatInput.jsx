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
    <div className="flex mb-[60px] gap-2">
      <input
        className="h-[35px] w-[350px] rounded-[10px] border border-solid border-gray-300 text-[15px] flex-grow px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
      <button
        onClick={sendMessage}
        className="bg-[rgb(25,135,84)] text-white px-5 py-3 ml-2 rounded-[10px] text-[15px] border-none cursor-pointer"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
