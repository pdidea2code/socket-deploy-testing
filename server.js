const socketIO = require("socket.io");
const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

require("dotenv").config({
  path: "./.env",
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world from socket server!");
});

// User management
let users = [];

// Add a user to the list
const addUser = (userId, socketId) => {
  if (!users.some((user) => user.userId === userId)) {
    users.push({ userId, socketId });
  }
};

// Remove a user from the list
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

// Get a user by their userId
const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

// Create a message object
const createMessage = ({ senderId, receiverId, text, images }) => ({
  id: `${Date.now()}-${Math.random()}`, // Unique message ID
  senderId,
  receiverId,
  text,
  images,
  seen: false,
});

// Message storage
const messages = {}; // Object to store messages for each user

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Add user and notify all connected clients
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    console.log("Connected users:", users);
    io.emit("getUsers", users);
  });

  // Handle sending messages
  socket.on("sendMessage", ({ senderId, receiverId, text, images }) => {
    const message = createMessage({ senderId, receiverId, text, images });

    // Store the message for tracking
    if (!messages[receiverId]) {
      messages[receiverId] = [];
    }
    messages[receiverId].push(message);

    // Send the message to the receiver
    const user = getUser(receiverId);
    if (user) {
      io.to(user.socketId).emit("getMessage", message);
    } else {
      console.log(`User with ID ${receiverId} not found.`);
    }
  });

  // Mark a message as seen
  socket.on("messageSeen", ({ senderId, receiverId, messageId }) => {
    const user = getUser(senderId);

    // Update the seen flag for the message
    if (messages[senderId]) {
      const message = messages[senderId].find((msg) => msg.receiverId === receiverId && msg.id === messageId);
      if (message) {
        message.seen = true;
        console.log(`Message seen:`, message);

        // Notify the sender
        if (user) {
          io.to(user.socketId).emit("messageSeen", {
            senderId,
            receiverId,
            messageId,
          });
        }
      }
    }
  });

  // Update and broadcast the last message
  socket.on("updateLastMessage", ({ lastMessage, lastMessagesId }) => {
    io.emit("getLastMessage", {
      lastMessage,
      lastMessagesId,
    });
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log(`A user disconnected: ${socket.id}`);
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
