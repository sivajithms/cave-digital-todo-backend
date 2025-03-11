import express from "express";
import { createTask, getTasks, updateTask, deleteTask } from "./tasks.controller.js";


const router = express.Router();

router.post("/create", createTask);
router.post("/getalltasks/", getTasks);
router.post("/update", updateTask);
router.post("/delete", deleteTask);

export default router;
