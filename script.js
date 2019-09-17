// COOP'S QUESTIONS GAME FLOW - Good questions skim the surface, Great questions drive meaningful connection. 
// Multiple categories - Fun, Romantic, Deep, Custom, +
// Randomly draws questions from selected category.
// User can slideshow through questions.
// Tracks a "thumbs up" or "thumbs down", removing the question.
// Allow users to add their own questions in the + section.
// Custom section contains all questions added from +

// VARIABLES & OBJECTS //
// Have Fun Questions Object
haveFunQuestions = [
    'sample fun question 1',
    'sample fun question 2',
    'sample fun question 3',
    'sample fun question 4',
    'sample fun question 5',
];
// Get Deep Questions Object
getDeepQuestions = [
    'sample deep question 1',
    'sample deep question 2',
    'sample deep question 3',
    'sample deep question 4',
    'sample deep question 5',
];
// This Or That Questions Object
thisOrThatQuestions = [
    'sample this or that question 1',
    'sample this or that question 2',
    'sample this or that question 3',
    'sample this or that question 4',
    'sample this or that question 5',
];
// Top 3 Questions Object
topQuestions = [
    'sample top question 1',
    'sample top question 2',
    'sample top question 3',
    'sample top question 4',
    'sample top question 5',
];
// Custom Questions Object (Empty Array)
customQuestions = [
    'sample custom question 1',
    'sample custom question 2',
    'sample custom question 3',
    'sample custom question 4',
    'sample custom question 5',
];
// + Input Object (Push to Array)

// DOM & EVENT LISTENERS //
const question = document.querySelector('.question')
// Have Fun Button
const haveFun = document.querySelector('.fun');
haveFun.addEventListener('click', startGame);

// Get Deep Questions Button
// const getDeep = document.querySelector('.deep');
// getDeep.addEventListener('click', );

// This Or That Questions Button
// const thisOrThat = document.querySelector('.thisorthat');
// thisOrThat.addEventListener('click', );

// Top 3 Questions Button
// const top = document.querySelector('.top');
// top.addEventListener('click', );

// Custom Questions Button 
// const custom = document.querySelector('.custom');
// custom.addEventListener('click', );

// + Input Button 
// const add = document.querySelector('.add');
// add.addEventListener('click', );

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

// FUNCTIONS //
function startGame() {
    question.innerHTML = 'Hello World';
}
// Have Fun Button Randomly Sets Questions 
// Get Deep Questions Button Randomly Sets Questions 
// This Or That Questions Button Randomly Sets Questions 
// Top 3 Questions Button Randomly Sets Questions 
// Custom Questions Button Randomly Sets Questions From Custom Array
// + Input Button Prompts User To Input Questions

// Thumbs Up Button (Reports Positive Feedback)
// Thumbs Down Button (Reports Negative Feedback)
// Arrow Left Button Slides Back
// Arrow Right Button Slides Forward

// Reset (Resets Page)
const reset = document.querySelector('.reset');
reset.addEventListener('click', function() {
    location.reload();
});

// SOURCES //
// https://www.w3schools.com/jsref/met_loc_reload.asp
// page reset