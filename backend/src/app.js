import express from "express";

const app = express();
import chatRoutes from "./Routes/chatRoutes.js";

// to fech and store data
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", chatRoutes);
//default route
app.get("/", (req, res) => {
  res.send("Welcome to chatbot home");
});
//404 route
app.use((req, res) => {
  res.send("page not found please visit another page ");
});

export default app;
