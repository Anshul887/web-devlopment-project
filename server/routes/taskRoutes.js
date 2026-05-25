const router = require("express").Router();

const auth = require("../middleware/auth");

const {
  getTasks,
  createTask
} = require("../controllers/taskController");

router.get("/", auth, getTasks);
router.post("/", auth, createTask);

module.exports = router;
