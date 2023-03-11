
// Declare variables section
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





// Declare functions section









// User clicks this button to start quiz
startButton.onclick = startQuiz;

// User clicks this button to save score
submitButton.onclick = saveHighScore;

// User clicks on button containing choices
choicesElement.onclick = questionClick;

// User enters initials, saves when enter key is pressed
initialsElement.onkeyup = checkForEnter;