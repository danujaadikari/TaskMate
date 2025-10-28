import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const API_URL = 'http://localhost:5000/api';

  // Fetch all tasks
  const fetchTasks = async (filters = {}) => {
    if (!token) return;

    setLoading(true);
    try {
      const params = new URLSearchParams(filters).toString();
      const response = await axios.get(`${API_URL}/tasks?${params}`);
      setTasks(response.data.data);
      return { success: true, data: response.data.data };
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to fetch tasks'
      };
    } finally {
      setLoading(false);
    }
  };

  // Create new task
  const createTask = async (taskData) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/tasks`, taskData);
      const newTask = response.data.data;
      setTasks([...tasks, newTask]);
      return { success: true, data: newTask };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to create task'
      };
    } finally {
      setLoading(false);
    }
  };

  // Update task
  const updateTask = async (taskId, updates) => {
    setLoading(true);
    try {
      const response = await axios.put(`${API_URL}/tasks/${taskId}`, updates);
      const updatedTask = response.data.data;
      
      setTasks(tasks.map(task => 
        task._id === taskId ? updatedTask : task
      ));
      
      return { success: true, data: updatedTask };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to update task'
      };
    } finally {
      setLoading(false);
    }
  };

  // Delete task
  const deleteTask = async (taskId) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/tasks/${taskId}`);
      setTasks(tasks.filter(task => task._id !== taskId));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to delete task'
      };
    } finally {
      setLoading(false);
    }
  };

  // Mark task as complete
  const completeTask = async (taskId) => {
    return updateTask(taskId, { status: 'completed' });
  };

  useEffect(() => {
    if (token) {
      fetchTasks();
    }
  }, [token]);

  const value = {
    tasks,
    loading,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
    completeTask
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
