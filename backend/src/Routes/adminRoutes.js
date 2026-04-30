// routes/adminRoutes.js
import express from "express";
import { uploadDataToPinecone } from "../Controllers/adminController.js";

const router = express.Router();
router.post("/upload-data", uploadDataToPinecone);

export default router;
