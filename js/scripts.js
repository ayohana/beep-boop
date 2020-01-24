// Back-end Logic
var getNumberRange = function(input) {
  var numbers = [];
  for (var i = 0; i <= input; i++) {
    numbers.push(i);
  }
  return numbers;
}


// Front-end Logic
$(document).ready(function() {
  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());

    console.log(getNumberRange(userInput));
    
  })
});