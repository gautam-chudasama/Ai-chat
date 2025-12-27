require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./src/service/service.ai");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    // origin: "https://chatbot-bice-five-89.vercel.app/",
  },
});

const chatHistory = [];

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  // event to receive messages from the client(listener)
  socket.on("ai-message", async (data) => {
    console.log("Received message: ", data);

    chatHistory.push({ role: "user", parts: [{ text: data }] });

    const response = await generateResponse(chatHistory);

    chatHistory.push({ role: "model", parts: [{ text: data }] });

    // event to send the AI response back to the client(firer)
    socket.emit("ai-message-response", response);
  });
});

httpServer.listen(process.env.PORT, () => {
  console.log("server is listening on port 3000");
});
