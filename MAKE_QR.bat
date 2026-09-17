@echo off
cd /d %~dp0
set /p URL=Paste the final website URL (for example https://username.github.io/english-workbook/): 
py make_qr.py "%URL%"
pause
