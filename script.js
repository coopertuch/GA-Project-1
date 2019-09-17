// COOP'S QUESTIONS GAME FLOW - Good questions skim the surface, Great questions drive meaningful connection. 

// ACTION ITEMS //
// Set Up Input + Submit, Push to Custom Questions Array
// Each Iteration Pops Current Question
// Thumbs Up (Reports Positive), Thumbs Down (Reports Negative), Pops
// If (array == 0), alert('You've answered all the questions in this category! Try another category, add your own questions, or reset.');
// Set up GitHub Website

// VARIABLES & OBJECTS //
haveFunQuestions = [
    'sample fun question 1',
    'sample fun question 2',
    'sample fun question 3',
    'sample fun question 4',
    'sample fun question 5',
];
getDeepQuestions = [
    'sample deep question 1',
    'sample deep question 2',
    'sample deep question 3',
    'sample deep question 4',
    'sample deep question 5',
];
thisOrThatQuestions = [
    'sample this or that question 1',
    'sample this or that question 2',
    'sample this or that question 3',
    'sample this or that question 4',
    'sample this or that question 5',
];
topQuestions = [
    'sample top question 1',
    'sample top question 2',
    'sample top question 3',
    'sample top question 4',
    'sample top question 5',
];
customQuestions = [];

// DOM & EVENT LISTENERS //
const question = document.querySelector('.question');

const haveFun = document.querySelector('.fun');
haveFun.addEventListener('click', startFunGame);

const getDeep = document.querySelector('.deep');
getDeep.addEventListener('click', startDeepGame);

const thisOrThat = document.querySelector('.thisorthat');
thisOrThat.addEventListener('click', startThisGame);

const topThree = document.querySelector('.top');
topThree.addEventListener('click', startTopGame);

let custom = document.querySelector('.custom');
custom.addEventListener('click', startCustomGame);

// FUNCTIONS //
function startFunGame() {
    for (i = 0; i < haveFunQuestions.length; i++) {
    haveFunRandom = haveFunQuestions[Math.floor(Math.random()*haveFunQuestions.length)];
    question.innerHTML = haveFunRandom;
    }
}

function startDeepGame() {
    for (i = 0; i < getDeepQuestions.length; i++) {
    getDeepRandom = getDeepQuestions[Math.floor(Math.random()*getDeepQuestions.length)];
    question.innerHTML = getDeepRandom;
    }
}

function startThisGame() {
    for (i = 0; i < thisOrThatQuestions.length; i++) {
    thisOrThatRandom = thisOrThatQuestions[Math.floor(Math.random()*thisOrThatQuestions.length)];
    question.innerHTML = thisOrThatRandom;
    }
}

function startTopGame() {
    for (i = 0; i < topQuestions.length; i++) {
    topRandom = topQuestions[Math.floor(Math.random()*topQuestions.length)];
    question.innerHTML = topRandom;
    }
}

function startCustomGame() {
    for (i = 0; i < customQuestions.length; i++) {
    customRandom = customQuestions[Math.floor(Math.random()*customQuestions.length)];
    question.innerHTML = customRandom;
    }
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', function() {
    location.reload();
});

// Thumbs Up Button (Reports Positive Feedback)
// const thumbsUp = document.querySelector('.thumbsup');
// thumbsUp.addEventListener('click', );

// Thumbs Down Button (Reports Negative Feedback) (Pops Item)
// const thumbsDown = document.querySelector('.thumbsdown');
// thumbsDown.addEventListener('click', );

// Timer

// SOURCES //
// https://www.w3schools.com/jsref/met_loc_reload.asp
// page reset