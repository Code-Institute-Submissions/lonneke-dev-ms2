const questionNumber = document.querySelector(".question-number");
const questionAudio = document.querySelector(".question-audio");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultsBox = document.querySelector(".results-box");
const nextButton = document.querySelector(".next-btn");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;

// Question counter
function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++) {
        availableQuestions.push(quiz[i]);
    }
}

// Random question
function getNewQuestion() {
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + 10;

    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionAudio.src = currentQuestion.song;

    const index1 = availableQuestions.indexOf(questionIndex);

    availableQuestions.splice(index1,1);

    hideNext();

// Options and random options
    const optionlen = currentQuestion.options.length;
    
    for(let i=0; i<optionlen; i++) {
        availableOptions.push(i);
    }
    optionContainer.innerHTML = " ";
    let animationDelay = 0.15;

    for(let i=0; i<optionlen; i++) {
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];

        option.style.animationDelay = animationDelay + "s";
        animationDelay = animationDelay + 0.15;

        option.id = optionIndex;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    }

    questionCounter++;
}

// Get the results of the current question
function getResult(element) {
    const id = parseInt(element.id);
    
    if(id === currentQuestion.answer) {
        element.classList.add("correct");

        updateAnwserIndicator("correct");
        correctAnswers++;
        console.log("correct:" + correctAnswers);
    } else {
        element.classList.add("wrong");

        updateAnwserIndicator("wrong");

        const optionLen = optionContainer.children.length;
        for(let i=0; i<optionLen; i++) {
            if(parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    unclickableOptions();
    revealNext();
}

// make sure the user can't change the answer
function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

// keeps track of how many question were answered correctly
function answerIndicator() {
    answersIndicatorContainer.innerHTML = " ";
    const totalQuestion = 10;
    for(let i=0; i<totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

function updateAnwserIndicator(markType) {
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType);
}

// next button shows next question
function next() {
    if(questionCounter === 10) {
        console.log("quiz over");
        quizOver();
    } else {
        getNewQuestion();
    }
}

function revealNext() {
    nextButton.classList.remove("hide");
}

function hideNext() {
    nextButton.classList.add("hide");
}

function quizOver() {
    quizBox.classList.add("hide");

    resultsBox.classList.remove("hide");
    quizResults();
}

// all results 
function quizResults() {
    resultsBox.querySelector(".total-question").innerHTML = 10;
    resultsBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultsBox.querySelector(".total-wrong").innerHTML = questionCounter - correctAnswers;
    const percentage = (correctAnswers/quiz.length)*100;
    resultsBox.querySelector(".total-percentage").innerHTML = percentage.toFixed(2) + "%";
    resultsBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + 10;
}

function resetQuiz() {
    questionCounter = 0;
    correctAnswers = 0;
}

function tryAgainQuiz() {
    resultsBox.classList.add("hide");

    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function goToHome() {
    resultsBox.classList.add("hide");

    homeBox.classList.remove("hide");
    resetQuiz();
}

// #### STARTING POINT ####

function startQuiz() {

    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");

    setAvailableQuestions(); 

    getNewQuestion();
    
    answerIndicator();
}