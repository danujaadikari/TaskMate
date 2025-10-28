const express = require('express');
const router = express.Router();
const Task = require('../models/Task.model');
const authMiddleware = require('../middleware/auth.middleware');

// Apply auth middleware to all routes
router.use(authMiddleware);

// @route   GET /api/analytics/overview
// @desc    Get productivity overview
// @access  Private
router.get('/overview', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const dateFilter = {};
    if (startDate) dateFilter.$gte = new Date(startDate);
    if (endDate) dateFilter.$lte = new Date(endDate);

    const query = { userId: req.userId };
    if (Object.keys(dateFilter).length > 0) {
      query.completedAt = dateFilter;
    }

    const tasks = await Task.find(query);

    // Calculate statistics
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === 'completed').length;
    const pendingTasks = tasks.filter(t => t.status === 'pending').length;
    const inProgressTasks = tasks.filter(t => t.status === 'in-progress').length;

    const tasksByCategory = tasks.reduce((acc, task) => {
      acc[task.category] = (acc[task.category] || 0) + 1;
      return acc;
    }, {});

    const tasksByPriority = tasks.reduce((acc, task) => {
      acc[task.priority] = (acc[task.priority] || 0) + 1;
      return acc;
    }, {});

    const totalFocusTime = tasks.reduce((sum, task) => sum + (task.focusTime || 0), 0);

    res.json({
      status: 'success',
      data: {
        totalTasks,
        completedTasks,
        pendingTasks,
        inProgressTasks,
        completionRate: totalTasks > 0 ? (completedTasks / totalTasks * 100).toFixed(2) : 0,
        totalFocusTime,
        tasksByCategory,
        tasksByPriority
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// @route   GET /api/analytics/trends
// @desc    Get productivity trends over time
// @access  Private
router.get('/trends', async (req, res) => {
  try {
    const { days = 30 } = req.query;

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(days));

    const tasks = await Task.find({
      userId: req.userId,
      completedAt: { $gte: startDate }
    }).sort({ completedAt: 1 });

    // Group by date
    const trendData = tasks.reduce((acc, task) => {
      const date = task.completedAt.toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = { date, count: 0, focusTime: 0 };
      }
      acc[date].count += 1;
      acc[date].focusTime += task.focusTime || 0;
      return acc;
    }, {});

    res.json({
      status: 'success',
      data: Object.values(trendData)
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

module.exports = router;
