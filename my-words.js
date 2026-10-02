// «Мой мир»: phrases for talking about her own life, for the daily cards (cards.html) and the "tell me about…" tasks.
// Not in the book: written for the online edition (2026-10-02). The topics were picked by Claude from what she works on;
// she changes or adds topics. Each phrase: [English, meaning in Russian, example, the example in Russian].
const MY_WORLD = [
  {id: 'studio', name: 'Studio and animation', ru: 'Студия и анимация', items: [
    ['sketch out a storyboard', 'набросать раскадровку', 'Before anything else, I sketch out a rough storyboard.', 'Прежде всего я набрасываю черновую раскадровку.'],
    ['a close-up', 'крупный план', 'This shot is a close-up of her face.', 'Этот кадр — крупный план её лица.'],
    ['a wide shot', 'общий план', 'We open with a wide shot of the whole city.', 'Мы начинаем с общего плана всего города.'],
    ['a start frame', 'стартовый кадр', 'I make the start frame first, then animate it.', 'Сначала я делаю стартовый кадр, потом анимирую его.'],
    ['a character sheet', 'лист персонажа', 'The character sheet shows her from every angle.', 'На листе персонажа она со всех сторон.'],
    ['keep a character on model', 'держать персонажа одинаковым от кадра к кадру', 'The hard part is keeping her on model from shot to shot.', 'Самое сложное — чтобы она была одинаковой от кадра к кадру.'],
    ['go for a painterly look', 'добиваться живописного вида', 'We’re going for a painterly look, a bit like Arcane.', 'Мы добиваемся живописного вида, немного как в Arcane.'],
    ['set the mood', 'задавать настроение', 'The light sets the mood of the whole scene.', 'Свет задаёт настроение всей сцены.'],
    ['a rough cut', 'черновой монтаж', 'The rough cut is about two minutes long.', 'Черновой монтаж длится около двух минут.'],
    ['sign off on something', 'утвердить что-то', 'Nothing goes further until I sign off on it.', 'Ничего не идёт дальше, пока я это не утвержу.'],
    ['back to the drawing board', 'начинать заново, с чистого листа', 'That version didn’t work, so it’s back to the drawing board.', 'Та версия не сработала, так что начинаем заново.'],
    ['it doesn’t read well', 'это плохо считывается зрителем', 'The pose is nice, but it doesn’t read well on a small screen.', 'Поза красивая, но на маленьком экране плохо считывается.']
  ]},
  {id: 'ai', name: 'AI and prompts', ru: 'Нейросети и промпты', items: [
    ['write a prompt', 'написать промпт', 'I wrote a really detailed prompt, and it still ignored half of it.', 'Я написала очень подробный промпт, а она всё равно проигнорировала половину.'],
    ['a reference image', 'референс, картинка-образец', 'I attach two reference images so it gets the style right.', 'Я прикладываю два референса, чтобы она попала в стиль.'],
    ['tweak the prompt', 'подправить промпт', 'I just tweaked the prompt a little, and the result was completely different.', 'Я чуть-чуть подправила промпт, и результат стал совсем другим.'],
    ['it came out great', 'получилось отлично', 'The second one came out great — I’m keeping it.', 'Второй получился отлично — оставляю его.'],
    ['it keeps getting it wrong', 'оно всё время делает это неправильно', 'It keeps getting the hands wrong.', 'Она всё время неправильно рисует руки.'],
    ['generate a few versions', 'сгенерировать несколько вариантов', 'I usually generate a few versions and pick the best one.', 'Обычно я генерирую несколько вариантов и выбираю лучший.'],
    ['on the cheapest settings', 'на самых дешёвых настройках', 'I test everything on the cheapest settings first.', 'Сначала я всё проверяю на самых дешёвых настройках.'],
    ['hit the limit', 'упереться в лимит', 'I hit the daily limit by lunchtime.', 'К обеду я уже упёрлась в дневной лимит.'],
    ['a blind test', 'слепой тест', 'We ran a blind test, so I didn’t know which model made which picture.', 'Мы провели слепой тест, и я не знала, какая модель сделала какую картинку.'],
    ['it’s hit and miss', 'то получается, то нет', 'Video models are still a bit hit and miss.', 'Видео-модели пока то попадают, то нет.'],
    ['save time on something', 'экономить время на чём-то', 'AI saves me hours on the boring parts.', 'Нейросеть экономит мне часы на скучной части работы.'],
    ['in the style of', 'в стиле', 'Make it in the style of a hand-painted film.', 'Сделай это в стиле фильма, нарисованного от руки.']
  ]},
  {id: 'robot', name: 'Building my robot', ru: 'Свой робот', items: [
    ['build a little robot', 'собирать маленького робота', 'I’m building a little robot that talks back.', 'Я собираю маленького робота, который отвечает.'],
    ['solder something on', 'припаять', 'I soldered the speaker on myself.', 'Динамик я припаяла сама.'],
    ['wire something up', 'подключить проводами', 'Once everything was wired up, I switched it on.', 'Когда всё было подключено, я его включила.'],
    ['flash the firmware', 'прошить (прошивку)', 'I flashed new firmware, and it finally worked.', 'Я залила новую прошивку, и он наконец заработал.'],
    ['a loose connection', 'плохой контакт', 'It was just a loose connection.', 'Дело было просто в плохом контакте.'],
    ['it keeps cutting out', 'всё время прерывается', 'The sound keeps cutting out.', 'Звук всё время прерывается.'],
    ['figure out what’s wrong', 'понять, в чём проблема', 'It took me two evenings to figure out what was wrong.', 'Мне понадобилось два вечера, чтобы понять, в чём проблема.'],
    ['trial and error', 'метод проб и ошибок', 'Most of it was trial and error.', 'Почти всё — методом проб и ошибок.'],
    ['turn it up', 'сделать громче', 'It was too quiet, so I turned it up.', 'Было слишком тихо, и я сделала громче.'],
    ['a wake word', 'слово-активатор', 'You say the wake word, and it starts listening.', 'Говоришь слово-активатор, и он начинает слушать.'],
    ['order parts online', 'заказать детали онлайн', 'I ordered the parts online; they took two weeks to arrive.', 'Я заказала детали онлайн; они шли две недели.'],
    ['it’s a work in progress', 'это ещё в процессе', 'He talks, but it’s still a work in progress.', 'Он говорит, но это ещё в процессе.']
  ]},
  {id: 'work', name: 'Working with people', ru: 'Работа с людьми', items: [
    ['go over something', 'пройтись по чему-то, разобрать', 'We go over the storyboard together on a call.', 'Мы вместе проходимся по раскадровке на созвоне.'],
    ['leave a comment', 'оставить комментарий', 'Just leave a comment on the frame you don’t like.', 'Просто оставь комментарий на кадре, который не нравится.'],
    ['give feedback on', 'дать отзыв на', 'Can you give me feedback on the new version?', 'Можешь дать отзыв на новую версию?'],
    ['be on the same page', 'понимать одинаково, быть на одной волне', 'Let’s make sure we’re on the same page before we start.', 'Давай убедимся, что мы понимаем одинаково, прежде чем начать.'],
    ['run it by someone', 'показать кому-то, согласовать', 'Let me run it by my partner first.', 'Дай я сначала покажу это напарнику.'],
    ['meet a deadline', 'уложиться в срок', 'We just about met the deadline.', 'Мы еле-еле уложились в срок.'],
    ['a quick fix', 'быстрое исправление', 'It’s not perfect, but it’s a quick fix for now.', 'Это не идеально, но пока сойдёт как быстрое исправление.'],
    ['get stuck on', 'застрять на', 'I got stuck on the last scene for a whole week.', 'Я застряла на последней сцене на целую неделю.'],
    ['I’m in the middle of something', 'я сейчас занята (посреди дела)', 'Can I call you back? I’m in the middle of something.', 'Можно я перезвоню? Я сейчас посреди дела.'],
    ['take a break from', 'отдохнуть от', 'I need to take a break from screens this weekend.', 'На этих выходных мне нужно отдохнуть от экранов.'],
    ['it’s worth it', 'оно того стоит', 'It takes ages, but it’s worth it.', 'Это занимает целую вечность, но оно того стоит.'],
    ['to be honest', 'честно говоря', 'To be honest, I liked the first version better.', 'Честно говоря, первая версия мне нравилась больше.']
  ]}
];
