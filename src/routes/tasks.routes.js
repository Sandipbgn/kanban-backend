const {
  getAllTasks,
  addTasks,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

const router = require("express").Router();

router.get("/", getAllTasks);
router.post("/", addTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = { router };
