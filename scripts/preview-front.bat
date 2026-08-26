@echo off
chcp 65001 >nul
title ARBOLEDA MULTISERVICIOS - Preview Frontend
echo ========================================
echo ARBOLEDA MULTISERVICIOS - Previsualizar Frontend
echo ========================================
echo.

cd /d "%~dp0..\front"
echo Iniciando preview local en http://localhost:4173...
echo.
npm run preview
