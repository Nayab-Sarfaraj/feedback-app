import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./db/conn.js";
import feedbackRoutes from "./routes/feedback.route.js";
dotenv.config();
const app = express();
connectToDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*", credentials: true }));

app.use(feedbackRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
