@echo off
echo Starting Love Gallery Server...
echo.

echo Server output will be saved to server-log.txt
node simple-server-verbose.js > server-log.txt 2>&1

pause
