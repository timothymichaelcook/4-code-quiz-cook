
// VARIABLES SECTION
// Declare quiz variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// Declare DOM element variables using getElementById method
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');

// FUNCTIONS SECTION
// Function that starts quiz
function startQuiz() {
  // Declared startScreen variable, assigned to DOM element start-screen
  var startScreenEl = document.getElementById('start-screen')
  // Setting CSS attributes for start screen element with class of hide
  startScreenEl.setAttribute('class', 'hide');

  // Setting CSS attributes for start screen element with class of unhide
  questionsEl.removeAttribute('class');

  // Declare timer variable and set it to 1000 milliseconds
  timerId = setInterval(clockTick, 1000);

  //Displays starting time
  timerEl.textContent = time;

  //Call getQuestions function
  getQuestion();
}

// Declare getQuestions function
function getQuestion() {
  // Declare variable, assign to object in questions array
  var currentQuestion = questions[currentQuestionIndex];

  // Update title element with question via text content method
  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title;

  // Clear HTML displaying question
  choicesEl.innerHTML = '';

  // Iterate choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    //Create and set attributes for buttons with choices
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    // Append element to DOM
    choicesEl.appendChild(choiceNode);
  }
}

// Declare questionClick function
function questionClick(event) {
  var buttonEl = event.target;

  // Check if clicked element is a choice
  if (!buttonEl.matches('.choice')) {
    return;
  }
  // Check if choice is correct or wrong
  if (buttonEl.value !== questions[currentQuestionIndex].answer) {
    // Time penalty of 5 seconds, based on instructions on home page
    time -= 15;

    if (time < 0) {
      time = 0;
    }
    
    //Display updated time
    timerEl.textContent = time;

    feedbackEl.textContent = 'Wrong!';

  } else {
      feedbackEl.textContent = 'Correct';
  }

  feedbackEl.setAttribute('class', 'feedback');
  setTimeout(function() {
    feedbackEl.setAttribute('class', 'feedback hide');
  }, 1000);
  
  currentQuestionIndex++;

  if (time <= 0 || currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

// Declare clockTick function
function quizEnd() {
  // Stop timer because quiz has ended
  clearInterval(timerId);

  // Display high scores screen, declare end screen variable and assign to DOM element end-screen
  var endScreenEl = document.getElementById('end-screen');
  endScreenEl.removeAttribute('class');

  // Display final score
  var finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = time;

  // Hide questions
  questionsEl.setAttribute('class', 'hide');
}

// Declare clockTick function
function clockTick() {
  //Decrease time by one unit
  time--;
  //Assign text content of timerElement variable to time variable
  timerEl.textContent = time;

  // Conditional checking if time is zero
  if (time <= 0) {
    // Call quizEnd function
    quizEnd();
  }
}

// Declare saveHighScore function
function saveHighScore() {
  // Declare initials variable, assign to initialElement variable
  var initials = initialsEl.value.trim();

  // Conditional to check initials isn't empty/null
  if (initials !== '') {
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    // Declare newScore object for current user
    var newScore = {
      score: time,
      initials: initials,
    };
    
    // Save newScore variable to local storage
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));

    // Redirect to highscores.html HTML file
    window.location.href = 'highscores.html';
  }

  
}
// Declare checkForEnter function passing an event as a parameter
function checkForEnter(event) {
  // Conditional if statement checking if enter key is pressed
  if (event.key === 'Enter') {
    // Call saveHighScore function
    saveHighScore();
  }
}

//EVENT LISTENER SECTION
// User clicks this button to start quiz
startBtn.onclick = startQuiz;

// User clicks this button to save score
submitBtn.onclick = saveHighScore;

// User clicks on button containing choices
choicesEl.onclick = questionClick;

// User enters initials, saves when enter key is pressed
initialsEl.onkeyup = checkForEnter;