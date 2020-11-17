var source1 = document.getElementsByClassName("question-audio").src= "audio-files/Bee Gees - Stayin' Alive.mp3";
var source2 = document.getElementsByClassName("question-audio").src= "audio-files/Billy Joel - Piano Man.mp3";
var source3 = document.getElementsByClassName("question-audio").src= "audio-files/Bobby McFerrin - Dont Worry Be Happy.mp3";
var source4 = document.getElementsByClassName("question-audio").src= "audio-files/David Bowie - Heroes.mp3";
var source5 = document.getElementsByClassName("question-audio").src= "audio-files/Europe - The Final Countdown.mp3";
var source6 = document.getElementsByClassName("question-audio").src= "audio-files/Stromae - Formidable.mp3";
var source7 = document.getElementsByClassName("question-audio").src= "audio-files/George Ezra - Budapest.mp3";
var source8 = document.getElementsByClassName("question-audio").src= "audio-files/George Michael - Careless Whisper.mp3";
var source9 = document.getElementsByClassName("question-audio").src= "audio-files/The Beatles - Here Comes The Sun.mp3";
var source10 = document.getElementsByClassName("question-audio").src= "audio-files/Stevie Wonder - Isnt She Lovely.mp3";
var source11 = document.getElementsByClassName("question-audio").src= "audio-files/Pat Benatar - Love Is A Battlefield.mp3";
var source12 = document.getElementsByClassName("question-audio").src= "audio-files/Plain White T's - Hey There Delilah.mp3";
var source13 = document.getElementsByClassName("question-audio").src= "audio-files/Queen - Bohemian Rhapsody.mp3";
var source14 = document.getElementsByClassName("question-audio").src= "audio-files/Ricky Martin - Livin La Vida Loca.mp3";
var source15 = document.getElementsByClassName("question-audio").src= "audio-files/Justin Timberlake - SexyBack.mp3";
var source16 = document.getElementsByClassName("question-audio").src= "audio-files/The Beatles - Sgt. Pepper's Lonely Hearts Club Band.mp3";
var source17 = document.getElementsByClassName("question-audio").src= "audio-files/Simple Minds - Dont You.mp3";
var source18 = document.getElementsByClassName("question-audio").src= "audio-files/Stevie Wonder Superstition.mp3";
var source19 = document.getElementsByClassName("question-audio").src= "audio-files/Eurythmics - Sweet Dreams.mp3";
var source20 = document.getElementsByClassName("question-audio").src= "audio-files/The Cranberries - Zombie.mp3";
var source21 = document.getElementsByClassName("question-audio").src= "audio-files/Jimi Hendrix - All Along The Watchtower.mp3";
var source22 = document.getElementsByClassName("question-audio").src= "audio-files/The White Stripes - Seven Nation Army.mp3";
var source23 = document.getElementsByClassName("question-audio").src= "audio-files/Vance Joy - Riptide.mp3";
var source24 = document.getElementsByClassName("question-audio").src= "audio-files/Milky Chance - Stolen Dance.mp3";
var source25 = document.getElementsByClassName("question-audio").src= "audio-files/Hozier - Take Me To Church.mp3";
var source26 = document.getElementsByClassName("question-audio").src= "audio-files/Radiohead - Creep.mp3";
var source27 = document.getElementsByClassName("question-audio").src= "audio-files/The Clash - Should I Stay or Should I Go.mp3";
var source28 = document.getElementsByClassName("question-audio").src= "audio-files/Ariana Grande - God is a woman.mp3";
var source29 = document.getElementsByClassName("question-audio").src= "audio-files/Dolly Parton - Jolene.mp3";
var source30 = document.getElementsByClassName("question-audio").src= "audio-files/Billie Eilish - bad guy.mp3";

// Quiz array
const quiz = [
    {
        song: source1,
        options:["Bee Gees - Stayin' Alive", "Bee Gees - Night Fever", "ABBA - Dancing Queen", "The Trammps - Disco Inferno"],
        answer: 0
    },
    {
        song: source2,
        options:["Elton John - Tiny Dancer", "Billy Joel - Piano Man", "Alicia Keys - Fallin'", "Journey - Don't Stop Believin'"],
        answer: 1
    },        
    {
        song: source3,
        options:["Bobby McFerrin - Don't Worry Be Happy", "Katrina & the Waves - Walking on Sunshine", "Monty Python - always Look on the Bright Side of Life ","Bob Marley - Three Little Birds"],
        answer: 0
    }, 
    {
        song: source4,
        options:["David Bowie - Heroes", "Foo Fighters - My Hero", "Queen - Under Pressure", "Kansas - Dust in the Wind"],
        answer: 0
    },
    {
        song: source5,
        options:["Europe - The Final Countdown", "Steve Stevens - Top Gun Anthem", "Survivor - Eye of the Tiger", "Guns N'Roses - Welcome to the Jungle"],
        answer: 0
    },
    {
        song: source6,
        options:["Stromae - Formidable", "Maître Gims - La Même", "Kiesza - Hideaway", "Calvin Harris - Blame"],
        answer: 0
    },
    {
        song: source7,
        options:["George Ezra - Budapest", "Andy Grammer - Honey, I'm Good", "James Bay - Hold Back the River", "Sam Smith - Stay with Me"],
        answer: 0
    },
    {
        song: source8,
        options:["George Michael - Careless Whisper", "Men at Work - Who Can it Be Now?", "Sade - Smooth Operator", "Gerry Rafferty - Baker Street"],
        answer: 0
    },
    {
        song: source9,
        options:["The Beatles - Here Comes The Sun", "The Beatles - Come Together", "The Beach Boys - Wouldn't it Be Nice", "Queen - Don't Stop Me Now"],
        answer: 0
    },
    {
        song: source10,
        options:["Stevie Wonder - Isnt She Lovely", "Rascal Flatts - My Wish", "Elton John - Blessed", "Paul Simon - Father and Daughter"],
        answer: 0
    },
    {
        song: source11,
        options:["Pat Benatar - Love Is A Battlefield", "Ingram Hill - Will I Ever Make it Home", "Soft Cell - Tainted Love", "A-ha - Take On Me"],
        answer: 0
    },
    {
        song: source12,
        options:["Plain White T's - Delilah", "Owl City - Fireflies", "Train - Hey, Soul Sister", "Passenger - Let Her Go"],
        answer: 0
    },
    {
        song: source13,
        options:["Queen - Bohemian Rhapsody ", "ABBA - Dancing Queen", "Queen - I Want to Break Free", "Led Zeppelin - Stairway to Heaven"],
        answer: 0
    },
    {
        song: source14,
        options:["Ricky Martin - Livin La Vida Loca", "Coldplay - Viva La Vida", "Lou Bega - Mambo #5", "Shakira - Loca"],
        answer: 0
    },
    {
        song: source15,
        options:["Justin Timberlake - SexyBack", "Gnarls Barkley - Crazy", "LMFAO - Sexy and I Know It", "Mark Ronson - Uptown Funk"],
        answer: 0
    },
    {
        song: source16,
        options:["The Beatles - Sgt. Pepper's Lonely Hearts Club Band", "Pink Floyd - Money", "The Zombies - She's Not There", "Simon & Garfunkel - Mrs. Robinson"],
        answer: 0
    },
    {
        song: source17,
        options:["Simple Minds - Dont You", "A-ha - Take on Me", "Tears for Fears - Everybody Wants to Rule the World", "Lionel Richie - All Night Long"],
        answer: 0
    },

    {
        song: source18,
        options:["Stevie Wonder - Superstition", "Fred Wesley - House Party", "Commodores - Machine Gun", "The Jackson Sisters - I Believe In Miracles"],
        answer: 0
    },
    {
        song: source19,
        options:["Eurythmics - Sweet Dreams", "Annie Lennox - Here Comes the Rain Again", "Michael Jackson - Billie Jean", "Queen - Another One Bites the Dust"],
        answer: 0
    },
    {
        song: source20,
        options:["The Cranberries - Zombie", "Sarah McLachlan - Possession", "Alanis Morissette - You Ought to Know", "October Project - Bury My Lovely"],
        answer: 0
    },
    {
        song: source21,
        options:["Jimi Hendrix - All Along The Watchtower", "Eric Clapton - Cocaine", "Dire Straits - Sultans of Swing", "The RollingStones - Gimme Shelter"],
        answer: 0
    },
    {
        song: source22,
        options:["The White Stripes - Seven Nation Army", "Jet - Are You Gonna Be My Girl", "Royal Blood – Lights Out", "Nirvana Smells Like Teen Spirit"],
        answer: 0
    },
    {
        song: source23,
        options:["Vance Joy - Riptide", "Taylor Swift - Enchanted", "Elliott Brood - The Valley Town", "Joe Purdy - Wash Away"],
        answer: 0
    },
    {
        song: source24,
        options:["Milky Chance - Stolen Dance", "Glass Animal - Gooey", "OneRepublic - Counting Stars", "Vance Joy - Riptide"],
        answer: 0
    },
    {
        song: source25,
        options:["Hozier - Take Me To Church", "Gotye - Somebody That I Used to Know", "Sam Smith - I'm Not the Only One", "Cash Cash - Take Me Home"],
        answer: 0
    },
    {
        song: source26,
        options:["Radiohead - Creep", "Oasis - Wonderwall", "R.E.M. - Losing My Religion", "The Verve - Bitter Sweet Symphony"],
        answer: 0
    },
    {
        song: source27,
        options:["The Clash - Should I Stay or Should I Go", "Guns N' Roses - Sweet Child o' Mine", "Pyxies - Where is My Mind?", "Violent Femmes - Blister in the Sun"],
        answer: 0
    },
    {
        song: source28,
        options:["Ariana Grande - God is a woman", "Camila Cabello - Senorita", "Ariana Grande - Thank U, Next", "Ariana Grande - No Tears Left to Cry"],
        answer: 0
    },
    {
        song: source29,
        options:["Dolly Parton - Jolene", "Neil Diamond - Sweet Caroline", "Plain White T's - Delilah", "John Denver - Country Roads"],
        answer: 0
    },
    {
        song: source30,
        options:["Billie Eilish - Bad Guy", "Lil Nas X - Old Town Road", "Tones and I - Dance Monkey", "Imagine Dragons - Believer"],
        answer: 0
    }
];