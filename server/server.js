import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import analyticsRoutes from "./routes/analytics.routes.js"

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Mini Ecommerce Analytics API running...");
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port${PORT}`);
});