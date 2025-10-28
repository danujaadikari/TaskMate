@echo off
echo ========================================
echo Starting TaskMate - Full Stack
echo ========================================
echo.

echo Starting Backend Server...
start "TaskMate Backend" cmd /k "cd backend && npm run dev"

timeout /t 3 /nobreak >nul

echo Starting Frontend App...
start "TaskMate Frontend" cmd /k "cd frontend && npm start"

echo.
echo ========================================
echo Both servers are starting in separate windows
echo ========================================
echo.
echo Backend: http://localhost:5000
echo Frontend: Expo DevTools will open in browser
echo.
echo Close the terminal windows to stop the servers
echo.
pause
