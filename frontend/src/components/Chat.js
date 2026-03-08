import { useEffect, useState } from "react";
import socket from "../socket";
import "../styles/chat.css";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

function Chat({ username, goToLogin }) {

  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [cursor, setCursor] = useState(null);

  useEffect(() => {

    if (!socket.connected) {
      socket.connect();
    }

    socket.emit("join_chat", username);

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("active_users", (active) => {
      setUsers(active.map((u) => ({ username: u })));
    });

    loadUsers();

    return () => {
      socket.off("receive_message");
      socket.off("active_users");
    };

  }, [username]);


  const loadUsers = async () => {

    const res = await fetch("http://localhost:8020/api/users");
    const data = await res.json();

    setUsers(Array.isArray(data) ? data : []);

  };


  const fetchPreviousMessages = async () => {

    const res = await fetch(
      `http://localhost:8020/api/messages?cursor=${cursor || 999999}&limit=20`
    );

    const data = await res.json();

    if (data.length > 0) {

      const ordered = data.reverse();

    setMessages((prev) => [...ordered, ...prev]);

    setCursor(data[data.length - 1].id);
    }

  };


  const send = async (text) => {

    if (!text) return;

    const msg = {
      username,
      message: text
    };

    socket.emit("send_message", msg);

    await fetch("http://localhost:8020/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(msg)
    });

  };


  return (

    <div className="chat-container">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h3>Users</h3>

        <div className="user-list">

          {users?.map((u, i) => (

            <div key={i} className="user-item">

              <span className="user-icon">👤</span>

              <span>{u.username}</span>

            </div>

          ))}

        </div>

        <button
          className="fetch-btn"
          onClick={goToLogin}
        >
          Back to Login
        </button>

      </div>


      {/* CHAT AREA */}

      <div className="chat-area">

        <div className="chat-header">
          CHAT APP
        </div>

        <button
          className="fetch-btn"
          onClick={fetchPreviousMessages}
        >
          Fetch Previous Conversations
        </button>

        <MessageList messages={messages} />

        <MessageInput send={send} />

      </div>

    </div>

  );

}

export default Chat;