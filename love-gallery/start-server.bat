@echo off
echo Starting Love Gallery Server...
echo.

echo Installing dependencies...
cd /d %~dp0
npm install express cors morgan
echo.

echo Starting server...
node simple-server.js
echo.

pause
