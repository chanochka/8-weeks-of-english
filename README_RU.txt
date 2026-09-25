8 WEEKS OF ENGLISH — WEB VERSION (V1)

ЧТО ВНУТРИ
- index.html — Digital Edition Hub
- reader.html — полный 123-страничный PDF в web-reader
- words.html + words-data.js — словарь недели (фразовые глаголы, идиомы, сочетания) и Grammar plus
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

ДВЕ ВЕРСИИ КНИГИ
- Печатная (самое необходимое): print/8-weeks-of-english-print.pdf — 95 страниц.
  После шпаргалки каждой недели 1 страница «Words that work»: 6 фразовых глаголов,
  3 идиомы, 6 сочетаний, Grammar plus и QR на words.html?week=N.
- Полная (всё расширенное): 8-weeks-of-english-full.pdf — 123 страницы, её показывает сайт.
  После шпаргалки каждой недели 2 страницы: весь словарь (12 / 6 / 10) и Grammar plus
  с упражнениями, быструю проверку и «скажи вслух»; ключ с ответами на с. 120.

КАК ПЕРЕСОБРАТЬ ОБЕ ВЕРСИИ
- Слова и грамматика правятся в одном месте: words-data.js (его же читает words.html).
- py source/build.py — соберёт обе книги заново (нужны Chrome и py -m pip install qrcode pypdf).
- source/base/ — исходные книги без вставок (печатная на 87 страниц, полная на 106).
- source/inserts.html — шаблон новых страниц, source/qr/ — QR-коды.
- Если в полной книге поменяется число страниц, обнови номера в data.js
  (build.py печатает их: opener, word bank, writing для каждой недели).
