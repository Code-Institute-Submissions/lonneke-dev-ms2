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
        options:["Bee Gees - Stayin' Alive", "madonna", "dman"],
        answer: 0
    },
    {
        song: source2,
        options:["a", "Billy Joel - Piano Man", "c","d"],
        answer: 1
    },        
    {
        song: source3,
        options:["Bobby McFerrin - Don't Worry Be Happy", "b", "c","d"],
        answer: 0
    }, 
    {
        song: source4,
        options:["David Bowie - Heroes", "b", "c","d"],
        answer: 0
    },
    {
        song: source5,
        options:["Europe - The Final Countdown", "b", "c","d"],
        answer: 0
    },
    {
        song: source6,
        options:["Stromae - Formidable", "b", "c","d"],
        answer: 0
    },
    {
        song: source7,
        options:["George Ezra - Budapest", "b", "c","d"],
        answer: 0
    },
    {
        song: source8,
        options:["George Michael - Careless Whisper", "b", "c","d"],
        answer: 0
    },
    {
        song: source9,
        options:["The Beatles - Here Comes The Sun", "b", "c","d"],
        answer: 0
    },
    {
        song: source10,
        options:["Stevie Wonder - Isnt She Lovely", "b", "c","d"],
        answer: 0
    },
    {
        song: source11,
        options:["Pat Benatar - Love Is A Battlefield", "b", "c","d"],
        answer: 0
    },
    {
        song: source12,
        options:["Plain White T's - Hey There Delilah", "b", "c","d"],
        answer: 0
    },
    {
        song: source13,
        options:["Queen - Bohemian Rhapsody ", "b", "c","d"],
        answer: 0
    },
    {
        song: source14,
        options:["Ricky Martin - Livin La Vida Loca", "b", "c","d"],
        answer: 0
    },
    {
        song: source15,
        options:["Justin Timberlake - SexyBack", "b", "c","d"],
        answer: 0
    },
    {
        song: source16,
        options:["The Beatles - Sgt. Pepper's Lonely Hearts Club Band", "b", "c","d"],
        answer: 0
    },
    {
        song: source17,
        options:["Simple Minds - Dont You", "b", "c","d"],
        answer: 0
    },

    {
        song: source18,
        options:["Stevie Wonder - Superstition", "b", "c","d"],
        answer: 0
    },
    {
        song: source19,
        options:["Eurythmics - Sweet Dreams", "b", "c","d"],
        answer: 0
    },
    {
        song: source20,
        options:["The Cranberries - Zombie", "b", "c","d"],
        answer: 0
    },
    {
        song: source21,
        options:["Jimi Hendrix - All Along The Watchtower", "b", "c","d"],
        answer: 0
    },
    {
        song: source22,
        options:["The White Stripes - Seven Nation Army", "b", "c","d"],
        answer: 0
    },
    {
        song: source23,
        options:["Vance Joy - Riptide", "b", "c","d"],
        answer: 0
    },
    {
        song: source24,
        options:["Milky Chance - Stolen Dance", "b", "c","d"],
        answer: 0
    },
    {
        song: source25,
        options:["Hozier - Take Me To Church", "b", "c","d"],
        answer: 0
    },
    {
        song: source26,
        options:["Radiohead - Creep", "b", "c","d"],
        answer: 0
    },
    {
        song: source27,
        options:["The Clash - Should I Stay or Should I Go", "b", "c","d"],
        answer: 0
    },
    {
        song: source28,
        options:["Ariana Grande - God is a woman", "b", "c","d"],
        answer: 0
    },
    {
        song: source29,
        options:["Dolly Parton - Jolene", "b", "c","d"],
        answer: 0
    },
    {
        song: source30,
        options:["Billie Eilish - bad guy", "b", "c","d"],
        answer: 0
    }
];