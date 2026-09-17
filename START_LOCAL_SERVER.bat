@echo off
cd /d %~dp0
start "" http://localhost:8000/
py -m http.server 8000 --bind 0.0.0.0
pause
