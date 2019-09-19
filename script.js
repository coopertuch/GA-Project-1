// COOP'S QUESTIONS GAME FLOW - Good questions skim the surface, Great questions drive meaningful connection. 

// ACTION ITEMS //
// Fix Fisher Yates Randomizer
// Fix Mobile Text

// Clean up CSS
// ReadMe

// Google API // Python
// Consider Additional Features

// VARIABLES & OBJECTS //
haveFunQuestions = [
    'What "weird" or "strange" foods do you enjoy?',
    'What is your favorite kitchen appliance?',
    'What foods will you not eat? Why?',
    'What is the craziest thing you\'ve ever eaten?',
    'If you could have any scent in a candle, what would it be?',
    'Do you know how to use chop sticks? How and when did you learn?',
    'What is the minimum number of ply toilet paper is acceptable in your household?',
    'If you could invite anyone, what 3 people would you bring to dinner? Why?',
    'Do you like being surprised? Why or why not?',
    'Do you like to plan everything or go with the flow?',
    'Have you ever experienced a "such a small world" moment?',
    'If you had to be a breed of dog, which do you think best fits your personality?',
    'What is the strangest experience you\'ve ever had?',
    'What superpower would you want to have?',
    'What is your spirit animal? Why?',
    'Would you like to be famous?',
    'If you could be any inanimate object, what would you be and why?',
    'If a crystal ball could tell you anything you would like to know about the future, what would you like to know?',
];
getDeepQuestions = [
    'Who is someone you admire and why?',
    'What was the most significant period of growth in your life?',
    'What are you most looking forward to in the next month? ',
    'What are you most nervous about in the next month? ',
    'What are you looking to accomplish in the next month? ',
    'What situations are you the most nervous in? How do you relieve that feeling?',
    'What attributes do you most value in your friends? ',
    'In what situations do you feel the most confident?',
    'What activities allow you to find flow state?',
    'How would you describe your relationships with your family? ',
    'How would you describe your relationships with your closest friends? ',
    'Do you have any regrets? ',
    'What is your opinion on fate or free will?',
    'Who do you go to for advice? What type of advice or support is the most helpful for you? ',
    'In what aspects of your life are you a leader? ',
    'In what aspects of your life are you a follower? ',
    'Are you comfortable being the center of attention? ',
    'Do you keep in touch with friends who live in a different city? How?',
    'What is the longest friendship you have? ',
    'When was the last time you cried? Why? ',
    'When was the last time you had butterflies in your stomach?',
    'What is a skill you would like to have? What is stopping you from learning that skill?',
    'What makes you unique?',
    'What is one of the greatest life lessons you\'ve learned?',
    'How do you approach decision making?',
    'How do you solve problems?',
    'How do you approach conflict resolution?',
    'What are your core values?',
    'What can you do or change to focus more on your wellbeing?',
    'What is your most treasured possession and why?',
    'What are you passionate about? ',
    'What would be a perfect day for you?',
    'What was the best gift you ever received? Why?',
    'What is your most underrated attribute? Why? ',
    'What is your most overrated attribute? Why? ',
    'What do you value most in a friendship?',
    'For what in your life do you feel most grateful?',
    'What is the hardest physical activity you have ever done?',
    'What is the first happy memory that comes to mind?',
];
thisOrThatQuestions = [
    'Booth or Table?',
    'Caffeine or Alcohol?',
    'Cats or Dogs?',
    'Chocolate or Vanilla?',
    'City or Countryside?',
    'Coffee or Tea?',
    'Cup or Cone?',
    'Handshake or Hug?',
    'Hard or Soft Shell?',
    'Hot or Cold?',
    'Indoors or Outdoors?',
    'Large Gathering or Intimate Group?',
    'Left or Right?',
    'Morning or Night?',
    'Movies or TV?',
    'Ocean or Lake?',
    'Peanut Butter or Jelly?',
    'Savory or Sweet?',
    'Ski or Snowboard?',
    'Snow or Sand?',
    'Sunrise or Sunset?',
    'Waffles or Pancakes?',
    'Window or Aisle?',
    'Shaken or Stirred?',
    'Flat or Folded Pizza?',
];
topQuestions = [
    'Albums',
    'Artists',
    'Books',
    'Cities',
    'Cookies',
    'Desserts',
    'Drinks',
    'Festivals',
    'Foods',
    'Fruits',
    'Holidays',
    'Movies',
    'Restaurants',
    'Sauces',
    'Shows',
    'Songs',
    'Sports',
    'Thanksgiving Sides',
    'Trips',
    'Fast Food',
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

let inputSection = document.querySelector('.inputSection');
let submit = document.querySelector('.submit');
submit.addEventListener('click', addCustom);

// FUNCTIONS //
// Array.prototype.shuffle = function() {
//     let x = this.length, j, temp;
//     while(--x > 0) {
//         j = Math.floor(Math.random() * (x + 1));
//         temp = this[j];
//         this[j] = this[x];
//         this[x] = temp;
//     }
//     return this;
// }

// haveFunRandom = haveFunQuestions.shuffle();

// function startFunGame() {
//     for (x = 0; x < haveFunQuestions.length; x++) {
//     question.innerHTML = haveFunRandom[x];
//     }
// };

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
    question.innerHTML = (`Rank your Top 3: ${topRandom}`);
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

function addCustom(event) {
    event.preventDefault();
    let input = document.querySelector('.input').value;
    customQuestions.push(input);
    document.querySelector('.input').value = '';
}

const home = document.querySelector('.home');
home.addEventListener('click', function() {
    location.reload();
});


// EXTRA //
/* <div class='thumbs'>
<button class='thumbsup'>&#128077;</button>
<button class='thumbsdown'>&#128078;</button>
<button class='reset'>Reset</button>
</div> */

// Thumbs Up Button (Reports Positive Feedback)
// const thumbsUp = document.querySelector('.thumbsup');
// thumbsUp.addEventListener('click', );

// Thumbs Down Button (Reports Negative Feedback) (Pops Item)
// const thumbsDown = document.querySelector('.thumbsdown');
// thumbsDown.addEventListener('click', );

// SOURCES //
// https://www.w3schools.com/jsref/met_loc_reload.asp
// page reset
// https://www.w3schools.com/howto/howto_js_remove_class.asp
// https://www.w3schools.com/howto/howto_js_add_class.asp
// remove // add class
// https://www.w3schools.com/css/css3_mediaqueries_ex.asp
// media queries syntax
// https://developers.google.com/sheets/api/quickstart/js
// google API
// https://www.youtube.com/watch?v=tLxBwSL3lPQ
// fisher yates shuffle