8 WEEKS OF ENGLISH — WEB VERSION (V1)

ЧТО ВНУТРИ
- index.html — Digital Edition Hub
- reader.html — полный 106-страничный PDF в web-reader
- writing.html — 8 writing tasks, автосохранение текста локально
- roadmap.html — 8-week roadmap
- certificate.html — digital certificate
- service-worker.js + manifest.webmanifest — PWA / offline mode
- 8-weeks-of-english-full.pdf — последняя полная версия workbook
- make_qr.py / MAKE_QR.bat — создание QR после получения постоянного URL

1. КАК ОТКРЫТЬ ЛОКАЛЬНО НА WINDOWS
Дважды кликни START_LOCAL_SERVER.bat.
Откроется http://localhost:8000/
Не открывай index.html напрямую через file:// — PWA/offline cache так нормально не работает.

2. КАК ОТКРЫТЬ С ТЕЛЕФОНА В ТОЙ ЖЕ WI-FI СЕТИ
Запусти START_LOCAL_SERVER.bat.
В Windows выполни ipconfig и найди IPv4 Address компьютера, например 192.168.1.25.
На телефоне открой http://192.168.1.25:8000/
Windows Firewall может попросить разрешить Python доступ к Private networks — разреши только Private network.
Этот адрес работает только пока компьютер включен и телефон находится в той же локальной сети.
ВАЖНО: это удобный локальный preview, но PWA/offline cache на телефоне обычно требует HTTPS. Для нормального offline режима публикуй сайт на HTTPS-хостинге.

3. ДЛЯ ПОСТОЯННОГО QR НА ПЕЧАТНОЙ КНИГЕ
Сначала размести эту папку на постоянном HTTPS-хостинге (например GitHub Pages или Cloudflare Pages).
После публикации получишь URL вида:
https://username.github.io/english-workbook/

Потом:
- запусти MAKE_QR.bat
- вставь финальный URL
- появится workbook-qr.png
Именно этот QR можно помещать в печатную версию.

4. OFFLINE
После первого открытия сайта PWA кэширует HTML/CSS/JS, обложку и полный PDF.
На телефоне можно добавить сайт на главный экран через браузер.
После успешной первой загрузки приложение сможет открываться без интернета.

5. POCKETBOOK
Кнопка Open PDF открывает полный PDF. На телефоне его можно передать/открыть через PocketBook Reader.
Не делаем QR прямо на локальный PocketBook-файл: такой deep-link не является универсальным между устройствами.

ВАЖНО
Черновики на writing.html сохраняются только в localStorage браузера на текущем устройстве. Они не отправляются на сервер этой web-версией.
