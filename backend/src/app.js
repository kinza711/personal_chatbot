import express from "express";
import cors from "cors";
import chatRoutes from "./Routes/chatRoutes.js";

const app = express();

// //cors setup
const allowedOrigin =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_URL
    : "http://localhost:5173";
// ✅ CORS fix
app.use(
  cors({
    origin: allowedOrigin, // frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/", chatRoutes);

// default route
app.get("/", (req, res) => {
  res.send("Welcome to chatbot home");
});

// 404 route
app.use((req, res) => {
  res.send("page not found please visit another page ");
});

export default app;
