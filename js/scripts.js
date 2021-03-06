// Back-end Logic
var checkName = function(name) {
  return (name === "" ? name = "Dave" : name);
}

var checkNumber = function(number) {
  return (isNaN(number) ? number = 3 : number);
}

var checkAndReplace = function(inputName, inputNumber) {
  inputName = checkName(inputName);
  inputNumber = checkNumber(inputNumber);
  var rangeArray = [];
  var ones = /[1]/gm;
  var twos = /[2]/gm;
  var threes = /[3]/gm;

  for (var j = 0; j <= inputNumber; j++) {
    var k = j.toString();
    if (k.match(threes)) {
      rangeArray[j] = "I'm sorry, " + inputName + ". I'm afraid I can't do that.";
    } else if (k.match(twos)) {
      rangeArray[j] = "Boop!";
    } else if (k.match(ones)) {
      rangeArray[j] = "Beep!";
    } else {
      rangeArray[j] = k;
    }
  }
  return rangeArray;
}

var game = function() {
  event.preventDefault();
  $("#output").show();
  return checkAndReplace($("#userName").val(), parseInt($("#userNumber").val()));
}

// Front-end Logic
$(document).ready(function() {
  $("#buttonOriginal").click(function(event) {
    $("#output").text(game().join(", "));
  })

  $("#buttonReverse").click(function(event) {
    $("#output").text(game().reverse().join(", "));
  })
});