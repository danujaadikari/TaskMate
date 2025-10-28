# TaskMate - Setup & Development Guide

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/danujaadikari/TaskMate.git
cd TaskMate
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

## Environment Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/taskmate
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmate

# Authentication
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d

# Firebase (Optional for Google OAuth)
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-client-email

# Google Calendar API (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_REDIRECT_URI=http://localhost:5000/auth/google/callback

# OpenAI (Optional for AI features)
OPENAI_API_KEY=your-openai-api-key

# Security
CORS_ORIGIN=http://localhost:19006
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
ENCRYPTION_KEY=your-32-character-encryption-key
```

## Database Setup

### Local MongoDB

1. Install MongoDB: https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB

   # macOS
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod
   ```

### MongoDB Atlas (Cloud)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

## API Keys Setup

### Firebase (for Google OAuth)

1. Go to https://console.firebase.google.com/
2. Create a new project
3. Enable Authentication > Google Sign-in
4. Download service account key
5. Add credentials to `.env`

### Google Calendar API

1. Go to https://console.cloud.google.com/
2. Create a new project
3. Enable Google Calendar API
4. Create OAuth 2.0 credentials
5. Add credentials to `.env`

### OpenAI API (for AI features)

1. Create account at https://platform.openai.com/
2. Generate API key
3. Add to `.env` as `OPENAI_API_KEY`

## Running the Application

### Development Mode

**Backend:**
```bash
cd backend
npm run dev
```
Server runs on http://localhost:5000

**Frontend:**
```bash
cd frontend
npm start
```
Expo Developer Tools open in browser

### Production Mode

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
```

## Testing the API

### Using cURL

```bash
# Register a user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'

# Get tasks (requires token)
curl -X GET http://localhost:5000/api/tasks \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Using Postman

1. Import the API collection (coming soon)
2. Set environment variables
3. Test endpoints

## Mobile App Testing

### iOS (requires macOS)

```bash
cd frontend
npm run ios
```

### Android

```bash
cd frontend
npm run android
```

### Web

```bash
cd frontend
npm run web
```

## Troubleshooting

### Backend Issues

**MongoDB connection failed:**
- Check if MongoDB is running
- Verify connection string in `.env`
- Check network/firewall settings

**Port already in use:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5000 | xargs kill
```

### Frontend Issues

**Metro bundler cache issues:**
```bash
expo start -c
```

**Module not found errors:**
```bash
rm -rf node_modules
npm install
```

## Useful Commands

```bash
# Backend
npm run dev          # Start dev server with auto-reload
npm start           # Start production server
npm test            # Run tests
npm run lint        # Check code style

# Frontend
npm start           # Start Expo dev server
npm run android     # Run on Android
npm run ios         # Run on iOS
npm run web         # Run in browser
```

## Project Structure Explained

```
backend/
├── src/
│   ├── models/          # Database schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Express middleware
│   ├── utils/           # Helper functions
│   └── server.js        # App entry point
└── package.json

frontend/
├── src/
│   ├── screens/         # App screens
│   ├── context/         # Global state
│   ├── navigation/      # Navigation config
│   └── components/      # Reusable UI
├── App.js              # Main app component
└── package.json
```

## Next Steps

1. ✅ Set up your development environment
2. ✅ Configure environment variables
3. ✅ Start backend and frontend servers
4. ⬜ Explore the codebase
5. ⬜ Implement AI features
6. ⬜ Add Google Calendar integration
7. ⬜ Deploy to production

## Support

- 📧 Email: support@taskmate.app
- 🐛 Issues: https://github.com/danujaadikari/TaskMate/issues
- 💬 Discussions: https://github.com/danujaadikari/TaskMate/discussions

Happy coding! 🚀
