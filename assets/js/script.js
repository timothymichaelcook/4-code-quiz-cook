// Declaring variables and assigning to document objects via the querySelector method
const startButtonEl = document.querySelector("#start");
const timerEl = document.querySelector("#timer");
const questionnaireEl = document.querySelector("#questionnaire");
const resultEl = document.querySelector("#result");


//this is the quiz object that contains different properties and methods
let quiz = {
    //properties
    timer: "30",
    score: 0,
    //this array will store users initials and scores
    userData: [],
    //this array holds question objects that store both the question and answer
    questionData: [
        {
            question: "Maximum digits in Binary number system are?",
            answer: "Two"
        },

        {
            question: "Which is a software?",
            answer: "Windows"
        },
        {
            question: "Which of the following is not a application software?",
            answer: "MS Word"
        },
        {
            question: "One KB is equal to?",
            answer: "1024 bytes"
        },
        {
            question: "Which is an example of a string?",
            answer: '"Hello"'
        },
        {
            question: "One Mega Byte is equal to?",
            answer:   "1024 Kilo bytes"
        },
        {
            question: "Which of the following is a database application?",
            answer: "Dbase"
        },
        {
            question: "Which kind of statements allow you to make decisions in your code?",
            answer: "if/else"
        },
        {
            question: "The two kinds of main memory are?",
            answer: "ROM and RAM"
        },
        {
            question: "Monitor of a computer is a?",
            answer: "Output device"
        },
        {
            question: "Which one of the following does not fall under the category of secondry storage device?",
            answer: "Hard disk"
        },
        {
            question: "The unit in cpu which performs arithmatic and logical operations is?",
            answer: "ALU"
        },
        {
            question: "Full form of BMP?",
            answer: "Bit Map Picture"
        },
        {
            question: "Which is an input device?",
            answer: "Web camera"
        },
        {
            question: "What is Computer?",
            answer: "Electronic Computing Machine"
        }
    ],
    //methods
    //this starts the quiz timer and stops the timer when it hits 0
    start: function() {
        timerInterval = setInterval(function() {
            quiz.timer--;
            timerEl.textContent = "Timer: " + quiz.timer;
            if (quiz.timer < 1){
                timerEl.textContent = "Timer: 0";
                clearInterval(timerInterval);
                quiz.end();
            };
        }, 1000);
    },
    //this changes the ui to present the user with a prompt to enter in their initials
    end: function() {
        //This removes all nodes from the jumbotron
        removeAllChildNodes(questionnaireEl);
        //this removes the results of the previous question
        removeAllChildNodes(resultEl);
        //This creates elements for the end of the quiz
        let formEl = document.createElement("form");
        let h1El = document.createElement("h1");
        let labelEl = document.createElement("label");
        let inputEl = document.createElement("input");
        let buttonEl = document.createElement("button");
        //this creates text for the elements
        h1El.textContent = "Great job! The quiz has ended.";
        labelEl.textContent = "Please submit your initials: ";
        buttonEl.textContent = "Submit";
        //sets attributes to the button
        buttonEl.setAttribute("type", "submit");
        buttonEl.setAttribute("value", "Submit");
        //sets style for the new elements
        labelEl.setAttribute("class", "m-2");
        buttonEl.setAttribute("class", "btn btn-dark m-2")
        //adds ids to important elements
        inputEl.setAttribute("id", "questionnaire-input")
        buttonEl.setAttribute("id", "questionnaire-submit")
        //appends the elements to the jumbotron 
        questionnaireEl.appendChild(formEl);
        questionnaireEl.appendChild(h1El);
        questionnaireEl.appendChild(labelEl);
        questionnaireEl.appendChild(inputEl);
        questionnaireEl.appendChild(buttonEl);
        //grabbing the new elements by ids
        let questionnaireSubmit = document.querySelector("#questionnaire-submit");
        let questionnaireInput = document.querySelector("#questionnaire-input");
        //user clicks submit button
        questionnaireSubmit.addEventListener("click", function() {
            //trim the access from user input
            let inputText = questionnaireInput.value.trim();
            //return from function early if submitted inputText is blank
            if (inputText === "") {
                return;
            };
            //push user's initials and quiz score to userData array
        quiz.userData.push({initials:inputText,
            score:quiz.score});
            //this runs the storeData function
            storeData();
            //reset input to blank
            questionnaireInput.value = "";
            //change to high score html
            window.location.replace("./highscore.html");
        });
        //allows users to press enter to submit
        questionnaireInput.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("questionnaire-submit").click();
            }
        });
    },
    //this resets the timer and score when the quiz resets
    reset: function() {
        timerEl.textContent = "Timer: " + quiz.timer;
        quiz.score = 0;
    },
    //this generates a new question and changes the UI to present the new question
    generateQuestion: function() {
        //this removes the elements in the jumbotron
        removeAllChildNodes(questionnaireEl);
        //These create new elements for the questionnaire
        let newH1 = document.createElement("h1");
        let button1 = document.createElement("button");
        let button2 = document.createElement("button");
        let button3 = document.createElement("button");
        let button4 = document.createElement("button");
        //this styles on the new elements
        button1.setAttribute("class", "btn btn-dark m-2 w-50");
        button2.setAttribute("class", "btn btn-dark m-2 w-50");
        button3.setAttribute("class", "btn btn-dark m-2 w-50");
        button4.setAttribute("class", "btn btn-dark m-2 w-50");
        //This stores the randomly grabbed question 
        let question = quiz.getQuestion();
        //This stores answer to question grabbed
        let answer = question.answer;
        //This grabs 3 random answers to place in the button options
        let incorrectAnswer1 = quiz.getQuestion();
        let incorrectAnswer2 = quiz.getQuestion();
        let incorrectAnswer3 = quiz.getQuestion();
        //This stores the answers in an array
        let answerArray = [question.answer, incorrectAnswer1.answer, incorrectAnswer2.answer, incorrectAnswer3.answer]
        //This randomly shuffles the array
        shuffle(answerArray);
        //Attach the answer text to each button
        button1.textContent = answerArray[0]
        button2.textContent = answerArray[1]
        button3.textContent = answerArray[2]
        button4.textContent = answerArray[3]
        //adds id's to correct answer buttons
        if(button1.textContent === answer){
            button1.setAttribute("id", "correctAnswer");
        };
        if(button2.textContent === answer){
            button2.setAttribute("id", "correctAnswer");
        };
        if(button3.textContent === answer){
            button3.setAttribute("id", "correctAnswer");
        };
        if(button4.textContent === answer){
            button4.setAttribute("id", "correctAnswer");
        };
        //adds an event listener to each button with the answer info
        button1.addEventListener("click", this.checkAnswer);
        button2.addEventListener("click", this.checkAnswer);
        button3.addEventListener("click", this.checkAnswer);
        button4.addEventListener("click", this.checkAnswer);
        //attaches question text to the h1 element
        newH1.textContent = question.question;
        //append h1 to the jumbotron
        questionnaireEl.appendChild(newH1);
        //appends questions to the jumbotron
        questionnaireEl.appendChild(button1);
        questionnaireEl.appendChild(button2);
        questionnaireEl.appendChild(button3);
        questionnaireEl.appendChild(button4);
    },
    //this checks if the selected answer is correct or incorrect. This will play a correct sound and add a point to the users score, or play an incorrect sound and deduct time from the timer. 
    checkAnswer: function(event) {
        //this checks if the timer still has time left
        if(quiz.timer > 0){
            //this grabs the correct answer by id
            let x = document.getElementById("correctAnswer");
            //checks if this is the correct answer
            if(event.target.innerHTML === x.textContent){
                //this adds one to the score
                quiz.score++;
                //this will display the result of the answer chosen
                quiz.displayResult("correct");
                //this will generate the next question
                return quiz.generateQuestion();
            } else {
                //this will display the result of the answer chosen
                quiz.displayResult("incorrect");
                //this will generate the next question
                return quiz.generateQuestion();
            };
        //this will display the timer as 0
        } else {
            quiz.timer = 0;
            timerEl.textContent = "Timer: " + quiz.timer;
        };
    },
    //this randomly chooses a question from the questionData array
    getQuestion: function() {
        let getQuestionDataIndex = Math.floor(Math.random()*quiz.questionData.length);
        return quiz.questionData[getQuestionDataIndex];
    },
    //this will display the result of the answer either as correct or incorrect
    displayResult: function(result) {
        //remove previous result
        removeAllChildNodes(resultEl);
        //create h1 elements
        let h3Correct = document.createElement("h3");
        let h3Incorrect = document.createElement("h3");
        //put text in elements
        h3Correct.textContent = "Correct!";
        h3Incorrect.textContent = "Wrong!";
        //add bootstrap class style to elements
        h3Correct.setAttribute("class", "text-auto");
        h3Incorrect.setAttribute("class", "text-auto");
        //this runs if the answer is correct
        if(result === "correct"){
        //appends to the results div a "Correct"
        resultEl.appendChild(h3Correct);
        //resultEl.appendChild(hrEl);
        };
        //this runs if the answer is incorrect
        if(result === "incorrect"){
        //appends to the results div a "Wrong"
        resultEl.appendChild(h3Incorrect);
        //resultEl.appendChild(hrEl);
        };
        //returns the function
        return;
    }
}
//adds an event listener to the start quiz button
startButtonEl.addEventListener("click", function() {
    //this starts the quiz timer
    quiz.start();
    //this generates a question and presents it to the UI
    quiz.generateQuestion();
});
//store userData to local storage
function storeData() {
    //this item is stored as a JSON string
    localStorage.setItem("userData", JSON.stringify(quiz.userData));
};
//Tutorial on how to shuffle an array https://javascript.info/task/shuffle#:~:text=Write%20the%20function%20shuffle(array,%2C%202%5D%20%2F%2F%20...
function shuffle(array) {
    //this iterates through the array
    for (let i = array.length - 1; i > 0; i--) {
        //this randomly changes the index of the array
      let j = Math.floor(Math.random() * (i + 1));
      //this in a sense shuffles the array by index
      [array[i], array[j]] = [array[j], array[i]];
    };
  };
//Tutorial on how to remove all children elements https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeAllChildNodes(parent) {
    //this runs until the node has children
    while (parent.firstChild) {
        //this removes the children
        parent.removeChild(parent.firstChild);
    };
};
//initializes localStorage settings and data
function init(){
    //Get stored initials and high scores from local storage
    //Parsing the JSON string to an object
    let userData = JSON.parse(localStorage.getItem("userData"));
    //if initials and high scores were retrieved from localStorage, update the initials and high scores array to it
    if(userData !== null) {
        quiz.userData = userData;
    };
    //gets the timer settings from local storage
    let changedTimer = (localStorage.getItem("timer"));
    //if the timer is not null this will set the quiz timer to the changed setting
    if(changedTimer !== null){
        quiz.timer = changedTimer;
    }
    quiz.reset();
};


//this initializes the quiz page
init();