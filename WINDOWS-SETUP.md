# TaskMate - Quick Start Guide for Windows

## ⚠️ Prerequisites Required

Before running TaskMate, you need to install:

### 1. Node.js (Required)
**Download & Install:**
- Visit: https://nodejs.org/
- Download the **LTS version** (v18.x or v20.x recommended)
- Run the installer
- ✅ Check "Automatically install necessary tools" option
- ✅ Make sure "Add to PATH" is selected
- Restart your computer after installation

**Verify Installation:**
Open a **new** PowerShell window and run:
```powershell
node --version
npm --version
```
You should see version numbers (e.g., v20.x.x and 10.x.x)

### 2. MongoDB (Required for Backend)

**Option A: Local Installation**
- Download: https://www.mongodb.com/try/download/community
- Install MongoDB Community Server
- Start MongoDB service

**Option B: MongoDB Atlas (Recommended - Cloud)**
- Sign up at: https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get connection string
- Use this in your `.env` file

### 3. Git (Recommended)
- Download: https://git-scm.com/download/win
- Install with default options

---

## 🚀 Installation Steps

### Step 1: Install Node.js
1. Download from https://nodejs.org/
2. Install the LTS version
3. **Restart your computer**
4. Verify installation in a new PowerShell window

### Step 2: Run Setup Script
Once Node.js is installed, open PowerShell in the TaskMate folder and run:

```powershell
.\setup.bat
```

This will:
- Install all backend dependencies
- Install all frontend dependencies
- Create `.env` configuration file
- Prepare the project for running

### Step 3: Configure Environment
Edit `backend\.env` file with your settings:

```env
# Required
MONGODB_URI=mongodb://localhost:27017/taskmate
JWT_SECRET=your-secret-key-change-this

# Optional (for advanced features)
OPENAI_API_KEY=your-openai-key
GOOGLE_CLIENT_ID=your-google-client-id
```

### Step 4: Run the Application

**Option A: Run Both (Recommended)**
```powershell
.\start-all.bat
```

**Option B: Run Separately**

Backend only:
```powershell
.\start-backend.bat
```

Frontend only (in a new terminal):
```powershell
.\start-frontend.bat
```

---

## 📱 Accessing the Application

### Backend API
- URL: http://localhost:5000
- Health Check: http://localhost:5000/health
- API Docs: See `docs/API.md`

### Frontend App
- Expo DevTools will open in your browser
- Scan QR code with Expo Go app (mobile)
- Press `w` for web version
- Press `a` for Android emulator (if installed)

---

## 🛠️ Troubleshooting

### "node is not recognized"
- ✅ Make sure Node.js is installed
- ✅ Restart your computer after installation
- ✅ Open a **new** PowerShell window
- ✅ Check if Node.js is in PATH: `$env:PATH`

### "npm install fails"
- Run PowerShell as Administrator
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and try again

### "MongoDB connection failed"
- Check if MongoDB is running
- Verify connection string in `.env`
- Use MongoDB Atlas if local setup is difficult

### "Port already in use"
- Backend (5000): `netstat -ano | findstr :5000`
- Kill process: `taskkill /PID <PID> /F`

---

## 📚 Additional Resources

- **Full Documentation**: See `README.md`
- **API Reference**: See `docs/API.md`
- **Setup Guide**: See `docs/SETUP.md`
- **Contributing**: See `CONTRIBUTING.md`

---

## 🎯 Quick Commands Reference

```powershell
# Setup (run once)
.\setup.bat

# Start everything
.\start-all.bat

# Start backend only
.\start-backend.bat

# Start frontend only
.\start-frontend.bat

# Install dependencies manually
cd backend
npm install

cd ..\frontend
npm install
```

---

## ✅ Installation Checklist

- [ ] Node.js installed and verified
- [ ] MongoDB installed or Atlas account created
- [ ] Ran `setup.bat` successfully
- [ ] Configured `backend\.env` file
- [ ] Backend starts without errors
- [ ] Frontend starts and opens DevTools
- [ ] Can access http://localhost:5000/health

---

## 🆘 Need Help?

If you're stuck:
1. Check the error message carefully
2. Verify all prerequisites are installed
3. Make sure you restarted your computer after installing Node.js
4. Open a **new** PowerShell window (important!)
5. Create an issue on GitHub with error details

---

**Once Node.js is installed, simply run `setup.bat` and you're good to go!** 🚀
