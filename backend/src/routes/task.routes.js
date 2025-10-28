const express = require('express');
const router = express.Router();
const Task = require('../models/Task.model');
const authMiddleware = require('../middleware/auth.middleware');

// Apply auth middleware to all routes
router.use(authMiddleware);

// @route   GET /api/tasks
// @desc    Get all tasks for user
// @access  Private
router.get('/', async (req, res) => {
  try {
    const { status, category, priority, startDate, endDate } = req.query;

    // Build query
    const query = { userId: req.userId };

    if (status) query.status = status;
    if (category) query.category = category;
    if (priority) query.priority = priority;
    if (startDate || endDate) {
      query.dueDate = {};
      if (startDate) query.dueDate.$gte = new Date(startDate);
      if (endDate) query.dueDate.$lte = new Date(endDate);
    }

    const tasks = await Task.find(query).sort({ dueDate: 1 });

    res.json({
      status: 'success',
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// @route   GET /api/tasks/:id
// @desc    Get single task
// @access  Private
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      userId: req.userId
    });

    if (!task) {
      return res.status(404).json({
        status: 'error',
        message: 'Task not found'
      });
    }

    res.json({
      status: 'success',
      data: task
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// @route   POST /api/tasks
// @desc    Create new task
// @access  Private
router.post('/', async (req, res) => {
  try {
    const taskData = {
      ...req.body,
      userId: req.userId
    };

    const task = new Task(taskData);
    await task.save();

    res.status(201).json({
      status: 'success',
      message: 'Task created successfully',
      data: task
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// @route   PUT /api/tasks/:id
// @desc    Update task
// @access  Private
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({
        status: 'error',
        message: 'Task not found'
      });
    }

    // Update user productivity stats if task completed
    if (task.status === 'completed') {
      const User = require('../models/User.model');
      await User.findByIdAndUpdate(req.userId, {
        $inc: { 'productivityData.totalTasksCompleted': 1 }
      });
    }

    res.json({
      status: 'success',
      message: 'Task updated successfully',
      data: task
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// @route   DELETE /api/tasks/:id
// @desc    Delete task
// @access  Private
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });

    if (!task) {
      return res.status(404).json({
        status: 'error',
        message: 'Task not found'
      });
    }

    res.json({
      status: 'success',
      message: 'Task deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

module.exports = router;
