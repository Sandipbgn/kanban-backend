const {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

const router = require("express").Router();

router.get("/", getAllTasks);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
