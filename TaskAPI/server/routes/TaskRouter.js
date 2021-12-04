const express = require("express");
const TaskController = require("./../controllers/TaskController");
const TaskRouter = express.Router();

TaskRouter.get("/", TaskController.getTasks);
TaskRouter.get("/:id", TaskController.getTask);
TaskRouter.post("/new", TaskController.createTask);
TaskRouter.put("/:id", TaskController.updateTask);
TaskRouter.delete("/remove/:id", TaskController.deleteTask);

module.exports = TaskRouter;
