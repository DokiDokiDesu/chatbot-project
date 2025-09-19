import ChatInput from "./components/ChatInput";
import { useState, useRef, useEffect } from "react";
import RobotProfileImage from "./assets/robot.png";
import UserProfileImage from "./assets/user.png";

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center">
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
      className={
        sender === "user" ? "flex justify-end items-start" : "flex items-start"
      }
    >
      {sender === "robot" && <img src={RobotProfileImage} width="50" />}
      <div className="bg-[rgb(238,238,238)] text-black font-[Arial] px-5 py-3 rounded-[10px] mt-2 mx-2">
        {message}
      </div>
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
    <div
      className="w-[450px] flex-grow mt-5 overflow-y-scroll scrollbar-hide"
      ref={chatMessagesRef}
    >
      {chatMessages.map((msg, i) => (
        <ChatMessage key={i} message={msg.message} sender={msg.sender} />
      ))}
    </div>
  );
}

export default App;
