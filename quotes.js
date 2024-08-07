var quotes = [
    'You only live once, but if you do it right, once is enough | Mae West',
    'Be the change that you wish to see in the world | Mahatma Gandhi',
    'If you tell the truth, you don\'t have to remember anything | Mark Twain',
    'A friend is someone who knows all about you and still loves you | Elbert Hubbard',
    'I am so clever that sometimes I don\'t understand a single word of what I am saying | Oscar Wilde, The Happy Prince and Other Stories',
    'I have not failed. I\'ve just found 10,000 ways that won\'t work | Thomas A. Edison',
    'I have no special talents. I am only passionately curious | Albert Einstein',
    'I\'m not upset that you lied to me, I\'m upset that from now on I can\'t believe you | Friedrich Nietzsche',
    'Everything you can imagine is real | Pablo Picasso',
    'I\'m not afraid of death; I just don\'t want to be there when it happens | Woody Allen',
    'Do one thing every day that scares you | Eleanor Roosevelt',
    'The reason I talk to myself is because I’m the only one whose answers I accept | George Carlin',
    'Go to heaven for the climate and hell for the company | Benjamin Franklin Wade',
    'I am free of all prejudice. I hate everyone equally | W.C. Fields',
    'Those who do not want to imitate anything, produce nothing | Salvador Dali',
    'The best time to plant a tree was 20 years ago. The second best time is now | Chinese Proverb',
    'Whether you think you can or you think you can\'t, you\'re right | Henry Ford',
    'The best revenge is massive success | Frank Sinatra',
    'People often say that motivation doesn\'t last. Well, neither does bathing. That\'s why we recommend it daily | Zig Ziglar',
    'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light | Plato',
    'Fall seven times and stand up eight | Japanese Proverb',
    'If somebody offers you an amazing opportunity but you are not sure you can do it, say yes. Then learn how to do it later! | Richard Branson',
    'The first principle is that you must not fool yourself and you are the easiest person to fool | Richard P. Feynman',
    'Let us try to teach generosity and altruism, because we are all born selfish | Richard Dawkins',
    'Listen, smile, agree, and then do whatever the fuck you were doing to do anyway | Robert Downey Jr',
    'If you want something you never had, you have to do something you’ve never done | Thomas Jefferson',
    'We did not come to fear the future. We came here to shape it | Barack Obama',
    'The scariest moment is always just before you start | Stephen King ',
    'Our true nationality is mankind | H. G. Wells',
    'I am just a child who has never grown up. I still keep asking these \'how\' and \'why\' questions. Occasionally, I find an answer | Stephen Hawking',
    'Learning never exhausts the mind | Leonardo Da Vinci',
    'Simplicity is the ultimate sophistication | Leonardo Da Vinci',
    'The supreme art of war is to subdue the enemy without fighting | Sun Tzu',
    'So, I want you to get up now. I want all of you to get up out of your chairs. I want you to get up right now and go to the window. Open it, and stick your head out, and yell: \'I\'m as mad as hell, and I\'m not gonna take this anymore!\' | Howard Beale, The Network',
    'Rien ne se perd, rien ne se crée : tout se transforme | Antoine Laurent de Lavoisier',
    'I sometimes wonder, to this day, if courage is just another word for desperation | Nadia Comaneci',
    'French people are so hardcore, they eat pain for breakfast!',
    'For sale: baby shoes, never worn | Ernest Hemingway',
    'Uh, Houston, we\'ve had a problem | Jack Swigert',
    'No one can make you feel inferior without your consent | Eleanor Roosevelt',
    'That’s one small step for a man, a giant leap for mankind | Neil Armstrong',
    'You can fool all of the people some of the time, and some of the people all of the time, but you can\'t fool all of the people all of the time | Abraham Lincoln',
    'In der Rache und in der Liebe ist das Weib barbarischer als der Mann | Friedrich Nietzsche',
    'L\'ennemi est bête : il croit que c\'est nous l\'ennemi alors que c\'est lui | Pierre Desproges',
    'I never lose, I either win or learn | Nelson Mandela',
    'Nos jeunes aiment le luxe, ont de mauvaises manières, se moquent de l\'autorité et n\'ont aucun respect pour l\'âge | Socrate',
    'On the internet nobody can hear you being subtle | Libby Clark',
    'Hey, that\'s not a bug, that\'s a feature! | Linus Torvalds',
    'We need to smile at Novell while we pull the trigger | Jim Allchin',
    'Know your Enemies, Act like a Friend | Microsoft\'s Handbook',
    'Build your own dreams, or someone else will hire you to build theirs | Farrah Gray ',
    'You can\'t go back and make a new start, but you can start right now and make a brand new ending | James R. Sherman',
    'Everything you\'ve ever wanted is on the other side of fear | Georges Addair',
    'Just because you\'re paranoid, don\'t mean they\'re not after you | Kurt Cobain',
    'Now I have become death, the destroyer of worlds | Julius Oppenheimer ',
    'They did not know it was impossible so they did it | Mark Twain',
    'Hey, even the Mona Lisa is falling apart | Chuck Palahniuk',
	'The only way to get rid of a temptation, is to yield to it | Oscar Wilde',
	'Persévérance est mère de toutes les sciences | Gisèle Lambert',
    'If you can\'t tell me what you\'d like to be happening, you don\'t have a problem yet. You\'re just complaining | One Minute Manager',
    'All major changes are like death. You can\'t see to the other side until you are there | Michael Crichton',
    'That\'s what she said | Michael Scott',
    'The man who does not value himself, cannot value anything or anyone | Ayn Rand',
    'Show me the money! | Jerry Maguire',
    'The more you act like a lady, the more he\'ll act like a gentleman | Sydney Biddle Barrows',
    'Life is the art of drawing without an eraser | John W. Gardner',
    'Only when the tide goes out do you discover who\'s been swimming naked | Warren Buffet',
    'J\'ai beau faire, tout m\'intéresse | Paul Valéry',
    'Our bodies are our gardens, to the which our wills are gardeners | William Shakespeare',
    'I am because we are | Ubuntu',
    'If you think you are a slow learner, it\'s because you are more focused on the growth of others than your own | Orange Book',
    'L\'odrre des ltteers dnas un mot n\'a pas d\'ipmrotncae',
    'This too shall pass | Persian adage',
    'Ce ne sont que des pensées',
    'When you own your breath, nobody can steal your peace | Jay Shetty',
    'If you need religion to tell you how to be a good person... You\'re not a good person',
    'Art is how we decorate space, music is how we decorate time | Jean-Michel Basquiat',
    'A man who dares to waste one hour of time has not discovered the value of life | Charles Darwin',
    'Ce sont des révolutionnaires en télétravail',
    'Not until we are lost do we begin to understand ourselves | Henry David Thoreau',
    'La civilisation démocratique est entièrement fondée sur l\'exactitude de l\'information. Si le citoyen n\'est pas correctement informé, le vote ne veut rien dire | Jean-François Revel',
    'He aprendido que un hombre sólo tiene derecho a mirar a otro hacia abajo, cuando ha de ayudarle a levantarse | Gabriel García Márquez',
    'Opportunity multiply as they are seized | Sun Tzu',
    'الجهل يؤدي إلى الخوف، الخوف يؤدي إلى الكراهية، الكراهية تؤدي إلى العنف، هذه هي المعادلة | Averroès Ibn Rochd de Cordoue',
    'The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown | H.P. Lovecraft',
    'The task is not to see what has never been seen before, but to think what has never been thought before about what you see every day | Erwin Schrödinger',
    'The usefulness of a cup is in its emptiness | Bruce Lee',
    'If there is a God, he will have to beg my forgiveness',
    'You are the CEO of your life, hire, fire, promote accordingly',
    'You believed in Santa for 8 years, you can believe in yourself for 10 seconds',
    'Mathematics is the language in which God has written the universe | Galileo Galilei',
    'My business is to paint what I see, not what I know is there | Joseph Mallord William Turner',
    'Your personal experiences make up maybe 0.00000001% of what\'s happened in the world but maybe 80% of how you think the world works | Morgan Housel',
    'Los ordenadores son inútiles. Sólo pueden darnos respuestas | Pablo Picasso',
    'Your value does not decrease based on someone\'s inability to see your worth',
    'It is not that we have a short time to live, but that we waste a lot of it | Seneca',
    'It is my ambition to say in ten sentences what others say in a whole book | Friedrich Nietzsche',
    'Only a few know, how much one must know to know how little one knows | Werner Heisenberg',
    'Don\'t be arrogant. Don\'t be flashy. There is always someone better than you | Tony Hsieh',
    'If people are doubting how far you can go, go so far that you can\'t hear them anymore | Michele Ruiz',
    'You can only fight the way you practice | Miyamoto Musashi',
    'A tree that cannot bend will crack in the wind | Lao Tzu',
    'A winner is a dreamer who never gives up | Nelson Mandela',
    'Life is 10 percent made up of things that happen to me and the remaining 90 percent of how I react to them | Charles Swindoll',
    'Don\'t treat people as bad as they are, treat them as good as you are',
    'All we can do is by some sly roundabout way introduce something that they can\'t stop | Friedrich Hayek',
    'There are two ways to do great mathematics. The first is to be smarter than everybody else. The second way is to be stupider than everybody else -- but persistent | Raoul Bott',
    'Please, God, please, don\'t let me be normal! | Sigourney Alexandra Weaver',
    'In theory there is no difference between theory and practice – in practice there is | Yogi Berra',
    'That which can be asserted without evidence, can be dismissed without evidence | Christopher Hitchens',
    'If you don\'t believe it or don\'t get it, I don\'t have the time to try to convince you, sorry | Satoshi Nakamoto',
    'People often say: I hope to go to heaven when I die. In reality, if you think about it, you go to heaven when you\'re born | Jim Lovell',
    'Facts do not cease to exist because they are ignored | Aldous Huxley',
    'The public is never wrong. When people don\'t respond to what you do, they\'re telling you something loud and clear. You\'re just not listening | Curtis Jackson',
    'If you give a man gun he can rob a bank; if you give man a bank he can rob the world',
    'La franchise ne consiste pas à dire ce qu’on pense, mais à penser ce qu’on dit | Coluche',
    'The meaning of life is to find your gift, the purpose of life is to give it away | Pablo Picasso',
    'The proper aim is to try and reconstruct society on such a basis that poverty will be impossible | Oscar Wilde',
    'Happiness is an inside job | William Arthur Ward',
    'The crowd loves the hits, the creator loves the B-sides | Jack Butcher',
    'It\'s not up to us whether [or not] what we do is any good | Ethan Hawke',
    'Trust the process',
    'Use your imagination to build and create, not to worry | Orange Book',
    'Tu seras aimé le jour où tu pourras montrer ta faiblesse, sans que l\'autre s\'en serve pour affirmer sa force | Cesare Pavese',
    'La science, c\'est ce que le père enseigne à son fils. La technologie, c\'est ce que le fils enseigne à son papa | Michel Serres',
    'We don\'t make mistakes, just happy little accidents | Bob Ross',
    'The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever | Konstantin Tsiolkovsky',
    'The price of anything is the amount of life you exchange for it | Henry David Thoreau',
    'Bon, disais-je en moi-même, les arbres tardifs sont ceux qui portent les meilleurs fruits | Molière',
    'Buying Bitcoin is a bet that math and cryptography will outlast your government. Historically speaking, this is a pretty good bet | Dan Held',
    'You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete | Buckminster Fuller',
    'Quand la bêtise gouverne, l\'intelligence est un délit | Henry de Montherlant',
    'Everybody has a plan until they get punched in the face | Mike Tyson',
    'There is no such thing as society | Margaret Thatcher',
    'Reality is that which, when you stop believing in it, doesn\'t go away | Philip K. Dick',
    'On a toujours tort d\'essayer d\'avoir raison devant des gens qui ont toutes les bonnes raisons de croire qu\'ils n\'ont pas tort ! | Raymond Devos',
    'The wound is the place where the light enters you | Rumi',
    'In the beginner\'s mind there are many possibilities, but in the expert\'s there are few | Shunryū Suzuki',
	'Mais qui peut vivre infâme est indigne du jour | Pierre Corneille',
	'Bees don\'t waste their time explaining to flies that honey is better than shit',
	'Every idea you don\'t share is an idea wasted | Route 2 FI ',
	'Formal education will make you a living. Self education will make you a fortune | Alvin Foo',
	'WAGMI',
	'Jack of all trades, master of none',
	'S\'il est impossible de ne pas penser à quelque chose, il reste encore possible de penser à autre chose | Lewis Carroll',
	'N\'oubliez jamais que la plus belle des ruses du diable est de vous persuader qu\'il n’existe pas ! | Charles Baudelaire',
	'Lire délivre',
	'Être de gauche c\'est d\'abord penser le monde, puis son pays, puis ses proches, puis soi ; être de droite c\'est l\'inverse | Gilles Deleuze',
	'I learned to give not because I have much, but because I know exactly how it feels to have nothing',
	'Le luxe est une affaire d\'argent. L\'élégance est une question d\'éducation | Sacha Guitry',
	'The metaverse is [a term] like the internet. No company can own it | Tim Sweeney',
	'Trust those who are greedy for money a thousand times more than those who are greedy for credentials | Nassim Nicholas Taleb',
	'There\'s simply no polite way to tell people they\'ve dedicated their lives to an illusion | Daniel Dennett',
    'C\'est ce que nous sommes tous, des amateurs, on ne vit jamais assez longtemps pour être autre chose | Charlie Chaplin',
    'On n\'a vraiment peur que de ce qu\'on ne comprend pas | Guy de Maupassant',
    'Look to the future because that is where you will spend the rest of your life | George Burns',
	'Journalism is printing what someone else does not want printed. Everything else is public relations | George Orwell',
	'If they ghosted you, respect the dead and never disturb them again | Grant Golestan',
	'Property does not exist because there are laws, but laws exist because there is property | Frédéric Bastiat',
	'It is only a short trip, enjoy it',
	'If privacy is outlawed, only outlaws will have privacy | Philip Zimmermann',
	'All animals are equal, but some animals are more equal than others | George Orwell',
	'If Bitcoin ever becomes outlawed, I will be an outlaw | Heidi Chakos',
	'Don\'t spend time beating on a wall, hoping to transform it into a door | Coco Chanel',
	'If you hear a voice within you say you cannot paint, then by all means paint and that voice will be silenced | Vincent Willem van Gogh',
	'Looking at the Earth from afar, you realize it is too small for conflict and just big enough for cooperation | Yuri Gagarin',
	'Ancora Imparo | Michelangelo',
	'When faced with two choices, simply toss a coin. It works not because it settles the question for you, but because in that brief moment when the coin is in the air, you suddenly know what you are hoping for',
	'Everyone you meet is fighting a battle you know nothing about. Be Kind. Always | Robin Williams',
	'To understand the difficulty of predicting the next 100 years, we have to appreciate the difficulty that the people of 1900 had in predicting the world of 2000 | Michio Kaku',
	'Bitcoin is, and that is enough | Beautyon',
	'It\'s incredible how "If we meet people\'s basic needs, they\'ll stop working" and "Billionaires are hard workers" coexist in people\'s mind.',
	'May you have the courage to break the patterns in your life that are no longer serving you',
	'You may live to see man-made horrors beyond your comprehension | Nikola Tesla',
	'Les croyants sont de très bons exemples de pourquoi il ne faut pas croire | Salman Rushdie',
	'L\'art est de consoler ceux qui sont brisés par la vie | Vincent Van Gogh',
	'Never argue. In society nothing must be discussed; give only results | Benjamin Disraeli',
	'Before anything else, preparation is the key to success | Alexander Graham Bell',
	'Time doesn\'t exist, clocks exist',
	'Il y a des temps où l\'on ne doit dépenser le mépris qu\'avec économie, à cause du grand nombre de nécessiteux | François-René de Chateaubriand',
	'Il ne faut pas que tu aies tout le temps envie d’être aimé. Il faut juste que tu saches que tu es tout le temps capable d’aimer. Et que tu t’en souviennes toujours | Serge Marquis',
	'Who wrote the software running in your head? Are you sure you actually want it there? | Elon Musk',
	'We need to design our cities so you feel like you\'re missing out on all the fun when driving a car | Dom Nozzi',
	'If you want eggs, take care of the hen | Kazuo Inamori',
	'If your kid needs a role model and you ain\'t it, you\'re both fucked | George Carlin',
	'You should take the approach that you\'re wrong. Your goal is to be less wrong | Elon Musk',
	'Any sufficiently advanced technology is indistinguishable from magic | Arthur C. Clarke',
	'Everyone you will ever meet knows something you don\'t | Bill Nye',
	'If you\'re going to tell people the truth, you better make them laugh; otherwise they\'ll kill you | George Bernard Shaw',
	'Lead me, follow me, or get out of my way | George Patton',
	'Normal is an illusion. What is normal for the spider is chaos for the fly | Morticia Addams',
	'Take the stones people throw at you, and use them to build a monument | Ratan Naval Tata',
	'He who has a why to live for can bear almost any how | Friedrich Nietzsche',
	'We suffer more often in imagination than in reality | Lucius Annaeus Seneca',
	'Tu deviens millionnaire le jour ou tu auras aidé 1 million de personnes! | Cyrus Fazel',
	'One good test is worth a thousand expert opinions | Wernher von Braun',
	'I was ashamed of myself when I realised life was a costume party and I attended with my real face | Franz Kafka',
	'Le hasard est le plus grand romancier du monde ; pour être fécond, il n\'y a qu\'à l\'étudier | Honoré de Balzac',
	'Manipulation is when they blame you for your reaction to their disrespect',
	'Humans are an API to ChatGPT. ChatGPT is an API to Python. Python is an API to C. C is an API to assembly. Assembly is an API to binary. Binary is an API to physics. Physics is an API to the machine that runs the universe. It\'s computation all the way down | Lex Fridman ',
	'Show me the man, and I\'ll show you the crime | Lavrentiy Beria',
	'Idolizing a politician is like believing the stripper really likes you',
	'Crypto bros […] will accuse the US government of making money out of thin air. Maybe we do, but we\'re the US government | Brad Sherman',
	'If we\'re living in a simulation, why couldn\'t we be living in a better one? | Katherine Brodsky',
	'When I am working on a problem, I never think about beauty but when I have finished, if the solution is not beautiful, I know it is wrong | Richard Buckminster Fuller',
	'Those who can, do, those who can\'t, teach | George Bernard Shaw',
	'I realized for the first time how free money is as important as free expression | Robert F. Kennedy Jr.',
	'Rappelez-vous, vous n\'êtes pas un étranger, vous êtes juste pauvre. Si vous étiez riche, vous ne seriez un étranger nulle part',
	'If you have to explain why it\'s beautiful, it isn\'t',
	'What is the secrect of success? - Right decisions. How do you make right decisions? - Experience. How do you gain experience? - Wrong decisions',
	'Je pense, donc je suis censuré',
	'À chaque fois, les heures les plus sombres, on a le droit de les critiquer après qu\'elles aient lieu. Pendant, c\'est interdit',
	'The gods that we\'ve made are exactly the gods you\'d expect to be made by a species that\'s about half a chromosome away from being chimpanzee | Christopher Hitchens',
	'Bankers are looting the world. You\'re not in the middle of a recession; you\'re in the middle of a robbery | Frankie Boyle',
	'A lot of people who think they hate reading, but they actually just hate bad writing',
	'C\'est pas parce qu\'ils sont nombreux à avoir tort qu\'ils ont raison | Coluche',
	'Did you ask a good question today? | Isidor Isaac Rabi',
	'A fine is a tax for doing wrong. A tax is a fine for doing well',
	'Tradition is not the worship of ashes, but the preservation of fire | Gustav Mahler',
	'Chance fights ever on the side of the prudents | Euripides',
	'Everything that used to be a sin is now a disease | Bill Maher',
	'I want to live my life, not record it | Jacqueline Lee Kennedy Onassis',
	'Vous parlez a une pièce de porcelaine',
	'Never forget to indicate the creation date and the modification dates',
	'In a world without growth, everything becomes a zero-sum game | Peter Thiel',
	'Keep your friends close, and your enemies closer | Michael Corleone',
	'The United States can pay any debt because we can always print money to do that | Alan Greenspan',
	'Il faudrait bien faire avant d\'avoir appris | Kevin Finel',
	'Il faut avoir déjà beaucoup appris de choses pour savoir demander ce qu\'on ne sait pas | Jean-Jacques Rousseau',
	'I work for money. If you want loyalty, hire a dog',
	'Economic growth is not a cure-all, but lack of growth is a kill-all | Paul Collier',
	'We believe the market economy is a discovery machine, a form of intelligence – an exploratory, evolutionary, adaptive system | Marc Andreessen',
	'We don\'t care, because we don\'t have to',
	'There will come a point where no job is needed... AI will be able to do everything | Elon Musk',
	'Dans les siècles de l\'ignorance, les hommes se sont fait la guerre ; dans le siècle le plus éclairé, ils veulent se détruire | Marie-Olympe de Gouges',
	'Bitcoin is like throwing a stink ball into a recipe that\'s been around for a long time, that\'s worked very well for a lot of people |  Charlie Munger',
	'One day on Venus is longer than one year on Venus',
	'If you want to have good ideas, you must have many ideas | Linus Pauling',
	'I don\'t lose, I win. That\'s my job, that\'s what I do | The Devil\'s Advocate',
	'A mind is like a parachute. It doesn\'t work if it is not open | Frank Zappa',
	'With gratitude optimism is sustainable | Michael J. Fox',
	'I used to think I would run out of ideas, now I think I\'ll run out of time',
	'People are free to invest their money where they want, people are free to speculate as much as they want, (but) people should not be free to participate in criminally sanctioned trade and businesses | Christine Lagarde',
	'Tell me and I forget. Teach me and I remember. Involve me and I learn',
	'Ce n\'est pas parce que j\'ai commis un acte parfaitement immoral que mon retour l\'est | Jérôme Cahuzac',
	'Above all, do not lie to yourself | Fyodor Dostoevsky',
	'And at the end of the day, you can tell everybody to go fuck themselves, you can put it in your head and memorize the freaking key | Michael Saylor',
	'Oh my bitcoin? I lost it in a boating accident',
	'The first $100,000 is a bitch, but you gotta do it | Charlie Munger',
	'Social media made y\'all way too comfortable with disrespecting people and not getting punched in the face for it | Mike Tyson',
	'It\'s a weakness to want to be liked',
	'Bad money drives out good | Thomas Gresham',
	'Que el Estado nos llame contribuyentes es equivalente a que un violador llame novia a su víctima | Javier Milei',
	'If you are not willing to downgrade your lifestyle for a year to have a lifestyle you want forever, you care too much about what people think | Jim Carrey',
	'A problem well stated is half solved | Charles Kettering',
	'The biggest problem with a job is that no one tells you what to do',
	'The most important thing to remember is that inflation is not an act of God, that inflation is not a catastrophe of the elements or a disease that comes like the plague. Inflation is a policy | Ludwig von Mises',
	'Le plus grand obstacle à la vie est l\'attente, qui espère demain et néglige aujourd\'hui | Seneca',
	'Everyone has a test environment, some people are lucky enough that they have a separate one for running prod',
	'Discipline separate the best from the rest',
	'Take all you can eat, but eat all you take',
	'KISS, Keep It Simple, Stupid!',
	'The real problem of humanity is the following: we have Paleolithic emotions, medieval institutions, and god-like technology | Edward Osborne Wilson',
	'If working hard made you rich, donkeys would be covered in gold',
	'Prometheus stole fire from the gods, we will steal dreams from the prophets',
	'Need to divide something fairly between 2 kids? Let one kid make the split and let the other kid choose the partition',
	'You copied that function without understanding why it does what it does, and as a result your code IS GARBAGE. AGAIN | Linus Torvalds',
	'Never come between a man and his next meal',
	'Les Français savent que la grève est un droit, [...] mais "ils savent aussi que travailler est un devoir | Gabriel Attal',
	'A mistake that makes you humble is better than an achievment that makes you arrogant',
	'Une journée sans rire, est une journée perdue | Nicolas Chamfort',
	'Se faire battre est excusable ; se faire surprendre, impardonnable | Napoléon',
	'Scientists study the world as it is, engineers create the world that never has been | Theodore von Karman',
	'Don\'t charge people to have fun, entertain them to pay',
	'Reading aloud boosts memory, but not understanding',
	'I would rather earn 1% off a 100 people\'s effort than 100% of my own efforts | John D. Rockefeller',
	'There\'s an infinite amount of cash at the Federal Reserve | Neel Kashkari',
	'Why are cigarettes taxed? To disincentivize smoking. Why is income taxed? ...',
	'It takes a lifetime to build a reputation and only a few seconds to destroy one | Warren Buffet',
	'32 #Bitcoin Spot ETFs now hold ~1 Nakamoto of $BTC (May 27th, 2024)| Michael Saylor',
	'I don\'t mind coming to work, but waiting 8 hours to go home is bulls***! | Don Ho ',
	'The difficulty lies not so much in developing new ideas as in escaping from old ones | John Maynard Keynes',
	'If you ever feel down, just remember, you\'re closer to being a millionaire than Elon Musk',
	'In this life, the brave ones die, the smart ones go crazy and the world remains full of happy fools',
	'Showing your emotions to people is like bleeding next to a shark',
	'La connaissance, c\'est de savoir que la tomate est un fruit... La sagesse, c\'est de ne pas en mettre dans la salade de fruits !',
	'The worst prison in the world is a home without peace | Johnny Depp',
	'For innovation to succeed, you often have to be willing to compete with yourself',
	'Panem et circenses | Juvenal',
	'I am not a product of my circumstances. I am a product of my decisions | Stephen R. Covey',
	'Wisdom has been chasing you, but you have always been faster',
	'Birds born in a cage think flying is an illness | Alejandro Jodorowsky',
	'Statistics is the grammar of science | Karl Pearson',
	'Maudite soit la guerre et ses auteurs',
	'Buy the truth and do not sell it | Proverbs 23:23'
]
	

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

/*
NOTE:
https://www.reuters.com/technology/ecb-chief-lagarde-admits-her-son-lost-crypto-cash-2023-11-24/
"It wasn't a lot but he lost it all, he lost about 60% of it," Lagarde added. "So when I then had another talk with him about it, he reluctantly accepted that I was right."

*/
