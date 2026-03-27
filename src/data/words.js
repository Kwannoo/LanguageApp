/**

 * Dutch-English vocabulary list.

 * Each entry has:

 *   nl      – Dutch word

 *   en      – English translation

 *   meaning – Short definition shown on the card back

 *

 * To add more words, simply append new objects to this array.

 * The app will automatically pick them up and shuffle them.

 */

export const WORDS = [

  { nl: 'de', en: 'the', level: 'A1', meaning: 'Definite article', example: '**De** man loopt op straat. — The man walks on the street.' },

  { nl: '1 van', en: 'of', level: 'A1', meaning: 'Indicates belonging or relation', example: 'Dit is één **van** mijn boeken. — This is one of my books.' },

  { nl: 'en', en: 'and', level: 'A1', meaning: 'Conjunction to connect words', example: 'Ik heb een appel **en** een banaan. — I have an apple and a banana.' },

  { nl: 'een', en: 'a/an', level: 'A1', meaning: 'Indefinite article', example: 'Ik zie **een** hond. — I see a dog.' },

  { nl: 'het', en: 'the', level: 'A1', meaning: 'Definite article (neuter)', example: '**Het** huis is groot. — The house is big.' },

  { nl: 'zijn', en: 'to be', level: 'A1', meaning: 'Verb indicating existence', example: 'Ik **ben** hier. — I am here.' },

  { nl: 'in', en: 'in', level: 'A1', meaning: 'Preposition of place', example: 'Hij zit **in** de kamer. — He is sitting in the room.' },

  { nl: 'te', en: 'to', level: 'A1', meaning: 'Used before infinitive', example: 'Ik probeer **te** leren. — I try to learn.' },

  { nl: 'ik', en: 'I', level: 'A1', meaning: 'First person singular pronoun', example: '**Ik** ga naar school. — I go to school.' },

  { nl: 'hebben', en: 'to have', level: 'A1', meaning: 'Possession verb', example: 'Wij **hebben** een auto. — We have a car.' },



  { nl: 'hij', en: 'he', level: 'A1', meaning: 'Third person singular masculine', example: '**Hij** loopt snel. — He walks fast.' },

  { nl: 'die', en: 'that/those', level: 'A1', meaning: 'Demonstrative pronoun', example: '**Die** fiets is van mij. — That bike is mine.' },

  { nl: 'niet', en: 'not', level: 'A1', meaning: 'Negation word', example: 'Ik ga **niet** mee. — I am not coming along.' },

  { nl: 'met', en: 'with', level: 'A1', meaning: 'Preposition', example: 'Ik ga **met** jou. — I am going with you.' },

  { nl: 'op', en: 'on', level: 'A1', meaning: 'Preposition', example: 'Het boek ligt **op** tafel. — The book is on the table.' },

  { nl: 'dat', en: 'that', level: 'A1', meaning: 'Demonstrative pronoun', example: '**Dat** is mooi. — That is beautiful.' },

  { nl: 'worden', en: 'to become', level: 'A2', meaning: 'Verb indicating change', example: 'Hij wil dokter **worden**. — He wants to become a doctor.', synonyms: 'get, turn' },

  { nl: 'ze', en: 'they/she', level: 'A1', meaning: 'Pronoun', example: '**Ze** komen morgen. — They are coming tomorrow.' },

  { nl: 'voor', en: 'for', level: 'A1', meaning: 'Preposition', example: 'Dit is **voor** jou. — This is for you.' },

  { nl: 'als', en: 'if/when', level: 'A1', meaning: 'Conjunction', example: '**Als** het regent, blijf ik thuis. — If it rains, I stay home.' },



  { nl: 'er', en: 'there', level: 'A1', meaning: 'Existential word', example: '**Er** is een probleem. — There is a problem.' },

  { nl: 'aan', en: 'on/to', level: 'A1', meaning: 'Preposition', example: 'Hij werkt **aan** een project. — He is working on a project.' },

  { nl: 'maar', en: 'but / only', level: 'A1', meaning: 'Conjunction', example: 'Ik wil gaan, **maar** ik ben moe. — I want to go, but I am tired.' },

  { nl: 'je', en: 'you', level: 'A1', meaning: 'Second person informal', example: '**Je** bent laat. — You are late.' },

  { nl: 'zullen', en: 'will (future)', level: 'A2', meaning: 'Future auxiliary verb', example: 'Wij **zullen** komen. — We will come.' },

  { nl: 'kunnen', en: 'can', level: 'A1', meaning: 'Ability verb', example: 'Ik **kan** zwemmen. — I can swim.' },

  { nl: 'om', en: 'to/around', level: 'A1', meaning: 'Preposition', example: 'Hij loopt **om** het huis. — He walks around the house.', synonyms: 'about' },

  { nl: 'haar', en: 'her / hair', level: 'A1', meaning: 'Possessive pronoun', example: 'Dit is **haar** tas. — This is her bag.', synonyms: 'hairsbreadth, whisker' },

  { nl: 'naar', en: 'to', level: 'A1', meaning: 'Direction preposition', example: 'Ik ga **naar** huis. — I am going home.' },

  { nl: 'ook', en: 'also', level: 'A1', meaning: 'Adds information', example: 'Ik kom **ook**. — I am coming too.' },



  { nl: 'of', en: 'or', level: 'A1', meaning: 'Choice conjunction', example: 'Koffie **of** thee? — Coffee or tea?' },

  { nl: 'bij', en: 'at/with', level: 'A1', meaning: 'Preposition', example: 'Ik werk **bij** een bedrijf. — I work at a company.' },

  { nl: 'zich', en: 'oneself', level: 'A2', meaning: 'Reflexive pronoun', example: 'Hij wast **zich**. — He washes himself.' },

  { nl: 'nog', en: 'still/yet', level: 'A1', meaning: 'Time indicator', example: 'Ik ben **nog** hier. — I am still here.' },

  { nl: 'door', en: 'through/by', level: 'A1', meaning: 'Preposition', example: 'We lopen **door** het park. — We walk through the park.' },

  { nl: 'wat', en: 'what', level: 'A1', meaning: 'Question word', example: '**Wat** doe je? — What are you doing?' },

  { nl: 'gaan', en: 'to go', level: 'A1', meaning: 'Movement verb', example: 'Wij **gaan** naar school. — We go to school.' },

  { nl: 'hem', en: 'him', level: 'A1', meaning: 'Object pronoun', example: 'Ik zie **hem**. — I see him.' },

  { nl: 'komen', en: 'to come', level: 'A1', meaning: 'Movement verb', example: 'Hij **komt** morgen. — He is coming tomorrow.' },

  { nl: 'zeggen', en: 'to say', level: 'A1', meaning: 'Speech verb', example: 'Ik **zeg** iets. — I say something.' },



  { nl: 'dan', en: 'then', level: 'A1', meaning: 'Time relation', example: 'Eerst eten, **dan** werken. — First eat, then work.' },

  { nl: 'zo', en: 'so / like this', level: 'A1', meaning: 'Degree word', example: 'Het is **zo** mooi. — It is so beautiful.', synonyms: 'soh, sol' },

  { nl: 'moeten', en: 'must', level: 'A1', meaning: 'Obligation verb', example: 'Ik **moet** werken. — I have to work.' },

  { nl: 'over', en: 'about/over', level: 'A1', meaning: 'Preposition', example: 'We praten **over** het nieuws. — We talk about the news.' },

  { nl: 'mijn', en: 'my', level: 'A1', meaning: 'Possessive pronoun', example: 'Dit is **mijn** boek. — This is my book.' },

  { nl: 'zij', en: 'she/they', level: 'A1', meaning: 'Pronoun', example: '**Zij** komt straks. — She is coming soon.' },

  { nl: 'deze', en: 'this/these', level: 'A1', meaning: 'Demonstrative', example: '**Deze** auto is nieuw. — This car is new.' },

  { nl: 'tot', en: 'until', level: 'A1', meaning: 'Time preposition', example: 'Ik werk **tot** vijf uur. — I work until five o\'clock.' },

  { nl: 'we', en: 'we', level: 'A1', meaning: 'First person plural', example: '**We** gaan samen. — We go together.' },

  { nl: 'meer', en: 'more', level: 'A1', meaning: 'Quantity word', example: 'Ik wil **meer** eten. — I want to eat more.' },



  { nl: 'zien', en: 'to see', level: 'A1', meaning: 'Perception verb', example: 'Ik **zie** jou. — I see you.' },

  { nl: 'wel', en: 'indeed / well', level: 'A1', meaning: 'Emphasis', example: 'Dat is **wel** goed. — That is indeed good.' },

  { nl: 'dit', en: 'this', level: 'A1', meaning: 'Demonstrative', example: '**Dit** is leuk. — This is fun.' },

  { nl: 'hun', en: 'their', level: 'A1', meaning: 'Possessive pronoun', example: 'Dat is **hun** huis. — That is their house.' },

  { nl: 'geen', en: 'no/none', level: 'A1', meaning: 'Negation', example: 'Ik heb **geen** geld. — I have no money.' },

  { nl: 'maken', en: 'to make', level: 'A1', meaning: 'Action verb', example: 'Ik **maak** eten. — I make food.' },

  { nl: 'ons', en: 'us/our', level: 'A1', meaning: 'Pronoun', example: 'Kom met **ons** mee. — Come along with us.' },

  { nl: 'uit', en: 'out', level: 'A1', meaning: 'Preposition', example: 'Ga **uit** de kamer. — Get out of the room.', synonyms: 'come out' },

  { nl: 'veel', en: 'much/many', level: 'A1', meaning: 'Quantity word', example: 'Ik heb **veel** werk. — I have a lot of work.' },

  { nl: 'staan', en: 'to stand', level: 'A1', meaning: 'Position verb', example: 'Hij **staat** daar. — He stands there.' },



  { nl: 'goed', en: 'good / well', level: 'A1', meaning: 'Adjective', example: 'Het eten is **goed**. — The food is good.', synonyms: 'goodness' },

  { nl: 'willen', en: 'to want', level: 'A1', meaning: 'Desire verb', example: 'Ik **wil** slapen. — I want to sleep.' },

  { nl: 'ander', en: 'other', level: 'A1', meaning: 'Adjective', example: 'Ik neem een **ander** boek. — I take a different book.' },

  { nl: 'doen', en: 'to do', level: 'A1', meaning: 'Action verb', example: 'Wat ga je **doen**? — What are you going to do?' },

  { nl: 'me', en: 'me', level: 'A1', meaning: 'Object pronoun', example: 'Geef het aan **me**. — Give it to me.' },

  { nl: 'men', en: 'one (formal)', level: 'B1', meaning: 'Formal pronoun', example: '**Men** zegt dat het waar is. — They say it is true.' },

  { nl: 'u', en: 'you (formal)', level: 'A1', meaning: 'Formal pronoun', example: 'Hoe gaat het met **u**? — How are you?' },

  { nl: 'mij', en: 'me', level: 'A1', meaning: 'Object pronoun', example: 'Hij helpt **mij**. — He helps me.' },

  { nl: 'laten', en: 'to let', level: 'A2', meaning: 'Allow verb', example: 'Laat mij gaan. — Let me go.', synonyms: 'net ball' },

  { nl: 'weten', en: 'to know', level: 'A1', meaning: 'Knowledge verb', example: 'Ik **weet** het. — I know it.' },



  { nl: 'al', en: 'already / all', level: 'A1', meaning: 'Time word', example: 'Ik ben **al** klaar. — I am already done.' },

  { nl: 'daar', en: 'there', level: 'A1', meaning: 'Place word', example: 'Hij is **daar**. — He is there.' },

  { nl: 'weer', en: 'again / weather', level: 'A1', meaning: 'Repetition word', example: 'Hij komt **weer**. — He is coming again.', synonyms: 'atmospheric condition, brave, brave out, conditions' },

  { nl: 'tegen', en: 'against', level: 'A1', meaning: 'Preposition', example: 'Hij staat **tegen** de muur. — He is standing against the wall.' },

  { nl: 'denken', en: 'to think', level: 'A1', meaning: 'Mental verb', example: 'Ik **denk** na. — I am thinking.' },

  { nl: 'mens', en: 'human', level: 'A1', meaning: 'Noun', example: 'De **mens** leert. — The human learns.', synonyms: 'homo, human being, man' },

  { nl: 'toch', en: 'yet/however', level: 'A2', meaning: 'Contrast word', example: 'Hij komt **toch**. — He is coming after all.', synonyms: 'as yet, even so, heretofore, hitherto' },

  { nl: 'toen', en: 'then (past)', level: 'A2', meaning: 'Time word', example: '**Toen** was ik jong. — Back then I was young.' },

  { nl: 'geven', en: 'to give', level: 'A1', meaning: 'Action verb', example: 'Ik **geef** een cadeau. — I give a present.' },

  { nl: 'hoe', en: 'how', level: 'A1', meaning: 'Question word', example: '**Hoe** gaat het? — How are you?' },



  { nl: 'blijven', en: 'to stay', level: 'A1', meaning: 'To remain in a place or state', example: 'Ik **blijf** thuis. — I stay home.', synonyms: 'arrest, check, halt, hitch' },

  { nl: 'nu', en: 'now', level: 'A1', meaning: 'Current time', example: 'Ik ga **nu** weg. — I am leaving now.' },

  { nl: 'groot', en: 'big', level: 'A1', meaning: 'Size adjective', example: 'Het huis is **groot**. — The house is big.', synonyms: 'large' },

  { nl: 'vinden', en: 'to find', level: 'A1', meaning: 'To discover or think', example: 'Ik **vind** het leuk. — I like it.', synonyms: 'breakthrough, discovery, uncovering' },

  { nl: 'kijken', en: 'to look', level: 'A1', meaning: 'To see with attention', example: 'Ik **kijk** naar tv. — I am watching TV.', synonyms: 'aspect, expression, face, facial expression' },

  { nl: 'man', en: 'man / husband', level: 'A1', meaning: 'Adult male', example: 'De **man** loopt. — The man walks.', synonyms: 'adult male, conserve, economise, economize' },

  { nl: 'na', en: 'after', level: 'A1', meaning: 'Time relation', example: 'Na het eten ga ik slapen. — After eating I go to sleep.', synonyms: 'afterward, afterwards, later, later on' },

  { nl: 'jaar', en: 'year', level: 'A1', meaning: 'Time unit', example: 'Volgend **jaar** reis ik. — Next year I will travel.', synonyms: 'twelvemonth' },

  { nl: 'hier', en: 'here', level: 'A1', meaning: 'Place word', example: 'Kom **hier**. — Come here.' },

  { nl: 'wij', en: 'we', level: 'A1', meaning: 'First person plural', example: '**Wij** gaan samen. — We go together.' },



  { nl: 'houden', en: 'to keep/hold', level: 'A1', meaning: 'To retain or like', example: 'Ik **houd** van jou. — I love you.', synonyms: 'appreciation, clasp, clench, clutch' },

  { nl: 'tijd', en: 'time', level: 'A1', meaning: 'Concept of time', example: 'Ik heb geen **tijd**. — I have no time.', synonyms: 'clip' },

  { nl: 'krijgen', en: 'to get', level: 'A1', meaning: 'To receive', example: 'Ik **krijg** een cadeau. — I get a present.' },

  { nl: 'zitten', en: 'to sit', level: 'A1', meaning: 'Position verb', example: 'Ik **zit** op de stoel. — I am sitting on the chair.', synonyms: 'sit around, sit down' },

  { nl: 'onder', en: 'under', level: 'A1', meaning: 'Preposition', example: 'De kat zit **onder** de tafel. — The cat is sitting under the table.', synonyms: 'nether' },

  { nl: 'nemen', en: 'to take', level: 'A1', meaning: 'To grab', example: 'Ik **neem** de bus. — I take the bus.' },

  { nl: 'hand', en: 'hand', level: 'A1', meaning: 'Body part', example: 'Mijn **hand** doet pijn. — My hand hurts.', synonyms: 'hired hand, hired man, manus, mitt' },

  { nl: 'lang', en: 'long', level: 'A1', meaning: 'Length/time', example: 'Het is een **lange** dag. — It is a long day.', synonyms: 'hanker, yearn' },

  { nl: 'twee', en: 'two', level: 'A1', meaning: 'Number', example: 'Ik heb **twee** boeken. — I have two books.', synonyms: 'deuce' },

  { nl: 'omdat', en: 'because', level: 'A1', meaning: 'Reason conjunction', example: 'Ik blijf thuis **omdat** ik ziek ben. — I stay home because I am sick.' },



  { nl: 'liggen', en: 'to lie', level: 'A1', meaning: 'Position verb', example: 'Het boek **ligt** daar. — The book is lying there.', synonyms: 'prevarication' },

  { nl: 'kind', en: 'child', level: 'A1', meaning: 'Young person', example: 'Het **kind** speelt. — The child plays.', synonyms: 'fry, kid, minor, nestling' },

  { nl: 'eens', en: 'once / agree', level: 'A1', meaning: 'At some time', example: 'Kom **eens** hier. — Come here for a moment.', synonyms: 'concord, concur, hold, one time' },

  { nl: 'dag', en: 'day', level: 'A1', meaning: 'Time unit', example: 'Vandaag is een mooie **dag**. — Today is a beautiful day.', synonyms: 'solar day, twenty-four hours' },

  { nl: 'tussen', en: 'between', level: 'A1', meaning: 'Position', example: 'Hij zit **tussen** ons. — He is sitting between us.', synonyms: 'betwixt' },

  { nl: 'af', en: 'off', level: 'A1', meaning: 'Separation', example: 'Doe het licht **af**. — Turn off the light.', synonyms: 'bump off, dispatch, hit, murder' },

  { nl: 'zoals', en: 'such as', level: 'A2', meaning: 'Example connector', example: 'Ik hou van fruit, **zoals** appels. — I like fruit, such as apples.' },

  { nl: 'vrouw', en: 'woman / wife', level: 'A1', meaning: 'Adult female', example: 'De **vrouw** lacht. — The woman laughs.', synonyms: 'adult female, married woman' },

  { nl: 'iets', en: 'something', level: 'A1', meaning: 'Indefinite pronoun', example: 'Ik wil **iets** eten. — I want to eat something.' },

  { nl: 'eerste', en: 'first', level: 'A1', meaning: 'Ordinal number', example: 'Dit is mijn **eerste** dag. — This is my first day.', synonyms: 'number one' },



  { nl: 'zonder', en: 'without', level: 'A1', meaning: 'Preposition', example: 'Ik ga **zonder** jas. — I go without a coat.' },

  { nl: 'alleen', en: 'only/alone', level: 'A1', meaning: 'Restriction', example: 'Ik ben **alleen** thuis. — I am home alone.', synonyms: 'lone, lonely, lonesome, sole' },

  { nl: 'brengen', en: 'to bring', level: 'A1', meaning: 'To carry something', example: 'Ik **breng** het mee. — I am bringing it along.', synonyms: 'convey, take' },

  { nl: 'beginnen', en: 'to begin', level: 'A1', meaning: 'Start action', example: 'We **beginnen** nu. — We are starting now.', synonyms: 'commence, get, get down, set about' },

  { nl: 'lopen', en: 'to walk', level: 'A1', meaning: 'Movement verb', example: 'Ik **loop** naar huis. — I walk home.', synonyms: 'pass, walking' },

  { nl: 'toe', en: 'to (towards)', level: 'A2', meaning: 'Direction', example: 'Hij komt naar mij **toe**. — He is coming toward me.' },

  { nl: 'oog', en: 'eye', level: 'A1', meaning: 'Body part', example: 'Mijn **oog** doet pijn. — My eye hurts.', synonyms: 'oculus, optic' },

  { nl: 'want', en: 'because', level: 'A1', meaning: 'Reason conjunction', example: 'Ik ga niet, **want** ik ben moe. — I am not going, because I am tired.' },

  { nl: 'elkaar', en: 'each other', level: 'A1', meaning: 'Reciprocal pronoun', example: 'Ze helpen **elkaar**. — They help each other.' },

  { nl: 'nooit', en: 'never', level: 'A1', meaning: 'Time word', example: 'Ik ga **nooit** daarheen. — I never go there.' },



  { nl: 'vragen', en: 'to ask', level: 'A1', meaning: 'To request information', example: 'Ik **vraag** iets. — I ask something.', synonyms: 'enquire, inquire' },

  { nl: 'niets', en: 'nothing', level: 'A1', meaning: 'Negation pronoun', example: 'Ik zie **niets**. — I see nothing.', synonyms: 'aught, cipher, cypher, goose egg' },

  { nl: 'zelf', en: 'self', level: 'A1', meaning: 'Emphasis', example: 'Ik doe het **zelf**. — I do it myself.', synonyms: 'ego' },

  { nl: 'horen', en: 'to hear', level: 'A1', meaning: 'Perception verb', example: 'Ik **hoor** muziek. — I hear music.', synonyms: 'discover, find out, get wind, get word' },

  { nl: 'altijd', en: 'always', level: 'A1', meaning: 'Frequency', example: 'Ik ben **altijd** op tijd. — I am always on time.', synonyms: 'constantly, ever, invariably' },

  { nl: 'nieuw', en: 'new', level: 'A1', meaning: 'Adjective', example: 'Ik heb een **nieuw** boek. — I have a new book.', synonyms: 'fresh, novel' },

  { nl: 'dus', en: 'so / therefore', level: 'A1', meaning: 'Conclusion word', example: 'Het regent, **dus** ik blijf thuis. — It is raining, so I stay home.', synonyms: 'consequently, hence, soh, sol' },

  { nl: 'wezen', en: 'to be (formal) / being / creature', level: 'B1', meaning: 'Formal verb form', example: 'Hij **is** er geweest. — He has been there.', synonyms: 'animal, animate being, beast, beingness' },

  { nl: 'eigen', en: 'own', level: 'A1', meaning: 'Possessive adjective', example: 'Mijn **eigen** kamer. — My own room.' },

  { nl: 'laat', en: 'late / let', level: 'A1', meaning: 'Time adjective', example: 'Het is **laat**. — It is late.', synonyms: 'belated, net ball, tardy' },



  { nl: 'heel', en: 'very / whole', level: 'A1', meaning: 'Degree word', example: 'Het is **heel** leuk. — It is very fun.', synonyms: 'identical, selfsame, unit' },

  { nl: 'even', en: 'just / for a moment', level: 'A1', meaning: 'Short time', example: 'Wacht **even**. — Wait a moment.', synonyms: 'equitable' },

  { nl: 'zelfs', en: 'even', level: 'A2', meaning: 'Emphasis', example: 'Hij komt **zelfs** morgen. — He is even coming tomorrow.', synonyms: 'eve, even out, evening, eventide' },

  { nl: 'mogen', en: 'may', level: 'A1', meaning: 'Permission verb', example: 'Ik **mag** gaan. — I may go.' },

  { nl: 'voelen', en: 'to feel', level: 'A1', meaning: 'Emotion or touch', example: 'Ik **voel** me goed. — I feel good.', synonyms: 'feeling, flavor, flavour, look' },

  { nl: 'steeds', en: 'still/continually', level: 'A2', meaning: 'Repetition', example: 'Hij komt **steeds** terug. — He keeps coming back.', synonyms: 'hush, stillness' },

  { nl: 'plaats', en: 'place', level: 'A1', meaning: 'Location', example: 'Dit is mijn **plaats**. — This is my place.', synonyms: 'property, spot, topographic point' },

  { nl: 'wie', en: 'who', level: 'A1', meaning: 'Question word', example: '**Wie** is dat? — Who is that?' },

  { nl: 'ten', en: 'at/to (formal)', level: 'B1', meaning: 'Formal preposition', example: 'Hij werkt **ten** noorden. — He works to the north.', synonyms: 'astatine' },

  { nl: 'misschien', en: 'maybe', level: 'A1', meaning: 'Possibility word', example: '**Misschien** kom ik. — Maybe I will come.', synonyms: 'mayhap, peradventure, perchance, perhaps' },



  { nl: 'alles', en: 'everything', level: 'A1', meaning: 'Totality', example: 'Ik zie **alles**. — I see everything.' },

  { nl: 'mee', en: 'along', level: 'A1', meaning: 'Movement with', example: 'Ga je **mee**? — Are you coming along?' },

  { nl: 'velen', en: 'many (people)', level: 'A2', meaning: 'Plural noun', example: '**Velen** komen. — Many are coming.' },

  { nl: 'stellen', en: 'to put/set', level: 'A2', meaning: 'To place or ask', example: 'Ik **stel** een vraag. — I ask a question.', synonyms: 'lay, place, pose, position' },

  { nl: 'leven', en: 'life / to live', level: 'A1', meaning: 'Existence', example: 'Het **leven** is mooi. — Life is beautiful.', synonyms: 'living' },

  { nl: 'huis', en: 'house', level: 'A1', meaning: 'Building', example: 'Mijn **huis** is groot. — My house is big.', synonyms: 'business firm, firm' },

  { nl: 'terwijl', en: 'while', level: 'A2', meaning: 'Time conjunction', example: 'Ik lees **terwijl** hij kookt. — I read while he cooks.', synonyms: 'patch, piece, spell' },

  { nl: 'vallen', en: 'to fall', level: 'A1', meaning: 'Movement verb', example: 'Hij **valt**. — He falls.', synonyms: 'autumn, spill, tumble' },

  { nl: 'anders', en: 'otherwise / different', level: 'A1', meaning: 'Alternative', example: 'Doe het, **anders** niet. — Do it, otherwise don\'t.' },

  { nl: 'moeder', en: 'mother', level: 'A1', meaning: 'Parent', example: 'Mijn **moeder** belt. — My mother is calling.', synonyms: 'female parent' },



  { nl: 'spreken', en: 'to speak', level: 'A1', meaning: 'Communication verb', example: 'Ik **spreek** Nederlands. — I speak Dutch.', synonyms: 'mouth, talk, utter, verbalise' },

  { nl: 'woord', en: 'word', level: 'A1', meaning: 'Language unit', example: 'Dat **woord** is moeilijk. — That word is difficult.' },

  { nl: 'ja', en: 'yes', level: 'A1', meaning: 'Affirmation', example: '**Ja**, ik kom. — Yes, I am coming.' },

  { nl: 'wanneer', en: 'when', level: 'A1', meaning: 'Question word', example: '**Wanneer** ga je? — When are you going?' },

  { nl: 'vader', en: 'father', level: 'A1', meaning: 'Parent', example: 'Mijn **vader** werkt. — My father works.', synonyms: 'begetter, forefather, male parent, sire' },

  { nl: 'terug', en: 'back', level: 'A1', meaning: 'Direction', example: 'Ik ga **terug**. — I am going back.', synonyms: 'dorsum, rear' },

  { nl: 'werk', en: 'work', level: 'A1', meaning: 'Job or activity', example: 'Mijn **werk** is leuk. — My work is fun.' },

  { nl: 'hen', en: 'them', level: 'A1', meaning: 'Object pronoun', example: 'Ik zie **hen**. — I see them.' },

  { nl: 'lijken', en: 'to seem', level: 'A2', meaning: 'Appearance verb', example: 'Het **lijkt** goed. — It seems good.', synonyms: 'appear, look' },

  { nl: 'mogelijk', en: 'possible', level: 'A1', meaning: 'Adjective', example: 'Dat is **mogelijk**. — That is possible.' },



  { nl: 'achter', en: 'behind', level: 'A1', meaning: 'Position', example: 'Hij staat **achter** mij. — He stands behind me.', synonyms: 'arse, ass, backside, bottom' },

  { nl: 'elk', en: 'each', level: 'A1', meaning: 'Distribution', example: '**Elk** kind krijgt iets. — Each child gets something.' },

  { nl: 'ver', en: 'far', level: 'A1', meaning: 'Distance', example: 'Het is **ver**. — It is far.' },

  { nl: 'hoofd', en: 'head', level: 'A1', meaning: 'Body part', example: 'Mijn **hoofd** doet pijn. — My head hurts.', synonyms: 'caput' },

  { nl: 'geval', en: 'case', level: 'A2', meaning: 'Situation', example: 'In dit **geval** ga ik. — In this case I will go.', synonyms: 'event, example, instance' },

  { nl: 'echter', en: 'however', level: 'A2', meaning: 'Contrast word', example: 'Hij wil, **echter** kan niet. — He wants to, however he cannot.', synonyms: 'even so, nevertheless, nonetheless, notwithstanding' },

  { nl: 'zeker', en: 'certainly / sure / certain', level: 'A1', meaning: 'Confidence word', example: 'Dat is **zeker**. — That is certain.', synonyms: 'for certain, for sure, sure enough, surely' },

  { nl: 'bestaan', en: 'to exist', level: 'A2', meaning: 'Existence verb', example: 'Het **bestaat**. — It exists.', synonyms: 'live, subsist, survive' },

  { nl: 'later', en: 'later', level: 'A1', meaning: 'Future time', example: 'Tot **later**. — See you later.', synonyms: 'late, posterior, ulterior' },

  { nl: 'vertellen', en: 'to tell', level: 'A1', meaning: 'To explain', example: 'Ik **vertel** een verhaal. — I tell a story.' },



  { nl: 'volgen', en: 'to follow', level: 'A1', meaning: 'To go after', example: 'Ik **volg** hem. — I follow him.', synonyms: 'postdate' },

  { nl: 'jij', en: 'you', level: 'A1', meaning: 'Informal pronoun', example: '**Jij** bent hier. — You are here.' },

  { nl: 'enkel', en: 'only/single', level: 'A2', meaning: 'Limitation', example: 'Het is een **enkel** geval. — It is a single case.', synonyms: 'ace, alone, bingle, lone' },

  { nl: 'kennen', en: 'to know (person)', level: 'A1', meaning: 'Familiarity', example: 'Ik **ken** hem. — I know him.' },

  { nl: 'klein', en: 'small', level: 'A1', meaning: 'Size adjective', example: 'Het huis is **klein**. — The house is small.' },

  { nl: 'natuurlijk', en: 'of course', level: 'A1', meaning: 'Agreement', example: '**Natuurlijk** help ik. — Of course I will help.' },

  { nl: 'gezicht', en: 'face', level: 'A1', meaning: 'Body part', example: 'Zijn **gezicht** is rood. — His face is red.', synonyms: 'aspect, expression, facial expression, human face' },

  { nl: 'zeer', en: 'very', level: 'A2', meaning: 'Degree word', example: 'Het is **zeer** koud. — It is very cold.' },

  { nl: 'waarom', en: 'why', level: 'A1', meaning: 'Question word', example: '**Waarom** ga je? — Why are you going?' },

  { nl: 'paar', en: 'pair/few', level: 'A1', meaning: 'Small quantity', example: 'Een **paar** dagen. — A few days.', synonyms: 'brace, couple, couplet, distich' },



   { nl: "ieder", en: "each/every", level: "A1", meaning: "Refers to all individually", example: "**Ieder** kind krijgt een cadeau. — Every child gets a present." },

  { nl: "drie", en: "three", level: "A1", meaning: "Number", example: "Ik heb **drie** boeken. — I have three books." },

  { nl: "oud", en: "old", level: "A1", meaning: "Age adjective", example: "Hij is **oud**. — He is old." },

  { nl: "vraag", en: "question", level: "A1", meaning: "Something you ask", example: "Ik stel een **vraag**. — I ask a question." },

  { nl: "trekken", en: "to pull", level: "A1", meaning: "To draw or pull", example: "Hij **trekt** de deur open. — He pulls the door open." },

  { nl: "iemand", en: "someone", level: "A1", meaning: "Unknown person", example: "**Iemand** belt. — Someone is calling." },

  { nl: "zo'n", en: "such a", level: "A1", meaning: "Indicates type", example: "**Zo'n** dag is fijn. — Such a day is nice." },

  { nl: "blijken", en: "to appear", level: "A2", meaning: "To turn out", example: "Het **blijkt** waar. — It turns out to be true." },

  { nl: "vaak", en: "often", level: "A1", meaning: "Frequency", example: "Ik ga **vaak** wandelen. — I often go for a walk." },

  { nl: "soms", en: "sometimes", level: "A1", meaning: "Occasionally", example: "Ik lees **soms**. — I sometimes read." },



  { nl: 'wereld', en: 'world', level: 'A1', meaning: 'The earth or global society', example: 'De **wereld** is groot. — The world is big.', synonyms: 'cosmos, creation, domain, existence' },

  { nl: 'keer', en: 'time/occasion', level: 'A1', meaning: 'Occurrence', example: 'De eerste **keer**. — The first time.', synonyms: 'affair, clip, function, juncture' },

  { nl: 'duidelijk', en: 'clear', level: 'A1', meaning: 'Easy to understand', example: 'Het is **duidelijk**. — It is clear.', synonyms: 'open' },

  { nl: 'eerst', en: 'first', level: 'A1', meaning: 'Before others', example: 'Doe dit **eerst**. — Do this first.', synonyms: 'number one' },

  { nl: 'vooral', en: 'especially', level: 'A1', meaning: 'Particularly', example: 'Ik hou **vooral** van muziek. — I especially like music.', synonyms: 'particularly, peculiarly, specially' },

  { nl: 'noemen', en: 'to name', level: 'A1', meaning: 'To give a name', example: 'Ik **noem** hem Jan. — I call him Jan.' },

  { nl: 'begrijpen', en: 'to understand', level: 'A1', meaning: 'To comprehend', example: 'Ik **begrijp** het. — I understand it.', synonyms: 'realise, realize, see' },

  { nl: 'belangrijk', en: 'important', level: 'A1', meaning: 'Of great value', example: 'Dit is **belangrijk**. — This is important.', synonyms: 'of import, significant' },

  { nl: 'weg', en: 'away / road', level: 'A1', meaning: 'Not present', example: 'Hij is **weg**. — He is gone.', synonyms: 'route' },

  { nl: 'nodig', en: 'necessary', level: 'A1', meaning: 'Required', example: 'Dat is **nodig**. — That is necessary.', synonyms: 'essential, necessity, requirement, requisite' },



  { nl: 'leggen', en: 'to lay', level: 'A1', meaning: 'To put something down', example: 'Ik **leg** het boek neer. — I put the book down.', synonyms: 'ballad' },

  { nl: 'uur', en: 'hour', level: 'A1', meaning: 'Time unit', example: 'Het duurt een **uur**. — It takes an hour.' },

  { nl: 'schrijven', en: 'to write', level: 'A1', meaning: 'To produce text', example: 'Ik **schrijf** een brief. — I write a letter.', synonyms: 'compose, indite, pen' },

  { nl: 'zaak', en: 'matter', level: 'A2', meaning: 'Issue or business', example: 'Dat is een belangrijke **zaak**. — That is an important matter.', synonyms: 'affair, issue, subject, thing' },

  { nl: 'bijna', en: 'almost', level: 'A1', meaning: 'Nearly', example: 'Ik ben **bijna** klaar. — I am almost ready.', synonyms: 'about, most, near, nearly' },

  { nl: 'land', en: 'country', level: 'A1', meaning: 'Nation', example: 'Nederland is een mooi **land**. — The Netherlands is a beautiful country.', synonyms: 'body politic, commonwealth, land, nation' },

  { nl: 'alsof', en: 'as if', level: 'A2', meaning: 'Comparison', example: 'Hij doet **alsof** hij slaapt. — He acts as if he is sleeping.' },

  { nl: 'net', en: 'just / neat / net', level: 'A1', meaning: 'Recently', example: 'Ik kwam **net** thuis. — I just got home.', synonyms: 'cyberspace, equitable, internet, orderly' },

  { nl: 'proberen', en: 'to try', level: 'A1', meaning: 'To attempt', example: 'Ik **probeer** het. — I try it.', synonyms: 'assay, attempt, effort, endeavor' },

  { nl: 'erg', en: 'very / bad', level: 'A1', meaning: 'Degree word', example: 'Het is **erg** koud. — It is very cold.', synonyms: 'badness, identical, selfsame' },



  { nl: 'naam', en: 'name', level: 'A1', meaning: 'Identifier', example: 'Mijn **naam** is Jan. — My name is Jan.' },

  { nl: 'halen', en: 'to get / to fetch / to pass', level: 'A1', meaning: 'To fetch', example: 'Ik **haal** brood. — I get bread.', synonyms: 'acquire' },

  { nl: 'heen', en: 'to (direction)', level: 'A1', meaning: 'Movement', example: 'Ga daarheen. — Go there.' },

  { nl: 'zetten', en: 'to put', level: 'A1', meaning: 'To place', example: 'Ik **zet** het neer. — I put it down.' },

  { nl: 'zat', en: 'fed up/enough', level: 'A2', meaning: 'Enough or annoyed', example: 'Ik ben het **zat**. — I am fed up with it.', synonyms: 'adequate, decent, sufficiency' },

  { nl: 'gebruiken', en: 'to use', level: 'A1', meaning: 'To utilize', example: 'Ik **gebruik** een pen. — I use a pen.', synonyms: 'employment, exercise, function, purpose' },

  { nl: 'soort', en: 'kind/type', level: 'A1', meaning: 'Category', example: 'Dat soort eten. — That kind of food.', synonyms: 'case, character, eccentric, form' },

  { nl: 'slechts', en: 'only', level: 'A2', meaning: 'Just', example: 'Het kost **slechts** tien euro. — It costs only ten euros.' },

  { nl: 'werken', en: 'to work', level: 'A1', meaning: 'To do a job', example: 'Ik **werk** hier. — I work here.' },

  { nl: 'hoog', en: 'high', level: 'A1', meaning: 'Height adjective', example: 'De berg is **hoog**. — The mountain is high.' },



  { nl: 'vol', en: 'full', level: 'A1', meaning: 'Filled', example: 'Het glas is **vol**. — The glass is full.', synonyms: 'full moon, full-of-the-moon' },

  { nl: 'helemaal', en: 'completely', level: 'A1', meaning: 'Fully', example: 'Ik ben **helemaal** klaar. — I am completely ready.', synonyms: 'all, altogether, entirely, totally' },

  { nl: 'juist', en: 'correct / precisely / exactly', level: 'A1', meaning: 'Right', example: 'Dat is **juist**. — That is correct.', synonyms: 'compensate, incisively, just, rectify' },

  { nl: 'welk', en: 'which', level: 'A1', meaning: 'Question word', example: '**Welk** boek kies je? — Which book do you choose?' },

  { nl: 'binnen', en: 'inside', level: 'A1', meaning: 'Interior', example: 'Kom **binnen**. — Come inside.', synonyms: 'interior' },

  { nl: 'sterk', en: 'strong', level: 'A1', meaning: 'Powerful', example: 'Hij is **sterk**. — He is strong.' },

  { nl: 'waar', en: 'where/true', level: 'A1', meaning: 'Place or truth', example: '**Waar** ga je? — Where are you going?', synonyms: 'true up' },

  { nl: 'deel', en: 'part', level: 'A1', meaning: 'Section', example: 'Een **deel** van het boek. — A part of the book.', synonyms: 'component, component part, constituent, portion' },

  { nl: 'echt', en: 'really', level: 'A1', meaning: 'Truly', example: 'Het is **echt** goed. — It is really good.', synonyms: 'actually, genuinely, truly' },

  { nl: 'boek', en: 'book', level: 'A1', meaning: 'Reading material', example: 'Ik lees een **boek**. — I read a book.', synonyms: 'volume' },



  { nl: 'snel', en: 'fast', level: 'A1', meaning: 'Speed', example: 'Hij loopt **snel**. — He walks fast.', synonyms: 'fasting' },

  { nl: 'spelen', en: 'to play', level: 'A1', meaning: 'Game or activity', example: 'Kinderen **spelen**. — Children play.', synonyms: 'drama, dramatic play' },

  { nl: 'aantal', en: 'number/amount', level: 'A1', meaning: 'Quantity', example: 'Een groot **aantal** mensen. — A large number of people.', synonyms: 'figure, sum' },

  { nl: 'gebeuren', en: 'to happen', level: 'A1', meaning: 'Occur', example: 'Wat **gebeurt** er? — What is happening?', synonyms: 'bechance, befall, come about, fall out' },

  { nl: 'deur', en: 'door', level: 'A1', meaning: 'Entrance', example: 'De **deur** is open. — The door is open.', synonyms: 'doorway, room access, threshold' },

  { nl: 'manier', en: 'way/manner', level: 'A1', meaning: 'Method', example: 'Op deze **manier**. — In this way.', synonyms: 'agency, fashion, means, mode' },

  { nl: 'ding', en: 'thing', level: 'A1', meaning: 'Object', example: 'Dat **ding** is kapot. — That thing is broken.' },

  { nl: 'nee', en: 'no', level: 'A1', meaning: 'Negative answer', example: '**Nee**, dank je. — No, thank you.' },

  { nl: 'uw', en: 'your (formal)', level: 'A1', meaning: 'Possessive formal', example: '**Uw** naam? — Your name?' },

  { nl: 'kamer', en: 'room', level: 'A1', meaning: 'Space in house', example: 'Mijn **kamer** is klein. — My room is small.', synonyms: 'elbow room, way' },



  { nl: 'water', en: 'water', level: 'A1', meaning: 'Liquid', example: 'Ik drink **water**. — I drink water.' },

  { nl: 'allemaal', en: 'all', level: 'A1', meaning: 'Everyone/everything', example: 'Ze komen **allemaal**. — They all come.' },

  { nl: 'tweede', en: 'second', level: 'A1', meaning: 'Ordinal number', example: 'De **tweede** keer. — The second time.', synonyms: 'bit, minute, moment, sec' },

  { nl: 'jongen', en: 'boy', level: 'A1', meaning: 'Young male', example: 'De **jongen** speelt. — The boy plays.', synonyms: 'male child' },

  { nl: 'naast', en: 'next to', level: 'A1', meaning: 'Position', example: 'Hij zit **naast** mij. — He sits next to me.' },

  { nl: 'meisje', en: 'girl', level: 'A1', meaning: 'Young female', example: 'Het **meisje** lacht. — The girl laughs.', synonyms: 'female child, fille, little girl, miss' },

  { nl: 'roepen', en: 'to call/shout', level: 'A1', meaning: 'To shout', example: 'Hij **roept** mij. — He calls me.', synonyms: 'cry, outcry, phone call, telephone call' },

  { nl: 'mooi', en: 'beautiful / pretty / nice', level: 'A1', meaning: 'Aesthetic quality', example: 'Het is **mooi**. — It is beautiful.' },

  { nl: 'feit', en: 'fact', level: 'A2', meaning: 'True statement', example: 'Dat is een **feit**. — That is a fact.' },

  { nl: 'grond', en: 'ground', level: 'A1', meaning: 'Earth surface', example: 'Hij zit op de **grond**. — He sits on the ground.', synonyms: 'dry land, earth, land, reason' },



  { nl: 'wachten', en: 'to wait', level: 'A1', meaning: 'To stay until', example: 'Ik **wacht** hier. — I wait here.', synonyms: 'delay, hold, postponement, time lag' },

  { nl: 'zin', en: 'sentence/desire', level: 'A1', meaning: 'Phrase or mood', example: 'Ik heb **zin**. — I feel like it.', synonyms: 'condemnation, conviction' },

  { nl: 'kort', en: 'short', level: 'A1', meaning: 'Length/time', example: 'Een **korte** dag. — A short day.', synonyms: 'short circuit' },

  { nl: 'zichzelf', en: 'himself/herself', level: 'A1', meaning: 'Reflexive pronoun', example: 'Hij ziet **zichzelf**. — He sees himself.' },

  { nl: 'leren', en: 'to learn', level: 'A1', meaning: 'To study', example: 'Ik **leer** Nederlands. — I learn Dutch.', synonyms: 'acquire, discover, find out, get wind' },

  { nl: 'praten', en: 'to talk', level: 'A1', meaning: 'To speak', example: 'Wij **praten**. — We talk.', synonyms: 'talking' },

  { nl: 'eigenlijk', en: 'actually', level: 'A1', meaning: 'In fact', example: 'Ik wil **eigenlijk** gaan. — I actually want to go.', synonyms: 'in reality, really' },

  { nl: 'open', en: 'open', level: 'A1', meaning: 'Not closed', example: 'De deur is **open**. — The door is open.', synonyms: 'clear, open air, out-of-doors, outdoors' },

  { nl: 'probleem', en: 'problem', level: 'A1', meaning: 'Issue', example: 'Dat is een **probleem**. — That is a problem.', synonyms: 'job' },

  { nl: 'vorm', en: 'shape/form', level: 'A1', meaning: 'Structure', example: 'De **vorm** is rond. — The shape is round.', synonyms: 'configuration, conformation, contour, descriptor' },



  { nl: 'vast', en: 'fixed / sure / stuck', level: 'A1', meaning: 'Firm or certain', example: 'Het staat **vast**. — It is certain.', synonyms: 'bushel, certain, deposit, doctor' },

  { nl: 'enig', en: 'some', level: 'A2', meaning: 'A little', example: 'Ik heb **enig** idee. — I have some idea.' },

  { nl: 'zoeken', en: 'to search', level: 'A1', meaning: 'To look for', example: 'Ik **zoek** mijn sleutels. — I look for my keys.', synonyms: 'hunt, hunting' },

  { nl: 'niemand', en: 'no one', level: 'A1', meaning: 'Nobody', example: '**Niemand** komt. — No one comes.' },

  { nl: 'daarom', en: 'therefore', level: 'A1', meaning: 'Reason', example: 'Ik ben moe, **daarom** slaap ik. — I am tired, therefore I sleep.', synonyms: 'consequently, hence, thence, thus' },

  { nl: 'slaan', en: 'to hit / to beat / to strike', level: 'A1', meaning: 'To strike', example: 'Hij **slaat** de bal. — He hits the ball.', synonyms: 'hitting, striking' },

  { nl: 'stad', en: 'city', level: 'A1', meaning: 'Urban area', example: 'De **stad** is druk. — The city is busy.', synonyms: 'metropolis, urban center' },

  { nl: 'groep', en: 'group', level: 'A1', meaning: 'Collection of people', example: 'De **groep** is groot. — The group is big.', synonyms: 'chemical group, grouping, radical' },

  { nl: 'geloven', en: 'to believe', level: 'A1', meaning: 'To trust', example: 'Ik **geloof** hem. — I believe him.', synonyms: 'conceive, consider, think' },

  { nl: 'ter', en: 'at/to (formal)', level: 'B1', meaning: 'Formal preposition', example: 'Hij werkt **ter** plaatse. — He works on site.', synonyms: 'astatine' },



  { nl: 'gewoon', en: 'just/normal', level: 'A1', meaning: 'Ordinary', example: 'Het is **gewoon** goed. — It is just good.', synonyms: 'convention, equitable, formula, pattern' },

  { nl: 'Kamer', en: 'Chamber/Room (formal)', level: 'B1', meaning: 'Formal noun', example: 'De Tweede **Kamer**. — The House of Representatives.' },

  { nl: 'jong', en: 'young', level: 'A1', meaning: 'Age adjective', example: 'Hij is **jong**. — He is young.', synonyms: 'offspring' },

  { nl: 'bepalen', en: 'to determine', level: 'A2', meaning: 'To decide', example: 'Wij **bepalen** dat. — We determine that.', synonyms: 'ascertain, find, find out, influence' },

  { nl: 'vroeg', en: 'early / asked', level: 'A1', meaning: 'Time adjective', example: 'Ik sta **vroeg** op. — I get up early.', synonyms: 'ask, enquire, inquire' },

  { nl: 'wijze', en: 'way/manner (formal)', level: 'B1', meaning: 'Method', example: 'Op deze **wijze**. — In this manner.', synonyms: 'agency, fashion, manner, means' },

  { nl: 'samen', en: 'together', level: 'A1', meaning: 'With others', example: 'Wij gaan **samen**. — We go together.' },

  { nl: 'stem', en: 'voice / vote', level: 'A1', meaning: 'Sound of speaking', example: 'Zijn **stem** is zacht. — His voice is soft.', synonyms: 'ballot, balloting, phonation, vocalisation' },

  { nl: 'wit', en: 'white', level: 'A1', meaning: 'Color', example: 'De muur is **wit**. — The wall is white.', synonyms: 'whiteness' },

  { nl: 'lezen', en: 'to read', level: 'A1', meaning: 'To interpret text', example: 'Ik **lees** een boek. — I read a book.' },

    { nl: 'zodat', en: 'so that', level: 'A2', meaning: 'Indicates purpose or result', example: 'Ik spreek langzaam **zodat** je het begrijpt. — I speak slowly so that you understand it.' },

  { nl: 'lachen', en: 'to laugh', level: 'A1', meaning: 'To show amusement', example: 'We **lachen** samen. — We laugh together.', synonyms: 'laughter' },

  { nl: 'bed', en: 'bed', level: 'A1', meaning: 'Furniture to sleep', example: 'Ik lig in **bed**. — I am lying in bed.' },

  { nl: 'genoeg', en: 'enough', level: 'A1', meaning: 'Sufficient amount', example: 'Ik heb **genoeg** gegeten. — I have eaten enough.', synonyms: 'adequate, decent, sufficiency' },

  { nl: 'verder', en: 'further', level: 'A1', meaning: 'More ahead', example: 'Ga **verder**. — Go on.', synonyms: 'advance, boost, encourage, foster' },

  { nl: 'God', en: 'God', level: 'A2', meaning: 'Deity', example: '**God** wordt vaak genoemd. — God is often mentioned.', synonyms: 'deity, divinity, immortal' },

  { nl: 'moment', en: 'moment', level: 'A1', meaning: 'Short time', example: 'Wacht een **moment**. — Wait a moment.', synonyms: 'bit, instant, minute, second' },

  { nl: 'daarna', en: 'after that', level: 'A1', meaning: 'Following time', example: 'We eten en **daarna** gaan we weg. — We eat and after that we leave.' },

  { nl: 'verschillende', en: 'different', level: 'A1', meaning: 'Various', example: 'Er zijn **verschillende** opties. — There are different options.' },

  { nl: 'beetje', en: 'a little', level: 'A1', meaning: 'Small amount', example: 'Ik wil een **beetje** water. — I want a little water.' },



  { nl: 'volgens', en: 'according to', level: 'A1', meaning: 'Based on', example: '**Volgens** mij klopt het. — I think it is correct.' },

  { nl: 'lichaam', en: 'body', level: 'A1', meaning: 'Human body', example: 'Mijn **lichaam** is moe. — My body is tired.', synonyms: 'organic structure, physical structure' },

  { nl: 'kant', en: 'side', level: 'A1', meaning: 'Edge or side', example: 'Aan deze **kant**. — On this side.' },

  { nl: 'staat', en: 'state / stands', level: 'A1', meaning: 'Condition or country', example: 'De **staat** beslist. — The state decides.', synonyms: 'base, pedestal, province, stand' },

  { nl: 'der', en: 'of the (formal)', level: 'B1', meaning: 'Formal article', example: 'De koning **der** Nederlanden. — The King of the Netherlands.' },

  { nl: 'moeilijk', en: 'difficult', level: 'A1', meaning: 'Hard to do', example: 'Dat is **moeilijk**. — That is difficult.', synonyms: 'hard, unmanageable' },

  { nl: 'weinig', en: 'little/few', level: 'A1', meaning: 'Small quantity', example: 'Ik heb **weinig** tijd. — I have little time.', synonyms: 'small' },

  { nl: 'vriend', en: 'friend / boyfriend', level: 'A1', meaning: 'Close person', example: 'Mijn **vriend** komt. — My friend is coming.', synonyms: 'ally, beau, fellow, swain' },

  { nl: 'avond', en: 'evening', level: 'A1', meaning: 'Time of day', example: 'Goede **avond**. — Good evening.', synonyms: 'eve, even, eventide' },

  { nl: 'week', en: 'week', level: 'A1', meaning: '7 days', example: 'Deze **week** werk ik veel. — I work a lot this week.', synonyms: 'hebdomad, workweek' },



  { nl: 'dragen', en: 'to carry/wear', level: 'A1', meaning: 'To hold or wear', example: 'Ik **draag** een jas. — I wear a jacket.', synonyms: 'clothing, habiliment, transport, vesture' },

  { nl: '’s', en: "'s (possessive/time)", level: 'A1', meaning: 'Used in time expressions', example: '**’s** avonds lees ik. — I read in the evening.' },

  { nl: 'geld', en: 'money', level: 'A1', meaning: 'Currency', example: 'Ik heb **geld** nodig. — I need money.' },

  { nl: 'iedereen', en: 'everyone', level: 'A1', meaning: 'All people', example: '**Iedereen** komt. — Everyone is coming.' },

  { nl: 'reeds', en: 'already (formal)', level: 'B1', meaning: 'Formal already', example: 'Hij is **reeds** weg. — He has already left.' },

  { nl: 'laatst', en: 'recently', level: 'A1', meaning: 'Not long ago', example: 'Ik zag hem **laatst**. — I saw him recently.', synonyms: 'late, lately, latterly, of late' },

  { nl: 'dezelfde', en: 'the same', level: 'A1', meaning: 'Identical', example: 'We hebben **dezelfde** tas. — We have the same bag.' },

  { nl: 'helpen', en: 'to help', level: 'A1', meaning: 'To assist', example: 'Ik **help** jou. — I help you.', synonyms: 'aid, assist, assistance, assistant' },

  { nl: 'hangen', en: 'to hang', level: 'A1', meaning: 'To be suspended', example: 'De jas **hangt** daar. — The jacket hangs there.', synonyms: 'bent, knack' },

  { nl: 'gedachte', en: 'thought', level: 'A1', meaning: 'Idea in mind', example: 'Dat is een goede **gedachte**. — That is a good thought.', synonyms: 'cerebration, idea, intellection, mentation' },



  { nl: 'betekenen', en: 'to mean', level: 'A1', meaning: 'To signify', example: 'Wat **betekent** dit? — What does this mean?', synonyms: 'intend, mean value' },

  { nl: 'licht', en: 'light / easy', level: 'A1', meaning: 'Not heavy/brightness', example: 'Het is **licht** buiten. — It is light outside.', synonyms: 'easygoing, leisurely, light source, visible light' },

  { nl: 'diep', en: 'deep', level: 'A1', meaning: 'Depth adjective', example: 'Het water is **diep**. — The water is deep.', synonyms: 'oceanic abyss, trench' },

  { nl: 'geheel', en: 'entire', level: 'A2', meaning: 'Whole', example: 'Het **geheel** is klaar. — The whole is finished.', synonyms: 'full, stallion, total' },

  { nl: 'vormen', en: 'to form', level: 'A1', meaning: 'To create shape', example: 'Ze **vormen** een groep. — They form a group.', synonyms: 'descriptor, kind, signifier, sort' },

  { nl: 'stuk', en: 'piece', level: 'A1', meaning: 'Part of something', example: 'Een **stuk** taart. — A piece of cake.' },

  { nl: 'tijdens', en: 'during', level: 'A1', meaning: 'Time preposition', example: '**Tijdens** de les luister ik. — During the lesson I listen.' },

  { nl: 'dienen', en: 'to serve', level: 'A2', meaning: 'To function as', example: 'Het **dient** als voorbeeld. — It serves as an example.', synonyms: 'function, service' },

  { nl: 'bekend', en: 'known', level: 'A1', meaning: 'Familiar', example: 'Dat is **bekend**. — That is known.', synonyms: 'cognise, cognize, know' },

  { nl: 'bijvoorbeeld', en: 'for example', level: 'A1', meaning: 'Example phrase', example: '**Bijvoorbeeld**, appel. — For example, an apple.' },



{ nl: 'nacht', en: 'night', level: 'A1', meaning: 'Time of day', example: 'Het is **nacht**. — It is night.', synonyms: 'dark, nighttime' },

{ nl: 'graag', en: 'gladly / please', level: 'A1', meaning: 'With pleasure', example: 'Ik help **graag**. — I gladly help.', synonyms: 'delight, fain, lief' },

{ nl: 'belang', en: 'importance', level: 'A1', meaning: 'Value', example: 'Dat is van **belang**. — That is of importance.', synonyms: 'grandness' },

{ nl: 'langs', en: 'along', level: 'A1', meaning: 'Movement', example: 'We lopen **langs** de rivier. — We walk along the river.' },

{ nl: 'beide', en: 'both', level: 'A1', meaning: 'Two together', example: '**Beide** zijn goed. — Both are good.' },

{ nl: 'jullie', en: 'you (plural)', level: 'A1', meaning: 'Plural pronoun', example: '**Jullie** komen? — Are you all coming?' },

{ nl: 'leiden', en: 'to lead', level: 'A1', meaning: 'To guide', example: 'Hij **leidt** het team. — He leads the team.' },

{ nl: 'ontstaan', en: 'to arise', level: 'A2', meaning: 'To come into being', example: 'Het probleem **ontstaat**. — The problem arises.', synonyms: 'bob up, come up, develop, grow' },

{ nl: 'nou', en: 'well', level: 'A1', meaning: 'Filler word', example: '**Nou**, oké. — Well, okay.' },

{ nl: 'ontwikkeling', en: 'development', level: 'A2', meaning: 'Growth process', example: 'De **ontwikkeling** gaat door. — The development continues.', synonyms: 'evolution' },



{ nl: 'vrij', en: 'free / quite / off', level: 'A1', meaning: 'Not occupied', example: 'Ik ben **vrij**. — I am free.', synonyms: 'bump off, dispatch, free people, hit' },

{ nl: 'zit', en: 'sits', level: 'A1', meaning: 'Form of zitten', example: 'Hij **zit** daar. — He sits there.', synonyms: 'sit, sit around, sit down' },

{ nl: 'steken', en: 'to stick / to sting / to stab', level: 'A2', meaning: 'To insert', example: 'Hij **steekt** het erin. — He sticks it in.' },

{ nl: 'per', en: 'per', level: 'A1', meaning: 'Each', example: 'Prijs **per** stuk. — Price per piece.' },

{ nl: 'zoveel', en: 'so much/many', level: 'A1', meaning: 'Large amount', example: 'Ik heb **zoveel** werk. — I have so much work.' },

{ nl: 'gevoel', en: 'feeling', level: 'A1', meaning: 'Emotion', example: 'Dat geeft een goed **gevoel**. — That gives a good feeling.', synonyms: 'belief, impression, notion, opinion' },

{ nl: 'verdwijnen', en: 'to disappear', level: 'A1', meaning: 'To go away', example: 'Hij **verdwijnt**. — He disappears.', synonyms: 'go away, vanish' },

{ nl: 'half', en: 'half', level: 'A1', meaning: '50 percent', example: 'Een **half** uur. — Half an hour.', synonyms: 'one-half' },

{ nl: 'wijzen', en: 'to point', level: 'A1', meaning: 'To indicate', example: 'Hij **wijst** naar mij. — He points at me.' },

{ nl: 'tafel', en: 'table', level: 'A1', meaning: 'Furniture', example: 'De **tafel** is groot. — The table is big.', synonyms: 'tabular array' },



{ nl: 'boven', en: 'above', level: 'A1', meaning: 'Higher position', example: 'Hij woont **boven**. — He lives upstairs.' },

{ nl: 'algemeen', en: 'general', level: 'A2', meaning: 'Common', example: 'In het **algemeen** klopt het. — In general, it is correct.', synonyms: 'full general, superior general' },

{ nl: 'politiek', en: 'politics', level: 'A2', meaning: 'Government affairs', example: 'De **politiek** verandert. — Politics changes.', synonyms: 'government, political relation, political science' },

{ nl: 'school', en: 'school', level: 'A1', meaning: 'Education place', example: 'Ik ga naar **school**. — I go to school.', synonyms: 'schoolhouse' },

{ nl: 'gebied', en: 'area', level: 'A1', meaning: 'Region', example: 'Dit **gebied** is groot. — This area is big.', synonyms: 'country' },

{ nl: 'bijzonder', en: 'special', level: 'A1', meaning: 'Not ordinary', example: 'Dat is **bijzonder**. — That is special.' },

{ nl: 'hoeven', en: 'to need (not)', level: 'A1', meaning: 'Necessity (negative)', example: 'Je **hoeft** niet te komen. — You don’t have to come.' },

{ nl: 'buiten', en: 'outside', level: 'A1', meaning: 'External place', example: 'Ik ga **buiten**. — I go outside.', synonyms: 'exterior' },

{ nl: 'bedoelen', en: 'to mean/intend', level: 'A1', meaning: 'To intend', example: 'Wat **bedoel** je? — What do you mean?', synonyms: 'designate, destine, mean value, specify' },

{ nl: 'kleine', en: 'small', level: 'A1', meaning: 'Size adjective', example: 'Een **kleine** hond. — A small dog.' },



{ nl: 'vier', en: 'four', level: 'A1', meaning: 'Number', example: 'Ik heb **vier** appels. — I have four apples.', synonyms: 'four-spot, foursome, quadruplet, quartet' },

{ nl: 'bereiken', en: 'to reach', level: 'A1', meaning: 'To achieve or arrive', example: 'We **bereiken** het doel. — We reach the goal.', synonyms: 'ambit, compass, orbit, range' },

{ nl: 'veranderen', en: 'to change', level: 'A1', meaning: 'To make different', example: 'Alles **verandert**. — Everything changes.', synonyms: 'alteration, modification' },

{ nl: 'verhaal', en: 'story', level: 'A1', meaning: 'Narrative', example: 'Het **verhaal** is leuk. — The story is nice.', synonyms: 'narration, narrative, tale' },

{ nl: 'pas', en: 'just/only', level: 'A1', meaning: 'Recently or only', example: 'Ik ben **pas** klaar. — I just finished.' },

{ nl: 'dood', en: 'dead', level: 'A1', meaning: 'No longer alive', example: 'De plant is **dood**. — The plant is dead.' },

{ nl: 'hoewel', en: 'although', level: 'A2', meaning: 'Contrast conjunction', example: '**Hoewel** het regent, ga ik. — Although it rains, I go.' },

{ nl: 'draaien', en: 'to turn', level: 'A1', meaning: 'To rotate', example: 'Hij **draait** zich om. — He turns around.', synonyms: 'bend, crook, turning, twist' },

{ nl: 'sociaal', en: 'social', level: 'A1', meaning: 'Related to society', example: 'Hij is **sociaal**. — He is social.', synonyms: 'mixer, sociable, societal' },

{ nl: 'recht', en: 'right/straight', level: 'A1', meaning: 'Direction or law', example: 'Ga **recht** door. — Go straight ahead.', synonyms: 'heterosexual, heterosexual person, straight person' },



{ nl: 'zwaar', en: 'heavy', level: 'A1', meaning: 'Weight adjective', example: 'De tas is **zwaar**. — The bag is heavy.' },

{ nl: 'schijnen', en: 'to shine/seem', level: 'A1', meaning: 'Emit light or appear', example: 'De zon **schijnt**. — The sun shines.', synonyms: 'appear, effulgence, look, radiance' },

{ nl: 'hard', en: 'hard / loud / fast', level: 'A1', meaning: 'Firm or intense', example: 'Hij werkt **hard**. — He works hard.', synonyms: 'brassy, cheap, difficult, fasting' },

{ nl: 'lid', en: 'member', level: 'A1', meaning: 'Part of group', example: 'Hij is een **lid**. — He is a member.', synonyms: 'fellow member' },

{ nl: 'gevolg', en: 'result', level: 'A1', meaning: 'Outcome', example: 'Dat is het **gevolg**. — That is the result.', synonyms: 'answer, consequence, effect, event' },

{ nl: 'wijn', en: 'wine', level: 'A1', meaning: 'Alcoholic drink', example: 'Ik drink **wijn**. — I drink wine.', synonyms: 'vino, wine-colored, wine-coloured' },

{ nl: 'maand', en: 'month', level: 'A1', meaning: 'Time unit', example: 'Deze **maand** werk ik. — This month I work.', synonyms: 'calendar month' },

{ nl: 'voorbeeld', en: 'example', level: 'A1', meaning: 'Illustration', example: 'Een goed **voorbeeld**. — A good example.', synonyms: 'illustration, instance, model, representative' },

{ nl: 'eeuw', en: 'century', level: 'A2', meaning: '100 years', example: 'De 20e **eeuw**. — The 20th century.', synonyms: 'hundred, one c' },

{ nl: 'precies', en: 'exactly', level: 'A1', meaning: 'Accuracy', example: 'Dat is **precies** goed. — That is exactly right.', synonyms: 'just, precisely' },



{ nl: 'situatie', en: 'situation', level: 'A1', meaning: 'Circumstance', example: 'De **situatie** is lastig. — The situation is difficult.', synonyms: 'position' },

{ nl: 'mond', en: 'mouth', level: 'A1', meaning: 'Body part', example: 'Mijn **mond** is droog. — My mouth is dry.', synonyms: 'oral cavity, oral fissure, rima oris' },

{ nl: 'opnieuw', en: 'again', level: 'A1', meaning: 'Once more', example: 'Probeer het **opnieuw**. — Try it again.', synonyms: 'once again, once more, over again' },

{ nl: 'vroeger', en: 'earlier / formerly', level: 'A1', meaning: 'In the past', example: '**Vroeger** was het anders. — Earlier it was different.', synonyms: 'earliest, early, erst, erstwhile' },

{ nl: 'bovendien', en: 'moreover', level: 'A2', meaning: 'Addition', example: 'Het is goed, **bovendien** goedkoop. — It is good, moreover cheap.', synonyms: 'furthermore' },

{ nl: 'mogelijkheid', en: 'possibility', level: 'A1', meaning: 'Option', example: 'Er is een **mogelijkheid**. — There is a possibility.', synonyms: 'possibleness' },

{ nl: 'middel', en: 'means', level: 'A1', meaning: 'Method/tool', example: 'Een goed **middel**. — A good means.', synonyms: 'agency, way' },

{ nl: 'reden', en: 'reason', level: 'A1', meaning: 'Cause', example: 'Dat is de **reden**. — That is the reason.', synonyms: 'ground' },

{ nl: 'eerder', en: 'earlier / rather / sooner', level: 'A1', meaning: 'Before now', example: 'Ik was hier **eerder**. — I was here earlier.', synonyms: 'earliest, early, instead, kind of' },

{ nl: 'voet', en: 'foot', level: 'A1', meaning: 'Body part', example: 'Mijn **voet** doet pijn. — My foot hurts.', synonyms: 'human foot, pes' },



{ nl: 'thuis', en: 'home', level: 'A1', meaning: 'Place where one lives', example: 'Ik ben **thuis**. — I am at home.', synonyms: 'abode, domicile, dwelling, dwelling house' },

{ nl: 'raken', en: 'to touch/get', level: 'A2', meaning: 'To be affected or touch', example: 'Hij **raakt** de bal. — He touches the ball.', synonyms: 'acquire, cutaneous senses, skin senses, touch modality' },

{ nl: 'bepaald', en: 'certain/specific', level: 'A2', meaning: 'Specific or definite', example: 'Een **bepaald** moment. — A certain moment.', synonyms: 'particular, sure' },

{ nl: 'merken', en: 'to notice', level: 'A1', meaning: 'To observe', example: 'Ik **merk** het. — I notice it.', synonyms: 'observance, observation' },

{ nl: 'vanuit', en: 'from (a place)', level: 'A1', meaning: 'Starting point', example: 'Hij werkt **vanuit** huis. — He works from home.' },

{ nl: 'tegenover', en: 'opposite', level: 'A1', meaning: 'Across from', example: 'Ik zit **tegenover** jou. — I sit opposite you.', synonyms: 'antonym, contrary, opposite word, reverse' },

{ nl: 'idee', en: 'idea', level: 'A1', meaning: 'Thought or concept', example: 'Goed **idee**! — Good idea!', synonyms: 'mind, thought' },

{ nl: 'ouder', en: 'older/parent', level: 'A1', meaning: 'Comparative or parent', example: 'Mijn **ouders** komen. — My parents are coming.', synonyms: 'aged, elder, elderly, senior' },

{ nl: 'betreffen', en: 'to concern', level: 'A2', meaning: 'To relate to', example: 'Het **betreft** dit onderwerp. — It concerns this subject.', synonyms: 'care, fear' },

{ nl: 'kracht', en: 'strength', level: 'A1', meaning: 'Power', example: 'Hij heeft veel **kracht**. — He has a lot of strength.', synonyms: 'military capability, military posture, military strength, posture' },



{ nl: 'wonen', en: 'to live', level: 'A1', meaning: 'To reside', example: 'Ik **woon** hier. — I live here.', synonyms: 'dwell, inhabit, populate' },

{ nl: 'heer', en: 'sir / gentleman / lord', level: 'A1', meaning: 'Polite address', example: 'Goedemiddag, **heer**. — Good afternoon, sir.', synonyms: 'man, master, overlord, valet' },

{ nl: 'gebruik', en: 'use', level: 'A1', meaning: 'Usage', example: 'Het **gebruik** is duidelijk. — The use is clear.', synonyms: 'employment, exercise, function, purpose' },

{ nl: 'meteen', en: 'immediately', level: 'A1', meaning: 'Right away', example: 'Ik kom **meteen**. — I come immediately.', synonyms: 'at once, directly, forthwith, instantly' },

{ nl: 'rol', en: 'role', level: 'A1', meaning: 'Function or part', example: 'Hij speelt een **rol**. — He plays a role.', synonyms: 'character, function, office, part' },

{ nl: 'ooit', en: 'ever', level: 'A1', meaning: 'At any time', example: 'Ben je hier **ooit** geweest? — Have you ever been here?', synonyms: 'always' },

{ nl: 'jou', en: 'you', level: 'A1', meaning: 'Object pronoun', example: 'Ik zie **jou**. — I see you.' },

{ nl: 'antwoord', en: 'answer', level: 'A1', meaning: 'Response', example: 'Dat is het **antwoord**. — That is the answer.', synonyms: 'reply, resolution, response, result' },

{ nl: 'punt', en: 'point', level: 'A1', meaning: 'Dot or topic', example: 'Goed **punt**. — Good point.' },

{ nl: 'auto', en: 'car', level: 'A1', meaning: 'Vehicle', example: 'De **auto** rijdt. — The car drives.', synonyms: 'auto, automobile, machine, motorcar' },



{ nl: 'antwoorden', en: 'to answer', level: 'A1', meaning: 'To respond', example: 'Ik **antwoord** snel. — I answer quickly.', synonyms: 'reply, resolution, response, result' },

{ nl: 'slapen', en: 'to sleep', level: 'A1', meaning: 'Rest', example: 'Ik **slaap** goed. — I sleep well.', synonyms: 'slumber, sopor' },

{ nl: 'dicht', en: 'closed / close / near', level: 'A1', meaning: 'Not open', example: 'De deur is **dicht**. — The door is closed.', synonyms: 'approach, closing, come near, come on' },

{ nl: 'zowel', en: 'both', level: 'A1', meaning: 'And also', example: '**Zowel** jij als ik. — Both you and I.' },

{ nl: 'kerk', en: 'church', level: 'A1', meaning: 'Religious building', example: 'De **kerk** is oud. — The church is old.', synonyms: 'church building' },

{ nl: 'meneer', en: 'sir', level: 'A1', meaning: 'Polite address', example: 'Dank u, **meneer**. — Thank you, sir.' },

{ nl: 'onderzoek', en: 'research', level: 'A1', meaning: 'Study or investigation', example: 'Het **onderzoek** begint. — The research begins.', synonyms: 'enquiry, inquiry' },

{ nl: 'beweging', en: 'movement', level: 'A1', meaning: 'Motion', example: 'De **beweging** stopt. — The movement stops.', synonyms: 'motility, motion, move' },

{ nl: 'blik', en: 'look/glance', level: 'A1', meaning: 'Way of seeing', example: 'Zijn **blik** is streng. — His look is strict.', synonyms: 'aspect, expression, face, facial expression' },



{ nl: 'rijden', en: 'to drive / to ride', level: 'A1', meaning: 'Operate vehicle', example: 'Ik **rijd** naar werk. — I drive to work.', synonyms: 'driving force, thrust' },

{ nl: 'kans', en: 'chance', level: 'A1', meaning: 'Opportunity', example: 'Ik heb een **kans**. — I have a chance.', synonyms: 'fortune, hazard, luck, opportunity' },

{ nl: 'waarschijnlijk', en: 'probably', level: 'A1', meaning: 'Likelihood', example: 'Hij komt **waarschijnlijk**. — He probably comes.', synonyms: 'believably, belike, credibly, likely' },

{ nl: 'plan', en: 'plan', level: 'A1', meaning: 'Intention', example: 'Het **plan** werkt. — The plan works.', synonyms: 'design, program, programme' },

{ nl: 'ogenblik', en: 'moment', level: 'A1', meaning: 'Short time', example: 'Wacht een **ogenblik**. — Wait a moment.', synonyms: 'bit, instant, minute, second' },

{ nl: 'zaken', en: 'matters', level: 'A1', meaning: 'Things/business', example: 'Belangrijke **zaken**. — Important matters.', synonyms: 'affair, issue, matter, subject' },

{ nl: 'brief', en: 'letter', level: 'A1', meaning: 'Written message', example: 'Ik schrijf een **brief**. — I write a letter.', synonyms: 'alphabetic character, missive' },

{ nl: 'aandacht', en: 'attention', level: 'A1', meaning: 'Focus', example: 'Geef **aandacht**. — Give attention.', synonyms: 'aid, attending, care, tending' },

{ nl: 'langzaam', en: 'slowly', level: 'A1', meaning: 'Low speed', example: 'Hij loopt **langzaam**. — He walks slowly.', synonyms: 'easy, lento, slow, tardily' },

{ nl: 'richting', en: 'direction', level: 'A1', meaning: 'Way', example: 'Deze **richting**. — This direction.', synonyms: 'way' },



{ nl: 'gelden', en: 'to apply', level: 'A2', meaning: 'To be valid', example: 'De regels **gelden**. — The rules apply.', synonyms: 'employ, go for, hold, use' },

{ nl: 'verschillen', en: 'to differ', level: 'A1', meaning: 'To be different', example: 'Ze **verschillen**. — They differ.', synonyms: 'disagree, dissent, take issue' },

{ nl: 'werkelijk', en: 'really', level: 'A1', meaning: 'Truly', example: 'Het is **werkelijk** zo. — It is really so.', synonyms: 'actually, genuinely, truly' },

{ nl: 'geest', en: 'mind/spirit', level: 'A1', meaning: 'Mental aspect', example: 'Sterke **geest**. — Strong mind.', synonyms: 'brain, feel, feeling, flavor' },

{ nl: 'Nederlands', en: 'Dutch', level: 'A1', meaning: 'Language', example: 'Ik spreek **Nederlands**. — I speak Dutch.' },

{ nl: 'beeld', en: 'image', level: 'A1', meaning: 'Picture', example: 'Een mooi **beeld**. — A beautiful image.', synonyms: 'mental image, persona' },

{ nl: 'sluiten', en: 'to close', level: 'A1', meaning: 'To shut', example: 'Ik **sluit** de deur. — I close the door.', synonyms: 'closing, conclusion, end, ending' },

{ nl: 'verwachten', en: 'to expect', level: 'A1', meaning: 'To anticipate', example: 'Ik **verwacht** hem. — I expect him.', synonyms: 'anticipate, ask, require' },

{ nl: 'richten', en: 'to direct', level: 'A1', meaning: 'To aim', example: 'Hij **richt** zich op werk. — He focuses on work.', synonyms: 'aim, place, point, target' },

{ nl: 'oorlog', en: 'war', level: 'A1', meaning: 'Conflict', example: 'De **oorlog** duurt lang. — The war lasts long.', synonyms: 'warfare' },

  { nl: 'eten', en: 'to eat / food', level: 'A1', meaning: 'Consume food', example: 'Ik **eet** brood. — I eat bread.', synonyms: 'nutrient, solid food' },

  { nl: 'zacht', en: 'soft', level: 'A1', meaning: 'Not hard', example: 'Het kussen is **zacht**. — The pillow is soft.' },

  { nl: 'meestal', en: 'usually', level: 'A1', meaning: 'Most of the time', example: 'Ik kom **meestal**. — I usually come.', synonyms: 'commonly, normally, ordinarily, unremarkably' },

  { nl: 'straat', en: 'street', level: 'A1', meaning: 'Road', example: 'De **straat** is druk. — The street is busy.' },

  { nl: 'persoon', en: 'person', level: 'A1', meaning: 'Human', example: 'Die **persoon** loopt. — That person walks.', synonyms: 'individual, mortal, somebody, someone' },

  { nl: 'nauwelijks', en: 'hardly', level: 'A2', meaning: 'Almost not', example: 'Ik zie hem **nauwelijks**. — I hardly see him.', synonyms: 'barely, just, scarce, scarcely' },

  { nl: 'hetzelfde', en: 'the same', level: 'A1', meaning: 'Identical', example: 'We doen **hetzelfde**. — We do the same.' },

  { nl: 'macht', en: 'power', level: 'A1', meaning: 'Control', example: 'Hij heeft **macht**. — He has power.', synonyms: 'powerfulness' },

  { nl: 'schouder', en: 'shoulder', level: 'A1', meaning: 'Body part', example: 'Mijn **schouder** doet pijn. — My shoulder hurts.' },

  { nl: 'klinken', en: 'to sound', level: 'A1', meaning: 'Make a sound', example: 'Het **klinkt** goed. — It sounds good.', synonyms: 'auditory sensation' },



  { nl: 'luisteren', en: 'to listen', level: 'A1', meaning: 'Pay attention to sound', example: 'Ik **luister** naar muziek. — I listen to music.', synonyms: 'hear, take heed' },

  { nl: 'tenslotte', en: 'finally', level: 'A2', meaning: 'At last', example: '**Tenslotte** is het klaar. — Finally it is ready.', synonyms: 'at last, eventually, ultimately' },

  { nl: 'menselijk', en: 'human', level: 'A1', meaning: 'Related to humans', example: 'Een **menselijk** probleem. — A human problem.', synonyms: 'homo, human being, man' },

  { nl: 'invloed', en: 'influence', level: 'A1', meaning: 'Effect', example: 'Dat heeft **invloed**. — That has influence.' },

  { nl: 'hart', en: 'heart', level: 'A1', meaning: 'Organ', example: 'Mijn **hart** klopt. — My heart beats.', synonyms: 'bosom, pump, ticker' },

  { nl: 'via', en: 'via', level: 'A1', meaning: 'By way of', example: 'Ik ga **via** Utrecht. — I go via Utrecht.' },

  { nl: 'zoon', en: 'son', level: 'A1', meaning: 'Male child', example: 'Mijn **zoon** speelt. — My son plays.', synonyms: 'boy' },

  { nl: 'gang', en: 'hallway / pace / course', level: 'A1', meaning: 'Corridor', example: 'De **gang** is lang. — The hallway is long.', synonyms: 'class, footstep, gait, hall' },

  { nl: 'been', en: 'leg / bone', level: 'A1', meaning: 'Body part', example: 'Mijn **been** doet pijn. — My leg hurts.', synonyms: 'osseous tissue' },

  { nl: 'slecht', en: 'bad', level: 'A1', meaning: 'Not good', example: 'Dat is **slecht**. — That is bad.', synonyms: 'badness' },



  { nl: 'immers', en: 'after all', level: 'A2', meaning: 'Explanation word', example: 'Het klopt, **immers**. — That is correct, after all.' },

  { nl: 'bezig', en: 'busy', level: 'A1', meaning: 'Occupied', example: 'Ik ben **bezig**. — I am busy.', synonyms: 'occupy' },

  { nl: 'arm', en: 'arm / poor', level: 'A1', meaning: 'Body part', example: 'Mijn **arm** doet pijn. — My arm hurts.', synonyms: 'branch, hapless, limb, miserable' },

  { nl: 'tien', en: 'ten', level: 'A1', meaning: 'Number', example: 'Ik heb **tien** euro. — I have ten euros.', synonyms: 'decade, ten-spot, tenner' },

  { nl: 'wet', en: 'law', level: 'A1', meaning: 'Rule', example: 'De **wet** geldt. — The law applies.', synonyms: 'jurisprudence' },

  { nl: 'los', en: 'loose', level: 'A1', meaning: 'Not fixed', example: 'Het zit **los**. — It is loose.', synonyms: 'free, let loose, liberate, release' },

  { nl: 'bang', en: 'afraid', level: 'A1', meaning: 'Fearful', example: 'Ik ben **bang**. — I am afraid.' },

  { nl: 'verband', en: 'connection', level: 'A1', meaning: 'Relation', example: 'Er is een **verband**. — There is a connection.', synonyms: 'connectedness, connexion, link' },

  { nl: 'den', en: 'the (archaic)', level: 'B1', meaning: 'Old article', example: 'In **den** beginne. — In the beginning.' },

  { nl: 'heten', en: 'to be called', level: 'A1', meaning: 'Name verb', example: 'Ik **heet** Jan. — My name is Jan.' },



  { nl: 'dier', en: 'animal', level: 'A1', meaning: 'Living creature', example: 'Het **dier** loopt. — The animal walks.', synonyms: 'animate being, beast, brute, carnal' },

  { nl: 'beschouwen', en: 'to consider', level: 'A2', meaning: 'To view as', example: 'Ik **beschouw** het als goed. — I consider it good.', synonyms: 'reckon, regard, see, study' },

  { nl: 'herinneren', en: 'to remember', level: 'A1', meaning: 'Recall', example: 'Ik **herinner** het me. — I remember it.', synonyms: 'call back, call up, recall, recollect' },

  { nl: 'lucht', en: 'air / sky', level: 'A1', meaning: 'Atmosphere', example: 'De **lucht** is fris. — The air is fresh.', synonyms: 'flip, pitch, toss' },

  { nl: 'bieden', en: 'to offer', level: 'A1', meaning: 'To give opportunity', example: 'Ze **bieden** hulp. — They offer help.', synonyms: 'offering' },

  { nl: 'vijf', en: 'five', level: 'A1', meaning: 'Number', example: 'Ik heb **vijf** appels. — I have five apples.', synonyms: 'basketball team, cinque, fin, fivesome' },

  { nl: 'rug', en: 'back', level: 'A1', meaning: 'Body part', example: 'Mijn **rug** doet pijn. — My back hurts.', synonyms: 'dorsum, rear' },

  { nl: 'plotseling', en: 'suddenly', level: 'A1', meaning: 'Unexpectedly', example: 'Hij stopt **plotseling**. — He stops suddenly.', synonyms: 'abruptly, dead, short' },

  { nl: 'zorgen', en: 'to care/worry', level: 'A1', meaning: 'To take care or worry', example: 'Ik **zorg** voor jou. — I take care of you.', synonyms: 'aid, attention, caution, concern' },

  { nl: 'gezien', en: 'seen', level: 'A1', meaning: 'Past of see', example: 'Ik heb hem **gezien**. — I have seen him.', synonyms: 'realise, realize, see, understand' },



  { nl: 'inderdaad', en: 'indeed', level: 'A1', meaning: 'Confirmation', example: '**Inderdaad**, dat klopt. — Indeed, that is correct.' },

  { nl: 'maatschappelijk', en: 'social', level: 'A2', meaning: 'Societal', example: 'Een **maatschappelijk** probleem. — A social problem.', synonyms: 'mixer, sociable, societal' },

  { nl: 'kiezen', en: 'to choose', level: 'A1', meaning: 'To select', example: 'Ik **kies** dit. — I choose this.', synonyms: 'opt, pick out, prefer, select' },

  { nl: 'kennis', en: 'knowledge', level: 'A1', meaning: 'Understanding', example: 'Hij heeft veel **kennis**. — He has a lot of knowledge.', synonyms: 'cognition, noesis' },

  { nl: 'gemakkelijk', en: 'easy', level: 'A1', meaning: 'Not difficult', example: 'Dat is **gemakkelijk**. — That is easy.', synonyms: 'easygoing, leisurely' },

  { nl: 'angst', en: 'fear', level: 'A1', meaning: 'Emotion', example: 'Ik voel **angst**. — I feel fear.', synonyms: 'care, concern, fearfulness, fright' },

  { nl: 'behoren', en: 'to belong', level: 'A2', meaning: 'To be part of', example: 'Dit **behoort** tot mij. — This belongs to me.' },

  { nl: 'laag', en: 'low', level: 'A1', meaning: 'Small height', example: 'De tafel is **laag**. — The table is low.', synonyms: 'depression' },

  { nl: 'donker', en: 'dark', level: 'A1', meaning: 'No light', example: 'Het is **donker**. — It is dark.', synonyms: 'darkness, iniquity, wickedness' },

  { nl: 'verschil', en: 'difference', level: 'A1', meaning: 'Not the same', example: 'Er is een **verschil**. — There is a difference.', synonyms: 'departure, deviation, divergence' },



  { nl: 'gelukkig', en: 'happy/fortunately', level: 'A1', meaning: 'Feeling or luck', example: 'Ik ben **gelukkig**. — I am happy.', synonyms: 'felicitous, fortuitously, luckily' },

  { nl: 'verschijnen', en: 'to appear', level: 'A1', meaning: 'To become visible', example: 'Hij **verschijnt**. — He appears.', synonyms: 'look, seem' },

  { nl: 'raam', en: 'window', level: 'A1', meaning: 'Glass opening', example: 'Het **raam** is open. — The window is open.' },

  { nl: 'minuut', en: 'minute', level: 'A1', meaning: 'Time unit', example: 'Wacht een **minuut**. — Wait a minute.', synonyms: 'bit, min, moment, second' },

  { nl: 'betekenis', en: 'meaning', level: 'A1', meaning: 'Definition', example: 'De **betekenis** is duidelijk. — The meaning is clear.', synonyms: 'import, significance, signification, substance' },

  { nl: 'partij', en: 'party/group', level: 'A1', meaning: 'Organization or group', example: 'De **partij** wint. — The party wins.', synonyms: 'chemical group, grouping, political party, radical' },

  { nl: 'liefde', en: 'love', level: 'A1', meaning: 'Emotion', example: 'Ik voel **liefde**. — I feel love.', synonyms: 'passion' },

  { nl: 'ervaring', en: 'experience', level: 'A1', meaning: 'Knowledge from doing', example: 'Ik heb veel **ervaring**. — I have a lot of experience.' },

  { nl: 'lijden', en: 'to suffer', level: 'A1', meaning: 'To feel pain', example: 'Hij **lijdt**. — He suffers.', synonyms: 'endure, get, have, sustain' },

  { nl: 'sommige', en: 'some', level: 'A1', meaning: 'A few', example: '**Sommige** mensen komen. — Some people come.' },



  { nl: 'pakken', en: 'to take/grab', level: 'A1', meaning: 'To seize or pick up', example: 'Ik **pak** de tas. — I take the bag.', synonyms: 'catch, issue, payoff, proceeds' },

  { nl: 'direct', en: 'direct/immediately', level: 'A1', meaning: 'Without delay', example: 'Ik ga **direct** weg. — I leave immediately.', synonyms: 'aim, at once, directly, forthwith' },

  { nl: 'hond', en: 'dog', level: 'A1', meaning: 'Animal', example: 'De **hond** blaft. — The dog barks.', synonyms: 'domestic dog, frump' },

  { nl: 'voeren', en: 'to feed', level: 'A1', meaning: 'Give food to', example: 'Ik **voer** de kat. — I feed the cat.', synonyms: 'provender' },

  { nl: 'relatie', en: 'relationship', level: 'A1', meaning: 'Connection between people', example: 'Hun **relatie** is goed. — Their relationship is good.', synonyms: 'human relationship' },

  { nl: 'begrip', en: 'understanding/concept', level: 'A1', meaning: 'Comprehension', example: 'Ik heb **begrip**. — I understand.', synonyms: 'agreement, apprehension, conception, construct' },

  { nl: 'mevrouw', en: 'madam', level: 'A1', meaning: 'Polite address', example: 'Goedemiddag, **mevrouw**. — Good afternoon, madam.', synonyms: 'brothel keeper, dame, gentlewoman, lady' },

  { nl: 'glimlachen', en: 'to smile', level: 'A1', meaning: 'Facial expression', example: 'Ze **glimlacht**. — She smiles.', synonyms: 'grin, grinning, smiling' },

  { nl: 'volgend', en: 'next', level: 'A1', meaning: 'Coming after', example: 'De **volgende** dag. — The next day.', synonyms: 'adjacent, following' },

  { nl: 'systeem', en: 'system', level: 'A1', meaning: 'Organized structure', example: 'Het **systeem** werkt. — The system works.', synonyms: 'scheme' },



  { nl: 'stil', en: 'quiet / silent / still', level: 'A1', meaning: 'No sound', example: 'Het is **stil**. — It is quiet.', synonyms: 'hush, lull, mum, soundless' },

  { nl: 'knikken', en: 'to nod', level: 'A1', meaning: 'Move head up and down', example: 'Hij **knikt**. — He nods.' },

  { nl: 'doel', en: 'goal', level: 'A1', meaning: 'Aim', example: 'Het **doel** is duidelijk. — The goal is clear.', synonyms: 'destination, end, finish' },

  { nl: 'dienst', en: 'service', level: 'A1', meaning: 'Help or work', example: 'De **dienst** begint. — The service begins.' },

  { nl: 'kopen', en: 'to buy', level: 'A1', meaning: 'Purchase', example: 'Ik **koop** brood. — I buy bread.', synonyms: 'bargain, purchase, steal' },

  { nl: 'proces', en: 'process', level: 'A1', meaning: 'Series of steps', example: 'Het **proces** duurt lang. — The process takes a long time.', synonyms: 'cognitive operation, cognitive process, mental process, operation' },

  { nl: 'volledig', en: 'complete', level: 'A1', meaning: 'Whole', example: 'Het is **volledig** klaar. — It is completely ready.', synonyms: 'finish' },

  { nl: 'verschillend', en: 'different', level: 'A1', meaning: 'Not the same', example: 'Ze zijn **verschillend**. — They are different.' },

  { nl: 'onderwijs', en: 'education', level: 'A1', meaning: 'Learning system', example: 'Het **onderwijs** verandert. — Education is changing.', synonyms: 'didactics, educational activity, instruction, pedagogy' },

  { nl: 'verliezen', en: 'to lose', level: 'A1', meaning: 'Not win or misplace', example: 'Ik **verlies** het spel. — I lose the game.' },



  { nl: 'zwart', en: 'black', level: 'A1', meaning: 'Color', example: 'De jas is **zwart**. — The coat is black.', synonyms: 'blackness, inkiness, lightlessness, pitch blackness' },

  { nl: 'menen', en: 'to think/mean', level: 'A1', meaning: 'To believe', example: 'Ik **meen** het. — I mean it.', synonyms: 'believe, conceive, consider, intend' },

  { nl: 'nadat', en: 'after', level: 'A1', meaning: 'Time conjunction', example: '**Nadat** ik eet, werk ik. — After I eat, I work.', synonyms: 'afterward, afterwards, later, later on' },

  { nl: 'behoefte', en: 'need', level: 'A1', meaning: 'Requirement', example: 'Ik heb **behoefte** aan rust. — I need rest.', synonyms: 'demand, want' },

  { nl: 'rustig', en: 'calm', level: 'A1', meaning: 'Not busy', example: 'Het is **rustig** hier. — It is calm here.', synonyms: 'calm air, calmness, composure, equanimity' },

  { nl: 'eenmaal', en: 'once', level: 'A1', meaning: 'One time', example: 'Ik was daar **eenmaal**. — I was there once.', synonyms: 'one time' },

  { nl: 'gedaan', en: 'done', level: 'A1', meaning: 'Finished', example: 'Het is **gedaan**. — It is done.', synonyms: 'execute, make, perform' },

  { nl: 'derde', en: 'third', level: 'A1', meaning: 'Number order', example: 'De **derde** dag. — The third day.', synonyms: 'one-third, third base, tierce' },

  { nl: 'drinken', en: 'to drink', level: 'A1', meaning: 'Consume liquid', example: 'Ik **drink** water. — I drink water.', synonyms: 'boozing, crapulence, drinking, drunkenness' },

  { nl: 'contact', en: 'contact', level: 'A1', meaning: 'Connection', example: 'We hebben **contact**. — We are in contact.', synonyms: 'physical contact' },



  { nl: 'eenvoudig', en: 'simple', level: 'A1', meaning: 'Not complex', example: 'Het is **eenvoudig**. — It is simple.', synonyms: 'simpleton' },

  { nl: 'orde', en: 'order', level: 'A1', meaning: 'Arrangement', example: 'Alles is in **orde**. — Everything is in order.' },

  { nl: 'functie', en: 'function', level: 'A1', meaning: 'Role', example: 'De **functie** is duidelijk. — The function is clear.', synonyms: 'map, mapping, mathematical function, purpose' },

  { nl: 'dik', en: 'thick / fat', level: 'A1', meaning: 'Wide', example: 'Het boek is **dik**. — The book is thick.', synonyms: 'adipose tissue, fatty tissue, midst' },

  { nl: 'ongeveer', en: 'approximately', level: 'A1', meaning: 'About', example: 'Het duurt **ongeveer** een uur. — It takes about an hour.', synonyms: 'about, around, close to, just about' },

  { nl: 'waarde', en: 'value', level: 'A1', meaning: 'Worth', example: 'De **waarde** stijgt. — The value rises.' },

  { nl: 'warm', en: 'warm', level: 'A1', meaning: 'Temperature', example: 'Het is **warm**. — It is warm.', synonyms: 'warm up' },

  { nl: 'paard', en: 'horse', level: 'A1', meaning: 'Animal', example: 'Het **paard** loopt. — The horse walks.', synonyms: 'gymnastic horse' },

  { nl: 'ergens', en: 'somewhere / somehow', level: 'A1', meaning: 'Unknown place', example: 'Ik ga **ergens** heen. — I go somewhere.', synonyms: 'someplace, someway, someways' },



  { nl: 'vinger', en: 'finger', level: 'A1', meaning: 'Body part', example: 'Mijn **vinger** doet pijn. — My finger hurts.', synonyms: 'digit, fingerbreadth' },

  { nl: 'vreemd', en: 'strange', level: 'A1', meaning: 'Unusual', example: 'Dat is **vreemd**. — That is strange.', synonyms: 'unknown, unusual' },

  { nl: 'schieten', en: 'to shoot', level: 'A1', meaning: 'To fire or move fast', example: 'Hij **schiet** snel. — He shoots fast.' },

  { nl: 'taal', en: 'language', level: 'A1', meaning: 'Communication system', example: 'De **taal** is moeilijk. — The language is difficult.', synonyms: 'linguistic communication, oral communication, speech, speech communication' },

  { nl: 'ontdekken', en: 'to discover', level: 'A1', meaning: 'Find something new', example: 'We **ontdekken** iets. — We discover something.', synonyms: 'detect, find, find out, get wind' },

  { nl: 'gesprek', en: 'conversation', level: 'A1', meaning: 'Talk', example: 'We hebben een **gesprek**. — We have a **conversation**.' },

  { nl: 'mate', en: 'degree', level: 'A2', meaning: 'Extent', example: 'In zekere **mate** klopt het. — In a certain **degree** it is correct.', synonyms: 'grade, level, point, stage' },

  { nl: 'volk', en: 'people/nation', level: 'A1', meaning: 'Population', example: 'Het **volk** spreekt. — The **people** speak.', synonyms: 'body politic, citizenry, commonwealth, country' },

  { nl: 'kleur', en: 'color', level: 'A1', meaning: 'Visual property', example: 'De **kleur** is rood. — The **color** is red.', synonyms: 'coloring, colour, colouring, vividness' },

  { nl: 'indruk', en: 'impression', level: 'A1', meaning: 'Feeling about something', example: 'Goede **indruk**. — Good **impression**.', synonyms: 'belief, effect, feeling, notion' },



  { nl: 'drukken', en: 'to press/print', level: 'A1', meaning: 'Apply pressure', example: 'Ik **druk** op de knop. — I **press** the button.', synonyms: 'imperativeness, insistence, insistency, pressure' },

  { nl: 'neer', en: 'down', level: 'A1', meaning: 'Direction', example: 'Hij valt **neer**. — He falls **down**.', synonyms: 'down feather' },

  { nl: 'sterven', en: 'to die', level: 'A1', meaning: 'End life', example: 'De plant **sterft**. — The plant **dies**.', synonyms: 'dice' },

  { nl: 'pijn', en: 'pain', level: 'A1', meaning: 'Physical suffering', example: 'Ik heb **pijn**. — I have **pain**.', synonyms: 'hurting, painfulness' },

  { nl: 'aarde', en: 'earth', level: 'A1', meaning: 'Planet or soil', example: 'De **aarde** draait. — The **earth** rotates.', synonyms: 'globe, ground, world' },

  { nl: 'glas', en: 'glass', level: 'A1', meaning: 'Material or cup', example: 'Een **glas** water. — A **glass** of water.', synonyms: 'drinking glass' },

  { nl: 'artikel', en: 'article', level: 'A1', meaning: 'Written piece', example: 'Ik lees een **artikel**. — I read an **article**.' },

  { nl: 'onmiddellijk', en: 'immediately', level: 'A1', meaning: 'Without delay', example: 'Kom **onmiddellijk**! — Come **immediately**!', synonyms: 'at once, directly, forthwith, instantly' },

  { nl: 'werkelijkheid', en: 'reality', level: 'A1', meaning: 'Real world', example: 'De **werkelijkheid** is anders. — **Reality** is different.', synonyms: 'realism, realness, world' },

  { nl: 'eind', en: 'end', level: 'A1', meaning: 'Conclusion', example: 'Het **eind** komt. — The **end** comes.', synonyms: 'ending, terminal' },



  { nl: 'persoonlijk', en: 'personal', level: 'A1', meaning: 'Private', example: 'Een **persoonlijk** gesprek. — A **personal** conversation.' },

  { nl: 'stoel', en: 'chair', level: 'A1', meaning: 'Furniture', example: 'De **stoel** staat daar. — The **chair** is standing there.', synonyms: 'professorship' },

  { nl: 'ruimte', en: 'space', level: 'A1', meaning: 'Area', example: 'Er is veel **ruimte**. — There is a lot of **space**.', synonyms: 'infinite' },

  { nl: 'taak', en: 'task', level: 'A1', meaning: 'Job', example: 'Dit is mijn **taak**. — This is my **task**.', synonyms: 'chore, job, labor, project' },

  { nl: 'voorkomen', en: 'to prevent/occur', level: 'A1', meaning: 'Stop or happen', example: 'We **voorkomen** fouten. — We **prevent** mistakes.', synonyms: 'come, come about, fall out, forbid' },

  { nl: 'moeite', en: 'effort/trouble', level: 'A1', meaning: 'Difficulty', example: 'Het kost **moeite**. — It takes **effort**.', synonyms: 'attempt, bother, elbow grease, endeavor' },

  { nl: 'rood', en: 'red', level: 'A1', meaning: 'Color', example: 'De appel is **rood**. — The apple is **red**.', synonyms: 'redness' },

  { nl: 'verandering', en: 'change', level: 'A1', meaning: 'Alteration', example: 'Er is **verandering**. — There is **change**.', synonyms: 'alteration, modification' },

  { nl: 'muur', en: 'wall', level: 'A1', meaning: 'Structure', example: 'De **muur** is wit. — The wall is white.' },

  { nl: 'passen', en: 'to fit/suit', level: 'A1', meaning: 'Be suitable', example: 'De jas **past**. — The jacket **fits**.', synonyms: 'case, causa, cause, conniption' },



  { nl: 'geluid', en: 'sound', level: 'A1', meaning: 'Noise', example: 'Ik hoor een **geluid**. — I hear a **sound**.', synonyms: 'auditory sensation' },

  { nl: 'z’n', en: 'his (informal)', level: 'A1', meaning: 'Possessive pronoun', example: '**Z’n** boek ligt daar. — His book is lying there.' },

  { nl: 'bewegen', en: 'to move', level: 'A1', meaning: 'Change position', example: 'Hij **beweegt**. — He **moves**.', synonyms: 'relocation' },

  { nl: 'duren', en: 'to last', level: 'A1', meaning: 'Take time', example: 'Het **duurt** lang. — It **lasts** long.', synonyms: 'close, conclusion, finale, finis' },

  { nl: 'dokter', en: 'doctor', level: 'A1', meaning: 'Medical professional', example: 'De **dokter** helpt. — The doctor helps.', synonyms: 'doc, medico, physician' },

  { nl: 'betrekking', en: 'relation', level: 'A2', meaning: 'Connection', example: 'In **betrekking** tot dit. — In **relation** to this.', synonyms: 'carnal knowledge, coition, coitus, congress' },

  { nl: 'gedrag', en: 'behavior', level: 'A1', meaning: 'Actions', example: 'Zijn **gedrag** is goed. — His **behavior** is good.', synonyms: 'behaviour, conduct, doings' },

  { nl: 'zee', en: 'sea', level: 'A1', meaning: 'Large water body', example: 'De **zee** is mooi. — The sea is beautiful.', synonyms: 'ocean' },

  { nl: 'hoor', en: 'hear (informal)', level: 'A1', meaning: 'Emphasis word', example: 'Ja **hoor**! — Yes **indeed**!' },

  { nl: 'indien', en: 'if (formal)', level: 'A2', meaning: 'Condition', example: '**Indien** nodig. — If needed.' },



  { nl: 'vergeten', en: 'to forget', level: 'A1', meaning: 'Not remember', example: 'Ik **vergeet** het. — I **forget** it.', synonyms: 'blank out, block, bury' },

  { nl: 'bewust', en: 'aware', level: 'A1', meaning: 'Knowing', example: 'Ik ben me **bewust**. — I am **aware**.', synonyms: 'cognisant, cognizant, mindful' },

  { nl: 'raad', en: 'advice', level: 'A1', meaning: 'Suggestion', example: 'Goede **raad**. — Good **advice**.' },

  { nl: 'namelijk', en: 'namely', level: 'A1', meaning: 'Explanation word', example: 'Hij komt, **namelijk** morgen. — He is coming, **namely** tomorrow.', synonyms: 'to wit, videlicet, viz.' },

  { nl: 'regel', en: 'rule', level: 'A1', meaning: 'Guideline', example: 'Dat is de **regel**. — That is the **rule**.', synonyms: 'convention, formula, normal, pattern' },

  { nl: 'groeien', en: 'to grow', level: 'A1', meaning: 'Increase', example: 'De plant **groeit**. — The plant **grows**.', synonyms: 'turn' },

  { nl: 'voordat', en: 'before', level: 'A1', meaning: 'Earlier than', example: '**Voordat** ik ga, eet ik. — Before I go, I eat.', synonyms: 'ahead, earlier, in front' },

  { nl: 'min', en: 'minus', level: 'A1', meaning: 'Subtraction', example: 'Tien **min** vijf. — Ten **minus** five.', synonyms: 'subtraction' },

  { nl: 'boom', en: 'tree', level: 'A1', meaning: 'Plant', example: 'De **boom** is hoog. — The tree is tall.', synonyms: 'tree diagram' },

  { nl: 'dorp', en: 'village', level: 'A1', meaning: 'Small town', example: 'Ik woon in een **dorp**. — I live in a **village**.', synonyms: 'hamlet, settlement, small town' },



  { nl: 'gelijk', en: 'equal/right', level: 'A1', meaning: 'Same or correct', example: 'Je hebt **gelijk**. — You are **right**.', synonyms: 'compeer, match, peer' },

  { nl: 'beschrijven', en: 'to describe', level: 'A1', meaning: 'Explain details', example: 'Ik **beschrijf** het. — I **describe** it.', synonyms: 'account, depict, draw, report' },

  { nl: 'geschiedenis', en: 'history', level: 'A1', meaning: 'Past events', example: 'De **geschiedenis** is interessant. — **History** is interesting.', synonyms: 'account, chronicle, story' },

  { nl: 'economisch', en: 'economic', level: 'A2', meaning: 'Related to economy', example: 'De **economische** groei. — The economic growth.', synonyms: 'economical' },

  { nl: 'vanaf', en: 'from', level: 'A1', meaning: 'Starting point', example: '**Vanaf** morgen werk ik. — From tomorrow I work.' },

  { nl: 'koud', en: 'cold', level: 'A1', meaning: 'Low temperature', example: 'Het is **koud**. — It is cold.', synonyms: 'coldness, common cold, frigidity, frigidness' },

  { nl: 'Leiden', en: 'Leiden', level: 'A1', meaning: 'City in Netherlands', example: 'Ik ga naar **Leiden**. — I am going to Leiden.' },

  { nl: 'kop', en: 'head/cup', level: 'A1', meaning: 'Top or mug', example: 'Een **kop** koffie. — A cup of coffee.', synonyms: 'caput, cupful' },

  { nl: 'voldoende', en: 'enough/sufficient', level: 'A1', meaning: 'Enough quantity', example: 'Dat is **voldoende**. — That is enough.', synonyms: 'adequate, decent, sufficiency' },

  { nl: 'stand', en: 'position/state', level: 'A1', meaning: 'Condition', example: 'De **stand** is goed. — The position is good.', synonyms: 'military position, place, province' },



  { nl: 'overal', en: 'everywhere', level: 'A1', meaning: 'In all places', example: 'Ik zie het **overal**. — I see it everywhere.', synonyms: 'all over, everyplace' },

  { nl: 'ernstig', en: 'serious', level: 'A1', meaning: 'Severe or important', example: 'Het is een **ernstig** probleem. — It is a serious problem.' },

  { nl: 'familie', en: 'family', level: 'A1', meaning: 'Relatives', example: 'Mijn **familie** komt. — My family is coming.', synonyms: 'family unit, home, house, household' },

  { nl: 'bekijken', en: 'to look at', level: 'A1', meaning: 'To watch or examine', example: 'Ik **bekijk** de foto. — I **look at** the photo.' },

  { nl: 'nogal', en: 'quite/rather', level: 'A1', meaning: 'Fairly', example: 'Het is **nogal** druk. — It is **quite** busy.', synonyms: 'instead, kind of, kinda, sort of' },

  { nl: 'hoofdstuk', en: 'chapter', level: 'A1', meaning: 'Part of a book', example: 'Ik lees een **hoofdstuk**. — I read a chapter.' },

  { nl: 'periode', en: 'period', level: 'A1', meaning: 'Time span', example: 'Een lange **periode**. — A long period.', synonyms: 'time period' },

  { nl: 'overigens', en: 'by the way', level: 'A2', meaning: 'Additional remark', example: '**Overigens**, hij komt niet. — By the way, he is not coming.' },

  { nl: 'sinds', en: 'since', level: 'A1', meaning: 'From a time', example: '**Sinds** gisteren werk ik. — I have been working since yesterday.' },

  { nl: 'erop', en: 'on it', level: 'A1', meaning: 'On something', example: 'Het ligt **erop**. — It is lying on it.' },



  { nl: 'aard', en: 'nature/type', level: 'A1', meaning: 'Kind or character', example: 'De **aard** van het probleem. — The nature of the problem.', synonyms: 'case, character, eccentric' },

  { nl: 'allerlei', en: 'all kinds of', level: 'A1', meaning: 'Various types', example: '**Allerlei** dingen. — All kinds of things.' },

  { nl: 'resultaat', en: 'result', level: 'A1', meaning: 'Outcome', example: 'Het **resultaat** is goed. — The result is good.', synonyms: 'answer, consequence, effect, event' },

  { nl: 'keren', en: 'times (occurrences)', level: 'A1', meaning: 'Number of times', example: 'Drie **keren** geprobeerd. — Tried three times.' },

  { nl: 'omstandigheid', en: 'circumstance', level: 'A2', meaning: 'Condition', example: 'Onder deze **omstandigheden**. — Under these circumstances.', synonyms: 'context, setting' },

  { nl: 'normaal', en: 'normal', level: 'A1', meaning: 'Usual', example: 'Dat is **normaal**. — That is normal.', synonyms: 'convention, formula, pattern, rule' },

  { nl: 'tonen', en: 'to show', level: 'A1', meaning: 'To display', example: 'Hij **toont** het. — He shows it.', synonyms: 'display' },

  { nl: 'noch', en: 'nor', level: 'A2', meaning: 'Neither...nor', example: 'Noch dit noch dat. — Neither this nor that.' },

  { nl: 'breed', en: 'wide', level: 'A1', meaning: 'Large width', example: 'De straat is **breed**. — The street is wide.', synonyms: 'across-the-board, all-embracing, all-encompassing, all-inclusive' },

  { nl: 'trouwens', en: 'by the way', level: 'A1', meaning: 'Extra remark', example: '**Trouwens**, ik ga mee. — By the way, I am coming along.' },



  { nl: 'rond', en: 'around', level: 'A1', meaning: 'Circular or surrounding', example: 'We lopen **rond**. — We walk around.', synonyms: 'about' },

  { nl: 'toekomst', en: 'future', level: 'A1', meaning: 'Time ahead', example: 'De **toekomst** is onzeker. — The future is uncertain.', synonyms: 'future tense, futurity, hereafter' },

  { nl: 'Heer', en: 'Lord', level: 'A2', meaning: 'Formal or religious title', example: 'De **Heer** is groot. — The Lord is great.', synonyms: 'master, overlord' },

  { nl: 'opzicht', en: 'respect/aspect', level: 'A2', meaning: 'Point of view', example: 'In dit **opzicht**. — In this respect.', synonyms: 'esteem, facet, regard' },

  { nl: 'organisatie', en: 'organization', level: 'A1', meaning: 'Structured group', example: 'De **organisatie** groeit. — The organization is growing.', synonyms: 'arrangement, organisation, system' },

  { nl: 'speciaal', en: 'special', level: 'A1', meaning: 'Particular', example: 'Een **speciaal** cadeau. — A special gift.' },

  { nl: 'bezitten', en: 'to own', level: 'A1', meaning: 'To have property', example: 'Hij **bezit** een huis. — He owns a house.' },

  { nl: 'patiënt', en: 'patient', level: 'A1', meaning: 'Person receiving care', example: 'De **patiënt** wacht. — The patient waits.', synonyms: 'affected role, patient role' },

  { nl: 'broer', en: 'brother', level: 'A1', meaning: 'Male sibling', example: 'Mijn **broer** belt. — My brother calls.', synonyms: 'blood brother' },

  { nl: 'opeens', en: 'suddenly', level: 'A1', meaning: 'Unexpectedly', example: 'Hij stopt **opeens**. — He stops suddenly.', synonyms: 'abruptly, dead, short' },



  { nl: 'omgeving', en: 'environment', level: 'A1', meaning: 'Surroundings', example: 'De **omgeving** is mooi. — The environment is beautiful.', synonyms: 'environs, surround, surroundings' },

  { nl: 'opvatting', en: 'opinion', level: 'A1', meaning: 'Viewpoint', example: 'Mijn **opvatting** is anders. — My opinion is different.', synonyms: 'persuasion, sentiment, thought, view' },

  { nl: 'leveren', en: 'to deliver', level: 'A1', meaning: 'To provide', example: 'Ze **leveren** goederen. — They deliver goods.', synonyms: 'present' },

  { nl: 'hopen', en: 'to hope', level: 'A1', meaning: 'Wish for something', example: 'Ik **hoop** op zon. — I hope for sunshine.' },

  { nl: 'totaal', en: 'total', level: 'A1', meaning: 'Whole amount', example: 'Het **totaal** klopt. — The total is correct.', synonyms: 'aggregate, amount, sum, totality' },

  { nl: 'jongens', en: 'boys', level: 'A1', meaning: 'Male children', example: 'De **jongens** spelen. — The boys play.', synonyms: 'boy, male child' },

  { nl: 'zes', en: 'six', level: 'A1', meaning: 'Number', example: 'Ik heb **zes** boeken. — I have six books.', synonyms: 'hexad, sestet, sextet, sextuplet' },

  { nl: 'overheid', en: 'government', level: 'A1', meaning: 'Public authority', example: 'De **overheid** beslist. — The government decides.', synonyms: 'administration, authorities, governance, governing' },

  { nl: 'bevinden', en: 'to be located', level: 'A1', meaning: 'To be situated', example: 'Het **bevindt** zich hier. — It is located here.' },

  { nl: 'afstand', en: 'distance', level: 'A1', meaning: 'Space between', example: 'De **afstand** is groot. — The distance is large.' },



  { nl: 'vervolgens', en: 'then/afterwards', level: 'A1', meaning: 'Next step', example: 'En **vervolgens** gaan we. — And then we go.', synonyms: 'after, afterward, later, later on' },

  { nl: 'wetenschap', en: 'science', level: 'A1', meaning: 'Study of knowledge', example: 'De **wetenschap** groeit. — Science is advancing.', synonyms: 'scientific discipline, skill' },

  { nl: 'vertrekken', en: 'to leave/depart', level: 'A1', meaning: 'To go away', example: 'We **vertrekken** morgen. — We leave tomorrow.', synonyms: 'deviate, diverge, go away, vary' },

  { nl: 'ondanks', en: 'despite', level: 'A1', meaning: 'In spite of', example: '**Ondanks** regen ga ik. — Despite the rain, I go.', synonyms: 'contempt, disdain, scorn' },

  { nl: 'durven', en: 'to dare', level: 'A1', meaning: 'Have courage', example: 'Ik **durf** het. — I dare it.', synonyms: 'daring, make bold, presume' },

  { nl: 'betalen', en: 'to pay', level: 'A1', meaning: 'Give money', example: 'Ik **betaal**. — I pay.', synonyms: 'earnings, remuneration, salary, wage' },

  { nl: 'eindelijk', en: 'finally', level: 'A1', meaning: 'At last', example: '**Eindelijk** klaar. — Finally ready.', synonyms: 'at last, eventually, ultimately' },

  { nl: 'vrijheid', en: 'freedom', level: 'A1', meaning: 'Liberty', example: 'Ik wil **vrijheid**. — I want freedom.', synonyms: 'exemption' },

  { nl: 'leeg', en: 'empty', level: 'A1', meaning: 'Nothing inside', example: 'De doos is **leeg**. — The box is empty.' },

  { nl: 'blauw', en: 'blue', level: 'A1', meaning: 'Color', example: 'De lucht is **blauw**. — The sky is blue.', synonyms: 'blueness' },



  { nl: 'lief', en: 'sweet/kind', level: 'A1', meaning: 'Nice behavior', example: 'Ze is **lief**. — She is sweet.', synonyms: 'afters, dessert, form, sort' },

  { nl: 'klaar', en: 'ready / done / finished', level: 'A1', meaning: 'Finished/prepared', example: 'Ik ben **klaar**. — I am ready.', synonyms: 'complete, cook, end up, execute' },

  { nl: 'ontwikkelen', en: 'to develop', level: 'A1', meaning: 'To grow or improve', example: 'We **ontwikkelen** plannen. — We develop plans.', synonyms: 'evolve, germinate' },

  { nl: 'stap', en: 'step', level: 'A1', meaning: 'Movement forward', example: 'Een **stap** vooruit. — A step forward.', synonyms: 'footstep, measure, pace, stride' },

  { nl: 'schudden', en: 'to shake', level: 'A1', meaning: 'Move quickly', example: 'Hij **schudt** zijn hoofd. — He shakes his head.', synonyms: 'milk shake, milkshake, shingle' },

  { nl: 'omhoog', en: 'upwards', level: 'A1', meaning: 'Direction up', example: 'Kijk **omhoog**. — Look upwards.', synonyms: 'upward, upwardly' },

  { nl: 'karakter', en: 'character', level: 'A1', meaning: 'Personality', example: 'Zijn **karakter** is sterk. — His character is strong.', synonyms: 'fictional character, fictitious character, lineament, quality' },

  { nl: 'gegeven', en: 'given', level: 'A1', meaning: 'Provided fact', example: 'Het is een **gegeven**. — It is a given.', synonyms: 'give, precondition, presumption' },

  { nl: 'zwijgen', en: 'to be silent', level: 'A1', meaning: 'Not speak', example: 'Hij **zwijgt**. — He is silent.' },

  { nl: 'verklaren', en: 'to explain/declare', level: 'A1', meaning: 'Make clear', example: 'Ik **verklaar** het. — I explain it.', synonyms: 'announce, explicate' },



  { nl: 'voorstellen', en: 'to propose/imagine', level: 'A1', meaning: 'Suggest or imagine', example: 'Ik **stel** iets voor. — I propose something.', synonyms: 'advise, conceive of, envisage, guess' },

  { nl: 'ziekte', en: 'illness', level: 'A1', meaning: 'Health problem', example: 'De **ziekte** duurt lang. — The illness lasts long.', synonyms: 'malady, sickness, unwellness' },

  { nl: 'dringen', en: 'to urge/push', level: 'A2', meaning: 'Push forward', example: 'Hij **dringt** aan. — He urges.', synonyms: 'impulse, itch, pushing, thrust' },

  { nl: 'hoogte', en: 'height', level: 'A1', meaning: 'Vertical measure', example: 'De **hoogte** is groot. — The height is large.', synonyms: 'acme, elevation, meridian, peak' },

  { nl: 'theorie', en: 'theory', level: 'A1', meaning: 'Idea or explanation', example: 'De **theorie** klopt. — The theory is correct.', synonyms: 'hypothesis, possibility' },

  { nl: 'bloed', en: 'blood', level: 'A1', meaning: 'Body fluid', example: 'Het **bloed** stroomt. — The blood flows.' },

  { nl: 'beleid', en: 'policy', level: 'A1', meaning: 'Plan of action', example: 'Het **beleid** verandert. — The policy is changing.' },

  { nl: 'strijd', en: 'fight/struggle', level: 'A1', meaning: 'Conflict', example: 'De **strijd** is zwaar. — The fight is hard.', synonyms: 'battle, combat, conflict, engagement' },

  { nl: 'zorg', en: 'care', level: 'A1', meaning: 'Attention/help', example: 'De **zorg** is goed. — The care is good.', synonyms: 'aid, attention, caution, forethought' },

  { nl: 'gauw', en: 'quickly', level: 'A1', meaning: 'Fast', example: 'Kom **gauw**! — Come quickly!', synonyms: 'apace, chop-chop, promptly, quick' },



  { nl: 'besluiten', en: 'to decide', level: 'A1', meaning: 'Make a choice', example: 'Ik **besluit** nu. — I decide now.', synonyms: 'adjudicate, determine, resolve, settle' },

  { nl: 'beter', en: 'better', level: 'A1', meaning: 'Improved', example: 'Dit is **beter**. — This is better.', synonyms: 'bettor, punter, wagerer' },

  { nl: 'dochter', en: 'daughter', level: 'A1', meaning: 'Female child', example: 'Mijn **dochter** leest. — My daughter reads.', synonyms: 'girl' },

  { nl: 'stappen', en: 'to step', level: 'A1', meaning: 'Walk', example: 'Hij **stapt** vooruit. — He steps forward.', synonyms: 'footstep, measure, pace, stride' },

  { nl: 'droom', en: 'dream', level: 'A1', meaning: 'Thought during sleep', example: 'Ik heb een **droom**. — I have a dream.', synonyms: 'dreaming' },

  { nl: 'schrijver', en: 'writer', level: 'A1', meaning: 'Author', example: 'De **schrijver** schrijft. — The writer writes.', synonyms: 'author' },

  { nl: 'doch', en: 'however', level: 'A2', meaning: 'Contrast word', example: 'Hij komt, **doch** laat. — He comes, but late.', synonyms: 'even so, nevertheless, nonetheless, notwithstanding' },

  { nl: 'tuin', en: 'garden', level: 'A1', meaning: 'Outdoor space', example: 'De **tuin** is mooi. — The garden is beautiful.' },

  { nl: 'maatschappij', en: 'society', level: 'A1', meaning: 'Community', example: 'De **maatschappij** verandert. — Society is changing.', synonyms: 'club, gild, guild, lodge' },

  { nl: 'bedrijf', en: 'company', level: 'A1', meaning: 'Business', example: 'Het **bedrijf** groeit. — The company is growing.' },



  { nl: 'meter', en: 'meter', level: 'A1', meaning: 'Unit of length', example: 'Tien **meter** lang. — Ten meters long.', synonyms: 'metre' },

  { nl: 'springen', en: 'to jump', level: 'A1', meaning: 'Leap', example: 'Hij **springt** hoog. — He jumps high.', synonyms: 'leap, saltation' },

  { nl: 'Jan', en: 'Jan', level: 'A1', meaning: 'Male name', example: '**Jan** komt morgen. — Jan is coming tomorrow.' },

  { nl: 'beneden', en: 'downstairs', level: 'A1', meaning: 'Lower place', example: 'Ik ga **beneden**. — I go downstairs.', synonyms: 'below, downstair' },

  { nl: 'vandaag', en: 'today', level: 'A1', meaning: 'Current day', example: '**Vandaag** werk ik. — I work today.' },

  { nl: 'samenleving', en: 'society', level: 'A1', meaning: 'Community', example: 'De **samenleving** verandert. — Society is changing.', synonyms: 'club, gild, guild, lodge' },

  { nl: 'steen', en: 'stone', level: 'A1', meaning: 'Hard material', example: 'De **steen** ligt daar. — The stone is lying there.', synonyms: 'rock' },

  { nl: 'voorbij', en: 'past/over', level: 'A1', meaning: 'Finished or passed', example: 'Het is **voorbij**. — It is over.', synonyms: 'all over, complete, concluded, ended' },

  { nl: 'krant', en: 'newspaper', level: 'A1', meaning: 'Printed news', example: 'Ik lees de **krant**. — I read the newspaper.', synonyms: 'newspaper publisher, paper' },

  { nl: 'hulp', en: 'help', level: 'A1', meaning: 'Assistance', example: 'Ik heb **hulp** nodig. — I need help.', synonyms: 'aid, assist, assistance, assistant' },



  { nl: 'verhouding', en: 'relationship/ratio', level: 'A1', meaning: 'Connection or proportion', example: 'De **verhouding** is goed. — The relationship is good.', synonyms: 'human relationship, proportion' },

  { nl: 'centraal', en: 'central', level: 'A1', meaning: 'In the middle', example: 'Het staat **centraal**. — It is central.', synonyms: 'cardinal, exchange, fundamental, key' },

  { nl: 'ontmoeten', en: 'to meet', level: 'A1', meaning: 'To come together', example: 'We **ontmoeten** elkaar. — We meet each other.', synonyms: 'come across, encounter, run across, run into' },

  { nl: 'houding', en: 'attitude/posture', level: 'A1', meaning: 'Way of thinking or standing', example: 'Zijn **houding** is positief. — His attitude is positive.', synonyms: 'bearing, carriage, mental attitude, position' },

  { nl: 'gevaar', en: 'danger', level: 'A1', meaning: 'Risk', example: 'Er is **gevaar**. — There is danger.', synonyms: 'peril, risk' },

  { nl: 'trap', en: 'stairs / kick', level: 'A1', meaning: 'Steps', example: 'De **trap** is hoog. — The stairs are high.', synonyms: 'bang, boot, charge, flush' },

  { nl: 'rest', en: 'rest', level: 'A1', meaning: 'Remaining part', example: 'De **rest** komt later. — The rest comes later.', synonyms: 'balance, ease, relaxation, remainder' },

  { nl: 'regering', en: 'government', level: 'A1', meaning: 'Ruling body', example: 'De **regering** beslist. — The government decides.', synonyms: 'administration, authorities, governance, governing' },

  { nl: 'muziek', en: 'music', level: 'A1', meaning: 'Sound art', example: 'Ik luister naar **muziek**. — I listen to music.', synonyms: 'euphony' },

  { nl: 'werpen', en: 'to throw', level: 'A1', meaning: 'To toss', example: 'Hij **werpt** de bal. — He throws the ball.' },



  { nl: 'scherp', en: 'sharp', level: 'A1', meaning: 'Pointed or clear', example: 'Het mes is **scherp**. — The knife is sharp.' },

  { nl: 'treden', en: 'to step/enter', level: 'A2', meaning: 'Formal for step', example: 'Hij **treedt** binnen. — He enters.', synonyms: 'come in, footstep, get in, get into' },

  { nl: 'maal', en: 'time (occurrence)', level: 'A1', meaning: 'Number of times', example: 'Eén **maal** per dag. — Once per day.' },

  { nl: 'openen', en: 'to open', level: 'A1', meaning: 'Make open', example: 'Ik **open** de deur. — I open the door.', synonyms: 'clear, open air, out-of-doors, outdoors' },

  { nl: 'gek', en: 'crazy / fool', level: 'A1', meaning: 'Strange', example: 'Dat is **gek**. — That is crazy.', synonyms: 'brainsick, chump, demented, disturbed' },

  { nl: 'bank', en: 'bank/bench', level: 'A1', meaning: 'Financial place or seat', example: 'Ik zit op de **bank**. — I am sitting on the bench.', synonyms: 'banking company, banking concern, terrace' },

  { nl: 'blad', en: 'leaf/page', level: 'A1', meaning: 'Paper or plant part', example: 'Een **blad** papier. — A sheet of paper.', synonyms: 'foliage, folio, leafage' },

  { nl: 'schip', en: 'ship', level: 'A1', meaning: 'Large boat', example: 'Het **schip** vaart. — The ship sails.', synonyms: 'send, transport' },

  { nl: 'spel', en: 'game', level: 'A1', meaning: 'Play activity', example: 'Het **spel** begint. — The game starts.' },

  { nl: 'rekening', en: 'bill/account', level: 'A1', meaning: 'Financial statement', example: 'De **rekening** komt. — The bill comes.', synonyms: 'chronicle, history, invoice, measure' },



  { nl: 'voren', en: 'forward', level: 'A1', meaning: 'Ahead', example: 'Ga naar **voren**. — Go forward.' },

  { nl: 'wetenschappelijk', en: 'scientific', level: 'A2', meaning: 'Related to science', example: 'Een **wetenschappelijk** onderzoek. — A scientific investigation.' },

  { nl: 'zak', en: 'bag/pocket', level: 'A1', meaning: 'Container', example: 'In mijn **zak**. — In my pocket.', synonyms: 'pouch, sac, sack' },

  { nl: 'opnemen', en: 'to record/take in', level: 'A1', meaning: 'Capture or include', example: 'Ik **neem** het op. — I record it.', synonyms: 'disc, disk, phonograph record, phonograph recording' },

  { nl: 'borst', en: 'chest', level: 'A1', meaning: 'Upper body part', example: 'Mijn **borst** doet pijn. — My chest hurts.', synonyms: 'pectus, thorax' },

  { nl: 'soldaat', en: 'soldier', level: 'A1', meaning: 'Army member', example: 'De **soldaat** loopt. — The soldier walks.' },

  { nl: 'behandelen', en: 'to treat', level: 'A1', meaning: 'Handle or cure', example: 'De dokter **behandelt** hem. — The doctor treats him.', synonyms: 'dainty, delicacy, goody, kickshaw' },

  { nl: 'papier', en: 'paper', level: 'A1', meaning: 'Material for writing', example: 'Het **papier** ligt hier. — The paper is here.', synonyms: 'composition, report, theme' },

  { nl: 'hoop', en: 'hope/pile', level: 'A1', meaning: 'Expectation or stack', example: 'Ik heb **hoop**. — I have hope.', synonyms: 'agglomerate, batch, cumulation, cumulus' },

  { nl: 'breken', en: 'to break', level: 'A1', meaning: 'Separate into parts', example: 'Het glas **breekt**. — The glass breaks.', synonyms: 'good luck, happy chance, interruption' },



  { nl: 'fles', en: 'bottle', level: 'A1', meaning: 'Container', example: 'De **fles** is leeg. — The bottle is empty.', synonyms: 'bottleful' },

  { nl: 'waarheid', en: 'truth', level: 'A1', meaning: 'Reality', example: 'De **waarheid** komt uit. — The truth comes out.', synonyms: 'the true, trueness, verity' },

  { nl: 'tenminste', en: 'at least', level: 'A1', meaning: 'Minimum', example: 'Kom **tenminste** op tijd. — Come at least on time.' },

  { nl: 'prachtig', en: 'beautiful', level: 'A1', meaning: 'Very nice', example: 'Het is **prachtig** weer. — The weather is beautiful.' },

  { nl: 'grens', en: 'border', level: 'A1', meaning: 'Limit', example: 'De **grens** is dichtbij. — The border is near.', synonyms: 'borderline, boundary line, delimitation, margin' },

  { nl: 'hoek', en: 'corner', level: 'A1', meaning: 'Angle or place', example: 'In de **hoek**. — In the corner.' },

  { nl: 'beroep', en: 'profession', level: 'A1', meaning: 'Job', example: 'Mijn **beroep** is leraar. — My profession is teacher.' },

  { nl: 'minister', en: 'minister', level: 'A1', meaning: 'Government official', example: 'De **minister** spreekt. — The minister speaks.', synonyms: 'curate, government minister, parson, pastor' },

  { nl: 'daarop', en: 'on that/after that', level: 'A1', meaning: 'Following or on top', example: 'Hij reageert **daarop**. — He reacts to that.' },

  { nl: 'wind', en: 'wind', level: 'A1', meaning: 'Air movement', example: 'De **wind** waait. — The wind blows.', synonyms: 'air current' },



  { nl: 'koffie', en: 'coffee', level: 'A1', meaning: 'Drink', example: 'Ik drink **koffie**. — I drink coffee.', synonyms: 'coffee tree, java' },

  { nl: 'toestand', en: 'condition', level: 'A1', meaning: 'State', example: 'De **toestand** is slecht. — The condition is bad.', synonyms: 'precondition, status, stipulation' },

  { nl: 'stoppen', en: 'to stop', level: 'A1', meaning: 'End action', example: 'Ik **stop** nu. — I stop now.', synonyms: 'halt, stoppage' },

  { nl: 'oom', en: 'uncle', level: 'A1', meaning: 'Family member', example: 'Mijn **oom** komt. — My uncle is coming.' },

  { nl: 'oor', en: 'ear', level: 'A1', meaning: 'Body part', example: 'Mijn **oor** doet pijn. — My ear hurts.' },

  { nl: 'poging', en: 'attempt', level: 'A1', meaning: 'Try', example: 'Een **poging** doen. — Make an attempt.', synonyms: 'attack, effort, endeavor, endeavour' },

  { nl: 'oorzaak', en: 'cause', level: 'A1', meaning: 'Reason', example: 'De **oorzaak** is bekend. — The cause is known.', synonyms: 'grounds, reason' },

  { nl: 'verlaten', en: 'to leave', level: 'A1', meaning: 'Go away from', example: 'Hij **verlaat** het huis. — He leaves the house.' },

  { nl: 'vlak', en: 'flat/level', level: 'A1', meaning: 'Even surface', example: 'De tafel is **vlak**. — The table is flat.', synonyms: 'degree, grade, tier' },

  { nl: 'buurt', en: 'neighborhood', level: 'A1', meaning: 'Local area', example: 'De **buurt** is rustig. — The neighborhood is calm.', synonyms: 'locality, neighbourhood, vicinity' },



  { nl: 'informatie', en: 'information', level: 'A1', meaning: 'Data', example: 'Ik geef **informatie**. — I give information.', synonyms: 'info' },

  { nl: 'mening', en: 'opinion', level: 'A1', meaning: 'View', example: 'Mijn **mening** telt. — My opinion counts.', synonyms: 'persuasion, sentiment, thought, view' },

  { nl: 'ruim', en: 'spacious/over', level: 'A1', meaning: 'Wide or more than', example: 'Het is **ruim** genoeg. — It is spacious enough.', synonyms: 'all over, broad, complete, concluded' },

  { nl: 'methode', en: 'method', level: 'A1', meaning: 'Way of doing', example: 'Deze **methode** werkt. — This method works.', synonyms: 'method acting' },

  { nl: 'gooien', en: 'to throw', level: 'A1', meaning: 'Toss', example: 'Ik **gooi** de bal. — I throw the ball.' },

  { nl: 'lip', en: 'lip', level: 'A1', meaning: 'Body part', example: 'Mijn **lip** doet pijn. — My lip hurts.' },

  { nl: 'positie', en: 'position', level: 'A1', meaning: 'Place', example: 'Zijn **positie** is sterk. — His position is strong.', synonyms: 'military position, place' },

  { nl: 'herkennen', en: 'to recognize', level: 'A1', meaning: 'Identify', example: 'Ik **herken** hem. — I recognize him.', synonyms: 'acknowledge, agnise, agnize, know' },

  { nl: 'allen', en: 'all (formal)', level: 'A1', meaning: 'Everyone', example: 'Wij **allen** komen. — We all come.' },

  { nl: 'schreeuwen', en: 'to shout', level: 'A1', meaning: 'Loudly speak', example: 'Hij **schreeuwt**. — He shouts.', synonyms: 'call, cry, outcry, vociferation' },



  { nl: 'gezin', en: 'family', level: 'A1', meaning: 'Household', example: 'Mijn **gezin** is groot. — My family is large.', synonyms: 'family unit, home, house, household' },

  { nl: 'morgen', en: 'tomorrow/morning', level: 'A1', meaning: 'Next day or morning', example: '**Morgen** ga ik. — I go tomorrow.', synonyms: 'forenoon, good morning, morn, morning time' },

  { nl: 'huilen', en: 'to cry', level: 'A1', meaning: 'Tears', example: 'Het kind **huilt**. — The child cries.', synonyms: 'call, outcry, shout, vociferation' },

  { nl: 'voorzichtig', en: 'careful', level: 'A1', meaning: 'Cautious', example: 'Wees **voorzichtig**. — Be careful.', synonyms: 'heedful' },

  { nl: 'enorm', en: 'enormous', level: 'A1', meaning: 'Very big', example: 'Het is **enorm** groot. — It is enormously big.', synonyms: 'tremendous' },

  { nl: 'ontvangen', en: 'to receive', level: 'A1', meaning: 'Get something', example: 'Ik **ontvang** een brief. — I receive a letter.', synonyms: 'find, get, have, incur' },

  { nl: 'dikwijls', en: 'often', level: 'A1', meaning: 'Frequently', example: 'Ik kom **dikwijls**. — I come often.', synonyms: 'frequently, much, oft, oftentimes' },

  { nl: 'foto', en: 'photo', level: 'A1', meaning: 'Picture', example: 'Een mooie **foto**. — A beautiful photo.', synonyms: 'exposure, photograph, pic, picture' },

  { nl: 'film', en: 'film/movie', level: 'A1', meaning: 'Motion picture', example: 'De **film** is leuk. — The film is fun.', synonyms: 'celluloid, cinema, flick, motion picture' },

  { nl: 'activiteit', en: 'activity', level: 'A1', meaning: 'Action', example: 'De **activiteit** begint. — The activity starts.', synonyms: 'action, activeness' },



  { nl: 'modern', en: 'modern', level: 'A1', meaning: 'Contemporary', example: 'Het huis is **modern**. — The house is modern.', synonyms: 'modern font' },

  { nl: 'trachten', en: 'to try (formal)', level: 'A2', meaning: 'Attempt', example: 'Hij **tracht** het. — He tries it.' },

  { nl: 'geluk', en: 'luck/happiness', level: 'A1', meaning: 'Good fortune', example: 'Veel **geluk**! — Good luck!', synonyms: 'chance, circumstances, destiny, fate' },

  { nl: 'beslissing', en: 'decision', level: 'A1', meaning: 'Choice made', example: 'De **beslissing** is genomen. — The decision is made.', synonyms: 'conclusion, determination' },

  { nl: 'uiteindelijk', en: 'eventually', level: 'A1', meaning: 'In the end', example: '**Uiteindelijk** lukt het. — Eventually it works.', synonyms: 'finally' },

  { nl: 'basis', en: 'basis', level: 'A1', meaning: 'Foundation', example: 'De **basis** is sterk. — The basis is strong.', synonyms: 'base, cornerstone, footing, foundation' },

  { nl: 'niveau', en: 'level', level: 'A1', meaning: 'Degree', example: 'Het **niveau** is hoog. — The level is high.', synonyms: 'degree, grade, tier' },

  { nl: 'geleden', en: 'ago', level: 'A1', meaning: 'Time in past', example: 'Twee jaar **geleden**. — Two years ago.', synonyms: 'agone' },

  { nl: 'gelegenheid', en: 'opportunity', level: 'A1', meaning: 'Chance', example: 'Een goede **gelegenheid**. — A good opportunity.', synonyms: 'chance' },

  { nl: 'noodzakelijk', en: 'necessary', level: 'A1', meaning: 'Needed', example: 'Het is **noodzakelijk**. — It is necessary.', synonyms: 'essential, necessity, requirement, requisite' },



  { nl: 'zuster', en: 'sister/nurse', level: 'A1', meaning: 'Female sibling or nurse', example: 'Mijn **zuster** werkt. — My sister works.', synonyms: 'nanny, nursemaid, sis' },

  { nl: 'vertonen', en: 'to show/display', level: 'A1', meaning: 'Exhibit', example: 'Ze **vertonen** een film. — They show a film.', synonyms: 'exhibit, showing' },

  { nl: 'lijn', en: 'line', level: 'A1', meaning: 'Straight mark', example: 'Een rechte **lijn**. — A straight line.' },

  { nl: 'handelen', en: 'to act/trade', level: 'A1', meaning: 'Take action', example: 'Hij **handelt** snel. — He acts quickly.', synonyms: 'craft, deed, enactment, human action' },

  { nl: 'wakker', en: 'awake', level: 'A1', meaning: 'Not asleep', example: 'Ik ben **wakker**. — I am awake.', synonyms: 'arouse, awaken, come alive, wake' },

  { nl: 'tante', en: 'aunt', level: 'A1', meaning: 'Family member', example: 'Mijn **tante** belt. — My aunt calls.', synonyms: 'auntie, aunty' },

  { nl: 'schuiven', en: 'to slide', level: 'A1', meaning: 'Move smoothly', example: 'Hij **schuift** de stoel. — He slides the chair.', synonyms: 'microscope slide' },

  { nl: 'aanwezig', en: 'present', level: 'A1', meaning: 'There', example: 'Hij is **aanwezig**. — He is present.', synonyms: 'nowadays' },

  { nl: 'blij', en: 'happy', level: 'A1', meaning: 'Glad', example: 'Ik ben **blij**. — I am happy.', synonyms: 'felicitous' },

  { nl: 'vuur', en: 'fire', level: 'A1', meaning: 'Flames', example: 'Het **vuur** brandt. — The fire burns.', synonyms: 'firing' },



  { nl: 'prijs', en: 'price / prize', level: 'A1', meaning: 'Cost of something', example: 'De **prijs** is hoog. — The price is high.', synonyms: 'award, booty, cost, damage' },

  { nl: 'loop', en: 'run / walk / course', level: 'A1', meaning: 'Movement fast', example: 'Ik **loop** snel. — I walk fast.', synonyms: 'class, line, pass, tally' },

  { nl: 'aardig', en: 'nice/kind', level: 'A1', meaning: 'Friendly', example: 'Hij is **aardig**. — He is nice.', synonyms: 'form, sort, variety' },

  { nl: 'terecht', en: 'rightly/correct', level: 'A1', meaning: 'Justified', example: 'Dat is **terecht**. — That is right.', synonyms: 'compensate, justifiedly, justly, rectify' },

  { nl: 'leeftijd', en: 'age', level: 'A1', meaning: 'Years lived', example: 'Mijn **leeftijd** is 20. — My age is 20.', synonyms: 'historic period' },

  { nl: 'kloppen', en: 'to be correct/knock', level: 'A1', meaning: 'Be right or knock', example: 'Dat **klopt**. — That is correct.', synonyms: 'knocking, roast' },

  { nl: 'reactie', en: 'reaction', level: 'A1', meaning: 'Response', example: 'Zijn **reactie** is snel. — His reaction is quick.', synonyms: 'chemical reaction' },

  { nl: 'telkens', en: 'each time', level: 'A1', meaning: 'Every time', example: '**Telkens** opnieuw. — Each time again.' },

  { nl: 'verkopen', en: 'to sell', level: 'A1', meaning: 'Give for money', example: 'Ik **verkoop** het. — I sell it.' },



  { nl: 'eveneens', en: 'also/likewise', level: 'A1', meaning: 'In addition', example: 'Hij komt **eveneens**. — He also comes.', synonyms: 'as well, besides, similarly, too' },

  { nl: 'tegelijk', en: 'at the same time', level: 'A1', meaning: 'Simultaneously', example: 'We spreken **tegelijk**. — We speak at the same time.' },

  { nl: 'stof', en: 'dust/material', level: 'A1', meaning: 'Fine particles or fabric', example: 'Er ligt **stof**. — There is dust.', synonyms: 'debris, detritus, junk, rubble' },

  { nl: 'praktijk', en: 'practice', level: 'A1', meaning: 'Real use', example: 'In de **praktijk** werkt het. — In practice it works.', synonyms: 'drill, exercise, pattern, practice session' },

  { nl: 'hemel', en: 'sky/heaven', level: 'A1', meaning: 'Above earth', example: 'De **hemel** is blauw. — The sky is blue.', synonyms: 'flip, nirvana, paradise, pitch' },

  { nl: 'neus', en: 'nose', level: 'A1', meaning: 'Body part', example: 'Mijn **neus** is koud. — My nose is cold.', synonyms: 'olfactory organ' },

  { nl: 'bellen', en: 'to call', level: 'A1', meaning: 'Phone someone', example: 'Ik **bel** je. — I call you.', synonyms: 'phone call, telephone call' },

  { nl: 'onmogelijk', en: 'impossible', level: 'A1', meaning: 'Not possible', example: 'Dat is **onmogelijk**. — That is impossible.' },

  { nl: 'verschijnsel', en: 'phenomenon', level: 'A1', meaning: 'Observable fact', example: 'Een vreemd **verschijnsel**. — A strange phenomenon.' },

  { nl: 'veroorzaken', en: 'to cause', level: 'A1', meaning: 'Make happen', example: 'Het **veroorzaakt** schade. — It causes damage.', synonyms: 'grounds, reason' },



  { nl: 'sturen', en: 'to send/steer', level: 'A1', meaning: 'Direct or send', example: 'Ik **stuur** een bericht. — I send a message.', synonyms: 'bullock, confidential information, direct, hint' },

  { nl: 'stilte', en: 'silence', level: 'A1', meaning: 'No sound', example: 'Er is **stilte**. — There is silence.', synonyms: 'quiet' },

  { nl: 'gedurende', en: 'during', level: 'A1', meaning: 'In a period', example: '**Gedurende** de dag. — During the day.' },

  { nl: 'inzicht', en: 'insight', level: 'A1', meaning: 'Understanding', example: 'Goed **inzicht**. — Good insight.', synonyms: 'penetration, perceptiveness, perceptivity' },

  { nl: 'terrein', en: 'area/terrain', level: 'A1', meaning: 'Field or land', example: 'Het **terrein** is groot. — The area is large.', synonyms: 'country' },

  { nl: 'gat', en: 'hole', level: 'A1', meaning: 'Opening', example: 'Er zit een **gat** in. — There is a hole in it.' },

  { nl: 'behandeling', en: 'treatment', level: 'A1', meaning: 'Medical or handling', example: 'De **behandeling** helpt. — The treatment helps.', synonyms: 'handling, intervention' },

  { nl: 'koning', en: 'king', level: 'A1', meaning: 'Male ruler', example: 'De **koning** spreekt. — The king speaks.', synonyms: 'male monarch, queen, world-beater' },

  { nl: 'model', en: 'model', level: 'A1', meaning: 'Example or design', example: 'Dit **model** werkt. — This model works.', synonyms: 'framework, theoretical account' },

  { nl: 'boer', en: 'farmer', level: 'A1', meaning: 'Person working land', example: 'De **boer** werkt. — The farmer works.', synonyms: 'granger, husbandman, sodbuster' },



  { nl: 'zingen', en: 'to sing', level: 'A1', meaning: 'Make music with voice', example: 'Ik **zing**. — I sing.' },

  { nl: 'vliegen', en: 'to fly', level: 'A1', meaning: 'Move in air', example: 'De vogel **vliegt**. — The bird flies.', synonyms: 'fly sheet, rainfly, tent flap, tent-fly' },

  { nl: 'volkomen', en: 'completely', level: 'A1', meaning: 'Fully', example: '**Volkomen** duidelijk. — Completely clear.', synonyms: 'all, altogether, entirely, totally' },

  { nl: 'huwelijk', en: 'marriage', level: 'A1', meaning: 'Union', example: 'Het **huwelijk** duurt lang. — Marriage lasts long.', synonyms: 'married couple, matrimony, spousal relationship, union' },

  { nl: 'cultuur', en: 'culture', level: 'A1', meaning: 'Customs and arts', example: 'De **cultuur** is rijk. — The culture is rich.', synonyms: 'civilisation, civilization' },

  { nl: 'kunst', en: 'art', level: 'A1', meaning: 'Creative work', example: 'Ik hou van **kunst**. — I love art.', synonyms: 'artistic creation, artistic production, fine art' },

  { nl: 'reageren', en: 'to react', level: 'A1', meaning: 'Respond', example: 'Hij **reageert** snel. — He reacts quickly.', synonyms: 'oppose, respond' },

  { nl: 'genieten', en: 'to enjoy', level: 'A1', meaning: 'Take pleasure', example: 'Ik **geniet** van zon. — I enjoy the sun.', synonyms: 'bask, relish, savor, savour' },

  { nl: 'kapitein', en: 'captain', level: 'A1', meaning: 'Leader of ship/team', example: 'De **kapitein** leidt. — The captain leads.', synonyms: 'skipper' },

  { nl: 'vorig', en: 'previous', level: 'A1', meaning: 'Before now', example: 'De **vorige** dag. — The previous day.', synonyms: 'former, late, old' },



  { nl: 'verklaring', en: 'explanation/statement', level: 'A1', meaning: 'Clarification', example: 'De **verklaring** klopt. — The explanation is correct.', synonyms: 'account, argument' },

  { nl: 'verleden', en: 'past', level: 'A1', meaning: 'Time before', example: 'Het **verleden** telt. — The past counts.', synonyms: 'past times, yesteryear' },

  { nl: 'bezoek', en: 'visit', level: 'A1', meaning: 'Going to see someone', example: 'Ik ga op **bezoek**. — I go on a visit.' },

  { nl: 'grijpen', en: 'to grab', level: 'A1', meaning: 'Take quickly', example: 'Hij **grijpt** het. — He grabs it.', synonyms: 'catch, snap, snatch' },

  { nl: 'reis', en: 'journey', level: 'A1', meaning: 'Trip', example: 'De **reis** is lang. — The journey is long.', synonyms: 'journeying, travel' },

  { nl: 'zwarte', en: 'black', level: 'A1', meaning: 'Color', example: 'Een **zwarte** jas. — A black coat.', synonyms: 'blackness, inkiness, lightlessness, pitch blackness' },

  { nl: 'druk', en: 'busy/pressure', level: 'A1', meaning: 'Occupied', example: 'Het is **druk**. — It is busy.', synonyms: 'occupy, pressure level' },

  { nl: 'zover', en: 'so far', level: 'A1', meaning: 'Up to now', example: 'Tot **zover** goed. — So far so good.' },

  { nl: 'staren', en: 'to stare', level: 'A1', meaning: 'Look fixedly', example: 'Hij **staart**. — He stares.', synonyms: 'gaze' },

  { nl: 'oplossing', en: 'solution', level: 'A1', meaning: 'Answer to problem', example: 'De **oplossing** werkt. — The solution works.', synonyms: 'answer, resolution, result, solvent' },



  { nl: 'achten', en: 'to consider', level: 'A1', meaning: 'Think of as', example: 'Ik **acht** het goed. — I consider it good.', synonyms: 'reckon, regard, see, study' },

  { nl: 'missen', en: 'to miss', level: 'A1', meaning: 'Not have or fail', example: 'Ik **mis** je. — I miss you.', synonyms: 'fille, girl, misfire, missy' },

  { nl: 'element', en: 'element', level: 'A1', meaning: 'Part', example: 'Een belangrijk **element**. — An important element.', synonyms: 'component, constituent, factor, ingredient' },

  { nl: 'doordat', en: 'because of', level: 'A1', meaning: 'Reason', example: '**Doordat** het regent. — Because it is raining.' },

  { nl: 'verlangen', en: 'desire', level: 'A1', meaning: 'Strong wish', example: 'Een groot **verlangen**. — A great desire.' },

  { nl: 'bevatten', en: 'to contain', level: 'A1', meaning: 'Have inside', example: 'Het **bevat** water. — It contains water.', synonyms: 'bear, carry, comprise, hold' },

  { nl: 'moeilijkheid', en: 'difficulty', level: 'A1', meaning: 'Problem', example: 'Een **moeilijkheid** oplossen. — Solve a difficulty.', synonyms: 'trouble' },

  { nl: 'vlug', en: 'quick', level: 'A1', meaning: 'Fast', example: 'Hij is **vlug**. — He is quick.', synonyms: 'speedy' },

  { nl: 'vogel', en: 'bird', level: 'A1', meaning: 'Flying animal', example: 'De **vogel** zingt. — The bird sings.', synonyms: 'fowl' },

  { nl: 'schuld', en: 'guilt/debt', level: 'A1', meaning: 'Responsibility or money owed', example: 'Het is mijn **schuld**. — It is my fault.', synonyms: 'guilt feelings, guilt trip, guiltiness, guilty conscience' },



  { nl: 'aanvaarden', en: 'to accept', level: 'A1', meaning: 'Agree to', example: 'Ik **aanvaard** het. — I accept it.', synonyms: 'have, take' },

  { nl: 'politie', en: 'police', level: 'A1', meaning: 'Law enforcement', example: 'De **politie** komt. — The police come.', synonyms: 'constabulary, law, patrol, police force' },

  { nl: 'keuken', en: 'kitchen', level: 'A1', meaning: 'Cooking room', example: 'De **keuken** is schoon. — The kitchen is clean.' },

  { nl: 'tegenwoordig', en: 'nowadays', level: 'A1', meaning: 'In current time', example: '**Tegenwoordig** werk ik. — Nowadays I work.', synonyms: 'now, present, today' },

  { nl: 'leuk', en: 'nice/fun', level: 'A1', meaning: 'Enjoyable', example: 'Het is **leuk**. — It is fun.', synonyms: 'merriment, play, playfulness, sport' },

  { nl: 'tevens', en: 'also (formal)', level: 'A1', meaning: 'In addition', example: 'Hij komt **tevens**. — He also comes.' },

  { nl: 'onderzoeken', en: 'to investigate', level: 'A1', meaning: 'Examine', example: 'We **onderzoeken** het. — We investigate it.', synonyms: 'enquire, inquire, look into' },

  { nl: 'wensen', en: 'to wish', level: 'A1', meaning: 'Desire', example: 'Ik **wens** geluk. — I wish happiness.', synonyms: 'indirect request, want, wishing' },

  { nl: 'herinnering', en: 'memory', level: 'A1', meaning: 'Something remembered', example: 'Een mooie **herinnering**. — A beautiful memory.', synonyms: 'remembering' },

  { nl: 'trouwen', en: 'to marry', level: 'A1', meaning: 'Get married', example: 'Ze **trouwen**. — They marry.', synonyms: 'conjoin, espouse, get married, splice' },



  { nl: 'hetgeen', en: 'that which', level: 'A2', meaning: 'Formal relative', example: '**Hetgeen** hij zegt klopt. — What he says is correct.' },

  { nl: 'bloem', en: 'flower', level: 'A1', meaning: 'Plant part', example: 'De **bloem** groeit. — The flower grows.', synonyms: 'bloom, blossom' },

  { nl: 'voort', en: 'onward', level: 'A1', meaning: 'Continue', example: 'Ga **voort**. — Go on.', synonyms: 'ahead, forrader, forth, forward' },

  { nl: 'dagelijks', en: 'daily', level: 'A1', meaning: 'Every day', example: '**Dagelijks** werk ik. — I work daily.', synonyms: 'day-after-day, day-by-day, day-to-day' },

  { nl: 'ziekenhuis', en: 'hospital', level: 'A1', meaning: 'Medical place', example: 'Het **ziekenhuis** is groot. — The hospital is large.', synonyms: 'infirmary' },

  { nl: 'factor', en: 'factor', level: 'A1', meaning: 'Element influencing', example: 'Een belangrijke **factor**. — An important factor.', synonyms: 'component, constituent, element, ingredient' },

  { nl: 'bouwen', en: 'to build', level: 'A1', meaning: 'Construct', example: 'Ze **bouwen** een huis. — They build a house.', synonyms: 'anatomy, bod, body-build, chassis' },

  { nl: 'zodra', en: 'as soon as', level: 'A1', meaning: 'Immediately when', example: '**Zodra** hij komt. — As soon as he comes.' },

  { nl: 'begin', en: 'beginning', level: 'A1', meaning: 'Start', example: 'Het **begin** is goed. — The beginning is good.', synonyms: 'commencement, first, get-go, kickoff' },

  { nl: 'succes', en: 'success', level: 'A1', meaning: 'Good result', example: 'Veel **succes**! — Good luck!' },



  { nl: 'onderwerp', en: 'subject/topic', level: 'A2', meaning: 'Theme or topic', example: 'Het **onderwerp** is interessant. — The subject is interesting.', synonyms: 'content, depicted object, issue, matter' },

  { nl: 'belangstelling', en: 'interest', level: 'A2', meaning: 'Curiosity or attention', example: 'Hij toont **belangstelling**. — He shows interest.', synonyms: 'involvement, sake' },

  { nl: 'kost', en: 'cost', level: 'A2', meaning: 'Price or expense', example: 'De **kost** is hoog. — The cost is high.', synonyms: 'monetary value, price' },

  { nl: 'vrijwel', en: 'almost', level: 'A2', meaning: 'Nearly', example: 'Hij is **vrijwel** klaar. — He is almost ready.', synonyms: 'about, most, near, nearly' },

  { nl: 'natuur', en: 'nature', level: 'A2', meaning: 'Natural world', example: 'De **natuur** is mooi. — Nature is beautiful.' },

  { nl: 'arts', en: 'doctor', level: 'A2', meaning: 'Medical professional', example: 'De **arts** helpt mij. — The doctor helps me.', synonyms: 'doc, medico, physician' },

  { nl: 'twintig', en: 'twenty', level: 'A1', meaning: 'Number 20', example: 'Ik ben **twintig** jaar oud. — I am **twenty** years old.' },

  { nl: 'fluisteren', en: 'to whisper', level: 'A2', meaning: 'Speak softly', example: 'Hij **fluistert** iets. — He **whispers** something.', synonyms: 'rustle, rustling, susurration, voicelessness' },

  { nl: 'hotel', en: 'hotel', level: 'A1', meaning: 'Place to stay', example: 'Het **hotel** is groot. — The **hotel** is big.' },

  { nl: 'verstaan', en: 'to understand', level: 'A1', meaning: 'Comprehend', example: 'Ik **versta** je niet. — I don\'t **understand** you.', synonyms: 'realise, realize, see' },



  { nl: 'verenigen', en: 'to unite', level: 'A2', meaning: 'Bring together', example: 'Ze **verenigen** hun krachten. — They **unite** their forces.', synonyms: 'merge, unify' },

  { nl: 'Rijk', en: 'kingdom/state', level: 'A2', meaning: 'Nation or realm', example: 'Het **Rijk** groeit. — The **Empire** grows.', synonyms: 'land, province, realm' },

  { nl: 'verdienen', en: 'to earn', level: 'A2', meaning: 'Get money/work reward', example: 'Ik **verdien** goed. — I **earn** well.', synonyms: 'bring in, clear, gain, garner' },

  { nl: 'gesteld', en: 'disposed/placed', level: 'A2', meaning: 'Inclined or positioned', example: 'Hij is positief **gesteld**. — He is positively **disposed**.', synonyms: 'cast aside, cast away, cast out, chuck out' },

  { nl: 'fijn', en: 'fine/nice', level: 'A1', meaning: 'Pleasant or delicate', example: 'Het weer is **fijn**. — The weather is **nice**.', synonyms: 'amercement, mulct, ticket' },

  { nl: 'studie', en: 'study', level: 'A2', meaning: 'Learning', example: 'Mijn **studie** is moeilijk. — My **studies** are difficult.', synonyms: 'survey, work' },

  { nl: 'rekenen', en: 'to calculate', level: 'A2', meaning: 'Math operations', example: 'Ik kan goed **rekenen**. — I can **calculate** well.', synonyms: 'cipher, compute, count on, cypher' },

  { nl: 'vriendelijk', en: 'friendly', level: 'A1', meaning: 'Kind behavior', example: 'Hij is **vriendelijk**. — He is **friendly**.' },

  { nl: 'links', en: 'left', level: 'A1', meaning: 'Direction', example: 'Sla **links** af. — Turn **left**.', synonyms: 'left wing' },

  { nl: 'aspect', en: 'aspect', level: 'A2', meaning: 'Part of something', example: 'Een belangrijk **aspect**. — An important **aspect**.', synonyms: 'facet' },



  { nl: 'voegen', en: 'to add/join', level: 'A2', meaning: 'Combine', example: 'Ze **voegen** zout toe. — They **add** salt.', synonyms: 'articulation, hyperkinetic syndrome, joint, junction' },

  { nl: 'teken', en: 'sign/symbol', level: 'A2', meaning: 'Mark or symbol', example: 'Een **teken** van liefde. — A **sign** of love.', synonyms: 'mark, symbolic representation, symbolisation, symbolization' },

  { nl: 'figuur', en: 'figure/person', level: 'A2', meaning: 'Shape or person', example: 'Een mooie **figuur**. — A beautiful **figure**.', synonyms: 'anatomy, bod, build, chassis' },

  { nl: 'ontbreken', en: 'to be missing', level: 'A2', meaning: 'Lacking', example: 'Er **ontbreekt** iets. — Something is **missing**.' },

  { nl: 'nationaal', en: 'national', level: 'A2', meaning: 'Relating to a nation', example: 'Een **nationaal** feest. — A **national** celebration.', synonyms: 'subject' },

  { nl: 'treffen', en: 'to meet', level: 'A2', meaning: 'Encounter', example: 'Ik **treffen** mijn vriend. — I **meet** my friend.', synonyms: 'come across, encounter, run across, run into' },

  { nl: 'toon', en: 'tone', level: 'A2', meaning: 'Sound or manner', example: 'Zijn **toon** is boos. — His **tone** is angry.' },

  { nl: 'plek', en: 'place', level: 'A1', meaning: 'Location', example: 'Dit is een mooie **plek**. — This is a beautiful **place**.', synonyms: 'property, spot, topographic point' },

  { nl: 'jouw', en: 'your', level: 'A1', meaning: 'Belonging to you', example: '**Jouw** tas ligt daar. — Your bag is lying there.' },

  { nl: 'peter', en: 'godfather', level: 'A2', meaning: 'Male sponsor at baptism', example: 'Mijn **peter** komt op bezoek. — My **godfather** comes to visit.' },



  { nl: 'ziek', en: 'sick', level: 'A1', meaning: 'Ill', example: 'Ik ben **ziek**. — I am **sick**.', synonyms: 'barf, be sick, cast, cat' },

  { nl: 'niks', en: 'nothing', level: 'A1', meaning: 'Nothing at all', example: 'Ik doe **niks**. — I do **nothing**.', synonyms: 'aught, cipher, cypher, goose egg' },

  { nl: 'blijkbaar', en: 'apparently', level: 'A2', meaning: 'As it seems', example: '**Blijkbaar** klopt het. — Apparently it is correct.', synonyms: 'evidently, manifestly, obviously, ostensibly' },

  { nl: 'dame', en: 'lady', level: 'A1', meaning: 'Woman', example: 'Een mooie **dame**. — A beautiful **lady**.', synonyms: 'dame, gentlewoman, madam' },

  { nl: 'tand', en: 'tooth', level: 'A1', meaning: 'Part of mouth', example: 'Mijn **tand** doet pijn. — My **tooth** hurts.' },

  { nl: 'schenken', en: 'to give/pour', level: 'A2', meaning: 'Offer or serve', example: 'Ik **schenk** thee. — I **pour** tea.', synonyms: 'pullulate, spring, springiness, stream' },

  { nl: 'kaart', en: 'card/map', level: 'A1', meaning: 'Piece of paper for info', example: 'Een **kaart** van Nederland. — A **map** of the Netherlands.', synonyms: 'function, identity card, mapping, mathematical function' },

  { nl: 'term', en: 'term', level: 'A2', meaning: 'Word or expression', example: 'Een moeilijke **term**. — A difficult **term**.' },

  { nl: 'bureau', en: 'office/desk', level: 'A1', meaning: 'Place to work', example: 'Het **bureau** is groot. — The **office** is big.', synonyms: 'agency, authority, bureau, business office' },

  { nl: 'opdracht', en: 'assignment', level: 'A2', meaning: 'Task given', example: 'De **opdracht** is moeilijk. — The task is difficult.', synonyms: 'duty assignment' },



  { nl: 'beseffen', en: 'to realize', level: 'A2', meaning: 'Understand fully', example: 'Ik **beseffen** mijn fout. — I **realize** my mistake.', synonyms: 'agnise, agnize, realise, recognise' },

  { nl: 'zogenaamd', en: 'so-called', level: 'A2', meaning: 'Called this way', example: 'De **zogenaamd** expert. — The so-called **expert**.', synonyms: 'alleged, supposed' },

  { nl: 'zelden', en: 'seldom', level: 'A2', meaning: 'Not often', example: 'Ik kom **zelden** hier. — I **rarely** come here.', synonyms: 'rarely' },

  { nl: 'geef', en: 'give', level: 'A1', meaning: 'Hand over', example: 'Ik **geef** een cadeau. — I **give** a gift.' },

  { nl: 'rennen', en: 'to run', level: 'A1', meaning: 'Move fast', example: 'Hij **rent** snel. — He **runs** fast.', synonyms: 'tally, test, trial' },

  { nl: 'bedenken', en: 'to think of', level: 'A2', meaning: 'Invent or consider', example: 'Ik **bedenk** iets. — I **think of** something.' },

  { nl: 'scheppen', en: 'to create', level: 'A2', meaning: 'Make or create', example: 'God **schept** de wereld. — God **creates** the world.', synonyms: 'make' },

  { nl: 'm’n', en: 'my', level: 'A1', meaning: 'Short form of mijn', example: '**M’n** tas is hier. — My bag is here.' },

  { nl: 'Engels', en: 'English', level: 'A1', meaning: 'Language', example: 'Ik spreek **Engels**. — I speak **English**.' },

  { nl: 'effect', en: 'effect', level: 'A2', meaning: 'Result or impact', example: 'Het **effect** is groot. — The **effect** is big.', synonyms: 'consequence, event, impression, issue' },



  { nl: 'rand', en: 'edge', level: 'A1', meaning: 'Border', example: 'De **rand** is scherp. — The edge is sharp.', synonyms: 'border, bound, boundary' },

  { nl: 'gebouw', en: 'building', level: 'A1', meaning: 'Structure to stay in', example: 'Het **gebouw** is oud. — The **building** is old.', synonyms: 'construction, edifice' },

  { nl: 'beperken', en: 'to limit', level: 'A2', meaning: 'Reduce', example: 'We **beperken** de kosten. — We **limit** the costs.', synonyms: 'bound, boundary, terminal point' },

  { nl: 'adem', en: 'breath', level: 'A1', meaning: 'Air inhaled', example: 'Ik neem een diepe **adem**. — I take a deep **breath**.' },

  { nl: 'althans', en: 'at least', level: 'A2', meaning: 'Minimum', example: '**Althans**, dat denk ik. — In any case, that is what I think.' },

  { nl: 'huid', en: 'skin', level: 'A1', meaning: 'Body covering', example: 'Mijn **huid** is zacht. — My **skin** is soft.', synonyms: 'cutis, tegument' },

  { nl: 'schrikken', en: 'to be startled', level: 'A2', meaning: 'Get frightened', example: 'Ik **schrik** vaak. — I **frighten** often.' },

  { nl: 'uiteraard', en: 'of course', level: 'A1', meaning: 'Naturally', example: '**Uiteraard** kom ik. — Of course I come.' },

  { nl: 'bos', en: 'forest / bunch', level: 'A1', meaning: 'Collection of trees', example: 'Het **bos** is groot. — The **forest** is big.', synonyms: 'clump, cluster, clustering, crew' },

  { nl: 'plant', en: 'plant', level: 'A1', meaning: 'Living thing', example: 'De **plant** groeit. — The plant grows.', synonyms: 'flora, industrial plant, plant life, works' },



  { nl: 'uitvoeren', en: 'to execute/carry out', level: 'A2', meaning: 'Perform a task', example: 'Ze **voeren** de opdracht uit. — They **perform** the task.' },

  { nl: 'rust', en: 'rest/peace', level: 'A1', meaning: 'Relaxation or calm', example: 'Ik neem even **rust**. — I take some **rest**.', synonyms: 'balance, ease, relaxation, remainder' },

  { nl: 'product', en: 'product', level: 'A1', meaning: 'Item produced', example: 'Het **product** is nieuw. — The **product** is new.', synonyms: 'merchandise, production, ware' },

  { nl: 'ervaren', en: 'to experience', level: 'A2', meaning: 'Go through events', example: 'Ik **ervaar** veel plezier. — I **experience** much pleasure.' },

  { nl: 'gebeurtenis', en: 'event', level: 'A2', meaning: 'Something that happens', example: 'De **gebeurtenis** was groot. — The event was big.', synonyms: 'case' },

  { nl: 'slaap', en: 'sleep', level: 'A1', meaning: 'Rest at night', example: 'Ik heb genoeg **slaap**. — I have enough **sleep**.', synonyms: 'slumber, sopor' },

  { nl: 'uitdrukking', en: 'expression', level: 'A2', meaning: 'Phrase or face expression', example: 'Zijn **uitdrukking** is boos. — His **expression** is angry.', synonyms: 'aspect, face, facial expression, look' },

  { nl: 'hoeveel', en: 'how much/many', level: 'A1', meaning: 'Amount', example: '**Hoeveel** kost het? — How much does it cost?' },

  { nl: 'kwaad', en: 'angry / evil', level: 'A1', meaning: 'Upset', example: 'Hij is **kwaad**. — He is **angry**.', synonyms: 'furious, immorality, iniquity, raging' },

  { nl: 'inhoud', en: 'content', level: 'A2', meaning: 'What is inside', example: 'De **inhoud** is interessant. — The content is interesting.', synonyms: 'message, subject matter, substance' },



  { nl: 'zolang', en: 'as long as', level: 'A2', meaning: 'During the time', example: '**Zolang** ik leef. — As long as I live.' },

  { nl: 'ineens', en: 'suddenly', level: 'A2', meaning: 'All at once', example: 'Hij valt **ineens**. — He falls **suddenly**.', synonyms: 'abruptly, dead, short' },

  { nl: 'lekker', en: 'tasty/nice', level: 'A1', meaning: 'Pleasant taste or feeling', example: 'De taart is **lekker**. — The cake is **delicious**.' },

  { nl: 'midden', en: 'middle', level: 'A1', meaning: 'Center', example: 'Het staat in het **midden**. — It stands in the **middle**.', synonyms: 'center, centre, eye, heart' },

  { nl: 'tekst', en: 'text', level: 'A1', meaning: 'Written words', example: 'De **tekst** is lang. — The **text** is long.', synonyms: 'textual matter' },

  { nl: 'beweren', en: 'to claim', level: 'A2', meaning: 'Say something confidently', example: 'Hij **beweert** het. — He **claims** it.' },

  { nl: 'knie', en: 'knee', level: 'A1', meaning: 'Joint in the leg', example: 'Mijn **knie** doet pijn. — My **knee** hurts.', synonyms: 'articulatio genus, genu, human knee, knee joint' },

  { nl: 'geboren', en: 'born', level: 'A1', meaning: 'Start of life', example: 'Ik ben in 2000 **geboren**. — I was **born** in 2000.', synonyms: 'bear' },

  { nl: 'telefoon', en: 'phone', level: 'A1', meaning: 'Device to call', example: 'Mijn **telefoon** ligt hier. — My **phone** is here.', synonyms: 'sound, speech sound, telephone, telephone set' },

  { nl: 'kosten', en: 'costs', level: 'A1', meaning: 'Price', example: 'De **kosten** zijn hoog. — The costs are high.', synonyms: 'cost' },



  { nl: 'bedoeling', en: 'intention', level: 'A2', meaning: 'Purpose', example: 'De **bedoeling** is goed. — The intention is good.', synonyms: 'aim, design, intent, purpose' },

  { nl: 'optreden', en: 'performance', level: 'A2', meaning: 'Show or action', example: 'Het **optreden** begint. — The **performance** starts.', synonyms: 'public presentation' },

  { nl: 'gering', en: 'small/low', level: 'A2', meaning: 'Minimal', example: 'Het risico is **gering**. — The risk is **small**.', synonyms: 'depression' },

  { nl: 'zeven', en: 'seven', level: 'A1', meaning: 'Number 7', example: 'Er zijn **zeven** stoelen. — There are **seven** chairs.', synonyms: 'heptad, septenary, septet, seven-spot' },

  { nl: 'individueel', en: 'individual', level: 'A2', meaning: 'Single person', example: 'Een **individuele** taak. — An **individual** task.', synonyms: 'mortal, person, somebody, someone' },

  { nl: 'structuur', en: 'structure', level: 'A2', meaning: 'Arrangement', example: 'De **structuur** is duidelijk. — The structure is clear.', synonyms: 'construction' },

  { nl: 'roman', en: 'novel', level: 'A2', meaning: 'Book story', example: 'Ik lees een **roman**. — I read a **novel**.' },

  { nl: 'slagen', en: 'to succeed', level: 'A2', meaning: 'Achieve a goal', example: 'Hij zal **slagen**. — He will **succeed**.', synonyms: 'come after, come through, follow, win' },

  { nl: 'zichtbaar', en: 'visible', level: 'A2', meaning: 'Can be seen', example: 'Het is **zichtbaar**. — It is **visible**.', synonyms: 'seeable' },

  { nl: 'bevolking', en: 'population', level: 'A2', meaning: 'People living in area', example: 'De **bevolking** groeit. — The population grows.' },



  { nl: 'burger', en: 'citizen', level: 'A2', meaning: 'Person of a country', example: 'Elke **burger** stemt. — Every **citizen** votes.' },

  { nl: 'kring', en: 'circle/group', level: 'A2', meaning: 'Group of people', example: 'Een kleine **kring** vrienden. — A small **circle** of friends.', synonyms: 'band, chemical group, grouping, lot' },

  { nl: 'grijs', en: 'grey', level: 'A1', meaning: 'Color', example: 'De lucht is **grijs**. — The air is **grey**.' },

  { nl: 'beleven', en: 'to experience', level: 'A2', meaning: 'Go through', example: 'Ik **beleef** veel plezier. — I **experience** much pleasure.' },

  { nl: 'vergelijken', en: 'to compare', level: 'A2', meaning: 'See differences', example: 'Ik **vergelijk** prijzen. — I **compare** prices.', synonyms: 'comparability, comparison, equivalence' },

  { nl: 'bestuur', en: 'administration', level: 'A2', meaning: 'Management', example: 'Het **bestuur** beslist. — The administration decides.', synonyms: 'brass, disposal, establishment, governance' },

  { nl: 'kwestie', en: 'issue/matter', level: 'A2', meaning: 'Topic or problem', example: 'De **kwestie** is belangrijk. — The matter is important.', synonyms: 'affair, number, subject, thing' },

  { nl: 'geloof', en: 'faith/belief', level: 'A2', meaning: 'Religious belief', example: 'Zijn **geloof** is sterk. — His faith is strong.', synonyms: 'feeling, impression, notion, opinion' },

  { nl: 'weigeren', en: 'to refuse', level: 'A2', meaning: 'Say no', example: 'Hij **weigert** hulp. — He refuses help.', synonyms: 'decline, food waste, garbage, scraps' },

  { nl: 'eventueel', en: 'possibly', level: 'A2', meaning: 'Maybe', example: 'Een **eventueel** probleem. — A possible problem.', synonyms: 'maybe, mayhap, peradventure, perchance' },



  { nl: 'helft', en: 'half', level: 'A1', meaning: '50%', example: 'De **helft** is klaar. — The half is ready.', synonyms: 'one-half' },

  { nl: 'dichter', en: 'poet / closer', level: 'A2', meaning: 'Writes poems', example: 'De **dichter** leest voor. — The poet reads aloud.', synonyms: 'finisher' },

  { nl: 'keuze', en: 'choice', level: 'A1', meaning: 'Selection', example: 'Een moeilijke **keuze**. — A difficult choice.', synonyms: 'option, pick, selection' },

  { nl: 'zijde', en: 'side', level: 'A1', meaning: 'Part of something', example: 'Aan deze **zijde**. — On this side.' },

  { nl: 'behalve', en: 'except', level: 'A2', meaning: 'Excluding', example: 'Iedereen komt **behalve** Jan. — Everyone comes except Jan.', synonyms: 'demur, exclude, leave off, leave out' },

  { nl: 'dwingen', en: 'to force', level: 'A2', meaning: 'Make someone do', example: 'Ze **dwingen** hem. — They force him.' },

  { nl: 'verrichten', en: 'to perform', level: 'A2', meaning: 'Carry out actions', example: 'Hij **verricht** taken. — He performs tasks.', synonyms: 'execute' },

  { nl: 'haast', en: 'hurry', level: 'A1', meaning: 'Quickly', example: 'Ik heb **haast**. — I am in a hurry.', synonyms: 'haste, hastiness, hurriedness, precipitation' },

  { nl: 'aankomen', en: 'to arrive', level: 'A1', meaning: 'Reach a place', example: 'De trein **komt aan**. — The train arrives.', synonyms: 'come, get, get in, go far' },

  { nl: 'vlees', en: 'meat', level: 'A1', meaning: 'Animal food', example: 'Ik eet geen **vlees**. — I don\'t eat meat.', synonyms: 'kernel' },



  { nl: 'voorwaarde', en: 'condition', level: 'A2', meaning: 'Requirement', example: 'Een belangrijke **voorwaarde**. — An important condition.', synonyms: 'precondition, status, stipulation' },

  { nl: 'vertrouwen', en: 'trust', level: 'A2', meaning: 'Reliance', example: 'Ik **vertrouw** jou. — I trust you.', synonyms: 'reliance' },

  { nl: 'trein', en: 'train', level: 'A1', meaning: 'Transport by rail', example: 'De **trein** is laat. — The **train** is late.', synonyms: 'railroad train, string' },

  { nl: 'vangen', en: 'to catch', level: 'A1', meaning: 'Grab', example: 'Ik **vang** de bal. — I catch the ball.', synonyms: 'gimmick, haul' },

  { nl: 'evenals', en: 'as well as', level: 'A2', meaning: 'Also', example: 'Zij komen **evenals** wij. — They come as well as we do.' },

  { nl: 'praktisch', en: 'practical', level: 'A2', meaning: 'Useful', example: 'Een **praktisch** idee. — A practical idea.', synonyms: 'hard-nosed, hardheaded, pragmatic' },

  { nl: 'bewijzen', en: 'to prove', level: 'A2', meaning: 'Show evidence', example: 'Hij **bewijst** het. — He proves it.', synonyms: 'demonstrate, establish, shew, show' },

  { nl: 'betrekken', en: 'to involve', level: 'A2', meaning: 'Include', example: 'We **betrekken** iedereen. — We involve everyone.', synonyms: 'affect, regard' },

  { nl: 'helder', en: 'clear', level: 'A1', meaning: 'Easy to see/understand', example: 'Het water is **helder**. — The water is clear.', synonyms: 'open' },

  { nl: 'straks', en: 'soon', level: 'A1', meaning: 'In a short time', example: 'Ik kom **straks** terug. — I am coming back soon.', synonyms: 'before long, presently, shortly' },



  { nl: 'zomer', en: 'summer', level: 'A1', meaning: 'Season after spring', example: 'In de **zomer** is het warm. — In summer it is warm.', synonyms: 'summertime' },

  { nl: 'uitspraak', en: 'pronunciation/opinion', level: 'A2', meaning: 'How something is said or a statement', example: 'Zijn **uitspraak** is duidelijk. — His statement is clear.', synonyms: 'orthoepy, persuasion, sentiment, thought' },

  { nl: 'eis', en: 'requirement/demand', level: 'A2', meaning: 'What is demanded', example: 'Een harde **eis**. — A harsh demand.', synonyms: 'essential, necessary, necessity, requisite' },

  { nl: 'nergens', en: 'nowhere', level: 'A1', meaning: 'No place', example: 'Ik vind het **nergens**. — I can\'t find it anywhere.' },

  { nl: 'ochtend', en: 'morning', level: 'A1', meaning: 'Early part of the day', example: 'De **ochtend** is fris. — The morning is fresh.', synonyms: 'forenoon, good morning, morn, morning time' },

  { nl: 'streek', en: 'region', level: 'A2', meaning: 'Area', example: 'Een mooie **streek**. — A beautiful region.', synonyms: 'area, part' },

  { nl: 'winnen', en: 'to win', level: 'A1', meaning: 'Be victorious', example: 'Ik wil **winnen**. — I want to win.', synonyms: 'profits, winnings' },

  { nl: 'vaststellen', en: 'to determine', level: 'A2', meaning: 'Figure out', example: 'We **stellen** het probleem **vast**. — We determine the problem.', synonyms: 'ascertain, find, find out, influence' },

  { nl: 'gezond', en: 'healthy', level: 'A1', meaning: 'In good health', example: 'Ik voel me **gezond**. — I feel healthy.' },

  { nl: 'voorstel', en: 'proposal/suggestion', level: 'A2', meaning: 'Idea to consider', example: 'Een goed **voorstel**. — A good suggestion.', synonyms: 'marriage offer, marriage proposal, proffer, proposition' },



  { nl: 'lukken', en: 'to succeed', level: 'A2', meaning: 'Go well', example: 'Het zal wel **lukken**. — It will probably work.', synonyms: 'come after, come through, follow, win' },

  { nl: 'aannemen', en: 'to accept', level: 'A2', meaning: 'Agree or take', example: 'Ik **neem** het cadeau **aan**. — I accept the gift.', synonyms: 'have, take' },

  { nl: 'drijven', en: 'to float/drive', level: 'A2', meaning: 'Move on surface or push forward', example: 'De boot **drijft**. — The boat **drifts**.', synonyms: 'driving force, thrust' },

  { nl: 'hoeveelheid', en: 'quantity', level: 'A2', meaning: 'Amount', example: 'Een grote **hoeveelheid** water. — A large amount of water.', synonyms: 'amount, measure' },

  { nl: 'vermelden', en: 'to mention', level: 'A2', meaning: 'State or report', example: 'Hij **vermeldt** zijn naam. — He mentions his name.', synonyms: 'acknowledgment, citation, cite, credit' },

  { nl: 'dank', en: 'thanks', level: 'A1', meaning: 'Gratitude', example: '**Dank** voor je hulp. — Thank you for your help.' },

  { nl: 'conclusie', en: 'conclusion', level: 'A2', meaning: 'Final judgment', example: 'De **conclusie** is duidelijk. — The conclusion is clear.', synonyms: 'decision, determination' },

  { nl: 'baby', en: 'baby', level: 'A1', meaning: 'Very young child', example: 'Het **baby** slaapt. — The baby is sleeping.', synonyms: 'babe, infant' },

  { nl: 'veilig', en: 'safe', level: 'A1', meaning: 'Protected', example: 'Het huis is **veilig**. — The house is safe.' },

  { nl: 'begrepen', en: 'understood', level: 'A2', meaning: 'Comprehended', example: 'Ik heb je **begrepen**. — I have understood you.', synonyms: 'realise, realize, see, understand' },



  { nl: 'huidig', en: 'current', level: 'A2', meaning: 'Present', example: 'De **huidige** situatie. — The current situation.', synonyms: 'electric current, stream' },

  { nl: 'stijgen', en: 'to rise', level: 'A1', meaning: 'Go up', example: 'De prijzen **stijgen**. — The prices **rise**.', synonyms: 'ascending, ascension, ascent' },

  { nl: 'acht', en: 'eight', level: 'A1', meaning: 'Number 8', example: 'Ik heb **acht** appels. — I have eight apples.', synonyms: 'eighter, octad, octet, octonary' },

  { nl: 'besluit', en: 'decision', level: 'A2', meaning: 'Choice made', example: 'Het **besluit** is genomen. — The decision is made.', synonyms: 'conclusion, determination' },

  { nl: 'vaag', en: 'vague', level: 'A2', meaning: 'Not clear', example: 'Zijn uitleg is **vaag**. — His explanation is vague.', synonyms: 'obscure, undefined' },

  { nl: 'publiek', en: 'audience/public', level: 'A2', meaning: 'Group of people watching or general public', example: 'Het **publiek** klapt. — The audience applauds.', synonyms: 'populace, world' },

  { nl: 'voorlopig', en: 'temporary', level: 'A2', meaning: 'For the moment', example: 'Het is **voorlopig** goed. — It is **provisionally** good.', synonyms: 'impermanent, temp, temporary worker' },

  { nl: 'weliswaar', en: 'indeed/admittedly', level: 'A2', meaning: 'Confirms previous statement', example: '**Weliswaar** is het duur, maar goed. — Admittedly it is expensive, but good.', synonyms: 'avowedly, confessedly, true' },

  { nl: 'internationaal', en: 'international', level: 'A2', meaning: 'Between countries', example: 'Een **internationaal** festival. — An international festival.' },

  { nl: 'gebrek', en: 'lack', level: 'A2', meaning: 'Shortage', example: 'Er is een **gebrek** aan tijd. — There is a lack of time.', synonyms: 'deficiency, miss, want' },



  { nl: 'stevig', en: 'strong/sturdy', level: 'A2', meaning: 'Solid', example: 'De tafel is **stevig**. — The table is sturdy.', synonyms: 'hardy, inflexible, stalwart, stout' },

  { nl: 'beloven', en: 'to promise', level: 'A1', meaning: 'Say you will do something', example: 'Ik **belooft** te komen. — I promise to come.', synonyms: 'hope' },

  { nl: 'eiland', en: 'island', level: 'A1', meaning: 'Land surrounded by water', example: 'Het **eiland** is klein. — The island is small.' },

  { nl: 'tegenstelling', en: 'contrast', level: 'A2', meaning: 'Opposite', example: 'In **tegenstelling** tot hem, ik wel. — In contrast to him, I do.', synonyms: 'direct contrast' },

  { nl: 'duwen', en: 'to push', level: 'A1', meaning: 'Apply force forward', example: 'Hij **duwt** de deur open. — He pushes the door open.', synonyms: 'pushing, thrust' },

  { nl: 'oordeel', en: 'judgment', level: 'A2', meaning: 'Opinion or verdict', example: 'Een streng **oordeel**. — A strict judgment.', synonyms: 'assessment, judgement, mind' },

  { nl: 'smaak', en: 'taste', level: 'A1', meaning: 'Flavor', example: 'De **smaak** is lekker. — The taste is delicious.', synonyms: 'gustatory perception, gustatory sensation, penchant, predilection' },

  { nl: 'principe', en: 'principle', level: 'A2', meaning: 'Fundamental rule', example: 'Een belangrijk **principe**. — An important principle.', synonyms: 'rule' },

  { nl: 'traan', en: 'tear', level: 'A1', meaning: 'From eye', example: 'Een **traan** rolt over haar wang. — A tear rolls down her cheek.', synonyms: 'rent, rip, snag, split' },

  { nl: 'rij', en: 'row/line', level: 'A1', meaning: 'Sequence of objects', example: 'Een **rij** stoelen. — A row of chairs.', synonyms: 'dustup, quarrel, run-in, words' },



  { nl: 'twijfel', en: 'doubt', level: 'A2', meaning: 'Uncertainty', example: 'Er is geen **twijfel**. — There is no doubt.', synonyms: 'doubtfulness, dubiety, dubiousness, incertitude' },

  { nl: 'meester', en: 'teacher/master', level: 'A2', meaning: 'Person skilled or instructs', example: 'De **meester** legt uit. — The master explains.', synonyms: 'instructor, lord, maestro, overlord' },

  { nl: 'militair', en: 'military', level: 'A2', meaning: 'Relating to the army', example: 'Een **militair** oefening. — A military exercise.', synonyms: 'armed forces, armed services, military machine, war machine' },

  { nl: 'glimlach', en: 'smile', level: 'A1', meaning: 'Facial expression of happiness', example: 'Ze heeft een mooie **glimlach**. — She has a beautiful smile.', synonyms: 'grin, grinning, smiling' },

  { nl: 'aldus', en: 'thus/so', level: 'A2', meaning: 'As a result', example: '**Aldus** sprak hij. — Thus he spoke.', synonyms: 'frankincense, gum olibanum, hence, olibanum' },

  { nl: 'aarzelen', en: 'to hesitate', level: 'A2', meaning: 'Pause before action', example: 'Hij **aarzelt** even. — He hesitates for a moment.', synonyms: 'pause, waffle, waver' },

  { nl: 'kwaliteit', en: 'quality', level: 'A2', meaning: 'Standard of something', example: 'De **kwaliteit** is goed. — The quality is good.', synonyms: 'caliber, calibre' },

  { nl: 'mede', en: 'also/with', level: 'A2', meaning: 'Together or in addition', example: 'Hij is **mede** verantwoordelijk. — He is co-responsible.' },

  { nl: 'vullen', en: 'to fill', level: 'A1', meaning: 'Put into', example: 'Ik **vul** de fles. — I fill the bottle.', synonyms: 'filling' },

  { nl: 'uitsluitend', en: 'exclusively', level: 'A2', meaning: 'Only', example: 'Voor **uitsluitend** leden. — For members only.', synonyms: 'alone, entirely, only, solely' },



  { nl: 'buigen', en: 'to bend', level: 'A2', meaning: 'Change angle', example: 'Hij **buigt** voor de leraar. — He bows to the teacher.', synonyms: 'bending, crook, turn, twist' },

  { nl: 'delen', en: 'to share/divide', level: 'A1', meaning: 'Give part to others', example: 'We **delen** het brood. — We share the bread.', synonyms: 'part, percentage, portion, water parting' },

  { nl: 'toepassing', en: 'application/use', level: 'A2', meaning: 'Practical use', example: 'De **toepassing** is eenvoudig. — The **application** is simple.', synonyms: 'employment, exercise, function, practical application' },

  { nl: 'individu', en: 'individual', level: 'A2', meaning: 'Single person', example: 'Ieder **individu** telt. — Every individual counts.', synonyms: 'mortal, person, somebody, someone' },

  { nl: 'ziel', en: 'soul', level: 'A2', meaning: 'Spirit of a person', example: 'Hij heeft een goede **ziel**. — He has a good soul.', synonyms: 'individual, mortal, person, psyche' },

  { nl: 'gebaar', en: 'gesture', level: 'A1', meaning: 'Movement to express', example: 'Ze maakt een vriendelijk **gebaar**. — She makes a friendly gesture.', synonyms: 'motion' },

  { nl: 'beslissen', en: 'to decide', level: 'A1', meaning: 'Make a choice', example: 'Wij moeten **beslissen**. — We must decide.', synonyms: 'adjudicate, determine, resolve, settle' },

  { nl: 'wellicht', en: 'perhaps', level: 'A2', meaning: 'Maybe', example: '**Wellicht** komt hij morgen. — Perhaps he comes tomorrow.', synonyms: 'maybe, mayhap, peradventure, perchance' },

  { nl: 'vanwege', en: 'because of', level: 'A2', meaning: 'Due to', example: 'Het is gesloten **vanwege** vakantie. — It is closed because of vacation.' },

  { nl: 'dr.', en: 'doctor (title)', level: 'A1', meaning: 'Academic or medical title', example: '**Dr.** Jansen spreekt. — Dr. Jansen speaks.' },



  { nl: 'glijden', en: 'to slide', level: 'A2', meaning: 'Move smoothly', example: 'Ze **glijdt** over de vloer. — She glides over the floor.', synonyms: 'microscope slide' },

  { nl: 'werking', en: 'operation/effect', level: 'A2', meaning: 'Function or effect', example: 'De **werking** is duidelijk. — The **operation** is clear.', synonyms: 'consequence, event, impression, issue' },

  { nl: 'vervullen', en: 'to fulfill', level: 'A2', meaning: 'Complete a duty', example: 'Hij **vervult** zijn taak. — He fulfills his task.', synonyms: 'accomplish, action, carry out, carry through' },

  { nl: 'band', en: 'band/tire', level: 'A2', meaning: 'Musical group or part of wheel', example: 'De **band** speelt goed. — The band plays well.', synonyms: 'circle, fatigue, jade, lot' },

  { nl: 'plaatsen', en: 'to place', level: 'A1', meaning: 'Put somewhere', example: 'Ik **plaats** het boek op tafel. — I place the book on the table.', synonyms: 'property, spot, topographic point' },

  { nl: 'honderd', en: 'hundred', level: 'A1', meaning: 'Number 100', example: 'Er zijn **honderd** mensen. — There are a hundred people.', synonyms: 'century, one c, one hundred' },

  { nl: 'uiterst', en: 'extremely', level: 'A2', meaning: 'Very much', example: 'Het is **uiterst** belangrijk. — It is **extremely** important.', synonyms: 'exceedingly, highly, passing, super' },

  { nl: 'bezwaar', en: 'objection', level: 'A2', meaning: 'Opposition', example: 'Hij heeft een **bezwaar**. — He has an objection.', synonyms: 'expostulation, remonstrance, remonstration' },

  { nl: 'wekken', en: 'to wake/raise', level: 'A2', meaning: 'Cause to wake or create', example: 'Ze **wekt** interesse. — She arouses interest.', synonyms: 'acclivity, aftermath, ascent, backwash' },

  { nl: 'bespreken', en: 'to discuss', level: 'A1', meaning: 'Talk about', example: 'We **bespreken** het probleem. — We discuss the problem.', synonyms: 'discus, saucer' },



  { nl: 'toenemen', en: 'to increase', level: 'A2', meaning: 'Become larger', example: 'De temperatuur **neemt toe**. — The temperature is rising.', synonyms: 'addition, gain' },

  { nl: 'spanning', en: 'tension', level: 'A2', meaning: 'Stress or excitement', example: 'De **spanning** stijgt. — The tension rises.', synonyms: 'stress, tautness, tenseness, tensity' },

  { nl: 'arbeid', en: 'labor/work', level: 'A2', meaning: 'Work effort', example: 'Fysieke **arbeid** is zwaar. — Physical labor is heavy.', synonyms: 'labour, proletariat, toil, working class' },

  { nl: 'type', en: 'type', level: 'A1', meaning: 'Kind or category', example: 'Dit **type** auto is snel. — This type of car is fast.', synonyms: 'case, character, eccentric' },

  { nl: 'uitgaan', en: 'to go out', level: 'A1', meaning: 'Leave the house', example: 'Wij **uitgaan** vanavond. — We go out tonight.' },

  { nl: 'discussie', en: 'discussion', level: 'A2', meaning: 'Talk to exchange ideas', example: 'Een felle **discussie**. — A heated discussion.', synonyms: 'discourse, give-and-take, treatment, word' },

  { nl: 'onderneming', en: 'enterprise/company', level: 'A2', meaning: 'Business', example: 'Een grote **onderneming**. — A large enterprise.', synonyms: 'endeavor, endeavour' },

  { nl: 'gevaarlijk', en: 'dangerous', level: 'A1', meaning: 'Unsafe', example: 'Het is **gevaarlijk** hier. — It is **dangerous** here.', synonyms: 'grave, grievous, life-threatening, serious' },

  { nl: 'sigaret', en: 'cigarette', level: 'A1', meaning: 'Tobacco roll', example: 'Rook geen **sigaret**. — Don\'t smoke a cigarette.', synonyms: 'butt, cigaret, coffin nail, fag' },

  { nl: 'gemeente', en: 'municipality', level: 'A2', meaning: 'Local government area', example: 'De **gemeente** organiseert het feest. — The municipality organizes the party.' },



  { nl: 'baan', en: 'job/path', level: 'A1', meaning: 'Employment or track', example: 'Hij heeft een nieuwe **baan**. — He has a new job.', synonyms: 'business, chore, line, occupation' },

  { nl: 'verbergen', en: 'to hide', level: 'A2', meaning: 'Keep from view', example: 'Hij **verbergt** het cadeau. — He hides the gift.', synonyms: 'fell, pelt, skin' },

  { nl: 'spoor', en: 'track/trace', level: 'A2', meaning: 'Rail track or evidence', example: 'Het **spoor** is zichtbaar. — The **track** is visible.', synonyms: 'course, hint, lead, path' },

  { nl: 'vis', en: 'fish', level: 'A1', meaning: 'Animal living in water', example: 'De **vis** zwemt snel. — The **fish** swims fast.' },

  { nl: 'rechter', en: 'judge/right', level: 'A2', meaning: 'Legal officer', example: 'De **rechter** spreekt een vonnis. — The judge pronounces a verdict.', synonyms: 'evaluator, jurist, justice' },

  { nl: 'leraar', en: 'teacher', level: 'A1', meaning: 'Educator', example: 'De **leraar** legt uit. — The teacher explains.', synonyms: 'instructor' },

  { nl: 'kritiek', en: 'criticism', level: 'A2', meaning: 'Evaluation', example: 'Hij krijgt veel **kritiek**. — He receives much criticism.', synonyms: 'critique, unfavorable judgment' },

  { nl: 'beschermen', en: 'to protect', level: 'A1', meaning: 'Keep safe', example: 'We **beschermen** het kind. — We protect the child.' },

  { nl: 'oorspronkelijk', en: 'originally', level: 'A2', meaning: 'In the beginning', example: 'Het was **oorspronkelijk** anders. — It was originally different.', synonyms: 'primitively' },

  { nl: 'thans', en: 'now/currently', level: 'A2', meaning: 'At this moment', example: '**Thans** is het anders. — Now it is different.', synonyms: 'presently' },



  { nl: 'redden', en: 'to save', level: 'A2', meaning: 'Help or rescue', example: 'Hij **redt** de kat. — He rescues the cat.', synonyms: 'relieve, salvage, salve' },

  { nl: 'beschikken', en: 'to have at disposal', level: 'A2', meaning: 'Be able to use', example: 'Wij **beschikken** over informatie. — We have information.' },

  { nl: 'absoluut', en: 'absolute', level: 'A2', meaning: 'Complete, total', example: 'Dit is **absoluut** waar. — It is absolutely true.' },

  { nl: 'historisch', en: 'historical', level: 'A2', meaning: 'Relating to history', example: 'Een **historisch** gebouw. — A historic building.' },

  { nl: 'nummer', en: 'number', level: 'A1', meaning: 'Digit or issue', example: 'Mijn huis **nummer** is 12. — My house number is 12.', synonyms: 'figure' },

  { nl: 'afhankelijk', en: 'dependent', level: 'A2', meaning: 'Relying on', example: 'Hij is **afhankelijk** van hulp. — He is dependent on help.', synonyms: 'dependant' },

  { nl: 'verkeren', en: 'to be in a state', level: 'A2', meaning: 'Be situated', example: 'Het project **verkeert** in gevaar. — The project is in danger.' },

  { nl: 'extra', en: 'extra', level: 'A1', meaning: 'Additional', example: 'Een **extra** kop koffie. — An extra cup of coffee.', synonyms: 'spear carrier, supernumerary' },

  { nl: 'last', en: 'burden', level: 'A2', meaning: 'Heavy responsibility', example: 'Het is een zware **last**. — It is a heavy **burden**.', synonyms: 'encumbrance, incumbrance, load, loading' },

  { nl: 'vriendin', en: 'female friend/girlfriend', level: 'A1', meaning: 'Woman friend', example: 'Mijn **vriendin** komt mee. — My girlfriend comes along.', synonyms: 'girl, lady friend' },



  { nl: 'letten', en: 'to pay attention', level: 'A2', meaning: 'Watch carefully', example: 'Je moet goed **letten**. — You must pay good attention.' },

  { nl: 'zekerheid', en: 'certainty', level: 'A2', meaning: 'Confidence about outcome', example: 'Er is geen **zekerheid**. — There is no certainty.', synonyms: 'foregone conclusion, sure thing' },

  { nl: 'smal', en: 'narrow', level: 'A1', meaning: 'Thin width', example: 'De straat is **smal**. — The street is narrow.', synonyms: 'contract' },

  { nl: 'aanleiding', en: 'reason/occasion', level: 'A2', meaning: 'Cause for event', example: 'Een goede **aanleiding**. — A good reason.', synonyms: 'affair, function, ground, juncture' },

  { nl: 'slot', en: 'lock/end', level: 'A1', meaning: 'Final part or fastener', example: 'Het **slot** van het boek. — The end of the book.', synonyms: 'curl, ending, ringlet, terminal' },

  { nl: 'schaduw', en: 'shadow', level: 'A1', meaning: 'Dark shape cast by light', example: 'De boom geeft **schaduw**. — The tree gives **shadow**.', synonyms: 'dark, darkness' },

  { nl: 'leiding', en: 'leadership/pipe', level: 'A2', meaning: 'Management or conduit', example: 'De **leiding** van het team. — The leadership of the team.', synonyms: 'leaders, leading, pipage, piping' },

  { nl: 'kat', en: 'cat', level: 'A1', meaning: 'Domestic feline', example: 'De **kat** slaapt. — The cat sleeps.', synonyms: 'bozo, guy, hombre, true cat' },

  { nl: 'universiteit', en: 'university', level: 'A2', meaning: 'Higher education', example: 'Ik studeer aan de **universiteit**. — I study at the university.' },

  { nl: 'mezelf', en: 'myself', level: 'A1', meaning: 'Referring to oneself', example: 'Ik help **mezelf**. — I help myself.' },



  { nl: 'fase', en: 'phase', level: 'A2', meaning: 'Stage', example: 'De eerste **fase** is moeilijk. — The first **phase** is difficult.', synonyms: 'form, stage' },

  { nl: 'technisch', en: 'technical', level: 'A2', meaning: 'Relating to technique', example: 'Een **technisch** probleem. — A technical problem.', synonyms: 'technical foul' },

  { nl: 'positief', en: 'positive', level: 'A1', meaning: 'Optimistic or plus', example: 'Hij blijft **positief**. — He stays positive.', synonyms: 'positive degree' },

  { nl: 'enigszins', en: 'somewhat', level: 'A2', meaning: 'A little', example: 'Het is **enigszins** moeilijk. — It is **somewhat** difficult.', synonyms: 'fairly, jolly, middling, moderately' },

  { nl: 'vandaan', en: 'from', level: 'A2', meaning: 'Origin', example: 'Waar kom je **vandaan**? — Where are you from?' },

  { nl: 'leger', en: 'army', level: 'A1', meaning: 'Military force', example: 'Het **leger** oefent. — The army is exercising.', synonyms: 'ground forces, regular army' },

  { nl: 'programma', en: 'program', level: 'A1', meaning: 'Planned events or software', example: 'Het tv-**programma** is leuk. — The TV program is fun.', synonyms: 'plan, programme' },

  { nl: 'gehouden', en: 'kept/held', level: 'A2', meaning: 'Retained or conducted', example: 'De vergadering is **gehouden**. — The meeting is held.', synonyms: 'continue, go along, go on, hold' },

  { nl: 'bewaren', en: 'to keep', level: 'A1', meaning: 'Store safely', example: 'Ik **bewaar** mijn boeken. — I keep my books.', synonyms: 'donjon, dungeon, livelihood, living' },

  { nl: 'zwak', en: 'weak', level: 'A1', meaning: 'Not strong', example: 'Hij is erg **zwak**. — He is very weak.', synonyms: 'washy, watery' },



  { nl: 'leider', en: 'leader', level: 'A1', meaning: 'Person in charge', example: 'De **leider** spreekt. — The leader speaks.', synonyms: 'drawing card, loss leader' },

  { nl: 'overtuigen', en: 'to convince', level: 'A2', meaning: 'Persuade', example: 'Ik probeer hem te **overtuigen**. — I try to convince him.', synonyms: 'convert, win over' },

  { nl: 'wapen', en: 'weapon', level: 'A1', meaning: 'Instrument to fight', example: 'Hij draagt een **wapen**. — He carries a weapon.', synonyms: 'arm, artillery, weapon system' },

  { nl: 'gewoonlijk', en: 'usually', level: 'A1', meaning: 'Normally', example: 'Ik kom **gewoonlijk** te laat. — I usually arrive late.', synonyms: 'commonly, normally, ordinarily, unremarkably' },

  { nl: 'middag', en: 'afternoon', level: 'A1', meaning: 'Middle of the day', example: 'In de **middag** ga ik sporten. — In the afternoon I exercise.', synonyms: 'good afternoon' },

  { nl: 'kennelijk', en: 'apparently', level: 'A2', meaning: 'Clearly seems', example: 'Hij is **kennelijk** ziek. — He is apparently sick.', synonyms: 'evidently, manifestly, obviously, ostensibly' },

  { nl: 'eenheid', en: 'unit', level: 'A2', meaning: 'Single part', example: 'Een **eenheid** van 10 personen. — A unit of 10 people.' },

  { nl: 'literatuur', en: 'literature', level: 'A2', meaning: 'Books and writings', example: 'Ik lees graag **literatuur**. — I like to read literature.', synonyms: 'lit' },

  { nl: 'erbij', en: 'with it', level: 'A2', meaning: 'Included', example: 'Het boek is **erbij**. — The book is included.' },

  { nl: 'instelling', en: 'institution', level: 'A2', meaning: 'Organization', example: 'De **instelling** helpt studenten. — The institution helps students.', synonyms: 'establishment' },



  { nl: 'brood', en: 'bread', level: 'A1', meaning: 'Food made from flour', example: 'Ik koop **brood** bij de bakker. — I buy **bread** at the bakery.', synonyms: 'boodle, breadstuff, cabbage, clams' },

  { nl: 'gemeenschap', en: 'community', level: 'A2', meaning: 'Group of people', example: 'De **gemeenschap** helpt elkaar. — The community helps each other.' },

  { nl: 'medisch', en: 'medical', level: 'A2', meaning: 'Related to medicine', example: 'Het is een **medisch** probleem. — It is a **medical** problem.', synonyms: 'checkup, health check, medical checkup, medical exam' },

  { nl: 'bevestigen', en: 'to confirm', level: 'A2', meaning: 'Agree or verify', example: 'Kun je dit **bevestigen**? — Can you **confirm** this?', synonyms: 'affirm, corroborate, reassert, substantiate' },

  { nl: 'heerlijk', en: 'delicious', level: 'A1', meaning: 'Very pleasant', example: 'De taart is **heerlijk**. — The cake is **delicious**.', synonyms: 'delightful' },

  { nl: 'onderdeel', en: 'part/component', level: 'A1', meaning: 'Piece of a whole', example: 'Een belangrijk **onderdeel**. — An important **part**.', synonyms: 'component part, constituent, element, factor' },

  { nl: 'officier', en: 'officer', level: 'A2', meaning: 'Military rank', example: 'De **officier** geeft orders. — The officer gives orders.', synonyms: 'military officer, officeholder' },

  { nl: 'geur', en: 'smell', level: 'A1', meaning: 'Odor', example: 'De **geur** van bloemen. — The scent of flowers.', synonyms: 'aroma, odor, odour, olfactory perception' },

  { nl: 'tellen', en: 'to count', level: 'A1', meaning: 'Add numbers', example: 'Ik **tel** tot tien. — I **count** to ten.', synonyms: 'counting, enumeration, numeration, reckoning' },

  { nl: 'buik', en: 'stomach', level: 'A1', meaning: 'Body part', example: 'Mijn **buik** doet pijn. — My **belly** hurts.', synonyms: 'abdomen, belly, breadbasket, tum' },



  { nl: 'rivier', en: 'river', level: 'A1', meaning: 'Flowing water', example: 'De **rivier** is breed. — The river is wide.' },

  { nl: 'ach', en: 'oh', level: 'A1', meaning: 'Expression of emotion', example: '**Ach**, dat is jammer. — Oh, that is a pity.' },

  { nl: 'verbinden', en: 'to connect', level: 'A2', meaning: 'Join together', example: 'We **verbinden** de kabels. — We **connect** the cables.', synonyms: 'associate, colligate, link, link up' },

  { nl: 'functioneren', en: 'to function', level: 'A2', meaning: 'Work properly', example: 'De machine **functioneert** goed. — The machine **functions** well.', synonyms: 'map, mapping, mathematical function, purpose' },

  { nl: 'aangezien', en: 'since/because', level: 'A2', meaning: 'For the reason that', example: '**Aangezien** het regent, blijven we thuis. — Since it rains, we stay home.' },

  { nl: 'dansen', en: 'to dance', level: 'A1', meaning: 'Move to music', example: 'Wij **dansen** op het feest. — We **dance** at the party.' },

  { nl: 'openbaar', en: 'public', level: 'A1', meaning: 'For everyone', example: 'Het park is **openbaar**. — The park is **public**.', synonyms: 'populace, world' },

  { nl: 'evenmin', en: 'neither', level: 'A2', meaning: 'Not either', example: 'Ik kan **evenmin** komen. — I **cannot** come either.' },

  { nl: 'eerlijk', en: 'honest', level: 'A1', meaning: 'Truthful', example: 'Wees **eerlijk** tegen hem. — Be **honest** to him.', synonyms: 'honorable' },

  { nl: 'verkeerd', en: 'wrong', level: 'A1', meaning: 'Incorrect', example: 'Dit antwoord is **verkeerd**. — This answer is **wrong**.', synonyms: 'damage, legal injury, wrongfulness' },



  { nl: 'tevoren', en: 'beforehand', level: 'A2', meaning: 'Earlier', example: 'We hebben **tevoren** besproken. — We have **previously** discussed.', synonyms: 'advance, ahead, in advance' },

  { nl: 'wilde', en: 'wanted', level: 'A1', meaning: 'Past of willen', example: 'Hij **wilde** niet komen. — He **wanted** not to come.', synonyms: 'desire, need, require, want' },

  { nl: 'flink', en: 'considerable', level: 'A2', meaning: 'Quite big', example: 'Hij werkt **flink** hard. — He works **quite** hard.' },

  { nl: 'voordeel', en: 'advantage', level: 'A1', meaning: 'Benefit', example: 'Het heeft veel **voordeel**. — It has much **advantage**.', synonyms: 'vantage' },

  { nl: 'dreigen', en: 'to threaten', level: 'A2', meaning: 'Show intention to harm', example: 'Hij **dreigt** met actie. — He **threatens** with action.', synonyms: 'endanger, imperil, jeopardise, jeopardize' },

  { nl: 'beurt', en: 'turn', level: 'A1', meaning: 'Opportunity to act', example: 'Het is mijn **beurt**. — It is my **turn**.', synonyms: 'bend, crook, turning, twist' },

  { nl: 'interessant', en: 'interesting', level: 'A1', meaning: 'Attracts attention', example: 'Een **interessant** boek. — An **interesting** book.', synonyms: 'concern, interest, occupy, worry' },

  { nl: 'wil', en: 'want/will', level: 'A1', meaning: 'Desire', example: 'Ik **wil** een appel. — I **want** an apple.' },

  { nl: 'opmerking', en: 'remark/comment', level: 'A2', meaning: 'Statement', example: 'Zijn **opmerking** is grappig. — His **remark** is funny.', synonyms: 'commentary, input' },

  { nl: 'prins', en: 'prince', level: 'A1', meaning: 'Royal male', example: 'De **prins** spreekt. — The prince speaks.' },



  { nl: 'best', en: 'best', level: 'A1', meaning: 'Most good', example: 'Dit is het **best**. — This is the **best**.', synonyms: 'topper' },

  { nl: 'seksueel', en: 'sexual', level: 'A2', meaning: 'Related to sex', example: 'Een **seksueel** probleem. — A **sexual** problem.' },

  { nl: 'blz.', en: 'page', level: 'A1', meaning: 'Abbreviation of bladzijde', example: 'Zie **blz.** 12. — See **page** 12.' },

  { nl: 'intussen', en: 'meanwhile', level: 'A2', meaning: 'During that time', example: '**Intussen** wachten we. — Meanwhile, we wait.', synonyms: 'interim, lag, meantime' },

  { nl: 'gezag', en: 'authority', level: 'A2', meaning: 'Power or control', example: 'Hij heeft **gezag** over het team. — He has **authority** over the team.', synonyms: 'authorisation, authorization, dominance, potency' },

  { nl: 'markt', en: 'market', level: 'A1', meaning: 'Place for buying/selling', example: 'De **markt** is druk. — The market is busy.', synonyms: 'market place, marketplace' },

  { nl: 'officieel', en: 'official', level: 'A1', meaning: 'Authorized', example: 'Het is **officieel** bevestigd. — It is **officially** confirmed.', synonyms: 'functionary' },

  { nl: 'baas', en: 'boss', level: 'A1', meaning: 'Manager', example: 'De **baas** is streng. — The boss is strict.', synonyms: 'chief, foreman, gaffer, hirer' },

  { nl: 'schoen', en: 'shoe', level: 'A1', meaning: 'Footwear', example: 'Mijn **schoen** is kapot. — My **shoe** is broken.' },

  { nl: 'lezer', en: 'reader', level: 'A1', meaning: 'Person who reads', example: 'De **lezer** geniet van het boek. — The reader enjoys the book.', synonyms: 'subscriber' },



  { nl: 'hè', en: 'eh', level: 'A1', meaning: 'Expression of surprise', example: '**Hè**, dat wist ik niet. — Huh, I did\'t know that.' },

  { nl: 'herhalen', en: 'to repeat', level: 'A1', meaning: 'Say again', example: 'Kun je dat **herhalen**? — Can you **repeat** that?', synonyms: 'ingeminate, iterate, reiterate, repetition' },

  { nl: 'geestelijk', en: 'spiritual', level: 'A2', meaning: 'Relating to the mind or spirit', example: 'Hij is **geestelijk** sterk. — He is mentally **strong**.', synonyms: 'religious' },

  { nl: 'zakken', en: 'to drop/fail', level: 'A1', meaning: 'Fall or fail', example: 'Hij **zakt** voor het examen. — He **fails** the exam.', synonyms: 'bead, drib, driblet, go wrong' },

  { nl: 'rapport', en: 'report', level: 'A1', meaning: 'Document with information', example: 'Het **rapport** is klaar. — The **report** is ready.', synonyms: 'account, study, written report' },

  { nl: 'ei', en: 'egg', level: 'A1', meaning: 'Food from a chicken', example: 'Een **ei** koken. — Cook an **egg**.', synonyms: 'eggs' },

  { nl: 'onderling', en: 'mutual', level: 'A2', meaning: 'Between each other', example: 'We hebben **onderling** afspraken gemaakt. — We have made **mutual** arrangements.', synonyms: 'common, reciprocal' },

  { nl: 'kruipen', en: 'to crawl', level: 'A1', meaning: 'Move on hands and knees', example: 'De baby **kruipt** over de vloer. — The baby **crawls** over the floor.', synonyms: 'front crawl' },

  { nl: 'bewustzijn', en: 'consciousness', level: 'A2', meaning: 'State of being aware', example: 'Het **bewustzijn** van het probleem groeit. — **Awareness** of the problem grows.', synonyms: 'awareness, cognisance, cognizance, knowingness' },

  { nl: 'gij', en: 'you (archaic/formal)', level: 'A2', meaning: 'Old-fashioned pronoun', example: '**Gij** zijt welkom. — You are welcome.' },



  { nl: 'wang', en: 'cheek', level: 'A1', meaning: 'Face part', example: 'Hij kust haar **wang**. — He kisses her **cheek**.', synonyms: 'impertinence, impudence' },

  { nl: 'norm', en: 'norm', level: 'A2', meaning: 'Standard or rule', example: 'Dit is de **norm**. — This is the **norm**.', synonyms: 'average' },

  { nl: 'boot', en: 'boat', level: 'A1', meaning: 'Water vehicle', example: 'De **boot** vaart snel. — The boat sails fast.', synonyms: 'gravy boat, gravy holder, sauceboat' },

  { nl: 'tegelijkertijd', en: 'simultaneously', level: 'A2', meaning: 'At the same time', example: 'Ze spreken **tegelijkertijd**. — They speak **simultaneously**.' },

  { nl: 'vloer', en: 'floor', level: 'A1', meaning: 'Surface of a room', example: 'De **vloer** is schoon. — The **floor** is clean.', synonyms: 'flooring, level, storey, story' },

  { nl: 'kader', en: 'framework', level: 'A2', meaning: 'Structure or scope', example: 'Binnen dit **kader** werken we. — Within this framework we work.', synonyms: 'fabric, model, theoretical account' },

  { nl: 'rook', en: 'smoke', level: 'A1', meaning: 'From fire', example: 'Er komt **rook** uit de schoorsteen. — **Smoke** comes from the chimney.', synonyms: 'fume, smoking' },

  { nl: 'tevreden', en: 'satisfied', level: 'A1', meaning: 'Content', example: 'Ik ben **tevreden** met het resultaat. — I am **satisfied** with the result.', synonyms: 'fulfil, fulfill, gratify, satisfy' },

  { nl: 'spoedig', en: 'soon', level: 'A2', meaning: 'In a short time', example: 'We komen **spoedig** terug. — We come **soon** back.', synonyms: 'before long, presently, shortly' },

  { nl: 'waard', en: 'worthy', level: 'A2', meaning: 'Having value', example: 'Hij is **waard** om te winnen. — He is **worthy** to win.' },



  { nl: 'commissie', en: 'committee', level: 'A2', meaning: 'Group with a task', example: 'De **commissie** beslist. — The committee decides.', synonyms: 'citizens committee, commission' },

  { nl: 'kantoor', en: 'office', level: 'A1', meaning: 'Workplace', example: 'Ik werk op een **kantoor**. — I work at an **office**.', synonyms: 'agency, authority, bureau, business office' },

  { nl: 'gedeelte', en: 'part', level: 'A1', meaning: 'Piece of a whole', example: 'Een **gedeelte** van het gebouw. — A **part** of the building.', synonyms: 'component, component part, constituent, portion' },

  { nl: 'afdeling', en: 'department', level: 'A1', meaning: 'Section of organization', example: 'De **afdeling** is druk. — The department is busy.', synonyms: 'section' },

  { nl: 'besteden', en: 'to spend', level: 'A2', meaning: 'Use resources/time', example: 'We **besteden** tijd aan leren. — We **spend** time on learning.', synonyms: 'drop, expend, pass' },

  { nl: 'maatregel', en: 'measure', level: 'A2', meaning: 'Action to control', example: 'De overheid neemt een **maatregel**. — The authorities take a **measure**.', synonyms: 'amount, quantity, step' },

  { nl: 'voedsel', en: 'food', level: 'A1', meaning: 'Something to eat', example: 'Het **voedsel** is vers. — The **food** is fresh.', synonyms: 'nutrient, solid food' },

  { nl: 'ruimtelijk', en: 'spatial', level: 'A2', meaning: 'Relating to space', example: 'Een **ruimtelijk** ontwerp. — A spatial design.', synonyms: 'spacial' },

  { nl: 'vermoeden', en: 'to suspect', level: 'A2', meaning: 'Think likely', example: 'Ik **vermoed** dat hij komt. — I suspect he comes.', synonyms: 'defendant' },

  { nl: 'kolonel', en: 'colonel', level: 'A2', meaning: 'Military rank', example: 'De **kolonel** inspecteert. — The colonel inspects.' },



  { nl: 'dromen', en: 'to dream', level: 'A1', meaning: 'Experience images in sleep', example: 'Ik **droom** van reizen. — I dream of traveling.', synonyms: 'dreaming' },

  { nl: 'boodschap', en: 'message/groceries', level: 'A1', meaning: 'Information or shopping', example: 'Ik heb een **boodschap** voor jou. — I have a message for you.', synonyms: 'content, food market, foodstuff, grocery' },

  { nl: 'verbazen', en: 'to surprise', level: 'A2', meaning: 'Cause astonishment', example: 'Het **verbaast** me. — It **surprises** me.' },

  { nl: 'opmerken', en: 'to notice/remark', level: 'A2', meaning: 'Observe or say', example: 'Ik **merk** dat hij laat is. — I notice he is late.', synonyms: 'comment, input, observance, observation' },

  { nl: 'jood', en: 'Jew', level: 'A2', meaning: 'Person of Jewish faith', example: 'De **jood** viert feest. — The Jew celebrates.' },

  { nl: 'krachtig', en: 'powerful', level: 'A2', meaning: 'Strong', example: 'Een **krachtig** argument. — A strong argument.', synonyms: 'knock-down' },

  { nl: 'christelijk', en: 'Christian', level: 'A1', meaning: 'Related to Christianity', example: 'Een **christelijk** feest. — A Christian celebration.' },

  { nl: 'regelmatig', en: 'regular', level: 'A1', meaning: 'Happens often', example: 'Hij sport **regelmatig**. — He exercises regularly.', synonyms: 'fixture, habitue' },

  { nl: 'winter', en: 'winter', level: 'A1', meaning: 'Cold season', example: 'In de **winter** sneeuwt het. — In winter it snows.', synonyms: 'overwinter, wintertime' },

  { nl: 'branden', en: 'to burn', level: 'A1', meaning: 'Set on fire', example: 'Het hout **brandt** in de kachel. — The wood **burns** in the stove.', synonyms: 'burning, sunburn, suntan, tan' },



  { nl: 'slag', en: 'blow/strike', level: 'A2', meaning: 'Hit or battle', example: 'Hij kreeg een **slag** op zijn arm. — He got a blow on his arm.', synonyms: 'bump, work stoppage' },

  { nl: 'vrolijk', en: 'cheerful', level: 'A1', meaning: 'Happy', example: 'Ze voelt zich **vrolijk** vandaag. — She feels cheerful today.', synonyms: 'pollyannaish, upbeat' },

  { nl: 'maan', en: 'moon', level: 'A1', meaning: 'Earth’s satellite', example: 'De **maan** schijnt helder. — The moon shines brightly.' },

  { nl: 'zuiver', en: 'pure', level: 'A2', meaning: 'Clean or untainted', example: 'Het water is **zuiver**. — The water is pure.', synonyms: 'arrant, complete, consummate, double-dyed' },

  { nl: 'kilometer', en: 'kilometer', level: 'A1', meaning: 'Distance measure', example: 'Het is vijf **kilometer** ver. — It is five **kilometers** away.', synonyms: 'kilometre, klick' },

  { nl: 'woede', en: 'anger', level: 'A2', meaning: 'Strong feeling of anger', example: 'Hij voelde **woede**. — He felt anger.', synonyms: 'angriness, choler, ire' },

  { nl: 'wens', en: 'wish', level: 'A1', meaning: 'Desire', example: 'Mijn **wens** is gezond te blijven. — My wish is to stay healthy.', synonyms: 'indirect request, want, wishing' },

  { nl: 'miljoen', en: 'million', level: 'A1', meaning: '1,000,000', example: 'Er wonen een **miljoen** mensen in de stad. — A million people live in the city.', synonyms: 'billion, gazillion, jillion, meg' },

  { nl: 'seconde', en: 'second', level: 'A1', meaning: 'Unit of time', example: 'Wacht een **seconde**. — Wait a second.', synonyms: 'bit, minute, moment, sec' },

  { nl: 'sfeer', en: 'atmosphere', level: 'A2', meaning: 'Mood or environment', example: 'De **sfeer** is gezellig. — The atmosphere is cozy.', synonyms: 'ambiance, ambience, atm, standard atmosphere' },



  { nl: 'bron', en: 'source', level: 'A2', meaning: 'Origin of information or water', example: 'Dit is de **bron** van het nieuws. — This is the source of the news.', synonyms: 'beginning, origin, root, rootage' },

  { nl: 'rijk', en: 'rich', level: 'A1', meaning: 'Wealthy', example: 'Hij is erg **rijk**. — He is very rich.', synonyms: 'rich people' },

  { nl: 'bier', en: 'beer', level: 'A1', meaning: 'Alcoholic drink', example: 'Ik drink een **bier**. — I drink a beer.' },

  { nl: 'voortdurend', en: 'constantly', level: 'A2', meaning: 'All the time', example: 'Hij klaagt **voortdurend**. — He complains constantly.', synonyms: 'always, forever, incessantly, invariably' },

  { nl: 'overeind', en: 'upright', level: 'A2', meaning: 'Standing up', example: 'Hij blijft **overeind**. — He stays upright.', synonyms: 'upright piano, vertical' },

  { nl: 'vertrek', en: 'departure/room', level: 'A2', meaning: 'Leaving place or a room', example: 'Het **vertrek** van de trein is om 10 uur. — The **departure** of the train is at 10 o\'clock.', synonyms: 'deviation, difference, divergence, elbow room' },

  { nl: 'droog', en: 'dry', level: 'A1', meaning: 'Not wet', example: 'De kleding is **droog**. — The clothing is **dry**.', synonyms: 'dry out, prohibitionist' },

  { nl: 'collega', en: 'colleague', level: 'A1', meaning: 'Workmate', example: 'Mijn **collega** helpt me. — My colleague helps me.', synonyms: 'co-worker, confrere, fellow, fellow worker' },

  { nl: 'ophouden', en: 'to stop', level: 'A2', meaning: 'Cease doing something', example: 'Hij moet met roken **ophouden**. — He must quit smoking.', synonyms: 'halt, stoppage' },

  { nl: 'toevallig', en: 'coincidentally', level: 'A2', meaning: 'By chance', example: 'We kwamen **toevallig** elkaar tegen. — We happened to meet.', synonyms: 'coincidently' },



  { nl: 'uitstekend', en: 'excellent', level: 'A1', meaning: 'Very good', example: 'Het eten is **uitstekend**. — The food is excellent.', synonyms: 'fantabulous, first-class, splendid' },

  { nl: 'aanvankelijk', en: 'initially', level: 'A2', meaning: 'At the beginning', example: 'Het was **aanvankelijk** moeilijk. — It was initially difficult.', synonyms: 'ab initio' },

  { nl: 'bewijs', en: 'proof', level: 'A1', meaning: 'Evidence', example: 'Hij levert **bewijs**. — He provides evidence.', synonyms: 'cogent evidence' },

  { nl: 'aanzien', en: 'esteem/respect', level: 'A2', meaning: 'Regard for someone', example: 'Hij heeft veel **aansien**. — He has much prestige.', synonyms: 'admiration, regard' },

  { nl: 'Jezus', en: 'Jesus', level: 'A1', meaning: 'Religious figure', example: '**Jezus** wordt in het christendom vereerd. — Jesus is honored in Christianity.', synonyms: 'the nazarene' },

  { nl: 'actie', en: 'action', level: 'A1', meaning: 'Something done', example: 'Er wordt een **actie** gepland. — An action is being planned.', synonyms: 'activeness, activity' },

  { nl: 'bord', en: 'plate/board', level: 'A1', meaning: 'Dish or sign', example: 'Het **bord** is vol. — The plate is full.', synonyms: 'home, home base, home plate, plank' },

  { nl: 'gezelschap', en: 'company/companionship', level: 'A2', meaning: 'Group of people', example: 'Ik geniet van **gezelschap**. — I enjoy company.', synonyms: 'fellowship, society' },

  { nl: 'terugkomen', en: 'to return', level: 'A1', meaning: 'Come back', example: 'Hij zal morgen **terugkomen**. — He will return tomorrow.', synonyms: 'homecoming, tax return' },

  { nl: 'jeugd', en: 'youth', level: 'A1', meaning: 'Time of being young', example: 'In mijn **jeugd** speelde ik veel. — In my youth I played much.', synonyms: 'spring chicken, young, young person, younker' },



  { nl: 'plezier', en: 'pleasure/fun', level: 'A1', meaning: 'Enjoyment', example: 'Ik heb veel **plezier**. — I have much pleasure.', synonyms: 'delight, joy, merriment, play' },

  { nl: 'voorkeur', en: 'preference', level: 'A2', meaning: 'Choice or liking', example: 'Mijn **voorkeur** gaat uit naar koffie. — My preference is for coffee.', synonyms: 'orientation, penchant, predilection, taste' },

  { nl: 'snijden', en: 'to cut', level: 'A1', meaning: 'Use a knife', example: 'Ik **snijd** het brood. — I cut the bread.' },

  { nl: 'schoon', en: 'clean/beautiful', level: 'A1', meaning: 'Free of dirt or attractive', example: 'De kamer is **schoon**. — The room is **clean**.', synonyms: 'make clean' },

  { nl: 'generaal', en: 'general', level: 'A2', meaning: 'Military rank', example: 'De **generaal** geeft orders. — The general gives orders.', synonyms: 'full general, superior general' },

  { nl: 'achtergrond', en: 'background', level: 'A1', meaning: 'Context or scenery', example: 'De **achtergrond** is blauw. — The background is blue.', synonyms: 'ground' },

  { nl: 'psychologie', en: 'psychology', level: 'A2', meaning: 'Study of mind', example: 'Ik studeer **psychologie**. — I study psychology.', synonyms: 'psychological science' },

  { nl: 'dertig', en: 'thirty', level: 'A1', meaning: 'Number 30', example: 'Hij is **dertig** jaar oud. — He is thirty years old.', synonyms: 'xxx' },

  { nl: 'lichamelijk', en: 'physical', level: 'A2', meaning: 'Related to the body', example: 'Een **lichamelijke** oefening. — A physical exercise.' },

  { nl: 'plegen', en: 'to commit', level: 'A2', meaning: 'Do an act, usually crime', example: 'Hij **pleegt** een misdaad. — He commits a crime.', synonyms: 'consecrate, dedicate, devote, give' },



  { nl: 'verantwoordelijkheid', en: 'responsibility', level: 'A2', meaning: 'Duty to take care of something', example: 'Hij draagt veel **verantwoordelijkheid**. — He carries much responsibility.', synonyms: 'duty, obligation, province' },

  { nl: 'eigenschap', en: 'characteristic/trait', level: 'A2', meaning: 'Quality of a person or thing', example: 'Geduld is een goede **eigenschap**. — Patience is a good quality.', synonyms: 'feature' },

  { nl: 'techniek', en: 'technique/technology', level: 'A2', meaning: 'Method or skill', example: 'De **techniek** is verbeterd. — The **technique** is improved.', synonyms: 'applied science, engineering, engineering science, proficiency' },

  { nl: 'vechten', en: 'to fight', level: 'A1', meaning: 'Engage in combat', example: 'Ze **vechten** op het plein. — They fight in the square.', synonyms: 'battle, combat, conflict, engagement' },

  { nl: 'gras', en: 'grass', level: 'A1', meaning: 'Plant covering the ground', example: 'Het **gras** is groen. — The grass is green.' },

  { nl: 'mei', en: 'May', level: 'A1', meaning: 'Month', example: 'In **mei** begint de lente. — In May spring begins.' },

  { nl: 'pad', en: 'path', level: 'A1', meaning: 'Trail or walkway', example: 'Het **pad** loopt door het bos. — The path runs through the forest.', synonyms: 'way' },

  { nl: 'waarschuwen', en: 'to warn', level: 'A2', meaning: 'Alert someone', example: 'Ik **waarschuw** je voor gevaar. — I warn you of danger.', synonyms: 'admonish, discourage, monish' },

  { nl: 'bezit', en: 'possession', level: 'A1', meaning: 'Something owned', example: 'Het huis is zijn **bezit**. — The house is his **possession**.', synonyms: 'ownership' },

  { nl: 'financieel', en: 'financial', level: 'A2', meaning: 'Related to money', example: 'Een **financieel** plan. — A financial plan.', synonyms: 'fiscal' },



  { nl: 'tekenen', en: 'to draw/sign', level: 'A1', meaning: 'Make a drawing or signature', example: 'Ik **teken** een cirkel. — I draw a circle.', synonyms: 'attracter, attraction, attractor, drawing card' },

  { nl: 'bereiden', en: 'to prepare', level: 'A1', meaning: 'Make ready', example: 'Ik **bereid** het eten. — I prepare the food.', synonyms: 'cook, fix, gear up, make' },

  { nl: 'keel', en: 'throat', level: 'A1', meaning: 'Part of the neck', example: 'Mijn **keel** doet pijn. — My throat hurts.', synonyms: 'pharynx' },

  { nl: 'plaatsvinden', en: 'to take place', level: 'A2', meaning: 'Happen', example: 'Het feest zal hier **plaatsvinden**. — The party will take place here.' },

  { nl: 'beïnvloeden', en: 'to influence', level: 'A2', meaning: 'Have effect on', example: 'Hij kan de beslissing **beïnvloeden**. — He can influence the decision.' },

  { nl: 'handeling', en: 'action', level: 'A2', meaning: 'Act or deed', example: 'Een verkeerde **handeling**. — A wrong action.', synonyms: 'activeness, activity' },

  { nl: 'actief', en: 'active', level: 'A1', meaning: 'Engaged in activity', example: 'Hij is erg **actief**. — He is very active.', synonyms: 'active agent, active voice' },

  { nl: 'verzamelen', en: 'to collect', level: 'A1', meaning: 'Gather things', example: 'Ik **verzamel** munten. — I collect coins.', synonyms: 'accumulate, amass, compile, hoard' },

  { nl: 'kerel', en: 'guy/fellow', level: 'A1', meaning: 'Informal man', example: 'Die **kerel** is aardig. — That guy is nice.', synonyms: 'associate, blighter, bloke, bozo' },

  { nl: 'wagen', en: 'car/wagon', level: 'A1', meaning: 'Vehicle', example: 'De **wagen** staat buiten. — The **car** is outside.', synonyms: 'auto, automobile, black maria, machine' },



  { nl: 'wenden', en: 'to turn', level: 'A2', meaning: 'Change direction', example: 'We **wenden** naar links. — We turn left.', synonyms: 'bend, crook, turning, twist' },

  { nl: 'vreemde', en: 'stranger/foreign', level: 'A1', meaning: 'Unknown person or foreign', example: 'Een **vreemde** man. — A strange man.', synonyms: 'alien, strange, unknown' },

  { nl: 'concreet', en: 'concrete', level: 'A2', meaning: 'Specific, tangible', example: 'Een **concreet** voorbeeld. — A concrete example.' },

  { nl: 'arbeider', en: 'worker', level: 'A1', meaning: 'Manual laborer', example: 'De **arbeider** werkt hard. — The worker works hard.', synonyms: 'prole, proletarian' },

  { nl: 'pak', en: 'suit/package', level: 'A1', meaning: 'Clothing or bundle', example: 'Hij draagt een **pak**. — He wears a suit.', synonyms: 'bundle, case, causa, cause' },

  { nl: 'broek', en: 'pants', level: 'A1', meaning: 'Clothing for legs', example: 'Mijn **broek** is blauw. — My pants are blue.', synonyms: 'bloomers, drawers, knickers, pant' },

  { nl: 'enz.', en: 'etc.', level: 'A1', meaning: 'Et cetera', example: 'Boeken, tijdschriften, **enz.** — Books, magazines, etc.', synonyms: 'etcetera' },

  { nl: 'prettig', en: 'pleasant', level: 'A1', meaning: 'Enjoyable', example: 'Een **prettig** gesprek. — A pleasant conversation.' },

  { nl: 'ster', en: 'star', level: 'A1', meaning: 'Celestial body', example: 'De **ster** schittert. — The star glitters.', synonyms: 'ace, adept, champion, genius' },

  { nl: 'geheim', en: 'secret', level: 'A2', meaning: 'Hidden information', example: 'Het blijft een **geheim**. — It remains a secret.', synonyms: 'arcanum' },



  { nl: 'golf', en: 'wave', level: 'A1', meaning: 'Water wave', example: 'De **golf** breekt op het strand. — The wave breaks on the beach.', synonyms: 'moving ridge' },

  { nl: 'gedicht', en: 'poem', level: 'A1', meaning: 'Verse composition', example: 'Ik lees een **gedicht**. — I read a poem.', synonyms: 'verse form' },

  { nl: 'machine', en: 'machine', level: 'A1', meaning: 'Mechanical device', example: 'De **machine** werkt goed. — The machine works well.' },

  { nl: 'lijf', en: 'body', level: 'A1', meaning: 'Human body', example: 'Zijn **lijf** is sterk. — His body is strong.', synonyms: 'organic structure, physical structure' },

  { nl: 'fel', en: 'bright/fierce', level: 'A2', meaning: 'Intense', example: 'Een **fel** licht. — A bright light.', synonyms: 'brilliant, ferocious, furious, savage' },

  { nl: 'groei', en: 'growth', level: 'A2', meaning: 'Increase or development', example: 'De **groei** van de plant is snel. — The growth of the plant is fast.', synonyms: 'development, growing, maturation, ontogenesis' },

  { nl: 'verzet', en: 'resistance', level: 'A2', meaning: 'Opposition', example: 'Het **verzet** is sterk. — The **resistance** is strong.', synonyms: 'opposition' },

  { nl: 'terugkeren', en: 'to return', level: 'A1', meaning: 'Come back', example: 'Hij zal morgen **terugkeren**. — He will return tomorrow.', synonyms: 'homecoming, tax return' },

  { nl: 'energie', en: 'energy', level: 'A1', meaning: 'Power to do work', example: 'Ik heb veel **energie** vandaag. — I have much energy today.', synonyms: 'free energy, vigor, vigour, zip' },

  { nl: 'nat', en: 'wet', level: 'A1', meaning: 'Containing water', example: 'Mijn jas is **nat**. — My jacket is wet.', synonyms: 'moisture' },



  { nl: 'gouden', en: 'golden', level: 'A2', meaning: 'Made of gold or golden-colored', example: 'Ze draagt een **gouden** ring. — She wears a golden ring.', synonyms: 'aureate, gilded, gilt, gold' },

  { nl: 'duur', en: 'expensive', level: 'A1', meaning: 'Costly', example: 'Deze tas is **duur**. — This bag is expensive.' },

  { nl: 'feest', en: 'party/celebration', level: 'A1', meaning: 'Social gathering', example: 'We gaan naar een **feest**. — We go to a party.', synonyms: 'festivity, jubilation, political party' },

  { nl: 'varen', en: 'to sail', level: 'A1', meaning: 'Travel by boat', example: 'Ze **varen** op zee. — They sail at sea.', synonyms: 'canvas, canvass, cruise, sheet' },

  { nl: 'vijand', en: 'enemy', level: 'A2', meaning: 'Opponent', example: 'De soldaten bestrijden de **vijand**. — The soldiers fight the enemy.', synonyms: 'foe, foeman, opposition' },

  { nl: 'verwachting', en: 'expectation', level: 'A2', meaning: 'Anticipation', example: 'De **verwachting** was hoog. — The **expectation** was high.', synonyms: 'anticipation, outlook, prospect' },

  { nl: 'liever', en: 'prefer/rather', level: 'A1', meaning: 'Preference', example: 'Ik drink **liever** thee dan koffie. — I prefer tea to coffee.', synonyms: 'choose, instead, kind of, kinda' },

  { nl: 'verlenen', en: 'to grant', level: 'A2', meaning: 'Give or provide', example: 'De gemeente **verleent** een vergunning. — The municipality **grants** a permit.', synonyms: 'subsidisation, subsidization' },

  { nl: 'beginsel', en: 'principle', level: 'A2', meaning: 'Basic rule', example: 'Eerlijkheid is een **beginsel**. — Honesty is a principle.', synonyms: 'rule' },

  { nl: 'inmiddels', en: 'meanwhile', level: 'A2', meaning: 'At the same time', example: 'Ik heb **inmiddels** gegeten. — I have meanwhile eaten.', synonyms: 'interim, lag, meantime' },



  { nl: 'vervangen', en: 'to replace', level: 'A2', meaning: 'Substitute', example: 'Hij wordt door een ander **vervangen**. — He will be replaced by another.', synonyms: 'supercede, supersede, supervene upon, supplant' },

  { nl: 'ongetwijfeld', en: 'undoubtedly', level: 'B1', meaning: 'Without doubt', example: 'Het is **ongetwijfeld** waar. — It is **undoubtedly** true.', synonyms: 'doubtless, doubtlessly' },

  { nl: 'mompelen', en: 'to mumble', level: 'B1', meaning: 'Speak quietly', example: 'Hij **mompelt** iets onverstaanbaars. — He mumbles something unintelligible.', synonyms: 'maunder, mussitate, mutter' },

  { nl: 'vergadering', en: 'meeting', level: 'A2', meaning: 'Gathering of people', example: 'De **vergadering** begint om 9 uur. — The **meeting** starts at 9 o\'clock.', synonyms: 'get together, group meeting' },

  { nl: 'aangeven', en: 'to indicate', level: 'A2', meaning: 'Show or report', example: 'Hij **geeft** de richting **aan**. — He gives the direction.', synonyms: 'bespeak, betoken, designate, point' },

  { nl: 'handel', en: 'trade/business', level: 'A2', meaning: 'Buying and selling', example: 'Hij doet in **handel**. — He deals in commerce.', synonyms: 'business concern, business enterprise, business organisation, business organization' },

  { nl: 'nek', en: 'neck', level: 'A1', meaning: 'Part connecting head and body', example: 'Mijn **nek** doet pijn. — My neck hurts.', synonyms: 'cervix' },

  { nl: 'winkel', en: 'shop/store', level: 'A1', meaning: 'Place to buy things', example: 'Ik ga naar de **winkel**. — I go to the store.', synonyms: 'fund, stock, workshop' },

  { nl: 'wandelen', en: 'to walk', level: 'A1', meaning: 'Go on foot', example: 'We **wandelen** in het park. — We walk in the park.', synonyms: 'pass, walking' },

  { nl: 'behoeven', en: 'to need', level: 'B1', meaning: 'Require', example: 'Je hoeft niet alles te **behoeven**. — You need not everything.', synonyms: 'demand, want' },



  { nl: 'rusten', en: 'to rest', level: 'A1', meaning: 'Relax', example: 'Hij gaat even **rusten**. — He goes to rest.', synonyms: 'balance, ease, relaxation, remainder' },

  { nl: 'zorgvuldig', en: 'careful', level: 'B1', meaning: 'With attention', example: 'Werk **zorgvuldig** aan het project. — Work carefully on the project.', synonyms: 'heedful' },

  { nl: 'auteur', en: 'author', level: 'A1', meaning: 'Writer', example: 'De **auteur** signeert boeken. — The author signs books.', synonyms: 'generator, source, writer' },

  { nl: 'aanbieden', en: 'to offer', level: 'A1', meaning: 'Give or present', example: 'Ik **bied** hulp **aan**. — I offer help.', synonyms: 'offering' },

  { nl: 'heersen', en: 'to rule', level: 'B1', meaning: 'Govern', example: 'De koning **heerst** over het land. — The king **reigns** over the country.', synonyms: 'convention, formula, normal, pattern' },

  { nl: 'steunen', en: 'to support', level: 'A2', meaning: 'Help or back', example: 'Ze **steunt** haar vriend. — She supports her friend.' },

  { nl: 'reeks', en: 'series', level: 'A2', meaning: 'Sequence', example: 'Een **reeks** vragen. — A series of questions.', synonyms: 'serial' },

  { nl: 'procent', en: 'percent', level: 'A1', meaning: 'Per hundred', example: 'Tien **procent** korting. — Ten percent discount.', synonyms: 'pct, per centum, percentage' },

  { nl: 'veronderstellen', en: 'to assume', level: 'B1', meaning: 'Suppose', example: 'Ik **veronderstel** dat het klopt. — I suppose it is correct.', synonyms: 'adopt, presume, take on, take over' },

  { nl: 'divers', en: 'various', level: 'A2', meaning: 'Different', example: 'Er zijn **diverse** mogelijkheden. — There are diverse possibilities.', synonyms: 'assorted, respective, several' },



  { nl: 'uitsluiten', en: 'to exclude', level: 'B1', meaning: 'Leave out', example: 'We moeten niemand **uitsluiten**. — We must not exclude anyone.', synonyms: 'except, keep out, leave off, leave out' },

  { nl: 'museum', en: 'museum', level: 'A1', meaning: 'Place with exhibits', example: 'Het **museum** is interessant. — The museum is interesting.' },

  { nl: 'katholiek', en: 'Catholic', level: 'A1', meaning: 'Relating to Catholicism', example: 'Ze is **katholiek**. — She is Catholic.' },

  { nl: 'strak', en: 'tight', level: 'A2', meaning: 'Firm or neat', example: 'Het touw zit **strak**. — The rope is tight.', synonyms: 'taut' },

  { nl: 'buitenlands', en: 'foreign', level: 'A2', meaning: 'From another country', example: 'Ze spreekt **buitenlands**. — She speaks foreign language.', synonyms: 'strange' },

  { nl: 'regelen', en: 'to arrange', level: 'A1', meaning: 'Organize', example: 'Ik moet alles **regelen**. — I must arrange everything.', synonyms: 'fix up, set up' },

  { nl: 'doden', en: 'to kill', level: 'B1', meaning: 'Cause death', example: 'De oorlog **doodde** velen. — The war **killed** many.', synonyms: 'killing' },

  { nl: 'Christus', en: 'Christ', level: 'A1', meaning: 'Religious figure', example: '**Christus** wordt vereerd in kerken. — Christ is honored in churches.', synonyms: 'messiah, the nazarene' },

  { nl: 'opleiding', en: 'education/training', level: 'A1', meaning: 'Formal learning', example: 'Hij volgt een **opleiding**. — He follows training.', synonyms: 'breeding, didactics, educational activity, grooming' },

  { nl: 'verschrikkelijk', en: 'terrible', level: 'A2', meaning: 'Very bad', example: 'Het was een **verschrikkelijk** ongeluk. — It was a terrible accident.', synonyms: 'abominable, atrocious, awful, dire' },



  { nl: 'realiseren', en: 'to realize', level: 'B1', meaning: 'Become aware or make real', example: 'Hij **realiseerde** zich zijn fout. — He realized his mistake.', synonyms: 'agnise, agnize, realise, recognise' },

  { nl: 'ambtenaar', en: 'civil servant', level: 'A2', meaning: 'Government worker', example: 'De **ambtenaar** helpt bij papieren. — The civil servant helps with papers.' },

  { nl: 'steun', en: 'support', level: 'A1', meaning: 'Help', example: 'Hij biedt **steun** aan. — He offers support.' },

  { nl: 'redelijk', en: 'reasonable', level: 'A2', meaning: 'Fair', example: 'Het is een **redelijk** voorstel. — It is a **reasonable** proposal.', synonyms: 'fair, fairish, sensible' },

  { nl: 'cultureel', en: 'cultural', level: 'A2', meaning: 'Relating to culture', example: 'Een **cultureel** evenement. — A cultural event.', synonyms: 'ethnic, ethnical' },

  { nl: 'hanteren', en: 'to handle', level: 'B1', meaning: 'Manage or use', example: 'Ze kan goed **hanteren**. — She can handle well.', synonyms: 'care, deal, grip, handgrip' },

  { nl: 'twaalf', en: 'twelve', level: 'A1', meaning: 'Number 12', example: 'Het is **twaalf** uur. — It is **twelve** o\'clock.', synonyms: 'dozen, xii' },

  { nl: 'waarnemen', en: 'to observe', level: 'B1', meaning: 'Notice', example: 'Hij **neemt** alles goed **waar**. — He takes everything well.', synonyms: 'detect, discover, find, mention' },

  { nl: 'uitzien', en: 'to look/appear', level: 'A2', meaning: 'Have appearance', example: 'Ze **ziet** goed **uit**. — She looks good.', synonyms: 'aspect, expression, face, facial expression' },

  { nl: 'omtrent', en: 'about/regarding', level: 'A2', meaning: 'Concerning', example: 'Het gesprek gaat **omtrent** school. — The conversation is about school.', synonyms: 'approximately, around, astir, close to' },



  { nl: 'bus', en: 'bus', level: 'A1', meaning: 'Vehicle for public transport', example: 'Ik neem de **bus** naar school. — I take the bus to school.', synonyms: 'autobus, bus topology, charabanc, coach' },

  { nl: 'gewoonte', en: 'habit', level: 'A1', meaning: 'Regular practice', example: 'Roken is een slechte **gewoonte**. — Smoking is a bad habit.', synonyms: 'use, wont' },

  { nl: 'onderscheiden', en: 'to distinguish', level: 'B1', meaning: 'Recognize differences', example: 'We moeten de kleuren goed **onderscheiden**. — We must distinguish the colors well.', synonyms: 'differentiate, discern, make out, pick out' },

  { nl: 'gulden', en: 'guilder', level: 'A1', meaning: 'Old Dutch currency', example: 'Vroeger betaalde men met een **gulden**. — Previously people paid with a guilder.', synonyms: 'florin, gulden' },

  { nl: 'kleed', en: 'dress/rug', level: 'A1', meaning: 'Clothing or floor covering', example: 'Ze draagt een mooi **kleed**. — She wears a beautiful dress.', synonyms: 'attire, carpet, carpeting, frock' },

  { nl: 'verzoek', en: 'request', level: 'A2', meaning: 'Ask for something', example: 'Ik doe een **verzoek** om hulp. — I make a request for help.', synonyms: 'asking, petition, postulation' },

  { nl: 'constateren', en: 'to notice/observe', level: 'B1', meaning: 'Recognize a fact', example: 'Ik **constateer** dat het regent. — I observe that it rains.', synonyms: 'detect, discover, find, mention' },

  { nl: 'luid', en: 'loud', level: 'A1', meaning: 'High volume', example: 'De muziek is **luid**. — The music is **loud**.', synonyms: 'brassy, cheap, flash, flashy' },

  { nl: 'daad', en: 'deed/action', level: 'A1', meaning: 'Something done', example: 'Het was een moedige **daad**. — It was a brave deed.', synonyms: 'act, activeness, activity, human action' },

  { nl: 'vlucht', en: 'flight/flee', level: 'A2', meaning: 'Escape or plane trip', example: 'De **vlucht** was vertraagd. — The **flight** was delayed.', synonyms: 'fly, flying, take flight' },



  { nl: 'trek', en: 'pull/draw', level: 'A2', meaning: 'Draw or attract', example: 'Hij **trekt** de deur open. — He pulls the door open.', synonyms: 'attracter, attraction, attractor, drawing card' },

  { nl: 'leerling', en: 'student/pupil', level: 'A1', meaning: 'Person who learns', example: 'De **leerling** maakt zijn huiswerk. — The student does his homework.', synonyms: 'bookman, educatee, scholar, scholarly person' },

  { nl: 'nauw', en: 'narrow', level: 'A1', meaning: 'Small width', example: 'Het pad is **nauw**. — The path is narrow.', synonyms: 'contract' },

  { nl: 'verloren', en: 'lost', level: 'A1', meaning: 'Unable to find', example: 'Ik ben mijn sleutel **verloren**. — I have lost my key.', synonyms: 'doomed, lose' },

  { nl: 'koken', en: 'to cook', level: 'A1', meaning: 'Prepare food', example: 'Ik **kook** het avondeten. — I cook the dinner.' },

  { nl: 'bloot', en: 'bare/naked', level: 'A2', meaning: 'Without covering', example: 'Hij liep **bloot** in het water. — He walked naked in the water.', synonyms: 'air, au naturel, defenseless, nude' },

  { nl: 'directeur', en: 'director', level: 'A1', meaning: 'Leader of organization', example: 'De **directeur** geeft instructies. — The director gives instructions.', synonyms: 'manager, managing director' },

  { nl: 'spijten', en: 'to regret', level: 'B1', meaning: 'Feel sorry', example: 'Het **spijt** me dat ik te laat ben. — I am sorry I am late.', synonyms: 'repent, rue, ruefulness, sorrow' },

  { nl: 'dak', en: 'roof', level: 'A1', meaning: 'Top of a building', example: 'Het **dak** is rood. — The **roof** is red.' },

  { nl: 'evenwel', en: 'however', level: 'B1', meaning: 'Nevertheless', example: 'Het regende, **evenwel** gingen ze wandelen. — It rained, however they went for a walk.', synonyms: 'even so, nevertheless, nonetheless, notwithstanding' },



  { nl: 'god', en: 'God', level: 'A1', meaning: 'Supreme being', example: '**God** wordt vereerd. — God is honored.', synonyms: 'deity, divinity, immortal' },

  { nl: 'hals', en: 'neck', level: 'A1', meaning: 'Part connecting head and body', example: 'Mijn **hals** doet pijn. — My neck hurts.', synonyms: 'cervix' },

  { nl: 'geel', en: 'yellow', level: 'A1', meaning: 'Color', example: 'De zon is **geel**. — The sun is yellow.', synonyms: 'yellowness' },

  { nl: 'massa', en: 'mass/crowd', level: 'A2', meaning: 'Large quantity or crowd', example: 'Een **massa** mensen. — A mass of people.', synonyms: 'batch, bunch, crew, deal' },

  { nl: 'streng', en: 'strict', level: 'A2', meaning: 'Firm in rules', example: 'De leraar is **streng**. — The teacher is **strict**.', synonyms: 'hard-and-fast, rigorous' },

  { nl: 'oplossen', en: 'to solve/dissolve', level: 'A1', meaning: 'Find a solution or dissolve', example: 'Ik moet dit probleem **oplossen**. — I must solve this problem.', synonyms: 'fade away, fade out, figure out, lick' },

  { nl: 'zuchten', en: 'to sigh', level: 'A2', meaning: 'Exhale audibly', example: 'Hij **zucht** van vermoeidheid. — He sighs from fatigue.', synonyms: 'suspiration' },

  { nl: 'geweld', en: 'violence', level: 'A2', meaning: 'Physical force', example: 'Het conflict leidde tot **geweld**. — The conflict led to violence.', synonyms: 'ferocity, fierceness, force, furiousness' },

  { nl: 'materiaal', en: 'material', level: 'A1', meaning: 'Substance', example: 'Het **materiaal** is hout. — The material is wood.', synonyms: 'stuff' },

  { nl: 'aanzienlijk', en: 'considerable', level: 'B1', meaning: 'Large amount', example: 'Een **aanzienlijke** som geld. — A considerable amount of money.' },



  { nl: 'merkwaardig', en: 'remarkable', level: 'B1', meaning: 'Unusual or notable', example: 'Een **merkwaardig** verhaal. — A remarkable story.', synonyms: 'noteworthy, singular' },

  { nl: 'voornamelijk', en: 'mainly', level: 'A2', meaning: 'Mostly', example: 'De klanten komen **voornamelijk** uit de stad. — The customers come **mainly** from the city.', synonyms: 'chiefly, primarily, principally' },

  { nl: 'conflict', en: 'conflict', level: 'A2', meaning: 'Disagreement or fight', example: 'Er is een **conflict** tussen de groepen. — There is a conflict between the groups.', synonyms: 'battle, struggle' },

  { nl: 'produceren', en: 'to produce', level: 'A2', meaning: 'Make or create', example: 'De fabriek **produceert** autos — The factory **produces** cars', synonyms: 'bring forth, garden truck, green goods, green groceries' },

  { nl: 'veld', en: 'field', level: 'A1', meaning: 'Open land', example: 'Het **veld** is groen. — The **field** is green.', synonyms: 'battlefield, battleground' },

  { nl: 'gast', en: 'guest', level: 'A1', meaning: 'Visitor', example: 'De **gast** komt om 7 uur. — The guest comes at 7 o\'clock.', synonyms: 'invitee' },

  { nl: 'moe', en: 'tired', level: 'A1', meaning: 'Needing rest', example: 'Ik ben erg **moe**. — I am very tired.', synonyms: 'fag, fag out, fatigue, jade' },

  { nl: 'baseren', en: 'to base', level: 'B1', meaning: 'Use as a foundation', example: 'We **baseren** ons op feiten. — We base ourselves on facts.', synonyms: 'foot, foundation, fundament, groundwork' },

  { nl: 'uitzondering', en: 'exception', level: 'B1', meaning: 'Something not included', example: 'Dit is een **uitzondering**. — This is an exception.', synonyms: 'elision, exclusion' },

  { nl: 'afzonderlijk', en: 'separate', level: 'A2', meaning: 'Apart', example: 'Ze slapen in **afzonderlijke** kamers. — They sleep in separate rooms.', synonyms: 'offprint, reprint' },



  // --- frequency list additions ---

  { nl: 'van',              en: 'of / from',           meaning: 'Preposition indicating origin or belonging',          example: 'Het boek is van mijn broer. — The book is my brother\'s.' },

  { nl: 'bericht',          en: 'message',             meaning: 'A piece of communicated information',                 example: 'Ik heb een bericht ontvangen. — I have received a message.', synonyms: 'content, subject matter, substance' },

  { nl: 'revolutie',        en: 'revolution',          meaning: 'A fundamental change in society or government',       example: 'De revolutie bracht grote veranderingen. — The revolution brought great changes.' },

  { nl: 'standpunt',        en: 'viewpoint',           meaning: 'A position or opinion on a matter',                   example: 'Wat is jouw standpunt over dit probleem? — What is your position on this problem?', synonyms: 'stand, standpoint, vantage point' },

  { nl: 'schaal',           en: 'scale / bowl',        meaning: 'A measuring instrument or a large dish',              example: 'De schaal stond vol met fruit. — The scale was full of fruit.', synonyms: 'graduated table, ordered series, trough' },

  { nl: 'kussen',           en: 'to kiss / pillow',    meaning: 'To touch with lips, or a soft cushion',               example: 'Ze kuste hem op de wang. — She kissed him on the cheek.', synonyms: 'buss, osculation, rest' },

  { nl: 'zand',             en: 'sand',                meaning: 'Fine grains of rock found at beaches',                example: 'Het kind speelt in het zand. — The child plays in the sand.' },

  { nl: 'centrum',          en: 'centre',              meaning: 'The middle point of an area',                         example: 'Het winkelcentrum ligt in het centrum. — The mall is located downtown.', synonyms: 'center, eye, heart, middle' },

  { nl: 'verte',            en: 'distance / far away', meaning: 'A far-off place',                                     example: 'In de verte zag ik een berg. — In the distance I saw a mountain.' },

  { nl: 'vijftig',          en: 'fifty',               meaning: 'The number 50',                                       example: 'Hij is vijftig jaar oud. — He is fifty years old.' },

  { nl: 'voorwerp',         en: 'object',              meaning: 'A physical thing',                                    example: 'Welk voorwerp zoek je? — What object are you looking for?', synonyms: 'aim, objective, physical object, target' },

  { nl: 'productie',        en: 'production',          meaning: 'The process of making something',                     example: 'De productie van de film duurde twee jaar. — The production of the film took two years.' },

  { nl: 'westen',           en: 'west',                meaning: 'The direction of the setting sun',                    example: 'Amsterdam ligt in het westen van Nederland. — Amsterdam is in the west of the Netherlands.', synonyms: 'due west, westward' },

  { nl: 'beperkt',          en: 'limited',             meaning: 'Restricted in size or amount',                        example: 'De beschikbare tijd is beperkt. — The available time is limited.', synonyms: 'bound, confine, express, limit' },

  { nl: 'verkrijgen',       en: 'to obtain',           meaning: 'To come into possession of something',                example: 'Je kunt het formulier hier verkrijgen. — You can obtain the form here.', synonyms: 'find, get, incur, receive' },

  { nl: 'omvang',           en: 'size / extent',       meaning: 'The scale or scope of something',                     example: 'De omvang van het probleem was groot. — The magnitude of the problem was great.' },

  { nl: 'specifiek',        en: 'specific',            meaning: 'Clearly defined or particular',                       example: 'Kun je specifiek zijn over wat je bedoelt? — Can you be specific about what you mean?', synonyms: 'particular' },

  { nl: 'gunstig',          en: 'favourable',          meaning: 'Advantageous or positive',                            example: 'De weersomstandigheden zijn gunstig. — The weather conditions are favorable.', synonyms: 'favorable' },

  { nl: 'zwaaien',          en: 'to wave',             meaning: 'To move the hand back and forth in greeting',         example: 'Ze zwaaide naar me vanuit het raam. — She waved at me from the window.', synonyms: 'moving ridge' },

  { nl: 'eeuwig',           en: 'eternal',             meaning: 'Lasting forever',                                     example: 'De liefde voelde eeuwig. — The love felt eternal.', synonyms: 'aeonian, ageless, endless, eonian' },

  { nl: 'koel',             en: 'cool',                meaning: 'Slightly cold',                                       example: 'Het water is lekker koel vandaag. — The water is nice and cool today.', synonyms: 'aplomb, assuredness, poise, sang-froid' },

  { nl: 'zachtjes',         en: 'softly / gently',     meaning: 'In a quiet or gentle manner',                         example: 'Ze sprak zachtjes zodat niemand haar hoorde. — She spoke softly so no one heard her.', synonyms: 'mildly, quietly' },

  { nl: 'berg',             en: 'mountain',            meaning: 'A large natural elevation of earth',                  example: 'We beklommen de berg in drie uur. — We climbed the mountain in three hours.', synonyms: 'batch, deal, flock, good deal' },

  { nl: 'wassen',           en: 'to wash',             meaning: 'To clean with water',                                 example: 'Ik was mijn handen voor het eten. — I wash my hands before eating.', synonyms: 'lavation, washing' },

  { nl: 'lot',              en: 'fate',                meaning: 'Destiny or fortune',                                  example: 'Niemand kent zijn lot. — No one knows his fate.', synonyms: 'destiny' },

  { nl: 'regen',            en: 'rain',                meaning: 'Water falling from clouds',                           example: 'Het regent de hele dag. — It rains all day.', synonyms: 'rainfall, rainwater' },

  { nl: 'regeling',         en: 'arrangement',         meaning: 'An organised system or agreement',                    example: 'Er is een regeling getroffen. — An arrangement has been made.', synonyms: 'agreement' },

  { nl: 'dalen',            en: 'to descend',          meaning: 'To go down',                                          example: 'De temperatuur daalt in de nacht. — The temperature drops at night.', synonyms: 'come, come down, derive, fall' },

  { nl: 'voornaam',         en: 'first name',          meaning: 'The personal given name',                             example: 'Wat is je voornaam? — What is your first name?' },

  { nl: 'vakantie',         en: 'holiday / vacation',  meaning: 'A period of rest from work',                          example: 'We gaan op vakantie naar Spanje. — We go on vacation to Spain.' },

  { nl: 'bevel',            en: 'command / order',     meaning: 'An authoritative instruction',                        example: 'Hij voerde het bevel uit. — He carried out the command.', synonyms: 'bid, bidding, dictation' },

  { nl: 'controle',         en: 'control / check',     meaning: 'Power to influence or inspect',                       example: 'De controle op de grens was streng. — The control at the border was strict.', synonyms: 'assay, bank check, cheque' },

  { nl: 'tak',              en: 'branch',              meaning: 'A part of a tree extending from the trunk',           example: 'De tak brak onder het gewicht van de sneeuw. — The branch broke under the weight of snow.', synonyms: 'arm, subdivision' },

  { nl: 'voorzien',         en: 'to provide / foresee',meaning: 'To supply or predict',                                example: 'We moeten ons voorzien van genoeg water. — We must provide ourselves with enough water.', synonyms: 'anticipate, cater, envision, foreknow' },

  { nl: 'verwerken',        en: 'to process',          meaning: 'To handle or deal with',                              example: 'Het duurt tijd om verdriet te verwerken. — It takes time to process grief.', synonyms: 'cognitive operation, cognitive process, mental process, operation' },

  { nl: 'tong',             en: 'tongue',              meaning: 'The organ of taste and speech',                       example: 'Hij stak zijn tong uit. — He stuck his tongue out.', synonyms: 'clapper, glossa, lingua, natural language' },

  { nl: 'wennen',           en: 'to get used to',      meaning: 'To become accustomed to something',                   example: 'Je went snel aan de nieuwe situatie. — You quickly get used to the new situation.' },

  { nl: 'kwijt',            en: 'lost / rid of',       meaning: 'No longer in possession of something',                example: 'Ik ben mijn sleutels kwijt. — I have lost my keys.', synonyms: 'doomed, lose' },

  { nl: 'binnenkomen',      en: 'to enter / come in',  meaning: 'To come into a space',                                example: 'Ze kwamen de kamer binnen. — They entered the room.', synonyms: 'get in, get into, go in, go into' },

  { nl: 'analyse',          en: 'analysis',            meaning: 'A detailed examination of something',                 example: 'De analyse van de resultaten duurde lang. — The analysis of the results took long.', synonyms: 'analytic thinking' },

  { nl: 'heffen',           en: 'to raise / levy',     meaning: 'To lift up or impose a tax',                          example: 'De overheid heft belasting. — The government imposes tax.', synonyms: 'acclivity, ascent, climb, hike' },

  { nl: 'verdriet',         en: 'grief / sadness',     meaning: 'Deep sorrow',                                         example: 'Ze kon haar verdriet niet verbergen. — She could not hide her sadness.', synonyms: 'brokenheartedness, heartache, heartbreak, sorrow' },

  { nl: 'behoorlijk',       en: 'decent / quite',      meaning: 'Reasonably good or considerable',                     example: 'Het was behoorlijk koud gisteren. — It was quite cold yesterday.', synonyms: 'becoming, comely, decorous, nice' },

  { nl: 'vrezen',           en: 'to fear',             meaning: 'To be afraid of something',                           example: 'Hij vreest het ergste. — He fears the worst.', synonyms: 'care, concern, fearfulness, fright' },

  { nl: 'trillen',          en: 'to tremble',          meaning: 'To shake rapidly from fear or cold',                  example: 'Haar stem trilde van emotie. — Her voice trembled with emotion.', synonyms: 'shake, shiver' },

  { nl: 'dichtbij',         en: 'nearby / close',      meaning: 'Not far away',                                        example: 'Het station is dichtbij. — The station is nearby.', synonyms: 'closing, conclusion, end, ending' },

  { nl: 'argument',         en: 'argument',            meaning: 'A reason given to support a claim',                   example: 'Dat is een sterk argument. — That is a strong argument.', synonyms: 'arguing, contention, contestation, controversy' },

  { nl: 'eisen',            en: 'to demand',           meaning: 'To insist on something',                              example: 'Ze eist een verklaring. — She demands an explanation.' },

  { nl: 'negatief',         en: 'negative',            meaning: 'Not positive or unfavourable',                        example: 'Het testresultaat was negatief. — The test result was negative.' },

  { nl: 'kaas',             en: 'cheese',              meaning: 'A dairy product made from milk',                      example: 'Nederland is bekend om zijn kaas. — The Netherlands is known for its cheese.', synonyms: 'cheeseflower, high mallow, tall mallow' },

  { nl: 'heilig',           en: 'holy / sacred',       meaning: 'Revered as divine or deeply respected',               example: 'De kerk was een heilige plek. — The church was a holy place.', synonyms: 'holy place, sanctum' },

  { nl: 'versterken',       en: 'to strengthen',       meaning: 'To make stronger or more intense',                    example: 'Sport helpt om je lichaam te versterken. — Exercise helps strengthen your body.', synonyms: 'beef up, fortify' },

  { nl: 'meenemen',         en: 'to take along',       meaning: 'To bring with you',                                   example: 'Neem een paraplu mee. — Take an umbrella with you.' },

  { nl: 'afspraak',         en: 'appointment',         meaning: 'A planned meeting or agreement',                      example: 'Ik heb een afspraak bij de dokter. — I have an appointment with the doctor.', synonyms: 'assignment, date, designation, engagement' },

  { nl: 'bevorderen',       en: 'to promote',          meaning: 'To help progress or raise in rank',                   example: 'Hij werd bevorderd tot manager. — He was promoted to manager.', synonyms: 'advance, boost, elevate, encourage' },

  { nl: 'zaal',             en: 'hall / room',         meaning: 'A large room for gatherings',                         example: 'De zaal was vol mensen. — The hall was full of people.', synonyms: 'antechamber, anteroom, elbow room, entrance hall' },

  { nl: 'wonder',           en: 'miracle / wonder',    meaning: 'An extraordinary event or thing',                     example: 'Het herstel van de patiënt was een wonder. — The patient\'s recovery was a miracle.', synonyms: 'admiration, marvel, wonderment' },

  { nl: 'allebei',          en: 'both',                meaning: 'The two of them together',                            example: 'We zijn allebei moe. — We are both tired.' },

  { nl: 'titel',            en: 'title',               meaning: 'A name given to a work or a person',                  example: 'Wat is de titel van het boek? — What is the title of the book?', synonyms: 'rubric, statute title' },

  { nl: 'heuvel',           en: 'hill',                meaning: 'A raised area of land, smaller than a mountain',      example: 'We wandelden over de heuvel. — We walked over the hill.', synonyms: 'mound' },

  { nl: 'visie',            en: 'vision',              meaning: 'A way of seeing things or a plan for the future',     example: 'Zijn visie voor de toekomst was ambitieus. — His vision for the future was ambitious.', synonyms: 'sight, visual modality, visual sense' },

  { nl: 'vreselijk',        en: 'terrible / dreadful', meaning: 'Extremely bad or unpleasant',                         example: 'Het weer was vreselijk gisteren. — The weather was terrible yesterday.', synonyms: 'abominable, atrocious, awful, dire' },

  { nl: 'greep',            en: 'grip / handle',       meaning: 'A firm hold on something',                            example: 'Hij had een stevige greep op het stuur. — He had a firm grip on the wheel.', synonyms: 'care, clasp, clench, clutch' },

  { nl: 'kleden',           en: 'to dress / clothe',   meaning: 'To put clothes on someone',                           example: 'Ze kleedde het kind aan. — She dressed the child.', synonyms: 'adorn, apparel, attire, enclothe' },

  { nl: 'persoonlijkheid',  en: 'personality',         meaning: 'The combination of qualities that form a person',     example: 'Ze heeft een sterke persoonlijkheid. — She has a strong personality.' },

  { nl: 'kust',             en: 'coast',               meaning: 'The land near the sea',                               example: 'We reden langs de kust. — We drove along the coast.', synonyms: 'sea-coast, seacoast, seashore' },

  { nl: 'professor',        en: 'professor',           meaning: 'A senior university teacher',                         example: 'De professor gaf college aan honderd studenten. — The professor taught a class of one hundred students.', synonyms: 'prof' },

  { nl: 'danken',           en: 'to thank',            meaning: 'To express gratitude',                                example: 'Ik wil jullie danken voor de hulp. — I want to thank you for the help.', synonyms: 'give thanks' },

  { nl: 'radio',            en: 'radio',               meaning: 'A device for receiving audio broadcasts',             example: 'We luisterden naar muziek op de radio. — We listened to music on the radio.', synonyms: 'radio receiver, radio set, radiocommunication, receiving set' },

  { nl: 'opkomen',          en: 'to rise / come up',   meaning: 'To emerge or arise',                                  example: 'De zon komt op in het oosten. — The sun rises in the east.', synonyms: 'ascending, ascension, ascent' },

  { nl: 'slachtoffer',      en: 'victim',              meaning: 'Someone who has been harmed',                         example: 'Hij was het slachtoffer van een aanval. — He was the victim of an attack.', synonyms: 'dupe' },

  { nl: 'boos',             en: 'angry',               meaning: 'Feeling strong displeasure',                          example: 'Ze was boos op haar broer. — She was angry with her brother.', synonyms: 'furious, raging, tempestuous, wild' },

  { nl: 'naderen',          en: 'to approach',         meaning: 'To come near to something',                           example: 'De auto naderde snel. — The car approached quickly.', synonyms: 'approaching, attack, coming' },

  { nl: 'neiging',          en: 'tendency',            meaning: 'A natural inclination to behave in a certain way',    example: 'Hij heeft een neiging om te laat te komen. — He has a tendency to arrive late.', synonyms: 'disposition, inclination, leaning, propensity' },

  { nl: 'roken',            en: 'to smoke',            meaning: 'To inhale tobacco smoke',                             example: 'Roken is slecht voor je gezondheid. — Smoking is bad for your health.', synonyms: 'fume, smoking' },

  { nl: 'vanzelfsprekend',  en: 'obvious / natural',   meaning: 'Taken for granted; self-evident',                     example: 'Het is vanzelfsprekend dat we helpen. — It is self-evident that we help.', synonyms: 'cancel' },

  { nl: 'vermijden',        en: 'to avoid',            meaning: 'To keep away from something',                         example: 'Ze probeert conflicten te vermijden. — She tries to avoid conflicts.', synonyms: 'avert, debar, deflect, fend off' },

  { nl: 'vanavond',         en: 'tonight',             meaning: 'This evening',                                        example: 'Wat doen we vanavond? — What do we do tonight?', synonyms: 'this evening, this night' },

  { nl: 'vrede',            en: 'peace',               meaning: 'Freedom from conflict',                               example: 'Na de oorlog keerde de vrede terug. — After the war, peace returned.' },

  { nl: 'hevig',            en: 'intense / fierce',    meaning: 'Very strong or violent',                              example: 'Er was een hevige storm. — There was a severe storm.', synonyms: 'acute, ferocious, furious, savage' },

  { nl: 'vliegtuig',        en: 'airplane',            meaning: 'A powered flying aircraft',                           example: 'Het vliegtuig landde op tijd. — The airplane landed on time.', synonyms: 'aeroplane, plane' },

  { nl: 'brug',             en: 'bridge',              meaning: 'A structure spanning a gap or water',                 example: 'We staken de brug over. — We crossed the bridge.', synonyms: 'bridge circuit, span' },

  { nl: 'kenmerk',          en: 'characteristic',      meaning: 'A typical quality of something',                      example: 'Eerlijkheid is een belangrijk kenmerk. — Honesty is an important characteristic.', synonyms: 'feature' },

  { nl: 'olie',             en: 'oil',                 meaning: 'A thick liquid used as fuel or in cooking',           example: 'Doe een beetje olie in de pan. — Put a little oil in the pan.', synonyms: 'oil color, oil colour' },

  { nl: 'geleidelijk',      en: 'gradually',           meaning: 'Happening slowly over time',                          example: 'De temperatuur steeg geleidelijk. — The temperature rose gradually.' },

  { nl: 'controleren',      en: 'to check / verify',   meaning: 'To inspect or verify',                                example: 'Ik moet de deuren nog controleren. — I still need to check the doors.', synonyms: 'assay, bank check, cheque, control' },

  { nl: 'vak',              en: 'subject / field',     meaning: 'A subject of study or professional field',            example: 'Wiskunde is mijn favoriete vak. — Mathematics is my favorite subject.', synonyms: 'battlefield, battleground, content, depicted object' },

  { nl: 'naakt',            en: 'naked',               meaning: 'Without clothing',                                    example: 'Het kind rende naakt door de tuin. — The child ran naked through the garden.', synonyms: 'au naturel, bare, defenseless, nude' },

  { nl: 'thee',             en: 'tea',                 meaning: 'A hot drink made from dried leaves',                  example: 'Wil je een kopje thee? — Would you like a cup of tea?', synonyms: 'afternoon tea, teatime' },

  { nl: 'strand',           en: 'beach',               meaning: 'The sandy shore of a sea or lake',                    example: 'We gingen naar het strand op vakantie. — We went to the beach on vacation.' },

  { nl: 'risico',           en: 'risk',                meaning: 'The possibility of harm or loss',                     example: 'Er is een risico dat het misloopt. — There is a risk it might fail.', synonyms: 'danger, endangerment, hazard, jeopardy' },

  { nl: 'samenwerking',     en: 'cooperation',         meaning: 'Working together toward a shared goal',               example: 'Goede samenwerking is essentieel. — Good cooperation is essential.' },

  { nl: 'spiegel',          en: 'mirror',              meaning: 'A reflective surface for seeing oneself',             example: 'Ze keek in de spiegel. — She looked in the mirror.' },

  { nl: 'jagen',            en: 'to hunt / chase',     meaning: 'To pursue an animal or person',                       example: 'De boer jaagt op wilde eenden. — The farmer hunts wild ducks.', synonyms: 'following, pursual, pursuit' },

  { nl: 'president',        en: 'president',           meaning: 'The head of state of a republic',                     example: 'De president hield een toespraak. — The president held a speech.' },

  { nl: 'verstand',         en: 'intellect / mind',    meaning: 'The faculty of reason and understanding',             example: 'Gebruik je verstand. — Use your intelligence.', synonyms: 'brain, head, nous, psyche' },

  { nl: 'grondslag',        en: 'foundation / basis',  meaning: 'The underlying basis of something',                   example: 'Vertrouwen is de grondslag van elke relatie. — Trust is the foundation of any relationship.', synonyms: 'base, cornerstone, footing, fundament' },

  { nl: 'groen',            en: 'green',               meaning: 'The colour of grass and leaves',                      example: 'De bladeren zijn groen in de zomer. — The leaves are green in summer.', synonyms: 'common, commons, greenness, park' },

  { nl: 'rollen',           en: 'to roll',             meaning: 'To move by turning over and over',                    example: 'De bal rolde de heuvel af. — The ball rolled down the hill.', synonyms: 'axial motion, axial rotation, roster' },

  { nl: 'luiden',           en: 'to ring / sound',     meaning: 'To make a ringing sound',                             example: 'De klokken luiden elke zondag. — The bells ring every Sunday.', synonyms: 'anchor ring, annulus, auditory sensation, doughnut' },

  { nl: 'streven',          en: 'to strive',           meaning: 'To make great efforts toward a goal',                 example: 'Ze streven naar perfectie. — They strive for perfection.', synonyms: 'endeavor, endeavour, reach, strain' },

  { nl: 'melk',             en: 'milk',                meaning: 'A white liquid produced by mammals',                  example: 'Kinderen moeten veel melk drinken. — Children should drink a lot of milk.' },

  { nl: 'nadruk',           en: 'emphasis',            meaning: 'Special importance placed on something',              example: 'De nadruk ligt op kwaliteit. — The emphasis is on quality.', synonyms: 'accent, vehemence' },

  { nl: 'honger',           en: 'hunger',              meaning: 'The feeling of needing food',                         example: 'Ik heb honger na het sporten. — I am hungry after exercising.', synonyms: 'hungriness, thirst, thirstiness' },

  { nl: 'onderscheid',      en: 'distinction',         meaning: 'A difference between things',                         example: 'Er is een duidelijk onderscheid tussen de twee. — There is a clear distinction between the two.', synonyms: 'differentiation, eminence, note, preeminence' },

  { nl: 'verdedigen',       en: 'to defend',           meaning: 'To protect from attack or criticism',                 example: 'Hij verdedigde zijn standpunt goed. — He defended his position well.', synonyms: 'fend for, support' },

  { nl: 'traditioneel',     en: 'traditional',         meaning: 'Following long-established customs',                  example: 'We eten traditioneel stamppot op koningsdag. — We traditionally eat mashed potatoes on King\'s Day.' },

  { nl: 'beschikking',      en: 'disposal / decision', meaning: 'The ability to use something freely',                 example: 'De auto staat ter beschikking. — The car is available.', synonyms: 'administration, conclusion, determination' },

  { nl: 'overtuiging',      en: 'conviction / belief', meaning: 'A firmly held belief',                                example: 'Hij handelde vanuit overtuiging. — He acted out of conviction.', synonyms: 'condemnation, feeling, impression, notion' },

  { nl: 'schilderen',       en: 'to paint',            meaning: 'To apply paint to create a picture or surface',       example: 'Ze schildert graag portretten. — She likes to paint portraits.', synonyms: 'key, pigment' },

  { nl: 'klant',            en: 'customer / client',   meaning: 'A person who buys goods or services',                 example: 'De klant heeft altijd gelijk. — The customer is always right.' },

  { nl: 'vereisen',         en: 'to require',          meaning: 'To need something as a necessary condition',          example: 'Dit werk vereist veel geduld. — This work requires much patience.', synonyms: 'ask, call for, demand, expect' },

  { nl: 'adres',            en: 'address',             meaning: 'The location details of a place',                     example: 'Wat is uw adres? — What is your address?', synonyms: 'computer address, reference' },

  { nl: 'aanval',           en: 'attack',              meaning: 'An aggressive act against someone',                   example: 'De aanval verraste iedereen. — The attack surprised everyone.', synonyms: 'onrush, onset, onslaught' },

  { nl: 'opstellen',        en: 'to draw up / compose',meaning: 'To write or organise a document',                     example: 'Ze stelden een plan op. — They drew up a plan.', synonyms: 'write' },

  { nl: 'experiment',       en: 'experiment',          meaning: 'A scientific test to discover something',             example: 'Het experiment mislukte. — The experiment failed.', synonyms: 'experimentation' },

  { nl: 'fundamenteel',     en: 'fundamental',         meaning: 'Of central or primary importance',                    example: 'Vrijheid is een fundamenteel recht. — Freedom is a fundamental right.', synonyms: 'first harmonic, fundamental frequency' },

  { nl: 'innerlijk',        en: 'inner / internal',    meaning: 'Relating to one\'s inner self or mind',               example: 'Hij had een innerlijk conflict. — He had an internal conflict.', synonyms: 'interior, intragroup' },

  { nl: 'negen',            en: 'nine',                meaning: 'The number 9',                                        example: 'Het kind is negen jaar oud. — The child is nine years old.', synonyms: 'ball club, baseball club, club, ennead' },

  { nl: 'ongeluk',          en: 'accident',            meaning: 'An unexpected harmful event',                         example: 'Er was een ongeluk op de snelweg. — There was an accident on the highway.', synonyms: 'chance event, fortuity, stroke' },

  { nl: 'uitspreken',       en: 'to pronounce / express', meaning: 'To say clearly or express a view',                 example: 'Hij sprak zijn mening duidelijk uit. — He stated his opinion clearly.', synonyms: 'articulate, enounce, enunciate, express mail' },

  { nl: 'fout',             en: 'mistake / error',     meaning: 'Something incorrect or wrong',                        example: 'Ik heb een fout gemaakt. — I have made a mistake.', synonyms: 'erroneousness, fault, misapprehension, misunderstanding' },

  { nl: 'moed',             en: 'courage',             meaning: 'The ability to act despite fear',                     example: 'Het vroeg moed om dat te zeggen. — It took courage to say that.', synonyms: 'braveness, bravery, courageousness' },

  { nl: 'advies',           en: 'advice',              meaning: 'A recommendation on what to do',                      example: 'Ik heb advies nodig. — I need advice.' },

  { nl: 'rechtstreeks',     en: 'directly',            meaning: 'Without going through an intermediary',               example: 'Je kunt hem rechtstreeks bellen. — You can call him directly.', synonyms: 'direct, straight' },

  { nl: 'aantrekken',       en: 'to attract / put on', meaning: 'To draw toward or put on clothing',                   example: 'De stad trekt veel toeristen aan. — The city attracts many tourists.', synonyms: 'appeal, draw, draw in, pull' },

  { nl: 'sleutel',          en: 'key',                 meaning: 'A device for opening locks',                          example: 'Ik ben mijn sleutel vergeten. — I forgot my key.' },

  { nl: 'dom',              en: 'stupid / dumb',       meaning: 'Lacking intelligence or common sense',                example: 'Dat was een domme fout. — That was a stupid mistake.', synonyms: 'dense, dim, dolt, dull' },

  { nl: 'klimmen',          en: 'to climb',            meaning: 'To go up using hands and feet',                       example: 'We gingen klimmen in de bergen. — We went climbing in the mountains.', synonyms: 'acclivity, ascent, climbing, mounting' },

  { nl: 'typisch',          en: 'typical',             meaning: 'Characteristic of a particular type or group',        example: 'Dat is typisch Nederlands. — That is typically Dutch.', synonyms: 'distinctive' },

  { nl: 'apart',            en: 'separate / special',  meaning: 'Not together with others, or unusual',                example: 'Zet het apart neer. — Set it aside.', synonyms: 'offprint, reprint' },

  { nl: 'jas',              en: 'coat / jacket',       meaning: 'An outer garment worn for warmth',                    example: 'Doe je jas aan, het is koud. — Put on your coat, it is cold.', synonyms: 'coating' },

  { nl: 'stijl',            en: 'style',               meaning: 'A distinctive manner or way of doing something',      example: 'Ze heeft een elegante stijl. — She has an elegant style.', synonyms: 'expressive style, fashion, manner, mode' },

  { nl: 'bedrag',           en: 'amount / sum',        meaning: 'A quantity of money',                                 example: 'Het bedrag op de rekening klopte niet. — The amount in the account did not match.', synonyms: 'total' },

  { nl: 'top',              en: 'top / peak',          meaning: 'The highest point of something',                      example: 'We stonden op de top van de berg. — We stood at the top of the mountain.', synonyms: 'bloom, blossom, efflorescence, extremum' },

  { nl: 'slikken',          en: 'to swallow',          meaning: 'To pass something down the throat',                   example: 'Hij moest de pil slikken. — He had to swallow the pill.', synonyms: 'deglutition, drink, sup' },

  { nl: 'traditie',         en: 'tradition',           meaning: 'A long-established custom or practice',               example: 'Het is een oude traditie. — It is an old tradition.', synonyms: 'custom' },

  { nl: 'koffer',           en: 'suitcase',            meaning: 'A case for carrying clothes when travelling',         example: 'Ze pakte haar koffer voor de reis. — She packed her suitcase for the trip.', synonyms: 'bag, grip, traveling bag, travelling bag' },

  { nl: 'leunen',           en: 'to lean',             meaning: 'To rest against something for support',               example: 'Hij leunde tegen de muur. — He leaned against the wall.', synonyms: 'angle, inclination, leaning, list' },

  { nl: 'aanbrengen',       en: 'to apply / add',      meaning: 'To put something in place on a surface',              example: 'Je moet verf aanbrengen op het hout. — You must apply paint to the wood.', synonyms: 'employ, go for, hold, hyperkinetic syndrome' },

  { nl: 'afscheid',         en: 'farewell / goodbye',  meaning: 'The act of parting from someone',                     example: 'We namen afscheid bij het station. — We said goodbye at the station.', synonyms: 'adieu, adios, arrivederci, au revoir' },

  { nl: 'elders',           en: 'elsewhere',           meaning: 'In or to another place',                              example: 'Die informatie kun je elders vinden. — You can find that information elsewhere.' },

  { nl: 'vereniging',       en: 'association / club',  meaning: 'An organised group of people',                        example: 'Hij is lid van een sportvereniging. — He is a member of a sports club.', synonyms: 'ball club, baseball club, gild, guild' },

  { nl: 'motor',            en: 'motorbike / engine',  meaning: 'A motorcycle or the engine of a vehicle',             example: 'Hij reed op zijn motor naar het werk. — He rode his motorcycle to work.', synonyms: 'cycle, minibike, motorcycle' },

  { nl: 'geweldig',         en: 'great / tremendous',  meaning: 'Extremely good or impressive',                        example: 'Het concert was geweldig. — The concert was great.', synonyms: 'enormous, fantastic, grand, howling' },

  { nl: 'heet',             en: 'hot',                 meaning: 'Having a very high temperature',                      example: 'De koffie is heet. — The coffee is hot.', synonyms: 'raging' },

  { nl: 'instantie',        en: 'authority / instance',meaning: 'An official body or a particular case',               example: 'In eerste instantie leek het goed. — At first it seemed good.', synonyms: 'authorisation, authorization, case, dominance' },

  { nl: 'termijn',          en: 'term / deadline',     meaning: 'A fixed period of time or a deadline',                example: 'De termijn verloopt morgen. — The deadline expires tomorrow.' },

  { nl: 'trots',            en: 'proud / pride',       meaning: 'Feeling deep pleasure in an achievement',             example: 'Ze was trots op haar kind. — She was proud of her child.', synonyms: 'gallant, lofty, majestic, pridefulness' },

  { nl: 'verwijderen',      en: 'to remove / delete',  meaning: 'To take away or eliminate',                           example: 'Je kunt het bestand verwijderen. — You can delete the file.', synonyms: 'cancel, erase, take, take away' },

  { nl: 'computer',         en: 'computer',            meaning: 'An electronic device for processing data',            example: 'Ik werk de hele dag op de computer. — I work on the computer all day.', synonyms: 'calculator, computing device, computing machine, data processor' },

  { nl: 'paragraaf',        en: 'paragraph',           meaning: 'A section of written text',                           example: 'Lees de eerste paragraaf. — Read the first paragraph.' },

  { nl: 'generatie',        en: 'generation',          meaning: 'People born in the same era',                         example: 'Elke generatie heeft zijn eigen uitdagingen. — Every generation has its own challenges.', synonyms: 'coevals, contemporaries' },

  { nl: 'weggaan',          en: 'to leave / go away',  meaning: 'To depart from a place',                              example: 'Ze ging vroeg weg. — She left early.' },

  { nl: 'bodem',            en: 'bottom / soil',       meaning: 'The lowest point or the ground',                      example: 'De bodem van de zee is diep. — The bottom of the sea is deep.', synonyms: 'dirt, filth, grease, grime' },

  { nl: 'student',          en: 'student',             meaning: 'A person studying at a university',                   example: 'De student studeerde voor zijn examen. — The student studied for his exam.', synonyms: 'bookman, educatee, pupil, scholar' },

  { nl: 'woning',           en: 'dwelling / home',     meaning: 'A place where people live',                           example: 'Ze zochten een nieuwe woning. — They looked for a new home.', synonyms: 'abode, brood, domicile, dwell' },

  { nl: 'meemaken',         en: 'to experience',       meaning: 'To live through an event',                            example: 'Dat heb ik nog nooit meegemaakt. — I have never experienced that.' },

  { nl: 'zuiden',           en: 'south',               meaning: 'The direction opposite to north',                     example: 'In het zuiden is het warmer. — In the south it is warmer.' },

  { nl: 'betrokken',        en: 'involved / concerned',meaning: 'Participating in or connected to something',          example: 'Ze is betrokken bij het project. — She is involved in the project.', synonyms: 'affect, bear on, come to, concern' },

  { nl: 'relatief',         en: 'relatively',          meaning: 'Considered in relation to something else',            example: 'De prijs is relatief laag. — The price is relatively low.', synonyms: 'comparatively' },

  { nl: 'hout',             en: 'wood',                meaning: 'The hard material from trees',                        example: 'De tafel is gemaakt van hout. — The table is made of wood.', synonyms: 'forest, woods' },

  { nl: 'categorie',        en: 'category',            meaning: 'A class or division of things',                       example: 'Dit valt in een andere categorie. — This falls into another category.', synonyms: 'class, family' },

  { nl: 'overeenkomst',     en: 'agreement',           meaning: 'A contract or a similarity between things',           example: 'Ze sloten een overeenkomst. — They concluded an agreement.', synonyms: 'correspondence, understanding' },

  { nl: 'zoet',             en: 'sweet',               meaning: 'Having a sugary taste',                               example: 'De appel smaakt zoet. — The apple tastes sweet.', synonyms: 'afters, dessert' },

  { nl: 'fiets',            en: 'bicycle',             meaning: 'A two-wheeled pedal vehicle',                         example: 'Ik ga op de fiets naar school. — I go to school by bicycle.', synonyms: 'bike, cycle, pedal, wheel' },

  { nl: 'kalm',             en: 'calm',                meaning: 'Not agitated or excited',                             example: 'Blijf kalm in noodsituaties. — Stay calm in emergencies.', synonyms: 'calm air, calmness, composure, equanimity' },

  { nl: 'eindigen',         en: 'to end / finish',     meaning: 'To come to a conclusion',                             example: 'Het verhaal eindigt goed. — The story ends well.', synonyms: 'close, coating, conclusion, ending' },

  { nl: 'wolk',             en: 'cloud',               meaning: 'A visible mass of water droplets in the sky',         example: 'Er zijn veel wolken vandaag. — There are many clouds today.' },

  { nl: 'scheiden',         en: 'to separate / divorce',meaning: 'To part or end a marriage',                          example: 'Ze besloten te scheiden. — They decided to divorce.', synonyms: 'disassociate, disjoint, dissociate, disunite' },

  { nl: 'vestigen',         en: 'to establish / settle',meaning: 'To set up or settle in a place',                     example: 'Het bedrijf vestigde zich in Amsterdam. — The company settled in Amsterdam.', synonyms: 'constitute, found, institute, launch' },

  { nl: 'bezoeken',         en: 'to visit',            meaning: 'To go to see someone or a place',                     example: 'We bezoeken oma elk weekend. — We visit grandma every weekend.' },

  { nl: 'beschikbaar',      en: 'available',           meaning: 'Ready or able to be used',                            example: 'De kamer is beschikbaar vanaf maandag. — The room is available from Monday.', synonyms: 'uncommitted' },

  { nl: 'voorzitter',       en: 'chairman',            meaning: 'The leader of a meeting or committee',                example: 'De voorzitter opende de vergadering. — The chairperson opened the meeting.', synonyms: 'chair, chairperson, chairwoman, president' },

  { nl: 'goederen',         en: 'goods',               meaning: 'Things produced for sale or transport',               example: 'De goederen werden per schip vervoerd. — The goods were transported by ship.', synonyms: 'good, goodness' },

  { nl: 'mager',            en: 'thin / lean',         meaning: 'Having little fat on the body',                       example: 'Hij is erg mager geworden. — He has become very thin.', synonyms: 'angle, inclination, leaning, list' },

  { nl: 'stemmen',          en: 'to vote',             meaning: 'To cast a vote in an election',                       example: 'We gaan morgen stemmen. — We vote tomorrow.', synonyms: 'ballot, balloting, voting' },

  { nl: 'beschrijving',     en: 'description',         meaning: 'A spoken or written account of something',            example: 'Geef een beschrijving van wat je zag. — Give a description of what you saw.', synonyms: 'verbal description' },

  { nl: 'formuleren',       en: 'to formulate',        meaning: 'To express something clearly in words',               example: 'Het is moeilijk om dat goed te formuleren. — It is difficult to formulate that well.', synonyms: 'contrive, develop, devise, excogitate' },

  { nl: 'instrument',       en: 'instrument',          meaning: 'A tool or a musical device',                          example: 'Ze speelt een muziekinstrument. — She plays a musical instrument.', synonyms: 'tool' },

  { nl: 'klas',             en: 'class / classroom',   meaning: 'A group of students or the room they study in',       example: 'De klas zat stil. — The class sat quietly.', synonyms: 'category, course, family, form' },

  { nl: 'vermoorden',       en: 'to murder',           meaning: 'To kill someone deliberately and unlawfully',         example: 'De detective onderzocht wie de man had vermoord. — The detective investigated who had murdered the man.', synonyms: 'bump off, dispatch, execution, hit' },

  { nl: 'werknemer',        en: 'employee',            meaning: 'A person who works for an employer',                  example: 'De werknemer vroeg om loonsverhoging. — The employee asked for a salary increase.' },

  { nl: 'bevrijden',        en: 'to liberate / free',  meaning: 'To set free from captivity or oppression',            example: 'Ze bevrijdden de gevangenen. — They freed the prisoners.', synonyms: 'emancipate, free people, loose, release' },

  { nl: 'combinatie',       en: 'combination',         meaning: 'A mixture of different things',                       example: 'De combinatie van smaken was perfect. — The combination of flavors was perfect.' },

  { nl: 'milieu',           en: 'environment',         meaning: 'The natural world and surroundings',                  example: 'We moeten het milieu beschermen. — We must protect the environment.', synonyms: 'environs, surround, surroundings' },

  { nl: 'wrijven',          en: 'to rub',              meaning: 'To press and move back and forth',                    example: 'Hij wreef in zijn ogen. — He rubbed his eyes.', synonyms: 'hang-up, hitch, snag, wipe' },

  { nl: 'kast',             en: 'cupboard / wardrobe', meaning: 'A piece of furniture for storing things',             example: 'De kleren hangen in de kast. — The clothes hang in the closet.', synonyms: 'closet, press' },

  { nl: 'publiceren',       en: 'to publish',          meaning: 'To make something available to the public',           example: 'Ze wil een boek publiceren. — She wants to publish a book.', synonyms: 'bring out, issue, print, put out' },

  { nl: 'klap',             en: 'slap / blow',         meaning: 'A sharp hit',                                         example: 'Hij kreeg een klap op zijn hoofd. — He got a blow to his head.', synonyms: 'bump, smack, smacking' },

  { nl: 'tamelijk',         en: 'fairly / rather',     meaning: 'To a moderate degree',                                example: 'Het was tamelijk warm gisteren. — It was fairly warm yesterday.', synonyms: 'evenhandedly, fair, instead, jolly' },

  { nl: 'stroom',           en: 'current / stream',    meaning: 'A flow of water or electricity',                      example: 'Er was geen stroom na de storm. — There was no electricity after the storm.', synonyms: 'electric current, flow, watercourse' },

  { nl: 'beheersen',        en: 'to master / control', meaning: 'To have full control of something',                   example: 'Ze beheerst drie talen. — She speaks three languages.', synonyms: 'lord, maestro, overlord' },

  { nl: 'landschap',        en: 'landscape',           meaning: 'A view of natural scenery',                           example: 'Het landschap was prachtig. — The landscape was beautiful.' },

  { nl: 'winst',            en: 'profit / gain',       meaning: 'Money or advantage gained',                           example: 'Het bedrijf maakte grote winst. — The company made great profit.', synonyms: 'addition, earnings, increase, lucre' },

  { nl: 'knap',             en: 'clever / handsome',   meaning: 'Intelligent or attractive in appearance',             example: 'Hij is een knappe jongen. — He is a handsome boy.', synonyms: 'apt, better-looking, big, bighearted' },

  { nl: 'straf',            en: 'punishment',          meaning: 'A penalty imposed for wrongdoing',                    example: 'De straf was zwaar. — The punishment was severe.', synonyms: 'penalisation, penalization, penalty' },

  { nl: 'eenzaam',          en: 'lonely',              meaning: 'Sad because without company',                         example: 'Ze voelde zich eenzaam. — She felt lonely.', synonyms: 'alone, lone, lonesome, solitary' },

  { nl: 'warmte',           en: 'warmth',              meaning: 'A moderate degree of heat',                           example: 'De warmte van het vuur was aangenaam. — The heat of the fire was pleasant.', synonyms: 'heat, warmheartedness' },

  { nl: 'definitief',       en: 'definitive / final',  meaning: 'Done or decided conclusively',                        example: 'De beslissing is definitief. — The decision is final.', synonyms: 'authoritative, classic, classical, final exam' },

  { nl: 'nauwkeurig',       en: 'accurate / precise',  meaning: 'Done with great care and attention to detail',        example: 'Hij is erg nauwkeurig in zijn werk. — He is very precise in his work.', synonyms: 'exact' },

  { nl: 'traag',            en: 'slow',                meaning: 'Not moving or happening quickly',                     example: 'De trein reed erg traag. — The train drove very slowly.', synonyms: 'decelerate, retard, slack, slacken' },

  { nl: 'democratie',       en: 'democracy',           meaning: 'A system of government elected by the people',        example: 'Vrijheid van meningsuiting is essentieel in een democratie. — Freedom of speech is essential in a democracy.', synonyms: 'commonwealth, republic' },

  { nl: 'erkennen',         en: 'to recognise',        meaning: 'To accept something as true or valid',                example: 'Hij erkende zijn fout. — He acknowledged his mistake.', synonyms: 'accredit, recognize' },

  { nl: 'opstaan',          en: 'to get up / stand up',meaning: 'To rise from a seated or lying position',             example: 'Ik sta elke dag om zeven uur op. — I get up at seven every day.' },

  { nl: 'verschaffen',      en: 'to provide / supply', meaning: 'To make something available to someone',              example: 'De overheid moet veiligheid verschaffen. — The government must provide safety.', synonyms: 'cater, furnish, ply, render' },

  { nl: 'binden',           en: 'to bind / tie',       meaning: 'To fasten things together',                           example: 'Ze bond de bundel met een touw. — She tied the bundle with a rope.', synonyms: 'adhere, affiliation, association, bond' },

  { nl: 'opleveren',        en: 'to yield / produce',  meaning: 'To produce a result or hand over',                    example: 'De investering leverde veel op. — The investment yielded much.', synonyms: 'bring forth, garden truck, green goods, green groceries' },

  { nl: 'tijdelijk',        en: 'temporary',           meaning: 'Lasting for only a limited time',                     example: 'Het werk is tijdelijk. — The work is temporary.', synonyms: 'impermanent, temp, temporary worker' },

  { nl: 'televisie',        en: 'television',          meaning: 'A device for watching video broadcasts',              example: 'We kijken \'s avonds televisie. — We watch television in the evening.', synonyms: 'telecasting, television system, video' },

  { nl: 'inhouden',         en: 'to contain / mean',   meaning: 'To include as a part, or to mean',                    example: 'Wat houdt het plan in? — What does the plan entail?', synonyms: 'bear, carry, comprise, hold' },

  { nl: 'chauffeur',        en: 'driver',              meaning: 'A person who drives a vehicle professionally',        example: 'De chauffeur reed voorzichtig. — The driver drove carefully.' },

  { nl: 'bijdrage',         en: 'contribution',        meaning: 'Something given to a common goal',                    example: 'Zijn bijdrage aan het project was groot. — His contribution to the project was large.', synonyms: 'donation, part, share' },

  { nl: 'toepassen',        en: 'to apply / use',      meaning: 'To put something into practice',                      example: 'Je kunt deze methode hier toepassen. — You can apply this method here.', synonyms: 'employ, employment, exercise, function' },

  { nl: 'kritisch',         en: 'critical',            meaning: 'Expressing careful analysis or disapproval',          example: 'Ze was kritisch over het plan. — She was critical of the plan.' },

  { nl: 'verwerven',        en: 'to acquire',          meaning: 'To gain possession or a reputation',                  example: 'Hij verwierf een goede reputatie. — He acquired a good reputation.', synonyms: 'adopt, assume, get, take' },

  { nl: 'priester',         en: 'priest',              meaning: 'A religious leader who performs rituals',              example: 'De priester hield de dienst. — The priest held the service.', synonyms: 'non-christian priest' },

  { nl: 'cel',              en: 'cell',                meaning: 'A small room in a prison or a biological unit',       example: 'De gevangene zat in zijn cel. — The prisoner was in his cell.' },

  { nl: 'overleg',          en: 'consultation',        meaning: 'Discussion among people to reach a decision',         example: 'Na overleg namen ze een beslissing. — After consultation they made a decision.', synonyms: 'audience, interview' },

  { nl: 'poos',             en: 'a while / moment',    meaning: 'A short period of time',                              example: 'Wacht even een poosje. — Wait a moment.', synonyms: 'bit, instant, minute, second' },

  { nl: 'strekken',         en: 'to stretch / extend', meaning: 'To lengthen or reach out',                            example: 'Ze strekte haar armen uit. — She stretched her arms.', synonyms: 'broaden, lead, pass, reach' },

  { nl: 'duiken',           en: 'to dive',             meaning: 'To jump headfirst into water',                        example: 'Hij dook in het zwembad. — He dove into the pool.', synonyms: 'diving, honkytonk' },

  { nl: 'zon',              en: 'sun',                 meaning: 'The star at the centre of the solar system',          example: 'De zon schijnt vandaag. — The sun is shining today.', synonyms: 'sunlight, sunshine' },

  { nl: 'ingewikkeld',      en: 'complicated',         meaning: 'Difficult to understand or deal with',                example: 'Dit probleem is erg ingewikkeld. — This problem is very complicated.', synonyms: 'complicate, elaborate, perplex, rarify' },

  { nl: 'organiseren',      en: 'to organise',         meaning: 'To arrange or coordinate an event or activity',       example: 'Ze organiseerde het feest. — She organized the party.', synonyms: 'coordinate, form, organize' },

  { nl: 'handhaven',        en: 'to maintain / enforce',meaning: 'To uphold a rule or standard',                       example: 'De politie handhaaft de wet. — The police enforce the law.', synonyms: 'apply, conserve, hold, implement' },

  { nl: 'patroon',          en: 'pattern',             meaning: 'A repeated design or a model to follow',              example: 'Het patroon op de stof was mooi. — The pattern on the fabric was nice.', synonyms: 'form, practice, shape' },

  { nl: 'agent',            en: 'police officer / agent',meaning: 'A police officer or representative',                example: 'De agent stopte de auto. — The agent stopped the car.' },

  { nl: 'duivel',           en: 'devil',               meaning: 'An evil supernatural being',                          example: 'In het sprookje was er een duivel. — In the fairy tale there was a devil.', synonyms: 'daemon, daimon, demon, fiend' },

  { nl: 'emotie',           en: 'emotion',             meaning: 'A strong feeling such as joy or fear',                example: 'Ze kon haar emoties niet verbergen. — She could not hide her emotions.' },

  { nl: 'orgaan',           en: 'organ',               meaning: 'A part of the body with a specific function',         example: 'Het hart is een belangrijk orgaan. — The heart is an important organ.' },

  { nl: 'herstellen',       en: 'to recover / repair', meaning: 'To get better or fix something',                      example: 'Hij herstelde snel na de operatie. — He recovered quickly after the operation.', synonyms: 'convalesce, find, fix, fixing' },

  { nl: 'geweer',           en: 'rifle / gun',         meaning: 'A long-barrelled firearm',                            example: 'De soldaat droeg een geweer. — The soldier carried a rifle.', synonyms: 'artillery, despoil, foray, heavy weapon' },

  { nl: 'provincie',        en: 'province',            meaning: 'An administrative region of a country',               example: 'Ze woont in de provincie Utrecht. — She lives in the province of Utrecht.', synonyms: 'responsibility, state' },

  { nl: 'verlopen',         en: 'to expire / elapse',  meaning: 'To pass or come to an end',                           example: 'Mijn paspoort is verlopen. — My passport has expired.', synonyms: 'choke, conk, croak, decease' },

  { nl: 'detail',           en: 'detail',              meaning: 'A small particular element of something',             example: 'Let op de details. — Pay attention to the details.', synonyms: 'item, particular, point' },

  { nl: 'lichten',          en: 'to lift / shed light',meaning: 'To raise or to illuminate',                           example: 'Ze lichtte een tip voor het onderzoek. — She provided a tip for the investigation.', synonyms: 'aerodynamic lift' },

  { nl: 'omvatten',         en: 'to include / encompass',meaning: 'To include as a part of something',                 example: 'Het boek omvat drie hoofdstukken. — The book comprises three chapters.', synonyms: 'comprehend, cover, embrace' },

  { nl: 'gisteren',         en: 'yesterday',           meaning: 'The day before today',                                example: 'Gisteren was het mooi weer. — Yesterday the weather was nice.' },

  { nl: 'ontsnappen',       en: 'to escape',           meaning: 'To break free from captivity',                        example: 'De gevangene ontsnapte uit de cel. — The prisoner escaped from the cell.', synonyms: 'escapism, flight' },

  { nl: 'restaurant',       en: 'restaurant',          meaning: 'A place where meals are served to customers',         example: 'We aten in een Italiaans restaurant. — We ate at an Italian restaurant.', synonyms: 'eatery, eating house, eating place' },

  { nl: 'echtgenoot',       en: 'husband / spouse',    meaning: 'A married partner',                                   example: 'Haar echtgenoot werkt als arts. — Her husband works as a doctor.', synonyms: 'better half, conserve, economise, economize' },

  { nl: 'vermogen',         en: 'ability / wealth',    meaning: 'Capability or financial assets',                      example: 'Hij heeft het vermogen om te slagen. — He has the ability to succeed.', synonyms: 'power, wealthiness' },

  { nl: 'stemming',         en: 'mood / vote',         meaning: 'A state of mind or the act of voting',                example: 'De stemming in de zaal was positief. — The mood in the hall was positive.', synonyms: 'ballot, balloting, climate, humor' },

  { nl: 'vervolgen',        en: 'to continue / prosecute',meaning: 'To carry on or bring someone to trial',            example: 'De rechter besloot hem te vervolgen. — The judge decided to prosecute him.', synonyms: 'carry on, go along, go on, keep' },

  { nl: 'stadium',          en: 'stadium / stage',     meaning: 'A sports venue or a phase of development',            example: 'Het project is in een vroeg stadium. — The project is in an early stage.', synonyms: 'arena, bowl, degree, level' },

  { nl: 'wild',             en: 'wild',                meaning: 'Living or growing in natural conditions',             example: 'Er leven wilde dieren in het bos. — Wild animals live in the forest.', synonyms: 'natural state, wilderness' },

  { nl: 'brand',            en: 'fire',                meaning: 'A destructive burning',                               example: 'Er brak brand uit in het gebouw. — A fire broke out in the building.', synonyms: 'firing' },

  { nl: 'pijnlijk',         en: 'painful',             meaning: 'Causing physical or emotional pain',                  example: 'De wond was erg pijnlijk. — The wound was very painful.', synonyms: 'afflictive, sore' },

  { nl: 'station',          en: 'station',             meaning: 'A building where trains or buses stop',               example: 'Ik wacht je op bij het station. — I am waiting for you at the station.', synonyms: 'place' },

  { nl: 'verbazing',        en: 'amazement',           meaning: 'A feeling of great surprise',                         example: 'Tot mijn verbazing was ze er al. — To my surprise she was already there.', synonyms: 'astonishment' },

  { nl: 'uitvoering',       en: 'performance / execution',meaning: 'A presentation or the carrying out of a plan',     example: 'De uitvoering van het plan verliep soepel. — The execution of the plan went smoothly.', synonyms: 'capital punishment, carrying out, death penalty, executing' },

  { nl: 'gordijn',          en: 'curtain',             meaning: 'A piece of fabric hanging over a window',             example: 'Ze trok de gordijnen dicht. — She closed the curtains.', synonyms: 'drape, drapery, mantle, pall' },

  { nl: 'filosofie',        en: 'philosophy',          meaning: 'The study of fundamental questions about life',       example: 'Filosofie is een fascinerend vakgebied. — Philosophy is a fascinating field of study.', synonyms: 'doctrine, ism, philosophical system' },

  { nl: 'gedeeltelijk',     en: 'partially / partly',  meaning: 'Not complete or total',                               example: 'De schade was gedeeltelijk gedekt. — The damage was partially covered.', synonyms: 'part' },

  { nl: 'plaatselijk',      en: 'local',               meaning: 'Relating to a particular area',                       example: 'Er is plaatselijk regen verwacht. — Rain is expected locally.', synonyms: 'local anaesthetic, local anesthetic, topical anaesthetic, topical anesthetic' },

  { nl: 'uitkomen',         en: 'to come out / turn out',meaning: 'To appear or to fit',                               example: 'De kleur komt goed uit. — The color turns out well.' },

  { nl: 'sector',           en: 'sector',              meaning: 'A part of an economy or society',                     example: 'De gezondheidssector groeit snel. — The health sector grows rapidly.' },

  { nl: 'afkomstig',        en: 'originating from',    meaning: 'Coming from a particular place or background',        example: 'Ze is afkomstig uit België. — She comes from Belgium.' },

  { nl: 'dwars',            en: 'across / stubborn',   meaning: 'Going diagonally across, or being uncooperative',     example: 'Hij legde het dwars over het pad. — He laid it across the path.', synonyms: 'crossways, crosswise, obstinate, refractory' },

  { nl: 'eindeloos',        en: 'endless',             meaning: 'Having no end',                                       example: 'Het gesprek leek eindeloos te duren. — The conversation seemed to last forever.', synonyms: 'eternal, interminable' },

  { nl: 'emotioneel',       en: 'emotional',           meaning: 'Relating to or expressing strong emotions',           example: 'Ze reageerde emotioneel op het nieuws. — She responded emotionally to the news.' },

  { nl: 'vasthouden',       en: 'to hold on / keep',   meaning: 'To grip firmly or to maintain',                       example: 'Hij hield haar hand vast. — He held her hand.', synonyms: 'donjon, dungeon, livelihood, living' },

  { nl: 'dadelijk',         en: 'shortly / immediately',meaning: 'Very soon',                                          example: 'Ik kom dadelijk. — I am coming right away.', synonyms: 'at once, before long, directly, forthwith' },

  { nl: 'bestuderen',       en: 'to study / examine',  meaning: 'To examine something carefully',                      example: 'Ze bestudeerde de kaart. — She studied the map.', synonyms: 'analyse, analyze, canvas, canvass' },

  { nl: 'moord',            en: 'murder',              meaning: 'The unlawful killing of a person',                    example: 'De politie onderzocht de moord. — The police investigated the murder.', synonyms: 'bump off, dispatch, execution, hit' },

  { nl: 'symbool',          en: 'symbol',              meaning: 'A mark or sign representing something else',          example: 'De duif is een symbool van vrede. — The pigeon is a symbol of peace.', synonyms: 'symbolic representation, symbolisation, symbolization' },

  { nl: 'kist',             en: 'chest / crate',       meaning: 'A large strong box',                                  example: 'De kist was vol met goud. — The chest was full of gold.', synonyms: 'crateful, pectus, thorax' },

  { nl: 'wand',             en: 'wall',                meaning: 'An interior wall of a room',                          example: 'Er hing een schilderij aan de wand. — A painting hung on the wall.' },

  { nl: 'aflopen',          en: 'to end / expire',     meaning: 'To come to an end or run out',                        example: 'Wanneer loopt het contract af? — When does the contract expire?', synonyms: 'choke, conk, croak, decease' },

  { nl: 'goedkoop',         en: 'cheap',               meaning: 'Low in price',                                        example: 'Dit restaurant is goedkoop maar lekker. — This restaurant is cheap but delicious.', synonyms: 'brassy, flash, flashy, garish' },

  { nl: 'verwijzen',        en: 'to refer',            meaning: 'To direct to another source or person',               example: 'De dokter verwees hem naar een specialist. — The doctor referred him to a specialist.', synonyms: 'advert, bear on, bring up, cite' },

  { nl: 'vernietigen',      en: 'to destroy',          meaning: 'To damage beyond repair',                             example: 'De brand vernietigde het gebouw. — The fire destroyed the building.', synonyms: 'destruct, ruin' },

  { nl: 'doorgaan',         en: 'to continue',         meaning: 'To keep going or proceed',                            example: 'We gaan door met het plan. — We continue with the plan.', synonyms: 'carry on, go along, go on, keep' },

  { nl: 'klacht',           en: 'complaint',           meaning: 'An expression of dissatisfaction',                    example: 'Ze diende een klacht in. — She filed a complaint.', synonyms: 'ailment, ill' },

  { nl: 'vrouwelijk',       en: 'female / feminine',   meaning: 'Relating to women or femininity',                     example: 'Ze had een vrouwelijke uitstraling. — She had a feminine appearance.', synonyms: 'female person' },

  { nl: 'stuur',            en: 'steering wheel',      meaning: 'The device used to steer a vehicle',                  example: 'Hij greep het stuur stevig vast. — He gripped the steering wheel firmly.' },

  { nl: 'overwegen',        en: 'to consider',         meaning: 'To think carefully about something',                  example: 'Ik overweeg een nieuwe baan te nemen. — I am considering taking a new job.', synonyms: 'reckon, regard, see, study' },

  { nl: 'evenwicht',        en: 'balance',             meaning: 'A stable and equal state',                            example: 'Ze verloor haar evenwicht op de trap. — She lost her balance on the stairs.' },

  { nl: 'verantwoordelijk', en: 'responsible',         meaning: 'Having an obligation to do something correctly',      example: 'Hij voelde zich verantwoordelijk. — He felt responsible.', synonyms: 'responsible for' },

  { nl: 'passeren',         en: 'to pass',             meaning: 'To go past something or someone',                     example: 'We passeerden de grens. — We crossed the border.', synonyms: 'walk' },

  { nl: 'motief',           en: 'motive / motif',      meaning: 'A reason for action or a recurring theme',            example: 'Wat was zijn motief voor de daad? — What was his motive for the deed?', synonyms: 'motivation, need' },

  { nl: 'verstandig',       en: 'sensible / wise',     meaning: 'Showing good judgement',                              example: 'Dat was een verstandige beslissing. — That was a wise decision.', synonyms: 'reasonable, sensitive' },

  { nl: 'fabriek',          en: 'factory',             meaning: 'A building where goods are manufactured',             example: 'De fabriek produceert auto\'s. — The factory produces cars.', synonyms: 'manufactory, manufacturing plant, mill' },

  { nl: 'lijst',            en: 'list / frame',        meaning: 'A series of items, or a picture frame',               example: 'Ze maakte een lijst van boodschappen. — She made a shopping list.', synonyms: 'inclination, lean, leaning, listing' },

  { nl: 'schoonheid',       en: 'beauty',              meaning: 'The quality of being beautiful',                      example: 'De schoonheid van het landschap raakte haar. — The beauty of the landscape moved her.', synonyms: 'dish, knockout, looker, lulu' },

  { nl: 'zonde',            en: 'sin / shame',         meaning: 'A moral wrongdoing, or a regrettable waste',          example: 'Het is zonde om zoveel eten weg te gooien. — It is a pity to throw away so much food.', synonyms: 'disgrace, ignominy, sinfulness, sinning' },

  { nl: 'vergelijking',     en: 'comparison',          meaning: 'The act of comparing two or more things',             example: 'In vergelijking met vorig jaar is er verbetering. — Compared to last year there is improvement.', synonyms: 'comparing' },

  { nl: 'vatten',           en: 'to grasp / understand',meaning: 'To catch or to understand',                          example: 'Ik kon het niet vatten. — I could not understand it.', synonyms: 'appreciation, compass, hold, range' },

  { nl: 'overkomen',        en: 'to happen to',        meaning: 'To occur to someone unexpectedly',                    example: 'Dat kan iedereen overkomen. — That can happen to anyone.' },

  { nl: 'serieus',          en: 'serious',             meaning: 'Demanding careful thought or not joking',             example: 'Dit is een serieus probleem. — This is a serious problem.' },

  { nl: 'gezondheid',       en: 'health',              meaning: 'The state of being physically and mentally well',     example: 'Gezondheid is het belangrijkste. — Health is the most important.', synonyms: 'wellness' },

  { nl: 'overgaan',         en: 'to transition / pass',meaning: 'To move to another state or pass an exam',            example: 'De kleur gaat over in blauw. — The color transitions into blue.', synonyms: 'changeover, conversion, passage, walk' },

  { nl: 'uiting',           en: 'expression',          meaning: 'A way of expressing something',                       example: 'Muziek is een vorm van uiting. — Music is a form of expression.', synonyms: 'aspect, face, facial expression, look' },

  { nl: 'logisch',          en: 'logical',             meaning: 'According to logic or common sense',                  example: 'Dat is niet logisch. — That is not logical.', synonyms: 'legitimate' },

  { nl: 'letter',           en: 'letter (alphabet)',   meaning: 'A symbol of the alphabet',                            example: 'De eerste letter van het alfabet is A. — The first letter of the alphabet is A.' },

  { nl: 'storten',          en: 'to deposit / pour',   meaning: 'To put money in a bank or pour liquid',               example: 'Ik wil geld storten. — I want to deposit money.', synonyms: 'alluviation, pullulate, sediment, sedimentation' },

  { nl: 'kern',             en: 'core / nucleus',      meaning: 'The central or most important part',                  example: 'De kern van het probleem is duidelijk. — The core of the problem is clear.', synonyms: 'cell nucleus, core group, karyon' },

  { nl: 'ruzie',            en: 'quarrel / argument',  meaning: 'An angry disagreement between people',                example: 'Ze hadden ruzie over het geld. — They argued about the money.', synonyms: 'arguing, contention, contestation, controversy' },

  { nl: 'verbinding',       en: 'connection',          meaning: 'A link between things or places',                     example: 'Er is geen internetverbinding. — There is no internet connection.', synonyms: 'connectedness, connexion, link' },

  { nl: 'vluchten',         en: 'to flee / escape',    meaning: 'To run away from danger',                             example: 'Ze vluchtten uit het brandende gebouw. — They fled from the burning building.', synonyms: 'escapism, flight, fly, take flight' },

  { nl: 'gevangenis',       en: 'prison',              meaning: 'A place where criminals are locked up',               example: 'Hij zat drie jaar in de gevangenis. — He was in prison for three years.', synonyms: 'prison house' },

  { nl: 'noorden',          en: 'north',               meaning: 'The direction toward the North Pole',                 example: 'In het noorden is het koud. — In the north it is cold.' },

  { nl: 'bijten',           en: 'to bite',             meaning: 'To cut into something with the teeth',                example: 'De hond beet hem in zijn been. — The dog bit him in his leg.', synonyms: 'bit, morsel' },

  { nl: 'geboorte',         en: 'birth',               meaning: 'The act of being born',                               example: 'Bij zijn geboorte was iedereen blij. — At his birth, everyone was happy.', synonyms: 'nascence, nascency, nativity' },

  { nl: 'aanwijzing',       en: 'clue / indication',   meaning: 'A sign that points toward something',                 example: 'De politie zocht naar aanwijzingen. — The police looked for clues.', synonyms: 'clew, cue, denotation, hint' },

  { nl: 'besef',            en: 'awareness / realisation',meaning: 'Conscious understanding of something',             example: 'Hij had geen besef van gevaar. — He had no awareness of danger.', synonyms: 'cognisance, cognizance, consciousness, knowingness' },

  { nl: 'vorming',          en: 'formation / education',meaning: 'The process of developing or shaping',               example: 'De vorming van een nieuwe regering duurt lang. — The formation of a new government takes long.', synonyms: 'didactics, educational activity, instruction, pedagogy' },

  { nl: 'leer',             en: 'leather / doctrine',  meaning: 'Animal hide, or a set of beliefs',                    example: 'De schoenen zijn van leer gemaakt. — The shoes are made of leather.', synonyms: 'ism, philosophical system, philosophy' },

  { nl: 'slaapkamer',       en: 'bedroom',             meaning: 'The room where one sleeps',                           example: 'De slaapkamer is op de eerste verdieping. — The bedroom is on the first floor.', synonyms: 'bedchamber, chamber, sleeping accommodation, sleeping room' },

  { nl: 'achteraf',         en: 'afterwards / in hindsight',meaning: 'Looking back after the event',                   example: 'Achteraf gezien was het een slechte keuze. — In retrospect, it was a bad choice.', synonyms: 'after, afterward, later, later on' },

  { nl: 'glanzen',          en: 'to shine / gleam',    meaning: 'To emit a bright reflected light',                    example: 'Haar haar glansde in het zonlicht. — Her hair shone in the sunlight.', synonyms: 'effulgence, gleaming, glimmer, glow' },

  { nl: 'toegeven',         en: 'to admit / give in',  meaning: 'To confess something or yield to pressure',           example: 'Hij gaf uiteindelijk toe. — He finally gave in.', synonyms: 'acknowledge, allow in, intromit, let in' },

  { nl: 'kleren',           en: 'clothes',             meaning: 'Items worn on the body',                              example: 'Ze kocht nieuwe kleren. — She bought new clothes.', synonyms: 'apparel, clothe, dress, enclothe' },

  { nl: 'object',           en: 'object',              meaning: 'A material thing that can be seen or touched',        example: 'Wat is dat voor een object? — What kind of object is that?', synonyms: 'aim, objective, physical object, target' },

  { nl: 'makkelijk',        en: 'easy',                meaning: 'Not difficult',                                       example: 'Deze taak is makkelijk. — This task is easy.', synonyms: 'easygoing, leisurely' },

  { nl: 'verbaasd',         en: 'surprised / amazed',  meaning: 'Feeling or showing great surprise',                   example: 'Ze was verbaasd door het nieuws. — She was surprised by the news.', synonyms: 'amaze, astonish, astound, baffle' },

  { nl: 'voorbereiden',     en: 'to prepare',          meaning: 'To make ready for something',                         example: 'Hij bereidde zich voor op het examen. — He prepared himself for the exam.', synonyms: 'cook, fix, gear up, make' },

  { nl: 'kamp',             en: 'camp',                meaning: 'A place with temporary accommodation outdoors',       example: 'We sliepen in een kamp in het bos. — We slept in a camp in the forest.', synonyms: 'bivouac, cantonment, encampment' },

  { nl: 'uitleggen',        en: 'to explain',          meaning: 'To make something clear to someone',                  example: 'Kun je dat uitleggen? — Can you explain that?', synonyms: 'explicate' },

  { nl: 'verminderen',      en: 'to reduce / decrease',meaning: 'To make smaller in amount',                           example: 'We moeten de kosten verminderen. — We must reduce costs.', synonyms: 'bring down, cut, cut back, cut down' },

  { nl: 'vreugde',          en: 'joy',                 meaning: 'A feeling of great happiness',                        example: 'Ze sprong op van vreugde. — She jumped up with joy.', synonyms: 'delight, joyfulness, joyousness, pleasure' },

  { nl: 'dun',              en: 'thin',                meaning: 'Not thick',                                           example: 'Het ijs was te dun om op te lopen. — The ice was too thin to walk on.' },

  { nl: 'gemak',            en: 'ease / comfort',      meaning: 'Freedom from difficulty or discomfort',               example: 'Ze deed het met groot gemak. — She did it with great ease.', synonyms: 'comfortableness, easiness, simpleness, simplicity' },

  { nl: 'ontkennen',        en: 'to deny',             meaning: 'To declare something untrue',                         example: 'Hij ontkende alles. — He denied everything.' },

  { nl: 'jurk',             en: 'dress',               meaning: 'A woman\'s one-piece garment',                        example: 'Ze droeg een rode jurk. — She wore a red dress.', synonyms: 'attire, frock, garb' },

  { nl: 'ideaal',           en: 'ideal',               meaning: 'Perfect or most suitable',                            example: 'Dit is de ideale plek voor een picknick. — This is the ideal place for a picnic.', synonyms: 'apotheosis, nonesuch, nonpareil, nonsuch' },

  { nl: 'melden',           en: 'to report / announce',meaning: 'To inform or notify officially',                      example: 'Je moet het bij de politie melden. — You must report it to the police.', synonyms: 'account, declare, denote, study' },

  { nl: 'innemen',          en: 'to take / occupy',    meaning: 'To consume medication or capture a position',         example: 'Hij moest het medicijn innemen. — He had to take the medicine.', synonyms: 'busy, issue, lodge in, payoff' },

  { nl: 'gewicht',          en: 'weight',              meaning: 'The heaviness of an object',                          example: 'Het gewicht van de doos was te veel. — The weight of the box was too much.', synonyms: 'exercising weight, free weight' },

  { nl: 'accepteren',       en: 'to accept',           meaning: 'To receive or agree to something willingly',          example: 'Ze accepteerde het aanbod. — She accepted the offer.', synonyms: 'have, take' },

  { nl: 'minstens',         en: 'at least',            meaning: 'Not less than a specified amount',                    example: 'Ik slaap minstens acht uur. — I sleep at least eight hours.' },

  { nl: 'initiatief',       en: 'initiative',          meaning: 'The ability to start things independently',           example: 'Hij nam het initiatief. — He took the initiative.', synonyms: 'enterprise, enterprisingness, first step, go-ahead' },

  { nl: 'bitter',           en: 'bitter',              meaning: 'Having a sharp unpleasant taste, or resentful',       example: 'De koffie smaakt bitter. — The coffee tastes bitter.', synonyms: 'bitterness' },

  { nl: 'helaas',           en: 'unfortunately',       meaning: 'Expressing regret',                                   example: 'Helaas kan ik niet komen. — Unfortunately, I cannot come.', synonyms: 'alas, regrettably, unluckily' },

  { nl: 'stoten',           en: 'to bump / knock',     meaning: 'To knock against something',                          example: 'Ze stootte haar hoofd aan de deur. — She hit her head on the door.', synonyms: 'bulge, excrescence, extrusion, gibbosity' },

  { nl: 'troep',            en: 'mess / troop',        meaning: 'A disorderly mess, or a group of soldiers',           example: 'Ruim je troep op. — Clean up your mess.', synonyms: 'fix, hole, jam, messiness' },

  { nl: 'bidden',           en: 'to pray',             meaning: 'To speak to a deity',                                 example: 'Ze bidden elke avond. — They pray every evening.', synonyms: 'beg, implore' },

  { nl: 'verspreiden',      en: 'to spread',           meaning: 'To distribute or disseminate',                        example: 'Het nieuws verspreidde zich snel. — The news spread quickly.', synonyms: 'gap, spreading' },

  { nl: 'bepaling',         en: 'provision / rule',    meaning: 'A clause in a law or agreement',                      example: 'Er staat een bepaling in het contract. — There is a provision in the contract.', synonyms: 'convention, formula, normal, pattern' },

  { nl: 'kunstenaar',       en: 'artist',              meaning: 'A person who creates art',                            example: 'De kunstenaar schilderde een prachtig doek. — The artist painted a beautiful canvas.', synonyms: 'creative person' },

  { nl: 'verbieden',        en: 'to forbid',           meaning: 'To declare something not allowed',                    example: 'Roken is hier verboden. — Smoking is forbidden here.', synonyms: 'disallow, foreclose, forestall, interdict' },

  { nl: 'consequentie',     en: 'consequence',         meaning: 'A result or effect of an action',                     example: 'Denk aan de consequenties. — Think of the consequences.', synonyms: 'aftermath, effect, event, issue' },

  { nl: 'burgemeester',     en: 'mayor',               meaning: 'The head of a city or town government',               example: 'De burgemeester opende de tentoonstelling. — The mayor opened the exhibition.', synonyms: 'city manager' },

  { nl: 'westers',          en: 'western',             meaning: 'Relating to the Western world',                       example: 'Westerse landen hebben andere normen. — Western countries have different standards.', synonyms: 'horse opera, western sandwich' },

  { nl: 'verlies',          en: 'loss',                meaning: 'The fact of no longer having something',              example: 'Het verlies van een dierbare is pijnlijk. — The loss of a loved one is painful.' },

  { nl: 'verbeteren',       en: 'to improve',          meaning: 'To make better',                                      example: 'Je kunt je schrijven verbeteren door te oefenen. — You can improve your writing by practicing.', synonyms: 'ameliorate, amend, better, meliorate' },

  { nl: 'vegen',            en: 'to sweep / wipe',     meaning: 'To clean a surface with a brush or cloth',            example: 'Ze veegde de vloer. — She swept the floor.', synonyms: 'chimneysweep, chimneysweeper, expanse, pass over' },

  { nl: 'lelijk',           en: 'ugly',                meaning: 'Unpleasant to look at',                               example: 'Het gebouw is lelijk. — The building is ugly.', synonyms: 'surly' },

  { nl: 'aantreffen',       en: 'to find / encounter', meaning: 'To meet or find unexpectedly',                        example: 'We troffen hem thuis aan. — We found him at home.', synonyms: 'breakthrough, brush, clash, discovery' },

  { nl: 'tegemoet',         en: 'toward / to meet',    meaning: 'Moving in the direction of someone',                  example: 'Ze liep hem tegemoet. — She walked towards him.' },

  { nl: 'bezorgen',         en: 'to deliver / cause',  meaning: 'To bring to someone or to cause something',           example: 'De postbode bezorgt de post elke dag. — The postman delivers the mail every day.', synonyms: 'grounds, present, reason' },

  { nl: 'jongeman',         en: 'young man',           meaning: 'A male person who is young',                          example: 'De jongeman vroeg om hulp. — The young man asked for help.' },

  { nl: 'hoed',             en: 'hat',                 meaning: 'A covering worn on the head',                         example: 'Hij droeg een zwarte hoed. — He wore a black hat.', synonyms: 'chapeau, lid' },

  { nl: 'zenden',           en: 'to send / broadcast', meaning: 'To dispatch or transmit',                             example: 'Ze zonden een bericht. — They sent a message.', synonyms: 'direct, program, programme, send out' },

  { nl: 'rechts',           en: 'right / right-wing',  meaning: 'Toward the right side or politically conservative',   example: 'Sla rechts af bij de kruising. — Turn right at the intersection.', synonyms: 'rightist' },

  { nl: 'zondag',           en: 'Sunday',              meaning: 'The seventh day of the week',                         example: 'Op zondag rusten we uit. — On Sunday we rest.' },

  { nl: 'huisarts',         en: 'family doctor',       meaning: 'A general practitioner',                              example: 'Ik ga morgen naar de huisarts. — I am going to the doctor tomorrow.' },

  { nl: 'inrichting',       en: 'interior / setup',    meaning: 'The way something is furnished or organised',         example: 'De inrichting van het kantoor was modern. — The setup of the office was modern.', synonyms: 'apparatus, inside' },

  { nl: 'overig',           en: 'remaining / other',   meaning: 'The rest or the others',                              example: 'De overige deelnemers wachtten buiten. — The remaining participants waited outside.', synonyms: 'continue, remain, rest, stay' },

  { nl: 'degene',           en: 'the one who',         meaning: 'Used to refer to a specific person',                  example: 'Degene die het deed moet zich melden. — The one who did it must report himself.' },

  { nl: 'psycholoog',       en: 'psychologist',        meaning: 'A specialist in psychology and mental health',        example: 'Ze ging naar een psycholoog voor therapie. — She went to a psychologist for therapy.' },

  { nl: 'bereid',           en: 'willing / ready',     meaning: 'Prepared to do something',                            example: 'Hij was bereid te helpen. — He was willing to help.', synonyms: 'cook, fix, make, prepare' },

  { nl: 'koningin',         en: 'queen',               meaning: 'A female monarch',                                    example: 'De koningin opende het parlement. — The queen opened parliament.', synonyms: 'female monarch, queen regnant' },

  { nl: 'roze',             en: 'pink',                meaning: 'A light red colour',                                  example: 'Ze droeg een roze jurk. — She wore a pink dress.', synonyms: 'garden pink' },

  { nl: 'genezen',          en: 'to heal / cure',      meaning: 'To recover from or treat an illness',                 example: 'De wond genas snel. — The wound healed quickly.', synonyms: 'bring around, curative, mend, remedy' },

  { nl: 'tocht',            en: 'journey / trip',      meaning: 'A trip or an expedition',                             example: 'We maakten een lange tocht door het bos. — We made a long trek through the forest.', synonyms: 'journeying, travel' },

  { nl: 'blazen',           en: 'to blow',             meaning: 'To send out a stream of air',                         example: 'Hij blies de kaarsjes uit. — He blew out the candles.', synonyms: 'bump' },

  { nl: 'pers',             en: 'press / media',       meaning: 'The news media',                                      example: 'De pers was aanwezig bij de persconferentie. — The press was present at the press conference.', synonyms: 'imperativeness, insistence, insistency, medium' },

  { nl: 'toevoegen',        en: 'to add',              meaning: 'To include something extra',                          example: 'Voeg een beetje zout toe. — Add a little salt.', synonyms: 'hyperkinetic syndrome' },

  { nl: 'eigenaar',         en: 'owner',               meaning: 'A person who owns something',                         example: 'De eigenaar van het huis woont in het buitenland. — The owner of the house lives abroad.', synonyms: 'possessor, proprietor' },

  { nl: 'ontmoeting',       en: 'meeting / encounter', meaning: 'Coming together with someone',                        example: 'De ontmoeting verliep goed. — The meeting went well.', synonyms: 'brush, clash, get together, group meeting' },

  { nl: 'mes',              en: 'knife',               meaning: 'A cutting instrument with a sharp blade',             example: 'Hij sneed het brood met een mes. — He cut the bread with a knife.' },

  { nl: 'verslag',          en: 'report',              meaning: 'A written or spoken account of something',            example: 'Ze schreef een verslag over de vergadering. — She wrote a report about the meeting.', synonyms: 'account, study, written report' },

  { nl: 'onverwacht',       en: 'unexpected',          meaning: 'Not expected or foreseen',                            example: 'Het bezoek was onverwacht. — The visit was unexpected.' },

  { nl: 'personeel',        en: 'staff / personnel',   meaning: 'The employees of an organisation',                    example: 'Het personeel werkt hard. — The staff works hard.', synonyms: 'force, personnel department, personnel office, staff office' },

  { nl: 'vervelen',         en: 'to bore / be bored',  meaning: 'To feel or cause boredom',                            example: 'Hij begon zich te vervelen. — He began to get bored.', synonyms: 'aegir, dullard, eager, eagre' },

  { nl: 'terras',           en: 'terrace / patio',     meaning: 'An outdoor seating area',                             example: 'We zaten op het terras in de zon. — We sat on the terrace in the sun.', synonyms: 'bench' },

  { nl: 'nadenken',         en: 'to think / reflect',  meaning: 'To consider something carefully',                     example: 'Ik moet er eerst over nadenken. — I must first think about it.', synonyms: 'believe, chew over, conceive, consider' },

  { nl: 'schoot',           en: 'lap',                 meaning: 'The flat area formed by the thighs when sitting',     example: 'Het kind zat op haar schoot. — The child sat on her lap.' },

  { nl: 'uitvoerig',        en: 'extensive / detailed',meaning: 'Thorough and detailed',                               example: 'Hij gaf een uitvoerige uitleg. — He gave a detailed explanation.', synonyms: 'across-the-board, all-embracing, all-encompassing, all-inclusive' },

  { nl: 'afvragen',         en: 'to wonder / ask oneself',meaning: 'To question oneself about something',              example: 'Ik vraag me af wat er gaat gebeuren. — I wonder what will happen.', synonyms: 'admiration, marvel, wonderment' },

  { nl: 'geleerd',          en: 'learned / educated',  meaning: 'Having gained knowledge through study',               example: 'Ze is een geleerde vrouw. — She is a learned woman.', synonyms: 'acquire, develop, discover, educate' },

  { nl: 'gezellig',         en: 'cosy / sociable',     meaning: 'Warm, pleasant and welcoming',                        example: 'Het was gezellig bij hen thuis. — It was cozy at their home.', synonyms: 'cozy, mixer, snug, social' },

  { nl: 'geheugen',         en: 'memory',              meaning: 'The ability to remember things',                      example: 'Haar geheugen is uitstekend. — Her memory is excellent.', synonyms: 'remembering' },

  { nl: 'klasse',           en: 'class / elegance',    meaning: 'A social group or a quality of style',                example: 'Ze gedraagt zich met klasse. — She behaves with class.', synonyms: 'category, course, family, form' },

  { nl: 'crisis',           en: 'crisis',              meaning: 'A time of intense difficulty or danger',              example: 'De economische crisis trof veel mensen. — The economic crisis hit many people.' },

  { nl: 'studeren',         en: 'to study',            meaning: 'To pursue higher education at a university',          example: 'Ze studeert medicijnen in Amsterdam. — She studies medicine in Amsterdam.', synonyms: 'survey, work' },

  { nl: 'bedreigen',        en: 'to threaten',         meaning: 'To make someone feel in danger',                      example: 'Hij bedreigde haar met een mes. — He threatened her with a knife.', synonyms: 'endanger, imperil, jeopardise, jeopardize' },

  { nl: 'oprichten',        en: 'to establish / found',meaning: 'To set up an organisation',                           example: 'Ze richtten een nieuwe vereniging op. — They established a new association.', synonyms: 'constitute, institute, launch, plant' },

  { nl: 'pot',              en: 'pot / jar',           meaning: 'A round container for cooking or storing',            example: 'Er staat een pot jam op tafel. — There is a jar of jam on the table.', synonyms: 'can, commode, crapper, jarful' },

  { nl: 'maat',             en: 'size / mate',         meaning: 'A measurement or a close friend',                     example: 'Wat is je maat? — What is your size?', synonyms: 'first mate, teammate' },

  { nl: 'oefenen',          en: 'to practise',         meaning: 'To train or rehearse',                                example: 'Ze oefent elke dag piano. — She practices piano every day.', synonyms: 'exercise, practice, rehearse' },

  { nl: 'operatie',         en: 'operation',           meaning: 'A surgical procedure or a military action',           example: 'De operatie was een succes. — The operation was a success.' },

  { nl: 'ruiken',           en: 'to smell',            meaning: 'To perceive a scent through the nose',                example: 'De bloemen ruiken lekker. — The flowers smell nice.', synonyms: 'aroma, odor, odour, olfactory perception' },

  { nl: 'poot',             en: 'paw / leg',           meaning: 'A leg or foot of an animal',                          example: 'De hond gaf zijn poot. — The dog gave his paw.', synonyms: 'hand, manus, mitt' },

  { nl: 'vent',             en: 'guy / fellow',        meaning: 'An informal term for a man',                          example: 'Hij is een aardige vent. — He is a nice guy.', synonyms: 'associate, blighter, bloke, bozo' },

  { nl: 'simpel',           en: 'simple',              meaning: 'Easy to understand or do',                            example: 'Het antwoord is simpel. — The answer is simple.', synonyms: 'simpleton' },

  { nl: 'somber',           en: 'gloomy / dark',       meaning: 'Dark or depressing in mood',                          example: 'Het was een sombere dag. — It was a gloomy day.', synonyms: 'blue, darkness, depressed, dispirited' },

  { nl: 'partner',          en: 'partner',             meaning: 'A person who shares in an activity or relationship',  example: 'Mijn partner en ik werken samen. — My partner and I work together.', synonyms: 'better half, collaborator, cooperator, married person' },

  { nl: 'suiker',           en: 'sugar',               meaning: 'A sweet crystalline substance used in food',          example: 'Doe je suiker in je koffie? — Do you put sugar in your coffee?', synonyms: 'carbohydrate, refined sugar, saccharide' },

  { nl: 'snelheid',         en: 'speed',               meaning: 'The rate at which something moves',                   example: 'De snelheid van de trein was hoog. — The speed of the train was high.', synonyms: 'fastness, swiftness, velocity' },

  { nl: 'sprong',           en: 'jump / leap',         meaning: 'The act of jumping',                                  example: 'Hij maakte een grote sprong. — He made a big jump.', synonyms: 'bounce, bound, leaping, saltation' },

  { nl: 'beperking',        en: 'limitation',          meaning: 'Something that limits freedom or ability',            example: 'Er zijn beperkingen aan de vrijheid. — There are limitations on freedom.', synonyms: 'restriction' },

  { nl: 'maag',             en: 'stomach',             meaning: 'The organ that digests food',                         example: 'Ik heb pijn in mijn maag. — I have pain in my stomach.', synonyms: 'abdomen, belly, breadbasket, tum' },

  { nl: 'gemeen',           en: 'mean / common',       meaning: 'Unkind or shared by all',                             example: 'Hij was gemeen tegen haar. — He was mean to her.', synonyms: 'commons, green, intend, mean value' },

  { nl: 'vijftien',         en: 'fifteen',             meaning: 'The number 15',                                       example: 'Er waren vijftien mensen aanwezig. — There were fifteen people present.' },

  { nl: 'rede',             en: 'reason / speech',     meaning: 'A formal speech or the faculty of reasoning',         example: 'Hij hield een indrukwekkende rede. — He gave an impressive speech.', synonyms: 'address, ground, language, oral communication' },

  { nl: 'nuttig',           en: 'useful',              meaning: 'Serving a useful purpose',                            example: 'Dit gereedschap is erg nuttig. — This tool is very useful.', synonyms: 'utile, utilitarian' },

  { nl: 'omschrijven',      en: 'to describe',         meaning: 'To describe in different words',                      example: 'Kun je het anders omschrijven? — Can you describe it differently?', synonyms: 'account, depict, draw, report' },

  { nl: 'schade',           en: 'damage',              meaning: 'Harm or injury caused to something',                  example: 'De storm veroorzaakte veel schade. — The storm caused much damage.', synonyms: 'equipment casualty, harm, impairment' },

  { nl: 'beest',            en: 'beast / animal',      meaning: 'A large or frightening animal',                       example: 'Het beest was groot en eng. — The beast was large and scary.', synonyms: 'animate being, brute, carnal, creature' },

  { nl: 'kapot',            en: 'broken',              meaning: 'No longer working or in pieces',                      example: 'Mijn fiets is kapot. — My bicycle is broken.', synonyms: 'break, come apart, fall apart, interrupt' },

  { nl: 'beoordelen',       en: 'to judge / assess',   meaning: 'To form an opinion about quality or worth',           example: 'De jury beoordeelde de prestaties. — The jury evaluated the performances.', synonyms: 'appraise, evaluate, evaluator, jurist' },

  { nl: 'bescherming',      en: 'protection',          meaning: 'Keeping something or someone safe from harm',         example: 'Kinderen verdienen bescherming. — Children deserve protection.', synonyms: 'protective cover, protective covering' },

  { nl: 'meebrengen',       en: 'to bring along',      meaning: 'To carry something with you to a place',              example: 'Kun je iets te eten meebrengen? — Can you bring something to eat?' },

  { nl: 'wisselen',         en: 'to change / exchange',meaning: 'To replace one thing with another',                   example: 'Ze wisselden van mening. — They changed their opinion.', synonyms: 'alteration, modification' },

  { nl: 'noodzaak',         en: 'necessity',           meaning: 'Something indispensable or essential',                example: 'Voedsel is een basisnoodzaak. — Food is a basic necessity.', synonyms: 'essential, necessary, requirement, requisite' },

  { nl: 'jammer',           en: 'pity / shame',        meaning: 'Expressing regret about something',                   example: 'Wat jammer dat je er niet bij was. — Too bad you were not there.', synonyms: 'commiseration, disgrace, ignominy, pathos' },

  { nl: 'overnemen',        en: 'to take over',        meaning: 'To assume control of something',                      example: 'Hij nam het bedrijf over van zijn vader. — He took over the company from his father.' },

  { nl: 'eer',              en: 'honour',              meaning: 'Great respect and admiration',                        example: 'Het was een eer om hem te ontmoeten. — It was an honor to meet him.', synonyms: 'accolade, award, honor, laurels' },

  { nl: 'fraai',            en: 'beautiful / fine',    meaning: 'Attractive or of high quality',                       example: 'Het schilderij was fraai. — The painting was beautiful.', synonyms: 'amercement, mulct, ticket' },

  { nl: 'stijf',            en: 'stiff / rigid',       meaning: 'Not easily bent or moved',                            example: 'Mijn rug is stijf na het slapen. — My back is stiff after sleeping.', synonyms: 'cadaver, clay, corpse, remains' },

  { nl: 'economie',         en: 'economy',             meaning: 'The system of production and trade in a country',     example: 'De economie groeit langzaam. — The economy grows slowly.', synonyms: 'economic system' },

  { nl: 'vertegenwoordigen',en: 'to represent',        meaning: 'To act on behalf of someone or a group',              example: 'Wie vertegenwoordigt jullie land? — Who represents your country?', synonyms: 'correspond, stand for, symbolise, symbolize' },

  { nl: 'bruin',            en: 'brown',               meaning: 'A dark colour like wood or earth',                    example: 'De hond heeft bruine ogen. — The dog has brown eyes.', synonyms: 'brownness' },

  { nl: 'toekomstig',       en: 'future (adj.)',        meaning: 'Relating to or expected in the future',               example: 'Mijn toekomstige baan klinkt goed. — My future job sounds good.' },

  { nl: 'drank',            en: 'drink / beverage',    meaning: 'A liquid for drinking, often alcoholic',              example: 'Hij dronk geen sterke drank. — He did not drink strong alcohol.', synonyms: 'boozing, crapulence, drinkable, drinking' },

  { nl: 'sneeuw',           en: 'snow',                meaning: 'Frozen water falling from the sky',                   example: 'De kinderen speelden in de sneeuw. — The children played in the snow.', synonyms: 'snowfall' },

  { nl: 'kruis',            en: 'cross',               meaning: 'A shape with two intersecting lines',                 example: 'Er staat een kruis op het kerkhof. — There is a cross in the cemetery.', synonyms: 'crisscross, mark' },

  { nl: 'tijdschrift',      en: 'magazine / journal',  meaning: 'A periodical publication',                            example: 'Ze las een tijdschrift in de wachtkamer. — She read a magazine in the waiting room.', synonyms: 'diary, mag' },

  { nl: 'verdelen',         en: 'to divide / share',   meaning: 'To separate into parts or share out',                 example: 'Ze verdeelden het werk eerlijk. — They divided the work fairly.', synonyms: 'part, percentage, portion, water parting' },

  { nl: 'automatisch',      en: 'automatic',           meaning: 'Working without human control',                       example: 'De deur opent automatisch. — The door opens automatically.', synonyms: 'automatic pistol, automatic rifle, machine rifle' },

  { nl: 'doos',             en: 'box',                 meaning: 'A container with flat sides',                         example: 'De doos was vol met speelgoed. — The box was full of toys.', synonyms: 'loge' },

  { nl: 'verdieping',       en: 'floor / storey',      meaning: 'A level of a building',                               example: 'Het kantoor is op de derde verdieping. — The office is on the third floor.', synonyms: 'flooring, level, story' },

  { nl: 'aantrekkelijk',    en: 'attractive',          meaning: 'Pleasing to look at or appealing',                    example: 'Ze vond het een aantrekkelijk aanbod. — She found it an attractive offer.' },

  { nl: 'rukken',           en: 'to jerk / pull',      meaning: 'To pull suddenly and forcefully',                     example: 'Hij rukte aan de deur. — He pulled at the door.', synonyms: 'dork, jerking, jolt, pulling' },

  { nl: 'project',          en: 'project',             meaning: 'A planned piece of work with a specific goal',        example: 'We werken aan een groot project. — We work on a big project.', synonyms: 'labor, projection, task, undertaking' },

  { nl: 'buitengewoon',     en: 'extraordinary',       meaning: 'Very unusual or remarkable',                          example: 'Ze was buitengewoon slim. — She was exceptionally smart.', synonyms: 'over-the-top, sinful' },

  { nl: 'opvoeding',        en: 'upbringing',          meaning: 'The way a child is raised and educated',              example: 'Goede opvoeding is essentieel. — Good education is essential.', synonyms: 'breeding, bringing up, fosterage, fostering' },

  { nl: 'tikken',           en: 'to tap / tick',       meaning: 'To make a light repeated sound',                      example: 'Hij tikte op de deur. — He knocked on the door.', synonyms: 'pat, rap, strike, ticking' },

  { nl: 'overweging',       en: 'consideration',       meaning: 'Careful thought before a decision',                   example: 'Na rijp overweging besloot hij te gaan. — After careful consideration he decided to go.', synonyms: 'circumstance, condition' },

  { nl: 'tegenstander',     en: 'opponent',            meaning: 'A person who opposes or competes against you',        example: 'Hij versloeg zijn tegenstander. — He defeated his opponent.', synonyms: 'adversary, antagonist, opposer, opposite' },

  { nl: 'degelijk',         en: 'solid / thorough',    meaning: 'Strong, reliable and well made',                      example: 'Het is degelijk vakwerk. — It is solid workmanship.', synonyms: 'exhaustive, solid state, solidness, thoroughgoing' },

  { nl: 'hut',              en: 'hut / cabin',         meaning: 'A small simple dwelling',                             example: 'Ze overnachtten in een hut in het bos. — They stayed overnight in a cabin in the forest.', synonyms: 'army hut, field hut, hovel, hutch' },

  { nl: 'vrucht',           en: 'fruit',               meaning: 'The fleshy product of a plant containing seeds',      example: 'De vrucht was rijp en zoet. — The fruit was ripe and sweet.', synonyms: 'yield' },

];



/** Returns a shuffled copy of the word list */

export function shuffled(arr) {

  const copy = [...arr];

  for (let i = copy.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];

  }

  return copy;

}

