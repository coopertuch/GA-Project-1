// COOP'S QUESTIONS GAME FLOW - Good questions skim the surface, Great questions drive meaningful connection. 

// ACTION ITEMS //
// Thumbs Up (Reports Positive), Thumbs Down (Reports Negative), Pops
// Fisher Yates Randomizers in Functions
// Add Questions
// Set up GitHub Website

// VARIABLES & OBJECTS //
haveFunQuestions = [
    'Sample fun question 1',
    'Sample fun question 2',
    'Sample fun question 3',
    'Sample fun question 4',
    'Sample fun question 5',
];
getDeepQuestions = [
    'Sample deep question 1',
    'Sample deep question 2',
    'Sample deep question 3',
    'Sample deep question 4',
    'Sample deep question 5',
];
thisOrThatQuestions = [
    'Sample this or that question 1',
    'Sample this or that question 2',
    'Sample this or that question 3',
    'Sample this or that question 4',
    'Sample this or that question 5',
];
topQuestions = [
    'Sample top question 1',
    'Sample top question 2',
    'Sample top question 3',
    'Sample top question 4',
    'Sample top question 5',
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

let add = document.querySelector('.add');
let inputSection = document.querySelector('.inputSection');
let submit = document.querySelector('.submit');
add.addEventListener('click', toggleInput);
submit.addEventListener('click', addCustom);

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
    question.innerHTML = (`Rank your Top 3: ${topRandom}!`);
    }
}

function startCustomGame() {
    inputSection.classList.remove('off');
    inputSection.classList.add('on');
    submit.classList.remove('off');
    submit.classList.add('on');
    for (i = 0; i < customQuestions.length; i++) {
    customRandom = customQuestions[Math.floor(Math.random()*customQuestions.length)];
    question.innerHTML = customRandom;
    }
}



function addCustom() {
    let input = document.querySelector('.input').value;
    customQuestions.push(input);
    document.querySelector('.input').value = '';
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

// SOURCES //
// https://www.w3schools.com/jsref/met_loc_reload.asp
// page reset

// set time out for 'Thanks!' display after submit