$(document).ready(function() {
  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    console.log(userInput);
  })
});