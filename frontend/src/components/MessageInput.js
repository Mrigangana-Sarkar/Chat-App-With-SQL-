import { useState } from "react";
import "../styles/chat.css";

function MessageInput({ send }) {

  const [text, setText] = useState("");

  const handleSend = () => {

    if (!text) return;

    send(text);
    setText("");

  };

  return (

    <div className="message-input">

      <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Type your message..."
      />

      <button onClick={handleSend}>
        Send
      </button>

    </div>

  );

}

export default MessageInput;