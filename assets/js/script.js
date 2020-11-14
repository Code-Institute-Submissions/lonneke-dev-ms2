// Instructions modal
var modal = document.getElementById('instructionsModal');
var btn = document.getElementById('instructions');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Sources of audio-files

var source1 = document.getElementsByClassName("question-audio").src= "audio-files/test1.mp3";
var source2 = document.getElementsByClassName("question-audio").src= "audio-files/test2.mp3";
var source3 = document.getElementsByClassName("question-audio").src= "audio-files/test3.mp3";
var source4 = document.getElementsByClassName("question-audio").src= "audio-files/test4.mp3";

// Quiz array
const quiz = [
    {
        song: source1,
        options:["Can't help falling in love - Elvis Presley", "madonna", "dman"],
        answer: 0
    },
    {
        song: source2,
        options:["a", "b", "c","d"],
        answer: 1
    },        
    {
        song: source3,
        options:["a", "b", "c","d"],
        answer: 2
    }, 
    {
        song: source4,
        options:["a", "b", "c","d"],
        answer: 3
    }

];

const questionNumber = document.querySelector(".question-number");
const questionAudio = document.querySelector(".question-audio");
const questionContainer = document.querySelector("option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

// Question 1/2 etc
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++) {
        availableQuestions.push(quiz[i])
    }
}

// Randomquestion
function getNewQuestion() {
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionAudio.src = currentQuestion.song;
    
}

window.onload = function() {
    setAvailableQuestions();
    getNewQuestion();
}