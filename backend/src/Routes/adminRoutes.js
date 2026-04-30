// routes/adminRoutes.js
import express from "express";
import { uploadDataToPinecone } from "../controllers/adminController.js";

const router = express.Router();
router.post("/upload-data", uploadDataToPinecone);

export default router;
