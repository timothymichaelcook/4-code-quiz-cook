// Function declaration displayHighScores 
function displayHighScores() {
  // Declaring variable highScores, assigning to high scores in local variable
  var highScores = JSON.parse(window.localStorage.getItem('highScores'))

  // Sorting high scores with sort array method
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  // Iterate high scores with for loop 
  for (var i=0; i < highScores.length; i += 1) {
    // Using create element method, create HTML list tags for each high score
    var liTag = document.createElement('li')
    // Fill in list tag content with returned value from highScores variable
    liTag.textContent = highScores[i].initials + ' - ' + highScores[i].score;
    // Declare olEl (Ordered list element) variable, assign to document object high score with getElementById method
    var olEl = document.getElementById('highsScores');
     // Using append child method, add list elements to HTML and DOM
    olEl.appendChild(liTag);
 }
}

// Function declaration clearHighScores which will 
function clearHighScores() {
  // Remove high scores elements in local storage of browser
  window.localStorage.removeItem('highScores');
  // Reload browser window
  window.location.reload();
}
// Event listener will run clearHighScores function when click event occurs
document.getElementById('clear').onclick = clearHighScores;

// Call function to display high scores when page loads
displayHighScores();