// COOP'S QUESTIONS GAME FLOW - Good questions skim the surface, Great questions drive meaningful connection. 

// ACTION ITEMS //
// + Input Object (Push to Custom Array)
// Array to hold randomized questions to maintain order, pop old

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

let custom = document.querySelector('.top');
topThree.addEventListener('click', startTopGame);

const add = document.querySelector('.add');
add.addEventListener('click', promptInput);

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

const reset = document.querySelector('.reset');
reset.addEventListener('click', function() {
    location.reload();
});

// EXTRA //
// Thumbs Up Button
// const thumbsUp = document.querySelector('.thumbsup');
// thumbsUp.addEventListener('click', );

// Thumbs Down Button
// const thumbsDown = document.querySelector('.thumbsdown');
// thumbsDown.addEventListener('click', );

// Arrow Left Button
// const previous = document.querySelector('.previous');
// previous.addEventListener('click', );

// Arrow Right Button
// const next = document.querySelector('.next');
// next.addEventListener('click', );

// Thumbs Up Button (Reports Positive Feedback)
// Thumbs Down Button (Reports Negative Feedback)
// Arrow Left Button Slides Back
// Arrow Right Button Slides Forward

// SOURCES //
// https://www.w3schools.com/jsref/met_loc_reload.asp
// page reset
// https://plainjs.com/javascript/manipulation/replace-a-dom-element-36/
// replaceing a DOM element