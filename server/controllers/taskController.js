const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({
    userId: req.user.id
  });

  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title } = req.body;

  const task = await Task.create({
    title,
    userId: req.user.id
  });

  res.json(task);
};
