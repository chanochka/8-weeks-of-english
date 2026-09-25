// Word bank + Grammar plus for 8 Weeks of English.
// One source for both editions: the print insert shows the first
// PRINT.phrasal / PRINT.idioms / PRINT.colloc items of each list and the
// short grammar block; words.html shows everything.
const PRINT = {phrasal: 6, idioms: 3, colloc: 6};

const WORDS = {
  1: {
    theme: "Everyday you",
    grammar: {
      title: "used to · be used to · get used to",
      why: "Three look-alikes that B1 speakers mix up all the time. One is about the past, two are about what feels normal.",
      formula: [
        ["PAST HABIT, NOT NOW", "used to + verb — I used to smoke."],
        ["NORMAL FOR ME", "be used to + -ing / noun — I’m used to getting up early."],
        ["BECOMING NORMAL", "get used to + -ing / noun — I’m getting used to the noise."]
      ],
      wrong: "I am used to get up early.",
      right: "I’m used to getting up early.",
      examples: [
        "I used to hate mornings. Now I’m used to them.",
        "It took me months to get used to working from home.",
        "We didn’t use to have a car.",
        "Every summer we’d go to my gran’s."
      ],
      note: "Would can replace used to for repeated past actions (We’d go to the lake every Sunday), but not for states: I used to have long hair — never I would have long hair. And used to is only for the past: I usually walk to work, not I use to walk to work.",
      practice: [
        ["When I was a kid, I ______ (play) outside every day.", "used to play"],
        ["I’ve lived next to the station for years, so I ______ (the noise).", "’m used to the noise"],
        ["She’s slowly ______ (work) nights.", "getting used to working"],
        ["Did you ______ (have) long hair at school?", "use to have"],
        ["I’m still not ______ (speak) English on the phone.", "used to speaking"]
      ]
    },
    phrasal: [
      ["sleep in", "sleep later than usual, on purpose", "I sleep in on Sundays — never before ten."],
      ["run out of", "use all of something so none is left", "We’ve run out of coffee again."],
      ["catch up on", "do something you had no time for earlier", "Saturday morning is when I catch up on emails."],
      ["put off", "delay something you do not want to do", "I keep putting off booking the dentist."],
      ["get through", "manage to finish something long or hard", "Coffee is how I get through Monday mornings."],
      ["wind down", "relax after a busy time", "I read for twenty minutes to wind down before bed."],
      ["nod off", "fall asleep without meaning to", "I nodded off on the sofa halfway through the film."],
      ["fit in", "find time for something", "I try to fit in a walk at lunchtime."],
      ["get round to", "finally do something you kept meaning to do", "I never get round to ironing."],
      ["pop out", "leave for a short time", "I’m just popping out to the shop — back in ten minutes."],
      ["head out", "leave, start going somewhere", "I usually head out around half seven."],
      ["clear out", "tidy a space by throwing things away", "This weekend I’m finally clearing out the wardrobe."]
    ],
    idioms: [
      ["a creature of habit", "someone who does the same things the same way every day", "I’m a real creature of habit — same breakfast every morning."],
      ["snowed under", "having far too much work", "I’m completely snowed under this week."],
      ["call it a day", "stop working for today", "It’s nine o’clock. Let’s call it a day."],
      ["in a rut", "stuck in a boring routine", "I felt like I was in a rut, so I changed jobs."],
      ["on the go", "busy and active all the time", "I’m on the go from seven till seven."],
      ["burn the midnight oil", "work or study late at night", "I burned the midnight oil before the exam."]
    ],
    colloc: [
      ["stick to a routine", "I’m trying to stick to a routine, even at weekends."],
      ["make time for", "I always make time for a proper breakfast."],
      ["a hectic schedule", "I have a hectic schedule on Tuesdays."],
      ["grab a bite", "Let’s grab a bite before the film."],
      ["run errands", "I spend Saturday mornings running errands."],
      ["skip breakfast", "I skip breakfast more often than I should."],
      ["have a lie-in", "I had a lie-in this morning — it was lovely."],
      ["have an early night", "I’m exhausted. I’m going to have an early night."],
      ["get some fresh air", "I need to get some fresh air."],
      ["the rush hour", "I avoid the rush hour if I can."]
    ],
    check: [
      ["We’ve ______ milk. Can you buy some on the way home?", "run out of"],
      ["I keep ______ my tax return. I really need to do it.", "putting off"],
      ["It’s late and we’re all tired. Let’s ______.", "call it a day"],
      ["On Sundays I ______ until ten.", "sleep in"],
      ["I’m ______ this week — three deadlines and a trip.", "snowed under"],
      ["I try to ______ a routine, even when I’m travelling.", "stick to"]
    ],
    say: [
      "Describe your weekday using three phrasal verbs from this page. 60 seconds.",
      "What did you use to do every day five years ago that you don’t do now?",
      "What was hard to get used to in your current job or home?"
    ]
  },

  2: {
    theme: "People and places",
    grammar: {
      title: "The passive for places and things",
      why: "When you describe a place, who did it is usually unknown or unimportant. The passive puts the place first.",
      formula: [
        ["FACTS NOW", "is / are + past participle — It’s known for its bridges."],
        ["HISTORY", "was / were + past participle — It was built in 1850."],
        ["CHANGES", "has been / is being + past participle — It’s been turned into flats."]
      ],
      wrong: "The castle was build in 1300. My town is locate near the sea.",
      right: "The castle was built in 1300. My town is located near the sea.",
      examples: [
        "The old cinema has been turned into a gym.",
        "Most of the cafés here are run by families.",
        "The station is being renovated, so use the side entrance.",
        "It was designed by a famous architect."
      ],
      note: "Add by + person only when the person matters: It was designed by Gaudí. Otherwise leave it out — nobody needs to hear that the road was repaired by some workers.",
      practice: [
        ["The cathedral ______ (build) in the 14th century.", "was built"],
        ["Our street ______ (currently / repair).", "is currently being repaired"],
        ["The town ______ (know) for its wine.", "is known"],
        ["The old factory ______ (turn) into a market last year.", "was turned"],
        ["Since 2020 the park ______ (completely / redesign).", "has been completely redesigned"]
      ]
    },
    phrasal: [
      ["take after", "look or behave like an older relative", "She takes after her dad — same laugh, same temper."],
      ["get on (well) with", "have a good relationship with", "I get on really well with my neighbours."],
      ["look up to", "admire and respect", "I’ve always looked up to my older sister."],
      ["put up with", "accept something annoying", "I put up with the noise because the rent is cheap."],
      ["show someone around", "give someone a tour of a place", "Let me show you around the old town."],
      ["do up", "repair and decorate an old building", "They’re doing up the old station."],
      ["settle in", "start to feel at home in a new place", "It took me a few months to settle in."],
      ["move out", "leave the place where you live", "I moved out of my parents’ place at twenty."],
      ["stand out", "be easy to notice", "The red church really stands out."],
      ["fall out (with)", "argue and stop being friends", "We fell out over something really stupid."],
      ["grow apart", "slowly become less close", "We grew apart after school."],
      ["turn into", "change and become something else", "The area has turned into a tourist trap."]
    ],
    idioms: [
      ["in the middle of nowhere", "far from towns and people", "They live in the middle of nowhere — the nearest shop is ten kilometres away."],
      ["down-to-earth", "practical, friendly and not arrogant", "She’s really down-to-earth for someone so successful."],
      ["off the beaten track", "away from the places tourists usually go", "The best cafés are off the beaten track."],
      ["a stone’s throw from", "very close to", "My flat is a stone’s throw from the station."],
      ["like chalk and cheese", "completely different (two people)", "My brother and I are like chalk and cheese."],
      ["go the extra mile", "do more than people expect", "She always goes the extra mile for her friends."]
    ],
    colloc: [
      ["within walking distance", "Everything I need is within walking distance."],
      ["packed with tourists", "In summer the old town is packed with tourists."],
      ["a laid-back atmosphere", "The café has a really laid-back atmosphere."],
      ["a close-knit community", "It’s a close-knit community — everyone knows everyone."],
      ["a great sense of humour", "He has a great sense of humour."],
      ["make a good first impression", "She made a really good first impression."],
      ["breathtaking views", "The flat has breathtaking views of the river."],
      ["a strong personality", "My grandmother had a very strong personality."],
      ["a run-down area", "It used to be a run-down area, but it’s changed a lot."],
      ["well worth a visit", "The market is well worth a visit."]
    ],
    check: [
      ["Everyone says I ______ my mum. We even walk the same way.", "take after"],
      ["The flat is tiny, but I ______ it because the location is perfect.", "put up with"],
      ["My office is ______ from here — about two minutes on foot.", "a stone’s throw"],
      ["The museum is ______ from the station — you don’t need a taxi.", "within walking distance"],
      ["They’re ______ the old house — new windows, new kitchen.", "doing up"],
      ["He’s very ______. He never shows off.", "down-to-earth"]
    ],
    say: [
      "Describe a relative you take after — or don’t. 60 seconds.",
      "Give a spoken tour of your area with two passives: what it’s known for and what was built when.",
      "Describe a place off the beaten track that you love."
    ]
  },

  3: {
    theme: "Opinions and preferences",
    grammar: {
      title: "Verb + -ing or verb + to",
      why: "After some verbs English wants -ing, after others to. There is no logic you can feel — you learn the common ones as chunks.",
      formula: [
        ["+ -ING", "enjoy · mind · avoid · can’t stand · keep · feel like · suggest"],
        ["+ TO", "want · decide · refuse · tend · hope · seem · would like"],
        ["NO TO", "I’d rather + verb · let / make someone + verb"]
      ],
      wrong: "I enjoy to cook. I suggest you to go. I’d rather to stay.",
      right: "I enjoy cooking. I suggest going. I’d rather stay.",
      examples: [
        "I can’t stand waiting in queues.",
        "I tend to avoid arguing about politics.",
        "I don’t feel like going out tonight.",
        "They refused to give us a refund."
      ],
      note: "After a preposition it is always -ing: I’m thinking of leaving · I’m interested in learning · instead of complaining. And some verbs change meaning: I stopped to buy coffee (I stopped walking in order to buy it) · I stopped buying coffee (I don’t buy it any more).",
      practice: [
        ["I don’t mind ______ (work) late if I have to.", "working"],
        ["They refused ______ (change) the rule.", "to change"],
        ["I’d rather ______ (walk) than take the bus.", "walk"],
        ["She keeps ______ (tell) me it’s fine.", "telling"],
        ["I’m thinking of ______ (quit) the gym.", "quitting"]
      ]
    },
    phrasal: [
      ["go along with", "accept or agree, often without being sure", "I went along with the plan, but I wasn’t happy about it."],
      ["come round (to)", "change your mind and agree", "She’ll come round to the idea eventually."],
      ["back up", "support with facts or examples", "Can you back that up with an example?"],
      ["point out", "tell someone a fact they had not noticed", "He pointed out that it would cost twice as much."],
      ["stand up for", "defend a person or an idea", "You have to stand up for what you believe in."],
      ["rule out", "decide something is not possible", "I wouldn’t rule it out completely."],
      ["talk someone into", "persuade someone to do something", "She talked me into buying the expensive one."],
      ["come up with", "think of an idea or a plan", "Who came up with this rule?"],
      ["be into", "like, be interested in (informal)", "I’m really into true-crime podcasts."],
      ["go off", "stop liking something", "I’ve gone off coffee lately."],
      ["side with", "support one person in an argument", "My mum always sides with my brother."],
      ["brush off", "refuse to take something seriously", "He just brushed off my suggestion."]
    ],
    idioms: [
      ["sit on the fence", "avoid choosing a side", "Stop sitting on the fence — which one do you prefer?"],
      ["not my cup of tea", "not something I like", "Jazz isn’t really my cup of tea."],
      ["see eye to eye", "agree completely", "We don’t always see eye to eye on money."],
      ["have mixed feelings", "feel both positive and negative", "I have mixed feelings about working from home."],
      ["play devil’s advocate", "argue the other side to test an idea", "Let me play devil’s advocate for a second."],
      ["a matter of taste", "it depends on what each person likes", "Whether it’s beautiful is a matter of taste."]
    ],
    colloc: [
      ["have strong views on", "My dad has strong views on everything."],
      ["a valid point", "That’s a valid point, but I still disagree."],
      ["change your mind", "What would make you change your mind?"],
      ["a controversial topic", "Tourism is a controversial topic in my city."],
      ["make a case for", "She made a good case for a four-day week."],
      ["a heated discussion", "We had a heated discussion about it at dinner."],
      ["strongly disagree", "I strongly disagree with that."],
      ["a fair point", "Fair point — I hadn’t thought of that."],
      ["take something seriously", "Nobody took my idea seriously."],
      ["from my point of view", "From my point of view, it’s a waste of money."]
    ],
    check: [
      ["I didn’t want to go, but my friend ______ me ______ it.", "talked … into"],
      ["Horror films are not ______. I prefer comedies.", "my cup of tea"],
      ["He ______ that we had forgotten to count the tax.", "pointed out"],
      ["You can’t agree with both of us — stop ______!", "sitting on the fence"],
      ["At first she hated the plan, but she ______ in the end.", "came round"],
      ["That’s ______, but I still think it’s too expensive.", "a valid point / a fair point"]
    ],
    say: [
      "Give your opinion on remote work with one idiom and two -ing verbs (I can’t stand…, I enjoy…). 60 seconds.",
      "Play devil’s advocate: defend something you actually dislike.",
      "Tell the story of a time someone talked you into something."
    ]
  },

  4: {
    theme: "Stories",
    grammar: {
      title: "Reported speech — telling what people said",
      why: "Every story has other people’s words in it. B2 speakers report them instead of acting out every line.",
      formula: [
        ["SAY / TELL", "She said (that) she was tired · He told me (that) he’d missed the train."],
        ["ONE STEP BACK", "is → was · has done → had done · will → would · can → could"],
        ["QUESTIONS", "asked if / asked where + normal word order: She asked where I lived."]
      ],
      wrong: "He said me that he was late. She asked me where do I live.",
      right: "He told me he was late. She asked me where I lived.",
      examples: [
        "My boss told me to take the day off.",
        "He asked if I’d seen his keys.",
        "She asked me not to tell anyone.",
        "They said they’d call back, but they never did."
      ],
      note: "Requests: told me to / asked me not to + verb. If something is still true, you don’t have to move the tense back: She said she lives in Kyiv. In casual stories people often switch to the present to make it vivid: So he goes, “Are you serious?”",
      practice: [
        ["“I’m leaving.” → She said she ______ leaving.", "was"],
        ["“Can you help me?” → He asked ______ I could help him.", "if"],
        ["“Don’t be late.” → She told me ______ be late.", "not to"],
        ["“Where do you work?” → He asked me where ______.", "I worked"],
        ["“I’ve never been there.” → She said she ______ never been there.", "had"]
      ]
    },
    phrasal: [
      ["end up", "finally be somewhere or do something you did not plan", "We ended up sleeping at the airport."],
      ["set off", "start a journey", "We set off at five to beat the traffic."],
      ["break down", "stop working (a car, a machine)", "The car broke down in the middle of nowhere."],
      ["run into", "meet someone by chance", "Guess who I ran into at the station?"],
      ["get away with", "do something wrong and not be punished", "He was late every day and somehow got away with it."],
      ["make up", "invent a story or an excuse", "I made up an excuse and left early."],
      ["find out", "discover a fact", "I found out later that she’d known all along."],
      ["show up", "arrive, often late or unexpectedly", "He showed up two hours late with no explanation."],
      ["carry on", "continue", "We just carried on as if nothing had happened."],
      ["work out", "understand, solve", "It took me ages to work out what had happened."],
      ["burst into (tears / laughter)", "suddenly start crying or laughing", "When she saw the cake, she burst into tears."],
      ["calm down", "become less upset", "It took me an hour to calm down."]
    ],
    idioms: [
      ["out of the blue", "suddenly and unexpectedly", "Out of the blue, he called me after ten years."],
      ["a blessing in disguise", "something bad that turns out to be good", "Missing that train was a blessing in disguise."],
      ["my heart sank", "I suddenly felt sad or worried", "When I saw the queue, my heart sank."],
      ["in the nick of time", "only just in time", "We got to the gate in the nick of time."],
      ["the last straw", "the final problem that makes you lose patience", "When the bus didn’t come, that was the last straw."],
      ["once in a blue moon", "very rarely", "I only see him once in a blue moon."]
    ],
    colloc: [
      ["lose track of time", "We were talking and completely lost track of time."],
      ["a last-minute change of plan", "There was a last-minute change of plan."],
      ["get completely lost", "We got completely lost on the way back."],
      ["by pure chance", "We met by pure chance at a friend’s wedding."],
      ["a narrow escape", "Nobody was hurt — it was a narrow escape."],
      ["miss the last train", "We missed the last train and had to walk."],
      ["for the first time in ages", "I went dancing for the first time in ages."],
      ["pouring with rain", "It was pouring with rain and I had no umbrella."],
      ["a close call", "The car stopped just in time. That was a close call."],
      ["an unexpected turn of events", "Then there was an unexpected turn of events."]
    ],
    check: [
      ["We wanted a quiet night in, but we ______ dancing until three.", "ended up"],
      ["I ______ my old teacher at the supermarket yesterday.", "ran into"],
      ["Losing that job was ______ — I found a much better one.", "a blessing in disguise"],
      ["We were chatting and ______ — suddenly it was midnight.", "lost track of time"],
      ["Halfway up the mountain the bus ______.", "broke down"],
      ["She called me completely ______ after five years of silence.", "out of the blue"]
    ],
    say: [
      "Tell a story that ended differently than planned. Use end up, find out and one idiom.",
      "Report a real conversation from this week: what did someone say, tell you or ask you?",
      "Talk about a close call you had. 90 seconds."
    ]
  },

  5: {
    theme: "Work and problems",
    grammar: {
      title: "Present perfect continuous — what you’ve been doing",
      why: "At work you constantly explain what has been going on up to now. This tense does exactly that, and it is the one B1 speakers avoid.",
      formula: [
        ["STILL GOING", "have / has been + -ing — I’ve been working on it since Monday."],
        ["JUST STOPPED, RESULT VISIBLE", "You look tired. Have you been working late?"],
        ["HOW LONG vs HOW MANY", "been + -ing for time · present perfect for a number: I’ve sent four emails."]
      ],
      wrong: "I am working on this since Monday. I’ve been writing three emails.",
      right: "I’ve been working on this since Monday. I’ve written three emails.",
      examples: [
        "We’ve been having problems with the server all week.",
        "Sorry I’m late — have you been waiting long?",
        "I’ve been trying to reach you all morning.",
        "They’ve been working on a fix since yesterday."
      ],
      note: "State verbs don’t take -ing, even here: I’ve known him for years, not I’ve been knowing him. The same goes for have (= own), like, believe, understand, need.",
      practice: [
        ["I ______ (try) to call you all morning!", "’ve been trying"],
        ["How long ______ you ______ (work) here?", "have … been working"],
        ["I ______ (send) four emails so far.", "’ve sent"],
        ["You look exhausted. ______ you ______ (sleep) badly?", "Have … been sleeping"],
        ["We ______ (wait) for their answer since Tuesday.", "’ve been waiting"]
      ]
    },
    phrasal: [
      ["deal with", "handle a problem or a person", "I deal with complaints most of the day."],
      ["figure out", "find the answer or the reason", "We still haven’t figured out what caused it."],
      ["follow up (on)", "check or act on something later", "I’ll follow up on this tomorrow morning."],
      ["take on", "accept work or responsibility", "I’ve taken on too much this month."],
      ["fall behind", "not keep up with a plan or schedule", "We’ve fallen behind schedule because of the delays."],
      ["run something by someone", "tell someone an idea to get their opinion", "Can I run something by you before the meeting?"],
      ["sort out", "fix, organise", "Let’s sort it out before Friday."],
      ["come up", "happen unexpectedly", "Something’s come up — can we move the call?"],
      ["back out (of)", "decide not to do what you agreed", "The client backed out at the last minute."],
      ["carry out", "do a task, a test, a plan", "We carried out a few tests last week."],
      ["look into", "investigate", "I’ll look into it and let you know."],
      ["set up", "arrange, organise", "Could you set up a meeting for Monday?"]
    ],
    idioms: [
      ["get the ball rolling", "start something", "Let’s get the ball rolling with a quick call."],
      ["back to square one", "back at the start after something failed", "The test failed, so we’re back to square one."],
      ["on the same page", "agreeing, understanding the same thing", "Let’s make sure we’re all on the same page."],
      ["not rocket science", "not difficult", "Come on, it’s not rocket science."],
      ["a steep learning curve", "a lot to learn quickly", "The first month was a steep learning curve."],
      ["touch base", "contact someone briefly", "Let’s touch base on Friday."]
    ],
    colloc: [
      ["meet a deadline", "We can’t meet the deadline without more people."],
      ["tackle a problem", "We need to tackle the problem, not the symptoms."],
      ["raise an issue", "I’d like to raise an issue about the schedule."],
      ["make progress", "We’ve made good progress this week."],
      ["take responsibility for", "I take full responsibility for the mistake."],
      ["a quick fix", "There’s no quick fix for this."],
      ["a tight budget", "We’re working with a very tight budget."],
      ["reach an agreement", "We finally reached an agreement."],
      ["a heavy workload", "I have a heavy workload this month."],
      ["run smoothly", "Everything ran smoothly in the end."]
    ],
    check: [
      ["We’ve ______ schedule, so we need two more days.", "fallen behind"],
      ["Can I ______ an idea ______ you before I send it?", "run … by"],
      ["The new system failed, so we’re ______.", "back to square one"],
      ["Sorry, something’s ______. Can we talk tomorrow?", "come up"],
      ["I ______ (work) on this report since eight o’clock.", "’ve been working"],
      ["Honestly, it’s ______ — anyone can learn it in a day.", "not rocket science"]
    ],
    say: [
      "Describe a problem you’ve been dealing with lately. Use the present perfect continuous at least twice.",
      "Explain how you would get the ball rolling on a new project.",
      "Tell the story of a plan that went back to square one."
    ]
  },

  6: {
    theme: "Plans, guesses and what-ifs",
    grammar: {
      title: "I wish · If only",
      why: "Wish goes one step back in time, just like the second and third conditionals. Once you see that, it stops being scary.",
      formula: [
        ["NOW, I WANT IT DIFFERENT", "wish + past — I wish I had more time."],
        ["PAST, REGRET", "wish + past perfect — I wish I’d started earlier."],
        ["SOMEONE ELSE, ANNOYANCE", "wish + would — I wish he’d stop interrupting."]
      ],
      wrong: "I wish I have more time. I wish I would be taller.",
      right: "I wish I had more time. I wish I was / were taller.",
      examples: [
        "I wish I could speak without stopping to think.",
        "If only I’d taken that job.",
        "I wish it would stop raining.",
        "I wish I hadn’t said that."
      ],
      note: "Mixed conditionals join two times. Past cause, present result: If I’d taken that job, I’d be living in Berlin now. Present cause, past result: If I were braver, I’d have said something.",
      practice: [
        ["I wish I ______ (live) closer to the sea.", "lived"],
        ["I wish I ______ (not / say) that yesterday.", "hadn’t said"],
        ["I wish the neighbours ______ (turn down) the music.", "would turn down"],
        ["If only I ______ (can) take the day off.", "could"],
        ["If I ______ (study) harder at school, I ______ (have) a better job now.", "had studied … would have"]
      ]
    },
    phrasal: [
      ["look forward to (+ -ing)", "feel happy about something that will happen", "I’m looking forward to seeing you."],
      ["fall through", "fail to happen (a plan)", "Our holiday plans fell through at the last minute."],
      ["plan ahead", "make plans early", "I like to plan ahead, at least a month."],
      ["go ahead (with)", "start doing what you planned", "We’re going ahead with the move in May."],
      ["put aside", "save money or time for later", "I put aside a bit every month for travel."],
      ["settle down", "start a calmer life with a home and a routine", "I want to travel a bit before I settle down."],
      ["call off", "cancel", "They called off the wedding a week before."],
      ["think something over", "consider carefully before deciding", "Let me think it over and I’ll tell you on Monday."],
      ["count on", "rely on, trust", "You can count on me."],
      ["pan out", "develop, turn out (a situation)", "Let’s see how things pan out."],
      ["bring forward", "move to an earlier date", "They brought the meeting forward to Monday."],
      ["sign up (for)", "register for a course or an activity", "I’ve signed up for a pottery class."]
    ],
    idioms: [
      ["play it by ear", "decide as things happen, without a plan", "I don’t have a plan for Saturday — let’s play it by ear."],
      ["cross that bridge when we come to it", "deal with a problem only if it happens", "What if it rains? We’ll cross that bridge when we come to it."],
      ["up in the air", "not decided yet", "Our summer plans are still up in the air."],
      ["a long shot", "unlikely to work, but worth trying", "It’s a long shot, but I’ve applied anyway."],
      ["keep my options open", "avoid deciding too early", "I’m keeping my options open for now."],
      ["have second thoughts", "start to doubt a decision", "I’m having second thoughts about the move."]
    ],
    colloc: [
      ["a long-term goal", "My long-term goal is to work abroad."],
      ["take a risk", "Sometimes you have to take a risk."],
      ["stand a good chance of", "You stand a good chance of getting the job."],
      ["weigh up the pros and cons", "I’m still weighing up the pros and cons."],
      ["a backup plan", "Always have a backup plan."],
      ["in the near future", "I’m not planning to move in the near future."],
      ["set a goal", "I set a goal of reading one book a month."],
      ["a once-in-a-lifetime opportunity", "It was a once-in-a-lifetime opportunity."],
      ["save up for", "I’m saving up for a new laptop."],
      ["the chances are slim", "The chances are slim, but it’s possible."]
    ],
    check: [
      ["Our trip ______ because the airline cancelled the flight.", "fell through"],
      ["I’m really ______ the holidays.", "looking forward to"],
      ["We don’t know yet — everything is still ______.", "up in the air"],
      ["I wish I ______ (know) about this course last year.", "had known"],
      ["It’s ______, but maybe they’ll say yes.", "a long shot"],
      ["Before you decide, ______ the pros and cons.", "weigh up"]
    ],
    say: [
      "Talk about a plan that fell through and what you did instead.",
      "Three wishes out loud: one about now, one about the past, one about another person.",
      "What is a long shot you’d like to try in the next year?"
    ]
  },

  7: {
    theme: "Discussing ideas",
    grammar: {
      title: "Emphasis — what…, the thing is…, it’s… that",
      why: "In a discussion you need to point at the important part of your sentence. These frames do it, and they buy you a second to think.",
      formula: [
        ["WHAT + CLAUSE + IS", "What worries me is the cost."],
        ["THE THING / PROBLEM / REASON IS", "The problem is (that) nobody asked."],
        ["IT’S … THAT / WHO", "It’s not the money that bothers me, it’s the time."]
      ],
      wrong: "The thing what annoys me is the noise.",
      right: "What annoys me is the noise. / The thing that annoys me is the noise.",
      examples: [
        "What surprised me most was how cheap it was.",
        "All I’m saying is that we need more time.",
        "It was Anna who suggested it, not me.",
        "The reason I left is that nobody listened."
      ],
      note: "Use them sparingly: one emphatic frame per turn sounds confident, three in a row sounds like a speech.",
      practice: [
        ["The price worries me. → What worries me ______ the price.", "is"],
        ["I need a break. → What I need ______ a break.", "is"],
        ["Anna suggested it, not me. → It was Anna ______ suggested it.", "who"],
        ["Nobody listens. → The problem is ______ nobody listens.", "that"],
        ["I’m only saying it’s risky. → All I’m ______ is that it’s risky.", "saying"]
      ]
    },
    phrasal: [
      ["bring up", "start talking about a subject", "I didn’t want to bring up money at dinner."],
      ["boil down to", "be basically about", "In the end it all boils down to money."],
      ["get across", "make people understand an idea", "I didn’t manage to get my point across."],
      ["spell out", "explain very clearly, in detail", "Let me spell it out: we can’t afford it."],
      ["back down", "stop defending your position", "She refused to back down."],
      ["sum up", "give the main points briefly", "To sum up, it’s cheaper but slower."],
      ["play down", "make something seem less important", "The company played down the risks."],
      ["pick up on", "notice something small", "I picked up on the fact that he was nervous."],
      ["touch on", "mention briefly", "The article only touched on the costs."],
      ["stem from", "be caused by", "Most arguments stem from bad communication."],
      ["give in", "stop arguing and accept", "After an hour I gave in and said yes."],
      ["account for", "explain the reason for", "That accounts for the delay."]
    ],
    idioms: [
      ["the elephant in the room", "an obvious problem nobody talks about", "Nobody mentioned the budget — the elephant in the room."],
      ["a double-edged sword", "something with both good and bad effects", "Social media is a double-edged sword."],
      ["food for thought", "something worth thinking about", "That talk gave me a lot of food for thought."],
      ["miss the point", "not understand the important part", "I think you’re missing the point."],
      ["hit the nail on the head", "describe something exactly right", "You’ve hit the nail on the head."],
      ["the tip of the iceberg", "a small visible part of a much bigger problem", "These complaints are just the tip of the iceberg."]
    ],
    colloc: [
      ["raise a question", "It raises an important question."],
      ["draw a conclusion", "It’s too early to draw any conclusions."],
      ["a key factor", "Price is a key factor for most people."],
      ["have an impact on", "Remote work has had a big impact on city centres."],
      ["a widespread belief", "It’s a widespread belief, but it isn’t true."],
      ["strike a balance", "It’s hard to strike a balance between work and life."],
      ["reach a consensus", "We never reached a consensus."],
      ["a vicious circle", "Stress, no sleep, more stress — it’s a vicious circle."],
      ["in the long run", "In the long run, it’ll save money."],
      ["play a role in", "Luck plays a big role in success."]
    ],
    check: [
      ["In the end, the whole argument ______ money.", "boils down to"],
      ["Nobody talked about the layoffs — it was ______.", "the elephant in the room"],
      ["I tried to explain, but I couldn’t ______ my point ______.", "get … across"],
      ["It’s ______: it saves time but costs more.", "a double-edged sword"],
      ["______ worries me is the timing.", "What"],
      ["It’s hard to ______ a balance between speed and quality.", "strike"]
    ],
    say: [
      "Is social media a double-edged sword? Three minutes, with two emphasis frames.",
      "Name the elephant in the room in your job or your city, and explain it.",
      "Sum up the last article you read in 30 seconds, then say what it boils down to."
    ]
  },

  8: {
    theme: "Unscripted",
    grammar: {
      title: "Questions that sound natural — indirect questions and tags",
      why: "Talking to strangers is mostly questions. Indirect questions sound polite; tags keep small talk moving.",
      formula: [
        ["INDIRECT", "Do you know / Could you tell me + where / if + normal order: Do you know where the station is?"],
        ["TAGS", "positive → negative tag, negative → positive: It’s cold, isn’t it? · You haven’t been here before, have you?"],
        ["TONE", "falls = you expect agreement (small talk) · rises = you really don’t know"]
      ],
      wrong: "Do you know where is the toilet? You’re from here, no?",
      right: "Do you know where the toilet is? You’re from here, aren’t you?",
      examples: [
        "Could you tell me what time it opens?",
        "Nice day, isn’t it?",
        "I was wondering if you could help me.",
        "You’ve been here before, haven’t you?"
      ],
      note: "Tricky tags: I’m right, aren’t I? · Let’s go, shall we? · Nobody called, did they? · Pass me the salt, would you?",
      practice: [
        ["Where is the nearest pharmacy? → Do you know where ______?", "the nearest pharmacy is"],
        ["Does this bus go to the centre? → Could you tell me ______ this bus goes to the centre?", "if / whether"],
        ["It’s a great place, ______?", "isn’t it"],
        ["You haven’t met Tom, ______?", "have you"],
        ["What time does it close? → I was wondering what time ______.", "it closes"]
      ]
    },
    phrasal: [
      ["catch up (with)", "talk to someone you haven’t seen for a while", "Let’s catch up over coffee next week."],
      ["hang on", "wait a moment", "Hang on, let me check."],
      ["strike up (a conversation)", "start a conversation with someone new", "I struck up a conversation with the woman next to me."],
      ["drop by", "visit briefly without planning", "Drop by whenever you’re in the area."],
      ["get by (in)", "manage with the little you have", "I can get by in Spanish, but that’s it."],
      ["pick up", "learn without really studying", "I picked up a few phrases on holiday."],
      ["hang out (with)", "spend relaxed time with someone", "What do you usually do when you hang out with friends?"],
      ["chip in", "add a comment to a conversation; add money to a shared cost", "Can I just chip in here?"],
      ["mix up", "confuse two things", "Sorry, I mixed up the dates."],
      ["speak up", "speak louder; say what you think", "Could you speak up a bit? It’s noisy in here."],
      ["wrap up", "finish", "Let’s wrap up — I have to run."],
      ["open up", "start talking about your feelings", "It took him a while to open up."]
    ],
    idioms: [
      ["break the ice", "help people relax at the start", "I told a silly joke to break the ice."],
      ["on the tip of my tongue", "I almost remember the word", "What’s it called… it’s on the tip of my tongue."],
      ["get the hang of", "learn how to do something", "I’m finally getting the hang of it."],
      ["long time no see", "friendly hello after a long time", "Long time no see! How have you been?"],
      ["I’m all ears", "I’m listening carefully", "Go on, I’m all ears."],
      ["put your foot in it", "say something embarrassing by mistake", "I really put my foot in it when I asked about his ex."]
    ],
    colloc: [
      ["make small talk", "I’m not great at making small talk."],
      ["keep the conversation going", "Ask questions to keep the conversation going."],
      ["change the subject", "He quickly changed the subject."],
      ["have a chat", "We had a quick chat after the meeting."],
      ["keep in touch", "Let’s keep in touch!"],
      ["a slip of the tongue", "Sorry, that was a slip of the tongue."],
      ["an awkward silence", "There was an awkward silence."],
      ["a quick question", "Can I ask you a quick question?"],
      ["have a word (with)", "Can I have a word with you?"],
      ["no offence, but…", "No offence, but I don’t agree."]
    ],
    check: [
      ["Sorry, ______ a second — I need to find my ticket.", "hang on"],
      ["I can’t remember his name — it’s ______.", "on the tip of my tongue"],
      ["Could you tell me where ______ (the exit / be)?", "the exit is"],
      ["I don’t speak Italian, but I can ______.", "get by"],
      ["It was awkward at first, but a joke helped ______.", "break the ice"],
      ["You’ve been here before, ______?", "haven’t you"]
    ],
    say: [
      "Strike up a conversation with a stranger (or ChatGPT Voice playing one). Use one indirect question and one tag.",
      "Tell the story of a time you put your foot in it.",
      "Explain a word that is on the tip of your tongue without saying it."
    ]
  }
};
