@echo off
chcp 65001 >nul
title ARBOLEDA MULTISERVICIOS - Build Frontend (Produccion)
echo ========================================
echo ARBOLEDA MULTISERVICIOS - Compilar Frontend
echo ========================================
echo.

cd /d "%~dp0..\front"
echo Compilando para produccion con Vite y TypeScript...
echo.
npm run build
echo.
echo Build completado con exito en dist/
pause
