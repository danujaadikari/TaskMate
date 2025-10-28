@echo off
echo ========================================
echo TaskMate - Automated Setup Script
echo ========================================
echo.

REM Check if Node.js is installed
echo [1/6] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Download the LTS version and restart this script after installation.
    echo.
    pause
    exit /b 1
)

echo Node.js found!
node --version
npm --version
echo.

REM Navigate to backend directory
echo [2/6] Setting up Backend...
cd backend

REM Install backend dependencies
echo Installing backend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install backend dependencies
    pause
    exit /b 1
)

REM Create .env file if it doesn't exist
if not exist .env (
    echo Creating .env file from template...
    copy .env.example .env
    echo.
    echo IMPORTANT: Please edit backend/.env with your configuration:
    echo   - MongoDB connection string
    echo   - JWT secret key
    echo   - API keys (Firebase, Google, OpenAI)
    echo.
)

echo Backend setup complete!
echo.

REM Navigate to frontend directory
cd ..\frontend

echo [3/6] Setting up Frontend...
echo Installing frontend dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install frontend dependencies
    pause
    exit /b 1
)

echo Frontend setup complete!
echo.

REM Navigate back to root
cd ..

echo ========================================
echo [4/6] Setup Complete!
echo ========================================
echo.
echo Next Steps:
echo.
echo 1. Configure your environment:
echo    - Edit backend/.env with your settings
echo    - Add MongoDB URI, JWT secret, and API keys
echo.
echo 2. Start MongoDB:
echo    - Install MongoDB from https://www.mongodb.com/try/download/community
echo    - Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas
echo.
echo 3. Run the application:
echo    - Run 'start-backend.bat' to start the backend server
echo    - Run 'start-frontend.bat' to start the frontend app
echo    - Or run 'start-all.bat' to start both
echo.
echo ========================================
pause
