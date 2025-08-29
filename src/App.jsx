import "./App.css";
import ChatInput from "./components/ChatInput";
import { useState, useRef, useEffect } from "react";
import RobotProfileImage from "./assets/robot.png";
import UserProfileImage from "./assets/user.png";

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}
function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props;

  /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && <img src={RobotProfileImage} width="50" />}

      <div className="chat-message-text">{message}</div>
      {sender === "user" && <img src={UserProfileImage} width="50" />}
    </div>
  );
}

function ChatMessages({ chatMessages, _setChatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;

    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="js-chat-messages" ref={chatMessagesRef}>
      {chatMessages.map((msg, i) => (
        <ChatMessage key={i} message={msg.message} sender={msg.sender} />
      ))}
    </div>
  );
}

export default App;
