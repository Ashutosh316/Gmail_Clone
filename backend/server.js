import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import connectDB from "./db/connectDb.js"
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import emailRoute from "./routes/email.route.js"



dotenv.config({});
connectDB();

const app = express(); 

const PORT = 5000;

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/email", emailRoute);

app.get("/home", (req, res) => {
    return res.status(200).json({ message: "I am coming from backend", success: true });
});

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
