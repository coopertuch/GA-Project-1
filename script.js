let haveFunQuestions = [
  "What is the craziest thing you've ever eaten?",
  "If you could have any scent candle, what would it be?",
  "What is the hardest physical activity you have ever done?",
  "If you could bring any 3 people to dinner, dead or alive, who would they be?",
  "What were your first impressions of the people you're with?",
  "What is one of your favorite ongoing jokes between your friends?",
  "If you were to audition for masterchef, what meal would you make?",
  "Let someone pick one photo from any social media - what's the backstory to that photo?",
  'Have you ever experienced a "this is such a small world" moment?',
  "If you had to be a breed of dog, which do you think best fits your personality?",
  "If you could be any animal, what type would you be?",
  "If you could have any superpower, what would that be?",
  "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
  'If you could "unknow" one thing you know, what would it be?',
  "How ripe do you like your bananas?",
  "If you could be invisible for one hour, where would you go and what would you do?",
  "If you were to perform in the circus, what would you do?",
  "If you could call yourself at any point in the past and speak for 1 minute, what would you say?",
  "What's your favorite quote?",
  "What's the last song that was playing in your head?",
  "What's your dream vacation?",
  "If you changed your name, what would it be?",
  "How toasty do you like your toast?",
  "What % cacao do you prefer?",
  "When's the hardest you've laughed?",
  "What are 3 adjectives you would use to describe yourself?",
  "If you were on mainstage and had to sing 1 song to an entire festival, what would you sing?"
];
let getDeepQuestions = [
  "Who is someone you admire?",
  "What was the most significant period of growth in your life?",
  "If you have a day to yourself, how do you spend it?",
  "What are you most looking forward to in the next month?",
  "What are you most nervous about in the next month?",
  "What are you looking to accomplish in the next month?",
  "What situations are you the most nervous in? How do you relieve that feeling?",
  "What attributes do you most value in your friends?",
  "In what situations do you feel the most confident?",
  "What activities allow you to find flow state?",
  "How would you describe your relationships with your family?",
  "How would you describe your relationships with your closest friends?",
  "Do you have any regrets?",
  "What is your opinion on fate or free will?",
  "Who do you go to for advice? What type of advice or support is the most helpful for you? ",
  "In what aspects of your life are you a leader? ",
  "In what aspects of your life are you a follower? ",
  "Are you comfortable being the center of attention? ",
  "Do you keep in touch with friends who live in a different city? How?",
  "What is the longest friendship you have? ",
  "When was the last time you cried?",
  "When was the last time you had butterflies in your stomach?",
  "What is a skill you would like to have? What is stopping you from learning that skill?",
  "What makes you unique?",
  "What is one of the greatest life lessons you've learned?",
  "How do you approach decision making?",
  "How do you solve problems?",
  "How do you approach conflict resolution?",
  "What are your core values?",
  "What can you do or change to focus more on your wellbeing?",
  "What is your most treasured possession?",
  "What are you passionate about? ",
  "What would be a perfect day for you?",
  "What was the best gift you ever received?",
  "What is your most underrated attribute?",
  "What is your most overrated attribute?",
  "What do you value most in a friendship?",
  "For what in your life do you feel most grateful?",
  "What is the first happy memory that comes to mind?",
  "What is your idea of happiness?",
  "How do you relax?",
  "How do you have fun?",
  "What do you think is the point of a relationship?",
  "What part of yourself are you working on?",
  "What part of yourself do you love?",
  "How do you practice mental health?"
];
let thisOrThatQuestions = [
  "Booth or Table?",
  "Caffeine or Alcohol?",
  "Cats or Dogs?",
  "Chocolate or Vanilla?",
  "City or Countryside?",
  "Coffee or Tea?",
  "Cup or Cone?",
  "Handshake or Hug?",
  "Hard or Soft Shell?",
  "Hot or Cold?",
  "Indoors or Outdoors?",
  "Large Gathering or Intimate Group?",
  "Left or Right?",
  "Morning or Night?",
  "Movies or TV?",
  "Ocean or Lake?",
  "Peanut Butter or Jelly?",
  "Savory or Sweet?",
  "Ski or Snowboard?",
  "Snow or Sand?",
  "Sunrise or Sunset?",
  "Waffles or Pancakes?",
  "Window or Aisle?",
  "Shaken or Stirred?",
  "Flat or Folded Pizza?",
  "Deep Dish or Thin Crust?",
  "Sleep In or Up Early?"
];
let topQuestions = [
  "Albums",
  "Artists",
  "Books",
  "Cities",
  "Cookies",
  "Desserts",
  "Drinks",
  "Festivals",
  "Foods",
  "Fruits",
  "Holidays",
  "Movies",
  "Restaurants",
  "Sauces",
  "Shows",
  "Songs",
  "Sports",
  "Thanksgiving Sides",
  "Trips",
  "Fast Food",
  "Candy"
];
let customQuestions = [];

const question = document.querySelector(".question");

const haveFun = document.querySelector(".fun");
haveFun.addEventListener("click", startFunGame);

const getDeep = document.querySelector(".deep");
getDeep.addEventListener("click", startDeepGame);

const thisOrThat = document.querySelector(".thisorthat");
thisOrThat.addEventListener("click", startThisGame);

const topThree = document.querySelector(".top");
topThree.addEventListener("click", startTopGame);

Array.prototype.random = function() {
  let x = this.length,
    j,
    temp;
  while (--x > 0) {
    j = Math.floor(Math.random() * (x + 1));
    temp = this[j];
    this[j] = this[x];
    this[x] = temp;
  }
  return this;
};

let currentFunQuestion = 0;
let currentDeepQuestion = 0;
let currentThisQuestion = 0;
let currentTopQuestion = 0;
haveFunRandom = haveFunQuestions.random();
getDeepRandom = getDeepQuestions.random();
thisOrThatRandom = thisOrThatQuestions.random();
topRandom = topQuestions.random();

function startFunGame() {
  question.innerHTML = " ";
  question.innerHTML = haveFunRandom[currentFunQuestion];
  currentFunQuestion++;
  if (question.innerHTML === "undefined") {
    question.innerHTML = "Keep clicking!";
    currentFunQuestion = 0;
  }
}

function startDeepGame() {
  question.innerHTML = " ";
  question.innerHTML = getDeepRandom[currentDeepQuestion];
  currentDeepQuestion++;
  if (question.innerHTML === "undefined") {
    question.innerHTML = "Keep clicking!";
    currentDeepQuestion = 0;
  }
}

function startThisGame() {
  question.innerHTML = " ";
  question.innerHTML = thisOrThatRandom[currentThisQuestion];
  currentThisQuestion++;
  if (question.innerHTML === "undefined") {
    question.innerHTML = "Keep clicking!";
    currentThisQuestion = 0;
  }
}
function startTopGame() {
  question.innerHTML = " ";
  question.innerHTML = `Rank your top 3: ${topRandom[currentTopQuestion]}`;
  currentTopQuestion++;
  if (question.innerHTML === `Rank your top 3: undefined`) {
    question.innerHTML = "Keep clicking!";
    currentTopQuestion = 0;
  }
}

// function startCustomGame() {
//     inputSection.classList.remove('off');
//     inputSection.classList.add('on');
//     submit.classList.remove('off');
//     submit.classList.add('on');
//     for (let i = 0; i < customQuestions.length; i++) {
//     customRandom = customQuestions[Math.floor(Math.random()*customQuestions.length)];
//     question.innerHTML = customRandom;
//     }
// }

// function addCustom(event) {
//     event.preventDefault();
//     let input = document.querySelector('.input').value;
//     customQuestions.push(input);
//     document.querySelector('.input').value = '';
// }

const home = document.querySelector(".home");
home.addEventListener("click", function() {
  location.reload();
});
