var modal = document.getElementById("instructionsModal");
var button = document.getElementById("instructions");
var span = document.getElementsByClassName("close")[0];

// Opens the instructions modal
button.onclick = function() {
  modal.style.display = "block";
};

// Closes the instructions modal
span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};