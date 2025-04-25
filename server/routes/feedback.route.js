import { Router } from "express";
import {
  getFeedbacks,
  submitFeedbacks,
} from "../controller/feedback.controller.js";

const router = Router();

router.post("/submit-feedback", submitFeedbacks);
router.get("/feedbacks", getFeedbacks);

export default router;
