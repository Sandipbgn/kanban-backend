const { prisma } = require("../utils/prisma");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await prisma.tasks.findMany();
    res.json(tasks);
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addTask = async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const newTask = await prisma.tasks.create({
      data: {
        title,
        description,
        status,
      },
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { title, description, status } = req.body;

  try {
    const updatedTask = await prisma.tasks.update({
      where: {
        id: taskId,
      },
      data: {
        title,
        description,
        status,
      },
    });

    res.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedTask = await prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    res.json(deletedTask);
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
};
