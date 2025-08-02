const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

router.get('/', getAllTasks);
router.post('/', createTask);          // ✅ This defines POST /api/tasks
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
