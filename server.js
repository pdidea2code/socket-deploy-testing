const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve static files from uploads directory

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Define User Schema
const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  socketId: { type: String, required: true },
});

// Define Message Schema
const messageSchema = new mongoose.Schema({
  senderId: { type: String, required: true },
  receiverId: { type: String, required: true },
  text: { type: String },
  images: [String], // Array to store image URLs or paths
  seen: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Create Mongoose Models
const User = mongoose.model("User", userSchema);
const Message = mongoose.model("Message", messageSchema);

// Routes
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const { senderId, receiverId, text } = req.body;
    const fileUrl = `/uploads/${req.file.filename}`;

    const message = new Message({
      senderId,
      receiverId,
      images: [fileUrl],
      text,
      createdAt: new Date(),
    });

    await message.save();
    const user = await User.findOne({ userId: receiverId });

    if (user) {
      io.to(user.socketId).emit("getMessage", message);
    }

    res.json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error uploading file" });
  }
});

app.post("/msg", async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const msgs = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    });
    res.status(200).json({ success: true, data: msgs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching messages" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.body.userId });
    if (!user) return res.status(404).json({ success: false, message: "User Not Found" });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error logging in" });
  }
});

// Socket.IO logic
io.on("connection", (socket) => {
  console.log(`A user connected with socket ID: ${socket.id}`);

  socket.on("addUser", async (userId) => {
    try {
      const existingUser = await User.findOne({ userId });

      if (!existingUser) {
        const newUser = new User({ userId, socketId: socket.id });
        await newUser.save();
      } else {
        existingUser.socketId = socket.id;
        await existingUser.save();
      }
      const users = await User.find();
      io.emit("getUsers", users);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  });

  socket.on("sendMessage", async (data) => {
    const { senderId, receiverId, text, images } = data;

    if (!senderId || !receiverId || (!text && !images)) {
      console.log("Missing required fields:", { senderId, receiverId, text });
      return;
    }

    const message = new Message({ senderId, receiverId, text, images });
    try {
      await message.save();
      const user = await User.findOne({ userId: receiverId });

      if (user) {
        io.to(user.socketId).emit("getMessage", message);
      }
    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  socket.on("messageSeen", async (data) => {
    const { senderId, receiverId, messageId } = data;

    try {
      const message = await Message.findById(messageId);

      if (message) {
        message.seen = true;
        await message.save();

        const user = await User.findOne({ userId: senderId });
        if (user) {
          io.to(user.socketId).emit("messageSeen", { senderId, receiverId, messageId });
        }
      }
    } catch (error) {
      console.error("Error marking message as seen:", error);
    }
  });

  socket.on("updateLastMessage", async ({ lastMessage, lastMessagesId }) => {
    io.emit("getLastMessage", {
      lastMessage,
      lastMessagesId,
    });
  });

  socket.on("disconnect", async () => {
    try {
      const users = await User.find();
      io.emit("getUsers", users);
    } catch (error) {
      console.error("Error removing user:", error);
    }
  });
});

app.get("/add-text", async (req, res) => {
  try {
    const { receiverId, senderId } = req.body;
    const data = await Message.findOne({ receiverId: receiverId, senderId: senderId });
    if (!data) {
      return res.status(404).json({ status: 404, success: false, message: "Data Not Found" });
    }
    res.status(200).json({ status: 200, success: true, message: "Message Data", data: data });
  } catch (error) {
    console.log(error);
  }
});
app.use(express.static(path.join(__dirname, "./build")));
app.get("/", async function (req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});
// Start server
server.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}`);
});
