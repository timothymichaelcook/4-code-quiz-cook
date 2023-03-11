// Function declaration displayHighScores 
function printHighscores() {
  // Declaring variable highScores, assigning to high scores in local variable
  var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

  // Sorting high scores with sort array method
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });
  
  // Iterate high scores with for loop 
  for (var i=0; i < highscores.length; i += 1) {
    // Using create element method, create HTML list tags for each high score
    var liTag = document.createElement('li')
    // Fill in list tag content with returned value from highScores variable
    liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;
    // Declare olEl (Ordered list element) variable, assign to document object high score with getElementById method
    var olEl = document.getElementById('highscores');
     // Using append child method, add list elements to HTML and DOM
    olEl.appendChild(liTag);
 }
}

// Function declaration clearHighScores which will 
function clearHighscores() {
  // Remove high scores elements in local storage of browser
  window.localStorage.removeItem('highscores');
  // Reload browser window
  window.location.reload();
}
// Event listener will run clearHighScores function when click event occurs
document.getElementById('clear').onclick = clearHighscores;

// Call function to display high scores when page loads
printHighscores();