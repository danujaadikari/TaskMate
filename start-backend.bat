@echo off
echo Starting TaskMate Backend Server...
echo.

cd backend

REM Check if node_modules exists
if not exist node_modules (
    echo ERROR: Dependencies not installed!
    echo Please run setup.bat first
    pause
    exit /b 1
)

REM Check if .env exists
if not exist .env (
    echo WARNING: .env file not found!
    echo Creating from template...
    copy .env.example .env
    echo.
    echo Please edit backend/.env with your configuration before continuing.
    pause
)

echo Starting server on http://localhost:5000
echo Press Ctrl+C to stop
echo.

npm run dev
