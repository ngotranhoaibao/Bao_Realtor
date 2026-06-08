import express from "express";
const router = express.Router();
import { submitContactController } from "../controllers/contact.controller.js";

router.post("/", submitContactController);

export default router;
