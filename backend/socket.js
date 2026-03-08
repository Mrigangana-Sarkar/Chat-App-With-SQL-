const db = require("./db");

let activeUsers = [];

module.exports = (io) => {

  io.on("connection", (socket) => {

    socket.on("join_chat", (username) => {

      socket.username = username;

      // prevent duplicates
      if (!activeUsers.includes(username)) {
        activeUsers.push(username);
      }

      io.emit("active_users", activeUsers);
    });

    socket.on("send_message", (data) => {

      const { username, message } = data;

      db.query(
  "INSERT INTO messages (username,message,created_at) VALUES (?,?,NOW())",
  [username, message]
);
      io.emit("receive_message", data);
    });

    socket.on("disconnect", () => {

      activeUsers = activeUsers.filter(
        (user) => user !== socket.username
      );

      io.emit("active_users", activeUsers);
    });

  });

};