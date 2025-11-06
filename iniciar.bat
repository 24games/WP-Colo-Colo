@echo off
echo ========================================
echo Iniciando Landing Page do Colo-Colo
echo ========================================
echo.
echo Instalando dependencias (se necessario)...
call npm install
echo.
echo Iniciando servidor de desenvolvimento...
echo.
echo A landing page estara disponivel em: http://localhost:5173
echo.
echo Pressione Ctrl+C para parar o servidor
echo.
call npm run dev
pause

