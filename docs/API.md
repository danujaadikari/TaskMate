# TaskMate API Documentation

Base URL: `http://localhost:5000/api`

## Authentication

All authenticated endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <your_token>
```

### Register User

**POST** `/auth/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "preferences": { ... },
      "productivityData": { ... }
    },
    "token": "jwt_token_here"
  }
}
```

### Login User

**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Login successful",
  "data": {
    "user": { ... },
    "token": "jwt_token_here"
  }
}
```

---

## Tasks

### Get All Tasks

**GET** `/tasks`

**Query Parameters:**
- `status` (optional): pending, in-progress, completed, cancelled
- `category` (optional): work, personal, health, education, shopping, other
- `priority` (optional): low, medium, high, urgent
- `startDate` (optional): ISO date string
- `endDate` (optional): ISO date string

**Response:**
```json
{
  "status": "success",
  "count": 5,
  "data": [
    {
      "_id": "...",
      "title": "Meeting with team",
      "description": "Discuss project updates",
      "category": "work",
      "priority": "high",
      "status": "pending",
      "dueDate": "2025-10-29T10:00:00.000Z",
      "tags": ["meeting", "project"],
      "userId": "..."
    }
  ]
}
```

### Get Single Task

**GET** `/tasks/:id`

**Response:**
```json
{
  "status": "success",
  "data": {
    "_id": "...",
    "title": "Meeting with team",
    ...
  }
}
```

### Create Task

**POST** `/tasks`

**Request Body:**
```json
{
  "title": "Complete project report",
  "description": "Finish the Q4 report",
  "category": "work",
  "priority": "high",
  "dueDate": "2025-10-30T17:00:00.000Z",
  "duration": 120,
  "tags": ["report", "deadline"],
  "subtasks": [
    { "title": "Research data", "completed": false },
    { "title": "Write summary", "completed": false }
  ]
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Task created successfully",
  "data": { ... }
}
```

### Update Task

**PUT** `/tasks/:id`

**Request Body:** (Any task fields to update)
```json
{
  "status": "completed",
  "focusTime": 90
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Task updated successfully",
  "data": { ... }
}
```

### Delete Task

**DELETE** `/tasks/:id`

**Response:**
```json
{
  "status": "success",
  "message": "Task deleted successfully"
}
```

---

## AI Features

### Parse Natural Language Task

**POST** `/ai/parse-task`

**Request Body:**
```json
{
  "input": "Add a meeting with John tomorrow at 3 PM about project review"
}
```

**Response:** (To be implemented)
```json
{
  "status": "success",
  "data": {
    "title": "Meeting with John",
    "description": "Project review",
    "dueDate": "2025-10-29T15:00:00.000Z",
    "category": "work",
    "priority": "medium"
  }
}
```

### Get Schedule Suggestions

**POST** `/ai/suggest-schedule`

**Request Body:**
```json
{
  "tasks": [
    { "id": "task1", "duration": 60, "priority": "high" },
    { "id": "task2", "duration": 30, "priority": "low" }
  ]
}
```

### Optimize Daily Schedule

**POST** `/ai/optimize-day`

**Request Body:**
```json
{
  "date": "2025-10-29"
}
```

---

## Analytics

### Get Productivity Overview

**GET** `/analytics/overview`

**Query Parameters:**
- `startDate` (optional): ISO date string
- `endDate` (optional): ISO date string

**Response:**
```json
{
  "status": "success",
  "data": {
    "totalTasks": 50,
    "completedTasks": 35,
    "pendingTasks": 10,
    "inProgressTasks": 5,
    "completionRate": "70.00",
    "totalFocusTime": 1200,
    "tasksByCategory": {
      "work": 25,
      "personal": 15,
      "health": 10
    },
    "tasksByPriority": {
      "urgent": 5,
      "high": 15,
      "medium": 20,
      "low": 10
    }
  }
}
```

### Get Productivity Trends

**GET** `/analytics/trends`

**Query Parameters:**
- `days` (optional, default: 30): Number of days to analyze

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "date": "2025-10-28",
      "count": 5,
      "focusTime": 120
    },
    {
      "date": "2025-10-27",
      "count": 3,
      "focusTime": 90
    }
  ]
}
```

---

## User Profile

### Get User Profile

**GET** `/users/profile`

**Response:**
```json
{
  "status": "success",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "preferences": {
      "timezone": "UTC",
      "workingHours": {
        "start": "09:00",
        "end": "17:00"
      },
      "reminderSettings": {
        "enabled": true,
        "defaultMinutesBefore": 15
      },
      "theme": "auto"
    },
    "productivityData": {
      "totalTasksCompleted": 150,
      "totalFocusHours": 500,
      "currentStreak": 7,
      "longestStreak": 30
    }
  }
}
```

### Update User Profile

**PUT** `/users/profile`

**Request Body:**
```json
{
  "name": "John Smith",
  "avatar": "https://example.com/avatar.jpg"
}
```

### Update User Preferences

**PUT** `/users/preferences`

**Request Body:**
```json
{
  "timezone": "America/New_York",
  "workingHours": {
    "start": "08:00",
    "end": "18:00"
  },
  "theme": "dark"
}
```

---

## Google Calendar (To be implemented)

### Get Calendar Events

**GET** `/calendar/events`

### Sync with Calendar

**POST** `/calendar/sync`

### Authorize Calendar Access

**POST** `/calendar/authorize`

---

## Error Responses

All error responses follow this format:

```json
{
  "status": "error",
  "statusCode": 400,
  "message": "Error description here"
}
```

### Common Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error
- `501` - Not Implemented

---

## Rate Limiting

- Default: 100 requests per 15 minutes per IP
- Exceeding the limit returns a 429 status code

---

For more information, visit the [GitHub repository](https://github.com/danujaadikari/TaskMate).
