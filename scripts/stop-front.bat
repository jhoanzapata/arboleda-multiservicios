@echo off
title ARBOLEDA MULTISERVICIOS - Detener Frontend
echo ========================================
echo ARBOLEDA MULTISERVICIOS - Detener Frontend
echo ========================================
echo.

echo Liberando puerto 5173...
powershell -Command "Get-Process -Id (Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue).OwningProcess -ErrorAction SilentlyContinue | Stop-Process -Force" >nul 2>&1

echo.
echo Servidor frontend detenido exitosamente.
timeout /t 2 /nobreak >nul
