# 🧠 TaskMate – AI-Powered Personal Task Scheduler

**TaskMate** is an intelligent task scheduling and productivity assistant that helps users manage their daily activities efficiently using **AI-powered automation** and **Google Calendar integration**.

With TaskMate, users can add tasks using natural language (e.g., *"Add a meeting with John tomorrow at 3 PM"*), and the system automatically categorizes, prioritizes, and schedules them in the most productive way.

---

## 🚀 Features
- 🧠 **AI Task Assistant:** Understands natural language and provides smart scheduling suggestions.  
- 📅 **Google Calendar Integration:** Two-way sync with Google Calendar to keep events updated everywhere.  
- ⏰ **Smart Reminders:** Adaptive reminders that learn user behavior and optimize timing.  
- 📊 **Productivity Insights:** Visual analytics for completed tasks, focus hours, and productivity trends.  
- 🔒 **Data Security:** Encrypted user data with secure cloud backup.  

---

## 🧰 Tech Stack
- **Frontend:** React Native (Expo)  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Atlas)  
- **Authentication:** Firebase / Google OAuth  
- **Integration:** Google Calendar API  

---

## 📁 Project Structure

```
TaskMate/
├── backend/                    # Node.js Backend API
│   ├── src/
│   │   ├── models/            # MongoDB Models
│   │   ├── routes/            # API Routes
│   │   ├── middleware/        # Auth & Error Handling
│   │   ├── utils/             # Helper Functions
│   │   └── server.js          # Entry Point
│   ├── package.json
│   └── .env.example
│
├── frontend/                   # React Native App
│   ├── src/
│   │   ├── screens/           # App Screens
│   │   ├── components/        # Reusable Components
│   │   ├── navigation/        # Navigation Setup
│   │   ├── context/           # State Management
│   │   └── utils/             # Helper Functions
│   ├── App.js
│   ├── package.json
│   └── app.json
│
├── docs/                       # Documentation
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- MongoDB (local or Atlas)
- Expo CLI (`npm install -g expo-cli`)

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your configuration:
   - MongoDB connection string
   - JWT secret
   - Firebase credentials
   - Google Calendar API keys
   - OpenAI API key (for AI features)

4. **Start the server:**
   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   # Start Expo
   npm start

   # Run on Android
   npm run android

   # Run on iOS
   npm run ios

   # Run on Web
   npm run web
   ```

---

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/google` - Google OAuth login

### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

### AI Features
- `POST /api/ai/parse-task` - Parse natural language input
- `POST /api/ai/suggest-schedule` - Get AI scheduling suggestions
- `POST /api/ai/optimize-day` - Optimize daily schedule

### Analytics
- `GET /api/analytics/overview` - Get productivity overview
- `GET /api/analytics/trends` - Get productivity trends

### Calendar
- `GET /api/calendar/events` - Get Google Calendar events
- `POST /api/calendar/sync` - Sync with Google Calendar

See [API Documentation](docs/API.md) for detailed information.

---

## 🔐 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_PROJECT_ID=your_firebase_project_id
GOOGLE_CLIENT_ID=your_google_client_id
OPENAI_API_KEY=your_openai_api_key
```

---

## 📱 Features Implementation Status

- ✅ User Authentication (Email/Password)
- ✅ Task CRUD Operations
- ✅ Productivity Analytics
- ✅ User Profile Management
- 🚧 Google OAuth Integration (In Progress)
- 🚧 AI Task Parsing (In Progress)
- 🚧 Google Calendar Sync (In Progress)
- 🚧 Smart Reminders (Planned)
- 🚧 Voice Input (Planned)

---

## 💡 Future Enhancements
- 🎙️ Voice-based task creation  
- 🤝 Team collaboration mode  
- 🌐 Web dashboard for cross-platform access  
- 🔔 Deep integration with Slack / Notion  

---

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

---

## 📈 Why TaskMate?
TaskMate isn't just a scheduler — it's your **personal AI productivity coach**, designed to help you focus on what matters most. Whether you're a student, freelancer, or professional, TaskMate adapts to your lifestyle and keeps you on track effortlessly.  

---

## 🤝 Contributing
Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).

---

## 👥 Authors
- **Danuja Adikari** - *Initial work* - [danujaadikari](https://github.com/danujaadikari)

---

## 🙏 Acknowledgments
- React Native & Expo community
- OpenAI for AI capabilities
- Google Calendar API
- MongoDB Atlas

---

**Made with ❤️ by the TaskMate Team**
