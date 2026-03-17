import express from "express";

const router = express.Router();

import { chatWithAI } from "../Controllers/chatController.js";

router.post("/chat", chatWithAI);

export default router;
