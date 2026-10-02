// The book's pages for book.html — the online edition (her choice "в", 2026-10-02):
// read and tick on the site, write in your own notebook, gap exercises check themselves.
// Keys are page numbers of 8-weeks-of-english-full.pdf. The text is the book's text, taken from that PDF.
// Block types: band, text, cards, card, goal, facts, hub, phrases, checklist, done, gaps, fix, say, listen, find,
// words, gplus, copy, days, measure, notebook, felt. `cat: true` puts her cat over that block (one per page).
// `a` lists every accepted answer (no `a`: her own words, not checked); the first one is shown by "show answer".
// `added: true` marks answers the book does not have (written for the online edition).
const BOOK = {
  hub: 6,  // the week page: links to every page of the week
  order: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],

  6: {
    nav: 'Week 1',
    head: {badge: ['WEEK', '01'], kicker: 'Week 01 · Activate', title: 'Everyday you',
           sub: 'routines, habits, the life you already live', jp: ['始動', '第一週']},
    blocks: [
      {type: 'goal', label: 'This week’s one promise', text: 'You will speak English out loud on all seven days, including the day you do not feel like it.'},
      {type: 'facts', items: [['Grammar', 'Present simple vs present continuous'], ['Speaking target', '60–90 sec monologue'],
                              ['Writing', '100–150 w, your normal day'], ['Week of', '7 days']]},
      {type: 'hub', cat: true, tag: 'This week’s pages', hint: 'a ✓ appears when the Core of a day is done'}
    ]
  },

  7: {
    nav: 'Week 1 · Grammar',
    head: {badge: ['WEEK', '01'], kicker: 'Week 01 · Activate · Grammar cheat sheet',
           title: 'Present simple vs present continuous', sub: 'Everyday you', jp: ['文法', '第一週']},
    blocks: [
      {type: 'band', cat: true, promise: 'You will speak English out loud on all seven days, including the day you do not feel like it.',
       target: '60–90 sec monologue'},
      {type: 'text', html: '<span class="hl">Present simple</span> = things that are generally true: habits, routines, facts, jobs. ' +
        '<span class="hl">Present continuous</span> = happening right now, or a temporary situation around now. ' +
        'Most B1 learners know both forms but pick the wrong one under pressure — that is what today fixes.'},
      {type: 'cards', cards: [
        {tag: 'The formula', html:
          '<div class="fx"><span class="label">Habit · fact</span><span>I / you / we / they + <strong>verb</strong><br>he / she / it + <strong>verb-s</strong></span></div>' +
          '<div class="fx"><span class="label">Right now · temporary</span><span><strong>am / is / are + verb-ing</strong></span></div>'},
        {tag: 'The mistake almost everyone makes', navy: true, sh: 'var(--blue)', html:
          '<div class="wrongline"><span class="mk x">✕</span>I am working in a hospital since 2019.</div>' +
          '<div class="rightline"><span class="mk ok">✓</span>I work in a hospital. <em>(permanent)</em></div>' +
          '<div class="rightline">I’m working from home this month. <em>(temporary)</em></div>'}
      ]},
      {type: 'card', tag: 'How it sounds in real English', tc: 'var(--lav)', sh: 'var(--lav)', bullets: [
        'I work in logistics, but this week I’m covering for my manager.',
        'She usually cycles to work. Today she’s taking the bus — it’s raining.',
        'We don’t normally eat out. We’re trying to save money.',
        'He’s always losing his keys. <em>(present continuous + always = it annoys me)</em>',
        'I’m not sleeping well at the moment.'
      ]},
      // `end: true`: the sentence goes on in her own words after the printed text (a dotted line in the book), not checked.
      {type: 'gaps', id: 'A', tag: 'A · Practise', hint: 'complete each one — the verb is checked, the end of the sentence is yours', added: true, items: [
        {q: 'Every morning I ___ (check) my phone before anything else.', a: ['check']},
        {q: 'Right now I ___ (sit) at', a: ['am sitting'], end: true},
        {q: 'She ___ (not usually / work) on Fridays, but this Friday she', end: true, a: ['doesn’t usually work', 'usually doesn’t work']},
        {q: 'They ___ (build) a new station near my flat — it', a: ['are building'], end: true},
        {q: 'I ___ (try) to stop', a: ['am trying'], end: true}
      ]},
      {type: 'fix', id: 'B', tag: 'B · Find the error', hint: 'one word is wrong in each', tc: 'var(--blue)', sh: 'var(--blue)', added: true, items: [
        {q: 'I am going to the gym three times a week.', a: ['I go to the gym three times a week.', 'go']},
        {q: 'What do you do right now? Are you free?', a: ['What are you doing right now? Are you free?', 'What are you doing right now?', 'are you doing']},
        {q: 'She is speaking four languages.', a: ['She speaks four languages.', 'speaks']}
      ]},
      {type: 'notebook', tag: 'C · Make it yours', tc: 'var(--lav)', sh: 'var(--lav)',
       how: 'Three sentences about your real life — in your notebook.',
       sheet: 'Week 1 · Grammar', parts: [
         {h: 'C · Make it yours', small: 'three sentences about your real life', lines: 3, numbered: true}
       ]},
      {type: 'say', id: 'D', tag: 'D · Say it without thinking', ticks: 3, html:
        'Cover section C. Say your three sentences out loud from memory, then say three new ones. ' +
        'Repeat until none of them need a pause in the middle. <b>This is the only step that makes the grammar automatic.</b>'}
    ]
  },

  // pages 8 and 9 take their words, grammar and answers from words-data.js (WORDS), shared with words.html
  8: {
    nav: 'Week 1 · Words',
    head: {badge: ['WEEK', '01'], kicker: 'Week 01 · Word bank', title: 'Words that work',
           sub: 'Phrasal verbs, idioms and words that go together', jp: ['言葉', '第一週']},
    blocks: [
      {type: 'card', cat: true, tag: '5 minutes · Monday · Thursday · Sunday', tc: 'var(--blue)', sh: 'var(--blue)', html:
        '<p><strong>Monday:</strong> read every line out loud and say your own sentence for three. ' +
        '<strong>Thursday:</strong> use three on purpose in your speaking day. ' +
        '<strong>Sunday:</strong> cover the phrases, read the meanings, retrieve them. ' +
        'Tick a box only when the phrase came out of your mouth in a real sentence.</p>'},
      {type: 'words', week: 1, list: 'phrasal', tag: 'Phrasal verbs', hint: 'the verbs people actually use'},
      {type: 'words', week: 1, list: 'idioms', tag: 'Idioms', hint: 'the ones you will really hear', tc: 'var(--lav)', sh: 'var(--lav)'},
      {type: 'words', week: 1, list: 'colloc', tag: 'Words that go together', hint: 'learn them as one piece', tc: 'var(--yellow)', sh: '#F2D27E'}
    ]
  },

  9: {
    nav: 'Week 1 · Grammar plus',
    head: {badge: ['WEEK', '01'], kicker: 'Week 01 · Grammar plus + practice', title: 'used to · be used to · get used to',
           sub: 'Everyday you', jp: ['練習', '第一週']},
    blocks: [
      {type: 'text', html: WORDS[1].grammar.why},
      {type: 'gplus', week: 1, cat: true},
      {type: 'gaps', id: 'A', week: 1, from: 'practice', tag: 'A · Practise', hint: 'complete each one'},
      {type: 'gaps', id: 'B', week: 1, from: 'check', tag: 'B · Quick check', hint: 'this week’s word bank — from memory first',
       tc: 'var(--blue)', sh: 'var(--blue)'},
      {type: 'checklist', id: 'C', week: 1, from: 'say', tag: 'C · Say it out loud', hint: 'record one on Thursday',
       tc: 'var(--lav)', sh: 'var(--lav)'}
    ]
  },

  10: {
    nav: 'Day 1 · Speak + build',
    head: {badge: ['DAY', '1'], kicker: 'Week 01 · Activate · Monday', title: 'Speak + build', sub: 'Your normal day, out loud',
           jp: ['話す', '一日目・月曜日']},
    blocks: [
      {type: 'goal', text: 'Describe your normal day from start to finish without stopping.'},
      {type: 'phrases', tag: 'Today’s phrases', hint: 'write your own version underneath — in your notebook', items: [
        'I usually get up around…', 'The first thing I do is…', 'After that I tend to…', 'By the end of the day I’m…'
      ]},
      {type: 'checklist', id: 'core', core: true, tag: 'Core · 30–40 min', hint: 'finish these and the day is done', items: [
        'Read the four phrases out loud twice each, then write your own version on the line under each one.',
        'Say your four sentences out loud without looking at the page.',
        'Talk for 60 seconds about your whole day. <b>Do not stop, do not restart.</b>',
        'Write the one word you were missing at the bottom of the page, then look it up.'
      ]},
      {type: 'done', text: 'Nothing is missing, nothing is owed.'},
      {type: 'checklist', id: 'bonus', tag: 'Bonus · 10–20 min', hint: 'optional, always', tc: 'var(--blue)', sh: 'var(--blue)', items: [
        'Record the 60 seconds and listen back once. Write down one thing you would change.',
        '<b>ChatGPT Voice:</b> “Ask me five simple questions about my daily routine. Wait for my full answer before the next question.”'
      ]},
      {type: 'notebook', cat: true, tag: 'In your notebook', tc: 'var(--yellow)', sh: '#F2D27E',
       how: 'Rule this on one page, then write. Everything you write today goes here.',
       sheet: 'Week 1 · Day 1 · Speak + build', parts: [
         {h: 'Today’s phrases', small: 'your own version under each', rows: [
           'I usually get up around…', 'The first thing I do is…', 'After that I tend to…', 'By the end of the day I’m…']},
         {h: 'My day, in my own words', small: 'four sentences · real details, real times', lines: 6},
         {inline: 'One word I needed'}
       ]},
      {type: 'felt'}
    ]
  },
  11: {
    nav: 'Day 2 · Listen',
    head: {badge: ['DAY', '2'], kicker: 'Week 01 · Activate · Tuesday', title: 'Listen', sub: 'Everyday you', jp: ['聞く', '二日目・火曜日']},
    blocks: [
      {type: 'goal', text: 'Catch how people describe ordinary days in unscripted speech.'},
      {type: 'checklist', id: 'hear', tag: 'Listen for these', hint: 'tick each one you hear, then write the full sentence — in your notebook',
       tc: 'var(--lav)', sh: 'var(--lav)', numbered: true, items: [
        'It depends on the day, but…', 'Most mornings I…', 'I’m not really a morning person.', 'I try to… but it doesn’t always happen.']},
      {type: 'find', tag: 'What to find', tc: 'var(--blue)', sh: 'var(--blue)', search: 'native English conversation daily routine',
       where: 'YouTube · Easy English street interviews or BBC Learning English · length: 4–5 min, clear speech',
       steps: ['listen once, no subtitles', 'never pause', 'write what you understood', 'listen again', 'catch 3–5 chunks',
               'now check the transcript', 'what did you miss, and why', 'shadow 20–40 seconds', 'retell it without looking']},
      {type: 'checklist', id: 'core', core: true, tag: 'Core · 30–40 min', hint: 'finish these and the day is done', items: [
        'Work through steps 1–9 above in order. Steps 1–3 before you touch the subtitles.',
        'Write 3–5 chunks you caught into this week’s phrase log — whole phrases, not single words.',
        'Shadow 20–40 seconds: play, pause, copy the speaker exactly, including the rhythm.',
        'Retell what the clip was about out loud, 30 seconds, nothing on screen.']},
      {type: 'done', text: 'Nothing is missing, nothing is owed.'},
      {type: 'checklist', id: 'bonus', tag: 'Bonus · 10–20 min', hint: 'optional, always', tc: 'var(--blue)', sh: 'var(--blue)', items: [
        'Listen to the same clip once more while doing something else. Notice what you catch now.',
        'Find a second clip on the same topic and see whether the same chunks come back.']},
      {type: 'notebook', cat: true, tag: 'In your notebook', tc: 'var(--yellow)', sh: '#F2D27E',
       how: 'Rule this on one page, then write. Everything you write today goes here.',
       sheet: 'Week 1 · Day 2 · Listen', parts: [
         {h: 'Listen for these', small: 'the full sentence you heard', lines: 4, numbered: true},
         {h: 'What I heard', small: 'phrases, half-sentences, fillers — anything that sounded natural rather than correct', lines: 6},
         {inline: 'Hardest sound today'}
       ]},
      {type: 'felt'}
    ]
  },

  12: {
    nav: 'Day 3 · Read + retell',
    head: {badge: ['DAY', '3'], kicker: 'Week 01 · Activate · Wednesday', title: 'Read + retell', sub: 'Everyday you', jp: ['読む', '三日目・水曜日']},
    blocks: [
      {type: 'goal', text: 'Retell someone else’s routine as a short spoken story.'},
      {type: 'phrases', tag: 'Today’s phrases', hint: 'write your own version underneath — in your notebook', items: [
        'Apparently she…', 'What surprised me was…', 'The article says that…', 'In other words…']},
      {type: 'checklist', id: 'core', core: true, tag: 'Core · 30–40 min', hint: 'finish these and the day is done', items: [
        'Read one short text about daily life — BBC News, a blog post, a Reddit thread. 300–500 words, start to finish, no dictionary on the first pass.',
        'Underline five chunks worth keeping. Put them in the phrase log.',
        'Close the text. Retell it out loud from memory in three sentences.',
        'Retell it again, faster, with no notes at all.']},
      {type: 'done', text: 'Nothing is missing, nothing is owed.'},
      {type: 'checklist', id: 'bonus', tag: 'Bonus · 10–20 min', hint: 'optional, always', tc: 'var(--blue)', sh: 'var(--blue)', items: [
        'Write the three-sentence retell down and compare it with the original. What did you drop?',
        'Read one paragraph out loud at the speed you would speak it.']},
      {type: 'notebook', cat: true, tag: 'In your notebook', tc: 'var(--yellow)', sh: '#F2D27E',
       how: 'Rule this on one page, then write. Everything you write today goes here.',
       sheet: 'Week 1 · Day 3 · Read + retell', parts: [
         {h: 'Today’s phrases', small: 'your own version under each', rows: ['Apparently she…', 'What surprised me was…', 'The article says that…', 'In other words…']},
         {h: 'Three-sentence retell', small: 'beginning, middle, and the part that stayed with you', lines: 3, numbered: true},
         {inline: 'New chunk I liked'}
       ]},
      {type: 'felt'}
    ]
  },

  13: {
    nav: 'Day 4 · Speaking day',
    head: {badge: ['DAY', '4'], kicker: 'Week 01 · Activate · Thursday', title: 'Speaking day', sub: 'Everyday you', jp: ['会話', '四日目・木曜日']},
    blocks: [
      {type: 'goal', text: 'Speak for 90 seconds on a question you have not seen before.'},
      {type: 'phrases', tag: 'Today’s phrases', hint: 'write your own version underneath — in your notebook', items: [
        'This week has been…', 'The thing is…', 'I keep meaning to…', 'Honestly, I have no idea.']},
      {type: 'checklist', id: 'core', core: true, tag: 'Core · 30–40 min', hint: 'finish these and the day is done', items: [
        '<b>Drill · 30-second answer.</b> Read the question, start within five seconds: “What is a normal Thursday for you?” Answer for 30 seconds.',
        'Same question again, 90 seconds this time. Add detail rather than repeating yourself.',
        'Use at least three of this week’s phrases on purpose while you speak.',
        'When you get stuck, describe the idea another way. Never switch language mid-sentence.']},
      {type: 'done', text: 'Nothing is missing, nothing is owed.'},
      {type: 'checklist', id: 'bonus', tag: 'Bonus · 10–20 min', hint: 'optional, always', tc: 'var(--blue)', sh: 'var(--blue)', items: [
        '<b>ChatGPT Voice:</b> “Have a 10-minute B1–B2 conversation with me about everyday routines. Do not correct every mistake. At the end tell me my three most frequent mistakes, three expressions I could have used, and one pronunciation issue.”',
        'Say the hardest sentence of the day three more times, slowly, until it comes out whole.']},
      {type: 'notebook', cat: true, tag: 'In your notebook', tc: 'var(--yellow)', sh: '#F2D27E',
       how: 'Rule this on one page, then write. Everything you write today goes here.',
       sheet: 'Week 1 · Day 4 · Speaking day', parts: [
         {h: 'Today’s phrases', small: 'your own version under each', rows: ['This week has been…', 'The thing is…', 'I keep meaning to…', 'Honestly, I have no idea.']},
         {h: 'Where I got stuck', small: 'the sentences you could not finish — then finish them here, properly', lines: 5},
         {inline: 'I spoke for'}
       ]},
      {type: 'felt'}
    ]
  },

  14: {
    nav: 'Day 5 · Grammar',
    head: {badge: ['DAY', '5'], kicker: 'Week 01 · Activate · Friday', title: 'Grammar → real English', sub: 'Everyday you', jp: ['文法', '五日目・金曜日']},
    blocks: [
      {type: 'goal', text: 'Make this week’s grammar automatic, not just understood.'},
      {type: 'phrases', tag: 'Today’s phrases', hint: 'write your own version underneath — in your notebook', items: [
        'I work… / I’m working…', 'I always… / I’m currently…', 'She lives… / She’s staying…', 'We usually… / We’re trying…']},
      {type: 'checklist', id: 'core', core: true, tag: 'Core · 30–40 min', hint: 'finish these and the day is done', items: [
        'Go back to <a href="?page=7">this week’s cheat sheet</a>. Do sections A and B if you have not yet.',
        'Section C: write three sentences about your real life, each one using both forms.',
        'Section D: cover the page and say them out loud. Then say three brand-new ones.',
        'Say each pair fast, one after the other, until neither of them needs a pause.']},
      {type: 'done', text: 'Nothing is missing, nothing is owed.'},
      {type: 'checklist', id: 'bonus', tag: 'Bonus · 10–20 min', hint: 'optional, always', tc: 'var(--blue)', sh: 'var(--blue)', items: [
        '<b>Review · +3 days:</b> cover Monday’s phrases and retrieve them from memory. Tick the +3 boxes.',
        'Write five more pairs, then delete the page. The point was saying them.']},
      {type: 'notebook', cat: true, tag: 'In your notebook', tc: 'var(--yellow)', sh: '#F2D27E',
       how: 'Rule this on one page, then write. Everything you write today goes here.',
       sheet: 'Week 1 · Day 5 · Grammar', parts: [
         {h: 'Today’s phrases', small: 'your own version under each', rows: ['I work… / I’m working…', 'I always… / I’m currently…', 'She lives… / She’s staying…', 'We usually… / We’re trying…']},
         {h: 'My sentences, both forms', small: 'real facts about your real life — no textbook people', lines: 6},
         {inline: 'My usual mistake'}
       ]},
      {type: 'felt'}
    ]
  },

  15: {
    nav: 'Day 6 · Sound natural',
    head: {badge: ['DAY', '6'], kicker: 'Week 01 · Activate · Saturday', title: 'Sound natural', sub: 'Everyday you', jp: ['発音', '六日目・土曜日']},
    blocks: [
      {type: 'goal', text: 'Fix where the stress falls in your sentences.'},
      {type: 'listen', tag: 'Say these', hint: 'the capitals are where the beat lands · ▶ plays it', tc: 'var(--lav)', sh: 'var(--lav)', items: [
        'I usually get UP around SEVEN.', 'The FIRST thing I DO is…', 'It DEPENDS on the DAY.', 'I’m NOT really a MORNING person.']},
      {type: 'cards', cards: [
        {tag: 'Recognise only', navy: true, sh: 'var(--blue)', html:
          '<p class="hint" style="margin:0 0 6px">don’t copy these</p><p><strong>kinda, wanna, gonna</strong> — you will hear these constantly. ' +
          'You do not need to say them. Understanding them is the whole job today.</p>'},
        {tag: 'Practise saying', html:
          '<p class="hint" style="margin:0 0 6px">aim for this</p><p><strong>I WORK in a hospital.</strong> <em class="soft">(not: i work IN a hospital)</em></p>' +
          '<p><strong>It DEPENDS on the day.</strong></p><p style="margin-top:6px">Content words loud, small words quick and quiet.</p>'}
      ]},
      {type: 'checklist', id: 'core', core: true, tag: 'Core · 30–40 min', hint: 'finish these and the day is done', items: [
        'Find a native version of each sentence: search the phrase on <a href="https://youglish.com/" target="_blank" rel="noopener">YouGlish</a>, or ask ChatGPT Voice “Say this sentence naturally three times: slow, normal, conversational.”',
        '<b>Listen → copy → record → compare.</b> Do all four for each sentence.',
        'Say each one inside a longer sentence about today.',
        'Pick the one sound or beat that gave you away and drill it ten times.']},
      {type: 'done', text: 'Nothing is missing, nothing is owed.'},
      {type: 'checklist', id: 'bonus', tag: 'Bonus · 10–20 min', hint: 'optional, always', tc: 'var(--blue)', sh: 'var(--blue)', items: [
        'Record 30 seconds of Monday’s monologue again and listen for the rhythm, not the words.',
        'Read one paragraph out loud, tapping the table on every stressed word.']},
      {type: 'notebook', cat: true, tag: 'In your notebook', tc: 'var(--yellow)', sh: '#F2D27E',
       how: 'Rule this on one page, then write. Everything you write today goes here.',
       sheet: 'Week 1 · Day 6 · Sound natural', parts: [
         {h: 'Sound notes', small: 'what your mouth had to do differently — be physical about it', lines: 6},
         {inline: 'Sound to drill'}
       ]},
      {type: 'felt'}
    ]
  },

  16: {
    nav: 'Day 7 · Review + reset',
    head: {badge: ['DAY', '7'], kicker: 'Week 01 · Activate · Sunday', title: 'Review + reset', sub: 'Everyday you', jp: ['復習', '七日目・日曜日']},
    blocks: [
      {type: 'goal', text: 'Prove to yourself that week one actually happened.'},
      {type: 'phrases', tag: 'Today’s phrases', hint: 'write your own version underneath — in your notebook', items: [
        'This week I managed to…', 'What I found difficult was…', 'Next week I want to…', 'I’m starting to…']},
      {type: 'checklist', id: 'core', core: true, tag: 'Core · 30–40 min', hint: 'finish these and the day is done', items: [
        '<b>Review · +7 days:</b> cover the phrase log, retrieve every chunk out loud, tick only what came without looking.',
        'Choose the five phrases you must use out loud next week. Write them in the log footer.',
        'Speak for two minutes about your week. In English, alone, no notes.',
        'Fill in the <a href="?page=19">week review page</a>: the seven numbers, honestly.']},
      {type: 'done', text: 'Nothing is missing, nothing is owed.'},
      {type: 'checklist', id: 'bonus', tag: 'Bonus · 10–20 min', hint: 'optional, always', tc: 'var(--blue)', sh: 'var(--blue)', items: [
        'Colour in this week on the 56-day poster and set out next week’s pages.',
        'Write 60 words about the best moment of the week. No corrections.']},
      {type: 'notebook', cat: true, tag: 'In your notebook', tc: 'var(--yellow)', sh: '#F2D27E',
       how: 'Rule this on one page, then write. Everything you write today goes here.',
       sheet: 'Week 1 · Day 7 · Review + reset', parts: [
         {h: 'Today’s phrases', small: 'your own version under each', rows: ['This week I managed to…', 'What I found difficult was…', 'Next week I want to…', 'I’m starting to…']},
         {h: 'Week one, out loud', small: 'the two-minute summary you just said — not a better version, the one you said', lines: 6},
         {inline: 'Best moment'}
       ]},
      {type: 'felt'}
    ]
  },

  17: {
    nav: 'Week 1 · Writing',
    head: {badge: ['WEEK', '01'], kicker: 'Week 01 · One piece of writing', title: 'A day in your life', sub: '100–150 words', jp: ['書く', '第一週']},
    blocks: [
      {type: 'phrases', tag: 'Before writing', hint: 'work these in on purpose', chips: true, items: [
        'I usually…', 'I tend to…', 'At the moment I’m…', 'By the time I…', 'What I like about it is…']},
      {type: 'card', tag: 'Write', navy: true, sh: 'var(--navy)', bg: 'var(--sky)', html:
        '<p>Describe one ordinary weekday from waking up to going to bed. Mix habits (present simple) with what is temporarily true ' +
        'this month (present continuous). Do not make it interesting — make it accurate.</p>'},
      {type: 'notebook', cat: true, tag: 'In your notebook', tc: 'var(--yellow)', sh: '#F2D27E',
       how: 'Write the text by hand. Prefer to type? <a href="writing.html?week=1">Weekly writing</a> counts the words for you.',
       sheet: 'Week 1 · Writing', parts: [
         {h: 'A day in your life', small: '100–150 words', lines: 14},
         {h: 'Rewrite', small: 'the three recurring problems, in your own new sentences — say each one out loud too', lines: 3, numbered: true}
       ]},
      {type: 'checklist', id: 'check', tag: 'Check before you show anyone', tc: 'var(--lav)', sh: 'var(--lav)', cols: true, items: [
        'verb tense', 'articles', 'prepositions', 'sentence linking', 'repeated vocabulary', 'unnatural translation']},
      {type: 'copy', tag: 'AI correction', hint: 'paste this, then your text', text:
        'Correct my English but keep my meaning and my level. First show my mistakes, then explain the three most important recurring problems, then give me a corrected version. Do not rewrite everything in advanced English.'}
    ]
  },

  18: {
    nav: 'Week 1 · Phrase log',
    head: {badge: ['WEEK', '01'], kicker: 'Week 01 · Activate', title: 'Phrase log', sub: 'Everyday you', jp: ['表現', '第一週']},
    blocks: [
      {type: 'card', tag: 'Only phrases you actually met', html:
        '<p>In listening, reading, a conversation, or a word you wanted and could not find. Whole chunks, not single words. ' +
        'Tick a review box only when you retrieved it <strong>without looking at the page</strong>.</p>'},
      {type: 'notebook', cat: true, tag: 'In your notebook', tc: 'var(--yellow)', sh: '#F2D27E',
       how: 'Give the log a page of its own: you come back to it all week. Turn the notebook sideways if the columns are tight.',
       sheet: 'Week 1 · Phrase log', parts: [
         {table: ['Phrase or chunk', 'What it means (in English)', 'My own sentence', '+1  +3  +7  +14'], rows: 16},
         {h: 'Five I must use out loud next week', lines: 5, numbered: true}
       ]},
      {type: 'card', tag: 'How to review', hint: 'pick one, never just re-read', tc: 'var(--lav)', sh: 'var(--lav)', html:
        '<p>Cover it and recall · finish a sentence with it · use it in a brand-new sentence · work it into a 60-second monologue · answer a question with it.</p>'},
      {type: 'card', tag: 'Coming back this week', tc: 'var(--blue)', sh: 'var(--blue)', html:
        '<p><strong>Nothing yet — this is week one</strong> — find those pages, cover the English, and retrieve five of them out loud before Sunday.</p>'}
    ]
  },

  19: {
    nav: 'Week 1 · Review',
    head: {badge: ['WEEK', '01'], kicker: 'Week 01 · Activate', title: 'Week review', sub: 'Everyday you', jp: ['振り返り', '第一週']},
    blocks: [
      {type: 'days', cat: true, tag: 'Days I showed up', hint: 'a day lights up when its Core is done — or tap it', pages: [10, 11, 12, 13, 14, 15, 16]},
      {type: 'measure', tag: 'Measure it', hint: 'the same seven numbers every week', tc: 'var(--blue)', sh: 'var(--blue)'},
      {type: 'notebook', tag: 'In your notebook', tc: 'var(--yellow)', sh: '#F2D27E',
       how: 'Rule this on one page, then write.',
       sheet: 'Week 1 · Review', parts: [
         {h: 'Something I said easily', lines: 2},
         {h: 'Where I got stuck', lines: 2},
         {h: 'Five things I can say now that I could not say on Monday', lines: 5, numbered: true},
         {h: 'Next week I will change one thing', lines: 2}
       ]},
      {type: 'card', tag: 'Carry forward', tc: 'var(--lav)', sh: 'var(--lav)', html:
        '<p>Copy your five phrases onto next Monday’s page. If you did not use last week’s five, they come with you again.</p>'}
    ]
  }
};
