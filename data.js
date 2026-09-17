const WORKBOOK = {
  pdf: '8-weeks-of-english-full.pdf',
  pages: 106,
  roadmapPage: 3,
  certificatePage: 106,
  weeks: [
    {week:1, phase:'ACTIVATE', theme:'Everyday you', grammar:'Present simple vs present continuous', speaking:'60–90 sec monologue', writing:'A day in your life', words:'100–150', writingPage:15, openerPage:6},
    {week:2, phase:'ACTIVATE', theme:'People and places', grammar:'Comparisons and degree', speaking:'2 min description', writing:'A person or a place', words:'120–150', writingPage:27, openerPage:18},
    {week:3, phase:'EXPRESS', theme:'Opinions and preferences', grammar:'Opinion structures and hedging', speaking:'2–3 min opinion', writing:'An opinion post', words:'130–180', writingPage:39, openerPage:30},
    {week:4, phase:'EXPRESS', theme:'Stories', grammar:'Narrative tenses + present perfect vs past simple', speaking:'3 min story', writing:'A story from your own life', words:'150–180', writingPage:51, openerPage:42},
    {week:5, phase:'THINK IN ENGLISH', theme:'Work and problems', grammar:'Modals for politeness and guessing', speaking:'Problem → solution', writing:'A message that explains a problem', words:'150–200', writingPage:63, openerPage:54},
    {week:6, phase:'THINK IN ENGLISH', theme:'Plans, guesses and what-ifs', grammar:'Future forms + conditionals', speaking:'Hypotheticals · 3 min', writing:'A hypothetical scenario', words:'170–200', writingPage:75, openerPage:66},
    {week:7, phase:'FLUENCY', theme:'Discussing ideas', grammar:'Relative clauses + linking', speaking:'3–5 min argument', writing:'An argumentative response', words:'180–220', writingPage:87, openerPage:78},
    {week:8, phase:'FLUENCY', theme:'Unscripted', grammar:'Personal error audit', speaking:'5+ min unscripted', writing:'Free writing — no prompt, no safety net', words:'200–250', writingPage:99, openerPage:90}
  ],
  writing: {
    1:{phrases:['I usually…','I tend to…','At the moment I’m…','By the time I…','What I like about it is…'],prompt:'Describe one ordinary weekday from waking up to going to bed. Mix habits (present simple) with what is temporarily true this month (present continuous). Do not make it interesting — make it accurate.'},
    2:{phrases:['He comes across as…','What I like about it is…','It’s known for…','Much quieter than…','You’d probably…'],prompt:'Choose one person you know well or one place you know well — not both. Write it so a reader who has never met them could recognise them. Use at least three degree comparisons.'},
    3:{phrases:['Personally, I’d say…','The reason I say that is…','To be fair…','That said…','For me it comes down to…'],prompt:'Write a comment you could actually post online about something you have a real opinion on — your city, your industry, a rule you disagree with. State the position, give two reasons, and acknowledge one point against you.'},
    4:{phrases:['So this happened last…','At first I thought…','By the time…','Looking back…','In the end it turned out…'],prompt:'Tell one true story from the last year. Set the scene in past continuous, run the events in past simple, and use past perfect at least twice. The reader should be able to draw a timeline from your text.'},
    5:{phrases:['I wanted to flag…','The issue is that…','It might be worth…','Would it be possible to…','Let me know what you think.'],prompt:'Write a real message to a colleague, a client or a landlord: explain a problem, say what caused it, propose two options and ask for a decision. Polite but not stiff. No greeting longer than one line.'},
    6:{phrases:['If I had the chance, I’d…','Suppose…','I’d probably end up…','Chances are…','Looking back, if I hadn’t…'],prompt:'Pick one: a free year with no obligations, or moving permanently to another country. Write what you would actually do — concrete, week by week, not a wish list. Use all three conditional types at least once.'},
    7:{phrases:['The main argument is…','That said…','Where I’d disagree is…','In fact…','A better question might be…'],prompt:'Find an opinion piece you disagree with. Summarise its argument fairly in three sentences, then argue against it. Concede one point honestly. Every paragraph needs at least one relative clause and one linker.'},
    8:{phrases:['To be honest…','What I’ve realised is…','Whereas eight weeks ago…','Which is why…','From here, my plan is…'],prompt:'No prompt this week. Write 200–250 words about anything you actually want to say. Then run the AI correction and check whether your three audited errors show up. That is the real test of the week.'}
  },
  aiPrompt:'Correct my English but keep my meaning and my level. First show my mistakes, then explain the three most important recurring problems, then give me a corrected version. Do not rewrite everything in advanced English.'
};
