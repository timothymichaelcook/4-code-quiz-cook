// Initializing selectors
var tableEl = document.querySelector("#table");
var clearEl = document.querySelector("#clear");


// Adding Event Listener to clear ID element
clearEl.addEventListener("click", function() {
  localStorage.removeItem("userData");
  renderTable();
});


// Render Table Function
function renderTable() {
  //Clear Table
  removeChildElements(tableEl);
  //Create Table Elements
  var row1 = document.createElement("tr");
  var tableHeader1 = document.createElement("th");
  var tableHeader2 = document.createElement("th");
  tableHeader1.textContent = "Initials";
  tableHeader2.textContent = "Score";
  tableHeader1.setAttribute("class", "p-2 border border-dark");
  tableHeader2.setAttribute("class", "p-2 border border-dark");
  tableEl.appendChild(row1);
  tableEl.appendChild(tableHeader1);
  tableEl.appendChild(tableHeader2);

  //Parsing local storage
  if(localStorage.getItem("userData") !== null) {
    var userData = JSON.parse(localStorage.userData);

    for (var i = 0; i < userData.length; i++) {
      var initial = userData[i].initials;
      var score = userData[i].score;

      var tableRow = document.createElement("tr");
      var tableDataInitials = document.createElement("td");
      var tableDataScore = document.createElement("td");

      tableDataInitials.textContent = initial;
      tableDataInitials.setAttribute("class", "p-2 border border-dark");
      tableDataScore.textContent = score;
      tableDataScore.setAttribute("class", "p-2 border border-dark");

      tableRow.appendChild(tableDataInitials);
      tableRow.appendChild(tableDataScore);
      tableEl.appendChild(tableRow);
    };
  };
};

// Remove children elements from parent table
function removeChildElements(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};


// Loads new table when page refreshes
renderTable();