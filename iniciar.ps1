Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Iniciando Landing Page do Colo-Colo" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Instalando dependencias (se necessario)..." -ForegroundColor Yellow
npm install
Write-Host ""
Write-Host "Iniciando servidor de desenvolvimento..." -ForegroundColor Green
Write-Host ""
Write-Host "A landing page estara disponivel em: http://localhost:5173" -ForegroundColor Green
Write-Host ""
Write-Host "Pressione Ctrl+C para parar o servidor" -ForegroundColor Yellow
Write-Host ""
npm run dev

