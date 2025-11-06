@echo off
chcp 65001 >nul
cls
echo.
echo ================================================================
echo    LANDING PAGE COLO-COLO - INICIANDO SERVIDOR
echo ================================================================
echo.
echo [1/3] Verificando Node.js...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js não encontrado! Instale o Node.js primeiro.
    pause
    exit /b 1
)
echo ✅ Node.js encontrado!
echo.
echo [2/3] Verificando dependências...
if not exist "node_modules" (
    echo 📦 Instalando dependências pela primeira vez...
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Erro ao instalar dependências!
        pause
        exit /b 1
    )
) else (
    echo ✅ Dependências já instaladas
)
echo.
echo [3/3] Iniciando servidor de desenvolvimento...
echo.
echo ================================================================
echo    SERVIDOR INICIANDO...
echo ================================================================
echo.
echo ⚠️  IMPORTANTE:
echo    1. Aguarde ver a mensagem: "Local: http://localhost:5173/"
echo    2. Clique no link ou copie e cole no navegador
echo    3. NÃO feche esta janela enquanto estiver usando a página
echo.
echo ================================================================
echo.
timeout /t 2 /nobreak >nul
start http://localhost:5173
call npm run dev
pause

