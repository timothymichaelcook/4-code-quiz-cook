
// VARIABLES SECTION
// Declare quiz variables
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// Declare DOM element variables using getElementById method
var questionsElement = document.getElementById('questions');
var timerElement = document.getElementById('time');
var choicesElement = document.getElementById('choices');
var submitButton = document.getElementById('submit');
var startButton = document.getElementById('start');
var initialsElement = document.getElementById('initials');
var feedbackElement = document.getElementById('feedback');

// FUNCTIONS SECTION
// Function that starts quiz
function startQuiz() {
  // Declared startScreen variable, assigned to DOM element start-screen
  var startScreenElement = document.getElementById('start-screen')
  // Setting CSS attributes for start screen element with class of hide
  startScreenElement.setAttribute('class', 'hide');

  // Setting CSS attributes for start screen element with class of unhide
  questionsElement.removeAttribute('class');

  // Declare timer variable and set it to 1000 milliseconds
  timerId = setInterval(clockTick, 1000);

  //Displays starting time
  timerElement.textContent = time;

  //Call getQuestions function
  getQuestions();
}

function getQuestions() {

}

function questionClick(event) {
  
}

// Declare clockTick function
function quizEnd() {
  // Stop timer because quiz has ended
  clearInterval(timerId);

  // Display high scores screen, declare end screen variable and assign to DOM element end-screen
  var endScreenElement = document.getElementById('end-screen');
  endScreenElement.removeAttribute('class');

  // Display final score
  var finalScoreElement = document.getElementById('final-score');
  finalScoreElement.textContent = time;

  // Hide questions
  questionsElement.setAttribute('class', 'hide');
}

// Declare clockTick function
function clockTick() {
  //Decrease time by one unit
  time--;
  //Assign text content of timerElement variable to time variable
  timerElement.textContent = time;

  // Conditional checking if time is zero
  if (time <= 0) {
    // Call quizEnd function
    quizEnd();
  }
}

// Declare saveHighScore function
function saveHighScore() {
  // Declare initials variable, assign to initialElement variable
  var initials = initialsElement.value.trim();

  // Conditional to check initials isn't empty/null
  if (initials !== '') {
    var highScores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    // Declare newScore object for current user
    var newScore = {
      score: time,
      initials: initials,
    };
    
    // Save newScore variable to local storage
    highScores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highScores));

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
startButton.onclick = startQuiz;

// User clicks this button to save score
submitButton.onclick = saveHighScore;

// User clicks on button containing choices
choicesElement.onclick = questionClick;

// User enters initials, saves when enter key is pressed
initialsElement.onkeyup = checkForEnter;