// Back-end Logic
var getNumberRange = function(input) {
  var numberRange = [];
  for (var i = 0; i <= input; i++) {
    numberRange.push(i.toString());
  }
  return numberRange;
}

var checkName = function(name) {
  return (name === "" ? name = "Dave" : name);
}

var checkNumber = function(number) {
  return (isNaN(number) ? number = 3 : number);
}

var checkAndReplace123 = function(rangeArray, inputName) {
  var ones = /[1]/gm;
  var twos = /[2]/gm;
  var threes = /[3]/gm;

  for (var j = 0; j < rangeArray.length; j++) {
    if (rangeArray[j].match(threes)) {
      rangeArray[j] = "I'm sorry, " + inputName + ". I'm afraid I can't do that.";
    } else if (rangeArray[j].match(twos)) {
      rangeArray[j] = "Boop!";
    } else if (rangeArray[j].match(ones)) {
      rangeArray[j] = "Beep!";
    } else {
      continue;
    }
  }
  return rangeArray;
}

var reverseOutput = function(outputArray) {
  return outputArray.reverse();
}

// Front-end Logic
$(document).ready(function() {
  $("#buttonOriginal").click(function(event) {
    event.preventDefault();
    var userName = checkName($("#userName").val());
    var userInput = checkNumber(parseInt($("#userInput").val()));
    var rangeOfNumbers = getNumberRange(userInput);
    var output = checkAndReplace123(rangeOfNumbers, userName);
    $("#output").text(output.join(", ")).show();
  })

  $("#buttonReverse").click(function(event) {
    event.preventDefault();
    var userName = checkName($("#userName").val());
    var userInput = checkNumber(parseInt($("#userInput").val()));
    var rangeOfNumbers = getNumberRange(userInput);
    var output = reverseOutput(checkAndReplace123(rangeOfNumbers, userName));
    $("#output").text(output.join(", ")).show();
  })
});