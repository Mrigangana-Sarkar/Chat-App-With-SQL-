import "../styles/chat.css";

function MessageList({ messages }) {

  return (

    <div className="message-list">

      {messages.map((m, i) => (

        <div key={i} className="message">

          <div className="message-user">
            {m.username}
          </div>

          <div className="message-text">
            {m.message}
          </div>
          

        </div>

      ))}

    </div>

  );

}

export default MessageList;