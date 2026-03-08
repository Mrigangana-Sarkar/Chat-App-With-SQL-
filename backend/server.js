require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");

const usernameRoutes = require("./routes/username");
const messageRoutes = require("./routes/messages");
const userRoutes = require("./routes/users");
const socketHandler = require("./socket");

const app = express();   // create app first

app.use(cors());
app.use(express.json());

// register routes
app.use("/api/username", usernameRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "*"
  }
});

socketHandler(io);

const PORT = process.env.PORT || 8020;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});