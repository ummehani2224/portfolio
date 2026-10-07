@echo off
title Portfolio Web Server
echo ==============================================
echo   Starting Ummehani Burhanuddin Portfolio
echo   URL: http://localhost:3000/
echo ==============================================

set ELECTRON_RUN_AS_NODE=1
if exist "%LOCALAPPDATA%\Programs\Microsoft VS Code\Code.exe" (
    start http://localhost:3000/
    "%LOCALAPPDATA%\Programs\Microsoft VS Code\Code.exe" server.js
) else (
    where node >nul 2>nul
    if %errorlevel% equ 0 (
        start http://localhost:3000/
        node server.js
    ) else (
        powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
    )
)
pause
