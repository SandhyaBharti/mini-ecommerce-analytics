import express from "express";
import {
    getInventoryAnalytics,
    getFeedbackAnalytics
} from "../controllers/analytics.controller.js";

const router = express.Router();

router.get("/inventory", getInventoryAnalytics);
router.get("/inventory", getFeedbackAnalytics);

export default router;