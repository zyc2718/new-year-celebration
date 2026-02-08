@echo off
title 2026新年感官体验 - 启动中
setlocal enabledelayedexpansion

echo ========================================
echo   正在为您开启 2026 新年定制感官体验
echo   致童怿雅 —— 一封来自远方的信件
echo ========================================
echo.

if not exist "out" (
    echo [错误] 找不到 out 文件夹。
    echo 请确保本脚本与 out 文件夹放在同一个文件夹里。
    pause
    exit
)

:: 直接启动
start "" "out\index.html"

echo.
echo 体验已在浏览器中开启！
echo 祝您新年快乐！
echo.
pause
