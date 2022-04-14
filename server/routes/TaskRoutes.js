import express from "express";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "../controllers/TaskController.js";

const router = express.Router();


router.get('/', getAllTasks);
router.get('/:id', getTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);


export default router;