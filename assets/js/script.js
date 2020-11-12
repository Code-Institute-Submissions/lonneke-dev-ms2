$(document).ready(function() {
})
// Instructions modal
var modal = document.getElementById('instructionsModal');
var btn = document.getElementById('instructions');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

