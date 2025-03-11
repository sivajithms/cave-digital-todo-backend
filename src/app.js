import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import os from "os";
import connectDB from "./db/connectDB.js";
import userRouter from "./routes/user/user.route.js";
import taksRouter from "./routes/tasks/tasks.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send("hello world"));

app.use('/user', userRouter);
app.use('/tasks', taksRouter)

// Function to get local network IP address
const getLocalIP = () => {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
        for (const net of interfaces[interfaceName]) {
            if (net.family === "IPv4" && !net.internal) {
                return net.address;
            }
        }
    }
    return "127.0.0.1";
};

const serverIP = getLocalIP();

app.listen(PORT, () => {
    console.log(`Server running on http://${serverIP}:${PORT}`);
});
