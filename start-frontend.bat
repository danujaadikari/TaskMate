@echo off
echo Starting TaskMate Frontend App...
echo.

cd frontend

REM Check if node_modules exists
if not exist node_modules (
    echo ERROR: Dependencies not installed!
    echo Please run setup.bat first
    pause
    exit /b 1
)

echo Starting Expo development server...
echo The Metro bundler will open in your browser
echo.
echo To run on:
echo   - Android: Press 'a'
echo   - iOS: Press 'i' (Mac only)
echo   - Web: Press 'w'
echo.
echo Press Ctrl+C to stop
echo.

npm start
