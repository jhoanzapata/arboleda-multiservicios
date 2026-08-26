@echo off
title ARBOLEDA MULTISERVICIOS - Frontend
echo ========================================
echo ARBOLEDA MULTISERVICIOS - Iniciar Frontend
echo ========================================
echo.

cd /d "%~dp0..\front"
echo Iniciando servidor frontend en http://localhost:5173...
echo.
call npm run dev
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: No se pudo iniciar el servidor frontend.
    pause
)
